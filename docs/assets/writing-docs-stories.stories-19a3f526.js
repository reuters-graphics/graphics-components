import{M as i}from"./chunk-S4VUQJ4A-55aee178.js";import{p as n,j as e}from"./jsx-runtime-c54f698e.js";import{u as a}from"./index-d5622d90.js";import"./iframe-0f78fe3d.js";import"../sb-preview/runtime.js";import"./index-10fc94a1.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-e04ae519.js";import"./index-356e4a49.js";function s(t){const o=Object.assign({p:"p",img:"img",h1:"h1",blockquote:"blockquote",em:"em",h3:"h3",code:"code",pre:"pre"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Contributing/Writing docs pages",parameters:{...n}}),`
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
`,e.jsx(o.p,{children:"From there, write whatever you need in markdown."})]})}function c(t={}){const{wrapper:o}=Object.assign({},a(),t.components);return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const r={title:"Contributing/Writing docs pages",parameters:{...n},tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:c};const f=["__page"];export{f as __namedExportsOrder,d as __page,r as default};
//# sourceMappingURL=writing-docs-stories.stories-19a3f526.js.map
