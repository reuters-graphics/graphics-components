import{j as o,p as n}from"./docsPage-CrCNk6vV.js";import{useMDXComponents as s}from"./index-CswL0fy2.js";import{M as i}from"./index-BuvbpKx8.js";import"./index-DwChlhAQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./iframe-CqubeUtq.js";import"../sb-preview/runtime.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function r(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{title:"Contributing/Writing stories",parameters:{...n}}),`
`,o.jsx(e.p,{children:o.jsx(e.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,o.jsx(e.h1,{id:"writing-component-stories",children:"Writing component stories"}),`
`,o.jsx(e.p,{children:'As well as writing your component, you should also document how to use it using Storybook "stories."'}),`
`,o.jsx(e.h2,{id:"whats-a-story",children:"What's a story?"}),`
`,o.jsxs(e.p,{children:["Paraphrasing ",o.jsx(e.a,{href:"https://storybook.js.org/docs/svelte/writing-stories/introduction",rel:"nofollow",children:"Storybook's definition"}),": A story captures the rendered state of a Svelte component, given certain props. Translation: It's a demo of what your component can do."]}),`
`,o.jsx(e.p,{children:'In Storybook, you create a story page for your component, which can itself contain several "stories" or demos of how your component works.'}),`
`,o.jsxs(e.p,{children:["To make a story page, you'll create a ",o.jsx(e.code,{children:"*.stories.svelte"})," file next to your component like this:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{children:`src/
  components/
    YourComponent/
      YourComponent.svelte
      YourComponent.stories.svelte
`})}),`
`,o.jsx(e.p,{children:"Your component's story page will then have at least one story that shows how it can be used."}),`
`,o.jsx(e.h2,{id:"how-do-i-write-stories",children:"How do I write stories?"}),`
`,o.jsx(e.p,{children:"Read through the recipes docs for some common examples of how you may want to write and customise your stories."}),`
`,o.jsx(e.p,{children:`If you're comparing the recipes to Storybook's own docs, note that all the examples use "Svelte Native" story format. (Storybook is technically a React-first tool that's been retrofit to also support a number of other frameworks, including Svelte.)`})]})}function x(t={}){const{wrapper:e}={...s(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(r,{...t})}):r(t)}const w=[];export{w as __namedExportsOrder,x as default};
