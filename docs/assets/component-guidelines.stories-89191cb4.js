import{M as c}from"./chunk-S4VUQJ4A-d72e02b8.js";import{p as i,j as e}from"./jsx-runtime-bd78d6a8.js";import{u as l}from"./index-a0b8ebe1.js";import"./iframe-3c331062.js";import"../sb-preview/runtime.js";import"./index-a5f584f7.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-e04ae519.js";import"./index-356e4a49.js";function p(r={}){const{wrapper:s}=Object.assign({},l(),r.components);return s?e.jsx(s,{...r,children:e.jsx(o,{})}):o();function o(){const n=Object.assign({p:"p",img:"img",h1:"h1",h2:"h2",blockquote:"blockquote",a:"a",h3:"h3",h4:"h4",pre:"pre",code:"code",strong:"strong"},l(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Contributing/Component guidelines",parameters:{...i}}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(n.h1,{id:"component-guidelines",children:"Component guidelines"}),`
`,e.jsx(n.h2,{id:"dependencies",children:"Dependencies"}),`
`,e.jsx(n.p,{children:"Components should be written for any Svelte context. If your component needs, for example, values from SvelteKit stores, these should be passed in as props."}),`
`,e.jsx(n.h2,{id:"typescript",children:"Typescript"}),`
`,e.jsx(n.p,{children:"By default, component's are written in TypeScript, which adds robust type-checking and helpful hints for people using your component in editors like Visual Studio Code."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["If you've never used TypeScript, you can check out the ",e.jsx(n.a,{href:"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"5-minute intro"}),". If you're still uneasy writing TypeScript, don't sweat it! Just write your component in plain JavaScript/Svelte. We'll convert at least your component's props to TypeScript as part of the PR review."]}),`
`]}),`
`,e.jsx(n.h3,{id:"typing-and-documenting-component-props",children:"Typing and documenting component props"}),`
`,e.jsxs(n.p,{children:["Document props using ",e.jsx(n.a,{href:"https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"JSDoc comments"})," (be sure to mark required props) and type props with TypeScript."]}),`
`,e.jsx(n.p,{children:"Here are a few examples:"}),`
`,e.jsx(n.h4,{id:"typing-simple-props",children:"Typing simple props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<script lang="ts">
  /** Height of the component */
  export let height: number = 250;
  /** Text colour */
  export let colour: string = 'blue';
<\/script>
`})}),`
`,e.jsx(n.h4,{id:"documenting-required-props",children:"Documenting required props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<script lang="ts">
  /**
   * Image source
   * @required
   */
  export let src: string;
  /**
   * AltText for the image
   * @required
   */
  export let altText: string;
<\/script>
`})}),`
`,e.jsx(n.h4,{id:"custom-types-for-props",children:"Custom types for props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<script lang="ts">
  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';

  /** Width of the component within the text well. */
  export let width: ContainerWidth = 'normal';

  interface Person {
    name: string;
    age: number;
  }

  /**
   * Array of people
   * @required
   */
  export let people: Person[];
<\/script>
`})}),`
`,e.jsx(n.h4,{id:"future-syntax",children:"Future syntax"}),`
`,e.jsxs(n.p,{children:["Using some future syntax like ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",target:"_blank",rel:"nofollow noopener noreferrer",children:"optional chaining"})," in your components currently breaks the automatic discovery of JSDoc comments in your component, which are used to fill in the ",e.jsx(n.a,{href:"https://storybook.js.org/docs/react/writing-docs/doc-block-argstable",target:"_blank",rel:"nofollow noopener noreferrer",children:"ArgsTable"}),"."]}),`
`,e.jsx(n.p,{children:"So instead of..."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`myObject?.myOptionalProp;
`})}),`
`,e.jsx(n.p,{children:"...unfortunately, use something old-fashioned like..."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`myObject.myOptionalProp ? myObject.myOptionalProp : null;
`})}),`
`,e.jsx(n.p,{children:"If your component docs still aren't working, check if you're using other future-JS sytax, for now."}),`
`,e.jsx(n.h2,{id:"styles",children:"Styles"}),`
`,e.jsx(n.h3,{id:"theming",children:"Theming"}),`
`,e.jsxs(n.p,{children:["Always respect styles set by the ",e.jsx(n.a,{href:"/?path=/docs/theming-theme--default",children:e.jsx(n.code,{children:"Theme"})})," component by using ",e.jsx(n.a,{href:"?path=/docs/scss-css-variables--page",children:"CSS variables"})," where they apply to your component."]}),`
`,e.jsxs(n.p,{children:["Always set ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#custom_property_fallback_values",target:"_blank",rel:"nofollow noopener noreferrer",children:"fallback values"})," for the default light theme."]}),`
`,e.jsx(n.h3,{id:"scss",children:"SCSS"}),`
`,e.jsxs(n.p,{children:["Use SCSS with the ",e.jsx(n.code,{children:"lang"})," attribute to write your styles."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<button>My component</button>

<style lang="scss">
  button {
    color: blue;
  }
</style>
`})}),`
`,e.jsx(n.h3,{id:"scope",children:"Scope"}),`
`,e.jsxs(n.p,{children:["Styles should ",e.jsx(n.strong,{children:"always"})," be scoped to your components."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<button>My component</button>

<style lang="scss">
  button {
    color: blue;
  }
</style>
`})}),`
`,e.jsxs(n.p,{children:["In rare cases, you can use the SCSS ",e.jsx(n.code,{children:":global"})," operator to style child elements in your component, but those rules should still be scoped below a parent element."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<svg></svg>

<style lang="scss">
  svg {
    :global {
      path {
        stroke: black;
      }
    }
  }
</style>
`})}),`
`,e.jsx(n.h3,{id:"css-variables",children:"CSS variables"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",rel:"nofollow noopener noreferrer",children:"CSS variables"})," and props to allow better theming of your components."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-svelte",children:`<script>
  export let textColour = '#333';
<\/script>

<div style="--textColour: {textColour};">
  <h3>My title</h3>
  <p>My text.</p>
  <p></p>
</div>

<style lang="scss">
  div {
    h3,
    p {
      color: var(--textColour, #333);
    }
  }
</style>
`})})]})}}const a=()=>{throw new Error("Docs-only story")};a.parameters={docsOnly:!0};const t={title:"Contributing/Component guidelines",parameters:{...i},tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:p};const S=["__page"];export{S as __namedExportsOrder,a as __page,t as default};
//# sourceMappingURL=component-guidelines.stories-89191cb4.js.map
