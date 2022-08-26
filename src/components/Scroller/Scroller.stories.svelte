<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import interactiveDocs from './stories/docs/interactive.md?raw';
  // @ts-ignore
  import ai2svelteDocs from './stories/docs/ai2svelte.md?raw';
  // @ts-ignore
  import quickitDocs from './stories/docs/quickit.md?raw';

  import Scroller from './Scroller.svelte';

  import BasicStep from './stories/components/basic/Step.svelte';
  import InteractiveForeground from './stories/components/basic/InteractiveForeground.svelte';
  import AiMap1 from './stories/components/ai2svelte/ai-scroller-1.svelte';
  import AiMap2 from './stories/components/ai2svelte/ai-scroller-2.svelte';
  import AiMap3 from './stories/components/ai2svelte/ai-scroller-3.svelte';

  import {
    withComponentDocs,
    withStoryDocs
  } from '$lib/docs/utils/withParams.js';

  import { getScrollerPropsFromDoc } from './docProps';

  const aiCharts = {
    AiMap1,
    AiMap2,
    AiMap3,
  };

  const docBlock = {
    Type: 'scroller',
    Width: 'fluid',
    ForegroundPosition: 'middle',
    ID: 'my-scroller',
    StackBackground: 'true',
    Steps: [
      { Background: 'AiMap1', Text: '#### Step 1\n\nLorem ipsum' },
      { Background: 'AiMap2', Text: '#### Step 2\n\nLorem ipsum' },
      { Background: 'AiMap3', Text: '#### Step 3\n\nLorem ipsum' },
    ],
  };

  const meta = {
    title: 'Components/Scroller',
    component: Scroller,
    ...withComponentDocs(componentDocs),
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
    },
  };
</script>

<Meta {...meta} />

<Template let:args>
  <Scroller {...args} />
</Template>

<Story
  name="Default"
  args={{
    steps: [
      { background: BasicStep, backgroundProps: { colour: 'red' }, foreground: '#### Step 1\n\nLorem ipsum red' },
      { background: BasicStep, backgroundProps: { colour: 'blue' }, foreground: '#### Step 2\n\nLorem ipsum blue' },
      { background: BasicStep, backgroundProps: { colour: 'green' }, foreground: '#### Step 3\n\nLorem ipsum green' },
    ],
    foregroundPosition: 'middle',
    backgroundWidth: 'fluid',
    embeddedLayout: 'fb',
    embedded: false,
  }}
/>

<Story
  name="🚀 QUICKIT"
  args={getScrollerPropsFromDoc(docBlock, aiCharts)}
  {...withStoryDocs(quickitDocs)}
/>

<Story
  name="Foreground components"
  args={{
    steps: [
      { background: BasicStep, backgroundProps: { colour: 'red' }, foreground: InteractiveForeground },
      { background: BasicStep, backgroundProps: { colour: 'blue' }, foreground: '#### Step 2\n\nLorem ipsum blue' },
      { background: BasicStep, backgroundProps: { colour: 'green' }, foreground: InteractiveForeground, foregroundProps: { count: 100 } },
    ],
    foregroundPosition: 'middle',
    backgroundWidth: 'fluid',
    embeddedLayout: 'fb',
    embedded: false,
  }}
  {...withStoryDocs(interactiveDocs)}
/>

<Story
  name="Ai2svelte"
  args={{
    steps: [
      { background: AiMap1, backgroundProps: { colour: 'red' }, foreground: '#### Step 1\n\nLorem ipsum' },
      { background: AiMap2, backgroundProps: { colour: 'blue' }, foreground: '#### Step 2\n\nLorem ipsum' },
      { background: AiMap3, backgroundProps: { colour: 'green' }, foreground: '#### Step 3\n\nLorem ipsum' },
    ],
    foregroundPosition: 'middle',
    backgroundWidth: 'fluid',
    embeddedLayout: 'fb',
    embedded: false,
  }}
  {...withStoryDocs(ai2svelteDocs)}
/>