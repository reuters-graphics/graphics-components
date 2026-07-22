<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ArcEmbed from './ArcEmbed.svelte';
  import ArcHeader from './ArcHeader.svelte';
  import ArcKicker from './ArcKicker.svelte';

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
  // Reuse an existing Storybook image asset for the basic stage, standing in for
  // whatever graphic (a map, chart or photo) an embed would render.
  import sharkSrc from '../FeaturePhoto/images/shark.jpg';
  import DatawrapperChart from '../DatawrapperChart/DatawrapperChart.svelte';
</script>

<!--
  A full embed: a homepage-style header with a linked kicker, a photo in the
  stage and a caption in the footer. ArcEmbed loads the Reuters Knowledge font
  for you.
-->
<Story asChild name="Demo">
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
  A real-world composition: an auto-height (`stageHeight="auto"`) stage holding
  two self-sizing Datawrapper charts in a responsive grid that sits side by side
  on wide screens and stacks on narrow ones, mirroring the two-up chart module on
  a Reuters.com topic page.
-->
<Story asChild name="Two-column Datawrapper" exportName="TwoColumnDatawrapper">
  <ArcEmbed stageHeight="auto">
    {#snippet header()}
      <ArcKicker kicker="Data" href="https://www.reuters.com/data/" />
    {/snippet}
    {#snippet stage()}
      <div class="arc-dw-columns">
        <DatawrapperChart
          width="fluid"
          textWidth="fluid"
          src="https://datawrapper.dwcdn.net/8lZUu/"
          frameTitle="Crude oil at sea"
          ariaLabel="Chart: crude oil at sea"
          id="arc-dw-8lZUu"
          scrolling="no"
        />
        <DatawrapperChart
          width="fluid"
          textWidth="fluid"
          src="https://datawrapper.dwcdn.net/GEfzN/"
          frameTitle="Oil-tanker transits through the Strait of Hormuz"
          ariaLabel="Chart: oil-tanker transits through the Strait of Hormuz"
          id="arc-dw-GEfzN"
          scrolling="no"
        />
      </div>
    {/snippet}
  </ArcEmbed>
</Story>

<!--
  The minimum: just a header and a stage, with no footer.
-->
<Story asChild name="Without footer" tags={['!autodocs', '!dev']}>
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

  .arc-dw-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    // DatawrapperChart wraps each chart in a GraphicBlock that adds a fluid
    // top/bottom margin (`fmy-6`); drop it so the charts sit flush in the grid.
    :global(.graphic) {
      margin-top: 0;
      margin-bottom: 0;
    }

    // Each Datawrapper iframe self-sizes to its own content, so two charts with
    // different content end up at different heights. Pin them to a shared
    // height so the columns line up; the responsive charts stretch to fill it.
    :global(.datawrapper-chart iframe) {
      height: 460px !important;
    }
  }
</style>
