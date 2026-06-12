---
name: screenshot-embeds
description: >
  Take screenshots of all embed pages and save them as share images.
  Use when the user asks to update, regenerate, or take embed screenshots,
  or when new embed pages have been added.
compatibility: >
  Requires Node.js 20+ and a Chrome or Chromium binary (Puppeteer cache,
  google-chrome-stable, or chromium on PATH). The puppeteer-core npm
  package is installed automatically to /tmp on first run if not present.
---

# Screenshot Embeds

Captures a screenshot of every embed page in a graphics-kit project and
saves the images to `src/statics/images/embed-{name}.png` for use as
share images in the CMS asset picker.

## Requirements

The bundled script (`scripts/screenshot.mjs`) self-provisions its
dependencies at runtime:

- **Node.js 20+** — must be available as `node`
- **Chrome / Chromium** — discovered automatically from the Puppeteer
  cache (`~/.cache/puppeteer/chrome/`) or the system PATH
  (`google-chrome-stable`, `google-chrome`, `chromium`)
- **puppeteer-core** — if not already installed, the script runs
  `npm install --prefix /tmp puppeteer-core` so it never modifies the
  project's own `node_modules`

No manual setup is needed on a machine that already has Chrome installed.

## Steps

1. Run the script from the project root:

   ```bash
   node .agents/skills/screenshot-embeds/scripts/screenshot.mjs
   ```

   You can pass custom viewport sizes per embed as JSON:

   ```bash
   node .agents/skills/screenshot-embeds/scripts/screenshot.mjs \
     --viewports '{"homepage-strip": {"width": 600, "height": 600}}'
   ```

2. The script will:
   - Discover all embed pages under `pages/embeds/en/`
   - Start the Vite dev server
   - Screenshot each embed with an appropriate viewport size
   - Save the images and stop the server

3. After the script finishes, display each generated screenshot to the user
   for visual review using the Read tool on the PNG files in
   `src/statics/images/embed-*.png`.

4. For any new embed whose `<SEO>` component still references the generic
   placeholder image, update the `shareImgPath` prop to point to the new
   screenshot. Each embed page lives at `pages/embeds/en/{name}/+page.svelte`
   and contains a `<SEO>` component. The prop should follow this pattern:

   ```svelte
   shareImgPath="{assets}/images/embed-{name}.png"
   ```

   Where `{name}` matches the embed directory name (e.g. `globe`,
   `homepage-strip`). Look for any `shareImgPath` that still points to
   `reuters-graphics.jpg` and replace it. Embeds that already reference
   their own `embed-*.png` image can be left alone.
