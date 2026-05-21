export interface RPTAEventProperties {
  /** Event category grouping (e.g. "Article", "Video", "Subscription", "Markets") */
  category?: string;
  /** Human-readable label describing the event context (e.g. "Share", a URL, a video title) */
  label?: string;
  /** Set to 1 for events not triggered by user action (e.g. impressions). Default 0. */
  nonInteraction?: number;
  /** Set to 1 for events triggered by direct user interaction. Default 0. */
  uiInteraction?: number;
  /** Override the default event name sent downstream (e.g. "share.article.share", "save.article.save") */
  analyticsEvent?: string;
  /** Identifier for the UI element involved (e.g. "share-icon", "save-icon", "social share") */
  ui_element?: string;
  /** Label displayed on the UI element */
  ui_element_label?: string;
  /** Position of the element in a list or carousel (0-indexed or named) */
  ui_element_position?: string | number;
  /** Section of the page where the element appears (e.g. "Article Card", "Header") */
  ui_element_location?: string;
  /** Category of the UI element (e.g. "article") */
  ui_element_category?: string;
  /** Type of interaction performed (e.g. "share", "save", "unsave") */
  ui_element_interaction?: string;
  /** Type of content (e.g. "Landing Page") */
  content_type?: string;
  /** Primary content channel (e.g. "Climate") */
  content_channel?: string;
  /** Top-level topic channel */
  topic_channel?: string;
  /** Sub-channel within the topic */
  topic_sub_channel?: string;
  /** Canonical URL of the current page */
  canonicalUrl?: string;
  [key: string]: unknown;
}

function isReutersProduction() {
  if (typeof window === 'undefined') return false;
  const hostname = window.location?.hostname;
  return hostname === 'reuters.com' || hostname?.endsWith('.reuters.com');
}

function ensureRPTA() {
  if (!isReutersProduction()) return false;
  window.rpta = window.rpta || { cmd: [] };
  return true;
}

export const trackEvent = (
  eventName: string,
  properties?: RPTAEventProperties
) => {
  if (!ensureRPTA()) return;
  window.rpta.cmd.push(() => {
    window.rpta.trackEvent(eventName, properties);
  });
};

export const trackPageView = (
  category: string,
  properties?: RPTAEventProperties
) => {
  if (!ensureRPTA()) return;
  window.rpta.cmd.push(() => {
    window.rpta.trackPageView(category, properties);
  });
};

export const trackIdentity = (
  userId: string,
  properties?: RPTAEventProperties
) => {
  if (!ensureRPTA()) return;
  window.rpta.cmd.push(() => {
    window.rpta.trackIdentity(userId, properties);
  });
};

export const createTrackEvent =
  (defaults: RPTAEventProperties) =>
  (eventName: string, properties?: RPTAEventProperties) =>
    trackEvent(eventName, { ...defaults, ...properties });
