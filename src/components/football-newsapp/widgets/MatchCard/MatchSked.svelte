<!--
@component
MatchCardMatchSked

The upcoming-fixture state of a `MatchCard`: date/time header + the two teams.
Decoupled — teams and the pre-formatted local date parts arrive as props;
ambient services flow through to the child `Team` (and its `Flag`).
-->

<script lang="ts">
  import { onMount } from 'svelte';
  import type { Contestant } from '../../types';
  import type { FootballContext } from '../../context';
  import Team from './Team.svelte';

  type DateStamp = { month: string; day: string | number; time?: string };

  type Props = {
    homeTeam?: Contestant;
    awayTeam?: Contestant;
    flagLink?: boolean;
    dateStamp?: DateStamp | null;
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
    dateStamp = null,
    isGroupStage = false,
    loading = false,
    getTeam,
    linkBase,
    embed,
    windowWidth,
  }: Props = $props();

  // The local date stamp is computed in the viewer's timezone, so SSR and
  // client renders can disagree. Show `…` until mounted to avoid a flash.
  let mounted = $state(false);
  onMount(() => {
    mounted = true;
  });

  let cardWidth = $state(0);
  let cardHeight = $state(0);
</script>

<div
  class="match-card-wrapper isFixture"
  class:group={isGroupStage}
  bind:clientWidth={cardWidth}
  bind:clientHeight={cardHeight}
  style="--cardWidth: {cardWidth}px; --cardHeight: {cardHeight}px"
>
  <div class="results-wrapper">
    <div class="date-time">
      <div class="date">
        {#if !mounted || loading || !dateStamp}
          <!-- Don't show date until the local time format has loaded -->
          &hellip;
        {:else}
          <span class="day">{dateStamp.month} {dateStamp.day}</span>
          <span class="time">{dateStamp.time}</span>
        {/if}
      </div>
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
      fallback="TBD"
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
      fallback="TBD"
    />
  </div>
</div>

<style lang="scss">
  @use '../../styles/mixins' as mixins;
  @use 'layout' as *;

  .match-card-wrapper.isFixture {
    .results-wrapper {
      border-radius: var(--theme-style-border-radius);
    }
  }

  .date-time {
    top: unset;
    border-radius: calc(0.5 * var(--theme-style-border-radius));

    .date {
      width: auto;

      .day {
        margin-bottom: 0;
      }
    }

    .time {
      @include mixins.font-regular;
      @include mixins.text-secondary;
      @include mixins.text-sm;
      text-align: center;
      margin-bottom: 0;
    }
  }
</style>
