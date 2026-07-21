---
'@reuters-graphics/graphics-components': minor
---

Add a `FaqBox` component: an accessible, collapsible list of frequently asked questions built on native `<details>`/`<summary>` disclosures. Questions collapse by default and each answer is a markdown string (inline links and emphasis supported). Malformed entries (missing or whitespace-only question or answer) are skipped, and the whole section is omitted when no valid items remain. Supports `title`, `width`, `class` and `id` props.
