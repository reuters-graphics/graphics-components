import{M as c}from"./chunk-PCJTTTQV-d59198dd.js";import{p,j as o}from"./jsx-runtime-539b76a3.js";import{u as a}from"./index-297ebefe.js";import"./iframe-3fdd9734.js";import"../sb-preview/runtime.js";import"./extends-b40c5bac.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-1a79a776.js";import"./index-356e4a49.js";function i(r={}){const{wrapper:n}=Object.assign({},a(),r.components);return n?o.jsx(n,{...r,children:o.jsx(s,{})}):s();function s(){const e=Object.assign({p:"p",img:"img",h1:"h1",a:"a",code:"code",pre:"pre"},a(),r.components);return o.jsxs(o.Fragment,{children:[o.jsx(c,{title:"Contributing/Recipes: Story with custom controls",parameters:{...p}}),`
`,o.jsx(e.p,{children:o.jsx(e.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,o.jsx(e.h1,{id:"recipes-story-with-custom-controls",children:"Recipes: Story with custom controls"}),`
`,o.jsxs(e.p,{children:["You can customise the controls in Storybook's built-in ",o.jsx(e.a,{href:"https://storybook.js.org/docs/svelte/essentials/controls",target:"_blank",rel:"nofollow noopener noreferrer",children:"controls panel"})," by passing ",o.jsx(e.a,{href:"https://storybook.js.org/docs/svelte/api/argtypes",target:"_blank",rel:"nofollow noopener noreferrer",children:"argTypes"})," to ",o.jsx(e.code,{children:"Meta"})," like this:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-html",children:`<!-- YourComponent.stories.svelte -->
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

<Meta title="Components/YourComponent" component="{YourComponent}" {...meta}></Meta>

<template let:args>
  <YourComponent {...args} />
</template>

<Story name="Default" />
`})}),`
`,o.jsxs(e.p,{children:["Read more about Storybook's custom controls options ",o.jsx(e.a,{href:"https://storybook.js.org/docs/svelte/essentials/controls",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]})]})}}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const t={title:"Contributing/Recipes: Story with custom controls",parameters:{...p},tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:i};const k=["__page"];export{k as __namedExportsOrder,l as __page,t as default};
//# sourceMappingURL=story-with-custom-controls.stories-9e475e9f.js.map
