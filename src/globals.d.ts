/* eslint-disable @typescript-eslint/no-explicit-any */
interface ChartbeatConfig {
  uid?: number;
  domain?: string;
  flickerControl?: boolean;
  useCanonical?: boolean;
  useCanonicalDomain?: boolean;
  sections?: string;
  authors?: string;
}

declare global {
  interface Window {
    /** Google analytics dataLayer */
    dataLayer: Record<string, any>;
    /** Chartbeat config */
    _sf_async_config: ChartbeatConfig;
    /** Chartbeat method */
    pSUPERFLY: {
      virtualPage: (config: { path: string; title: string }) => void;
    };
    /** Graphics ads */
    graphicsAdQueue: any[];
    /** Segment analytics.js */
    analytics: {
      track: (event: string, properties?: Record<string, unknown>) => void;
      page: (category: string, properties?: Record<string, unknown>) => void;
      identify: (...args: unknown[]) => void;
      [key: string]: unknown;
    };
    /** Raptor Platform Tracking Analytics */
    rpta: {
      initialized?: boolean;
      debug?: boolean;
      cmd: Array<() => void>;
      trackEvent: (
        eventName: string,
        properties?: Record<string, unknown>
      ) => void;
      trackPageView: (
        category: string,
        properties?: Record<string, unknown>
      ) => void;
      trackIdentity: (
        userId: string,
        properties?: Record<string, unknown>
      ) => void;
      executeCMD: (cmds: Array<() => void>) => void;
    };
  }
}

export {};
