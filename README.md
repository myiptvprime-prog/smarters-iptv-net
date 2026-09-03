# Smarters IPTV Germany website

Static Astro website for `smarters-iptv.net`, built for Germany in German.

## Upload to GitHub / Vercel

Upload the project source files, not `dist` and not `node_modules`.

Required files and folders:

- `public/`
- `src/`
- `astro.config.mjs`
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `tsconfig.json`
- `vercel.json`
- `.gitignore`

Vercel should use:

- Install command: `pnpm install`
- Build command: `pnpm build`
- Output directory: `dist`

After deployment, submit this sitemap in Google Search Console:

`https://smarters-iptv.net/sitemap-index.xml`
