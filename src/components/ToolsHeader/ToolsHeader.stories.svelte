<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ToolsHeader from './ToolsHeader.svelte';

  const { Story } = defineMeta({
    title: 'Components/Page furniture/ToolsHeader',
    component: ToolsHeader,
  });
</script>

<Story name="Demo" tags={['!autodocs', '!dev']}>
  <div>
    <ToolsHeader />
  </div>
</Story>

<style>
  div {
    width: calc(100% + 30px);
    margin-inline-start: -15px;
  }
</style>
