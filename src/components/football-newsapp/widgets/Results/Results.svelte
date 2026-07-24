<!--
@component
Results

A group-stage results list: one row per match with home / away teams (flag +
name), the score (animated) or a fixture "v", and a live badge for in-progress
matches.

Fully decoupled — matches arrive pre-derived via the `matches` prop (typed as
`Match[]` from the namespace view-model types; the consuming app passes values
produced by the opta-football-data selectors). Home/away teams and scores are
read from the match view-model shape rather than any `$utils` selector. The
team flag is the already-ported `Flag` element and the score uses
`AnimatedScore`; ambient services (`getTeam` / `linkBase` / `embed`) resolve via
the football context or the props forwarded here for standalone/Storybook use.

```svelte
<Results groupName="Group A" {matches} link />
```
-->

<script lang="ts">
  import Flag from '../../elements/Flag/Flag.svelte';
  import AnimatedScore from '../../elements/AnimatedScore/AnimatedScore.svelte';
  import LiveBug from '../../elements/LiveBug/LiveBug.svelte';
  import type { FootballContext } from '../../context';
  import type { Match, Contestant } from '../../types';

  type Props = {
    /** Pre-derived matches for a single group, in display order. */
    matches: Match[];
    /** Heading rendered above the list (e.g. `'Group A'`). Optional. */
    groupName?: string;
    /** Link each team's flag to its team page. */
    link?: boolean;
    /** Override the ambient `getTeam` service (forwarded to Flag). */
    getTeam?: FootballContext['getTeam'];
    /** Override the ambient `linkBase` (forwarded to Flag). */
    linkBase?: string;
    /** Override the ambient `embed` flag (forwarded to Flag). */
    embed?: boolean;
  };

  let {
    matches = [],
    groupName,
    link = false,
    getTeam,
    linkBase,
    embed,
  }: Props = $props();

  /** Resolve a contestant for a side, tolerating missing `position`. */
  const sideContestant = (
    match: Match,
    side: 'home' | 'away'
  ): Contestant | undefined => {
    const list = match.contestants ?? [];
    const byPos = list.find((c) => c.position === side);
    if (byPos) return byPos;
    // Fall back to positional order when `position` isn't decorated.
    return side === 'home' ? list[0] : list[1];
  };

  /** Opta code for the flag lookup — permissive contestants may carry `code`. */
  const teamCode = (c: Contestant | undefined): string =>
    c?.code ?? c?.id ?? '';

  const teamName = (c: Contestant | undefined): string =>
    c?.shortName ?? c?.name ?? teamCode(c);

  /** A match is live when its status reads as in-play. */
  const isLive = (match: Match): boolean =>
    /play|live|in.?progress/i.test(String(match.status ?? ''));

  /** Both totals present as numbers → the match has a score to show. */
  const hasScore = (match: Match): boolean =>
    typeof match.scores?.total?.home === 'number' &&
    typeof match.scores?.total?.away === 'number';

  /** Short penalty suffix, e.g. `(4-2 pens)`, when a shoot-out decided it. */
  const pensLabel = (match: Match): string => {
    const pen = match.scores?.pen;
    if (pen && typeof pen.home === 'number' && typeof pen.away === 'number') {
      return `(${pen.home}-${pen.away} pens)`;
    }
    return '';
  };
</script>

{#if matches.length > 0}
  <div class="results">
    {#if groupName}
      <h3 class="group-name h4 fmt-0 fmb-2">{groupName}</h3>
    {/if}
    <ol class="fmy-0">
      {#each matches as match, i (match.id ?? i)}
        {@const home = sideContestant(match, 'home')}
        {@const away = sideContestant(match, 'away')}
        {@const live = isLive(match)}
        {@const scored = hasScore(match)}
        <li class="match" class:isLive={live}>
          <div class="side home">
            <span class="name">{teamName(home)}</span>
            <Flag
              country={teamCode(home)}
              circle
              {link}
              width="1.35rem"
              {getTeam}
              {linkBase}
              {embed}
            />
          </div>

          <div class="middle">
            {#if scored}
              <div class="score" class:live>
                <AnimatedScore value={match.scores?.total?.home ?? 0} bold />
                <span class="sep">–</span>
                <AnimatedScore value={match.scores?.total?.away ?? 0} bold />
              </div>
              {#if pensLabel(match)}
                <span class="pens text-xxs text-secondary">{pensLabel(match)}</span>
              {/if}
            {:else}
              <span class="versus text-secondary">v</span>
            {/if}
            {#if live}
              <div class="live-bug"><LiveBug /></div>
            {/if}
          </div>

          <div class="side away">
            <Flag
              country={teamCode(away)}
              circle
              {link}
              width="1.35rem"
              {getTeam}
              {linkBase}
              {embed}
            />
            <span class="name">{teamName(away)}</span>
          </div>
        </li>
      {/each}
    </ol>
  </div>
{/if}

<style lang="scss">
  @use '../../styles/mixins' as mixins;

  .results {
    width: max-content;
    max-width: 100%;
    margin-inline: auto;
  }

  .group-name {
    text-align: center;
  }

  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .match {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.5rem;
    @include mixins.font-sans;
    @include mixins.text-sm;
    background-color: var(--theme-colour-muted-grey);
    border-radius: var(--theme-style-border-radius);
    margin-bottom: 0.4rem;

    &:last-child {
      margin-bottom: 0;
    }

    // Live rows lift above neighbours so the LiveBug (which overflows the
    // bottom edge) isn't clipped by the next row.
    &.isLive {
      position: relative;
      z-index: 2;
    }
  }

  .side {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 0;

    &.home {
      justify-content: flex-end;
      text-align: right;
    }

    &.away {
      justify-content: flex-start;
      text-align: left;
    }

    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .middle {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 3.5rem;
  }

  .score {
    display: inline-flex;
    align-items: baseline;
    gap: 0.35rem;
    font-variant-numeric: tabular-nums;
    @include mixins.font-bold;

    &.live {
      color: var(--theme-colour-live-red);
    }

    .sep {
      color: var(--theme-colour-text-secondary);
    }
  }

  .versus {
    @include mixins.font-medium;
  }

  .pens {
    margin-top: 0.1rem;
  }

  .live-bug {
    position: absolute;
    bottom: -0.65rem;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
