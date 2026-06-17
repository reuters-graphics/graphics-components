---
'@reuters-graphics/graphics-components': patch
---

Reduce `InfoBox` interior inline padding on mobile. The fluid `fpx-6` padding kept a ~2.25rem minimum that squeezed the text in narrow viewports; it now tightens to the page gutter (1rem) below 768px.
