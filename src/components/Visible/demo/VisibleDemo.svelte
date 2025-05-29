<script lang="ts">
  import Visible from '../Visible.svelte';
  import BodyText from '../../BodyText/BodyText.svelte';
  import Block from '../../Block/Block.svelte';
  import FeaturePhoto from '../../FeaturePhoto/FeaturePhoto.svelte';
  import sharkSrc from '../../FeaturePhoto/images/shark.jpg';

  const demoText =
    "Adjust the window dimension to see what happens when `<div class='visibility-tracker'>` comes into <a href='https://codepen.io/michellebarker/full/xxwLpRG'>Internsection Observer's</a> view.";

  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  let top = 500;
</script>

<BodyText text={`**${demoText}**`} />
<BodyText {text} />
<BodyText {text} />
<BodyText {text} />

<!-- <div class="root-margin-demo" style="padding-top:{top}px;">
  <p class="margin-value font-note font-medium">Root margin top: {top}px</p>
</div> -->
<Visible {top}>
  {#snippet children(visible)}
    {#if visible}
      <FeaturePhoto
        src={sharkSrc}
        altText="A shark!"
        caption="Carcharodon carcharias - REUTERS"
      />
    {:else}
      <Block>
        <h2 class="not-visible">Not yet visible.</h2>
      </Block>
    {/if}
  {/snippet}
</Visible>
<BodyText {text} />
<BodyText {text} />

<style lang="scss">
  @use '../../../scss/mixins' as mixins;

  .root-margin-demo {
    position: relative;
    background: lightblue;
    margin: auto;
    max-width: mixins.$column-width-normal;

    p.margin-value {
      position: absolute;
      top: 5px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
