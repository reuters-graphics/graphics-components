---
'@reuters-graphics/graphics-components': minor
---

Add a temperature-unit toolkit: `Temperature` (flash-free °C/°F display) and `TemperatureToggle` components, plus the framework-agnostic helpers they build on — locale-aware default detection (`resolveDefaultUnit`, `browserDefaultUnit`), a SvelteKit `handle` (`createUnitBootstrapHandle`) that injects a pre-paint bootstrap into `<head>` for flash-free rendering, localStorage persistence, and a Svelte 5 reactive store (`TemperatureUnitState`, `defaultUnitState`). Values go in as Celsius and render in the reader's preferred unit, kept in sync across every component and cross-bundle listener via a shared `temperature-unit-changed` event.
