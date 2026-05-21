<svelte:head>
  <!-- Segment analytics.js -->
  <link href="https://cdn.segment.com" rel="preconnect" />
  <script>
    window.analytics = window.analytics || [];
    if (!window.analytics.initialize && !window.analytics.invoked) {
      window.analytics.invoked = true;
      window.analytics.methods = [
        'trackSubmit',
        'trackClick',
        'trackLink',
        'trackForm',
        'pageview',
        'identify',
        'reset',
        'group',
        'track',
        'ready',
        'alias',
        'debug',
        'page',
        'once',
        'off',
        'on',
        'addSourceMiddleware',
        'addIntegrationMiddleware',
        'setAnonymousId',
        'addDestinationMiddleware',
      ];
      window.analytics.factory = function (method) {
        return function () {
          var args = Array.prototype.slice.call(arguments);
          args.unshift(method);
          window.analytics.push(args);
          return window.analytics;
        };
      };
      for (var i = 0; i < window.analytics.methods.length; i++) {
        var method = window.analytics.methods[i];
        window.analytics[method] = window.analytics.factory(method);
      }
      window.analytics.load = function (writeKey, options) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src =
          'https://cdn.segment.com/analytics.js/v1/' +
          writeKey +
          '/analytics.min.js';
        var first = document.getElementsByTagName('script')[0];
        first.parentNode.insertBefore(script, first);
        window.analytics._loadOptions = options;
      };
      window.analytics.SNIPPET_VERSION = '4.15.2';
      window.analytics.load('IEWBqQ8VWHijTQxb7lEBGFGS9uIJzigZ', {
        integrations: { All: true, Chartbeat: false },
      });
    }
  </script>
  <!-- RPTA initialization -->
  <script>
    window.rpta = window.rpta || { cmd: [] };
    var pending = window.rpta.cmd.slice();
    window.rpta.debug = false;
    window.rpta.trackEvent = function (name, props) {
      if (window.rpta.debug)
        console.log('%c rpta:trackEvent', 'color: seagreen', name, props);
      window.analytics.track(name, props);
    };
    window.rpta.trackPageView = function (category, props) {
      if (window.rpta.debug)
        console.log(
          '%c rpta:trackPageView',
          'color: seagreen',
          category,
          props,
        );
      window.analytics.page(category, props);
    };
    window.rpta.trackIdentity = function (userId, props) {
      if (window.rpta.debug)
        console.log(
          '%c rpta:trackIdentity',
          'color: seagreen',
          userId,
          props,
        );
      if (userId) {
        window.analytics.identify(userId, props);
      } else {
        window.analytics.identify(props);
      }
    };
    window.rpta.executeCMD = function (cmds) {
      cmds.forEach(function (fn) {
        fn();
      });
    };
    window.rpta.initialized = true;
    window.rpta.executeCMD(pending);
  </script>
</svelte:head>
