import trackTiming from './trackTiming';
import getParameterByName from './getParameterByName';
import Ias from './ias';

const ONETRUST_LOGS = 'ot_logs';
const ONETRUST_GEOLOCATION_MOCK = 'ot_geolocation_mock';
const ONETRUST_SCRIPT_ID = '38cb75bd-fbe1-4ac8-b4af-e531ab368caf-test';

export default () => {
  const freestar = (<any>window).freestar || {};
  freestar.queue = freestar.queue || [];
  freestar.config = freestar.config || {};
  freestar.config.enabled_slots = [];
  freestar.initCallback = function() {
    freestar.config.enabled_slots.length === 0 ?
      (freestar.initCallbackCalled = false) :
      freestar.newAdSlots(freestar.config.enabled_slots);
  };

  freestar.config.channel = '/4735792/reuters.com/home';

  trackTiming('onetrust_start');

  (<any>window).initBootstrap(
    {
      onetrust_logs: getParameterByName(ONETRUST_LOGS) || 'false',
      geolocation_mock:
        getParameterByName(ONETRUST_GEOLOCATION_MOCK) || 'default',
      onetrust_script_id: ONETRUST_SCRIPT_ID,
    },
    (onetrustResponse) => {
      trackTiming('onetrust_completion');
      // Never used...
      // const {
      //   require_consent, // eslint-disable-line camelcase
      //   consent,
      //   require_gdpr_consent, // eslint-disable-line camelcase
      //   gdpr_consent_data, // eslint-disable-line camelcase
      //   require_ccpa_consent, // eslint-disable-line camelcase
      //   ccpa_consent_data, // eslint-disable-line camelcase
      // } = onetrustResponse;

      // Trigger data layer events to GTM
      (<any>window).dataLayer = (<any>window).dataLayer || [];
      (<any>window).dataLayer.push({
        event: 'bootstrap_results',
        ...onetrustResponse,
      });

      // Never used...
      // const opt_in = require_consent ? consent : true; // eslint-disable-line camelcase
      // const token =
      //   (require_gdpr_consent ? gdpr_consent_data : undefined) || // eslint-disable-line camelcase
      //   (require_ccpa_consent ? ccpa_consent_data : undefined); // eslint-disable-line camelcase
      // const consent_given = require_consent && consent; // eslint-disable-line camelcase

      const iasPromise = Ias();

      return Promise.all([iasPromise]).then((responses) => {
        const [iasResponse] = responses;

        return {
          ...onetrustResponse,
          ias: iasResponse,
        };
      });
    }
  );

  (<any>window).bootstrap.getResults((result) => {
    // Set GAM
    (<any>window).googletag = (<any>window).googletag || { cmd: [] };
    (<any>window).googletag.cmd.push(() => {
      (<any>window).googletag.pubads().enableSingleRequest();
      (<any>window).googletag.pubads().enableAsyncRendering();
      (<any>window).googletag.pubads().collapseEmptyDivs(true);

      // Global Ads test targeting
      const adstest = new URL(document.location.href).searchParams.get('adstest');
      if (adstest) {
        (<any>window).googletag.pubads().setTargeting('adstest', adstest);
      }

      const template = (<any>document.querySelector('meta[name="ad:template"]'))?.content;
      if (template) {
        (<any>window).googletag.pubads().setTargeting('template', template);
      }
    });

    if (!Array.isArray((<any>window).graphicsAdQueue)) {
      console.error('Ad queue not initialized!');
    }

    freestar.queue.push(function() {
      freestar.newAdSlots((<any>window).graphicsAdQueue || [], 'foobar');
    });

    freestar.queue.push(function() {
      (<any>window).googletag.pubads().set('page_url', 'https://www.reuters.com/'); // This line should only be used for testing
    });
  });
};
