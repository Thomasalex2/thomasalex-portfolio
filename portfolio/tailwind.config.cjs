/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#0E4D3A', light: '#19855f' },
        charcoal: '#121212',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Roboto', 'sans-serif']
      },
      boxShadow: {
        'glow-forest': '0 0 0 4px rgba(30, 157, 116, 0.25)'
      }
    },
  },
  plugins: [],
}


