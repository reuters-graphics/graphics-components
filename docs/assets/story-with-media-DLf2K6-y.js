import{j as e,p as i}from"./docsPage-CrCNk6vV.js";import{useMDXComponents as r}from"./index-CswL0fy2.js";import{M as s}from"./index-BawdbxzO.js";import"./index-DwChlhAQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./iframe-BDmRycB9.js";import"../sb-preview/runtime.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function n(t){const o={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Contributing/Recipes: Story with media",parameters:{...i}}),`
`,e.jsx(o.p,{children:e.jsx(o.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(o.h1,{id:"recipes-story-with-media",children:"Recipes: Story with media"}),`
`,e.jsx(o.p,{children:"To use media files in your stories, import them directly."}),`
`,e.jsxs(o.p,{children:["First, add a media file in a ",e.jsx(o.code,{children:"stories"})," directory in your component folder like this:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`YourComponent/
  YourComponent.svelte
  YourComponent.stories.svelte
  stories/
    imgs/
      myImage.jpg
`})}),`
`,e.jsx(o.p,{children:"Now, import your media file directly in your code, which will resolve to the URL of the file."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-svelte",children:`<!-- YourComponent.stories.svelte -->
<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  import YourComponent from './YourComponent.svelte';

  // 🖼️ Import media you need in stories directly in code!
  import myImageSrc from './stories/imgs/myImage.jpg';
<\/script>

<Meta title="Components/YourComponent" component="{YourComponent}" />

<template let:args>
  <YourComponent {...args} />
</template>

<Story
  name="Basic"
  args="{{
    src: myImageSrc,
    altText: 'My image in the component',
  }}"
/>
`})})]})}function x(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{x as default};
