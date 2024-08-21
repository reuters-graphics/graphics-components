<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import SearchInput from './SearchInput.svelte';

  import { withComponentDocs } from '$docs/utils/withParams.js';
</script>

<Meta
  title="Components/SearchInput"
  component="{SearchInput}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <SearchInput {...args} />
</Template>

<Story name="Default" args="{{}}" />
