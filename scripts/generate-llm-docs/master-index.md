# @reuters-graphics/graphics-components

A Svelte 5 component library built by Reuters Graphics for producing data journalism and interactive graphics. Components cover page layout, text elements, multimedia, maps, data visualisation, and site infrastructure — all designed to match the visual and structural conventions of Reuters.com storytelling.

The library ships with a full SCSS design system: spacing tokens, typography utilities, a colour palette, and CSS custom properties for theming via the `Theme` component.

**Install:** `pnpm add @reuters-graphics/graphics-components`

**Import components:**

```svelte
<script>
  import {
    BodyText,
    Legend,
    ShareBar,
  } from '@reuters-graphics/graphics-components';
</script>
```

**Import SCSS:**

```scss
@use '@reuters-graphics/graphics-components/scss/main';
```

---

## This reference

- **[Components](./components/index.md)** — Per-component docs with props tables, TypeScript type definitions, and usage examples extracted from Storybook stories.
- **[Guides](./guides/index.md)** — Integration guides, design system reference, theming, SCSS tokens, colour palettes, and contributing documentation.
