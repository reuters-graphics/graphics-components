import{M as m}from"./chunk-S4VUQJ4A-89907381.js";import{p as s,j as e}from"./jsx-runtime-f67a1dbf.js";import{u as i}from"./index-97648d8f.js";import"./iframe-0b438e8e.js";import"../sb-preview/runtime.js";import"./index-54730943.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-e04ae519.js";import"./index-356e4a49.js";function n(o){const t=Object.assign({p:"p",img:"img",h1:"h1",code:"code",pre:"pre"},i(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Contributing/Recipes: Story with media",parameters:{...s}}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(t.h1,{id:"recipes-story-with-media",children:"Recipes: Story with media"}),`
`,e.jsx(t.p,{children:"To use media files in your stories, import them directly."}),`
`,e.jsxs(t.p,{children:["First, add a media file in a ",e.jsx(t.code,{children:"stories"})," directory in your component folder like this:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`YourComponent/
  YourComponent.svelte
  YourComponent.stories.svelte
  stories/
    imgs/
      myImage.jpg
`})}),`
`,e.jsx(t.p,{children:"Now, import your media file directly in your code, which will resolve to the URL of the file."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-svelte",children:`<!-- YourComponent.stories.svelte -->
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
`})})]})}function a(o={}){const{wrapper:t}=Object.assign({},i(),o.components);return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const r={title:"Contributing/Recipes: Story with media",parameters:{...s},tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:a};const C=["__page"];export{C as __namedExportsOrder,p as __page,r as default};
//# sourceMappingURL=story-with-media.stories-108d5c18.js.map
