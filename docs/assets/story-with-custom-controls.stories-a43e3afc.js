import{M as p}from"./chunk-S4VUQJ4A-52f2cd1c.js";import{p as s,j as o}from"./jsx-runtime-6fa43933.js";import{u as a}from"./index-6236bb34.js";import"./iframe-33c7be2c.js";import"../sb-preview/runtime.js";import"./index-17bfd246.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-e04ae519.js";import"./index-356e4a49.js";function n(t){const e=Object.assign({p:"p",img:"img",h1:"h1",a:"a",code:"code",pre:"pre"},a(),t.components);return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Contributing/Recipes: Story with custom controls",parameters:{...s}}),`
`,o.jsx(e.p,{children:o.jsx(e.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,o.jsx(e.h1,{id:"recipes-story-with-custom-controls",children:"Recipes: Story with custom controls"}),`
`,o.jsxs(e.p,{children:["You can customise the controls in Storybook's built-in ",o.jsx(e.a,{href:"https://storybook.js.org/docs/svelte/essentials/controls",target:"_blank",rel:"nofollow noopener noreferrer",children:"controls panel"})," by passing ",o.jsx(e.a,{href:"https://storybook.js.org/docs/svelte/api/argtypes",target:"_blank",rel:"nofollow noopener noreferrer",children:"argTypes"})," to ",o.jsx(e.code,{children:"Meta"})," like this:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-svelte",children:`<!-- YourComponent.stories.svelte -->
<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  import YourComponent from './YourComponent.svelte';

  const meta = {
    argTypes: {
      // A colour picker for the component's "colour" prop
      colour: { control: 'color' },
      // A range picker for the "height" prop
      height: { control: { type: 'range', min: 5, max: 100, step: 5 } },
      // A custom dropdown for the "width" prop
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
      // Turn off control for the "data" prop
      data: { control: false },
    },
  };
<\/script>

<Meta title="Components/YourComponent" component="{YourComponent}" {...meta} />

<template let:args>
  <YourComponent {...args} />
</template>

<Story name="Default" />
`})}),`
`,o.jsxs(e.p,{children:["Read more about Storybook's custom controls options ",o.jsx(e.a,{href:"https://storybook.js.org/docs/svelte/essentials/controls",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]})]})}function c(t={}){const{wrapper:e}=Object.assign({},a(),t.components);return e?o.jsx(e,{...t,children:o.jsx(n,{...t})}):n(t)}const i=()=>{throw new Error("Docs-only story")};i.parameters={docsOnly:!0};const r={title:"Contributing/Recipes: Story with custom controls",parameters:{...s},tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:c};const b=["__page"];export{b as __namedExportsOrder,i as __page,r as default};
//# sourceMappingURL=story-with-custom-controls.stories-a43e3afc.js.map
