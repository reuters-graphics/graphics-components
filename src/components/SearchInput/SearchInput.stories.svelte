<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import SearchInput from './SearchInput.svelte';

  import { withComponentDocs } from '$docs/utils/withParams.js';

  const meta = {
    title: 'Components/SearchInput',
    component: SearchInput,
    ...withComponentDocs(componentDocs),
  };
</script>

<Meta {...meta} />

<Template let:args>
  <SearchInput {...args} />
</Template>

<Story name="Default" args="{{}}" />
