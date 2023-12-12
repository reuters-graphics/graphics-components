<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import PaddingReset from './PaddingReset.svelte';
  import Block from '../Block/Block.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';
</script>

<Meta
  title="Components/PaddingReset"
  component="{PaddingReset}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Block width="fluid">
    <div class="outer"></div>
    <PaddingReset {...args}>
      <div class="inner"></div>
    </PaddingReset>
  </Block>
</Template>

<Story
  name="Default"
  args="{{
    containerIsFluid: true,
  }}"
  let:args
/>

<style lang="scss">
  div {
    height: 30px;
    width: 100%;
    margin-bottom: 2px;
    &.outer {
      background: grey;
    }
    &.inner {
      background: salmon;
    }
  }
</style>
