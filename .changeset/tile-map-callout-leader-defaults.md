---
'@reuters-graphics/graphics-components': minor
---

`TileMapCallout`: restore the compact leader line as the default and make it configurable. The leader now defaults to a 14×14px line with a 3px dot (matching the original callout it replaced) instead of the longer 32×28px/4px line. New `leaderWidth`, `leaderHeight` and `dotRadius` props (all in px) tune the leader per callout, and the SVG geometry and the surface's offset are now derived from a single source so they can no longer drift apart.
