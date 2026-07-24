---
'@reuters-graphics/graphics-components': minor
---

`TileMapCallout`: add a `surface="bare"` prop and make surface theming purge-safe.

- New `surface` prop: `"filled"` (default) keeps the themed box; `"bare"` removes the background, border, shadow and padding so you can render your own pre-styled container inside the callout (the marker, leader line and positioning still apply).
- The surface theming custom properties (`--tile-map-callout-surface-background`, `--tile-map-callout-border-colour`, `--tile-map-callout-shadow`, `--tile-map-callout-colour`, `--tile-map-callout-surface-max-width`) are now consumed with inline fallbacks and are no longer declared on the element. Consumers can override them from their own wrapper class and have the value cascade in — no specificity fight, and no need to target the internal `.callout-surface`, which downstream CSS purging (e.g. PurgeCSS) can strip. Default rendering is unchanged.
