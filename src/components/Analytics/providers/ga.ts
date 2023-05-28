// Reuters Google Tag ID
const GOOGLE_TAG_ID = 'G-W3Q2X6NTNM';

/* eslint-disable */
const attachScript = () => {
  // If script is already attached, skip
  if (
    document.querySelector(
      `script[src="https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}"]`
    )
  )
    return;
  // ... else attach it.
  const e = document.createElement('script');
  const n = document.getElementsByTagName('script')[0];
  e.type = 'text/javascript';
  e.async = true;
  e.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
  n.parentNode.insertBefore(e, n);
};
/* eslint-enable */

export default () => {
  try {
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      attachScript();
      /** @type {Gtag.Gtag} */
      window.gtag = (...args) => {
        // @ts-ignore
        window.dataLayer.push(...args);
      };
      window.gtag('js', new Date());
      window.gtag('config', GOOGLE_TAG_ID);
    }
  } catch (e) { console.warn(`Error initialising Google Analytics: ${e}`); }
};

export const registerPageview = () => {
  if (!window.gtag) return;
  window.gtag('event', 'page_view', {
    page_location: window.location.origin + window.location.pathname,
  });
};
