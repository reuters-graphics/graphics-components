<script lang="ts">
  import Visible from '../Visible.svelte';
  import BodyText from '../../BodyText/BodyText.svelte';
  import Block from '../../Block/Block.svelte';

  const demoText =
    'Adjust the window dimension to see what happens when the HTML element wrapped in `Visible` becomes enters the viewport.';
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
</script>

<BodyText text={`**${demoText}**`} />
<BodyText {text} />
<BodyText {text} />
<BodyText {text} />

<Block>
  <Visible top={{ value: 10, unit: 'px' }}>
    {#snippet children(visible)}
      {#if visible}
        <h2>Visible!</h2>
      {:else}
        <h2>Not yet visible.</h2>
      {/if}
    {/snippet}
  </Visible>
</Block>

<BodyText {text} />
<BodyText {text} />
<BodyText {text} />
<BodyText {text} />

<style lang="scss">
</style>
