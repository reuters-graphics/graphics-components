import{M as c}from"./chunk-PCJTTTQV-90f858af.js";import{p as a,j as e}from"./jsx-runtime-539b76a3.js";import{u as o}from"./index-297ebefe.js";import"./iframe-22454b94.js";import"../sb-preview/runtime.js";import"./extends-b40c5bac.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-1a79a776.js";import"./index-356e4a49.js";function d(t={}){const{wrapper:r}=Object.assign({},o(),t.components);return r?e.jsx(r,{...t,children:e.jsx(i,{})}):i();function i(){const s=Object.assign({p:"p",img:"img",h1:"h1",h3:"h3",a:"a",h2:"h2",code:"code",pre:"pre"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"SCSS/Mixins",parameters:{...a}}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(s.h1,{id:"scss-mixins",children:"SCSS Mixins"}),`
`,e.jsx(s.h3,{id:"prereqs",children:"Prereqs"}),`
`,e.jsxs(s.p,{children:["Mixins allow you to re-use styles we've already defined in your components. Read more about how they work ",e.jsx(s.a,{href:"https://sass-lang.com/documentation/at-rules/mixin",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"})," or just follow the examples below."]}),`
`,e.jsx(s.h2,{id:"available-mixins",children:"Available mixins"}),`
`,e.jsx(s.h3,{id:"body-text",children:e.jsx(s.code,{children:"body-text"})}),`
`,e.jsx(s.p,{children:"Mixin our default body text styles."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="my-custom-text">
  <h3>Lorem Ipsum</h3>
  <p>Ig-pay atin-lay</p>
</div>

<style lang="scss">
  // Import SCSS mixins
  @import '@reuters-graphics/graphics-components/dist/scss/mixins';

  div.my-custom-text {
    // Use body-text rules for all text elements
    // inside your custom element.
    @include body-text;
  }
</style>
`})}),`
`,e.jsx(s.h3,{id:"graphic-text",children:e.jsx(s.code,{children:"graphic-text"})}),`
`,e.jsx(s.p,{children:"Graphic text styles."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="my-chart-container">
  <h3>Things are going up</h3>
  <p>Recent data point to a clear trend.</p>
  <div id="chart"></div>
  <aside>
    <p>Source: Horoscopery</p>
  </aside>
</div>

<style lang="scss">
  @import '@reuters-graphics/graphics-components/dist/scss/mixins';

  div.my-chart-container {
    @include graphic-text;
  }
</style>
`})}),`
`,e.jsx(s.h3,{id:"visually-hidden",children:e.jsx(s.code,{children:"visually-hidden"})}),`
`,e.jsx(s.p,{children:"Hide text meant for screen readers."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="hidden">
  <p>A chart that shows many things.</p>
</div>

<style lang="scss">
  @import '@reuters-graphics/graphics-components/dist/scss/mixins';

  div.hidden {
    @include visually-hidden;
  }
</style>
`})})]})}}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const n={title:"SCSS/Mixins",parameters:{...a},tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:d};const b=["__page"];export{b as __namedExportsOrder,l as __page,n as default};
//# sourceMappingURL=mixins.stories-756483c9.js.map
