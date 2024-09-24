import{j as e,p as o}from"./docsPage-CrCNk6vV.js";import{useMDXComponents as r}from"./index-CswL0fy2.js";import{M as a}from"./index-BSnnmD0I.js";import"./index-DwChlhAQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./iframe-BssUzINi.js";import"../sb-preview/runtime.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function n(s){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Actions/cssVariables",parameters:{...o}}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(t.h1,{id:"cssvariables",children:e.jsx(t.code,{children:"cssVariables"})}),`
`,e.jsxs(t.p,{children:["An action you can use to easily set ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"CSS variables"})," on HTML elements. Useful for passing JavaScript values to your component SCSS like this:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-svelte",children:`<script>
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
`})})]})}function v(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{v as default};
