import getParameterByName from './getParameterByName';
import Ias from './ias';
import { loadScript } from './loadScript';

const ONETRUST_LOGS = 'ot_logs';
const ONETRUST_GEOLOCATION_MOCK = 'ot_geolocation_mock';
const ONETRUST_SCRIPT_ID = '38cb75bd-fbe1-4ac8-b4af-e531ab368caf-test';

export const loadBootstrap = () => {
  (<any>window).freestar = (<any>window).freestar || {};
  const freestar = (<any>window).freestar;
  freestar.debug = true;
  freestar.queue = freestar.queue || [];
  freestar.config = freestar.config || {};
  freestar.config.enabled_slots = [];
  freestar.initCallback = function() {
    freestar.config.enabled_slots.length === 0 ?
      (freestar.initCallbackCalled = false) :
      freestar.newAdSlots(freestar.config.enabled_slots);
  };

  // Ask Rachel
  freestar.config.channel = '/4735792/reuters.com/home';

  (<any>window).initBootstrap(
    {
      onetrust_logs: getParameterByName(ONETRUST_LOGS) || 'false',
      geolocation_mock:
        getParameterByName(ONETRUST_GEOLOCATION_MOCK) || 'default',
      onetrust_script_id: ONETRUST_SCRIPT_ID,
    },
    (onetrustResponse) => {
      const iasPromise = Ias();

      // Ask Thea about Permutive implementation (considering there are no logged in users on Graphics)
      // Should we use Permutive at all?
      // Should we import ArcP SDK to graphics to get the same user as logged in on RCom?
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
    // Load Freestar script
    loadScript('https://a.pub.network/reuters-com/pubfig.min.js');

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

      // Ask Rachel about targeting
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
