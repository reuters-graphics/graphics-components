<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  import StyleDemo from './docs/StyleDemo.svelte';

  // @ts-ignore
  import style from './docs/style.md?raw';

  const meta = {
    title: 'Typography/How to use',
    component: StyleDemo,
    ...withComponentDocs(style),
    argTypes: {
      textClass: {
        control: 'select',
        options: [
          'font-hed',
          'font-subhed-1',
          'font-subhed-2',
          'font-subhed-3',
          'font-body',
          'font-note-1',
          'font-note-2',
          'font-note-3',
        ],
      },
    },
  };
</script>

<Meta {...meta} />

<Story let:args name="Text styles" {...withStoryDocs(style)}>
  <StyleDemo {...args} />
</Story>
