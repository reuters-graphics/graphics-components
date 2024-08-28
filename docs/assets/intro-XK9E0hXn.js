import{j as e,p as n}from"./docsPage-CrCNk6vV.js";import{useMDXComponents as t}from"./index-CswL0fy2.js";import{M as a}from"./index-CluuxvkZ.js";import"./index-DwChlhAQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./iframe-SAeDpW7h.js";import"../sb-preview/runtime.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function s(r){const o={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Styles/Colours/Intro",parameters:{...n}}),`
`,e.jsx(o.p,{children:e.jsx(o.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(o.h1,{id:"working-with-colours",children:"Working with colours"}),`
`,e.jsxs(o.p,{children:["Colour palettes are provided as ",e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*",rel:"nofollow",children:"CSS variables"})," you can use in your own styles. Some are included by default, others can be imported in your global stylesheet and then used."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-scss",children:`/* global.scss */
@import '@reuters-graphics/graphics-components/scss/colours/primary/blue';

p {
  color: var(--grey-400); // Included by default
}

p.blue-bg {
  color: white;
  background-colour: var(--blue-600); // Imported palette
}
`})})]})}function j(r={}){const{wrapper:o}={...t(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(s,{...r})}):s(r)}export{j as default};
