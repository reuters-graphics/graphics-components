<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ArcCluster from './ArcCluster.svelte';
  import ArcHeader from './ArcHeader.svelte';

  const { Story } = defineMeta({
    title: 'Components/Embeds/ArcCluster',
    component: ArcCluster,
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
  stage and a caption in the footer. ArcCluster loads the Reuters Knowledge font
  for you.
-->
<Story asChild name="Demo">
  <ArcCluster stageHeight={420}>
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
  </ArcCluster>
</Story>

<!--
  A fixed-height stage holding a bare `<svg>` with no width/height of its own.
  ArcCluster stretches it to fill the box, so a chart or map drops straight in.
-->
<Story asChild name="Fixed-height SVG" exportName="FixedHeightSvg">
  <ArcCluster stageHeight={260}>
    {#snippet header()}
      <ArcHeader
        kicker="Markets"
        headline="A self-filling SVG"
        dek="A bare SVG with no dimensions stretches to fill the fixed stage."
      />
    {/snippet}
    {#snippet stage()}
      <svg
        viewBox="0 0 320 180"
        preserveAspectRatio="none"
        role="img"
        aria-label="Sample bar chart"
      >
        <rect x="20" y="120" width="40" height="50" fill="#fa8072" />
        <rect x="80" y="90" width="40" height="80" fill="#fa8072" />
        <rect x="140" y="60" width="40" height="110" fill="#fa8072" />
        <rect x="200" y="40" width="40" height="130" fill="#fa8072" />
        <rect x="260" y="20" width="40" height="150" fill="#fa8072" />
      </svg>
    {/snippet}
  </ArcCluster>
</Story>

<!--
  An auto-height (`stageHeight="auto"`) stage: the photo flows at its natural
  aspect ratio and the stage grows to fit it, instead of filling a fixed box.
-->
<Story asChild name="Auto-height stage" exportName="AutoHeightStage">
  <ArcCluster stageHeight="auto">
    {#snippet header()}
      <ArcHeader
        kicker="Wildlife"
        headline="A stage that grows with its content"
        dek="With stageHeight=&quot;auto&quot; the stage fits the visual instead of cropping it to a fixed box."
      />
    {/snippet}
    {#snippet stage()}
      <img
        class="arc-stage-flow-photo"
        src={sharkSrc}
        alt="A great white shark"
      />
    {/snippet}
  </ArcCluster>
</Story>

<!--
  A real-world composition: an auto-height (`stageHeight="auto"`) stage holding
  two self-sizing Datawrapper charts in a responsive grid that sits side by side
  on wide screens and stacks on narrow ones, mirroring the two-up chart module on
  a Reuters.com topic page.
-->
<Story asChild name="Two-column Datawrapper" exportName="TwoColumnDatawrapper">
  <ArcCluster stageHeight="auto">
    {#snippet stage()}
      <div class="arc-dw-columns">
        <DatawrapperChart
          width="fluid"
          textWidth="fluid"
          src="https://datawrapper.dwcdn.net/8lZUu/?fitchart=true"
          frameTitle="Crude oil at sea"
          ariaLabel="Chart: crude oil at sea"
          id="arc-dw-8lZUu"
          scrolling="no"
          height={470}
        />
        <DatawrapperChart
          width="fluid"
          textWidth="fluid"
          src="https://datawrapper.dwcdn.net/GEfzN/?fitchart=true"
          frameTitle="Oil-tanker transits through the Strait of Hormuz"
          ariaLabel="Chart: oil-tanker transits through the Strait of Hormuz"
          id="arc-dw-GEfzN"
          scrolling="no"
          height={470}
        />
      </div>
    {/snippet}
  </ArcCluster>
</Story>

<!--
  The minimum: just a header and a stage, with no footer.
-->
<Story asChild name="Without footer" tags={['!autodocs', '!dev']}>
  <ArcCluster stageHeight={300}>
    {#snippet header()}
      <ArcHeader
        headline="A simple embed"
        dek="Only a header and a stage are required."
      />
    {/snippet}
    {#snippet stage()}
      <img class="arc-stage-photo" src={sharkSrc} alt="A great white shark" />
    {/snippet}
  </ArcCluster>
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

  .arc-stage-flow-photo {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
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

    // Stack on narrow screens.
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
</style>
