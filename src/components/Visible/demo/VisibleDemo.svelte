<script lang="ts">
  import Visible from '../Visible.svelte';
  import BodyText from '../../BodyText/BodyText.svelte';
  import Block from '../../Block/Block.svelte';
  import FeaturePhoto from '../../FeaturePhoto/FeaturePhoto.svelte';
  import sharkSrc from '../../FeaturePhoto/images/shark.jpg';

  let top = 100;

  const demoText =
    'Take a look at the *Elements* tab in Inspector to see how the photo in the middle of the page appears in the DOM only when its container comes into view.';

  let demoText2 = $derived(
    `The top value for \`rootMargin\` is set to \`${top}px\` in this demo. Read about how \`rootMargin\` affects the <a href='https://codepen.io/michellebarker/full/xxwLpRG'>Intersection Observer's behaviour here</a>.`
  );

  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
</script>

<BodyText text={`**${demoText}**`} />

<BodyText text={`**${demoText2}**`} />
<BodyText {text} />
<BodyText {text} />
<BodyText {text} />
<BodyText {text} />

<Visible {top} once={false}>
  {#snippet children(visible)}
    {#if visible}
      <FeaturePhoto
        src={sharkSrc}
        altText="A shark!"
        caption="Carcharodon carcharias - REUTERS"
      />
    {:else}
      <Block><h2>Not yet visible.</h2></Block>
    {/if}
  {/snippet}
</Visible>
<BodyText {text} />
<BodyText {text} />
<BodyText {text} />
<BodyText {text} />
<BodyText {text} />
