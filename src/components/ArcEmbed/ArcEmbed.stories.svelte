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
  // Reuse an existing Storybook image asset for the basic stage, standing in for
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
  A fully tricked-out embed composition that exercises the major options: linked
  kicker and headline, dek, header controls, an SVG stage that relies on
  ArcEmbed's pre-hydration sizing guard, stage overlays and a rich footer.
-->
<Story name="Fully tricked out" exportName="FullyTrickedOut">
  <ArcEmbed stageHeight={360} class="arc-tricked-out">
    {#snippet header()}
      <ArcHeader
        kicker="Climate"
        kickerUrl="https://www.reuters.com/sustainability/"
        headline="Where extreme heat is stretching the grid"
        headlineUrl="https://www.reuters.com/graphics/climate-change/"
        dek="Track how demand, heat and renewable output shift through a summer afternoon."
      >
        <form class="embed-search" aria-label="Search a city">
          <label for="arc-embed-city">Jump to</label>
          <input id="arc-embed-city" value="Phoenix" aria-label="City" />
          <button type="button">Search</button>
        </form>
      </ArcHeader>
    {/snippet}
    {#snippet stage()}
      <svg
        class="arc-demo-chart"
        viewBox="0 0 720 360"
        role="img"
        aria-labelledby="arc-demo-chart-title arc-demo-chart-desc"
      >
        <title id="arc-demo-chart-title">Hourly power demand and heat</title>
        <desc id="arc-demo-chart-desc">
          A demo line chart with labelled demand and heat-index series.
        </desc>
        <defs>
          <linearGradient id="heat-gradient" x1="0" x2="1">
            <stop offset="0" stop-color="#f8d8c8" />
            <stop offset="1" stop-color="#f15b2a" />
          </linearGradient>
        </defs>
        <rect width="720" height="360" fill="#fbf8f6" />
        {#each [80, 140, 200, 260, 320] as y}
          <line x1="64" x2="680" y1={y} y2={y} stroke="#ddd" />
        {/each}
        <path
          d="M64 276 C150 252 190 214 258 202 S382 174 444 126 574 96 680 82"
          fill="none"
          stroke="#f15b2a"
          stroke-width="5"
          stroke-linecap="round"
        />
        <path
          d="M64 292 C148 286 214 266 286 246 S430 234 502 214 610 190 680 178"
          fill="none"
          stroke="#333"
          stroke-width="3"
          stroke-linecap="round"
        />
        <rect
          x="64"
          y="302"
          width="616"
          height="18"
          fill="url(#heat-gradient)"
        />
        <text x="64" y="52" class="chart-label">Heat index</text>
        <text x="680" y="168" class="chart-label demand" text-anchor="end">
          Power demand
        </text>
        <text x="64" y="342" class="axis-label">6 a.m.</text>
        <text x="372" y="342" class="axis-label" text-anchor="middle">Noon</text
        >
        <text x="680" y="342" class="axis-label" text-anchor="end">6 p.m.</text>
      </svg>
      <div class="stage-pill top-left">LIVE CONDITIONS</div>
      <div class="stage-card">
        <strong>104°F</strong>
        <span>Feels-like temperature at 3 p.m.</span>
      </div>
    {/snippet}
    {#snippet footer()}
      <div class="arc-rich-footer">
        <p>
          Demand and heat-index values are illustrative for this reusable
          component example.
        </p>
        <ul aria-label="Embed controls shown in this example">
          <li>Linked kicker</li>
          <li>Linked headline</li>
          <li>Header search</li>
          <li>SVG stage</li>
          <li>Overlay card</li>
        </ul>
      </div>
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

  .embed-search {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    font-size: 13px;

    label {
      color: #666;
      font-weight: 700;
    }

    input,
    button {
      font: inherit;
      border: 1px solid #cfcfcf;
      border-radius: 2px;
      padding: 6px 8px;
      background: #fff;
    }

    button {
      border-color: #404040;
      background: #404040;
      color: #fff;
      font-weight: 700;
    }
  }

  .arc-demo-chart {
    display: block;
    font-family: 'ArcKnowledge', Arial, sans-serif;
  }

  .chart-label {
    fill: #f15b2a;
    font-size: 17px;
    font-weight: 700;

    &.demand {
      fill: #333;
    }
  }

  .axis-label {
    fill: #666;
    font-size: 13px;
  }

  .stage-pill,
  .stage-card {
    position: absolute;
    z-index: 1;
    background: rgb(255 255 255 / 92%);
    box-shadow: 0 2px 8px rgb(0 0 0 / 12%);
  }

  .stage-pill {
    top: 12px;
    left: 12px;
    padding: 5px 8px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.03em;
    color: #555;
  }

  .stage-card {
    right: 14px;
    bottom: 16px;
    max-width: 160px;
    padding: 10px 12px;
    color: #404040;

    strong,
    span {
      display: block;
    }

    strong {
      font-size: 30px;
      line-height: 1;
    }

    span {
      margin-top: 4px;
      font-size: 13px;
      line-height: 17px;
    }
  }

  .arc-rich-footer {
    border-top: 1px solid #ddd;
    margin-top: 10px;
    padding-top: 10px;
    color: #666;
    font-size: 13px;
    line-height: 18px;

    p {
      margin: 0 0 8px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      border: 1px solid #ddd;
      border-radius: 999px;
      padding: 2px 8px;
      background: #fafafa;
    }
  }
</style>
