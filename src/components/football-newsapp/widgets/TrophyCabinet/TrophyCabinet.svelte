<!--
@component
TrophyCabinet

A team's honours list — a row of gold (winner) / grey (runner-up) stars, each
labelled with a year and finish. Fully decoupled: pass the honours directly via
the `honours` prop. The individual star is the already-ported `TrophyStar`
element, so this widget only composes; it does not re-implement the star.

```svelte
<TrophyCabinet
  honours={[
    { year: 2022, place: 'Winner' },
    { year: 2018, place: 'Runner-up' },
  ]}
/>
```
-->

<script lang="ts">
  import TrophyStar from '../../elements/TrophyStar/TrophyStar.svelte';

  type Place = 'Winner' | 'Runner-up';

  /** One honour in the cabinet. */
  type Honour = {
    /** Year label rendered above the star, e.g. `2022`. */
    year: string | number;
    /** Tournament finish — drives the star's fill colour. */
    place: Place;
  };

  let {
    honours = [],
    starWidth = 35,
  }: {
    /** The team's honours, most significant/recent first. */
    honours?: Honour[];
    /** Pixel width of each star. */
    starWidth?: number;
  } = $props();
</script>

{#if honours.length > 0}
  <div class="container fmt-5 fmb-7">
    <div class="flex trophy-cabinet" role="list" aria-label="Trophy cabinet">
      {#each honours as honour, i (`${honour.year}-${honour.place}-${i}`)}
        <TrophyStar year={honour.year} place={honour.place} width={starWidth} />
      {/each}
    </div>
  </div>
{/if}

<style lang="scss">
  .trophy-cabinet {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }
</style>
