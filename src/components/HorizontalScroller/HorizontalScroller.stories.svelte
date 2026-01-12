<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import HorizontalScroller from './HorizontalScroller.svelte';
  import { quartInOut } from 'svelte/easing';
  import DemoComponent from './demo/Demo.svelte';
  import DemoSnippetBlock from './demo/DemoSnippet.svelte';
  import CustomChildrenBlock from './demo/CustomChildrenSnippet.svelte';
  import ScrollableGraphic from './demo/ScrollableGraphic.svelte';
  import AdvancedScrollableGraphic from './demo/AdvancedScrollableGraphic.svelte';
  import WithScrollerBaseComponent from './demo/withScrollerBase.svelte';
  import Block from '../Block/Block.svelte';

  const { Story } = defineMeta({
    title: 'Components/Graphics/HorizontalScroller',
    component: HorizontalScroller,
    tags: ['autodocs'],
  });

  let width: number = $state(0);
</script>

<svelte:window bind:innerWidth={width} />

{#snippet DemoSnippet()}
  <DemoSnippetBlock />
{/snippet}

{#snippet CustomChildrenSnippet()}
  <CustomChildrenBlock />
{/snippet}

<Story name="Demo">
  <DemoComponent>
    <DemoSnippetBlock />
  </DemoComponent>
</Story>

<Story name="With stops and easing" exportName="WithStops">
  <Block width="fluid">
    <DemoComponent
      stops={[0.2, 0.5, 0.6, 0.7]}
      duration={400}
      toggleScrub={true}
      easing={quartInOut}
      direction="left"
    >
      <DemoSnippetBlock />
    </DemoComponent>
  </Block>
</Story>

<Story
  name="Extended boundary"
  args={{
    children: DemoSnippet,
    height: '200lvh',
    mappedStart: -0.5,
    mappedEnd: 1.5,
    showDebugInfo: true,
    scrubbed: true,
    stops: [0, 1],
    easing: quartInOut,
  }}
>
  {#snippet children(args)}
    <DemoComponent {...args}></DemoComponent>
  {/snippet}
</Story>

<Story
  name="Custom children"
  args={{
    children: CustomChildrenSnippet,
    height: '200lvh',
    stops: [0.5],
    duration: 400,
    scrubbed: false,
    easing: quartInOut,
    showDebugInfo: true,
    direction: 'right',
  }}
>
  {#snippet children(args)}
    <DemoComponent {...args}></DemoComponent>
  {/snippet}
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
