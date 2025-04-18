export const normalizeUrl = (url: string) =>
  /^http/.test(url) ? url : `https://www.reuters.com${url}`;
