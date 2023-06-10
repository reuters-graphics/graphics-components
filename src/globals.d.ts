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
  // eslint-disable-next-line no-unused-vars
  interface Window {
    /** Google analytics dataLayer */
    dataLayer: Record<string, any>,
    /** Chartbeat config */
    _sf_async_config: ChartbeatConfig,
    /** Chartbeat method */
    pSUPERFLY: (config: { path: string, title: string }) => void,
  }
}

export {};
