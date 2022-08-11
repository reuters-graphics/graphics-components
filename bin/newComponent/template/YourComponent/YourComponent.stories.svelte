<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import YourComponent from './YourComponent.svelte';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  // 🖼️ You can import images you need in stories directly in code!
  // @ts-ignore
  import SharkImg from './stories/shark.jpg';

  const meta = {
    title: 'Components/YourComponent',
    component: YourComponent,
    ...withComponentDocs(componentDocs),
    // https://storybook.js.org/docs/svelte/essentials/controls
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  };
</script>

<Meta {...meta} />

<Template let:args>
  <YourComponent {...args} />
</Template>

<Story
  name="Basic"
  args="{{
    width: 'normal',
    src: SharkImg,
    altText: 'Duh dum! It\'s a shark!!',
  }}"
/>