export const getTitle = () => {
  const ogTag = document.querySelector("meta[property='og:title']");
  if (ogTag) return encodeURIComponent(ogTag.getAttribute('content'));
  return encodeURIComponent(document.title);
};

export const getHref = () => encodeURIComponent(window.location.href);
