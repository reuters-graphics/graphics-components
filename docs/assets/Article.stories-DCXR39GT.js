import{S as P,i as R,s as G,l as E,c as m,o as v,m as u,h,t as f,a as w,k as g,d as p,q as L,f as F,n as J,j as S,e as A}from"./index-C9aKRT5A.js";import{g as K,a as N}from"./spread-CgU5AtxT.js";import{p as Q,w as V,M as X,T as Y,S as O,a as Z}from"./collect-stories-ceFdpR5E.js";import{A as q}from"./Article-5DKLq1Pp.js";import{B}from"./Block-C7biTRWl.js";const ee=`The \`Article\` component contains all the content of our story and also establishes the dimensions of our article well, the default central trunk of our page layout.

> 📌 In most cases, **you won't need to mess with the \`Article\` component** because it's already included in our rigs for you!

\`\`\`svelte
<script>
  import { Article } from '@reuters-graphics/graphics-components';
<\/script>

<Article>
  <!-- The story stuff goes in here! -->
</Article>
\`\`\`
`,te=`The \`Article\` component also creates several column dimensions inside our article well. The standard widths of columns follow a basic class scheme:

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
`;function ne(l){let e,t;const n=[l[0]];let a={};for(let s=0;s<n.length;s+=1)a=E(a,n[s]);return e=new q({props:a}),{c(){m(e.$$.fragment)},m(s,c){u(e,s,c),t=!0},p(s,c){const b=c&1?K(n,[N(s[0])]):{};e.$set(b)},i(s){t||(f(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){p(e,s)}}}function oe(l){let e;return{c(){e=L("div"),e.innerHTML='<div class="background-label svelte-1wzc5ei">Article container</div> <div class="padding-label svelte-1wzc5ei"><span class="svelte-1wzc5ei">⇤</span>15px padding</div>',F(e,"class","demo-container svelte-1wzc5ei")},m(t,n){h(t,e,n)},p:J,d(t){t&&g(e)}}}function se(l){let e,t;return e=new q({props:{id:"article-story-basic",$$slots:{default:[oe]},$$scope:{ctx:l}}}),{c(){m(e.$$.fragment)},m(n,a){u(e,n,a),t=!0},p(n,a){const s={};a&2&&(s.$$scope={dirty:a,ctx:n}),e.$set(s)},i(n){t||(f(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){p(e,n)}}}function re(l){let e;return{c(){e=A("narrower")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function le(l){let e;return{c(){e=A("narrow")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ie(l){let e;return{c(){e=A("normal")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ae(l){let e;return{c(){e=A("wide")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ce(l){let e;return{c(){e=A("wider")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function de(l){let e;return{c(){e=A("widest")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function $e(l){let e;return{c(){e=A("fluid")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function me(l){let e,t,n,a,s,c,b,$,D,_,W,k,r,d,C;return t=new B({props:{id:"section-demo",width:"narrower",$$slots:{default:[re]},$$scope:{ctx:l}}}),a=new B({props:{id:"section-demo",width:"narrow",$$slots:{default:[le]},$$scope:{ctx:l}}}),c=new B({props:{id:"section-demo",$$slots:{default:[ie]},$$scope:{ctx:l}}}),$=new B({props:{id:"section-demo",width:"wide",$$slots:{default:[ae]},$$scope:{ctx:l}}}),_=new B({props:{id:"section-demo",width:"wider",$$slots:{default:[ce]},$$scope:{ctx:l}}}),k=new B({props:{id:"section-demo",width:"widest",$$slots:{default:[de]},$$scope:{ctx:l}}}),d=new B({props:{id:"section-demo",width:"fluid",$$slots:{default:[$e]},$$scope:{ctx:l}}}),{c(){e=L("div"),m(t.$$.fragment),n=v(),m(a.$$.fragment),s=v(),m(c.$$.fragment),b=v(),m($.$$.fragment),D=v(),m(_.$$.fragment),W=v(),m(k.$$.fragment),r=v(),m(d.$$.fragment),F(e,"class","article-boundaries")},m(o,i){h(o,e,i),u(t,e,null),S(e,n),u(a,e,null),S(e,s),u(c,e,null),S(e,b),u($,e,null),S(e,D),u(_,e,null),S(e,W),u(k,e,null),S(e,r),u(d,e,null),C=!0},p(o,i){const T={};i&2&&(T.$$scope={dirty:i,ctx:o}),t.$set(T);const x={};i&2&&(x.$$scope={dirty:i,ctx:o}),a.$set(x);const y={};i&2&&(y.$$scope={dirty:i,ctx:o}),c.$set(y);const z={};i&2&&(z.$$scope={dirty:i,ctx:o}),$.$set(z);const M={};i&2&&(M.$$scope={dirty:i,ctx:o}),_.$set(M);const I={};i&2&&(I.$$scope={dirty:i,ctx:o}),k.$set(I);const j={};i&2&&(j.$$scope={dirty:i,ctx:o}),d.$set(j)},i(o){C||(f(t.$$.fragment,o),f(a.$$.fragment,o),f(c.$$.fragment,o),f($.$$.fragment,o),f(_.$$.fragment,o),f(k.$$.fragment,o),f(d.$$.fragment,o),C=!0)},o(o){w(t.$$.fragment,o),w(a.$$.fragment,o),w(c.$$.fragment,o),w($.$$.fragment,o),w(_.$$.fragment,o),w(k.$$.fragment,o),w(d.$$.fragment,o),C=!1},d(o){o&&g(e),p(t),p(a),p(c),p($),p(_),p(k),p(d)}}}function ue(l){let e;return{c(){e=A("narrower*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function fe(l){let e;return{c(){e=A("narrow*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function we(l){let e;return{c(){e=A("normal*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function pe(l){let e;return{c(){e=A("wide*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function he(l){let e;return{c(){e=A("wider*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ge(l){let e;return{c(){e=A("widest")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function _e(l){let e;return{c(){e=A("fluid")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ke(l){let e,t,n,a,s,c,b,$,D,_,W,k,r,d,C;return t=new B({props:{id:"section-demo",width:"narrower",$$slots:{default:[ue]},$$scope:{ctx:l}}}),a=new B({props:{id:"section-demo",width:"narrow",$$slots:{default:[fe]},$$scope:{ctx:l}}}),c=new B({props:{id:"section-demo",$$slots:{default:[we]},$$scope:{ctx:l}}}),$=new B({props:{id:"section-demo",width:"wide",$$slots:{default:[pe]},$$scope:{ctx:l}}}),_=new B({props:{id:"section-demo",width:"wider",$$slots:{default:[he]},$$scope:{ctx:l}}}),k=new B({props:{id:"section-demo",width:"widest",$$slots:{default:[ge]},$$scope:{ctx:l}}}),d=new B({props:{id:"section-demo",width:"fluid",$$slots:{default:[_e]},$$scope:{ctx:l}}}),{c(){e=L("div"),m(t.$$.fragment),n=v(),m(a.$$.fragment),s=v(),m(c.$$.fragment),b=v(),m($.$$.fragment),D=v(),m(_.$$.fragment),W=v(),m(k.$$.fragment),r=v(),m(d.$$.fragment),F(e,"class","article-boundaries custom")},m(o,i){h(o,e,i),u(t,e,null),S(e,n),u(a,e,null),S(e,s),u(c,e,null),S(e,b),u($,e,null),S(e,D),u(_,e,null),S(e,W),u(k,e,null),S(e,r),u(d,e,null),C=!0},p(o,i){const T={};i&2&&(T.$$scope={dirty:i,ctx:o}),t.$set(T);const x={};i&2&&(x.$$scope={dirty:i,ctx:o}),a.$set(x);const y={};i&2&&(y.$$scope={dirty:i,ctx:o}),c.$set(y);const z={};i&2&&(z.$$scope={dirty:i,ctx:o}),$.$set(z);const M={};i&2&&(M.$$scope={dirty:i,ctx:o}),_.$set(M);const I={};i&2&&(I.$$scope={dirty:i,ctx:o}),k.$set(I);const j={};i&2&&(j.$$scope={dirty:i,ctx:o}),d.$set(j)},i(o){C||(f(t.$$.fragment,o),f(a.$$.fragment,o),f(c.$$.fragment,o),f($.$$.fragment,o),f(_.$$.fragment,o),f(k.$$.fragment,o),f(d.$$.fragment,o),C=!0)},o(o){w(t.$$.fragment,o),w(a.$$.fragment,o),w(c.$$.fragment,o),w($.$$.fragment,o),w(_.$$.fragment,o),w(k.$$.fragment,o),w(d.$$.fragment,o),C=!1},d(o){o&&g(e),p(t),p(a),p(c),p($),p(_),p(k),p(d)}}}function be(l){let e,t,n,a;return e=new q({props:{id:"article-column-widths-demo",$$slots:{default:[me]},$$scope:{ctx:l}}}),n=new q({props:{id:"article-column-widths-demo",columnWidths:{narrower:310,narrow:450,normal:550,wide:675,wider:1400},$$slots:{default:[ke]},$$scope:{ctx:l}}}),{c(){m(e.$$.fragment),t=v(),m(n.$$.fragment)},m(s,c){u(e,s,c),h(s,t,c),u(n,s,c),a=!0},p(s,c){const b={};c&2&&(b.$$scope={dirty:c,ctx:s}),e.$set(b);const $={};c&2&&($.$$scope={dirty:c,ctx:s}),n.$set($)},i(s){a||(f(e.$$.fragment,s),f(n.$$.fragment,s),a=!0)},o(s){w(e.$$.fragment,s),w(n.$$.fragment,s),a=!1},d(s){s&&g(t),p(e,s),p(n,s)}}}function ve(l){let e,t,n,a,s,c,b,$;const D=[{title:"Layout/Article"},{component:q},V(ee)];let _={};for(let r=0;r<D.length;r+=1)_=E(_,D[r]);e=new X({props:_}),n=new Y({props:{$$slots:{default:[ne,({args:r})=>({0:r}),({args:r})=>r?1:0]},$$scope:{ctx:l}}}),s=new O({props:{name:"Default",args:{embedded:!1,id:""},$$slots:{default:[se]},$$scope:{ctx:l}}});const W=[{name:"Custom columns"},Z(te)];let k={$$slots:{default:[be]},$$scope:{ctx:l}};for(let r=0;r<W.length;r+=1)k=E(k,W[r]);return b=new O({props:k}),{c(){m(e.$$.fragment),t=v(),m(n.$$.fragment),a=v(),m(s.$$.fragment),c=v(),m(b.$$.fragment)},m(r,d){u(e,r,d),h(r,t,d),u(n,r,d),h(r,a,d),u(s,r,d),h(r,c,d),u(b,r,d),$=!0},p(r,[d]){const C={};e.$set(C);const o={};d&3&&(o.$$scope={dirty:d,ctx:r}),n.$set(o);const i={};d&2&&(i.$$scope={dirty:d,ctx:r}),s.$set(i);const T={};d&2&&(T.$$scope={dirty:d,ctx:r}),b.$set(T)},i(r){$||(f(e.$$.fragment,r),f(n.$$.fragment,r),f(s.$$.fragment,r),f(b.$$.fragment,r),$=!0)},o(r){w(e.$$.fragment,r),w(n.$$.fragment,r),w(s.$$.fragment,r),w(b.$$.fragment,r),$=!1},d(r){r&&(g(t),g(a),g(c)),p(e,r),p(n,r),p(s,r),p(b,r)}}}class U extends P{constructor(e){super(),R(this,e,null,ve,G,{})}}U.__docgen={version:3,name:"Article.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const H=Q(U,{meta:{title:"Layout/Article"},stories:{"tpl:default":{name:"default",template:!0,source:"<Article {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:`<Article id="article-story-basic">
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
</Article>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","customWellWidthsDocs","Article","Block","withComponentDocs","withStoryDocs"]}),We=H.meta,Te=["Default","CustomColumns"],xe=H.stories.Default,ye=H.stories.CustomColumns;export{ye as CustomColumns,xe as Default,Te as __namedExportsOrder,We as default};
