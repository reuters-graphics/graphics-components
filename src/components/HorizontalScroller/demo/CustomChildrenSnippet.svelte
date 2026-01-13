<script lang="ts">
  import DatawrapperChart from '../../DatawrapperChart/DatawrapperChart.svelte';
  import Headline from '../../Headline/Headline.svelte';
  import AiChart from './graphic/ai2svelte/ai-chart.svelte';
  import Block from '../../Block/Block.svelte';
</script>

<div id="horizontal-stack">
  <div style="width: 100vw;">
    <DatawrapperChart
      title="Global abortion access"
      ariaLabel="map"
      id="abortion-rights-map"
      src="https://graphics.reuters.com/USA-ABORTION/lgpdwggnwvo/media-embed.html"
      frameTitle=""
      scrolling="no"
      textWidth="normal"
      width="wider"
    />
  </div>
  <div style="width: 100vw;">
    <Headline
      hed="Reuters Graphics Interactive"
      dek="The beginning of a beautiful page"
      section="World News"
    />
  </div>
  <div style="width: 100vw;">
    <Block width="normal">
      <AiChart />
    </Block>
  </div>
</div>

<style lang="scss">
  #horizontal-stack {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 10vw;
    height: 100%;
  }
</style>
