<!--
@component
TeamCard

A group-stage team card (flag + name + points + recent results), optionally
wrapped in a link to the team page. Delegates rendering to the inner `<Card>`.

Decoupled from the app:
- **Data** arrives via the `teamStats` prop (the app resolves the Opta team
  stats and passes them here).
- **The team link** is composed from `linkBase` + `embed` (football context or
  prop overrides), exactly like the ported `Flag` element — the app no longer
  needs to thread its `getTeamPath` in.
- **Ambient services** flow from the football context, overridable per-prop.

```svelte
<TeamCard {teamStats} link />
```
-->

<script lang="ts">
  import Card from './Card.svelte';
  import type { TeamStats } from './types';
  import {
    getFootballContext,
    resolveService,
    FOOTBALL_CONTEXT_DEFAULTS,
    type FootballContext,
  } from '../../context';

  interface Props {
    /** The team information. */
    teamStats: TeamStats;
    /**
     * Render the card inside an `<a>` linking to the team page. Falls back to
     * an unlinked card if `teamStats.slug` is missing.
     * @default false
     */
    link?: boolean;
    loading?: boolean;
    getTeam?: FootballContext['getTeam'];
    linkBase?: string;
    embed?: boolean;
    windowWidth?: number;
  }

  let {
    teamStats,
    link = false,
    loading = false,
    getTeam,
    linkBase: linkBaseProp,
    embed: embedProp,
    windowWidth,
  }: Props = $props();

  const ctx = getFootballContext();
  const linkBase = resolveService(
    'linkBase',
    linkBaseProp,
    ctx,
    FOOTBALL_CONTEXT_DEFAULTS.linkBase
  );
  const embed = resolveService(
    'embed',
    embedProp,
    ctx,
    FOOTBALL_CONTEXT_DEFAULTS.embed
  );

  // Compose the team-page link from linkBase (+ absolute origin in embeds),
  // mirroring the `Flag` element. Falls back to `null` (unlinked) when there
  // is no slug to avoid a `/teams/undefined/` link.
  const href = $derived(
    link && teamStats.slug ?
      embed ?
        `https://www.reuters.com${linkBase}/teams/${teamStats.slug}/`
      : `${linkBase}/teams/${teamStats.slug}/`
    : null
  );
</script>

{#if href}
  <a
    {href}
    target={embed ? '_top' : undefined}
    aria-label={`View ${teamStats.name} – ${teamStats.points} points`}
    class:loading
  >
    <Card {teamStats} {loading} {getTeam} {linkBase} {embed} {windowWidth} />
  </a>
{:else}
  <Card {teamStats} {loading} {getTeam} {linkBase} {embed} {windowWidth} />
{/if}

<style lang="scss">
  @use '../../styles/mixins' as mixins;

  a {
    display: block;
    margin: auto;
    color: inherit;
    text-decoration: inherit;
    border-radius: var(--theme-style-border-radius);

    &.loading {
      pointer-events: none;
      cursor: default;
    }

    @include mixins.hover-supported() {
      opacity: 0.9;
    }
  }
</style>
