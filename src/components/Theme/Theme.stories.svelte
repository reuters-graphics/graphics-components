<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import Theme, { themes } from './Theme.svelte';

  import {
    withComponentDocs
  } from '$lib/docs/utils/withParams.js';

  const meta = {
    title: 'Components/Theme',
    component: Theme,
    ...withComponentDocs(componentDocs),
    argTypes: {
      styles: {
        options: Object.keys(themes), // An array of serializable values
        mapping: themes, // Maps serializable option values to complex arg values
        control: {
          type: 'select', // Type 'select' is automatically inferred when 'options' is defined
          labels: {
          // 'labels' maps option values to string labels
            main: 'Main',
            dark: 'Dark',
          },
        },
      },
    },
  };
</script>

<Meta {...meta} />

<Template let:args>
  <Theme {...args}>
    <div class="themed">
      <p>My theme</p>
    </div>
  </Theme>
</Template>

<Story
  name="Default"
  args={{
    styles: themes.main,
  }}
/>

<Story
  name="Inheritance"
  args={{
    styles: themes.main,
  }}
>
  <Theme styles={themes.main}>
    <div class="themed">
      <p>My theme</p>
      <Theme styles={themes.dark}>
        <div class="themed">
          <p>My sub-theme</p>
          <Theme styles={themes.main}>
            <div class="themed">
              <p>My sub-sub-theme</p>
            </div>
          </Theme>
          <Theme styles={{ colour: { background: 'steelblue', primary: '#fff' } }}>
            <div class="themed">
              <p>My other sub-sub-theme</p>
            </div>
          </Theme>
        </div>
      </Theme>
    </div>
  </Theme>
</Story>

<style lang="scss">
  @import "../../scss/mixins/fonts";
  div.themed {
    background-color: var(--theme-colour-background);
    padding: 2rem;
    width: 80%;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    flex-flow: column;
    border: 1px solid var(--theme-colour-primary);
    border-radius: 20px;
    p {
      @include font-display;
      color: var(--theme-colour-primary);
      text-align: center;
      margin: 0;
      display: block;
      width: 100%;
    }
  }
</style>