<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import BodyText from './BodyText.svelte';

  import {
    withComponentDocs
  } from '$lib/docs/utils/withParams.js';

  const meta = {
    title: 'Components/BodyText',
    component: BodyText,
    ...withComponentDocs(componentDocs),
  };
</script>

<Meta {...meta} />

<Template let:args>
  <BodyText {...args} />
</Template>

<Story
  name="Default"
  args={{
    text: `Bacon ipsum **dolor amet** cow tongue tri-tip.
  
  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.
  
  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.`
  }}
/>
