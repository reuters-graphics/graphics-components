// Reuters Google Tag ID
const GOOGLE_TAG_ID = 'G-WBSR7WLTGD';

const attachScript = () => {
  // If script is already attached, skip
  // loaded via GTM Container
};

export default () => {
  try {
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      attachScript();
      /** @type {Gtag.Gtag} */
      window.gtag = function () {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      // config event registers a pageview by default
      window.gtag('config', GOOGLE_TAG_ID, {
        send_page_view: false,
      });
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
