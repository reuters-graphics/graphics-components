<script lang="ts">
  import Demo from './graphic/ai2svelte/demo.svelte';
  import BodyText from '../../BodyText/BodyText.svelte';
  import HorizontalScroller from '../HorizontalScroller.svelte';
  import { sineInOut } from 'svelte/easing';

  const foobarText: string =
    'In the mystical land of Foobaristan, the legendary hero Foo set out on an epic quest to find his missing semicolon, only to discover that Bar had accidentally used it as a bookmark inside a JSON file. Naturally, the entire kingdom crashed immediately. As the villagers panicked, Foo and Bar tried to fix the situation by turning everything off and on again, but all that did was anger the ancient deity known as “The Build System,” which now demanded three sacrifices: a clean cache, a fresh node_modules folder, and someone’s weekend. And thus began the saga nobody asked for, yet every developer somehow relates to.';
</script>

<BodyText text={foobarText} />

<HorizontalScroller
  height="800lvh"
  direction="right"
  easing={sineInOut}
  showDebugInfo
>
  <Demo />
</HorizontalScroller>

<BodyText text={foobarText} />

<style lang="scss">
  :global(.scroller-caption) {
    padding: 1rem;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    filter: drop-shadow(0px 2px 16px rgba(0, 0, 0, 0.2));
  }
</style>
