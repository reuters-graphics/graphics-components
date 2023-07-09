<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import customLayoutsDocs from './stories/docs/customLayouts.md?raw';
  // @ts-ignore
  import snapWidthsDocs from './stories/docs/snapWidths.md?raw';

  import Block from './Block.svelte';
  import Article from '../Article/Article.svelte';

  import { withComponentDocs, withStoryDocs } from '$docs/utils/withParams.js';

  const metaProps = {
    ...withComponentDocs(componentDocs),
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
  };
</script>

<Meta title="Layout/Block" component="{Block}" {...metaProps} />

<Template let:args>
  <Article id="block-demo-article">
    <div class="article-boundaries">
      <div class="label">Article</div>
      <Block {...args}>
        <div class="label">Block</div>
      </Block>
    </div>
  </Article>
</Template>

<Story
  name="Default"
  args="{{
    width: 'normal',
  }}"
/>

<Story name="Custom layouts" {...withStoryDocs(customLayoutsDocs)}>
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

<Story name="Snap widths" {...withStoryDocs(snapWidthsDocs)}>
  <Article id="block-demo-article">
    <div class="article-boundaries">
      <div class="label">Article</div>
      <Block width="narrower" snap="{true}" cls="block-snap-widths-demo"
        >narrower</Block
      >
      <Block width="narrow" snap="{true}" cls="block-snap-widths-demo"
        >narrow</Block
      >
      <Block width="normal" snap="{true}" cls="block-snap-widths-demo"
        >normal</Block
      >
      <Block width="wide" snap="{true}" cls="block-snap-widths-demo">wide</Block
      >
      <Block width="wider" snap="{true}" cls="block-snap-widths-demo"
        >wider</Block
      >
      <Block width="narrower" snap="{true}" cls="block-snap-widths-demo even"
        >narrower</Block
      >
      <Block width="narrow" snap="{true}" cls="block-snap-widths-demo even"
        >narrow</Block
      >
      <Block
        width="normal"
        snap="{true}"
        cls="block-snap-widths-demo even skip-narrow">normal.skip-narrow</Block
      >
      <Block
        width="wide"
        snap="{true}"
        cls="block-snap-widths-demo even skip-normal skip-narrow"
        >wide.skip-normal.skip-narrow</Block
      >
      <Block
        width="wider"
        snap="{true}"
        cls="block-snap-widths-demo even skip-wide">wider.skip-wide</Block
      >
    </div>
  </Article>
</Story>

<style lang="scss">
  :global {
    #block-demo-article {
      background-color: #ddd;
      position: relative;
      width: calc(100% + 30px);
      margin-left: -15px;

      .article-boundaries {
        padding: 0 0 18px;
        width: 100%;
        height: 100%;
        background-color: #bbb;
      }

      div.article-block {
        height: 100px;
        background: #81a1c1;
        &.block-snap-widths-demo {
          margin-bottom: 2px;
          height: 40px;
          font-size: 11px;
          &.even {
            background: rgb(211, 132, 123);
          }
        }
      }
      .label,
      div.article-block.block-snap-widths-demo {
        padding-left: 3px;
        color: white;
      }
    }
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
