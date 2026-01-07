<script lang="ts">
  import ScrollerHorizontal from '../HorizontalScroller.svelte';
  import BodyText from '../../BodyText/BodyText.svelte';

  let { ...args } = $props();

  const foobarText: string =
    'In the mystical land of Foobaristan, the legendary hero Foo set out on an epic quest to find his missing semicolon, only to discover that Bar had accidentally used it as a bookmark inside a JSON file. Naturally, the entire kingdom crashed immediately. As the villagers panicked, Foo and Bar tried to fix the situation by turning everything off and on again, but all that did was anger the ancient deity known as “The Build System,” which now demanded three sacrifices: a clean cache, a fresh node_modules folder, and someone’s weekend. And thus began the saga nobody asked for, yet every developer somehow relates to.';
</script>

<BodyText text={foobarText} />

<ScrollerHorizontal {...args} />

<BodyText text={foobarText} />
