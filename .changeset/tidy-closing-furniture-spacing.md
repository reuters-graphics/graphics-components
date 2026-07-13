---
'@reuters-graphics/graphics-components': patch
---

Tighten the vertical spacing on the article's closing furniture so the gaps are smaller and uniform. `InfoBox`, `EndNotes`, `BioBox`, `ShareBar` and `ReferralBlock` now default to a tighter `fmy-5` rhythm instead of the `fmy-6`/`fmy-8`/`fmb-8` margins.

Add a new `Compositions/Article` Storybook reference that assembles a complete graphics page — headline, body text, a feature photo, a graphic block, a video, and the closing furniture (info box, end notes, share bar, bio box and referral block) — from a single typed `content` object. It ships light and dark-theme variants plus a smoke-test play function to document the standard article-well rhythm end to end.
