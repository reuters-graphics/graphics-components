<!--
@component
Flag

A country flag (rectangle or circle), optionally linking to that team's page.

Decoupled from the app:
- **Team resolution** comes from the `getTeam` service (prop → context →
  error). `getTeam(country)` returns `{ slug, name }`.
- **Link composition** uses `linkBase` + `embed` from context (or props).
- **The flag image itself** is resolved through the `resolveFlag` seam — this
  is where `@reuters-graphics/watercolour-flags` (ISO/slug-keyed images) plugs
  in. When no resolver is supplied, the inlined fallback flag renders, so the
  component still works out-of-the-box in Storybook.

```svelte
<Flag country="ENG" circle link />
```
-->

<script lang="ts" module>
  /** Module-level cache of flag URLs already decoded this session. */
  const decodedFlags = new Set<string>();
</script>

<script lang="ts">
  import { untrack } from 'svelte';
  import {
    getFootballContext,
    resolveService,
    FOOTBALL_CONTEXT_DEFAULTS,
    type FootballContext,
  } from '../../context';
  import { FALLBACK_FLAGS } from './fallbackImages';

  type Shape = 'circles' | 'rects';

  type Props = {
    circle?: boolean;
    country?: string;
    link?: boolean;
    width?: string;
    loading?: 'lazy' | 'eager';
    /** Override the ambient `getTeam` service (else read from context). */
    getTeam?: FootballContext['getTeam'];
    /** Override the ambient `linkBase` (else read from context). */
    linkBase?: string;
    /** Override the ambient `embed` flag (else read from context). */
    embed?: boolean;
    /**
     * Flag-image resolver seam. Return a URL for the given team `slug` and
     * `shape`, or `undefined` to fall back. Wire `watercolour-flags` here.
     */
    resolveFlag?: (slug: string, shape: Shape) => string | undefined;
  };

  let {
    circle = false,
    country = '',
    link = false,
    width = '1rem',
    loading = 'lazy',
    getTeam: getTeamProp,
    linkBase: linkBaseProp,
    embed: embedProp,
    resolveFlag,
  }: Props = $props();

  const ctx = getFootballContext();
  const getTeam = resolveService('getTeam', getTeamProp, ctx);
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

  const FALLBACK_SLUG = 'UNKNOWN';
  const INTRINSIC = {
    circles: { width: 20, height: 20 },
    rects: { width: 30, height: 20 },
  } as const;

  const team = $derived(getTeam(country));
  const shape = $derived<Shape>(circle ? 'circles' : 'rects');
  const slug = $derived(team?.slug || FALLBACK_SLUG);
  const intrinsic = $derived(INTRINSIC[shape]);

  const resolvedFlag = $derived(
    slug === FALLBACK_SLUG ? undefined : resolveFlag?.(slug, shape)
  );
  const fallbackSrc = $derived(FALLBACK_FLAGS[shape]);
  const altText = $derived(`Flag of ${team?.name || 'country'}`);

  // Compose the team-page link from linkBase (+ absolute origin in embeds).
  const href = $derived(
    team?.slug ?
      embed ?
        `https://www.reuters.com${linkBase}/teams/${team.slug}/`
      : `${linkBase}/teams/${team.slug}/`
    : '#'
  );

  // Seed reactive state from the module cache so an already-decoded flag
  // renders on the first paint (no fallback flash).
  let loadedFlagSrc = $state<string | null>(
    untrack(() =>
      resolvedFlag && decodedFlags.has(resolvedFlag) ? resolvedFlag : null
    )
  );
  const currentSrc = $derived(
    resolvedFlag && loadedFlagSrc === resolvedFlag ? resolvedFlag : fallbackSrc
  );

  $effect(() => {
    const target = resolvedFlag;
    if (!target) {
      loadedFlagSrc = null;
      return;
    }
    if (decodedFlags.has(target)) {
      loadedFlagSrc = target;
      return;
    }

    let cancelled = false;
    const img = new Image();
    img.src = target;
    img
      .decode()
      .then(() => {
        decodedFlags.add(target);
        if (!cancelled) loadedFlagSrc = target;
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  });
</script>

{#snippet flagImg()}
  <img
    src={currentSrc}
    alt={altText}
    width={intrinsic.width}
    height={intrinsic.height}
    {loading}
    decoding="async"
    draggable="false"
    style:width
    style:height="auto"
  />
{/snippet}

<figure style:width style:height="auto">
  {#if link}
    <a {href} target={embed ? '_top' : undefined}>
      {@render flagImg()}
    </a>
  {:else}
    {@render flagImg()}
  {/if}
</figure>

<style lang="scss">
  @use '../../styles/mixins' as mixins;

  figure {
    padding: 0;
    margin: 0;
  }

  img {
    margin: 0;
  }

  a {
    @include mixins.hover-supported() {
      opacity: 0.9;
      overflow: visible;
    }
  }
</style>
