<!--
@component
Match

The inner card of a `MatchStrip`: home team (flag + code) · middle slot
(date/time for a fixture, or scores for a live/finished match) · away team.

Decoupled — all match values arrive as props (the consuming app runs its Opta
selectors and its `schedule` / `isMatchSoon` logic and passes the results).
The `Flag` resolves its slug via the football context, overridable per-prop.
-->

<script lang="ts">
  import { onMount } from 'svelte';
  import type { Contestant, SideScore } from '../../types';
  import type { FootballContext } from '../../context';
  import AnimatedScore from '../../elements/AnimatedScore/AnimatedScore.svelte';
  import LiveBug from '../../elements/LiveBug/LiveBug.svelte';
  import Flag from '../../elements/Flag/Flag.svelte';

  type DateStamp = { month: string; day: string | number; time?: string };

  type Props = {
    homeTeam?: Contestant;
    awayTeam?: Contestant;
    isFixture?: boolean;
    isLive?: boolean;
    overtime?: boolean;
    homeScore?: SideScore;
    awayScore?: SideScore;
    dateStamp?: DateStamp | null;
    /** Show only the time (match imminent). */
    showTimeOnly?: boolean;
    /** True when rendered on the schedule page (compact, time-only). */
    onSchedulePage?: boolean;
    loading?: boolean;
    getTeam?: FootballContext['getTeam'];
    linkBase?: string;
    embed?: boolean;
  };

  let {
    homeTeam,
    awayTeam,
    isFixture = false,
    isLive = false,
    overtime = false,
    homeScore,
    awayScore,
    dateStamp = null,
    showTimeOnly = false,
    onSchedulePage = false,
    loading = false,
    getTeam,
    linkBase,
    embed,
  }: Props = $props();

  // The `dateStamp` is computed in the viewer's timezone, so SSR and the
  // hydrated client can disagree. Wait until mounted to show real values.
  let mounted = $state(false);
  onMount(() => {
    mounted = true;
  });

  const compact = $derived(onSchedulePage || showTimeOnly);
</script>

<div
  class="card relative font-sans flex flex-row items-center justify-between"
  style="--h: 3rem;"
  class:loading
  class:isFixture
  class:isLive
>
  <!-- Home team (left) -->
  <div class="team home-team flex items-center justify-start">
    <div class="flag relative" class:loading>
      <Flag
        circle={true}
        link={false}
        width="var(--h)"
        country={homeTeam?.name}
        {getTeam}
        {linkBase}
        {embed}
      />
    </div>
    <span class="team-name text-left text-sm font-medium tracking-wider">
      {homeTeam?.code || 'TBD'}
    </span>
  </div>

  {#if isFixture}
    <!-- Fixture: date/time -->
    <div
      class="schedule text-xs text-center font-medium tracking-wide text-secondary"
      class:time={compact}
      class:date={!compact}
    >
      {#if !mounted || loading || !dateStamp}
        &hellip;
      {:else if compact}
        {dateStamp.time}
      {:else}
        {dateStamp.month}
        {dateStamp.day}
      {/if}
    </div>
  {:else}
    <!-- Live/finished: scores -->
    <div class="results relative flex flex-col items-center">
      {#if isLive}
        <div class="live-container">
          <LiveBug />
        </div>
      {/if}
      <div
        class="scores flex flex-row items-center justify-center"
        class:isLive
      >
        <div class="score-home score flex items-center font-bold text-lg">
          <AnimatedScore value={homeScore?.score ?? 0} />
          {#if homeScore?.pen}
            <div class="pen fml-1 text-base font-regular">
              ({homeScore.pen})
            </div>
          {/if}
        </div>

        {#if overtime}
          <div class="score-overtime text-xs">
            <span class="font-bold fpx-1 text-base">&middot;</span>AET
            <span class="font-bold fpx-1 text-base">&middot;</span>
          </div>
        {:else}
          <div class="score-separator font-bold fpx-2">&middot;</div>
        {/if}

        <div class="score-away score flex items-center font-bold text-lg">
          <AnimatedScore value={awayScore?.score ?? 0} />
          {#if awayScore?.pen}
            <div class="pen fml-1 text-base font-regular">
              ({awayScore.pen})
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}

  <!-- Away team (right) -->
  <div class="team away-team flex items-center justify-end">
    <span class="team-name text-right text-sm font-medium tracking-wider">
      {awayTeam?.code || 'TBD'}
    </span>
    <div class="flag relative" class:loading>
      <Flag
        circle={true}
        link={false}
        width="var(--h)"
        country={awayTeam?.name}
        {getTeam}
        {linkBase}
        {embed}
      />
    </div>
  </div>
</div>

<style lang="scss">
  @use '../../styles/mixins' as mixins;

  .card {
    background-color: var(--theme-colour-muted-grey);
    width: 100%;
    height: var(--h);
    border: 1px solid var(--theme-colour-muted-grey);
    border-radius: calc(10 * var(--theme-style-border-radius));
    &:before {
      content: '';
      position: absolute;
      border-radius: calc(10 * var(--theme-style-border-radius));
      mix-blend-mode: multiply;
      width: 100%;
      height: 100%;
    }
    &.loading {
      &:before {
        @include mixins.loading;
      }
    }

    &.isLive {
      @include mixins.hard-shadow;
      // Raise the live card above sibling strips so the LiveBug,
      // which overflows the card's bottom edge, isn't hidden behind
      // the next strip stacked below it.
      z-index: 2;
      &:before {
        @include mixins.loading;
      }
    }
  }

  .team {
    gap: clamp(0.56rem, 0.52rem + 0.21vw, 0.69rem);
  }

  .team-name {
    font-variant-numeric: tabular-nums;
    min-width: 3rem;
  }

  .flag {
    width: var(--h);
    aspect-ratio: 1;
    border-radius: calc(10 * var(--theme-style-border-radius));
    outline: 1px solid var(--theme-colour-white);

    // `Flag` renders the inlined base64 fallback PNG until the real
    // flag decodes; no need for another network `UNKNOWN.png` underneath.
    &.loading {
      background-color: var(--theme-colour-tan-grey);
    }

    :global(img) {
      border-radius: var(--theme-style-border-radius-pill);
    }
  }

  .scores {
    font-variant-numeric: tabular-nums;

    &.isLive {
      .score {
        color: var(--theme-colour-live-red);
      }
    }
  }

  .live-container {
    position: absolute !important;
    top: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
</style>
