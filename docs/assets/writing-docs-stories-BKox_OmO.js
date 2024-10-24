import{j as e,p as n}from"./docsPage-CrCNk6vV.js";import{useMDXComponents as s}from"./index-CswL0fy2.js";import{M as i}from"./index-D0unROMo.js";import"./index-DwChlhAQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./iframe-D8iLOA0Z.js";import"../sb-preview/runtime.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function r(t){const o={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Contributing/Writing docs pages",parameters:{...n}}),`
`,e.jsx(o.p,{children:e.jsx(o.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(o.h1,{id:"writing-docs-only-pages",children:"Writing docs-only pages"}),`
`,e.jsx(o.p,{children:"You can write docs-only pages in simple markdown using MDX format."}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["MDX is ",e.jsx(o.em,{children:"technically"})," a mixture of markdown and React. Unforuntately, there isn't a native Svelte option for markdown pages in Storybook yet. Good news, though, you won't ",e.jsx(o.em,{children:"really"})," need to know React to use it. Just write in markdown and follow the template below for the React bits you'll need."]}),`
`]}),`
`,e.jsx(o.h3,{id:"quickstart",children:"Quickstart"}),`
`,e.jsxs(o.p,{children:["Make a new ",e.jsx(o.code,{children:".stories.mdx"})," file for your docs page in the ",e.jsx(o.code,{children:"src/docs/"})," directory."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`src/
  docs/
    my-docs.stories.mdx
`})}),`
`,e.jsxs(o.p,{children:["Add the following at the top of the file and customise the ",e.jsx(o.code,{children:"title"})," property in the ",e.jsx(o.code,{children:"Meta"})," component for where you want the page to live in the Storybook nav."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-markdown",children:`import { Meta } from '@storybook/addon-docs';
import { parameters } from '$docs/utils/docsPage.js';

<Meta title="SCSS/Special rules" parameters={{ ...parameters }} />

![](https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg)

# My docs page

Your docs TK...
`})}),`
`,e.jsx(o.p,{children:"From there, write whatever you need in markdown."})]})}function j(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}const y=[];export{y as __namedExportsOrder,j as default};
