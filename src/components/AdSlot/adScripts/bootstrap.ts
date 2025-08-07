/* eslint-disable @typescript-eslint/no-explicit-any */
import getParameterByName from './getParameterByName';
import Ias from './ias';

const ONETRUST_LOGS = 'ot_logs';
const ONETRUST_GEOLOCATION_MOCK = 'ot_geolocation_mock';
const ONETRUST_SCRIPT_ID = '38cb75bd-fbe1-4ac8-b4af-e531ab368caf';

export const loadBootstrap = () => {
  (<any>window).freestar = (<any>window).freestar || {};
  const freestar = (<any>window).freestar;
  freestar.debug = true;
  freestar.queue = freestar.queue || [];
  freestar.config = freestar.config || {};
  freestar.config.enabled_slots = [];
  freestar.initCallback = function () {
    if (freestar.config.enabled_slots.length === 0) {
      freestar.initCallbackCalled = false;
    } else {
      freestar.newAdSlots(freestar.config.enabled_slots);
    }
  };

  freestar.config.channel = '/4735792/reuters.com/graphics';

  (<any>window).initBootstrap(
    {
      onetrust_logs: getParameterByName(ONETRUST_LOGS) || 'false',
      geolocation_mock:
        getParameterByName(ONETRUST_GEOLOCATION_MOCK) || 'default',
      onetrust_script_id: ONETRUST_SCRIPT_ID,
    },
    (onetrustResponse: any) => {
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

  (<any>window).bootstrap.getResults(() => {
    // Set GAM
    window.googletag = (<any>window).googletag || { cmd: [] };
    window.googletag.cmd.push(() => {
      window.googletag.pubads().enableSingleRequest();
      /**
       * @TODO Property 'enableAsyncRendering' does not exist on type 'PubAdsService'.
       */
      // @ts-ignore window global
      window.googletag.pubads().enableAsyncRendering();
      window.googletag.pubads().collapseEmptyDivs(true);

      window.googletag
        .pubads()
        .addEventListener('slotRenderEnded', function (event) {
          const adDiv = document.getElementById(event.slot.getSlotElementId());
          if (!adDiv) return;
          // If the ad slot is empty
          if (event.isEmpty) {
            adDiv.classList.add('unfulfilled-ad');
          } else {
            adDiv.classList.remove('unfulfilled-ad');
          }
        });
    });

    // Set page-level key-values
    // cf: https://help.freestar.com/help/using-key-values
    freestar.queue.push(function () {
      // Global Ads test targeting
      const adstest = new URL(document.location.href).searchParams.get(
        'adstest'
      );
      if (adstest) {
        window.googletag.pubads().setTargeting('adstest', adstest);
      }

      // Use the URL path to create a unique ID for the page.
      const graphicId =
        window.location.pathname
          .split('/')
          // Get the first lowercase slug in the pathname, which is the graphic UID.
          .filter((d) => d.match(/[a-z0-9]+/) && d !== 'graphics')[0] ||
        'unknown-graphic';
      window.googletag.pubads().setTargeting('template', 'graphics');
      window.googletag.pubads().setTargeting('graphicId', graphicId);
    });

    if (!Array.isArray((<any>window).graphicsAdQueue)) {
      console.error('Ad queue not initialized!');
    }

    freestar.queue.push(function () {
      freestar.newAdSlots(
        (<any>window).graphicsAdQueue || [],
        freestar.config.channel
      );
    });
  });
};
