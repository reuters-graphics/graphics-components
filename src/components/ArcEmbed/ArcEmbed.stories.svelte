<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ArcEmbed from './ArcEmbed.svelte';
  import ArcHeader from './ArcHeader.svelte';

  const { Story } = defineMeta({
    title: 'Components/Embeds/ArcEmbed',
    component: ArcEmbed,
    tags: ['autodocs'],
    argTypes: {
      stageHeight: { control: { type: 'number', min: 120, step: 20 } },
    },
  });
</script>

<script>
  // Reuse an existing Storybook image asset for the stage, standing in for
  // whatever graphic (a map, chart or photo) an embed would render.
  import sharkSrc from '../FeaturePhoto/images/shark.jpg';
</script>

<!--
  A full embed: a homepage-style header with a linked kicker, a photo in the
  stage and a caption in the footer. ArcEmbed loads the Reuters Knowledge font
  for you.
-->
<Story name="Demo">
  <ArcEmbed stageHeight={420}>
    {#snippet header()}
      <ArcHeader
        kicker="Wildlife"
        kickerUrl="https://www.reuters.com/"
        headline="The great white's comeback"
        headlineUrl="https://www.reuters.com/"
        dek="Conservation efforts have helped a feared predator rebound along the coast."
      />
    {/snippet}
    {#snippet stage()}
      <img class="arc-stage-photo" src={sharkSrc} alt="A great white shark" />
    {/snippet}
    {#snippet footer()}
      <p class="arc-caption">
        A great white shark off the coast. <span>REUTERS</span>
      </p>
    {/snippet}
  </ArcEmbed>
</Story>

<!--
  The minimum: just a header and a stage, with no footer.
-->
<Story name="Without footer" tags={['!autodocs', '!dev']}>
  <ArcEmbed stageHeight={300}>
    {#snippet header()}
      <ArcHeader
        headline="A simple embed"
        dek="Only a header and a stage are required."
      />
    {/snippet}
    {#snippet stage()}
      <img class="arc-stage-photo" src={sharkSrc} alt="A great white shark" />
    {/snippet}
  </ArcEmbed>
</Story>

<style lang="scss">
  .arc-stage-photo {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    object-fit: cover;
  }

  .arc-caption {
    margin: 8px 0 0;
    font-size: 13px;
    line-height: 18px;
    color: #666;

    span {
      color: #999;
    }
  }
</style>
