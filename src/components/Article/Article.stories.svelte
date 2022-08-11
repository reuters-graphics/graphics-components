<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import customWellWidthsDocs from './stories/docs/customWellWidths.md?raw';

  import Article from './Article.svelte';
  import Section from '../Section/Section.svelte';

  import { withComponentDocs, withStoryDocs } from '$docs/utils/withParams.js';

  const meta = {
    title: 'Layout/Article',
    component: Article,
    ...withComponentDocs(componentDocs),
  };
</script>

<Meta {...meta} />

<Template let:args>
  <Article {...args} />
</Template>

<Story
  name="Basic"
  args="{{
    embedded: false,
    id: '',
  }}"
>
  <Article id="article-story-basic">
    <div class="demo-container">
      <div class="background-label">Article container</div>
      <div class="padding-label"><span>⇤</span>15px padding</div>
    </div>
  </Article>
</Story>

<Story
  name="Custom columns"
  {...withStoryDocs(customWellWidthsDocs)}
>
  <Article id="article-column-widths-demo">
    <div class="article-boundaries">
      <Section id="section-demo" width="narrower">narrower</Section>
      <Section id="section-demo" width="narrow">narrow</Section>
      <Section id="section-demo">normal</Section>
      <Section id="section-demo" width="wide">wide</Section>
      <Section id="section-demo" width="wider">wider</Section>
      <Section id="section-demo" width="widest">widest</Section>
      <Section id="section-demo" width="fluid">fluid</Section>
    </div>
  </Article>
  <Article id="article-column-widths-demo" columnWidths={{ narrower: 310, narrow: 450, normal: 550, wide: 675, wider: 1400 }}>
    <div class="article-boundaries custom">
      <Section id="section-demo" width="narrower">narrower*</Section>
      <Section id="section-demo" width="narrow">narrow*</Section>
      <Section id="section-demo">normal*</Section>
      <Section id="section-demo" width="wide">wide*</Section>
      <Section id="section-demo" width="wider">wider*</Section>
      <Section id="section-demo" width="widest">widest</Section>
      <Section id="section-demo" width="fluid">fluid</Section>
    </div>
  </Article>
</Story>

<style lang="scss">
  :global {
    #article-story-basic,
    #article-column-widths-demo {
      width: calc(100% + 30px);
      margin-left: -15px;
    }
    #article-column-widths-demo {
      background-color: #ddd;
      position: relative;
      margin-bottom: 10px;
      
      .article-boundaries {
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: #bbb;
        &.custom {
          section {
            background: rgb(211, 132, 123);
          }
        }
      }

      section {
        height: 300px;
        background: #81a1c1;
        margin-bottom: 2px;
        height: 50px;
        padding-left: 3px;
        color: white;
        font-size: 12px;
      }
    }
  }

  div.demo-container {
    height: 300px;
    background: #ccc;
    position: relative;
    font-size: 12px;
    .background-label {
      position: absolute;
      bottom: 0;
      left: 5px;
    }
    .padding-label {
      position: absolute;
      top: 0;
      left: -15px;
      span {
        font-size: 18px;
      }
    }
  }
</style>