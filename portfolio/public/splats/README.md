# Gaussian Splat assets

Do **not** commit raw multi-hundred-MB `.ply` files into this repo.

## Recommended workflow

1. Open your Gaussian Splat `.ply` in [SuperSplat](https://playcanvas.com/supersplat/editor) (or Spark’s compress tooling).
2. Export a compressed web format — prefer **`.spz`** or compressed PLY.
3. Aim for roughly **&lt; 30–50 MB** for a portfolio demo. Larger scenes should be hosted on a CDN (Cloudflare R2, Bunny, S3, etc.).
4. Place the file here, e.g. `public/splats/your-scene.spz`.
5. Update `aerial.splat.url` in [`src/data/content.js`](../../src/data/content.js):

```js
splat: {
  url: '/splats/your-scene.spz',
  poster: '/images/aerial/your-poster.jpg',
  // ...
}
```

## Current default

Until you add your own file, the site loads Spark’s public demo splat:

`https://sparkjs.dev/assets/splats/butterfly.spz`

That proves the viewer works end-to-end without bloating the git repo.

## Images & video

Put real photos in `public/images/aerial/` using the filenames below, then update the matching path in `src/data/content.js` from `.svg` to `.jpg` (or `.webp`).

| Asset | Filename | Where it appears |
| --- | --- | --- |
| Cover | `aerial-cover.jpg` | Main site project card + aerial hero poster |
| Hero video | `public/videos/aerial/galway-hero.mp4` | Looping aerial hero background |
| Gallery | `gallery-property.jpg` | Aerial “What I capture” |
| Gallery | `gallery-construction.jpg` | Aerial “What I capture” |
| Gallery | `gallery-roof.jpg` | Aerial “What I capture” |
| Gallery | `gallery-landscape.jpg` | Aerial “What I capture” |
| Showreel poster | `showreel-poster.jpg` | Shown before / without YouTube |
| Showreel video | set `aerial.showreel.youtubeId` | YouTube ID only (after `v=`) |
| 3D poster | `splat-poster.jpg` | Before “Load 3D scene” |
| 3D model | `your-scene.spz` in this folder | Set `aerial.splat.url` to `/splats/your-scene.spz` |
