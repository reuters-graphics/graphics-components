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
  }
}

export {};
