<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Scroller from './Scroller.svelte';

  const { Story } = defineMeta({
    title: 'Components/Graphics/Scroller',
    component: Scroller,
    argTypes: {
      steps: { control: false },
      backgroundWidth: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
      foregroundPosition: {
        control: 'select',
        options: ['middle', 'left', 'right', 'left opposite', 'right opposite'],
      },
      embeddedLayout: {
        control: 'select',
        options: ['fb', 'bf'],
      },
      index: {
        control: false,
        table: {
          category: 'Bindable states (Read-only)',
        },
      },
      offset: {
        control: false,
        table: {
          category: 'Bindable states (Read-only)',
        },
      },
      progress: {
        control: false,
        table: {
          category: 'Bindable states (Read-only)',
        },
      },
    },
  });
</script>

<script lang="ts">
  import MyBackground from './demo/components/basic/Step.svelte';
  import MyInteractiveForeground from './demo/components/basic/InteractiveForeground.svelte';

  // ai2svelte backgrounds
  import AiMap1 from './demo/components/ai2svelte/ai-scroller-1.svelte';
  import AiMap2 from './demo/components/ai2svelte/ai-scroller-2.svelte';
  import AiMap3 from './demo/components/ai2svelte/ai-scroller-3.svelte';

  // ai2svelte foreground
  import AiForeground from './demo/components/ai2svelte/ai-foreground.svelte';

  const aiCharts = {
    AiMap1,
    AiMap2,
    AiMap3,
  };

  const foregroundComponents = {
    AiForeground,
  };

  const docBlock = {
    foregroundPosition: 'right',
    id: 'my-scroller',
    stackBackground: 'true',
    steps: [
      {
        background: aiCharts.AiMap1,
        foreground: "#### Step 1\n\nHere's where something happend.",
        altText: 'A map showing the Upper West side in New York City.',
      },
      {
        background: aiCharts.AiMap2,
        foreground: '#### Step 2\n\nSomething happened on some street...',
        altText: 'The same map now highlights 98th Street.',
      },
      {
        background: aiCharts.AiMap3,
        foreground: '#### Step 3\n\n... and now there are multiple protests.',
        altText:
          'The same map now highlights three locations near 98th Street where something particulary important happened.',
      },
    ],
  } as const;

  const docBlockCustomForeground = {
    foregroundPosition: 'left',
    id: 'my-scroller',
    stackBackground: 'true',
    steps: [
      {
        background: aiCharts.AiMap1,
        foreground: "#### Step 1\n\nHere's where something happend.",
        altText: 'A map showing the Upper West side in New York City.',
      },
      {
        background: aiCharts.AiMap2,
        foreground: foregroundComponents.AiForeground,
        altText: 'The same map now highlights 98th Street.',
      },
      {
        background: aiCharts.AiMap3,
        foreground: '#### Step 3\n\n... and now there are multiple protests.',
        altText:
          'The same map now highlights three locations near 98th Street where something particulary important happened.',
      },
    ],
  } as const;
</script>

<Story
  name="Demo"
  args={{
    steps: [
      {
        background: MyBackground,
        backgroundProps: { colour: 'red' },
        foreground: '#### Step 1\n\nLorem ipsum red',
        altText: 'Red background',
      },
      {
        background: MyBackground,
        backgroundProps: { colour: 'blue' },
        foreground: '#### Step 2\n\nLorem ipsum blue',
        altText: 'Blue background',
      },
      {
        background: MyBackground,
        backgroundProps: { colour: 'green' },
        foreground: '#### Step 3\n\nLorem ipsum green',
        altText: 'Green background',
      },
    ],
    foregroundPosition: 'middle',
    backgroundWidth: 'fluid',
  }}
/>

<Story name="ArchieML and ai2svelte" exportName="ArchieML">
  <Scroller
    id={docBlock.id}
    foregroundPosition={docBlock.foregroundPosition}
    stackBackground={docBlock.stackBackground === 'true'}
    steps={docBlock.steps.map((step) => ({
      background: step.background,
      foreground: step.foreground,
      altText: step.altText,
    }))}
  />
</Story>

<Story
  name="Custom foreground"
  exportName="CustomForeground"
  args={{
    steps: [
      {
        background: MyBackground,
        backgroundProps: { colour: 'red' },
        foreground: MyInteractiveForeground,
      },
      {
        background: MyBackground,
        backgroundProps: { colour: 'blue' },
        foreground: '#### Step 2\n\nLorem ipsum blue',
      },
      {
        background: MyBackground,
        backgroundProps: { colour: 'green' },
        foreground: MyInteractiveForeground,
        foregroundProps: { count: 100 },
      },
    ],
  }}
/>

<Story
  name="Custom foreground with ArchiemL"
  exportName="CustomforegroundArchieML"
>
  <Scroller
    id={docBlockCustomForeground.id}
    foregroundPosition={docBlockCustomForeground.foregroundPosition}
    stackBackground={docBlockCustomForeground.stackBackground === 'true'}
    steps={docBlockCustomForeground.steps.map((step) => ({
      background: step.background,
      foreground: step.foreground,
      altText: step.altText,
    }))}
  />
</Story>
