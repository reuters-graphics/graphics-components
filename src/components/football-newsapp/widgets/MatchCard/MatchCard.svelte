<!--
@component
MatchCard

The big match card used on match / team pages. Routes to `<MatchSked>` for a
future fixture and `<MatchResult>` for a live/finished match, optionally
wrapping the whole card in a link.

Decoupled from the app:
- **Data** arrives entirely via props. The consuming app runs its Opta match
  selectors (`isUpcoming`, `getHomeTeam`, `getHomeScore`, …) and passes the
  derived values here (`homeTeam`, `homeScore`, `isFixture`, `isLive`, …).
- **The card link** is a plain `matchUrl` prop (the app composes it, e.g. via
  its `getMatchPath`).
- **Ambient services** (`getTeam` / `linkBase` / `embed` / `windowWidth`) flow
  from the football context, overridable per-prop for Storybook/embeds.

```svelte
<MatchCard {homeTeam} {awayTeam} {homeScore} {awayScore} isLive matchTime="67'" />
```
-->

<script lang="ts">
  import { fly } from 'svelte/transition';
  import type { Contestant, Goal, Card, SideScore } from '../../types';
  import {
    getFootballContext,
    resolveService,
    FOOTBALL_CONTEXT_DEFAULTS,
    type FootballContext,
  } from '../../context';
  import MatchResult from './MatchResult.svelte';
  import MatchSked from './MatchSked.svelte';

  type MatchEvent = Goal | Card;
  type DateStamp = { month: string; day: string | number; time?: string };

  type Props = {
    homeTeam?: Contestant;
    awayTeam?: Contestant;
    /** True when the match is a future fixture (routes to `<MatchSked>`). */
    isFixture?: boolean;
    /** True when the match is currently in play. */
    isLive?: boolean;
    /** True when the match went to extra time. */
    overtime?: boolean;
    /** Formatted match clock/label for a live match (e.g. "45'", "HT"). */
    matchTime?: string;
    /** Pre-formatted local date parts. */
    dateStamp?: DateStamp | null;
    homeScore?: SideScore;
    awayScore?: SideScore;
    homeEvents?: MatchEvent[];
    awayEvents?: MatchEvent[];
    isGroupStage?: boolean;
    /** Destination for the whole-card link (omit to render unlinked). */
    matchUrl?: string;
    /** Stagger index for the fly-in transition. */
    i?: number;
    flagLink?: boolean;
    /** Wrap the card in a link to `matchUrl` (when teams + url are present). */
    linked?: boolean;
    sticky?: boolean;
    /** Bindable — surfaces the live state to the parent. */
    live?: boolean;
    loading?: boolean;
    getTeam?: FootballContext['getTeam'];
    linkBase?: string;
    embed?: boolean;
    windowWidth?: number;
  };

  let {
    homeTeam,
    awayTeam,
    isFixture = false,
    isLive = false,
    overtime = false,
    matchTime,
    dateStamp = null,
    homeScore,
    awayScore,
    homeEvents = [],
    awayEvents = [],
    isGroupStage = false,
    matchUrl,
    i = 0,
    flagLink = false,
    linked = false,
    sticky = false,
    live = $bindable(),
    loading = false,
    getTeam,
    linkBase,
    embed: embedProp,
    windowWidth,
  }: Props = $props();

  const ctx = getFootballContext();
  const embed = $derived(
    resolveService('embed', embedProp, ctx, FOOTBALL_CONTEXT_DEFAULTS.embed)
  );

  const hasTeams = $derived(!!homeTeam && !!awayTeam);
  const wrap = $derived(linked && hasTeams && !!matchUrl);

  // Surface the live state on the bindable `live` prop.
  $effect(() => {
    live = isLive;
  });
</script>

{#snippet card()}
  <div
    class="match mx-auto"
    class:live={isLive}
    class:loading
    class:sticky
    transition:fly|local={{ y: 50, duration: 200, delay: i * 20 }}
  >
    {#if isFixture}
      <MatchSked
        {homeTeam}
        {awayTeam}
        {flagLink}
        {dateStamp}
        {isGroupStage}
        {loading}
        {getTeam}
        {linkBase}
        {embed}
        {windowWidth}
      />
    {:else}
      <MatchResult
        {homeTeam}
        {awayTeam}
        {flagLink}
        {isLive}
        {overtime}
        {matchTime}
        {dateStamp}
        {homeScore}
        {awayScore}
        {homeEvents}
        {awayEvents}
        {isGroupStage}
        {loading}
        {getTeam}
        {linkBase}
        {embed}
        {windowWidth}
      />
    {/if}
  </div>
{/snippet}

{#if wrap}
  <a href={matchUrl} target={embed ? '_top' : undefined} class:loading>
    {@render card()}
  </a>
{:else}
  {@render card()}
{/if}

<style lang="scss">
  @use '../../styles/mixins' as mixins;

  a {
    margin: auto;
    max-width: 35rem;
    text-decoration: inherit;
    color: inherit;
    display: block;
    border-radius: var(--theme-style-border-radius);

    &.loading {
      pointer-events: none;
      cursor: default;
    }

    @include mixins.hover-supported() {
      overflow: visible;
      opacity: 0.9;
      text-decoration: inherit;
      color: inherit;
    }
  }

  .match:not(.showKit) {
    max-width: 35rem;
  }

  .match {
    position: relative;

    &.loading,
    &.live {
      &:before {
        content: '';
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        border-radius: var(--theme-style-border-radius);
        mix-blend-mode: multiply;
        width: 100%;
        height: 100%;
        @include mixins.loading;
      }
    }
  }
</style>
