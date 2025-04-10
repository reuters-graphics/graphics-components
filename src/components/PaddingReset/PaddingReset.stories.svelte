<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import PaddingReset from './PaddingReset.svelte';

  const { Story } = defineMeta({
    title: 'Components/Page layout/PaddingReset',
    component: PaddingReset,
  });
</script>

<script>
  import Block from '../Block/Block.svelte';
  let width: 'wide' | 'fluid' = 'fluid';

  import sharkSrc from './shark.jpg';
</script>

<Story name="Demo">
  <!-- Fluid block -->
  <Block {width}>
    <img src={sharkSrc} alt="shark" class="fmb-1" />
    <PaddingReset containerIsFluid={width === 'fluid' ? true : false}>
      <div class="body-note">
        A caption for the image that is padded when its containing <code
          >Block</code
        > is fluid.
      </div>
    </PaddingReset>
  </Block>
</Story>

<style lang="scss">
  // Style span as code block with unicode font
  code {
    line-height: 1;
    margin: 0px 2px;
    padding: 3px 5px;
    white-space: nowrap;
    border-radius: 3px;
    font-size: 13px;
    border: 1px solid rgb(236, 244, 249);
    color: rgba(46, 52, 56, 0.9);
    background-color: rgb(247, 250, 252);
  }

  // p {
  //   background: rgb(222, 222, 222);
  // }
</style>
