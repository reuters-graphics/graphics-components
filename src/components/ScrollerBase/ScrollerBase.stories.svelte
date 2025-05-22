<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ScrollerBase from './ScrollerBase.svelte';
  import ScrollerDemo from './demo/ScrollerDemo.svelte';

  const { Story } = defineMeta({
    title: 'Components/Graphics/ScrollerBase',
    component: ScrollerBase,
  });
</script>

<Story name="Demo"><ScrollerDemo /></Story>
