---
'@reuters-graphics/graphics-components': minor
---

**TileMap:** add label-legibility controls for data overlays.

- `TileMapLayer` gains a `beneathLabels` boolean that inserts the layer just
  below the basemap's first symbol (label) layer, so place names stay readable
  on top of a colored fill — without needing to know the style's label-layer id
  (an explicit `beforeId` still takes precedence).
- `TileMap` gains an `emphasizeLabels` boolean that darkens the basemap's
  `place` labels and adds a strong white halo on map load. Both degrade
  gracefully (no-ops) on styles without the expected symbol layers.
