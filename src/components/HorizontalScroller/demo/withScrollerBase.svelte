<script lang="ts">
  import Demo from './graphic/ai2svelte/demo.svelte';
  import BodyText from '../../BodyText/BodyText.svelte';
  import Block from '../../Block/Block.svelte';
  import HorizontalScroller from '../HorizontalScroller.svelte';
  import ScrollerBase from '../../ScrollerBase/ScrollerBase.svelte';

  const foobarText: string =
    'In the mystical land of Foobaristan, the legendary hero Foo set out on an epic quest to find his missing semicolon, only to discover that Bar had accidentally used it as a bookmark inside a JSON file. Naturally, the entire kingdom crashed immediately. As the villagers panicked, Foo and Bar tried to fix the situation by turning everything off and on again, but all that did was anger the ancient deity known as “The Build System,” which now demanded three sacrifices: a clean cache, a fresh node_modules folder, and someone’s weekend. And thus began the saga nobody asked for, yet every developer somehow relates to.';

  // Optional: Bind your own variables to use them in your code.
  let progress = $state(0);
</script>

<BodyText text={foobarText} />

<ScrollerBase bind:progress query="div.step-foreground-container">
  {#snippet backgroundSnippet()}
    <Block width="fluid">
      <HorizontalScroller
        bind:progress
        height="100lvh"
        handleScroll={false}
        showDebugInfo
      >
        <Demo />
      </HorizontalScroller>
    </Block>
  {/snippet}
  {#snippet foregroundSnippet()}
    <!-- Add custom foreground HTML or component -->
    <div class="step-foreground-container"><p>Step 1</p></div>
    <div class="step-foreground-container"><p>Step 2</p></div>
    <div class="step-foreground-container"><p>Step 3</p></div>
    <div class="step-foreground-container"><p>Step 4</p></div>
    <div class="step-foreground-container"><p>Step 5</p></div>
  {/snippet}
</ScrollerBase>

<style lang="scss">
  .step-foreground-container {
    height: 100vh;
    width: 50%;
    background-color: rgba(0, 0, 0, 0);
    padding: 1em;
    margin: 0 auto 10px 0;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);

    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding: 1rem;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 4px;
      color: white;
    }
  }
</style>
