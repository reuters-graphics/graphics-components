---
'@reuters-graphics/graphics-components': minor
---

Add a `stories` prop to `ReferralBlock` so you can supply your own hand-picked referrals instead of fetching recent stories from Reuters.com. Extract the single-card markup into a new exported `Referral` component for reuse in other layouts, and export `ReferralItem` and `LinkTarget` types.
