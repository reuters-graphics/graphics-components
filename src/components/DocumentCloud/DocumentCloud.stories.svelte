<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import DocumentCloud from './DocumentCloud.svelte';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  const metaProps = {
    ...withComponentDocs(componentDocs),
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  };
</script>

<Meta
  title="Components/DocumentCloud"
  component="{DocumentCloud}"
  {...metaProps}
/>

<Template let:args>
  <DocumentCloud {...args} />
</Template>

<Story
  name="Default"
  args="{{
    width: 'normal',
    slug: '3259984-Trump-Intelligence-Allegations',
    altText: 'These Reports Allege Trump Has Deep Ties To Russia',
  }}"
/>
