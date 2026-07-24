<!--
@component
TrophyIcon

A gold trophy-star used to mark the winner of the Final in a bracket. The blur
filter id is generated per-instance so multiple trophies on one page don't
share a broken `url(#id)` reference. No data/service coupling.
-->

<script lang="ts">
  let { size = 24 }: { size?: number } = $props();

  const filterId = `football-trophy-blur-${crypto.randomUUID()}`;
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <defs>
    <filter id={filterId} x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
    </filter>
  </defs>
  <polygon
    points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
    class="shadow"
    style:filter={`url(#${filterId})`}
  />
  <polygon
    points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
    class="winner"
  />
</svg>

<style lang="scss">
  polygon {
    shape-rendering: crispEdges;
    stroke-width: 0.5px;
    stroke: rgba(0, 0, 0, 0.15);

    &.winner {
      fill: var(--theme-colour-trophy-gold);
    }
    &.shadow {
      fill: var(--theme-colour-mid-grey);
      transform: translate(1px, 1px);
    }
  }
</style>
