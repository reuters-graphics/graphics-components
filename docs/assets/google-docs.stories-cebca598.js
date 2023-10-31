import{M as c}from"./chunk-S4VUQJ4A-d4e526d9.js";import{p as i,j as e}from"./jsx-runtime-1fec5a65.js";import{u as a}from"./index-9b2b885f.js";import"./iframe-5ecc2aba.js";import"../sb-preview/runtime.js";import"./index-b76f801e.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-e04ae519.js";import"./index-356e4a49.js";function l(n={}){const{wrapper:s}=Object.assign({},a(),n.components);return s?e.jsx(s,{...n,children:e.jsx(r,{})}):r();function r(){const o=Object.assign({p:"p",img:"img",h1:"h1",code:"code",pre:"pre"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Guides/Using with Google docs",parameters:{...i}}),`
`,e.jsx(o.p,{children:e.jsx(o.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(o.h1,{id:"using-with-google-docs",children:"Using with Google docs"}),`
`,e.jsx(o.p,{children:"Most of the default examples in these docs show how to use components by passing data into them directly through props. In the Kit, though, you likely won't be hard-coding things like text strings in your code and instead will get them from a Google Doc."}),`
`,e.jsx(o.p,{children:"It's usually easy to use a Google Doc to fill in the props for our components, but it may mean you need to write a tiny bit of code to translate strings from a doc into the data type our component's props expect."}),`
`,e.jsxs(o.p,{children:["Let's look at a basic component, a ",e.jsx(o.code,{children:"ProfileCard"}),", with a demo that looks like this in the docs:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-svelte",children:`<script>
  import { ProfileCard } from '@reuters-graphics/graphics-components';
<\/script>

<ProfileCard
  name="Tom"
  img="https://cats.com/cat1.jpg"
  birthday="{new Date('2020-09-25')}"
  bio="Some notes.\\n\\nWith multiple paragraphs."
  isStaff="{true}"
/>
`})}),`
`,e.jsx(o.p,{children:"The data for the component's props includes strings, a date and a boolean."}),`
`,e.jsx(o.p,{children:"In our Google doc, we might fill out a block for this component like this:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-yaml",children:`Type: profile-card
Name: Tom
Image: images/tom-the-cat.jpg
Birthday: 2020-09-25
Bio: Some notes.

With multiple paragraphs.
:end
Staff: true
`})}),`
`,e.jsx(o.p,{children:"Now we can tie that data into your blocks loop like this:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-svelte",children:`<script>
  // These are usually already imported for you
  import { assets } from '$app/paths';
  import content from '$locales/en/content.json';

  import { ProfileCard } from '@reuters-graphics/graphics-components';
<\/script>

{#each content.blocks as block}
  <!-- ... -->

  {:else if block.Type === 'profile-card'}
    <ProfileCard
      name="{block.Name}"
      img={\`\${assets}/\${block.Image}\`}
      birthday={new Date(block.Birthday)}
      bio="{block.Bio}"
      isStaff={block.Staff === 'true'}
    />

  <!-- ... -->
{/each}
`})}),`
`,e.jsxs(o.p,{children:["Notice how we're coercing some of our data from strings into other data types: a boolean for ",e.jsx(o.code,{children:"isStaff"}),", a date for ",e.jsx(o.code,{children:"birthday"})," and an absolute path for ",e.jsx(o.code,{children:"img"}),"."]})]})}}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const t={title:"Guides/Using with Google docs",parameters:{...i},tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:l};const w=["__page"];export{w as __namedExportsOrder,p as __page,t as default};
//# sourceMappingURL=google-docs.stories-cebca598.js.map
