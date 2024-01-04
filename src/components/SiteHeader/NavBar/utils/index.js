export const normalizeUrl = (url) =>
  /^http/.test(url) ? url : `https://www.reuters.com${url}`;

export const normalizeUrlJp = (url) =>
  /^http/.test(url) ? url : `https://jp.reuters.com${url}`;
