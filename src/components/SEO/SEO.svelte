<!-- @component `SEO` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-ads-analytic-seo--docs) -->
<script lang="ts">
  interface GraphicAuthor {
    name: string;
    link: string;
  }

  interface AlternateLink {
    /**
     * A [BCP-47](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) language tag, e.g. `en-GB`, `es`, or the special value `x-default`.
     */
    hreflang: string;
    /**
     * Absolute URL of the localized version of this page.
     */
    href: string;
  }

  interface Props {
    /**
     * The project's fully-qualified base URL (origin + trailing slash). Only its origin is used, to build canonical and share URLs. In graphics kit projects this is injected at build time as the global `__BASE_URL__` — no import needed.
     */
    baseUrl: string;
    /**
     * [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) object for the page.
     */
    pageUrl: URL;
    /**
     * SEO title
     */
    seoTitle: string;
    /**
     * SEO description
     */
    seoDescription: string;
    /**
     * Share title
     */
    shareTitle: string;
    /**
     * Share description
     */
    shareDescription: string;
    /**
     * Share image path. **Must be an absolute path.**
     */
    shareImgPath: string;
    /**
     * Share image alt text, up to 420 characters.
     */
    shareImgAlt?: string;
    /**
     * Publish time as an [ISO string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
     */
    publishTime?: string;
    /**
     * Updated time as an [ISO string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
     */
    updateTime?: string;
    /**
     * Array of authors for the piece. Each author object must have `name` and `link` attributes.
     */
    authors?: GraphicAuthor[];
    /**
     * Section the story belongs to, e.g. "World", "Business". Used for `article:section` and JSON-LD `articleSection`.
     */
    articleSection?: string;
    /**
     * Keywords/tags describing the story. Used for `article:tag` and JSON-LD `keywords`.
     */
    keywords?: string[];
    /**
     * Open Graph locale. Defaults to `en_GB`.
     */
    locale?: string;
    /**
     * Pixel width of the share image. Improves social/link previews when provided.
     */
    shareImgWidth?: number;
    /**
     * Pixel height of the share image. Improves social/link previews when provided.
     */
    shareImgHeight?: number;
    /**
     * Localized versions of this page for [`hreflang`](https://developers.google.com/search/docs/specialty/international/localized-versions) annotations. Each entry needs a `hreflang` (BCP-47 tag or `x-default`) and an absolute `href`. Include an entry for _this_ page too, plus an `x-default`, so every language version lists the full set.
     */
    alternates?: AlternateLink[];
  }

  let {
    baseUrl,
    pageUrl,
    seoTitle,
    seoDescription,
    shareTitle,
    shareDescription,
    shareImgPath,
    shareImgAlt = '',
    publishTime = '',
    updateTime = '',
    authors = [],
    articleSection = 'Graphics',
    keywords = ['Reuters graphics', 'Reuters', 'graphics', 'Interactives'],
    locale = 'en_GB',
    shareImgWidth,
    shareImgHeight,
    alternates = [],
  }: Props = $props();

  // og:locale:alternate mirrors the hreflang set (minus x-default and the
  // current locale), converted from BCP-47 (en-GB) to OG form (en_GB).
  let ogLocaleAlternates = $derived([
    ...new Set(
      alternates
        .map((a) => a.hreflang)
        .filter((h) => h && h !== 'x-default')
        .map((h) => h.replace('-', '_'))
        .filter((h) => h !== locale)
    ),
  ]);
  const getOrigin = (baseUrl: string) => {
    try {
      return new URL(baseUrl).origin;
    } catch {
      // This handles a weird case where Vite's base path is
      // reset to './' after the app hydrates...
      if (typeof window !== 'undefined') return getOrigin(window.location.href);
      return '';
    }
  };

  let origin = $derived(getOrigin(baseUrl));
  let canonicalUrl = $derived(
    (origin + (pageUrl?.pathname || '')).replace(/index\.html\/$/, '')
  );

  // Resolve the share image to an absolute URL. og:image and JSON-LD require
  // absolute paths — a relative path silently breaks previews, so fall back to
  // resolving against the page origin.
  const resolveUrl = (path: string, origin: string) => {
    if (!path) return path;
    try {
      return new URL(path).href;
    } catch {
      if (!origin) return path;
      return `${origin}${path.startsWith('/') ? '' : '/'}${path}`;
    }
  };
  let shareImg = $derived(resolveUrl(shareImgPath, origin));

  // dateModified falls back to the publish time so we never emit an empty date.
  let modifiedTime = $derived(updateTime || publishTime);

  // Strip keys whose values are empty ('', undefined, null) or empty arrays so
  // we never emit invalid/empty structured-data fields.
  const clean = <T extends Record<string, unknown>>(obj: T) =>
    Object.fromEntries(
      Object.entries(obj).filter(
        ([, v]) =>
          v !== '' &&
          v !== undefined &&
          v !== null &&
          !(Array.isArray(v) && v.length === 0)
      )
    );

  const orgLdJson = {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    '@id': 'https://www.reuters.com/#publisher',
    name: 'Reuters',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.reuters.com/pf/resources/images/reuters/logo-vertical-default-512x512.png',
      width: 512,
      height: 512,
    },
    url: 'https://www.reuters.com/',
    // Social profiles and editorial-standards policies are E-E-A-T / news
    // trust signals Google weighs for publishers. Values mirror reuters.com.
    sameAs: [
      'https://www.facebook.com/Reuters/',
      'https://x.com/reuters',
      'https://www.instagram.com/reuters/',
      'https://www.linkedin.com/company/reuters2/',
      'https://www.tiktok.com/@reuters',
      'https://www.youtube.com/user/ReutersVideo',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London, United Kingdom',
      postalCode: 'E14 5AQ',
      streetAddress: '5 Canada Square, Canary Wharf',
    },
    publishingPrinciples:
      'https://www.thomsonreuters.com/en/about-us/trust-principles.html',
    verificationFactCheckingPolicy: 'https://www.reuters.com/fact-check/about/',
    correctionsPolicy: 'https://reutersagency.com/about/standards-values/',
    ethicsPolicy:
      'https://ir.thomsonreuters.com/static-files/f4169de5-ee8c-4c28-9971-75b0baf97365',
    diversityPolicy:
      'https://www.thomsonreuters.com/en/about-us/social-impact/social-impact-and-esg-report-2022#c7_Diversity%20%20inclusion',
    parentOrganization: 'https://www.thomsonreuters.com/en.html',
  };

  // Inline the publisher's name + logo (rather than only an @id reference to
  // the org block) so the NewsArticle validates standalone in Google's Rich
  // Results Test, which doesn't always merge nodes across script blocks. The
  // @id keeps it linked to the richer org node above.
  const inlinePublisher = {
    '@id': orgLdJson['@id'],
    '@type': orgLdJson['@type'],
    name: orgLdJson.name,
    logo: orgLdJson.logo,
  };

  let articleImage = $derived(
    clean({
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      url: shareImg,
      width: shareImgWidth,
      height: shareImgHeight,
    })
  );

  let articleLdJson = $derived(
    clean({
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: seoTitle,
      description: seoDescription,
      url: canonicalUrl,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
      thumbnailUrl: shareImg,
      image: shareImg ? [articleImage] : [],
      publisher: inlinePublisher,
      copyrightHolder: inlinePublisher,
      sourceOrganization: inlinePublisher,
      copyrightYear:
        publishTime ? new Date(publishTime).getFullYear() : undefined,
      dateCreated: publishTime,
      datePublished: publishTime,
      dateModified: modifiedTime,
      // NewsArticle requires an author — fall back to the Reuters org when none
      // are supplied rather than emitting an empty array.
      author:
        authors.length ?
          authors.map(({ name, link }) => ({
            '@type': 'Person',
            name,
            url: link,
          }))
        : inlinePublisher,
      creator: authors.map(({ name }) => name),
      articleSection,
      isAccessibleForFree: true,
      keywords,
    })
  );
