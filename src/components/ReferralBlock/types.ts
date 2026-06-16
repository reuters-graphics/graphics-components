/**
 * A manually authored referral, used to populate `ReferralBlock` with your own
 * stories instead of fetching recent stories from Reuters.com.
 */
export interface ReferralItem {
  /** URL the referral links to. Used as-is, so include the full address. */
  url: string;
  /** Kicker or category text shown above the title. */
  kicker: string;
  /** Headline text for the referral. */
  title: string;
  /** URL of the thumbnail image. */
  imageUrl: string;
  /** Alt text for the thumbnail image. */
  imageAlt?: string;
  /**
   * Publish time shown beneath the title. Accepts a `Date` or any value the
   * `Date` constructor understands (e.g. an ISO string). Omit to hide the time.
   */
  time?: Date | string | number;
}

/**
 * Anchor [target](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target)
 * for a referral link. The standard keywords are suggested, but any named
 * browsing context is allowed.
 */
export type LinkTarget =
  | '_self'
  | '_blank'
  | '_parent'
  | '_top'
  | (string & {});

export interface Referrals {
  statusCode: number;
  message: string;
  result: Result;
}

interface Result {
  date_modified: Date;
  pagination: Pagination;
  fetch_type: string;
  title: string;
  articles: Article[];
}

export interface Article {
  id: string;
  canonical_url: string;
  basic_headline: string;
  title: string;
  lead_art: LeadArt;
  description: string;
  web: string;
  content_code: string;
  updated_time: Date;
  published_time: Date;
  display_time: Date;
  thumbnail: LeadArt;
  primary_media_type: string;
  source: Source;
  redirect_url: string;
  distributor: string;
  authors: Author[];
  kicker: Kicker;
  content_elements: unknown[];
  headline_category?: string;
  content?: {
    third_party?: unknown;
  };
}

interface Author {
  topic_url: string;
  thumbnail: Thumbnail;
  id: string;
  name: string;
  first_name: string;
  last_name: string;
  company: string;
  social_links: SocialLink[];
  byline: string;
}

interface SocialLink {
  url: string;
  site: string;
}

interface Thumbnail {
  url: string;
  resizer_url: string;
  renditions: Renditions;
}

interface Renditions {
  square: Landscape;
  landscape: Landscape;
  portrait: Landscape;
  original: Landscape;
}

interface Landscape {
  '60w': string;
  '120w': string;
  '240w': string;
  '480w': string;
  '960w': string;
  '1080w': string;
  '1200w': string;
  '1920w': string;
}

interface Kicker {
  name: string;
  path: string;
  names: string[];
}

interface LeadArt {
  type: string;
  url: string;
  resizer_url: string;
  renditions: Renditions;
  id: string;
  caption?: string;
  alt_text: string;
  width: number;
  height: number;
  subtitle: string;
  updated_at: Date;
}

interface Source {
  name: string;
}

interface Pagination {
  size: number;
  expected_size: number;
}
