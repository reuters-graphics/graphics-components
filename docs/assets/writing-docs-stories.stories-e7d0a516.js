import{M as c}from"./chunk-S4VUQJ4A-e28ba61d.js";import{p as i,j as e}from"./jsx-runtime-e5ded09f.js";import{u as a}from"./index-1b3300bb.js";import"./iframe-ce5c677d.js";import"../sb-preview/runtime.js";import"./index-19de6b4c.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-e04ae519.js";import"./index-356e4a49.js";function d(r={}){const{wrapper:s}=Object.assign({},a(),r.components);return s?e.jsx(s,{...r,children:e.jsx(n,{})}):n();function n(){const o=Object.assign({p:"p",img:"img",h1:"h1",blockquote:"blockquote",em:"em",h3:"h3",code:"code",pre:"pre"},a(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Contributing/Writing docs pages",parameters:{...i}}),`
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
`,e.jsx(o.p,{children:"From there, write whatever you need in markdown."})]})}}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const t={title:"Contributing/Writing docs pages",parameters:{...i},tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:d};const k=["__page"];export{k as __namedExportsOrder,p as __page,t as default};
//# sourceMappingURL=writing-docs-stories.stories-e7d0a516.js.map
