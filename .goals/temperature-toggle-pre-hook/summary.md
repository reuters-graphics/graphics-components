# TemperatureToggle pre-mutation hook summary

## What was achieved

- Added the optional public
  `onbeforetoggle?: (next: TemperatureUnit) => void` prop.
- Guaranteed synchronous ordering: compute next unit, invoke the callback once,
  then call the existing `state.set(next)`.
- Preserved canonical state, HTML attribute, localStorage, event,
  synchronization, SSR/bootstrap, accessibility, and styling behavior when the
  prop is omitted.
- Preserved normal exception propagation so a throwing callback prevents
  `state.set` and its side effects.
- Added focused tests for ordering, event count and payload, both directions,
  custom state, no-callback behavior, and thrown callbacks.
- Added public type export, Storybook coverage, MDX documentation, a generic
  MapLibre-like example, and a minor changeset.
- Passed lint, format, type checking, the full test suite, build, and publint.

## Iteration history

- Iteration 1: PASS. The Inspector found no acceptance-criteria failures.

## Inspector findings

The Inspector confirmed the exact synchronous ordering, once-only invocation,
error propagation, backward compatibility, documentation, public API export,
changeset, and all prescribed quality gates. No corrective iteration was
required.

## Recommendations

- Release the feature through the repository's normal Changesets workflow after
  the pull request is reviewed and merged.
