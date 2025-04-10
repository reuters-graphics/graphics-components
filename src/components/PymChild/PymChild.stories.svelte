<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import PymChild from './PymChild.svelte';

  const { Story } = defineMeta({
    title: 'Components/Utilities/PymChild',
    component: PymChild,
  });
</script>

<Story name="Demo" tags={['!autodocs', '!dev']} />
