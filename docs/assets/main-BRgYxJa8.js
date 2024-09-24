import{j as e,p as i}from"./docsPage-CrCNk6vV.js";import{useMDXComponents as n}from"./index-CswL0fy2.js";import{M as l}from"./index-BSnnmD0I.js";import{C as t}from"./Table-pFv7YcPp.js";import{s as a}from"./parseCss-C67HUs31.js";import"./index-DwChlhAQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./iframe-BssUzINi.js";import"../sb-preview/runtime.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./index-CROxjmim.js";import"./toString-DnxJX3Gz.js";import"./isSymbol-Br3Fhm6g.js";const c=`// SCSS mirrors for theme CSS variables
$theme-colour-background: var(--theme-colour-background);
$theme-colour-text-primary: var(--theme-colour-text-primary);
$theme-colour-text-secondary: var(--theme-colour-text-secondary);
$theme-colour-accent: var(--theme-colour-accent);
$theme-colour-brand-logo: var(--theme-colour-brand-logo);
$theme-colour-brand-rules: var(--theme-colour-brand-rules);
$theme-colour-brand-shadow: var(--theme-colour-brand-shadow);
`,m=`// SCSS mirrors for default block widths
$column-width-narrower: 330px !default;
$column-width-narrow: 510px !default;
$column-width-normal: 660px !default;
$column-width-wide: 930px !default;
$column-width-wider: 1200px !default;
`;function s(o){const r={code:"code",h1:"h1",img:"img",p:"p",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Styles/Tokens/SCSS Variables",parameters:{...i}}),`
`,e.jsx(r.p,{children:e.jsx(r.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(r.h1,{id:"token-variables",children:"Token variables"}),`
`,e.jsxs(r.p,{children:["These are SCSS mirrors of some of the default CSS variables used in the ",e.jsx(r.code,{children:"Theme"}),". Use them in places where CSS variables cannot be used. e.g. You can write ",e.jsx(r.code,{children:"media-queries"})," to target the block widths using the ",e.jsx(r.code,{children:"block"})," vars, which is not possible using CSS variables."]}),`
`,e.jsx(t,{title:"Theme",header:["Variable","Properties"],body:a(c),copyable:[!0,!1]}),`
`,e.jsx(t,{title:"Block",header:["Variable","Properties"],body:a(m),copyable:[!0,!1]})]})}function k(o={}){const{wrapper:r}={...n(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(s,{...o})}):s(o)}export{k as default};
