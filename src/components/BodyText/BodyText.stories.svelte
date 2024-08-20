<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import BodyText from './BodyText.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';
</script>

<Meta
  title="Components/BodyText"
  component="{BodyText}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <BodyText {...args} />
</Template>

<Story
  name="Default"
  args="{{
    text: `Bacon ipsum **dolor amet** cow tongue tri-tip.
  
  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.

  - Steak
  - [Pork chop](https://www.google.com)
  - Fillet
  
  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.`,
  }}"
/>

<Story
  name="Typography sample"
  args="{{
    class: 'body-text-typography-example-story',
    text: `<span class='drop-cap'>R</span>eprehenderit hamburger pork bresaola, dolore chuck sirloin landjaeger ham hock [tempor meatball](https://baconipsum.com/) alcatra nostrud pork belly. Culpa pork belly doner ea jowl, elit deserunt leberkas cow shoulder ham hock dolore.

## Biltong turducken ground round kevin

Pig est irure buffalo ullamco. Sunt beef ribs tri-tip, chislic officia sint dolor. Spare ribs drumstick ground round, irure duis cillum id chicken est ipsum ut. 

Qui cupidatat chislic buffalo consequat deserunt. 

Andouille sint shankle quis velit nostrud chislic meatloaf culpa labore corned beef chuck spare ribs. Filet mignon eu shankle in, meatloaf ut dolor ham hock ut.

### Venison shoulder ham hock ham leberkas flank beef ribs fatback, jerky meatball ham hock
  
Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig. Veniam laboris sunt chislic. Aute doner porchetta nulla, tongue venison ad ex in do.

- Steak
    - Capicola 
- [Pork chop](https://www.google.com)
- Fillet landjaeger commodo

Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.

Minim id buffalo dolore ad, **boudin chicken laboris** excepteur qui eiusmod. 

#### Jerky prosciutto burgdoggen

Sirloin beef flank labore cillum venison pariatur cow nulla ut irure in consequat proident velit. Jerky meatball pig nulla irure laboris fatback et rump ut dolore.

Biltong enim consequat pork chop, flank ea.

> Officia ball tip sed tenderloin dolore. Est magna enim, turkey in turducken flank jowl ad lorem buffalo ground
> > Ronald McDonald

Flank bacon sint dolore porchetta strip steak. Tail capicola flank nostrud meatball consequat pastrami lorem cupidatat chuck drumstick ham hock bresaola sint.

##### Venison pork chop

Alcatra bacon mollit boudin. Capicola ut tongue biltong, cow cillum pariatur sausage.

1. Minim ribeye
2. Prosciutto laborum
3. Salami doner irure

Consectetur ribeye consequat pork capicola. T-bone ad laborum beef ribs picanha.

###### Alcatra bacon mollit boudin

Tempor tail doner chicken incididunt beef ribs. Ad ullamco in cupim venison. Leberkas rump ullamco adipisicing, laboris excepteur voluptate.

Ham hock id porchetta elit. Sint spare ribs aute buffalo.

<p class='body-correction'>Correction: Lorem ispsum dolor sit amet ameno dorime.</p>
`,
  }}"
/>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss" global>
  @mixin heading-tag {
    position: absolute;
    top: 0;
    left: -50px;
    text-align: right;
    display: block;
    width: 40px;
    color: #ddd;
    padding: 2px 5px;
    border-radius: 4px;
    font-weight: 800;
    line-height: 1;
    &:hover {
      color: #999;
    }
    @media (max-width: 800px) {
      color: white !important;
    }
  }
  .body-text-typography-example-story {
    h2 {
      position: relative;
      &:before {
        content: 'H2';
        @include heading-tag;
        font-size: 22px;
      }
    }
    h3 {
      position: relative;
      &:before {
        content: 'H3';
        @include heading-tag;
        font-size: 19px;
      }
    }
    h4 {
      position: relative;
      &:before {
        content: 'H4';
        @include heading-tag;
        font-size: 16px;
      }
    }
    h5 {
      position: relative;
      &:before {
        content: 'H5';
        @include heading-tag;
        font-size: 15px;
      }
    }
    h6 {
      position: relative;
      &:before {
        content: 'H6';
        @include heading-tag;
        font-size: 12px;
      }
    }
    blockquote {
      position: relative;
      &:before {
        @include heading-tag;
        content: '“';
        font-size: 3rem;
        line-height: 3rem;
      }
      blockquote:before {
        display: none;
      }
    }
  }
</style>
