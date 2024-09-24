import{j as e,p as n}from"./docsPage-CrCNk6vV.js";import{useMDXComponents as i}from"./index-CswL0fy2.js";import{M as r}from"./index-B9I9zz1X.js";import"./index-DwChlhAQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./iframe-D4q2UGE4.js";import"../sb-preview/runtime.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function t(o){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Guides/Using with the Graphics Kit",parameters:{...n}}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(s.h1,{id:"using-with-the-graphics-kit",children:"Using with the Graphics Kit"}),`
`,e.jsxs(s.p,{children:["If you haven't, check out ",e.jsx(s.a,{href:"https://reuters-graphics.github.io/docs_graphics-kit/for_developers/graphics-components/",rel:"nofollow",children:'"Using Reuters Graphics Components" in the Graphics Kit docs'})," to get a general idea of how to use components."]}),`
`,e.jsx(s.h2,{id:"quickit",children:"Quickit"}),`
`,e.jsxs(s.p,{children:["Look ",e.jsxs("span",{className:"highlight",children:["for ",e.jsx("strong",{children:"🚀 QUICKIT"})," stories"]}),` (Quick Kit 🤣🙄) for some of our most commonly used components. These stories
include easy copy/paste snippets as well as Google Doc block examples that should
shortcut getting a component working in the Graphics Kit.`]}),`
`,e.jsxs(s.p,{children:["(Want a QUICKIT story for another component? ",e.jsx(s.a,{href:"https://github.com/reuters-graphics/graphics-components/issues/new?labels=%F0%9F%93%9A%20documentation&assignees=hobbes7878",rel:"nofollow",children:"Just ask us!"}),")"]}),`
`,e.jsx(s.h2,{id:"faqs",children:"FAQs"}),`
`,e.jsx(s.h3,{id:"how-do-i-write-my-google-doc",children:"How do I write my Google Doc?"}),`
`,e.jsx(s.p,{children:"Many component stories show passing data directly into component props. In the Kit, though, you likely won't be hard-coding things like text strings in your code and instead will get them from a Google Doc."}),`
`,e.jsxs(s.p,{children:["Check out the guide devoted to ",e.jsx(s.a,{href:"?path=/docs/guides-using-with-google-docs--page",children:"using components with Google Docs"})," for a quick explanation of how to work with Google Docs."]}),`
`,e.jsx(s.p,{children:"And, of course, look for a QUICKIT story for your component, which will have a Docs example specific to it."}),`
`,e.jsx(s.h3,{id:"how-do-i-use-this-imagevideoetc",children:"How do I use this image/video/etc.?"}),`
`,e.jsxs(s.p,{children:["Remember, all references to images, videos and other media must be ",e.jsx(s.em,{children:"absolute paths"}),":"]}),`
`,e.jsxs(s.p,{children:["✅ ",e.jsx(s.code,{children:"https://.../myImage.jpg"})]}),`
`,e.jsxs(s.p,{children:["❌ ",e.jsx(s.code,{children:"./myImage.jpg"})]}),`
`,e.jsxs(s.p,{children:["In most cases, that means you'll need to prefix relative paths with the special ",e.jsx(s.code,{children:"assets"})," Svelte module. Many examples in these docs show how to do it. But it's also easy enough to demo again here!"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-svelte",children:`<script>
  import { FeaturePhoto } from '@reuters-graphics/graphics-components';

  // This is already imported for you in App.svelte
  import { assets } from '$app/paths';
<\/script>

<FeautrePhoto src="{\`\${assets}/imgs/myImage.jpg\`}" />
`})}),`
`,e.jsx(s.h3,{id:"how-do-i-change-this-components-styles",children:"How do I change this component's styles?"}),`
`,e.jsxs(s.p,{children:["Check out our guide on ",e.jsx(s.a,{href:"?path=/docs/guides-customising-components-with-scss--page",children:"customising components with SCSS"})]})]})}function j(o={}){const{wrapper:s}={...i(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(t,{...o})}):t(o)}export{j as default};
