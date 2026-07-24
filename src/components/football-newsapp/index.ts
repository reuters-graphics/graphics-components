/**
 * `@reuters-graphics/graphics-components/football-newsapp`
 *
 * Football tournament components, decoupled from any app store. Data flows in
 * via props; ambient services via {@link setFootballContext}. See the
 * "Data & Setup" doc for from-scratch wiring.
 *
 * ⚠️ MAINTAINER DECISION (see #457): this namespace is exposed as a **subpath
 * export**, which introduces an `exports` map to the package. Consumers import
 * from `@reuters-graphics/graphics-components/football-newsapp` rather than the
 * main barrel, so football components don't bloat the top-level index.
 */

// ── Context contract ────────────────────────────────────────────────────────
export {
  setFootballContext,
  getFootballContext,
  resolveService,
  FOOTBALL_CONTEXT_DEFAULTS,
} from './context';
export type { FootballContext, FootballContextTeam } from './context';

// ── Theme ────────────────────────────────────────────────────────────────────
export { footballTheme } from './footballTheme';
export type { FootballTheme } from './footballTheme';

// ── View-model types (interim; from opta-football-data once published) ────────
export type {
  Ref,
  Team,
  Contestant,
  Venue,
  Goal,
  Card,
  Substitute,
  ScoreTotals,
  SideScore,
  Scores,
  Match,
  StandingRow,
  Group,
  BracketMatch,
  BracketRound,
} from './types';

// ── elements/ ────────────────────────────────────────────────────────────────
export { default as Flag } from './elements/Flag/Flag.svelte';
export { default as Icon } from './elements/Icons/Icon.svelte';
export {
  ICON_NAMES,
  ICON_URLS,
  isIconName,
  type IconName,
} from './elements/Icons/iconNames';
export { default as LiveBug } from './elements/LiveBug/LiveBug.svelte';
export { default as AnimatedScore } from './elements/AnimatedScore/AnimatedScore.svelte';
export { default as TrophyStar } from './elements/TrophyStar/TrophyStar.svelte';
export { default as TrophyIcon } from './elements/TrophyIcon/TrophyIcon.svelte';

// ── widgets/ ─────────────────────────────────────────────────────────────────
export { default as MatchCard } from './widgets/MatchCard/MatchCard.svelte';
export { default as MatchStrip } from './widgets/MatchStrip/MatchStrip.svelte';
export { default as TeamCard } from './widgets/TeamCard/TeamCard.svelte';
export type { TeamStats } from './widgets/TeamCard/types';
export { default as Standings } from './widgets/Standings/Standings.svelte';
export { default as Results } from './widgets/Results/Results.svelte';
export { default as Countdown } from './widgets/Countdown/Countdown.svelte';
export { default as Squad } from './widgets/Squad/Squad.svelte';
export { default as TrophyCabinet } from './widgets/TrophyCabinet/TrophyCabinet.svelte';
// Remaining widgets (Bracket, MatchesWidget, MatchCalendar, MatchList,
// TeamMatches, Lineup, MatchStats, Commentary, VenueMap, PhotoGallery,
// MatchViews, Nav, NavLogo, Logo, MatchesRail, TeamsMenu) — see #457.

// ── embeds/ ──────────────────────────────────────────────────────────────────
// (ported in subsequent phases — see #457)

// ── sharecards/ ──────────────────────────────────────────────────────────────
// (ported in subsequent phases — see #457)
