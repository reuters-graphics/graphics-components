import type { Article } from './types';

const getUrlFromPath = (path: string) => {
  const base = 'https://www.reuters.com';

  try {
    return new URL(path);
  } catch {
    try {
      return new URL(path, base);
    } catch {
      return null;
    }
  }
};

const isCurrentPage = (urlPath: string) => {
  if (typeof window === 'undefined' || typeof window.location === 'undefined') {
    return false;
  }
  const url = getUrlFromPath(urlPath);
  if (!url) return false;
  return window.location.href === url.href;
};

export const articleIsNotCurrentPage = (article: Article) => {
  const { redirect_url: redirectUrl, canonical_url: canonicalUrl } = article;

  if (redirectUrl) return !isCurrentPage(redirectUrl);
  if (canonicalUrl) return !isCurrentPage(canonicalUrl);
  return true;
};