</script>

<svelte:head>
  {#key canonicalUrl}
    <title>{seoTitle}</title>
    <meta name="description" content={seoDescription} />
    <meta name="robots" content="noarchive, max-image-preview:large" />
    {#each authors as author}
      <meta name="author" content={author.name} />
    {/each}
    {#if keywords.length}
      <meta name="news_keywords" content={keywords.join(', ')} />
    {/if}
    <link rel="canonical" href={canonicalUrl} />
    {#each alternates as alternate}
      <link
        rel="alternate"
        hreflang={alternate.hreflang}
        href={alternate.href}
      />
    {/each}
    <link
      rel="icon"
      type="image/png"
      href="https://graphics.thomsonreuters.com/style-assets/images/logos/favicon/favicon-96x96.png"
      sizes="96x96"
    />
    <link
      rel="icon"
      type="image/svg+xml"
      href="https://graphics.thomsonreuters.com/style-assets/images/logos/favicon/kinesis.svg"
    />
    <link
      rel="shortcut icon"
      type="image/x-icon"
      href="https://graphics.thomsonreuters.com/style-assets/images/logos/favicon/favicon.ico"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="https://graphics.thomsonreuters.com/style-assets/images/logos/favicon/apple-touch-icon.png"
    />

    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:type" content="article" />
    <meta property="og:locale" content={locale} />
    {#each ogLocaleAlternates as ogLocaleAlternate}
      <meta property="og:locale:alternate" content={ogLocaleAlternate} />
    {/each}
    <meta property="og:title" content={shareTitle} itemprop="name" />
    <meta
      property="og:description"
      content={shareDescription}
      itemprop="description"
    />
    <meta property="og:image" content={shareImg} itemprop="image" />
    {#if shareImgAlt}
      <meta property="og:image:alt" content={shareImgAlt} />
    {/if}
    {#if shareImgWidth}
      <meta property="og:image:width" content={String(shareImgWidth)} />
    {/if}
    {#if shareImgHeight}
      <meta property="og:image:height" content={String(shareImgHeight)} />
    {/if}
    <meta property="og:site_name" content="Reuters" />

    {#if publishTime}
      <meta property="article:published_time" content={publishTime} />
    {/if}
    {#if modifiedTime}
      <meta property="article:modified_time" content={modifiedTime} />
      <meta property="og:updated_time" content={modifiedTime} />
    {/if}
    {#if articleSection}
      <meta property="article:section" content={articleSection} />
    {/if}
    {#each authors as author}
      <meta property="article:author" content={author.link} />
    {/each}
    {#each keywords as keyword}
      <meta property="article:tag" content={keyword} />
    {/each}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@Reuters" />
    <meta name="twitter:creator" content="@Reuters" />
    <meta name="twitter:domain" content={origin} />
    <meta name="twitter:title" content={shareTitle} />
    <meta name="twitter:description" content={shareDescription} />
    <meta name="twitter:image" content={shareImg} />
    {#if shareImgAlt}
      <meta name="twitter:image:alt" content={shareImgAlt} />
    {/if}

    <meta property="fb:app_id" content="319194411438328" />
    <meta property="fb:admins" content="616167736" />
    <meta property="fb:admins" content="625796953" />
    <meta property="fb:admins" content="571759798" />

    <!-- svelte-ignore hydration_html_changed -->
    {@html `<${'script'} type="application/ld+json">${JSON.stringify(
      orgLdJson
    )}</script>`}
    <!-- svelte-ignore hydration_html_changed -->
    {@html `<${'script'} type="application/ld+json">${JSON.stringify(
      articleLdJson
    )}</script>`}
  {/key}
</svelte:head>
