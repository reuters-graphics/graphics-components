---
'@reuters-graphics/graphics-components': patch
---

`TileMapCallout`: repair the `Props` interface and component doc comment that automated review-suggestion commits had mangled in #464 (the `leaderWidth` prop declaration was dropped, leaving a dangling JSDoc block that broke `svelte-check` and lint). Restores the correct, formatted source; no runtime behaviour change from the intended #464 feature.
