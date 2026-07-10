// Resolves the page origin from `baseUrl`. `baseUrl` may be root-relative
// (e.g. Vite/SvelteKit's BASE_URL), which `new URL()` can't parse on its
// own. Resolving it against `pageUrl` recovers the origin in that case,
// including during SSR/prerendering where there's no `window` to fall
// back to.
export const getOrigin = (baseUrl: string, pageUrl: URL) => {
  try {
    return new URL(baseUrl, pageUrl).origin;
  } catch {
    return pageUrl?.origin ?? '';
  }
};
