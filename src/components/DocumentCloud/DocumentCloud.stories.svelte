<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DocumentCloud from './DocumentCloud.svelte';

  const { Story } = defineMeta({
    title: 'Components/Multimedia/DocumentCloud',
    component: DocumentCloud,
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  });
</script>

<Story
  name="Demo"
  args={{
    slug: '3259984-Trump-Intelligence-Allegations',
    altText: 'These Reports Allege Trump Has Deep Ties To Russia',
  }}
/>
