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

    // DatawrapperChart wraps each chart in a GraphicBlock whose `fluid` width
    // adds full-bleed horizontal margins and extra width to break out of the
    // text well; contain it so each chart sits flush inside its grid cell.
    :global(.graphic) {
      width: 100%;
      margin: 0;
    }

    // Two Datawrapper charts with different chrome (the transits chart carries a
    // legend the crude chart doesn't) self-size to different heights, so their
    // columns don't line up. While they sit side by side, pin both frames to a
    // uniform height tall enough for the taller chart so nothing is clipped.
    // Below the stacking breakpoint the charts run full width one above the
    // other, so we let them return to their natural heights.
    @media (min-width: 901px) {
      :global(.datawrapper-chart iframe) {
        height: 475px !important;
      }
    }

    // Stack on narrow screens. The breakpoint is set wide enough that the
    // columns never get so narrow that the taller chart's headline wraps (which
    // would push its natural height past the pinned frame and clip it).
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }
</style>
