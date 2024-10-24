const SITE_ID = 'reuters.com';

const attachScript = () => {
  const b = document.body;
  const e = document.createElement('script');

  e.id = 'parsely-cfg';
  e.src = `//cdn.parsely.com/keys/${SITE_ID}/p.js`;
  e.setAttribute('async', '');
  e.setAttribute('defer', '');
  b.appendChild(e);
};

export default () => {
  window.PARSELY = window.PARSELY || {
    autotrack: false,
    onReady() {
      window.PARSELY.updateDefaults({
        data: {
          is_logged_in: false,
        },
      });
      window.PARSELY.beacon.trackPageView();
    },
  };
  attachScript();
};

export const registerPageview = () => {
  if (typeof window === 'undefined' || !window.PARSELY) return;
  window.PARSELY.beacon.trackPageView();
};
