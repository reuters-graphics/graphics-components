<!--
@component
Squad

Renders a team's coaching staff (above) and the squad players (below).

**Layout switches based on whether the rail overflows:**
  - **Overflows** — a horizontally-scrollable rail of individual position cards
    with a right-edge fade and a one-shot "swipe right" hint that disappears
    once the user scrolls.
  - **Fits** — a single rounded card with the positions sitting side-by-side,
    separated by thin vertical dividers. No scrolling, no fade, no hint.

The switch is driven entirely by overflow detection (no viewport breakpoint),
using the local `useHorizontalScroll` composable. This avoids the awkward
left-aligned cluster of cards that a fixed breakpoint would produce at
viewports where the content happens to fit.

Fully decoupled — pass the squad directly via the `squad` prop; no app store or
`$utils` used.
-->

<script lang="ts">
  import { useHorizontalScroll } from './useHorizontalScroll.svelte';

  /** Player positions used by the Squad layout. */
  type Position = 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Attacker';

  /** Minimal squad member shape this widget consumes. */
  type SquadMember = {
    firstName?: string;
    lastName?: string;
    matchName?: string;
    role?: string;
    position?: string;
    shirtNumber?: string | number;
  };

  /** Known `role` strings from the data source. */
  const ROLE = {
    coach: 'coach',
    assistantCoach: 'assistant coach',
  } as const;

  /** Position labels rendered, in the order they appear on the pitch. */
  const POSITIONS: Position[] = [
    'Goalkeeper',
    'Defender',
    'Midfielder',
    'Attacker',
  ];

  /** Full name from first + last; used for coaches and assistants. */
  const fullName = (m: SquadMember) =>
    `${m.firstName ?? ''} ${m.lastName ?? ''}`.trim();

  /** Stable-ish key for `{#each}` — prefers `matchName`, falls back to full
   *  name plus shirt number to disambiguate same-named players. */
  const playerKey = (m: SquadMember) =>
    `${m.matchName ?? fullName(m)}#${m.shirtNumber ?? ''}`;

  /** Sort comparator: ascending by shirt number, treating non-numeric as ∞. */
  const byShirt = (a: SquadMember, b: SquadMember) => {
    const an = Number(a.shirtNumber);
    const bn = Number(b.shirtNumber);
    return (
      (Number.isFinite(an) ? an : Infinity) -
      (Number.isFinite(bn) ? bn : Infinity)
    );
  };

  let { squad }: { squad: SquadMember[] } = $props();

  /** Safe accessor — callers may pass `undefined` before data resolves. */
  let members: SquadMember[] = $derived(Array.isArray(squad) ? squad : []);

  /**
   * Single-pass grouping: walks `members` once and bucketises coaches,
   * assistants, and players-by-position. Player buckets are then sorted by
   * shirt number so the rendered roster reads naturally (1, 2, 3, …).
   */
  let groups = $derived.by(() => {
    const coaches: string[] = [];
    const assistantCoaches: string[] = [];
    const byPosition: Record<Position, SquadMember[]> = {
      Goalkeeper: [],
      Defender: [],
      Midfielder: [],
      Attacker: [],
    };

    for (const m of members) {
      if (m.role === ROLE.coach) {
        coaches.push(fullName(m));
        continue;
      }
      if (m.role === ROLE.assistantCoach) {
        assistantCoaches.push(m.matchName ?? fullName(m));
        continue;
      }
      // Only count players who have been issued a shirt number. The explicit
      // null/empty-string check keeps `0` and `''` out without conflating
      // them with missing data.
      if (m.position && m.shirtNumber != null && m.shirtNumber !== '') {
        const bucket = byPosition[m.position as Position];
        if (bucket) bucket.push(m);
      }
    }

    for (const list of Object.values(byPosition)) list.sort(byShirt);

    return { coaches, assistantCoaches, byPosition };
  });

  /** Only render the positions that actually have players. */
  let positionGroups = $derived(
    POSITIONS.map((label) => ({
      label,
      players: groups.byPosition[label],
    })).filter((g) => g.players.length > 0)
  );

  let hasPlayers = $derived(positionGroups.length > 0);

  /* ------------------------------------------------------------------
   * Horizontal scroll wiring. Drives both the rail interactions (fade,
   * swipe hint) and the layout switch between scrollable rail and
   * unified card.
   * ------------------------------------------------------------------ */
  const scroll = useHorizontalScroll({
    scrollFraction: 0.8,
    scrollCheckDelay: 300,
    edgeThreshold: 4,
  });

  /**
   * Whether we've taken at least one overflow measurement. We only trust
   * `hasOverflow === false` *after* the first measurement — before that, the
   * rail should render in its default (scrollable) form so the browser can
   * actually measure whether the content overflows.
   */
  let measured = $state(false);

  $effect(() => {
    const cleanup = scroll.setupScrollMonitoring();
    measured = true;
    return cleanup;
  });

  // Re-check overflow when the rendered position list changes.
  $effect(() => {
    positionGroups.length;
    if (typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(() => scroll.checkOverflow());
    }
  });

  /** Right fade appears whenever there's more content to the right. */
  let showRightEdge = $derived(scroll.hasOverflow && !scroll.isAtEnd);
  /**
   * Swipe-right hint: only shown at the very start of the scroll (before the
   * user has interacted) and only when there's actually overflow.
   */
  let showSwipeHint = $derived(scroll.hasOverflow && scroll.isAtStart);

  /**
   * When the rail content fits without overflowing, switch to the
   * unified-card layout. Drives the visual mode entirely — there's no
   * separate viewport breakpoint.
   */
  let noOverflow = $derived(measured && !scroll.hasOverflow);
