<!-- @component `SEO` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-ads-analytic-seo--docs) -->
<script lang="ts">
  /**
   * Base url for the page, which in [Vite-based projects](https://vitejs.dev/guide/build.html#public-base-path)
   * is globally available as `import.meta.env.BASE_URL`.
   * @requiredx
   * @type {string}
   */
  export let baseUrl: string = '';
  /**
   * [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) object for the page.
   * @required
   * @type {URL}
   */
  export let pageUrl: URL | null = null;

  /**
   * SEO title
   * @required
   * @type {string}
   */
  export let seoTitle: string;
  /**
   * SEO description
   * @required
   * @type {string}
   */
  export let seoDescription: string;
  /**
   * Share title
   * @required
   * @type {string}
   */
  export let shareTitle: string;
  /**
   * Share description
   * @required
   * @type {string}
   */
  export let shareDescription: string;
  /**
   * Share image path. **Must be an absolute path.**
   * @required
   * @type {string}
   */
  export let shareImgPath: string;
  /**
   * Share image alt text, up to 420 characters.
   * @type {string}
   */
  export let shareImgAlt: string = '';
  /**
   * Publish time as an [ISO string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
   * @type {string}
   */
  export let publishTime: string = '';
  /**
   * Updated time as an [ISO string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
   * @type {string}
   */
  export let updateTime: string = '';

  interface GraphicAuthor {
    name: string;
    url: string;
  }

  /**
   * Array of authors for the piece. Each author object must have `name` and `url` attributes.
   */
  export let authors: GraphicAuthor[] = [];

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

  $: origin = getOrigin(baseUrl);
  $: canonicalUrl = (origin + pageUrl?.pathname).replace(/index\.html\/$/, '');

  const orgLdJson = {
    '@context': 'http://schema.org',
    '@type': 'NewsMediaOrganization',
    '@id': 'https://www.reuters.com/#publisher',
    name: 'Reuters',
    logo: {
      '@type': 'ImageObject',
      url: 'https://s3.reutersmedia.net/resources_v2/images/reuters_social_logo.png',
      width: '200',
      height: '200',
    },
    url: 'https://www.reuters.com/',
  };

  $: articleLdJson = {
    '@context': 'http://schema.org',
    '@type': 'NewsArticle',
    headline: seoTitle,
    url: canonicalUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    thumbnailUrl: shareImgPath,
    image: [
      {
        '@context': 'http://schema.org',
        '@type': 'ImageObject',
        url: shareImgPath,
      },
    ],
    publisher: { '@id': 'https://www.reuters.com/#publisher' },
    copyrightHolder: { '@id': 'https://www.reuters.com/#publisher' },
    sourceOrganization: { '@id': 'https://www.reuters.com/#publisher' },
    copyrightYear: new Date().getFullYear(),
    dateCreated: publishTime,
    datePublished: publishTime,
    dateModified: updateTime,
    author: authors.map(({ name, url }) => ({
      '@type': 'Person',
      name,
      url,
    })),
    creator: authors.map(({ name }) => name),
    articleSection: 'Graphics',
    isAccessibleForFree: true,
    keywords: ['Reuters graphics', 'Reuters', 'graphics', 'Interactives'],
  };
</script>

<svelte:head>
  {#key canonicalUrl}
    <title>{seoTitle}</title>
    <meta name="description" content="{seoDescription}" />
    <link rel="canonical" href="{canonicalUrl}" />
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

    <meta property="og:url" content="{canonicalUrl}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="{shareTitle}" itemprop="name" />
    <meta
      property="og:description"
      content="{shareDescription}"
      itemprop="description"
    />
    <meta property="og:image" content="{shareImgPath}" itemprop="image" />
    <meta property="og:site_name" content="Reuters" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@ReutersGraphics" />
    <meta name="twitter:creator" content="@ReutersGraphics" />
    <meta name="twitter:domain" content="{origin}" />
    <meta name="twitter:title" content="{shareTitle}" />
    <meta name="twitter:description" content="{shareDescription}" />
    <meta name="twitter:image" content="{shareImgPath}" />
    {#if shareImgAlt}
      <meta name="twitter:image:alt" content="{shareImgAlt}" />
    {/if}

    <meta property="fb:app_id" content="319194411438328" />
    <meta property="fb:admins" content="616167736" />
    <meta property="fb:admins" content="625796953" />
    <meta property="fb:admins" content="571759798" />

    {@html `<${'script'} type="application/ld+json">${JSON.stringify(
      orgLdJson
    )}</script>`}
    {@html `<${'script'} type="application/ld+json">${JSON.stringify(
      articleLdJson
    )}</script>`}
  {/key}
</svelte:head>
