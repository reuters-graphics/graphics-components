/**
 * Shape of the data consumed by `TeamCard` and its inner `Card`.
 *
 * Kept loose on purpose: the upstream Opta payload contains many more fields,
 * but these are the only ones the cards actually read. Data flows in via the
 * `teamStats` prop — nothing here belongs in the football context.
 */
export type TeamStats = {
  /** Full country/team name. */
  name: string;
  /** Short code (e.g. "BRA"), used at very small viewports. */
  code?: string;
  /** Slug used to link to the team detail page. */
  slug?: string;
  /** Compact display name (e.g. "S. Korea") used on narrow viewports. */
  shortName?: string;
  /** Points earned in the group stage. */
  points: number;
  /** Per-match results, e.g. ['W', 'D', 'L']. Iterated as badges in `Card`. */
  results: string[];
  /** True when the team has qualified out of the group. */
  qualified?: boolean;
};
