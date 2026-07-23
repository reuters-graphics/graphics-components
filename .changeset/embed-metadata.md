---
'@reuters-graphics/graphics-components': patch
---

Add `EmbedMetadata` component, a stripped-down alternative to `SEO` for embed pages. It sets a canonical link, `og:url`, `og:image` and a `noindex, nofollow, noarchive` robots tag, and mounts a `PymChild` instance for embed resizing.

Move the `SEO` and `EmbedMetadata` stories into a new `Components/Page metadata` category in Storybook.
