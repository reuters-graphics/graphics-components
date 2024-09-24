import{j as e,p as i}from"./docsPage-CrCNk6vV.js";import{useMDXComponents as n}from"./index-CswL0fy2.js";import{M as o}from"./index-B9I9zz1X.js";import"./index-DwChlhAQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./iframe-D4q2UGE4.js";import"../sb-preview/runtime.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function t(r){const s={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Actions/resizeObserver",parameters:{...i}}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(s.h1,{id:"resizeobserver",children:e.jsx(s.code,{children:"resizeObserver"})}),`
`,e.jsxs(s.p,{children:["An action you can use to easily to check when a DOM element's dimensions change using the ",e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver",rel:"nofollow",children:"Resize Observer API"}),". Use it like this:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-svelte",children:`<script>
  import { resizeObserver } from '@reuters-graphics/graphics-components';

  let elementWidth = 0;
<\/script>

<div use:resizeObserver="{(element) => (elementWidth = element.clientWidth)}">
  My width is: {elementWidth}
</div>
`})})]})}function j(r={}){const{wrapper:s}={...n(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(t,{...r})}):t(r)}export{j as default};
