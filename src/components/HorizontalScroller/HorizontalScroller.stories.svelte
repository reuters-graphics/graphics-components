<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { quartInOut } from 'svelte/easing';

  import HorizontalScroller from './HorizontalScroller.svelte';
  import DemoComponent from './demo/Demo.svelte';
  import DemoSnippetBlock from './demo/DemoSnippet.svelte';
  import CustomChildrenBlock from './demo/CustomChildrenSnippet.svelte';
  import ScrollableGraphic from './demo/ScrollableGraphic.svelte';
  import AdvancedScrollableGraphic from './demo/AdvancedScrollableGraphic.svelte';
  import WithScrollerBaseComponent from './demo/withScrollerBase.svelte';

  const { Story } = defineMeta({
    title: 'Components/Graphics/HorizontalScroller',
    component: HorizontalScroller,
    tags: ['autodocs'],
  });

  let width: number = $state(0);
</script>

<svelte:window bind:innerWidth={width} />

<Story name="Demo">
  <DemoComponent>
    <DemoSnippetBlock />
  </DemoComponent>
</Story>

<Story name="With stops and easing" exportName="WithStops">
  <DemoComponent
    stops={[0.2, 0.5, 0.9]}
    duration={400}
    toggleScrub={true}
    easing={quartInOut}
  >
    <DemoSnippetBlock />
  </DemoComponent>
</Story>

<Story name="Extended boundaries">
  <DemoComponent
    mappedStart={-0.5}
    mappedEnd={1.5}
    easing={quartInOut}
    stops={[0, 1]}
  >
    <DemoSnippetBlock />
  </DemoComponent>
</Story>

<Story name="Custom children">
  <DemoComponent>
    <CustomChildrenBlock />
  </DemoComponent>
</Story>

<Story name="Scrollable ai2svelte">
  <ScrollableGraphic />
</Story>

<Story name="Scrollable ai2svelte (advanced)">
  <AdvancedScrollableGraphic />
</Story>

<Story name="With ScrollerBase">
  <WithScrollerBaseComponent />
</Story>
