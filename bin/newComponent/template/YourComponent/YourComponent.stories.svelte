<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import YourComponent from './YourComponent.svelte';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  // 🖼️ You can import images you need in stories directly in code!
  // @ts-ignore img
  import SharkImg from './stories/shark.jpg';

  const metaProps = {
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

<Meta
  title="Components/YourComponent"
  component="{YourComponent}"
  {...metaProps}
/>

<Template let:args>
  <YourComponent {...args} />
</Template>

<Story
  name="Default"
  args="{{
    width: 'normal',
    src: SharkImg,
    altText: "Duh dum! It's a shark!!",
  }}"
/>
