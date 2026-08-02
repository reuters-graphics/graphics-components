# Goal: Add TemperatureToggle pre-mutation hook

## User Request

Add the smallest backward-compatible `TemperatureToggle` API needed by Reuters
Climate Monitor to run consumer logic before the canonical temperature state
mutation. The preferred API is
`onbeforetoggle?: (next: TemperatureUnit) => void`. It must run synchronously
and exactly once before `state.set(next)`, with all existing state, DOM
attribute, storage, event, synchronization, SSR, accessibility, and styling
behavior unchanged. Add focused tests, documentation and a MapLibre-like
example, the required changeset, full validation, and open (but do not merge or
release) a pull request.

## Refined Goal

Expose an optional `TemperatureToggle` pre-mutation callback that receives the
next temperature unit and runs synchronously immediately before the component
calls `state.set(next)`. Keep mutation ownership in the existing state object
and preserve every existing behavior when the prop is omitted. Document and
test the exact ordering, error propagation, custom-state behavior, both unit
directions, and backward compatibility, then prepare a reviewed pull request.

## Acceptance Criteria

- [ ] `TemperatureToggle` exposes a public optional prop named
      `onbeforetoggle?: (next: TemperatureUnit) => void` (or an equally clear,
      justified name), and its type is available through the package's normal
      component/type surface.
- [ ] On each user activation, the component computes the next unit, calls the
      callback exactly once with exactly that unit, then calls the existing
      `state.set(next)`.
- [ ] Ordering tests prove callback first; then state, `<html
data-temp-unit>`, and localStorage are updated; then exactly one
      `temperature-unit-changed` event is observed with
      `detail: { unit: next }`.
- [ ] Focused tests cover Celsius to Fahrenheit, Fahrenheit to Celsius where
      existing test patterns warrant it, a supplied custom state, and omitted
      callback backward compatibility.
- [ ] A thrown callback error propagates normally and prevents `state.set` and
      all resulting canonical side effects; no error is swallowed.
- [ ] Existing state mutation, HTML attribute, localStorage, event payload and
      count, singleton synchronization, SSR/bootstrap behavior, accessibility,
      and rendered styling remain unchanged when the prop is omitted.
- [ ] No second event, after-change callback, or ambiguous alternate ordering
      is introduced.
- [ ] Stories, MDX/autodocs, and public types document the callback plus a
      generic MapLibre-like pre-sync use case without Climate Monitor imports.
- [ ] Package exports are checked and changed only if needed for the public API.
- [ ] A Changesets minor changeset for `@reuters-graphics/graphics-components`
      describes the backward-compatible feature.
- [ ] Repository validation succeeds: targeted relevant Vitest/component tests,
      `pnpm lint`, `pnpm format`, `pnpm check`, `pnpm test`, and `pnpm build`.
- [ ] Changes are committed with the required
      `Co-authored-by: Copilot App <223556219+Copilot@users.noreply.github.com>`
      trailer in addition to the Goal skill's required assisted-by trailer.
- [ ] A pull request is opened from the feature branch to `main`; nothing is
      published, released, or merged.

## Scope Boundaries

**In scope:**

- `TemperatureToggle` prop/API implementation.
- Focused component and state/integration tests needed to prove ordering.
- TemperatureToggle stories, docs/autodocs, public typing/export review.
- A minor changeset, validation, commit, push, and pull request.

**Out of scope:**

- Changes to Reuters Climate Monitor.
- Publishing, releasing, versioning package manifests, or merging the PR.
- A second event, an after-change callback, or changes to canonical state
  semantics.
- Climate Monitor-specific dependencies or imports.

## Applicable Project Conventions

**Quality gate command:**

- `pnpm lint`
- `pnpm format`
- `pnpm check`
- `pnpm test`
- `pnpm build`

**Commit convention:**

- GitHub Flow from `main`; no stricter repository commit format was found.
- Goal iteration commits use conventional commits with `[B]`/`[I]` markers.
- Assisted-by trailer required: `Assisted-by: Claude:Sonnet-4.6`
- Copilot co-author trailer required:
  `Co-authored-by: Copilot App <223556219+Copilot@users.noreply.github.com>`

**Guidelines:**

- `CONTRIBUTING.md`
- `.github/PULL_REQUEST_TEMPLATE.md`
- `.github/CODEOWNERS`

**Rules:**

- No `AGENTS.md`, `CONSTITUTION.md`, `.agents/guidelines/`, or
  `.github/guidelines/` files were found.
- Each pull request requires a changeset.
- New component features require Storybook documentation.
- Tag the code owner/editor for review in the normal GitHub Flow.
