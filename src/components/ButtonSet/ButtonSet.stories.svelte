<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import ButtonSet from './ButtonSet.svelte';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  // 🖼️ You can import images you need in stories directly in code!
  // @ts-ignore
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

<Meta title="Components/ButtonSet" component="{ButtonSet}" {...metaProps} />

<Template let:args>
  <ButtonSet {...args} />
</Template>

<Story
  name="Default"
  args="{{
    width: 'normal',
    src: SharkImg,
    altText: "Duh dum! It's a shark!!",
  }}"
/>
