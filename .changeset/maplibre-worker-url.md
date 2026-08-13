---
'@reuters-graphics/graphics-components': patch
---

Wire up MapLibre 6's web worker. MapLibre 6 loads its worker as a separate file
whose URL it builds at runtime, so bundlers never emit it and every TileMap
rendered blank. `TileMap` now points MapLibre at a worker asset emitted through
Vite's worker pipeline, and `configureMaplibreWorker` is exported for sites that
build their own MapLibre map.
