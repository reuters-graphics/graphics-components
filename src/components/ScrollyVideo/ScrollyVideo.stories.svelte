<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ScrollyVideo from './ScrollyVideo.svelte';
  import WithScrollerBase from './demo/WithScrollerBase.svelte';

  const { Story } = defineMeta({
    title: 'Components/Graphics/ScrollyVideo',
    component: ScrollyVideo,
    argTypes: {
      autoplay: {
        control: 'boolean',
        table: {
          defaultValue: { summary: 'false' },
        },
      },
      class: {
        control: 'text',
        table: {
          defaultValue: { summary: '' },
        },
      },
      debug: {
        control: 'boolean',
        table: {
          defaultValue: { summary: 'false' },
        },
      },
      frameThreshold: {
        control: 'number',
        table: {
          defaultValue: { summary: '0.1' },
        },
      },
      full: {
        control: 'boolean',
        table: {
          defaultValue: { summary: 'true' },
        },
      },
      lockScroll: {
        control: 'boolean',
        table: {
          defaultValue: { summary: 'true' },
        },
      },
      objectFit: {
        control: 'select',
        options: ['contain', 'cover'],
        table: {
          defaultValue: { summary: 'cover' },
        },
      },
      onChange: {
        table: {
          type: { summary: 'function' },
          defaultValue: { summary: '() => {}' },
          category: 'Bindable states',
        },
      },
      onReady: {
        table: {
          type: { summary: 'function' },
          defaultValue: { summary: '() => {}' },
          category: 'Bindable states',
        },
      },
      scrollyVideo: {
        table: {
          category: 'Bindable states',
        },
      },
      showDebugInfo: {
        control: 'boolean',
        table: {
          defaultValue: { summary: 'false' },
        },
      },
      src: {
        control: 'text',
        table: {
          defaultValue: {
            summary: 'https://scrollyvideo.js.org/goldengate.mp4',
          },
        },
      },
      sticky: {
        control: 'boolean',
        table: {
          defaultValue: { summary: 'true' },
        },
      },
      trackScroll: {
        control: 'boolean',
        table: {
          defaultValue: { summary: 'true' },
        },
      },
      transitionSpeed: {
        control: 'number',
        table: {
          defaultValue: { summary: '8' },
        },
      },
      useWebCodecs: {
        control: 'boolean',
        table: {
          defaultValue: { summary: 'true' },
        },
      },
      videoPercentage: {
        control: 'number',
        table: {
          category: 'Bindable states',
        },
      },
    },
  });

  let width: number = $state(0);

  const args = $state({
    trackScroll: true,
    height: '500svh',
    showDebugInfo: true,
    autoplay: false,
  });
</script>

<svelte:window bind:innerWidth={width} />

<Story name="Basic" {args}></Story>

<Story name="Multiple Videos" {args}>
  {#if width < 600}
    <ScrollyVideo
      {...args}
      src={'./src/components/ScrollyVideo/videos/v_9_16.mp4'}
    />
  {:else if width < 1200}
    <ScrollyVideo
      {...args}
      src={'./src/components/ScrollyVideo/videos/v_1_1.mp4'}
    />
  {:else}
    <ScrollyVideo
      {...args}
      src={'./src/components/ScrollyVideo/videos/v_16_9.mp4'}
    />
  {/if}
</Story>

<Story name="Autoplay" {args}>
  <ScrollyVideo
    {...args}
    src={'./src/components/ScrollyVideo/videos/goldengate.mp4'}
    autoplay={true}
  />
</Story>

<Story name="inside ScrollerBase" {args}>
  <WithScrollerBase />
</Story>
