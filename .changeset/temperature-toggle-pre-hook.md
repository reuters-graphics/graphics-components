---
'@reuters-graphics/graphics-components': minor
---

Add `onbeforetoggle` pre-mutation hook to `TemperatureToggle`.

Exposes an optional `onbeforetoggle?: (next: TemperatureUnit) => void` prop that runs synchronously immediately before `state.set(next)` commits the unit change. Callers can use it to pre-sync external renderers — charts, MapLibre layers, canvas overlays — before the reactive Svelte tree re-renders. A thrown error is not swallowed: it propagates up the call stack and prevents the state mutation and all canonical side-effects (attribute, localStorage, window event). Omitting the prop is fully backward-compatible; no existing behaviour changes.
