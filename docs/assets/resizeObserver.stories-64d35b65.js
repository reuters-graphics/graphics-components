import{M as a}from"./chunk-S4VUQJ4A-6012e64b.js";import{p as o,j as e}from"./jsx-runtime-bcef64ff.js";import{u as i}from"./index-f12770ea.js";import"./iframe-8b410132.js";import"../sb-preview/runtime.js";import"./index-20ac22d7.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-e04ae519.js";import"./index-356e4a49.js";function n(s){const r=Object.assign({p:"p",img:"img",h1:"h1",code:"code",a:"a",pre:"pre"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Actions/resizeObserver",parameters:{...o}}),`
`,e.jsx(r.p,{children:e.jsx(r.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(r.h1,{id:"resizeobserver",children:e.jsx(r.code,{children:"resizeObserver"})}),`
`,e.jsxs(r.p,{children:["An action you can use to easily to check when a DOM element's dimensions change using the ",e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver",target:"_blank",rel:"nofollow noopener noreferrer",children:"Resize Observer API"}),". Use it like this:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-svelte",children:`<script>
  import { resizeObserver } from '@reuters-graphics/graphics-components';

  let elementWidth = 0;
<\/script>

<div use:resizeObserver="{(element) => (elementWidth = element.clientWidth)}">
  My width is: {elementWidth}
</div>
`})})]})}function c(s={}){const{wrapper:r}=Object.assign({},i(),s.components);return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const t={title:"Actions/resizeObserver",parameters:{...o},tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:c};const O=["__page"];export{O as __namedExportsOrder,m as __page,t as default};
//# sourceMappingURL=resizeObserver.stories-64d35b65.js.map
