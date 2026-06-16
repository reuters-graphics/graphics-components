/** Social/contact platforms a bio can link to. */
export type SocialPlatform =
  | 'email'
  | 'x'
  | 'twitter'
  | 'linkedin'
  | 'facebook'
  | 'instagram'
  | 'bluesky'
  | 'link';

/** A single contact or social link shown beside an author's name. */
export interface SocialLink {
  /** Which platform this link points to. Controls the icon shown. */
  platform: SocialPlatform;
  /**
   * Destination. For `email`, either a bare address or a `mailto:` URL — the
   * component adds the `mailto:` prefix if it's missing.
   */
  url: string;
  /**
   * Accessible label for the link, read by screen readers. Defaults to a
   * sensible per-platform label that includes the author's name.
   */
  label?: string;
}

/** One author/contributor rendered as a row inside `BioBox`. */
export interface Author {
  /** Full name, shown in bold. */
  name: string;
  /** Job title, shown under the name, e.g. "Climate reporter". */
  title?: string;
  /** Short biography. Plain text. */
  bio?: string;
  /** Avatar image URL. Falls back to the Reuters Kinesis logo when omitted. */
  imageUrl?: string;
  /** Alt text for the avatar image. Defaults to the author's name. */
  imageAlt?: string;
  /** Contact and social links shown beside the name. */
  links?: SocialLink[];
}
