import{M as c}from"./chunk-PCJTTTQV-d59198dd.js";import{p as l,j as e}from"./jsx-runtime-539b76a3.js";import{u as t}from"./index-297ebefe.js";import"./iframe-3fdd9734.js";import"../sb-preview/runtime.js";import"./extends-b40c5bac.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-1a79a776.js";import"./index-356e4a49.js";function h(n={}){const{wrapper:d}=Object.assign({},t(),n.components);return d?e.jsx(d,{...n,children:e.jsx(i,{})}):i();function i(){const r=Object.assign({p:"p",img:"img",h1:"h1",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h2:"h2",em:"em"},t(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"SCSS/Spacers",parameters:{...l}}),`
`,e.jsx(r.p,{children:e.jsx(r.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(r.h1,{id:"spacers",children:"Spacers"}),`
`,e.jsx(r.p,{children:"You can control spacing — margin and padding — of your elements by adding one or more of our spacer classes."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<!-- Adds margin-top and padding -->
<div class="mt-2 p-2">
  <p>My spaced out content</p>
</div>
`})}),`
`,e.jsx(r.h3,{id:"levels",children:"Levels"}),`
`,e.jsxs(r.p,{children:["Spacer classes are specified with a level, from ",e.jsx(r.code,{children:"0"})," - ",e.jsx(r.code,{children:"6"}),", where ",e.jsx(r.code,{children:"0"})," is no spacing and ",e.jsx(r.code,{children:"6"})," is the largest amount of spacing."]}),`
`,e.jsx(r.h3,{id:"margin",children:"Margin"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Class"}),e.jsx(r.th,{children:"Property"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"m-{level}"})}),e.jsx(r.td,{children:"margin"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"mt-{level}"})}),e.jsx(r.td,{children:"margin-top"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"mr-{level}"})}),e.jsx(r.td,{children:"margin-right"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"mb-{level}"})}),e.jsx(r.td,{children:"margin-bottom"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"ml-{level}"})}),e.jsx(r.td,{children:"margin-left"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"mx-{level}"})}),e.jsx(r.td,{children:"margin-left/right"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"my-{level}"})}),e.jsx(r.td,{children:"margin-top/bottom"})]})]})]}),`
`,e.jsx(r.h3,{id:"padding",children:"Padding"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Class"}),e.jsx(r.th,{children:"Property"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"p-{level}"})}),e.jsx(r.td,{children:"padding"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"pt-{level}"})}),e.jsx(r.td,{children:"padding-top"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"pr-{level}"})}),e.jsx(r.td,{children:"padding-right"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"pb-{level}"})}),e.jsx(r.td,{children:"padding-bottom"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"pl-{level}"})}),e.jsx(r.td,{children:"padding-left"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"px-{level}"})}),e.jsx(r.td,{children:"padding-left/right"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"py-{level}"})}),e.jsx(r.td,{children:"padding-top/bottom"})]})]})]}),`
`,e.jsx(r.h2,{id:"customising-spacing-levels",children:"Customising spacing levels"}),`
`,e.jsx(r.p,{children:"You can customise the spacing levels in your project by defining the following SCSS variables, shown below with their default values:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`$margin-levels: (
  '0': 0,
  '1': 1rem,
  '2': 2rem,
  '3': 3rem,
  '4': 4rem,
  '5': 5rem,
  '6': 6rem
);

$padding-levels: (
  '0': 0,
  '1': 0.5rem,
  '2': 1rem,
  '3': 1.75rem,
  '4': 2.25rem,
  '5': 3rem,
  '6': 4rem
);
`})}),`
`,e.jsxs(r.p,{children:["Make sure you import or define these variables ",e.jsx(r.em,{children:"before"})," importing the style library."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`@import 'my-custom-variables'; // Where you overrided the spacer variables
@import '@reuters-graphics/graphics-components/dist/scss/main';
`})})]})}}const o=()=>{throw new Error("Docs-only story")};o.parameters={docsOnly:!0};const s={title:"SCSS/Spacers",parameters:{...l},tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:h};const S=["__page"];export{S as __namedExportsOrder,o as __page,s as default};
//# sourceMappingURL=spacers.stories-5fcd7792.js.map
