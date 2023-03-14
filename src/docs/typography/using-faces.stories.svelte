<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import {
    withComponentDocs,
    withStoryDocs,
  } from '$lib/docs/utils/withParams.js';

  import FaceDemo from './docs/FaceDemo.svelte';

  // @ts-ignore
  import face from './docs/face.md?raw';

  const meta = {
    title: 'Typography/How to use',
    component: FaceDemo,
    ...withComponentDocs(face),
    argTypes: {
      face: {
        control: 'select',
        options: [
          'typeface-display',
          'typeface-serif',
          'typeface-sans-serif',
          'typeface-monospace',
        ],
      },
    },
  };
</script>

<Meta {...meta} />

<Story let:args name="Typefaces" {...withStoryDocs(face)}>
  <FaceDemo {...args} />
</Story>
