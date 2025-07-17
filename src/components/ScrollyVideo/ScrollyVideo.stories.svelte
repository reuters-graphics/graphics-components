<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ScrollyVideo from './ScrollyVideo.svelte';
  import WithScrollerBase from './demo/WithScrollerBase.svelte';
  import WithTimeline from './demo/WithTimeline.svelte';
  import BasicTextBoxes from './demo/BasicTextBoxes.svelte';

  const { Story } = defineMeta({
    title: 'Components/Graphics/ScrollyVideo',
    component: ScrollyVideo,
    parameters: {
      docsTools: { remount: true },
    },
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
</script>

<script>
  import Video_SM from './videos/waves_sm.mp4';
  import Video_MD from './videos/waves_md.mp4';
  import Video_LG from './videos/waves_lg.mp4';
  import Goldengate from './videos/goldengate.mp4';

  const videoSrc = {
    Video_SM,
    Video_MD,
    Video_LG,
    Goldengate,
  };

  const args = {
    trackScroll: true,
    height: '500svh',
    showDebugInfo: true,
    autoplay: false,
    full: true,
    sticky: true,
    objectFit: 'cover',
    transitionSpeed: 8,
    frameThreshold: 0.1,
    useWebCodecs: true,
    lockScroll: true,
  };
</script>

<svelte:window bind:innerWidth={width} />

<Story name="Basic" {args}></Story>

<Story name="Responsive videos">
  {#if width < 600}
    <ScrollyVideo {...args} src={videoSrc.Video_SM} />
  {:else if width < 1200}
    <ScrollyVideo {...args} src={videoSrc.Video_MD} />
  {:else}
    <ScrollyVideo {...args} src={videoSrc.Video_LG} />
  {/if}
</Story>

<Story name="Autoplay" {args}>
  <ScrollyVideo
    {...args}
    src={videoSrc.Goldengate}
    useWebCodecs={false}
    autoplay={true}
  ></ScrollyVideo>
</Story>

<Story name="Inside ScrollerBase" {args}>
  <WithScrollerBase />
</Story>

<Story name="Time based foregrounds" {args}>
  <WithTimeline />
</Story>

<Story name="Basic text foreground" {args}>
  <BasicTextBoxes />
</Story>
