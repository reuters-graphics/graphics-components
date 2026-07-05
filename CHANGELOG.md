# @reuters-graphics/graphics-components

## 3.10.1

### Patch Changes

- e250fba: Fix: include `dist/llm-docs/` in published package by adding `generate:llm-docs` to the `prepare` lifecycle script. Previously `svelte-package` cleared `dist/` when `prepare` ran before packing, wiping the llm-docs that the `build` step had generated.

## 3.10.0

### Minor Changes

- a7ba476: Add LLM documentation generation pipeline and consumer CLI.

  A new build-time pipeline extracts component props, Storybook story examples, MDX prose, and SCSS token/colour data into structured markdown files suitable for use as LLM context. The generated docs ship inside the npm package and a new bin script copies them into consuming projects.

  **New `pnpm generate:llm-docs` script** — runs automatically as part of `pnpm build`, produces `dist/llm-docs/` containing:

  - `components/*.md` — per-component props tables, TypeScript types, and usage examples
  - `guides/*.md` — integration guides extracted from MDX, plus colour palette tables and spacing/typography token reference generated from SCSS source
  - `index.md` — library overview

  **New `npx graphics-components-llm-docs` bin** — copies `dist/llm-docs/` to `./llms/graphics-components/` in a consuming project and creates or updates `CLAUDE.md` with a pointer to the docs.

## 3.9.0

### Minor Changes

- 8732425: Geocoder: add configurable `minLength` and `debounceMs` props (defaults
  unchanged at 2 chars / 300 ms). Raising them reduces the number of paid Mapbox
  geocoding requests made per search — each keystroke past the debounce window
  bills a request.

## 3.8.0

### Minor Changes

- 333f01f: **TileMap:** add label-legibility controls for data overlays.

  - `TileMapLayer` gains a `beneathLabels` boolean that inserts the layer just
    below the basemap's first symbol (label) layer, so place names stay readable
    on top of a colored fill — without needing to know the style's label-layer id
    (an explicit `beforeId` still takes precedence).
  - `TileMap` gains an `emphasizeLabels` boolean that darkens the basemap's
    `place` labels and adds a strong white halo on map load. Both degrade
    gracefully (no-ops) on styles without the expected symbol layers.

## 3.7.0

### Minor Changes

- 5858d14: Add `ShareBar` component — a row of X, Facebook, LinkedIn, Email and Copy link share buttons plus an optional "Purchase Licensing Rights" button, echoing the share toolbar on Reuters.com stories.

## 3.6.0

### Minor Changes

- cda3bf9: Add `BioBox`, an accessible author-bio box that echoes the contributor box at the bottom of Reuters.com stories. Each author can show a name, job title, short bio, avatar (falling back to the Reuters Kinesis logo) and a row of contact/social links. Social links reflow below the bio text on narrow screens. Also exports the supporting `Bio` and `SocialLinks` components and the `Author`, `SocialLink` and `SocialPlatform` types.
- 01384da: Add a `stories` prop to `ReferralBlock` so you can supply your own hand-picked referrals instead of fetching recent stories from Reuters.com. Extract the single-card markup into a new exported `Referral` component for reuse in other layouts, and export `ReferralItem` and `LinkTarget` types.

### Patch Changes

- d4f605f: Reduce `InfoBox` interior inline padding on mobile. The fluid `fpx-6` padding kept a ~2.25rem minimum that squeezed the text in narrow viewports; it now tightens to the page gutter (1rem) below 768px.

## 3.5.0

### Minor Changes

- 1c5ef34: Add Legend component for maps and data displays, with threshold, continuous, diverging, categorical, and proportional-symbols modes and an optional no-data swatch.
- 1c5ef34: Add an optional `legend` snippet to `TileMap` so a legend and map can share a single `GraphicBlock`, with one title and the standard block spacing, instead of being stacked as separate blocks.

## 3.4.1

### Patch Changes

- f751e94: Adds trailing slash to LanguageButton

## 3.4.0

### Minor Changes

- f8616ed: Add Geocoder component for autocomplete location search using Mapbox Geocoding v6 API

## 3.3.4

### Patch Changes

- f1694a0: Adds LanguageButton component

## 3.3.3

### Patch Changes

- 5c65e67: Adds byline translation examples

## 3.3.2

### Patch Changes

- d3c501d: Switch casting as GeoJSON to data property

## 3.3.1

### Patch Changes

- b924478: Updates to blog component styles

## 3.3.0

### Minor Changes

- 8abe183: Adds graphics blog components

## 3.2.1

### Patch Changes

- 94c2346: Fixes fontface definitions for Newsreader typeface to fix issue with bold and bolder weights.

## 3.2.0

### Minor Changes

- df7c622: Adding a basic pmtiles map component

## 3.1.0

### Minor Changes

- 0f9248c: Replaces FreightText with Newsreader Text font

## 3.0.27

### Patch Changes

- 6dc6e54: Removes demo files, docs and stories from the published package.

## 3.0.26

### Patch Changes

