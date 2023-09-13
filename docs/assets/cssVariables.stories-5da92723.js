import{M as c}from"./chunk-S4VUQJ4A-4d548a79.js";import{p as i,j as e}from"./jsx-runtime-680b57ea.js";import{u as a}from"./index-152d1357.js";import"./iframe-aeab9326.js";import"../sb-preview/runtime.js";import"./index-3c9dd3a8.js";import"./_commonjsHelpers-de833af9.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-e04ae519.js";import"./index-356e4a49.js";function p(r={}){const{wrapper:o}=Object.assign({},a(),r.components);return o?e.jsx(o,{...r,children:e.jsx(n,{})}):n();function n(){const s=Object.assign({p:"p",img:"img",h1:"h1",code:"code",a:"a",pre:"pre"},a(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Actions/cssVariables",parameters:{...i}}),`
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
`})})]})}}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const t={title:"Actions/cssVariables",parameters:{...i},tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:p};const _=["__page"];export{_ as __namedExportsOrder,l as __page,t as default};
//# sourceMappingURL=cssVariables.stories-5da92723.js.map