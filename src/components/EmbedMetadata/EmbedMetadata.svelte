<!--
  @component Renders the minimal metadata an embed (iframe) page needs — canonical link, `og:image`, and a `noindex, nofollow, noarchive` robots tag — and mounts a Pym.js child so the embed resizes inside its parent frame. Use instead of `SEO` on embed pages.
  
  [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-page-metadata-embedmetadata--docs) 
-->
<script lang="ts">
  import PymChild from '../PymChild/PymChild.svelte';

  interface Props {
    /**
     * The project's fully-qualified base URL (origin + trailing slash). Only its origin is used, to build the canonical and og:url tags. In graphics kit projects this is injected at build time as the global `__BASE_URL__` — no import needed.
     */
    baseUrl: string;
    /**
     * [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) object for the page.
     */
    pageUrl: URL;
    /**
     * Path to an image used to preview the embed in Reuters Connect. **Must be an absolute path.**
     */
    previewImgPath: string;
    /**
     * Pym.js polling interval, passed through to the `PymChild` component.
     */
    polling?: number;
  }

  let { baseUrl, pageUrl, previewImgPath, polling = 500 }: Props = $props();

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

  // Resolve the share image to an absolute URL. og:image requires an absolute
  // path — a relative path silently breaks previews, so fall back to resolving
  // against the page origin.
  const resolveUrl = (path: string, origin: string) => {
    if (!path) return path;
    try {
      return new URL(path).href;
    } catch {
      if (!origin) return path;
      return `${origin}${path.startsWith('/') ? '' : '/'}${path}`;
    }
  };
  let previewImg = $derived(resolveUrl(previewImgPath, origin));
</script>

<svelte:head>
  {#key canonicalUrl}
    <!-- Embeds live inside a parent article and must never be indexed on
    their own. -->
    <meta name="robots" content="noindex, nofollow, noarchive" />
    <link rel="canonical" href={canonicalUrl} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:image" content={previewImg} />
  {/key}
</svelte:head>

<PymChild {polling} />
