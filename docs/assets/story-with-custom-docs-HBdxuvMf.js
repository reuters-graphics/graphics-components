import{j as o,p as r}from"./docsPage-CrCNk6vV.js";import{useMDXComponents as s}from"./index-CswL0fy2.js";import{M as i}from"./index-BawdbxzO.js";import"./index-DwChlhAQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./iframe-BDmRycB9.js";import"../sb-preview/runtime.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";const c=""+new URL("source-code-C338ht8X.png",import.meta.url).href;function t(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...s(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{title:"Contributing/Recipes: Story with custom docs",parameters:{...r}}),`
`,o.jsx(e.p,{children:o.jsx(e.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,o.jsx(e.h1,{id:"recipes-story-with-custom-docs",children:"Recipes: Story with custom docs"}),`
`,o.jsx(e.p,{children:"You can add custom markdown to your story page by importing and using markdown files."}),`
`,o.jsxs(e.p,{children:["First, create a markdown file in a ",o.jsx(e.code,{children:"stories"})," directory in your component folder like this:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{children:`YourComponent/
  YourComponent.svelte
  YourComponent.stories.svelte
  stories/
    docs/
      component.md
      someStory.md
`})}),`
`,o.jsxs(e.p,{children:["Now, import your markdown file in your story page component and attach it to either the ",o.jsx(e.code,{children:"Meta"})," (for the top docs that introduce your component) or any individual ",o.jsx(e.code,{children:"Story"})," using one of our handy docs utils."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-svelte",children:`<!-- YourComponent.stories.svelte -->
<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  import YourComponent from './YourComponent.svelte';

  // Import markdown files.
  // Note: the "?raw" in the imports below is important!!
  import componentDocs from './stories/docs/component.md?raw';
  import someStoryDocs from './stories/docs/someStory.md?raw';

  import { withComponentDocs, withStoryDocs } from '$docs/utils/withParams';

  const meta = {
    ...withComponentDocs(componentDocs),
  };
<\/script>

<Meta title="Components/YourComponent" component="{YourComponent}" {...meta} />

<template let:args>
  <YourComponent {...args} />
</template>

<!-- The first story will use the component docs in Meta... -->
<Story name="Basic" args="{{ width: 'normal' }}" />

<!-- Additional stories can use other docs now. -->
<Story
  name="Another story"
  args="{{ width: 'normal' }}"
  {...withStoryDocs(someStoryDocs)}
/>
`})}),`
`,o.jsx(e.h2,{id:"customising-copyable-source-code",children:"Customising copyable source code"}),`
`,o.jsx(e.p,{children:`If you need to, you can customise the "Copy" source code available below a component story's iframe window.`}),`
`,o.jsx("img",{className:"feature",src:c,width:"80%"}),`
`,o.jsxs(e.p,{children:["First, add a snippet file in a ",o.jsx(e.code,{children:"stories"})," directory in your component folder like this:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{children:`YourComponent/
  YourComponent.svelte
  YourComponent.stories.svelte
  stories/
    snippets/
      default.svelte
`})}),`
`,o.jsxs(e.p,{children:["Now, import your snippet file in your story page component and attach it to any individual ",o.jsx(e.code,{children:"Story"})," using our docs utils."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-svelte",children:`<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  import YourComponent from './YourComponent.svelte';

  // Import snippet file.
  // Note: the "?raw" in the import below is important!!
  import defaultSource from './stories/snippets/default.svelte?raw';

  import { withSource } from '$docs/utils/withParams';

  const meta = {
    title: 'Components/YourComponent',
    component: YourComponent,
  };
<\/script>

<meta {...meta} />

<template let:args>
  <YourComponent {...args} />
</template>

<!-- Pass source in inside an object keyed by your snippet's language, e.g., svelte, scss, etc. -->
<Story
  name="Basic"
  args="{{ width: 'normal' }}"
  {...withSource({ svelte: defaultSnippet })}
/>
`})}),`
`,o.jsxs(e.blockquote,{children:[`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Pro tip:"})," If you pass your source code in directly, the code won't change prop values when users play with Storybook's built-in ",o.jsx(e.a,{href:"https://storybook.js.org/docs/svelte/essentials/controls",rel:"nofollow",children:"controls panel"}),", so it's best to start with a default example using the generated source code."]}),`
`]}),`
`,o.jsxs(e.p,{children:["If you're adding source code AND custom docs to a story, you can chain ",o.jsx(e.code,{children:"withSource"})," and ",o.jsx(e.code,{children:"withComponentDocs"})," like this:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-svelte",children:`<!-- ... -->

<Story
  name="Extra wide"
  args="{{ width: 'wider' }}"
  {...withComponentDocs(componentDocs, withSource({ svelte: defaultSnippet }))}
/>
`})})]})}function f(n={}){const{wrapper:e}={...s(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(t,{...n})}):t(n)}export{f as default};
