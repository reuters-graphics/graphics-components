<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ScrollerVideo from './ScrollerVideo.svelte';
  import WithScrollerBase from './demo/WithScrollerBase.svelte';
  import WithAi2svelteForegrounds from './demo/WithAi2svelteForegrounds.svelte';
  import WithTextForegrounds from './demo/WithTextForegrounds.svelte';
  import Embedded from './demo/Embedded.svelte';

  const { Story } = defineMeta({
    title: 'Components/Graphics/ScrollerVideo',
    component: ScrollerVideo,
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
      scrollerVideo: {
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
  import AdvancedUsecases from './demo/AdvancedUsecases.svelte';

  const videoSrc = {
    Video_SM,
    Video_MD,
    Video_LG,
    Goldengate,
  };

  const args = {
    trackScroll: true,
    height: '500lvh',
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

<Story name="Demo">
  <ScrollerVideo {...args} src={videoSrc.Goldengate} />
</Story>

<Story name="Responsive videos" exportName="ResponsiveVideos">
  {#if width < 600}
    <ScrollerVideo {...args} src={videoSrc.Video_SM} />
  {:else if width < 1200}
    <ScrollerVideo {...args} src={videoSrc.Video_MD} />
  {:else}
    <ScrollerVideo {...args} src={videoSrc.Video_LG} />
  {/if}
</Story>

<Story name="Embed version" exportName="Embed">
  <!-- <ScrollerVideo
    embedded={true}
    src={videoSrc.Goldengate}
    embeddedProps={{ autoplay: true }}
  /> -->
  <Embedded />
</Story>

<Story name="Autoplay" {args}>
  <ScrollerVideo
    {...args}
    src={videoSrc.Goldengate}
    useWebCodecs={false}
    autoplay={true}
  ></ScrollerVideo>
</Story>

<Story
  name="Time-based foregrounds with ArchieML"
  exportName="ArchieMLForegrounds"
  {args}
>
  <WithTextForegrounds />
</Story>

<Story
  name="Time-based component foregrounds with ArchieML"
  exportName="ComponentArchieMLForegrounds"
  {args}
>
  <WithAi2svelteForegrounds />
</Story>

<Story name="Using with ScrollerBase" exportName="ScrollerBase" {args}>
  <WithScrollerBase />
</Story>

<Story name="Advanced usecases" exportName="Advanced" {args}>
  <AdvancedUsecases />
</Story>
