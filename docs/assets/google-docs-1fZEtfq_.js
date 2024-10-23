import{j as e,p as r}from"./docsPage-CrCNk6vV.js";import{useMDXComponents as s}from"./index-CswL0fy2.js";import{M as a}from"./index-BawdbxzO.js";import"./index-DwChlhAQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./iframe-BDmRycB9.js";import"../sb-preview/runtime.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function n(t){const o={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Guides/Using with Google docs",parameters:{...r}}),`
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
  {#if block.Type}
    <!-- ... -->
  {:else if block.Type === 'profile-card'}
    <ProfileCard
      name="{block.Name}"
      img="{\`\${assets}/\${block.Image}\`}"
      birthday="{new Date(block.Birthday)}"
      bio="{block.Bio}"
      isStaff="{block.Staff === 'true'}"
    />

    <!-- ... -->
  {/if}
{/each}
`})}),`
`,e.jsxs(o.p,{children:["Notice how we're coercing some of our data from strings into other data types: a boolean for ",e.jsx(o.code,{children:"isStaff"}),", a date for ",e.jsx(o.code,{children:"birthday"})," and an absolute path for ",e.jsx(o.code,{children:"img"}),"."]})]})}function x(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{x as default};
