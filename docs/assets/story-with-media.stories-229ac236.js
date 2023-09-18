import{M as a}from"./chunk-S4VUQJ4A-d72e02b8.js";import{p as m,j as e}from"./jsx-runtime-bd78d6a8.js";import{u as i}from"./index-a0b8ebe1.js";import"./iframe-3c331062.js";import"../sb-preview/runtime.js";import"./index-a5f584f7.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-e04ae519.js";import"./index-356e4a49.js";function p(r={}){const{wrapper:n}=Object.assign({},i(),r.components);return n?e.jsx(n,{...r,children:e.jsx(s,{})}):s();function s(){const t=Object.assign({p:"p",img:"img",h1:"h1",code:"code",pre:"pre"},i(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Contributing/Recipes: Story with media",parameters:{...m}}),`
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
`})})]})}}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const o={title:"Contributing/Recipes: Story with media",parameters:{...m},tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:p};const w=["__page"];export{w as __namedExportsOrder,c as __page,o as default};
//# sourceMappingURL=story-with-media.stories-229ac236.js.map
