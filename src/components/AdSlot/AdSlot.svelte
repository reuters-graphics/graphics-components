<script lang="ts">
  /** ✏️ DOCUMENT your chart's props using TypeScript and JSDoc comments like below! */

  /**
   * The unique placement name from FreeStar dashboard.
   * @required
   */
  export let placementName: string;

  /**
   * The unique slot Id from FreeStar dashboard.
   */
  export let dataFreestarAd: string;

  /** Add an ID to target with SCSS. */
  export let id: string = '';

  /** Add a class to target with SCSS. */
  export let cls: string = '';

  console.log('#GJ Adding Ad to the queue');
  (window as any).graphicsAdQueue = (window as any).graphicsAdQueue || [];
  (window as any).graphicsAdQueue.push({
    placementName,
    slotId: placementName,
  });
  console.log('#GJ Ads were added');

  import Block from '../Block/Block.svelte';
</script>

<!-- @component `AdSlot` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-DocumentCloud--default) -->

<svelte:head>
  <!-- PLACE THIS SECTION INSIDE OF YOUR HEAD TAGS -->
  <!-- Below is a recommended list of pre-connections, which allow the network to establish each connection quicker, speeding up response times and improving ad performance. -->
  <link rel="preconnect" href="https://a.pub.network/" crossorigin="" />
  <link rel="preconnect" href="https://b.pub.network/" crossorigin="" />
  <link rel="preconnect" href="https://c.pub.network/" crossorigin="" />
  <link rel="preconnect" href="https://d.pub.network/" crossorigin="" />
  <link rel="preconnect" href="https://c.amazon-adsystem.com" crossorigin="" />
  <link rel="preconnect" href="https://s.amazon-adsystem.com" crossorigin="" />
  <link rel="preconnect" href="https://btloader.com/" crossorigin="" />
  <link rel="preconnect" href="https://api.btloader.com/" crossorigin="" />
  <link
    rel="preconnect"
    href="https://confiant-integrations.global.ssl.fastly.net"
    crossorigin=""
  />

  <!-- Below is a link to a CSS file that accounts for Cumulative Layout Shift, a new Core Web Vitals subset that Google uses to help rank your site in search -->
  <!-- The file is intended to eliminate the layout shifts that are seen when ads load into the page. If you don't want to use this, simply remove this file -->
  <!-- To find out more about CLS, visit https://web.dev/vitals/ -->
  <link rel="stylesheet" href="https://a.pub.network/reuters-com/cls.css" />

  <script
    id="btstrp"
    src="https://graphics.thomsonreuters.com/cdn/js/bootstrap.static.js">
  </script>

  <script type="text/javascript">
    console.log('#GJ svelte:head is about to be executed');

    const getParameterByName = (name, url = window.location.href) => {
      // eslint-disable-next-line no-useless-escape
      name = name.replace(/[\[\]]/g, '\\$&');
      const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
      const results = regex.exec(url);

      if (!results) {
        return null;
      }

      if (!results[2]) {
        return '';
      }

      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };

    function trackTiming(timingName) {
      const timestamp = window.performance.now();
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'rum_add_timing',
        rum_timing_name: timingName,
        rum_timing_timestamp: timestamp,
      });
    }

    const IAS_REQUEST_TIMEOUT = 600;

    function Ias() {
      return new Promise((resolve) => {
        trackTiming('ias_start');
        const timerId = setTimeout(() => {
          trackTiming('ias_completion_with_timeout');
          resolve('Resolved with timeout');
        }, IAS_REQUEST_TIMEOUT);

        const setupIAS = () => {
          clearTimeout(timerId);
          trackTiming('ias_completion');
          window.__iasPET = window.__iasPET || {};
          window.__iasPET.queue = window.__iasPET.queue || [];
          window.__iasPET.pubId = '931336';
          // eslint-disable-next-line no-console
          console.log('IAS setup complete');
          resolve('loaded');
        };

        // Set up IAS pet.js
        const script = document.createElement('script');
        script.src = '//static.adsafeprotected.com/iasPET.1.js';
        script.setAttribute('async', 'async');
        document.head.appendChild(script);
        script.onload = setupIAS;
        script.onerror = (error) => {
          // eslint-disable-next-line no-console
          console.warn('IAS load error', error);
          resolve('error');
        };
      });
    }

    console.log('#GJ before freestar init', window.freestar);
    var freestar = window.freestar || {};
    freestar.queue = freestar.queue || [];
    freestar.config = freestar.config || {};
    freestar.config.enabled_slots = [];
    freestar.initCallback = function () {
      freestar.config.enabled_slots.length === 0
        ? (freestar.initCallbackCalled = false)
        : freestar.newAdSlots(freestar.config.enabled_slots);
    };

    freestar.config.channel = '/4735792/reuters.com/home';

    const ONETRUST_LOGS = 'ot_logs';
    const ONETRUST_GEOLOCATION_MOCK = 'ot_geolocation_mock';
    const ONETRUST_SCRIPT_ID = '38cb75bd-fbe1-4ac8-b4af-e531ab368caf-test';

    var script = document.querySelector('#btstrp');
    script.addEventListener('load', function () {
      console.log('#GJ', btstrp, 'window.initBootstrap', window.initBootstrap);

      trackTiming('onetrust_start');

      console.log('#GJ before initBootstrap');
      window.initBootstrap(
        {
          onetrust_logs: getParameterByName(ONETRUST_LOGS) || 'false',
          geolocation_mock:
            getParameterByName(ONETRUST_GEOLOCATION_MOCK) || 'default',
          onetrust_script_id: ONETRUST_SCRIPT_ID,
        },
        (onetrust_response) => {
          trackTiming('onetrust_completion');
          const {
            require_consent,
            consent,
            require_gdpr_consent,
            gdpr_consent_data,
            require_ccpa_consent,
            ccpa_consent_data,
          } = onetrust_response;

          // Trigger data layer events to GTM
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'bootstrap_results',
            ...onetrust_response,
          });

          const opt_in = require_consent ? consent : true;
          const token =
            (require_gdpr_consent ? gdpr_consent_data : undefined) ||
            (require_ccpa_consent ? ccpa_consent_data : undefined);
          const consent_given = require_consent && consent;

          const ias_promise = Ias();

          return Promise.all([ias_promise]).then((responses) => {
            const [ias_response] = responses;

            console.log('#GJ resolved all promises');
            return {
              ...onetrust_response,
              ias: ias_response,
            };
          });
        }
      );

      console.log('#GJ before get results');
      window.bootstrap.getResults((result) => {
        // eslint-disable-next-line no-console
        console.log('bootstrap getResults:', result);

        // Set GAM
        window.googletag = window.googletag || { cmd: [] };
        window.googletag.cmd.push(() => {
          window.googletag.pubads().enableSingleRequest();
          window.googletag.pubads().enableAsyncRendering();
          window.googletag.pubads().collapseEmptyDivs(true);

          // Global Ads test targeting
          const adstest = url.searchParams.get('adstest');
          if (adstest) {
            window.googletag.pubads().setTargeting('adstest', adstest);
          }

          const template = document.querySelector(
            'meta[name="ad:template"]'
          )?.content;
          if (template) {
            window.googletag.pubads().setTargeting('template', template);
          }
        });

        console.log('#GJ adding ads', window.graphicsAdQueue);
        if (!Array.isArray(window.graphicsAdQueue)) {
          console.error('Ad queue not initialized!');
        }

        freestar.queue.push(function () {
          freestar.newAdSlots(window.graphicsAdQueue || [], 'foobar');
        });

        freestar.queue.push(function () {
          googletag.pubads().set('page_url', 'https://www.reuters.com/'); // This line should only be used for testing
        });

        console.log('#GJ Ads were added 2');
      });
    });

    console.log('#GJ svelte:head was executed');
  </script>
  <script
    src="https://a.pub.network/reuters-com/pubfig.min.js"
    data-cfasync="false"
    async></script>
</svelte:head>

<Block id="{id}" cls="freestar-adslot {cls}">
  <div data-freestar-ad="{dataFreestarAd || null}" id="{placementName}"></div>
</Block>
