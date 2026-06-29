---
'@reuters-graphics/graphics-components': minor
---

Add LLM documentation generation pipeline and consumer CLI.

A new build-time pipeline extracts component props, Storybook story examples, MDX prose, and SCSS token/colour data into structured markdown files suitable for use as LLM context. The generated docs ship inside the npm package and a new bin script copies them into consuming projects.

**New `pnpm generate:llm-docs` script** — runs automatically as part of `pnpm build`, produces `dist/llm-docs/` containing:

- `components/*.md` — per-component props tables, TypeScript types, and usage examples
- `guides/*.md` — integration guides extracted from MDX, plus colour palette tables and spacing/typography token reference generated from SCSS source
- `index.md` — library overview

**New `npx graphics-components-llm-docs` bin** — copies `dist/llm-docs/` to `./llms/graphics-components/` in a consuming project and creates or updates `CLAUDE.md` with a pointer to the docs.
