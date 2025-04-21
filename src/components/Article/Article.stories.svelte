<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Block from '../Block/Block.svelte';
  import Article from './Article.svelte';

  const { Story } = defineMeta({
    title: 'Components/Page layout/Article',
    component: Article,
  });
</script>

<Story name="Demo">
  <Article id="article-story-basic">
    <div class="demo-container">
      <div class="background-label">Article well</div>
      <div class="padding-label"><span>⇤</span>15px padding</div>
    </div>
  </Article>
</Story>

<Story name="Custom columns" exportName="CustomColumns">
  <h3>Default column widths</h3>

  <Article id="article-column-widths-demo">
    <div class="article-boundaries">
      <Block id="section-demo" width="narrower">narrower</Block>
      <Block id="section-demo" width="narrow">narrow</Block>
      <Block id="section-demo">normal</Block>
      <Block id="section-demo" width="wide">wide</Block>
      <Block id="section-demo" width="wider">wider</Block>
      <Block id="section-demo" width="widest">widest</Block>
      <Block id="section-demo" width="fluid">fluid</Block>
    </div>
  </Article>
  <h3>Custom column widths</h3>
  <Article
    id="article-column-widths-demo"
    columnWidths={{
      narrower: 250,
      narrow: 400,
      normal: 500,
      wide: 675,
      wider: 1400,
    }}
  >
    <div class="article-boundaries custom">
      <Block id="section-demo" width="narrower">narrower</Block>
      <Block id="section-demo" width="narrow">narrow</Block>
      <Block id="section-demo">normal</Block>
      <Block id="section-demo" width="wide">wide</Block>
      <Block id="section-demo" width="wider">wider</Block>
      <Block id="section-demo" width="widest">widest</Block>
      <Block id="section-demo" width="fluid">fluid</Block>
    </div>
  </Article>
</Story>

<style lang="scss">
  h3 {
    text-align: center;
  }
  :global(span.custom) {
    color: rgb(211, 132, 123);
    font-weight: 600;
  }
  :global(#article-story-basic, #article-column-widths-demo) {
    width: calc(100% + 30px);
    margin-left: -15px;
  }
  :global(#article-column-widths-demo) {
    background-color: #ddd;
    position: relative;
    margin-bottom: 10px;
  }
  :global(#article-column-widths-demo .article-boundaries) {
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #bbb;
  }
  :global(
    #article-column-widths-demo .article-boundaries.custom div.article-block
  ) {
    background: rgb(211, 132, 123);
  }
  :global(#article-column-widths-demo div.article-block) {
    height: 300px;
    background: #81a1c1;
    margin-bottom: 2px;
    height: 50px;
    padding-left: 3px;
    color: white;
    font-size: 1rem;
  }

  div.demo-container {
    height: 300px;
    background: #ccc;
    position: relative;
    .background-label {
      font-size: 1.5rem;
      position: absolute;
      top: 40%;
      left: 40%;
      color: #666;
    }
    .padding-label {
      font-size: 1rem;
      position: absolute;
      top: 0;
      left: -17px;
      span {
        font-size: 18px;
      }
    }
  }
</style>
