export default () => {
  try {
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      /** @type {Gtag.Gtag} */
      window.gtag = function () {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      registerPageview();
    }
  } catch (e) {
    console.warn(`Error initialising Google Analytics: ${e}`);
  }
};

export const registerPageview = () => {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'page_view', {
    page_location: window.location.origin + window.location.pathname,
    page_title: document?.title,
  });
};
