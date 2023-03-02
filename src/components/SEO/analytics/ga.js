/* eslint-disable */
const attachScript = function (i, s, o, g, r, a, m) {
  i.GoogleAnalyticsObject = r;
  (i[r] =
    i[r] ||
    function () {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = Date.now());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
};
/* eslint-enable */

export default (page, title) => {
  try {
    // @ts-ignore
    if (!window.ga) {
      attachScript(
        window,
        document,
        'script',
        'https://www.google-analytics.com/analytics.js',
        'ga'
      );

      // @ts-ignore
      window.ga('create', 'UA-41619329-3', { cookieDomain: 'auto' });
      // @ts-ignore
      window.ga('require', 'linkid', 'linkid.js');
    }
    // @ts-ignore
    window.ga('send', 'pageview', {
      page,
      title,
    });
  } catch (e) {}
};