</script>

{#snippet coachRow(label: string, value: string)}
  <div class="coach-row">
    <dt class="font-medium text-right text-secondary">{label}</dt>
    <dd>{value}</dd>
  </div>
{/snippet}

{#snippet playerRow(p: SquadMember)}
  <li class="player fmy-0 text-sm leading-tighter">
    <span
      class="shirt text-xxs font-medium text-secondary"
      aria-label="Shirt number {p.shirtNumber}"
    >
      <svg
        class="shirt-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <!-- Stylised football jersey: shoulders, sleeves and torso. -->
        <path
          d="M8.5 3 4 5.2 2.2 9.6l3.3 1.7L6.5 9v11.2h11V9l1 2.3 3.3-1.7L20 5.2 15.5 3a3.6 3.6 0 0 1-7 0Z"
          fill="currentColor"
        />
      </svg>
      <span class="shirt-number">{p.shirtNumber}</span>
    </span>
    <span class="name ml-0.5">
      {p.matchName ?? fullName(p)}
    </span>
  </li>
{/snippet}

{#if groups.coaches.length > 0 || groups.assistantCoaches.length > 0}
  <dl class="coaches fmx-auto fmb-3 text-sm">
    {#if groups.coaches.length > 0}
      {@render coachRow('Manager:', groups.coaches.join(', '))}
    {/if}
    {#if groups.assistantCoaches.length > 0}
      {@render coachRow(
        groups.assistantCoaches.length > 1 ? 'Assistants:' : 'Assistant',
        groups.assistantCoaches.join(', ')
      )}
    {/if}
  </dl>
{/if}

{#if hasPlayers}
  <div
    class="squad-window"
    class:no-overflow={noOverflow}
    class:measuring={!measured}
  >
    <div class="squad-scroll" bind:this={scroll.contentElement}>
      <div class="squad-rail" aria-label="Squad">
        {#each positionGroups as group (group.label)}
          <section class="position-card">
            <h3 class="position-title fmt-0 fmb-3">
              <span
                class="position-label leading-none text-secondary uppercase text-xs tracking-wide"
                >{group.label}</span
              >
              <span class="position-count leading-none text-secondary text-xs"
                >{group.players.length}</span
              >
            </h3>
            <ul class="player-list">
              {#each group.players as player (playerKey(player))}
                {@render playerRow(player)}
              {/each}
            </ul>
          </section>
        {/each}
      </div>
    </div>

    <!-- Trailing-edge fade. Decorative; `pointer-events: none` so touch/wheel
         scrolling passes through to the rail. -->
    {#if showRightEdge}
      <div class="edge-fade right" aria-hidden="true"></div>
    {/if}

    <!-- Swipe-right hint. Only at the start of the scroll, only when there's
         overflow. Clicking it nudges the rail right by one "page" of cards. -->
    {#if showSwipeHint}
      <button
        type="button"
        class="swipe-hint"
        onclick={scroll.scrollRight}
        aria-label="Swipe right to see more positions"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    {/if}
  </div>
{/if}

<style lang="scss">
  @use '../../styles/mixins' as mixins;

  /* --------------------------------------------------------------------
   * Coaches: compact term/definition list anchored above the squad rail.
   * ------------------------------------------------------------------ */
  .coaches {
    display: grid;
    grid-template-columns: auto auto;
    gap: 0.25rem;
    width: max-content;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;

    .coach-row {
      display: contents;
    }

    dt {
      margin: 0;
      white-space: nowrap;
    }

    dd {
      margin: 0;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      width: 100%;
      text-align: center;
      gap: 0.5rem 0;

      .coach-row {
        display: block;
      }

      dt {
        display: inline;
      }

      dt::after {
        content: ': ';
      }

      dd {
        display: inline;
      }
    }
  }

  /* ====================================================================
   * Default: horizontally-scrollable rail of position cards.
   * ================================================================== */
  .squad-window {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .squad-window.measuring {
    visibility: hidden;
  }

  .squad-scroll {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    scroll-snap-type: x proximity;
    scroll-behavior: smooth;
    scroll-padding-inline-start: 0.5rem;

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
      scroll-snap-type: none;
    }
  }

  .squad-rail {
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    gap: 0.35rem;
    width: max-content;
  }

  .position-card {
    flex: 0 0 auto;
    min-width: fit-content;
    max-width: max-content;
    @include mixins.fp-5;
    border-radius: var(--theme-style-border-radius);
    background-color: var(--theme-colour-muted-grey);
    display: flex;
    flex-direction: column;
    scroll-snap-align: start;
  }

  /* --- Overflow-only fade + swipe hint ----------------------------- */
  $edge-width: 3rem;

  .edge-fade {
    position: absolute;
    top: 0;
    bottom: 0;
    width: $edge-width;
    pointer-events: none;
    z-index: 1;

    &.right {
      right: 0;
      background: linear-gradient(
        to left,
        var(--theme-colour-background) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }

  .swipe-hint {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    width: 2.25rem;
    height: 2.25rem;
    padding: 0;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--theme-colour-white);
    color: var(--theme-colour-text-secondary);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    z-index: 2;
    transition:
      color 0.15s ease,
      transform 0.15s ease,
      box-shadow 0.15s ease;

    animation: swipe-nudge 1.6s ease-in-out infinite;
    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }

    &:hover {
      color: var(--theme-colour-text-primary);
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
    }

    &:focus-visible {
      outline: 2px solid var(--theme-colour-live-red);
      outline-offset: 2px;
    }
  }

  @keyframes swipe-nudge {
    0%,
    100% {
      transform: translate(0, -50%);
    }
    50% {
      transform: translate(-0.35rem, -50%);
    }
  }

  /* ====================================================================
   * Unified-card layout: single rounded card with vertical dividers.
   * ================================================================== */
  .squad-window.no-overflow {
    overflow: visible;
    max-width: max-content;
    margin-inline: auto;

    .squad-scroll {
      overflow: visible;
      padding: 0;
      scroll-snap-type: none;
    }

    .squad-rail {
      width: 100%;
      gap: 0;
      background-color: var(--theme-colour-muted-grey);
      border-radius: var(--theme-style-border-radius);
      box-shadow: 1px 1px 1px var(--theme-colour-tan-grey);
      justify-content: center;
    }

    .position-card {
      flex: 1 1 0;
      background-color: transparent;
      border-radius: 0;
      box-shadow: none;
      border-left: 1px solid var(--theme-colour-tan-grey);

      &:first-child {
        border-left: none;
      }
    }

    .edge-fade,
    .swipe-hint {
      display: none;
    }
  }

  /* --------------------------------------------------------------------
   * Shared bits: position title, player list/row, jersey badge.
   * ------------------------------------------------------------------ */
  .position-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    @include mixins.font-sans;

    .position-count {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 1.25rem;
      height: 1.25rem;
      padding: 0 0.35rem;
      border-radius: 999px;
      background-color: var(--theme-colour-tan-grey);
      font-variant-numeric: tabular-nums;
      line-height: 1;
    }
  }

  .player-list {
    list-style: none;
    margin: 0;
    padding: 0;
    flex: 1;
    @include mixins.font-sans;
  }

  .player {
    display: flex;
    align-items: center;
    height: calc(1.5 * var(--theme-font-size-base));

    .shirt {
      position: relative;
      flex: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: calc(1.75 * var(--theme-font-size-base));
      height: calc(1.75 * var(--theme-font-size-base));
      text-align: center;
      font-variant-numeric: tabular-nums;
    }

    .shirt-icon {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      stroke: var(--theme-colour-white);
      color: var(--theme-colour-tan-grey);
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
      pointer-events: none;
      z-index: 0;
    }

    .shirt-number {
      position: relative;
      z-index: 1;
      line-height: 1;
      transform: translateY(0.15em);
    }

    .name {
      min-width: 0;
      overflow-wrap: anywhere;
    }
  }
</style>
