---
'@reuters-graphics/graphics-components': minor
---

Add `football-newsapp` component namespace (extract World Cup app components) — see #457.

Introduces a subpath export `@reuters-graphics/graphics-components/football-newsapp` (adds an `exports` map entry — flagged for maintainer sign-off) and a decoupled set of football tournament components. Components take data via props and ambient services via a narrow context (`setFootballContext` / `getFootballContext` + prop→context→default resolution with a dev-time missing-service error). Ships the context contract, local view-model types (interim, to be replaced by `@reuters-graphics/opta-football-data`), a football theme layer (`footballTheme`) applied through the base `<Theme>`, the `elements/` group (Flag, Icon with co-located/Vite-bundled PNG assets + typed union + drift check, LiveBug, AnimatedScore, TrophyStar, TrophyIcon), an initial set of `widgets/`, plus "Data & Setup" and "Recipes / Pages" docs and a story per component.

Also contributes generalized components to the base namespace: `TabGroup` (segmented control extracted from the match-tab switcher), `LazyMount`, and `NoIndex`.
