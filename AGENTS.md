# Agent instructions

Follow [CONTRIBUTING.md](CONTRIBUTING.md) for changes, checks, and pull requests.

## Storybook documentation

- Include every Storybook example on its component's docs page. Render each
  example with a `Canvas` so readers can see and try it without leaving the docs.
- When adding, renaming, or removing an example, update the docs page in the same
  change.
- Keep documentation short and use plain language. Show how to import and use
  the component, then explain only the options readers need.
- Before submitting, check that every example appears and renders on its docs
  page, run ESLint and Prettier on changed files, and run `pnpm build:docs`.
