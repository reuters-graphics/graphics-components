import{M as i}from"./chunk-S4VUQJ4A-23edc7ed.js";import{p as s,j as e}from"./jsx-runtime-a53139db.js";import{u as a}from"./index-036d6926.js";import"./iframe-b8e40deb.js";import"../sb-preview/runtime.js";import"./index-b33a5d42.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-e04ae519.js";import"./index-356e4a49.js";function r(n){const o=Object.assign({p:"p",img:"img",h1:"h1",a:"a",code:"code",pre:"pre",em:"em",blockquote:"blockquote",strong:"strong"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Contributing/Recipes: Basic story",parameters:{...s}}),`
`,e.jsx(o.p,{children:e.jsx(o.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(o.h1,{id:"recipes-basic-story",children:"Recipes: Basic story"}),`
`,e.jsxs(o.p,{children:["To make a basic story, you'll need to setup a few things from storybook's Svelte ",e.jsx(o.a,{href:"https://storybook.js.org/docs/svelte/api/csf",target:"_blank",rel:"nofollow noopener noreferrer",children:"Component Story Framework (CSF)"})," library."]}),`
`,e.jsxs(o.p,{children:["Once you've setup the ",e.jsx(o.code,{children:"Meta"})," and ",e.jsx(o.code,{children:"Template"})," components as below, you can write a ",e.jsx(o.code,{children:"Story"})," component with an ",e.jsx(o.code,{children:"args"})," prop. In that ",e.jsx(o.code,{children:"args"})," prop you can pass values that will be used to fill in your component's props."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-svelte",children:`<!-- YourComponent.stories.svelte -->
<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  import YourComponent from './YourComponent.svelte';
<\/script>

<Meta title="Components/YourComponent" component="{YourComponent}" />

<Template let:args>
  <YourComponent {...args} />
</Template>

<Story
  name="Default"
  args="{{
    width: 'normal',
  }}"
/>
`})}),`
`,e.jsxs(o.p,{children:["For example, the ",e.jsx(o.code,{children:"width"})," property in the ",e.jsx(o.code,{children:"Story"})," args above would be passed to your component as though you'd written it like this:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-svelte",children:`<YourComponent width="normal" />
`})}),`
`,e.jsxs(o.p,{children:["You can define additional stories with ",e.jsx(o.em,{children:"different"})," args to show how your component will render with different props like:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-svelte",children:`<!-- ... -->

<Story
  name="Default"
  args="{{
    width: 'normal',
  }}"
/>

<Story
  name="Extra wide"
  args="{{
    width: 'wider',
  }}"
/>
`})}),`
`,e.jsxs(o.p,{children:["If you want even more control, you can skip the ",e.jsx(o.code,{children:"args"})," and pass your component directly into the ",e.jsx(o.code,{children:"Story"})," with whatever props you need:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-svelte",children:`<Story name="Super custom">
  <YourComponent
    width="fluid"
    data="{[
      { id: 'UK', value: 65 },
      { id: 'USA', value: 265 },
    ]}"
  />
</Story>
`})}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Pro tip:"})," If you pass your component in directly, your users won't be able to control its props using Storybook's built-in ",e.jsx(o.a,{href:"https://storybook.js.org/docs/svelte/essentials/controls",target:"_blank",rel:"nofollow noopener noreferrer",children:"controls panel"}),", so it's always best to start with a default example using ",e.jsx(o.code,{children:"args"}),"."]}),`
`]})]})}function l(n={}){const{wrapper:o}=Object.assign({},a(),n.components);return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const t={title:"Contributing/Recipes: Basic story",parameters:{...s},tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:l};const f=["__page"];export{f as __namedExportsOrder,c as __page,t as default};
//# sourceMappingURL=basic-story.stories-742b783f.js.map
