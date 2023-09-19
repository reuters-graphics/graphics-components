import{M as c}from"./chunk-S4VUQJ4A-79fea7c5.js";import{p as a,j as e}from"./jsx-runtime-fcf8cdde.js";import{u as i}from"./index-2350147b.js";import"./iframe-2954aaea.js";import"../sb-preview/runtime.js";import"./index-4b4bf420.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-e04ae519.js";import"./index-356e4a49.js";function p(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,{...t,children:e.jsx(o,{})}):o();function o(){const r=Object.assign({p:"p",img:"img",h1:"h1",code:"code",a:"a",pre:"pre"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Actions/resizeObserver",parameters:{...a}}),`
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
`})})]})}}const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const s={title:"Actions/resizeObserver",parameters:{...a},tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:p};const _=["__page"];export{_ as __namedExportsOrder,m as __page,s as default};
//# sourceMappingURL=resizeObserver.stories-ea76d458.js.map
