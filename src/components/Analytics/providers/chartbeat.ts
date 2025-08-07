// Reuters Chartbeat UID
const UID = 52639;

const attachScript = () => {
  // If script is already attached, skip
  // loaded via GTM Container
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
  } catch (e) {
    console.warn(`Error initialising Chartbeat Analytics: ${e}`);
  }
};

export const registerPageview = () => {
  if (typeof window === 'undefined' || !window.pSUPERFLY) return;
  window.pSUPERFLY.virtualPage({
    path: window.location.pathname,
    title: document?.title,
  });
};
