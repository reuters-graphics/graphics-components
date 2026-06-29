# @reuters-graphics/graphics-components

A Svelte 5 component library built by the Graphics team at Reuters for producing data journalism and interactive graphics. Components cover page layout, text elements, multimedia, maps, data visualisation, and site infrastructure — all designed to match the visual and structural conventions of enterprise stories published on reuters.com.

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
- **[Guides](./guides/index.md)** — Integration guides, design system reference, theming, SCSS tokens, and colour palettes.

To find a specific component, start with `./components/index.md` for the full list, then open the individual component file. To understand the design system (spacing, colours, typography), start with `./guides/index.md`.

## Working with this library

**Every page is built inside `<Article>`.** Almost all content — text, graphics, photos, scrollers — should be placed inside an `<Article>` component, which establishes the central text well and responsive column widths. `<Block>` controls the width of individual elements within it. See `./components/Article.md` and `./components/Block.md`.

**Multimedia paths must be absolute URLs.** Components like `FeaturePhoto`, `Video`, and `BeforeAfter` expect `src` values to be full URLs, not relative paths. In the graphics kit, prefix relative paths with the SvelteKit `assets` module: `import { assets } from '$app/paths'` → `src="{assets}/imgs/photo.jpg"`. See `./guides/graphics-kit.md`.

**Theming is done via CSS custom properties set by `<Theme>`.** Wrap the page in a `<Theme>` component to activate the design tokens used by all other components. Colours, font sizes, and spacing all respond to this. See `./components/Theme.md` and `./guides/theming.md`.
