import{M as i}from"./chunk-S4VUQJ4A-6012e64b.js";import{p as o,j as e}from"./jsx-runtime-bcef64ff.js";import{u as a}from"./index-f12770ea.js";import"./iframe-8b410132.js";import"../sb-preview/runtime.js";import"./index-20ac22d7.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-e04ae519.js";import"./index-356e4a49.js";function n(t){const s=Object.assign({p:"p",img:"img",h1:"h1",code:"code",a:"a",pre:"pre"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Actions/cssVariables",parameters:{...o}}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(s.h1,{id:"cssvariables",children:e.jsx(s.code,{children:"cssVariables"})}),`
`,e.jsxs(s.p,{children:["An action you can use to easily set ",e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",rel:"nofollow noopener noreferrer",children:"CSS variables"})," on HTML elements. Useful for passing JavaScript values to your component SCSS like this:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-svelte",children:`<script>
  import { cssVariables } from '@reuters-graphics/graphics-components';

  export let height = 300;
  export let textColour = 'red';

  // Create an object of variable names and CSS values...
  $: variables = {
    height: height + 'px',
    textColour: textColour,
  };
<\/script>

<!-- Attach it to a parent element with the action -->
<div use:cssVariables="{variables}">
  <p>My text...</p>
</div>

<style lang="scss">
  /**
   * Now use your variables in your SCSS!
   */
  div {
    height: var(--height);
    p {
      color: var(--textColour);
    }
  }
</style>
`})})]})}function c(t={}){const{wrapper:s}=Object.assign({},a(),t.components);return s?e.jsx(s,{...t,children:e.jsx(n,{...t})}):n(t)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const r={title:"Actions/cssVariables",parameters:{...o},tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:c};const b=["__page"];export{b as __namedExportsOrder,l as __page,r as default};
//# sourceMappingURL=cssVariables.stories-b8b796cd.js.map
