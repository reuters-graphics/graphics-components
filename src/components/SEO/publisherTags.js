export default () => {
  const googletag = window.googletag || {};
  googletag.cmd = googletag.cmd || [];
  (function() {
    const gads = document.createElement('script');
    gads.async = true;
    gads.type = 'text/javascript';
    const useSSL = document.location.protocol === 'https:';
    gads.src =
      (useSSL ? 'https:' : 'http:') +
      '//www.googletagservices.com/tag/js/gpt.js';
    const node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
  })();
  googletag.cmd.push(function() {
    googletag
      .defineSlot(
        '/4735792/reuters_investigates',
        [[300, 250]],
        'div-gpt-ad-1441822201033-0'
      )
      .addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
};
