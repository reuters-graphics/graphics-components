// Reuters Google Tag ID
const GOOGLE_TAG_ID = 'G-W3Q2X6NTNM';

const URL = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;

const attachScript = () => {
  // If script is already attached, skip
  if (document.querySelector(`script[src="${URL}"]`)) return;
  // ... else attach it.
  const e = document.createElement('script');
  const n = document.getElementsByTagName('script')[0];
  e.type = 'text/javascript';
  e.async = true;
  e.src = URL;
  n.parentNode.insertBefore(e, n);
};

export default () => {
  try {
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      attachScript();
      /** @type {Gtag.Gtag} */
      window.gtag = (...args) => {
        window.dataLayer.push(...args);
      };
      window.gtag('js', new Date());
      // config event registers a pageview by default
      window.gtag('config', GOOGLE_TAG_ID, {
        send_page_view: false,
      });
      registerPageview();
    }
  } catch (e) { console.warn(`Error initialising Google Analytics: ${e}`); }
};

export const registerPageview = () => {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'page_view', {
    page_location: window.location.origin + window.location.pathname,
    page_title: document?.title,
  });
};
