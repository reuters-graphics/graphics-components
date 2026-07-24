<!--
@component
TrophyStar

A gold (winner) or grey (runner-up) star with a year + place label, for a
team's honours list. No data/service coupling — pass `year` and `place`.
-->

<script lang="ts">
  type Place = 'Winner' | 'Runner-up';

  let {
    width = 35,
    year,
    place = 'Winner',
  }: {
    /** Pixel width (and height — the SVG is square) of the star. */
    width?: number;
    /** Year label rendered above the star, e.g. `'2022'`. */
    year: string | number;
    /** Tournament finish — drives the star's fill colour. */
    place?: Place;
  } = $props();

  let isWinner = $derived(place === 'Winner');

  const starPoints = '12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9';
</script>

<div class="star-container" role="listitem" aria-label={`${place} ${year}`}>
  <div class="label year">{year}</div>
  <svg {width} height={width} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <defs>
      <filter id="football-trophy-blur-effect" x="0" y="0">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1"></feGaussianBlur>
      </filter>
    </defs>
    <polygon points={starPoints} class="shadow"></polygon>
    <polygon
      points={starPoints}
      class:winner={isWinner}
      class:runner-up={!isWinner}
    ></polygon>
  </svg>
  <div class="label place">{place}</div>
</div>

<style lang="scss">
  @use '../../styles/mixins' as mixins;

  .star-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .label {
    &.year {
      margin-bottom: 0;
      @include mixins.font-bold;
      @include mixins.text-xxs;
      color: var(--theme-colour-text-secondary);
    }
    &.place {
      margin-top: 0;
      @include mixins.text-xxs;
    }
  }
  polygon {
    shape-rendering: crispEdges;
    stroke-width: 0.5px;
    stroke: rgba(0, 0, 0, 0.15);
    &.winner {
      fill: var(--theme-colour-trophy-gold);
    }
    &.runner-up {
      fill: var(--theme-colour-muted-grey);
    }
    &.shadow {
      fill: var(--theme-colour-mid-grey);
      transform: translate(1px, 1px);
      filter: url(#football-trophy-blur-effect);
    }
  }
</style>
