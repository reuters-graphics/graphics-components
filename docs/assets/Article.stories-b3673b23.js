import{S as R,i as G,s as J,C as q,g as $,y as v,m as u,d as h,t as f,h as w,f as g,j as p,l as z,b as F,n as K,e as C,z as A}from"./index-99a30af8.js";import{g as N,a as Q}from"./spread-8a54911c.js";import{p as V,M as X,T as Y,S as U}from"./collect-stories-1e0d20c7.js";import{A as L}from"./Article-cb12a248.js";import{B}from"./Block-a09d61d3.js";const Z=`The \`Article\` component contains all the content of our story and also establishes the dimensions of our article well, the default central trunk of our page layout.

> 📌 In most cases, **you won't need to mess with the \`Article\` component** because it's already included in our rigs for you!

\`\`\`svelte
<script>
  import { Article } from '@reuters-graphics/graphics-components';
<\/script>

<Article>
  <!-- The story stuff goes in here! -->
</Article>
\`\`\`
`,O=`The \`Article\` component also creates several column dimensions inside our article well. The standard widths of columns follow a basic class scheme:

- \`narrower\` A bit narrower than narrow...
- \`narrow\` A bit narrower than the text column
- \`normal\` **The main width of the body text column**
- \`wide\` A bit wider than the text column
- \`wider\` A bit wider than wide...
- \`widest\` Edge-to-edge, but _excluding_ the left and right padding on \`Article\`
- \`fluid\` Fully edge-to-edge

When combined with the \`Block\` component, you can set custom column widths by passing an object to the \`columnWidths\` prop with pixel values for the \`narrower\`, \`narrow\`, \`normal\`, \`wide\` and \`wider\` column widths.

> **For most pages, you shouldn't customise the column widths.** Other tools, like our AI templates, use our default column widths, so customising those widths here has downstream consequences for graphics made outside your code. The main exception is SREP stories.

\`\`\`svelte
<Article
  columnWidths="{{
    narrower: 310,
    narrow: 450,
    normal: 550,
    wide: 675,
    wider: 1400,
  }}"
>
  <Block width="narrower" />
  <Block width="narrow" />
  <Block width="normal" />
  <Block width="wide" />
  <Block width="wider" />
  <Block width="widest" />
  <Block width="fluid" />
</Article>
\`\`\`

If you're not using our \`Block\` component, you can still inherit the column widths from \`Article\` to create your own custom container with the article well dimensions by using [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) like this:

\`\`\`svelte
<div class="my-special-container">
  <!-- Stuffs... -->
</div>

<style lang="scss">
  div.my-special-container {
    max-width: var(--wide-column-width);
  }
</style>
\`\`\`

... or you can make your component entirely configurable within the article well doing something like this:

\`\`\`svelte
<script>
  export let width = 'normal';
<\/script>

<div class="my-special-container {width}">
  <!-- Stuffs... -->
</div>

<style lang="scss">
  div.my-special-container {
    max-width: var(--normal-column-width);
    &.narrower {
      max-width: var(--narrower-column-width);
    }
    &.narrow {
      max-width: var(--narrow-column-width);
    }
    &.wide {
      max-width: var(--wide-column-width);
    }
    &.wider {
      max-width: var(--wider-column-width);
    }
    &.widest {
      max-width: 100%;
    }
    &.fluid {
      width: calc(100% + 30px);
      margin-left: -15px;
      max-width: none;
    }
  }
</style>
\`\`\`

Here's an example of how custom\\* \`columnWidths\` can be used to change the article well columns:
`,ee=(r,e={})=>{var i;return{parameters:{docs:{...(i=e==null?void 0:e.parameters)==null?void 0:i.docs,description:{story:r}}}}},te=(r,e={})=>{var i;return{parameters:{docs:{...(i=e==null?void 0:e.parameters)==null?void 0:i.docs,description:{component:r}}}}};function ne(r){let e,t;const n=[r[0]];let i={};for(let o=0;o<n.length;o+=1)i=q(i,n[o]);return e=new L({props:i}),{c(){$(e.$$.fragment)},m(o,c){u(e,o,c),t=!0},p(o,c){const b=c&1?N(n,[Q(o[0])]):{};e.$set(b)},i(o){t||(f(e.$$.fragment,o),t=!0)},o(o){w(e.$$.fragment,o),t=!1},d(o){p(e,o)}}}function se(r){let e;return{c(){e=z("div"),e.innerHTML='<div class="background-label svelte-12ka7xw">Article container</div> <div class="padding-label svelte-12ka7xw"><span class="svelte-12ka7xw">⇤</span>15px padding</div>',F(e,"class","demo-container svelte-12ka7xw")},m(t,n){h(t,e,n)},p:K,d(t){t&&g(e)}}}function oe(r){let e,t;return e=new L({props:{id:"article-story-basic",$$slots:{default:[se]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment)},m(n,i){u(e,n,i),t=!0},p(n,i){const o={};i&2&&(o.$$scope={dirty:i,ctx:n}),e.$set(o)},i(n){t||(f(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){p(e,n)}}}function re(r){let e;return{c(){e=A("narrower")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function le(r){let e;return{c(){e=A("narrow")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ie(r){let e;return{c(){e=A("normal")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ae(r){let e;return{c(){e=A("wide")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ce(r){let e;return{c(){e=A("wider")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function de(r){let e;return{c(){e=A("widest")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function me(r){let e;return{c(){e=A("fluid")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function $e(r){let e,t,n,i,o,c,b,m,D,_,x,k,l,d,S;return t=new B({props:{id:"section-demo",width:"narrower",$$slots:{default:[re]},$$scope:{ctx:r}}}),i=new B({props:{id:"section-demo",width:"narrow",$$slots:{default:[le]},$$scope:{ctx:r}}}),c=new B({props:{id:"section-demo",$$slots:{default:[ie]},$$scope:{ctx:r}}}),m=new B({props:{id:"section-demo",width:"wide",$$slots:{default:[ae]},$$scope:{ctx:r}}}),_=new B({props:{id:"section-demo",width:"wider",$$slots:{default:[ce]},$$scope:{ctx:r}}}),k=new B({props:{id:"section-demo",width:"widest",$$slots:{default:[de]},$$scope:{ctx:r}}}),d=new B({props:{id:"section-demo",width:"fluid",$$slots:{default:[me]},$$scope:{ctx:r}}}),{c(){e=z("div"),$(t.$$.fragment),n=v(),$(i.$$.fragment),o=v(),$(c.$$.fragment),b=v(),$(m.$$.fragment),D=v(),$(_.$$.fragment),x=v(),$(k.$$.fragment),l=v(),$(d.$$.fragment),F(e,"class","article-boundaries")},m(s,a){h(s,e,a),u(t,e,null),C(e,n),u(i,e,null),C(e,o),u(c,e,null),C(e,b),u(m,e,null),C(e,D),u(_,e,null),C(e,x),u(k,e,null),C(e,l),u(d,e,null),S=!0},p(s,a){const y={};a&2&&(y.$$scope={dirty:a,ctx:s}),t.$set(y);const W={};a&2&&(W.$$scope={dirty:a,ctx:s}),i.$set(W);const T={};a&2&&(T.$$scope={dirty:a,ctx:s}),c.$set(T);const M={};a&2&&(M.$$scope={dirty:a,ctx:s}),m.$set(M);const I={};a&2&&(I.$$scope={dirty:a,ctx:s}),_.$set(I);const j={};a&2&&(j.$$scope={dirty:a,ctx:s}),k.$set(j);const E={};a&2&&(E.$$scope={dirty:a,ctx:s}),d.$set(E)},i(s){S||(f(t.$$.fragment,s),f(i.$$.fragment,s),f(c.$$.fragment,s),f(m.$$.fragment,s),f(_.$$.fragment,s),f(k.$$.fragment,s),f(d.$$.fragment,s),S=!0)},o(s){w(t.$$.fragment,s),w(i.$$.fragment,s),w(c.$$.fragment,s),w(m.$$.fragment,s),w(_.$$.fragment,s),w(k.$$.fragment,s),w(d.$$.fragment,s),S=!1},d(s){s&&g(e),p(t),p(i),p(c),p(m),p(_),p(k),p(d)}}}function ue(r){let e;return{c(){e=A("narrower*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function fe(r){let e;return{c(){e=A("narrow*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function we(r){let e;return{c(){e=A("normal*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function pe(r){let e;return{c(){e=A("wide*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function he(r){let e;return{c(){e=A("wider*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ge(r){let e;return{c(){e=A("widest")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function _e(r){let e;return{c(){e=A("fluid")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ke(r){let e,t,n,i,o,c,b,m,D,_,x,k,l,d,S;return t=new B({props:{id:"section-demo",width:"narrower",$$slots:{default:[ue]},$$scope:{ctx:r}}}),i=new B({props:{id:"section-demo",width:"narrow",$$slots:{default:[fe]},$$scope:{ctx:r}}}),c=new B({props:{id:"section-demo",$$slots:{default:[we]},$$scope:{ctx:r}}}),m=new B({props:{id:"section-demo",width:"wide",$$slots:{default:[pe]},$$scope:{ctx:r}}}),_=new B({props:{id:"section-demo",width:"wider",$$slots:{default:[he]},$$scope:{ctx:r}}}),k=new B({props:{id:"section-demo",width:"widest",$$slots:{default:[ge]},$$scope:{ctx:r}}}),d=new B({props:{id:"section-demo",width:"fluid",$$slots:{default:[_e]},$$scope:{ctx:r}}}),{c(){e=z("div"),$(t.$$.fragment),n=v(),$(i.$$.fragment),o=v(),$(c.$$.fragment),b=v(),$(m.$$.fragment),D=v(),$(_.$$.fragment),x=v(),$(k.$$.fragment),l=v(),$(d.$$.fragment),F(e,"class","article-boundaries custom")},m(s,a){h(s,e,a),u(t,e,null),C(e,n),u(i,e,null),C(e,o),u(c,e,null),C(e,b),u(m,e,null),C(e,D),u(_,e,null),C(e,x),u(k,e,null),C(e,l),u(d,e,null),S=!0},p(s,a){const y={};a&2&&(y.$$scope={dirty:a,ctx:s}),t.$set(y);const W={};a&2&&(W.$$scope={dirty:a,ctx:s}),i.$set(W);const T={};a&2&&(T.$$scope={dirty:a,ctx:s}),c.$set(T);const M={};a&2&&(M.$$scope={dirty:a,ctx:s}),m.$set(M);const I={};a&2&&(I.$$scope={dirty:a,ctx:s}),_.$set(I);const j={};a&2&&(j.$$scope={dirty:a,ctx:s}),k.$set(j);const E={};a&2&&(E.$$scope={dirty:a,ctx:s}),d.$set(E)},i(s){S||(f(t.$$.fragment,s),f(i.$$.fragment,s),f(c.$$.fragment,s),f(m.$$.fragment,s),f(_.$$.fragment,s),f(k.$$.fragment,s),f(d.$$.fragment,s),S=!0)},o(s){w(t.$$.fragment,s),w(i.$$.fragment,s),w(c.$$.fragment,s),w(m.$$.fragment,s),w(_.$$.fragment,s),w(k.$$.fragment,s),w(d.$$.fragment,s),S=!1},d(s){s&&g(e),p(t),p(i),p(c),p(m),p(_),p(k),p(d)}}}function be(r){let e,t,n,i;return e=new L({props:{id:"article-column-widths-demo",$$slots:{default:[$e]},$$scope:{ctx:r}}}),n=new L({props:{id:"article-column-widths-demo",columnWidths:{narrower:310,narrow:450,normal:550,wide:675,wider:1400},$$slots:{default:[ke]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment),t=v(),$(n.$$.fragment)},m(o,c){u(e,o,c),h(o,t,c),u(n,o,c),i=!0},p(o,c){const b={};c&2&&(b.$$scope={dirty:c,ctx:o}),e.$set(b);const m={};c&2&&(m.$$scope={dirty:c,ctx:o}),n.$set(m)},i(o){i||(f(e.$$.fragment,o),f(n.$$.fragment,o),i=!0)},o(o){w(e.$$.fragment,o),w(n.$$.fragment,o),i=!1},d(o){o&&g(t),p(e,o),p(n,o)}}}function ve(r){let e,t,n,i,o,c,b,m;const D=[{title:"Layout/Article"},{component:L},te(Z)];let _={};for(let l=0;l<D.length;l+=1)_=q(_,D[l]);e=new X({props:_}),n=new Y({props:{$$slots:{default:[ne,({args:l})=>({0:l}),({args:l})=>l?1:0]},$$scope:{ctx:r}}}),o=new U({props:{name:"Default",args:{embedded:!1,id:""},$$slots:{default:[oe]},$$scope:{ctx:r}}});const x=[{name:"Custom columns"},ee(O)];let k={$$slots:{default:[be]},$$scope:{ctx:r}};for(let l=0;l<x.length;l+=1)k=q(k,x[l]);return b=new U({props:k}),{c(){$(e.$$.fragment),t=v(),$(n.$$.fragment),i=v(),$(o.$$.fragment),c=v(),$(b.$$.fragment)},m(l,d){u(e,l,d),h(l,t,d),u(n,l,d),h(l,i,d),u(o,l,d),h(l,c,d),u(b,l,d),m=!0},p(l,[d]){const S={};e.$set(S);const s={};d&3&&(s.$$scope={dirty:d,ctx:l}),n.$set(s);const a={};d&2&&(a.$$scope={dirty:d,ctx:l}),o.$set(a);const y={};d&2&&(y.$$scope={dirty:d,ctx:l}),b.$set(y)},i(l){m||(f(e.$$.fragment,l),f(n.$$.fragment,l),f(o.$$.fragment,l),f(b.$$.fragment,l),m=!0)},o(l){w(e.$$.fragment,l),w(n.$$.fragment,l),w(o.$$.fragment,l),w(b.$$.fragment,l),m=!1},d(l){l&&(g(t),g(i),g(c)),p(e,l),p(n,l),p(o,l),p(b,l)}}}class P extends R{constructor(e){super(),G(this,e,null,ve,J,{})}}P.__docgen={version:3,name:"Article.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const H=V(P,{meta:{title:"Layout/Article"},stories:{"tpl:default":{name:"default",template:!0,source:"<Article {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:`<Article id="article-story-basic">
  <div class="demo-container">
    <div class="background-label">Article container</div>
    <div class="padding-label"><span>⇤</span>15px padding</div>
  </div>
</Article>`,hasArgs:!1},CustomColumns:{name:"Custom columns",template:!1,source:`<Article id="article-column-widths-demo">
  <div class="article-boundaries">
    <Block id="section-demo" width="narrower">narrower</Block>
    <Block id="section-demo" width="narrow">narrow</Block>
    <Block id="section-demo">normal</Block>
    <Block id="section-demo" width="wide">wide</Block>
    <Block id="section-demo" width="wider">wider</Block>
    <Block id="section-demo" width="widest">widest</Block>
    <Block id="section-demo" width="fluid">fluid</Block>
  </div>
</Article>
<Article
  id="article-column-widths-demo"
  columnWidths="{{
    narrower: 310,
    narrow: 450,
    normal: 550,
    wide: 675,
    wider: 1400,
  }}"
>
  <div class="article-boundaries custom">
    <Block id="section-demo" width="narrower">narrower*</Block>
    <Block id="section-demo" width="narrow">narrow*</Block>
    <Block id="section-demo">normal*</Block>
    <Block id="section-demo" width="wide">wide*</Block>
    <Block id="section-demo" width="wider">wider*</Block>
    <Block id="section-demo" width="widest">widest</Block>
    <Block id="section-demo" width="fluid">fluid</Block>
  </div>
</Article>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","customWellWidthsDocs","Article","Block","withComponentDocs","withStoryDocs"]}),xe=H.meta,ye=["Default","CustomColumns"],We=H.stories.Default,Te=H.stories.CustomColumns;export{Te as CustomColumns,We as Default,ye as __namedExportsOrder,xe as default};
//# sourceMappingURL=Article.stories-b3673b23.js.map
