---
'@reuters-graphics/graphics-components': patch
---

`BeforeAfter`: fix `ReferenceError: DOMRect is not defined` on SSR. The `imgOffset` state initializer called `new DOMRect()`, a browser-only API that also runs during server rendering; it now initializes with a plain object literal instead. Fixes #453.
