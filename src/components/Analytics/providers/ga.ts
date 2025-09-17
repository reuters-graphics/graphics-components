export default () => {
  registerPageview();
};

export const registerPageview = () => {
  if (typeof window === 'undefined' || !window.dataLayer) return;

  window.dataLayer.push({
    event: 'page_view',
    page_location: window.location.href,
    page_title: document.title,
  });
};
