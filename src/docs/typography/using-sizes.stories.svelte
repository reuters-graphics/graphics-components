<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  import SizeDemo from './docs/SizeDemo.svelte';

  // @ts-ignore
  import size from './docs/size.md?raw';

  const meta = {
    title: 'Typography/Using the system',
    component: SizeDemo,
    ...withComponentDocs(size),
    argTypes: {
      size: {
        control: 'select',
        options: [
          'font-size-1',
          'font-size-2',
          'font-size-3',
          'font-size-4',
          'font-size-5',
          'font-size-6',
        ],
      },
    },
  };
</script>

<Meta {...meta} />

<Story let:args name="Text sizes" {...withStoryDocs(size)}>
  <SizeDemo {...args} />
</Story>
