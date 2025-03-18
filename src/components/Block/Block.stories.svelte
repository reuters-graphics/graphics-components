<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Block from './Block.svelte';

  const { Story } = defineMeta({
    title: 'Components/Page layout/Block',
    component: Block,
    tags: ['autodocs'],
    argTypes: {
      width: {
        control: 'select',
        options: [
          'narrower',
          'narrow',
          'normal',
          'wide',
          'wider',
          'widest',
          'fluid',
        ],
      },
    },
  });
</script>

<script>
  import Article from '../Article/Article.svelte';
</script>

{#snippet template()}
  <Article id="block-demo-article">
    <div class="article-boundaries">
      <div class="label">Article</div>
      <Block>
        <div class="label">Block</div>
      </Block>
    </div>
  </Article>
{/snippet}

<Story name="Demo" children={template} />

<Story name="Custom layout" exportName="CustomLayout">
  <Block width="fluid">
    <!-- Enter bootstrap grid! -->
    <div id="block-flex-example">
      <div class="row">
        <div class="col">Column</div>
        <div class="col-6">Column</div>
        <div class="col">Column</div>
      </div>
      <div class="row">
        <div class="col">Column</div>
        <div class="col">Column</div>
      </div>
    </div>
  </Block>
</Story>

<Story name="Snap widths" exportName="SnapWidthsBasic">
  <Article id="block-demo-article">
    <div class="article-boundaries">
      <div class="label">Article</div>
      <h4>snap widths</h4>
      <Block snap={true}>
        <div class="label">Block</div>
      </Block>
    </div>
  </Article>
</Story>

<Story name="Snap and skip widths" exportName="SnapSkipWidths">
  <Article id="block-demo-article">
    <div class="article-boundaries">
      <div class="label">Article</div>
      <h4>Regular layout</h4>

      <Block width="narrower" snap={true} class="block-snap-widths-demo">
        narrower
      </Block>
      <Block width="narrow" snap={true} class="block-snap-widths-demo">
        narrow
      </Block>
      <Block width="normal" snap={true} class="block-snap-widths-demo">
        normal
      </Block>
      <Block width="wide" snap={true} class="block-snap-widths-demo">
        wide
      </Block>
      <Block width="wider" snap={true} class="block-snap-widths-demo">
        wider
      </Block>

      <h4>with snap and skip</h4>
      <Block width="narrower" snap={true} class="block-snap-widths-demo even">
        narrower
      </Block>
      <Block width="narrow" snap={true} class="block-snap-widths-demo even">
        narrow
      </Block>
      <Block
        width="normal"
        snap={true}
        class="block-snap-widths-demo even skip-narrow"
      >
        normal.skip-narrow
      </Block>
      <Block
        width="wide"
        snap={true}
        class="block-snap-widths-demo even skip-normal skip-narrow"
      >
        wide.skip-normal.skip-narrow
      </Block>
      <Block
        width="wider"
        snap={true}
        class="block-snap-widths-demo even skip-wide"
      >
        wider.skip-wide
      </Block>
    </div>
  </Article>
</Story>

<style lang="scss">
  h4 {
    text-align: center;
  }
  :global(#block-demo-article) {
    background-color: #ddd;
    position: relative;
    width: calc(100% + 30px);
    margin-left: -15px;
  }
  :global(#block-demo-article .article-boundaries) {
    padding: 0 0 18px;
    width: 100%;
    height: 100%;
    background-color: #bbb;
  }
  :global(#block-demo-article div.article-block) {
    height: 100px;
    background: #81a1c1;
  }
  :global(#block-demo-article div.article-block.block-snap-widths-demo) {
    margin-bottom: 2px;
    height: 40px;
    font-size: 11px;
  }
  :global(#block-demo-article div.article-block.block-snap-widths-demo.even) {
    background: rgb(211, 132, 123);
  }
  :global(
    #block-demo-article .label,
    #block-demo-article div.article-block.block-snap-widths-demo
  ) {
    padding-left: 3px;
    color: white;
    font-weight: 500;
  }

  div#block-flex-example {
    padding: 25px 0;
    div.row {
      display: flex;
    }
    div.row > div {
      background-color: rgb(211, 132, 123);
      border: 1px solid white;
      border-radius: 4px;
      padding: 20px;
      color: white;
      text-align: center;
      flex-grow: 1;
    }
    div.row:first-child {
      div {
        background: #81a1c1;
      }
    }
  }
</style>
