<!--
@component
Card

The inner surface of a `TeamCard`: flag + responsive team name + points on the
left, recent W/D/L result badges on the right. Purely presentational.

Decoupled — the `teamStats` view-model arrives as a prop (its `code` /
`shortName` / `name` drive the responsive display name); `windowWidth` comes
from the football context (prop-overridable) and the `Flag` resolves its slug
via that same context.
-->

<script lang="ts">
  import type { TeamStats } from './types';
  import {
    getFootballContext,
    resolveService,
    FOOTBALL_CONTEXT_DEFAULTS,
    type FootballContext,
  } from '../../context';
  import Flag from '../../elements/Flag/Flag.svelte';

  interface Props {
    /** The team info. */
    teamStats: TeamStats;
    loading?: boolean;
    getTeam?: FootballContext['getTeam'];
    linkBase?: string;
    embed?: boolean;
    windowWidth?: number;
  }

  let {
    teamStats,
    loading = false,
    getTeam,
    linkBase,
    embed,
    windowWidth: windowWidthProp,
  }: Props = $props();

  const ctx = getFootballContext();
  const windowWidth = $derived(
    resolveService(
      'windowWidth',
      windowWidthProp,
      ctx,
      FOOTBALL_CONTEXT_DEFAULTS.windowWidth
    )
  );

  /** True when the team has qualified _and_ has banked at least one point. */
  const qualified = $derived(!!teamStats.qualified && teamStats.points > 0);

  /** Plural-aware label so the template stays simple. */
  const pointsLabel = $derived(teamStats.points === 1 ? 'point' : 'points');

  /**
   * Display name that adapts to viewport width:
   *  - <350px: 3-letter code (falls back to full name if missing)
   *  - <450px: team's short name (falls back to full name if missing)
   *  - else:   full name
   */
  const displayName = $derived.by(() => {
    const w = windowWidth;
    if (w >= 450) return teamStats.name;
    if (w < 350) return teamStats.code ?? teamStats.name;
    return teamStats.shortName ?? teamStats.name;
  });
</script>

<div
  class="card font-sans flex flex-row items-end justify-left"
  class:qualified
  class:loading
>
  <div class="title flex flex-row items-start">
    <div class="flag relative" class:loading>
      <Flag country={teamStats.name} width="100%" {getTeam} {linkBase} {embed} />
    </div>

    <div class="">
      <h3 class="my-1 leading-none">{displayName}</h3>
      <span
        class="text-sm leading-none {qualified ? 'font-medium' : (
          'text-secondary'
        )}"
      >
        {teamStats.points}
        {pointsLabel}
        {qualified ? '✔' : ''}
      </span>
    </div>
  </div>

  <div class="results fmr-2 fmb-2">
    <div class="text-secondary text-center text-xxs">Results</div>
    {#each teamStats.results as badge}
      <span
        class="badge {badge} text-center leading-tight inline-block mx-0.5 fp-1 border border-solid rounded-2xl text-xs font-medium"
        >{badge}</span
      >
    {/each}
  </div>
</div>

<style lang="scss">
  @use '../../styles/mixins' as mixins;

  .card {
    background-color: var(--theme-colour-muted-grey);
    width: 100%;
    border: 1px solid var(--theme-colour-muted-grey);
    border-radius: var(--theme-style-border-radius);

    &.loading {
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        border-radius: var(--theme-style-border-radius);
        mix-blend-mode: multiply;
        width: 100%;
        height: 100%;
        @include mixins.loading;
      }
    }

    &.qualified {
      @include mixins.hard-shadow;
    }
  }

  .flag {
    width: calc(5 * var(--theme-font-size-base));
    outline: 1px solid var(--theme-colour-white);
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    aspect-ratio: 3/2;
    flex-shrink: 0;

    &.loading {
      // `Flag` ships the inlined base64 fallback PNG until the real flag
      // decodes, so we don't need another network `UNKNOWN.png` behind it.
      background-color: var(--theme-colour-tan-grey);
    }

    :global(img) {
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
  }

  .title {
    line-height: 1;
    align-items: center;
    width: calc(100% - 7rem);
    gap: clamp(0.56rem, 0.52rem + 0.21vw, 0.69rem);

    @media (max-width: 450px) and (min-width: 350px) {
      h3 {
        @include mixins.text-sm;
      }
    }
  }

  .results {
    width: 7rem;

    @media (max-width: 335px) {
      @include mixins.fmr-0;
    }
  }

  .badge {
    border-color: var(--theme-colour-white);
    height: calc(2.2 * var(--theme-font-size-xs));
    aspect-ratio: 1;

    &.W {
      background-color: var(--theme-colour-win-green);
    }
    &.D {
      background-color: var(--theme-colour-tan-grey);
    }
    &.L {
      background-color: var(--theme-colour-loss-red);
    }
  }
</style>
