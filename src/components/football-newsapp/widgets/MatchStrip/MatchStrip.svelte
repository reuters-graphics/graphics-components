<!--
@component
MatchStrip

A compact one-line match strip (home · middle · away), optionally wrapped in a
link to the match page. Delegates rendering to the inner `<Match>`.

Decoupled from the app:
- **Data** arrives via props. The consuming app runs its Opta selectors
  (`getHomeTeam`, `getHomeScore`, `isPlaying`, …) and its schedule logic
  (`isMatchSoon`, current pathname) and passes the derived values here.
- **The strip link** is a plain `matchUrl` prop (composed by the app).
- **Ambient services** (`getTeam` / `linkBase` / `embed`) flow from the
  football context, overridable per-prop for Storybook/embeds.

```svelte
<MatchStrip {homeTeam} {awayTeam} {homeScore} {awayScore} isLive link matchUrl="/match/123/" />
```
-->

<script lang="ts">
  import type { Contestant, SideScore } from '../../types';
  import {
    getFootballContext,
    resolveService,
    FOOTBALL_CONTEXT_DEFAULTS,
    type FootballContext,
  } from '../../context';
  import Match from './Match.svelte';

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
    showTimeOnly?: boolean;
    onSchedulePage?: boolean;
    /** Wrap the strip in a link to `matchUrl` (when teams + url are present). */
    link?: boolean;
    /** Destination for the strip link (composed by the app). */
    matchUrl?: string;
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
    link = false,
    matchUrl,
    loading = false,
    getTeam,
    linkBase,
    embed: embedProp,
  }: Props = $props();

  const ctx = getFootballContext();
  const embed = $derived(
    resolveService('embed', embedProp, ctx, FOOTBALL_CONTEXT_DEFAULTS.embed)
  );

  const hasTeams = $derived(!!homeTeam && !!awayTeam);
  const wrap = $derived(
    link && hasTeams && !!matchUrl && matchUrl !== '.'
  );
</script>

{#snippet card()}
  <Match
    {homeTeam}
    {awayTeam}
    {isFixture}
    {isLive}
    {overtime}
    {homeScore}
    {awayScore}
    {dateStamp}
    {showTimeOnly}
    {onSchedulePage}
    {loading}
    {getTeam}
    {linkBase}
    {embed}
  />
{/snippet}

{#if wrap}
  <a
    href={matchUrl}
    target={embed ? '_top' : undefined}
    class:loading
    class:isLive
  >
    {@render card()}
  </a>
{:else}
  <div class="strip-wrapper" class:isLive>
    {@render card()}
  </div>
{/if}

<style lang="scss">
  @use '../../styles/mixins' as mixins;
  a {
    margin: auto;
    text-decoration: inherit;
    color: inherit;
    display: block;
    border-radius: calc(10 * var(--theme-style-border-radius));

    &.loading {
      pointer-events: none;
      cursor: default;
    }

    @include mixins.hover-supported() {
      opacity: 0.9;
      text-decoration: inherit;
      color: inherit;
    }
  }

  // When the strip is live, raise the wrapper above adjacent siblings so the
  // LiveBug (positioned outside the bottom edge of the card) isn't clipped by
  // the next strip stacked below.
  .isLive,
  a.isLive {
    position: relative;
    z-index: 2;
  }

  .strip-wrapper {
    display: block;
  }
</style>
