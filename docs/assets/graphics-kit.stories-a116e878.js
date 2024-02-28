import{M as a}from"./chunk-S4VUQJ4A-52f2cd1c.js";import{p as i,j as e}from"./jsx-runtime-6fa43933.js";import{u as r}from"./index-6236bb34.js";import"./iframe-33c7be2c.js";import"../sb-preview/runtime.js";import"./index-17bfd246.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-e04ae519.js";import"./index-356e4a49.js";function n(o){const s=Object.assign({p:"p",img:"img",h1:"h1",a:"a",h2:"h2",h3:"h3",em:"em",code:"code",pre:"pre"},r(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Guides/Using with the Graphics Kit",parameters:{...i}}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(s.h1,{id:"using-with-the-graphics-kit",children:"Using with the Graphics Kit"}),`
`,e.jsxs(s.p,{children:["If you haven't, check out ",e.jsx(s.a,{href:"https://reuters-graphics.github.io/docs_graphics-kit/for_developers/graphics-components/",target:"_blank",rel:"nofollow noopener noreferrer",children:'"Using Reuters Graphics Components" in the Graphics Kit docs'})," to get a general idea of how to use components."]}),`
`,e.jsx(s.h2,{id:"quickit",children:"Quickit"}),`
`,e.jsxs(s.p,{children:["Look ",e.jsxs("span",{class:"highlight",children:["for ",e.jsx("strong",{children:"🚀 QUICKIT"})," stories"]}),` (Quick Kit 🤣🙄) for some of our most commonly used components. These stories
include easy copy/paste snippets as well as Google Doc block examples that should
shortcut getting a component working in the Graphics Kit.`]}),`
`,e.jsxs(s.p,{children:["(Want a QUICKIT story for another component? ",e.jsx(s.a,{href:"https://github.com/reuters-graphics/graphics-components/issues/new?labels=%F0%9F%93%9A%20documentation&assignees=hobbes7878",target:"_blank",rel:"nofollow noopener noreferrer",children:"Just ask us!"}),")"]}),`
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
`,e.jsxs(s.p,{children:["Check out our guide on ",e.jsx(s.a,{href:"?path=/docs/guides-customising-components-with-scss--page",children:"customising components with SCSS"})]})]})}function c(o={}){const{wrapper:s}=Object.assign({},r(),o.components);return s?e.jsx(s,{...o,children:e.jsx(n,{...o})}):n(o)}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const t={title:"Guides/Using with the Graphics Kit",parameters:{...i},tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:c};const y=["__page"];export{y as __namedExportsOrder,h as __page,t as default};
//# sourceMappingURL=graphics-kit.stories-a116e878.js.map
