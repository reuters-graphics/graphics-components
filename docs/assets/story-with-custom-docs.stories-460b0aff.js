import{M as c}from"./chunk-S4VUQJ4A-378d8a9c.js";import{p as r,j as o}from"./jsx-runtime-2be80fe9.js";import{u as i}from"./index-69d17e2c.js";import"./iframe-44d029ec.js";import"../sb-preview/runtime.js";import"./index-963a1855.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-e04ae519.js";import"./index-356e4a49.js";const a=""+new URL("source-code-6f5764e6.png",import.meta.url).href;function s(n){const e=Object.assign({p:"p",img:"img",h1:"h1",code:"code",pre:"pre",h2:"h2",blockquote:"blockquote",strong:"strong",a:"a"},i(),n.components);return o.jsxs(o.Fragment,{children:[o.jsx(c,{title:"Contributing/Recipes: Story with custom docs",parameters:{...r}}),`
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
`,o.jsx("img",{className:"feature",src:a,width:"80%"}),`
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
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Pro tip:"})," If you pass your source code in directly, the code won't change prop values when users play with Storybook's built-in ",o.jsx(e.a,{href:"https://storybook.js.org/docs/svelte/essentials/controls",target:"_blank",rel:"nofollow noopener noreferrer",children:"controls panel"}),", so it's best to start with a default example using the generated source code."]}),`
`]}),`
`,o.jsxs(e.p,{children:["If you're adding source code AND custom docs to a story, you can chain ",o.jsx(e.code,{children:"withSource"})," and ",o.jsx(e.code,{children:"withComponentDocs"})," like this:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-svelte",children:`<!-- ... -->

<Story
  name="Extra wide"
  args="{{ width: 'wider' }}"
  {...withComponentDocs(componentDocs, withSource({ svelte: defaultSnippet }))}
/>
`})})]})}function m(n={}){const{wrapper:e}=Object.assign({},i(),n.components);return e?o.jsx(e,{...n,children:o.jsx(s,{...n})}):s(n)}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const t={title:"Contributing/Recipes: Story with custom docs",parameters:{...r},tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:m};const C=["__page"];export{C as __namedExportsOrder,p as __page,t as default};
//# sourceMappingURL=story-with-custom-docs.stories-460b0aff.js.map
