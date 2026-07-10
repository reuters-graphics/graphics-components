---
'@reuters-graphics/graphics-components': minor
---

Improve `SEO` component to better align with Reuters article SEO conventions:

- Add `robots` (`noarchive, max-image-preview:large`) so search engines show large thumbnail previews, matching reuters.com.
- Add Open Graph `article:*` tags (`published_time`, `modified_time`, `section`, `author`, `tag`), plus `og:updated_time`, `og:locale`, and `og:image:alt`/`width`/`height`.
- Add `<meta name="author">` and `news_keywords`.
- Enrich the `NewsMediaOrganization` JSON-LD with `sameAs`, `address`, `parentOrganization` and editorial-standards policies (publishing principles, ethics, corrections, diversity, fact-checking) as E-E-A-T trust signals; use the 512×512 logo.
- Add `description` to the `NewsArticle` JSON-LD, and inline the publisher name + logo (in addition to the `@id` link) so the article validates standalone in Google's Rich Results Test.
- Fix invalid structured data: never emit empty dates (`dateModified` falls back to `publishTime`), omit empty `author`/`creator`, and derive `copyrightYear` from `publishTime` instead of the current date.
- Resolve relative share image paths to absolute URLs.
- Add `hreflang` support via a new `alternates` prop for multi-language graphics, emitting `rel="alternate"` links and matching `og:locale:alternate` tags so Google serves the right language per region and treats versions as one story.
- New optional props: `articleSection`, `keywords`, `locale` (defaults to `en_GB`), `shareImgWidth`, `shareImgHeight`, `alternates`.
- Switch Twitter handle to `@Reuters`.
