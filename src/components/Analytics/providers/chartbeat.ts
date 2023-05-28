// Reuters Chartbeat UID
const UID = 52639;

/* eslint-disable */
const attachScript = () => {
  // If script is already attached, skip
  if (
    document.querySelector(
      'script[src="//static.chartbeat.com/js/chartbeat.js"]'
    )
  ) { return; }
  // ... else attach it.
  const e = document.createElement('script');
  const n = document.getElementsByTagName('script')[0];
  e.type = 'text/javascript';
  e.async = true;
  e.src = '//static.chartbeat.com/js/chartbeat.js';
  n.parentNode.insertBefore(e, n);
};
/* eslint-enable */

export default (authors: { name: string }[]) => {
  // @ts-ignore
  const config = window._sf_async_config = (window._sf_async_config || {});
  config.uid = UID;
  config.domain = 'reuters.com';
  config.flickerControl = false;
  config.useCanonical = true;
  config.useCanonicalDomain = true;
  config.sections = 'Graphics';
  config.authors = authors.map((a) => a.name).join(',');

  try {
    attachScript();
  } catch (e) { console.warn(`Error initialising Chartbeat Analytics: ${e}`); }
};

export const registerPageview = () => {
  // @ts-ignore
  if (!window.pSUPERFLY) return;
  // @ts-ignore
  window.pSUPERFLY({
    path: window.location.pathname,
    title: document.title,
  });
};
