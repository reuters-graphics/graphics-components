<!-- @component `DataCardRow`

Lays out a series of cards (typically `DataCard` cards) in a row. The cards sit
side by side and share the space, each scaling its own type to fit. The row only
becomes a horizontal swipe carousel when the cards genuinely don't all fit — then
it scrolls with scroll-snap and scroll-chaining guards, so a fling at the
first/last card doesn't nudge the surrounding page sideways. When there's room
for every card it just centers them, with no scrolling.

Overflow is measured from the row's **own width**, so it works the same whether
it's narrowed by a small viewport, a Pym iframe or a constrained parent. It is
purely presentational — pass whatever cards you like as children. Use `maxWidth`
to cap and center the row. -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';

  interface Props {
    /** The cards to lay out — typically a series of `DataCard` cards. */
    children: Snippet;
    /**
     * Optional maximum row width, in pixels. The row centers itself within its
     * parent. Leave unset to fill the parent's width.
     */
    maxWidth?: number;
  }

  let { children, maxWidth }: Props = $props();

  /** The scrolling row element (only scrolls horizontally in carousel mode). */
  let row = $state<HTMLDivElement>();
  /** True while a mouse drag-scroll is in progress. */
  let dragging = $state(false);
  /** True when the cards overflow the row and it can scroll horizontally. */
  let scrollable = $state(false);

  const canScrollX = () => !!row && row.scrollWidth > row.clientWidth + 1;

  /* Track whether the row actually overflows so it only behaves as a scroller
     (grab cursor, snap, touch-action, edge gutters) when the cards don't fit.
     When everything fits, the row stays a plain centered flex row. */
  function measure() {
    scrollable = canScrollX();
  }

  onMount(() => {
    measure();
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(() => measure());
    if (row) observer.observe(row);
    return () => observer.disconnect();
  });

  /* Translate a vertical mouse wheel into horizontal scrolling while the row is
     in carousel mode. Trackpads that already send a horizontal delta are left
     alone so their native momentum keeps working. */
  function onWheel(e: WheelEvent) {
    if (!row || !canScrollX()) return;
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    row.scrollLeft += e.deltaY;
    e.preventDefault();
  }

  /* Click-and-drag to scroll with a mouse: grab the cards and pull. Touch and
     pen are ignored here so they keep their native swipe + scroll-snap. */
  let startX = 0;
  let startScroll = 0;

  function onPointerDown(e: PointerEvent) {
    if (e.pointerType !== 'mouse' || e.button !== 0 || !canScrollX() || !row)
      return;
    dragging = true;
    startX = e.clientX;
    startScroll = row.scrollLeft;
    row.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: PointerEvent) {
    if (!dragging || !row) return;
    row.scrollLeft = startScroll - (e.clientX - startX);
  }

  function endDrag(e: PointerEvent) {
    if (!dragging || !row) return;
    dragging = false;
    if (row.hasPointerCapture(e.pointerId))
      row.releasePointerCapture(e.pointerId);
  }
</script>

<!-- The outer element is the query container; the inner row reacts to its width. -->
<div
  class="data-card-row-outer"
  style:--dc-row-max-width={maxWidth ? `${maxWidth}px` : null}
>
  <div
    class="data-card-row"
    class:dragging
    class:scrollable
    bind:this={row}
    onwheel={onWheel}
    onpointerdown={onPointerDown}
    onpointermove={onPointerMove}
    onpointerup={endDrag}
    onpointercancel={endDrag}
  >
    {@render children()}
  </div>
</div>

<style lang="scss">
  .data-card-row-outer {
    /* Caps and centers the row within its parent; the row itself handles layout
       and (only-when-needed) horizontal scrolling. */
    width: 100%;
    max-width: var(--dc-row-max-width, none);
    margin-inline: auto;
    box-sizing: border-box;
  }

  /* A single row of cards. The cards keep their natural (capped) width and the
     row only scrolls when they genuinely don't all fit — when they do fit, they
     sit centered with no scrolling. The `scrollable` class is toggled from JS
     once the row is measured, so the scroller affordances (snap, grab cursor,
     touch-action, edge gutters) only apply when there's actually an overflow. */
  .data-card-row {
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
    align-items: stretch;
    /* `safe center` centers the cards when they fit, but falls back to start
       alignment when they overflow so the first card stays reachable. */
    justify-content: safe center;
    overflow-x: auto;
    /* Room for focus outlines and the link card's hover lift/shadow, which the
       scroll container would otherwise clip. */
    padding-block: 4px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  /* Only when the cards overflow: behave like a swipe carousel. */
  .data-card-row.scrollable {
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
    /* Keep the carousel's horizontal scroll to itself so a fling at the
       first/last card doesn't chain up to the document and nudge the whole page
       sideways. `pan-x` keeps vertical page scrolling passing through. */
    overscroll-behavior-x: contain;
    touch-action: pan-x;
    /* Resting inset before the first and after the last card. */
    padding-inline: 0.5rem;
    scroll-padding-left: 0.5rem;
    /* Affordance for mouse users: the cards can be grabbed and dragged. */
    cursor: grab;
  }

  /* While actively dragging with a mouse, show the grabbing cursor and turn off
     snap so the row tracks the pointer; it snaps to the nearest card again on
     release. */
  .data-card-row.scrollable.dragging {
    cursor: grabbing;
    scroll-snap-type: none;
    user-select: none;
  }

  /* Give each card a definite width — its own named width, or an explicit
     `--dc-card-max-width` override — and stop it growing or shrinking, so the row
     overflows (and becomes scrollable) only when the cards genuinely don't fit.
     The selector is qualified through `.data-card-row-outer` so it outranks
     DataCard's own `flex: 1 1 0`; without that extra specificity the card's
     `flex-shrink: 1` wins and the cards get squeezed to fit instead of
     overflowing. Targets the row's direct children so any card composition works. */
  .data-card-row-outer > .data-card-row > :global(*) {
    flex: 0 0 var(--dc-card-max-width, var(--dc-card-width, 115px));
    scroll-snap-align: start;
  }
</style>
