<script module lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import PaddingReset from './PaddingReset.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Page layout/PaddingReset',
    component: PaddingReset,
    ...withComponentDocs(componentDocs),
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';
  import Block from '../Block/Block.svelte';
</script>

<Template >
  {#snippet children({ args })}
    <Block width="fluid">
      <div class="outer"></div>
      <PaddingReset {...args}>
        <div class="inner"></div>
      </PaddingReset>
    </Block>
  {/snippet}
</Template>

<Story
  name="Default"
  args="{{
    containerIsFluid: true,
  }}"
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
