import{S as R,i as G,s as J,C as L,g as $,y as v,m as u,d as h,t as f,h as p,f as g,j as w,o as q,b as F,n as K,e as C,z as A}from"./index-06834efe.js";import{g as N,a as Q}from"./spread-8a54911c.js";import{p as V,M as X,T as Y,S as U}from"./collect-stories-3e05a7a9.js";import{A as E}from"./Article-eb738122.js";import{B}from"./Block-3bcdcbfd.js";const Z=`The \`Article\` component contains all the content of our story and also establishes the dimensions of our article well, the default central trunk of our page layout.

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
`,ee=(r,e={})=>{var i;return{parameters:{docs:{...(i=e==null?void 0:e.parameters)==null?void 0:i.docs,description:{story:r}}}}},te=(r,e={})=>{var i;return{parameters:{docs:{...(i=e==null?void 0:e.parameters)==null?void 0:i.docs,description:{component:r}}}}};function ne(r){let e,t;const n=[r[0]];let i={};for(let o=0;o<n.length;o+=1)i=L(i,n[o]);return e=new E({props:i}),{c(){$(e.$$.fragment)},m(o,a){u(e,o,a),t=!0},p(o,a){const b=a&1?N(n,[Q(o[0])]):{};e.$set(b)},i(o){t||(f(e.$$.fragment,o),t=!0)},o(o){p(e.$$.fragment,o),t=!1},d(o){w(e,o)}}}function se(r){let e;return{c(){e=q("div"),e.innerHTML='<div class="background-label svelte-1z127ee">Article container</div> <div class="padding-label svelte-1z127ee"><span class="svelte-1z127ee">⇤</span>15px padding</div>',F(e,"class","demo-container svelte-1z127ee")},m(t,n){h(t,e,n)},p:K,d(t){t&&g(e)}}}function oe(r){let e,t;return e=new E({props:{id:"article-story-basic",$$slots:{default:[se]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment)},m(n,i){u(e,n,i),t=!0},p(n,i){const o={};i&2&&(o.$$scope={dirty:i,ctx:n}),e.$set(o)},i(n){t||(f(e.$$.fragment,n),t=!0)},o(n){p(e.$$.fragment,n),t=!1},d(n){w(e,n)}}}function re(r){let e;return{c(){e=A("narrower")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function le(r){let e;return{c(){e=A("narrow")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ie(r){let e;return{c(){e=A("normal")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ce(r){let e;return{c(){e=A("wide")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ae(r){let e;return{c(){e=A("wider")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function de(r){let e;return{c(){e=A("widest")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function me(r){let e;return{c(){e=A("fluid")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function $e(r){let e,t,n,i,o,a,b,m,D,_,y,k,l,d,S;return t=new B({props:{id:"section-demo",width:"narrower",$$slots:{default:[re]},$$scope:{ctx:r}}}),i=new B({props:{id:"section-demo",width:"narrow",$$slots:{default:[le]},$$scope:{ctx:r}}}),a=new B({props:{id:"section-demo",$$slots:{default:[ie]},$$scope:{ctx:r}}}),m=new B({props:{id:"section-demo",width:"wide",$$slots:{default:[ce]},$$scope:{ctx:r}}}),_=new B({props:{id:"section-demo",width:"wider",$$slots:{default:[ae]},$$scope:{ctx:r}}}),k=new B({props:{id:"section-demo",width:"widest",$$slots:{default:[de]},$$scope:{ctx:r}}}),d=new B({props:{id:"section-demo",width:"fluid",$$slots:{default:[me]},$$scope:{ctx:r}}}),{c(){e=q("div"),$(t.$$.fragment),n=v(),$(i.$$.fragment),o=v(),$(a.$$.fragment),b=v(),$(m.$$.fragment),D=v(),$(_.$$.fragment),y=v(),$(k.$$.fragment),l=v(),$(d.$$.fragment),F(e,"class","article-boundaries")},m(s,c){h(s,e,c),u(t,e,null),C(e,n),u(i,e,null),C(e,o),u(a,e,null),C(e,b),u(m,e,null),C(e,D),u(_,e,null),C(e,y),u(k,e,null),C(e,l),u(d,e,null),S=!0},p(s,c){const W={};c&2&&(W.$$scope={dirty:c,ctx:s}),t.$set(W);const T={};c&2&&(T.$$scope={dirty:c,ctx:s}),i.$set(T);const x={};c&2&&(x.$$scope={dirty:c,ctx:s}),a.$set(x);const z={};c&2&&(z.$$scope={dirty:c,ctx:s}),m.$set(z);const M={};c&2&&(M.$$scope={dirty:c,ctx:s}),_.$set(M);const I={};c&2&&(I.$$scope={dirty:c,ctx:s}),k.$set(I);const j={};c&2&&(j.$$scope={dirty:c,ctx:s}),d.$set(j)},i(s){S||(f(t.$$.fragment,s),f(i.$$.fragment,s),f(a.$$.fragment,s),f(m.$$.fragment,s),f(_.$$.fragment,s),f(k.$$.fragment,s),f(d.$$.fragment,s),S=!0)},o(s){p(t.$$.fragment,s),p(i.$$.fragment,s),p(a.$$.fragment,s),p(m.$$.fragment,s),p(_.$$.fragment,s),p(k.$$.fragment,s),p(d.$$.fragment,s),S=!1},d(s){s&&g(e),w(t),w(i),w(a),w(m),w(_),w(k),w(d)}}}function ue(r){let e;return{c(){e=A("narrower*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function fe(r){let e;return{c(){e=A("narrow*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function pe(r){let e;return{c(){e=A("normal*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function we(r){let e;return{c(){e=A("wide*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function he(r){let e;return{c(){e=A("wider*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ge(r){let e;return{c(){e=A("widest")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function _e(r){let e;return{c(){e=A("fluid")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ke(r){let e,t,n,i,o,a,b,m,D,_,y,k,l,d,S;return t=new B({props:{id:"section-demo",width:"narrower",$$slots:{default:[ue]},$$scope:{ctx:r}}}),i=new B({props:{id:"section-demo",width:"narrow",$$slots:{default:[fe]},$$scope:{ctx:r}}}),a=new B({props:{id:"section-demo",$$slots:{default:[pe]},$$scope:{ctx:r}}}),m=new B({props:{id:"section-demo",width:"wide",$$slots:{default:[we]},$$scope:{ctx:r}}}),_=new B({props:{id:"section-demo",width:"wider",$$slots:{default:[he]},$$scope:{ctx:r}}}),k=new B({props:{id:"section-demo",width:"widest",$$slots:{default:[ge]},$$scope:{ctx:r}}}),d=new B({props:{id:"section-demo",width:"fluid",$$slots:{default:[_e]},$$scope:{ctx:r}}}),{c(){e=q("div"),$(t.$$.fragment),n=v(),$(i.$$.fragment),o=v(),$(a.$$.fragment),b=v(),$(m.$$.fragment),D=v(),$(_.$$.fragment),y=v(),$(k.$$.fragment),l=v(),$(d.$$.fragment),F(e,"class","article-boundaries custom")},m(s,c){h(s,e,c),u(t,e,null),C(e,n),u(i,e,null),C(e,o),u(a,e,null),C(e,b),u(m,e,null),C(e,D),u(_,e,null),C(e,y),u(k,e,null),C(e,l),u(d,e,null),S=!0},p(s,c){const W={};c&2&&(W.$$scope={dirty:c,ctx:s}),t.$set(W);const T={};c&2&&(T.$$scope={dirty:c,ctx:s}),i.$set(T);const x={};c&2&&(x.$$scope={dirty:c,ctx:s}),a.$set(x);const z={};c&2&&(z.$$scope={dirty:c,ctx:s}),m.$set(z);const M={};c&2&&(M.$$scope={dirty:c,ctx:s}),_.$set(M);const I={};c&2&&(I.$$scope={dirty:c,ctx:s}),k.$set(I);const j={};c&2&&(j.$$scope={dirty:c,ctx:s}),d.$set(j)},i(s){S||(f(t.$$.fragment,s),f(i.$$.fragment,s),f(a.$$.fragment,s),f(m.$$.fragment,s),f(_.$$.fragment,s),f(k.$$.fragment,s),f(d.$$.fragment,s),S=!0)},o(s){p(t.$$.fragment,s),p(i.$$.fragment,s),p(a.$$.fragment,s),p(m.$$.fragment,s),p(_.$$.fragment,s),p(k.$$.fragment,s),p(d.$$.fragment,s),S=!1},d(s){s&&g(e),w(t),w(i),w(a),w(m),w(_),w(k),w(d)}}}function be(r){let e,t,n,i;return e=new E({props:{id:"article-column-widths-demo",$$slots:{default:[$e]},$$scope:{ctx:r}}}),n=new E({props:{id:"article-column-widths-demo",columnWidths:{narrower:310,narrow:450,normal:550,wide:675,wider:1400},$$slots:{default:[ke]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment),t=v(),$(n.$$.fragment)},m(o,a){u(e,o,a),h(o,t,a),u(n,o,a),i=!0},p(o,a){const b={};a&2&&(b.$$scope={dirty:a,ctx:o}),e.$set(b);const m={};a&2&&(m.$$scope={dirty:a,ctx:o}),n.$set(m)},i(o){i||(f(e.$$.fragment,o),f(n.$$.fragment,o),i=!0)},o(o){p(e.$$.fragment,o),p(n.$$.fragment,o),i=!1},d(o){o&&g(t),w(e,o),w(n,o)}}}function ve(r){let e,t,n,i,o,a,b,m;const D=[{title:"Layout/Article"},{component:E},te(Z)];let _={};for(let l=0;l<D.length;l+=1)_=L(_,D[l]);e=new X({props:_}),n=new Y({props:{$$slots:{default:[ne,({args:l})=>({0:l}),({args:l})=>l?1:0]},$$scope:{ctx:r}}}),o=new U({props:{name:"Default",args:{embedded:!1,id:""},$$slots:{default:[oe]},$$scope:{ctx:r}}});const y=[{name:"Custom columns"},ee(O)];let k={$$slots:{default:[be]},$$scope:{ctx:r}};for(let l=0;l<y.length;l+=1)k=L(k,y[l]);return b=new U({props:k}),{c(){$(e.$$.fragment),t=v(),$(n.$$.fragment),i=v(),$(o.$$.fragment),a=v(),$(b.$$.fragment)},m(l,d){u(e,l,d),h(l,t,d),u(n,l,d),h(l,i,d),u(o,l,d),h(l,a,d),u(b,l,d),m=!0},p(l,[d]){const S={};e.$set(S);const s={};d&3&&(s.$$scope={dirty:d,ctx:l}),n.$set(s);const c={};d&2&&(c.$$scope={dirty:d,ctx:l}),o.$set(c);const W={};d&2&&(W.$$scope={dirty:d,ctx:l}),b.$set(W)},i(l){m||(f(e.$$.fragment,l),f(n.$$.fragment,l),f(o.$$.fragment,l),f(b.$$.fragment,l),m=!0)},o(l){p(e.$$.fragment,l),p(n.$$.fragment,l),p(o.$$.fragment,l),p(b.$$.fragment,l),m=!1},d(l){l&&(g(t),g(i),g(a)),w(e,l),w(n,l),w(o,l),w(b,l)}}}class P extends R{constructor(e){super(),G(this,e,null,ve,J,{})}}P.__docgen={version:3,name:"Article.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const H=V(P,{meta:{title:"Layout/Article"},stories:{"tpl:default":{name:"default",template:!0,source:"<Article {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:`<Article id="article-story-basic">
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
</Article>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","customWellWidthsDocs","Article","Block","withComponentDocs","withStoryDocs"]}),ye=H.meta,We=["Default","CustomColumns"],Te=H.stories.Default,xe=H.stories.CustomColumns;export{xe as CustomColumns,Te as Default,We as __namedExportsOrder,ye as default};
//# sourceMappingURL=Article.stories-8235cc47.js.map
