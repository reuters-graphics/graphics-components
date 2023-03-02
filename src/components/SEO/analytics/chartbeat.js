/* eslint-disable */
const attachScript = () => {
  // If script is already attached, skip
  if (
    document.querySelector(
      'script[src="//static.chartbeat.com/js/chartbeat.js"]'
    )
  )
    return;
  // ... else attach it.
  const e = document.createElement('script');
  const n = document.getElementsByTagName('script')[0];
  e.type = 'text/javascript';
  e.async = true;
  e.src = '//static.chartbeat.com/js/chartbeat.js';
  n.parentNode.insertBefore(e, n);
};

export default (authors) => {
  // @ts-ignore
  const _sf_async_config = (window._sf_async_config =
    window._sf_async_config || {});
  _sf_async_config.uid = 52639;
  _sf_async_config.domain = 'reuters.com';
  _sf_async_config.flickerControl = false;
  _sf_async_config.useCanonical = true;
  _sf_async_config.useCanonicalDomain = true;
  _sf_async_config.sections = 'Graphics';
  _sf_async_config.authors = authors.map((a) => a.name).join(',');
  try {
    attachScript();
  } catch (e) {}
};
