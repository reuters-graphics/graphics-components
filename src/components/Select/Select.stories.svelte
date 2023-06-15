<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import labelDocs from './stories/docs/label.md?raw';
  // @ts-ignore
  import defaultDocs from './stories/docs/default.md?raw';

  import Select from './Select.svelte';

  import { withComponentDocs, withStoryDocs } from '$docs/utils/withParams.js';

  const optionList = [
    {
      text: 'Red',
      value: 'r',
    },
    {
      text: 'Blue',
      value: 'b',
    },
    {
      text: 'Green',
      value: 'g',
    },
  ];

  const metaProps = {
    ...withComponentDocs(componentDocs),
  };
</script>

<Meta title="Components/Select" component="{Select}" {...metaProps} />

<Template let:args>
  <Select {...args} />
</Template>

<Story
  name="Default"
  args="{{
    options: optionList,
  }}"
/>

<Story
  name="Label"
  {...withStoryDocs(labelDocs)}
  args="{{
    label: 'Pick a color',
    options: optionList,
  }}"
/>

<Story
  name="Selected"
  {...withStoryDocs(defaultDocs)}
  args="{{
    selected: 'g',
    options: optionList,
  }}"
/>
