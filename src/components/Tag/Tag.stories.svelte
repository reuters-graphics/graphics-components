<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import linkDocs from './stories/docs/link.md?raw';
  // @ts-ignore
  import bigDocs from './stories/docs/big.md?raw';

  import Tag from './Tag.svelte';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  const metaProps = {
    ...withComponentDocs(componentDocs),
    argTypes: {
      size: {
        control: 'select',
        options: ['normal', 'big'],
      },
    },
  };
</script>

<Meta title="Components/Tag" component="{Tag}" {...metaProps} />

<Template let:args>
  <Tag {...args} />
</Template>

<Story
  name="Default"
  args="{{
    text: 'Tag',
  }}"
/>

<Story
  name="Link"
  {...withStoryDocs(linkDocs)}
  args="{{
    text: 'Link',
    link: 'https://reuters.com/',
  }}"
/>

<Story
  name="Size"
  {...withStoryDocs(bigDocs)}
  args="{{
    text: 'Link',
    size: 'big',
  }}"
/>
