# Flash Your Things website

Marketing site for [Flash Your Things](https://github.com/flashyourthings): IoT device assembly, flashing, provisioning and logistics.

Built with Next.js (static export), Tailwind CSS v4 and Framer Motion.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

The static site is written to `out/`.

## Deployment

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.

The workflow passes the Pages base path (e.g. `/fyt-website`) to the build as `PAGES_BASE_PATH`. To preview a production build under that path locally:

```bash
PAGES_BASE_PATH=/fyt-website npm run build
```
