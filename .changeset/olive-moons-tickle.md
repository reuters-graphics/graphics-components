---
'@reuters-graphics/graphics-components': minor
---

Add opt-in 3D terrain to `TileMap` via `terrain` and `pitch` props, plus `enableTerrain`/`disableTerrain` for raw MapLibre maps. Switching terrain on reveals the high-detail shaded relief and leaves the globe projection, which cannot render a terrain mesh. Maps that don't ask for terrain are unchanged. Upgrades `maplibre-gl` to 6.3.