- 27d07e4: Adds Lottie component
- f9aec45: Adds HorizontalScroller component

## 3.0.25

### Patch Changes

- 257f967: Updates svelte-fa version

## 3.0.24

### Patch Changes

- 0fce4cd: Removes dev from $app/environment

## 3.0.23

### Patch Changes

- 022d0dc: Test downstream notification workflow with updated reusable workflow

## 3.0.22

### Patch Changes

- bf550d5: Test downstream workflow notification system

## 3.0.21

### Patch Changes

- a2e6e8d: Fixes a bug in PhotoPack that on earlier iPhones would break. Also adds smarter default layouts based on the number of images in the pack and the max width of the PhotoPack.

## 3.0.20

### Patch Changes

- 6d5c152: Removes stray Google Analytics loading call so GA is only loaded via Google Tag Manager.

## 3.0.19

### Patch Changes

- 627f267: Enhances progress reactivity for ScrollerVideo

## 3.0.18

### Patch Changes

- 1402aac: Fix for GTM tags

## 3.0.17

### Patch Changes

- cd0dc83: Updates analytics scripts to work with GDPR-compliant GTM container

## 3.0.16

### Patch Changes

- 2b6b4f4: Fixes prettifyDate to format Aug, Oct-Dec

## 3.0.15

### Patch Changes

- 68b51a1: Adds util function prettifyDate

## 3.0.14

### Patch Changes

- fdc3c6b: Moves dependencies to dependencies from devDependencies

## 3.0.13

### Patch Changes

- 36d5896: Adds ScrollerVideo

## 3.0.12

### Patch Changes

- 771ccb4: Fixes sizing issue for Framer

## 3.0.11

### Patch Changes

- 31caab2: Fix typos in Scroller

## 3.0.10

### Patch Changes

- cf7e513: Updated oneTrustId to production ID

## 3.0.9

### Patch Changes

- 18e49eb: renames Theme and CustomTheme types

## 3.0.8

### Patch Changes

- bdf3918: Updates Visible to allow unit specification for top, bototm, right, left and adds a demo

## 3.0.7

### Patch Changes

- f80e450: Removes Parsely page analytics

## 3.0.6

### Patch Changes

- a205a35: Adds new Headpile component.

## 3.0.5

### Patch Changes

- f41f79b: Creates ScrollerBase component, which is used in Scroller and can be used to make custom scrollytelling components.

## 3.0.4

### Patch Changes

- 06beea8: Update tokens and component layouts to accomodate margins and paddings for RTL webpages

## 3.0.3

### Patch Changes

- c074a18: Allows step.background to be undefined

## 3.0.2

### Patch Changes

- 737f2e1: Adds a simple dropdown option to search embeds for Framer
- a032218: Don't fetch referrals on non-dotcom domains
- 2d4a641: Cleans up a spare console log left in
- c91807e: a11y fixes for SiteHeader and SiteFooter
- b13463f: fixes for Ad types that were colliding with their component names and a bug in the Framer Resizer
- a48d333: Ignore hydration mismatch in SEO component ld+json

## 3.0.1

### Patch Changes

- 93a41f3: Exposes bindable props for the Scroller component

## 3.0.0

### Major Changes

- 7432131: Svelte 5.0+ components.

  #### What's in it?

  3.0 updates all graphics components to [Svelte 5 syntax](https://svelte.dev/docs/svelte/v5-migration-guide).

  Components are now only compatible with Svelte 5-based versions of the graphics kit, starting with [1.1.0](https://github.com/reuters-graphics/bluprint_graphics-kit/blob/main/CHANGELOG.md#110).

## 2.0.3

### Patch Changes

- 50f4320: Updates favicons for new kinesis

## 2.0.2

### Patch Changes

- 64b6d88: Fix for changed thumbnail API schema

## 2.0.1

### Patch Changes

- ca278c4: ReferralBlock checks if a referral is for the current page and doesn't include it if so.

## 2.0.0

### Major Changes

- 3e20529: Removes Google Docs-based utils in favour of ArchieML/RNGS.io examples.

### Patch Changes

- a5ad543: Docs syntax highlighting and organisation
- 06b4d48: Updates ReferralBlock and SiteFooter
- b44ed64: Reuters Graphics logo refresh
- 05b80fd: Patches up component docs links

## 1.1.7

### Patch Changes

- 9dec472: Background change to action workflows...

## 1.1.6

### Patch Changes

- d7d88e1: Adds parsely analytics

## 1.1.5

### Patch Changes

- 2217848: Adds a skip link to the header component

## 1.1.4

### Patch Changes

- 4788ee2: Adds Dotcom Knowledge font aliases needed for ads

## 1.1.3

### Patch Changes

- 146b970: Fixes "more" menu options

## 1.1.2

### Patch Changes

- d459852: Ads will collapse if unfulfilled

## 1.1.1

### Patch Changes

- 23b001b: Excludes Google ads from iframe reset

## 1.1.0

### Minor Changes

- 6e2b8a7: Updates Storybook and makes Svelte 4 minimum.
