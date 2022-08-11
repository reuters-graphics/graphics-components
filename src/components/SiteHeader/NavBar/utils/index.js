export const normalizeUrl = (url) =>
  /^http/.test(url) ? url : `https://www.reuters.com${url}`;
