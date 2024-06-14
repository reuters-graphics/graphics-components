// Reuters Chartbeat UID
const UID = 52639;

const URL = '//static.chartbeat.com/js/chartbeat.js';

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

export default (authors: { name: string }[]) => {
  window._sf_async_config = {
    uid: UID,
    domain: 'reuters.com',
    flickerControl: false,
    useCanonical: true,
    useCanonicalDomain: true,
    sections: 'Graphics',
    authors: authors.map((a) => a?.name || '').join(','),
    ...(window._sf_async_config || {}),
  };

  try {
    attachScript();
  } catch (e) { console.warn(`Error initialising Chartbeat Analytics: ${e}`); }
};

export const registerPageview = () => {
  if (typeof window === 'undefined' || !window.pSUPERFLY) return;
  window.pSUPERFLY.virtualPage({
    path: window.location.pathname,
    title: document?.title,
  });
};
