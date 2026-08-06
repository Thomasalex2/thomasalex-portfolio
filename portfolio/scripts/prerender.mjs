/**
 * Build-time prerender for SEO.
 * After `vite build`, boots the dist folder, renders key routes in headless Chrome,
 * and overwrites the HTML files with fully rendered markup.
 */
import { createServer } from 'http'
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import handler from 'serve-handler'
import puppeteer from 'puppeteer'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const PORT = 4179

const routes = [
  { path: '/', out: 'index.html', waitFor: '#about' },
  // Serve aerial.html while keeping URL as /aerial so React Router matches
  { path: '/aerial', out: 'aerial.html', waitFor: '#aerial-capture' },
]

function startServer() {
  const server = createServer((request, response) => {
    const url = request.url?.split('?')[0] || '/'
    // Mirror Netlify: /aerial serves aerial.html while the browser path stays /aerial
    if (url === '/aerial' || url === '/aerial/') {
      request.url = '/aerial.html'
    } else if (url === '/') {
      request.url = '/index.html'
    }
    return handler(request, response, {
      public: distDir,
      cleanUrls: false,
    })
  })

  return new Promise((resolve) => {
    server.listen(PORT, '127.0.0.1', () => resolve(server))
  })
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 720 })

  // Block fonts/analytics so CI builds stay fast and offline-friendly
  await page.setRequestInterception(true)
  page.on('request', (req) => {
    const type = req.resourceType()
    if (type === 'font' || type === 'media') {
      req.abort()
    } else {
      req.continue()
    }
  })

  const url = `http://127.0.0.1:${PORT}${route.path}`
  console.log(`Prerendering ${route.path} -> ${route.out}`)

  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
  await page.waitForSelector(route.waitFor, { timeout: 20000 })
  // Let late layout/effects settle
  await new Promise((r) => setTimeout(r, 300))

  const html = await page.content()
  const outPath = join(distDir, route.out)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html, 'utf8')
  console.log(`  wrote ${route.out} (${Math.round(html.length / 1024)} KB)`)

  await page.close()
}

async function main() {
  const server = await startServer()
  let browser

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    })

    for (const route of routes) {
      await prerenderRoute(browser, route)
    }

    console.log('Prerender complete.')
  } finally {
    if (browser) await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
