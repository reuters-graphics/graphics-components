---
'@reuters-graphics/graphics-components': major
---

**Breaking:** Replace the `base` string prop with a `resolve` function prop on `LanguageButton`, `BlogTOC`, and `BlogPost`. Instead of passing SvelteKit's (now-deprecated) `base` path string, pass its `resolve` function from `$app/paths` — the components call it internally to build links against your project's base path.

```svelte
<script>
  import { resolve } from '$app/paths';
</script>

<!-- Before -->
<LanguageButton {locale} {embedded} {base} />
<!-- After -->
<LanguageButton {locale} {embedded} {resolve} />
```

The `resolve` prop defaults to an identity function, preserving the previous default (`base=""`) behavior when it isn't passed.

**Fix:** `BlogPost` (and its `CopyLink`/`PostHeadline`) no longer throw `RangeError: Invalid time value` when rendered without a valid `publishTime`. The internal `getShortDate` helper now returns an empty string for a missing or invalid date instead of crashing.

Docs also migrated off the deprecated `$app/paths` exports `assets`/`base` to the new `asset()`/`resolve()` functions, and fixed a stale `$app/env` import (now `$app/environment`). Static-content stories were updated to the `asChild` prop required by the Storybook 10 / `@storybook/addon-svelte-csf` 5 upgrade (57 stories across 24 components), which otherwise re-rendered the meta component with empty args — producing duplicate/blank previews and the `BlogPost` crash above.
