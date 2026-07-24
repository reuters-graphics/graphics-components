/**
 * Local view-model types for the `football-newsapp` namespace.
 *
 * ⚠️ INTERIM SHAPES — MAINTAINER NOTE
 * -----------------------------------
 * Per #457 these shapes are meant to come from the companion package
 * `@reuters-graphics/opta-football-data` (each selector's output type is a
 * component's prop type). That package is **not published yet**, so to keep
 * this branch buildable the minimal view-model shapes the components consume
 * are mirrored here. They are deliberately permissive (index signatures) so
 * the real Opta feed can carry extra fields.
 *
 * When `opta-football-data` lands, replace the bodies below with
 * `export type { … } from '@reuters-graphics/opta-football-data'` — the
 * component prop types already reference these names, so the swap is local.
 *
 * Data still flows to components via **props**; these are just the type
 * contracts for that data. Nothing here belongs in {@link FootballContext}.
 */

/** A `{ id, name }` reference (country, competition, ruleset…). */
export interface Ref {
  id: string;
  name?: string;
  [key: string]: unknown;
}

/** A tournament team (roster entry). */
export interface Team {
  id: string;
  code: string;
  name: string;
  shortName: string;
  slug: string;
  qualified: boolean;
  active: boolean;
  [key: string]: unknown;
}

/** One contestant (team) entry on a match. */
export interface Contestant {
  id: string;
  name?: string;
  shortName?: string;
  officialName?: string;
  code?: string;
  position?: 'home' | 'away';
  country?: Ref;
  [key: string]: unknown;
}

/** A venue. */
export interface Venue {
  id: string;
  name?: string;
  shortName?: string;
  longName?: string;
  city?: string;
  country?: string;
  countryCode?: string;
  capacity?: number;
  latitude?: string;
  longitude?: string;
  timeZone?: string;
  [key: string]: unknown;
}

export interface Goal {
  contestantId: string;
  type: string;
  timeMin: number;
  periodId?: number;
  scorerId?: string;
  scorerName?: string;
  homeScore?: number;
  awayScore?: number;
  [key: string]: unknown;
}

export interface Card {
  contestantId: string;
  type: string;
  timeMin: number;
  periodId?: number;
  playerId?: string;
  playerName?: string;
  cardReason?: string;
  [key: string]: unknown;
}

export interface Substitute {
  contestantId: string;
  periodId?: number;
  timeMin?: number;
  playerOnId?: string;
  playerOnName?: string;
  playerOffId?: string;
  playerOffName?: string;
  [key: string]: unknown;
}

/** Home/away score totals. */
export interface ScoreTotals {
  home: number;
  away: number;
}

/** Discriminated, side-specific score (open-play vs. shoot-out). */
export interface SideScore {
  /** Goals in regulation + extra time (excludes shoot-out). */
  score: number;
  /** Penalty shoot-out tally, or `0`. */
  pen: number;
}

/** Container for the various score states reported by Opta. */
export interface Scores {
  ht?: ScoreTotals;
  ft?: ScoreTotals;
  et?: ScoreTotals;
  pen?: ScoreTotals;
  total: ScoreTotals;
  [key: string]: unknown;
}

/** A match view-model. Permissive so extra feed fields pass through. */
export interface Match {
  id: string;
  /** ISO date string, decorated onto the match by the data layer. */
  isoDate?: string;
  contestants?: Contestant[];
  venue?: Venue;
  scores?: Scores;
  goals?: Goal[];
  cards?: Card[];
  substitutes?: Substitute[];
  status?: string;
  [key: string]: unknown;
}

/** A group-stage standings row. */
export interface StandingRow {
  teamId: string;
  teamName?: string;
  rank?: number;
  played?: number;
  won?: number;
  drawn?: number;
  lost?: number;
  goalsFor?: number;
  goalsAgainst?: number;
  goalDifference?: number;
  points?: number;
  [key: string]: unknown;
}

/** A named group (e.g. Group A) with its standings + fixtures. */
export interface Group {
  name: string;
  standings: StandingRow[];
  matches?: Match[];
  [key: string]: unknown;
}

/** One tie/slot in a knockout bracket. */
export interface BracketMatch {
  id?: string;
  round?: string;
  home?: Contestant;
  away?: Contestant;
  match?: Match;
  [key: string]: unknown;
}

/** One round (column) of a knockout bracket. */
export interface BracketRound {
  name: string;
  matches: BracketMatch[];
  [key: string]: unknown;
}
