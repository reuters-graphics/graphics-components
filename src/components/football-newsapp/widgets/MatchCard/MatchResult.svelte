<!--
@component
MatchCardMatchResult

The live / finished state of a `MatchCard`. Fully decoupled: every value it
renders is passed in as a prop (teams, scores, goal & red-card events, the
formatted match clock, the local date parts) — the source's `$utils` match
selectors run in the consuming app and feed these props. Ambient services
(`getTeam` / `linkBase` / `embed` / `windowWidth`) flow through to the child
`Team` (and its `Flag`) via the football context or prop overrides.
-->

<script lang="ts">
  import { onMount } from 'svelte';
  import type { Contestant, Goal, Card, SideScore } from '../../types';
  import type { FootballContext } from '../../context';
  import AnimatedScore from '../../elements/AnimatedScore/AnimatedScore.svelte';
  import LiveBug from '../../elements/LiveBug/LiveBug.svelte';
  import Team from './Team.svelte';
  import Goals from './Goals.svelte';

  type MatchEvent = Goal | Card;
  type DateStamp = { month: string; day: string | number; time?: string };

  type Props = {
    homeTeam?: Contestant;
    awayTeam?: Contestant;
    flagLink?: boolean;
    /** Whether the match is currently in play (drives the live styling). */
    isLive?: boolean;
    /** Whether the match went to extra time (shows the "AET" tag). */
    overtime?: boolean;
    /** Formatted match clock/label for a live match (e.g. "45'", "HT"). */
    matchTime?: string;
    /** Pre-formatted local date parts for a finished match. */
    dateStamp?: DateStamp | null;
    homeScore?: SideScore;
    awayScore?: SideScore;
    homeEvents?: MatchEvent[];
    awayEvents?: MatchEvent[];
    isGroupStage?: boolean;
    loading?: boolean;
    getTeam?: FootballContext['getTeam'];
    linkBase?: string;
    embed?: boolean;
    windowWidth?: number;
  };

  let {
    homeTeam,
    awayTeam,
    flagLink = false,
    isLive = false,
    overtime = false,
    matchTime,
    dateStamp = null,
    homeScore,
    awayScore,
    homeEvents = [],
    awayEvents = [],
    isGroupStage = false,
    loading = false,
    getTeam,
    linkBase,
    embed,
    windowWidth,
  }: Props = $props();

  const hasGoals = $derived(homeEvents.length > 0 || awayEvents.length > 0);
  const timeToShow = $derived(matchTime);

  // Local date stamp depends on the viewer's timezone, so SSR can render a
  // slightly different value than the hydrated client. Defer showing it until
  // after mount so the layout doesn't visibly shift.
  let mounted = $state(false);
  onMount(() => {
    mounted = true;
  });

  let cardWidth = $state(0);
  let cardHeight = $state(0);
</script>

<div
  class="match-card-wrapper"
  class:isLive
  class:group={isGroupStage}
  class:noGoals={!hasGoals}
  bind:clientWidth={cardWidth}
  bind:clientHeight={cardHeight}
  style="--cardWidth: {cardWidth}px; --cardHeight: {cardHeight}px"
>
  <!-- Results ------------------------------------------------------- -->
  <div class="results-wrapper" class:isLive>
    <div class="date-time" class:live={isLive} class:no-matchtime={!timeToShow}>
      {#if isLive}
        <div class="time">{timeToShow}</div>
        <LiveBug />
      {:else}
        <div class="date">
          {#if !mounted || !dateStamp}
            &hellip;
          {:else}
            <span class="day">{dateStamp.day}</span>
            <span class="month">{dateStamp.month}</span>
          {/if}
        </div>
      {/if}
    </div>

    <Team
      team={homeTeam}
      side="home"
      {flagLink}
      {loading}
      {getTeam}
      {linkBase}
      {embed}
      {windowWidth}
    />
    <Team
      team={awayTeam}
      side="away"
      {flagLink}
      {loading}
      {getTeam}
      {linkBase}
      {embed}
      {windowWidth}
    />

    <!-- Scores -->
    <div class="scores">
      <div class="scores-results">
        <div class="team-score">
          <AnimatedScore value={homeScore?.score ?? 0} bold />
          {#if homeScore?.pen}
            <div class="pen">({homeScore.pen})</div>
          {/if}
        </div>
        <div class="score-separator">&middot;</div>
        <div class="team-score">
          <AnimatedScore value={awayScore?.score ?? 0} bold />
          {#if awayScore?.pen}
            <div class="pen">({awayScore.pen})</div>
          {/if}
        </div>
      </div>
      {#if overtime}
        <div class="scores-overtime">AET</div>
      {/if}
    </div>
  </div>

  <!-- Goals --------------------------------------------------------- -->
  {#if hasGoals}
    <div class="goals">
      <div class="goals-container">
        <div class="home-goals">
          <Goals events={homeEvents} />
        </div>
      </div>

      <div
        class="goals-divider"
        style="height:{1.5 * Math.max(homeEvents.length, awayEvents.length)}rem"
      ></div>

      <div class="goals-container">
        <div class="away-goals">
          <Goals events={awayEvents} />
        </div>
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  @use '../../styles/mixins' as mixins;
  @use 'layout' as *;

  .date-time {
    margin-top: 1.5rem;
    border-radius: calc(1.75 * var(--theme-style-border-radius));

    .time {
      @include mixins.text-sm;
      @include mixins.fmb-1;
      @include mixins.font-semibold;
    }

    @media (max-width: 475px) {
      margin-top: 1rem;
    }

    &.no-matchtime {
      .time {
        display: none;
      }

      &.live {
        margin-top: 2.5rem;

        @media (max-width: 475px) {
          margin-top: 1.5rem;
        }
      }
    }
  }

  .match-card-wrapper.noGoals {
    .results-wrapper {
      border-radius: var(--theme-style-border-radius);
    }
  }

  .match-card-wrapper.isLive {
    @include mixins.hard-shadow;

    .team-score,
    .pen {
      color: var(--theme-colour-live-red);
    }
  }

  .goals {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: flex-start;

    @include mixins.fmx-auto;
    @include mixins.fmy-4;
    @include mixins.fpb-4;

    .goals-divider {
      width: 2px;
      background: var(--theme-colour-background);
      @include mixins.hard-shadow;
      border-radius: calc(0.5 * var(--theme-style-border-radius));
    }

    .goals-container {
      flex: 1;
    }

    .home-goals,
    .away-goals {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
