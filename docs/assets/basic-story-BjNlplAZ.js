import{j as e,p as r}from"./docsPage-CrCNk6vV.js";import{useMDXComponents as s}from"./index-CswL0fy2.js";import{M as i}from"./index-DNmTxl-i.js";import"./index-DwChlhAQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./iframe-C3t1RIay.js";import"../sb-preview/runtime.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function t(n){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",img:"img",p:"p",pre:"pre",strong:"strong",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Contributing/Recipes: Basic story",parameters:{...r}}),`
`,e.jsx(o.p,{children:e.jsx(o.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(o.h1,{id:"recipes-basic-story",children:"Recipes: Basic story"}),`
`,e.jsxs(o.p,{children:["To make a basic story, you'll need to setup a few things from storybook's Svelte ",e.jsx(o.a,{href:"https://storybook.js.org/docs/svelte/api/csf",rel:"nofollow",children:"Component Story Framework (CSF)"})," library."]}),`
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
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Pro tip:"})," If you pass your component in directly, your users won't be able to control its props using Storybook's built-in ",e.jsx(o.a,{href:"https://storybook.js.org/docs/svelte/essentials/controls",rel:"nofollow",children:"controls panel"}),", so it's always best to start with a default example using ",e.jsx(o.code,{children:"args"}),"."]}),`
`]})]})}function y(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}const j=[];export{j as __namedExportsOrder,y as default};
