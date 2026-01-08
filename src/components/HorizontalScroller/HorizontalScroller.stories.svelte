<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import HorizontalScroller from './HorizontalScroller.svelte';
  import { quartInOut } from 'svelte/easing';
  import DemoComponent from './demo/Demo.svelte';
  import DemoSnippetBlock from './demo/DemoSnippet.svelte';
  import CustomChildrenBlock from './demo/CustomChildrenSnippet.svelte';
  import ScrollableGraphic from './demo/ScrollableGraphic.svelte';
  import WithScrollerBaseComponent from './demo/withScrollerBase.svelte';
  import Block from '../Block/Block.svelte';

  const { Story } = defineMeta({
    title: 'Components/Graphics/HorizontalScroller',
    component: HorizontalScroller,
    tags: ['autodocs'],
  });

  let width: number = $state(0);
</script>

<script>
</script>

<svelte:window bind:innerWidth={width} />

{#snippet DemoSnippet()}
  <DemoSnippetBlock />
{/snippet}

{#snippet CustomChildrenSnippet()}
  <CustomChildrenBlock />
{/snippet}

<Story
  name="Demo"
  args={{
    children: DemoSnippet,
    height: '200lvh',
  }}
>
  {#snippet children(args)}
    <DemoComponent {...args}></DemoComponent>
  {/snippet}
</Story>

<Story
  name="With stops"
  args={{
    children: DemoSnippet,
    height: '200lvh',
    stops: [0.2, 0.5, 0.6, 0.7],
    duration: 400,
    scrubbed: false,
    easing: quartInOut,
    showDebugInfo: true,
    direction: 'left',
  }}
>
  {#snippet children(args)}
    <Block width="fluid">
      <DemoComponent {...args}></DemoComponent>
    </Block>
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

<Story name="With ScrollerBase">
  <WithScrollerBaseComponent />
</Story>
