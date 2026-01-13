<script lang="ts">
  import HorizontalScroller from '../HorizontalScroller.svelte';
  import BodyText from '../../BodyText/BodyText.svelte';
  import Block from '../../Block/Block.svelte';

  let { ...args } = $props();

  const foobarText: string =
    'In the mystical land of Foobaristan, the legendary hero Foo set out on an epic quest to find his missing semicolon, only to discover that Bar had accidentally used it as a bookmark inside a JSON file. Naturally, the entire kingdom crashed immediately. As the villagers panicked, Foo and Bar tried to fix the situation by turning everything off and on again, but all that did was anger the ancient deity known as “The Build System,” which now demanded three sacrifices: a clean cache, a fresh node_modules folder, and someone’s weekend. And thus began the saga nobody asked for, yet every developer somehow relates to.';

  // For the `scrubbed` demo
  let scrubbed: boolean = $state(true);
</script>

<BodyText text={foobarText} />

{#if args.toggleScrub}
  <Block>
    <button onclick={() => (scrubbed = !scrubbed)}>
      Toggle scrubbed: {scrubbed}
    </button>
  </Block>
{/if}

<Block width="fluid">
  <HorizontalScroller showDebugInfo={true} {...args} {scrubbed} />
</Block>

<BodyText text={foobarText} />

<style lang="scss">
  button {
    cursor: pointer;
    font-family: 'Geist Mono', monospace;
    margin-bottom: 10px;
    display: block;
    padding: 0.5rem 1rem;
    background-color: #f0f0f0;
    border: 2px solid #ccc;
    border-radius: 4px;
  }
</style>
