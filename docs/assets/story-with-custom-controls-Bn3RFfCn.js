import{j as o,p as s}from"./docsPage-CrCNk6vV.js";import{useMDXComponents as r}from"./index-CswL0fy2.js";import{M as i}from"./index-BawdbxzO.js";import"./index-DwChlhAQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./iframe-BDmRycB9.js";import"../sb-preview/runtime.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function n(e){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{title:"Contributing/Recipes: Story with custom controls",parameters:{...s}}),`
`,o.jsx(t.p,{children:o.jsx(t.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,o.jsx(t.h1,{id:"recipes-story-with-custom-controls",children:"Recipes: Story with custom controls"}),`
`,o.jsxs(t.p,{children:["You can customise the controls in Storybook's built-in ",o.jsx(t.a,{href:"https://storybook.js.org/docs/svelte/essentials/controls",rel:"nofollow",children:"controls panel"})," by passing ",o.jsx(t.a,{href:"https://storybook.js.org/docs/svelte/api/argtypes",rel:"nofollow",children:"argTypes"})," to ",o.jsx(t.code,{children:"Meta"})," like this:"]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-svelte",children:`<!-- YourComponent.stories.svelte -->
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
`,o.jsxs(t.p,{children:["Read more about Storybook's custom controls options ",o.jsx(t.a,{href:"https://storybook.js.org/docs/svelte/essentials/controls",rel:"nofollow",children:"here"}),"."]})]})}function j(e={}){const{wrapper:t}={...r(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(n,{...e})}):n(e)}export{j as default};
