---
'@reuters-graphics/graphics-components': patch
---

Fix: include `dist/llm-docs/` in published package by adding `generate:llm-docs` to the `prepare` lifecycle script. Previously `svelte-package` cleared `dist/` when `prepare` ran before packing, wiping the llm-docs that the `build` step had generated.
