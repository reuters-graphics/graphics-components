import{S as V,i as X,s as Y,p as L,j as $,D as v,m as u,a as h,k as q,l as F,b as f,t as w,n as p,d as _,w as H,x as U,E as Z,z as C,M as A}from"./index-25af778d.js";import{p as O,M as ee,T as te,S as R}from"./collect-stories-cce06d4a.js";import{A as x}from"./Article-06c782e7.js";import{B}from"./Block-9c89ee1a.js";const G=`The \`Article\` component contains all the content of our story and also establishes the dimensions of our article well, the default central trunk of our page layout.

> 📌 In most cases, **you won't need to mess with the \`Article\` component** because it's already included in our rigs for you!

\`\`\`html
<script>
  import { Article } from '@reuters-graphics/graphics-components';
<\/script>

<article>
  <!-- The story stuff goes in here! -->
</article>
\`\`\`
`,J=`The \`Article\` component also creates several column dimensions inside our article well. The standard widths of columns follow a basic class scheme:

- \`narrower\` A bit narrower than narrow...
- \`narrow\` A bit narrower than the text column
- \`normal\` **The main width of the body text column**
- \`wide\` A bit wider than the text column
- \`wider\` A bit wider than wide...
- \`widest\` Edge-to-edge, but _excluding_ the left and right padding on \`Article\`
- \`fluid\` Fully edge-to-edge

(Check out the below demo in the "Canvas" tab to better see the wider differences.)

When combined with the \`Block\` component, you can set custom column widths by passing an object to the \`columnWidths\` prop with pixel values for the \`narrower\`, \`narrow\`, \`normal\`, \`wide\` and \`wider\` column widths.

> **For most pages, you shouldn't customise the column widths.** Other tools, like our AI templates, use our default column widths, so customising those widths here has downstream consequences for graphics made outside your code. The main exception is SREP stories.

\`\`\`html
<Article
  columnWidths={{ narrower: 310, narrow: 450, normal: 550, wide: 675, wider: 1400 }}
>
  <Block width='narrower' />
  <Block width='narrow' />
  <Block width='normal' />
  <Block width='wide' />
  <Block width='wider' />
  <Block width='widest' />
  <Block width='fluid' />
</Article>
\`\`\`

If you're not using our \`Block\` component, you can still inherit the column widths from \`Article\` to create your own custom container with the article well dimensions by using [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) like this:

\`\`\`html
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

\`\`\`html
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
`,K=(l,e={})=>{var i;return{parameters:{docs:{...(i=e==null?void 0:e.parameters)==null?void 0:i.docs,description:{story:l}}}}},N=(l,e={})=>{var i;return{parameters:{docs:{...(i=e==null?void 0:e.parameters)==null?void 0:i.docs,description:{component:l}}}}};function ne(l){let e,t;const n=[l[0]];let i={};for(let s=0;s<n.length;s+=1)i=L(i,n[s]);return e=new x({props:i}),{c(){$(e.$$.fragment)},m(s,d){u(e,s,d),t=!0},p(s,d){const b=d&1?q(n,[F(s[0])]):{};e.$set(b)},i(s){t||(f(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){p(e,s)}}}function oe(l){let e;return{c(){e=H("div"),e.innerHTML=`<div class="background-label svelte-1z127ee">Article container</div> 
      <div class="padding-label svelte-1z127ee"><span class="svelte-1z127ee">⇤</span>15px padding</div>`,U(e,"class","demo-container svelte-1z127ee")},m(t,n){h(t,e,n)},p:Z,d(t){t&&_(e)}}}function se(l){let e,t;return e=new x({props:{id:"article-story-basic",$$slots:{default:[oe]},$$scope:{ctx:l}}}),{c(){$(e.$$.fragment)},m(n,i){u(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(f(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){p(e,n)}}}function re(l){let e;return{c(){e=A("narrower")},m(t,n){h(t,e,n)},d(t){t&&_(e)}}}function le(l){let e;return{c(){e=A("narrow")},m(t,n){h(t,e,n)},d(t){t&&_(e)}}}function ie(l){let e;return{c(){e=A("normal")},m(t,n){h(t,e,n)},d(t){t&&_(e)}}}function ae(l){let e;return{c(){e=A("wide")},m(t,n){h(t,e,n)},d(t){t&&_(e)}}}function ce(l){let e;return{c(){e=A("wider")},m(t,n){h(t,e,n)},d(t){t&&_(e)}}}function de(l){let e;return{c(){e=A("widest")},m(t,n){h(t,e,n)},d(t){t&&_(e)}}}function me(l){let e;return{c(){e=A("fluid")},m(t,n){h(t,e,n)},d(t){t&&_(e)}}}function $e(l){let e,t,n,i,s,d,b,m,D,g,y,k,r,c,S;return t=new B({props:{id:"section-demo",width:"narrower",$$slots:{default:[re]},$$scope:{ctx:l}}}),i=new B({props:{id:"section-demo",width:"narrow",$$slots:{default:[le]},$$scope:{ctx:l}}}),d=new B({props:{id:"section-demo",$$slots:{default:[ie]},$$scope:{ctx:l}}}),m=new B({props:{id:"section-demo",width:"wide",$$slots:{default:[ae]},$$scope:{ctx:l}}}),g=new B({props:{id:"section-demo",width:"wider",$$slots:{default:[ce]},$$scope:{ctx:l}}}),k=new B({props:{id:"section-demo",width:"widest",$$slots:{default:[de]},$$scope:{ctx:l}}}),c=new B({props:{id:"section-demo",width:"fluid",$$slots:{default:[me]},$$scope:{ctx:l}}}),{c(){e=H("div"),$(t.$$.fragment),n=v(),$(i.$$.fragment),s=v(),$(d.$$.fragment),b=v(),$(m.$$.fragment),D=v(),$(g.$$.fragment),y=v(),$(k.$$.fragment),r=v(),$(c.$$.fragment),U(e,"class","article-boundaries")},m(o,a){h(o,e,a),u(t,e,null),C(e,n),u(i,e,null),C(e,s),u(d,e,null),C(e,b),u(m,e,null),C(e,D),u(g,e,null),C(e,y),u(k,e,null),C(e,r),u(c,e,null),S=!0},p(o,a){const W={};a&2&&(W.$$scope={dirty:a,ctx:o}),t.$set(W);const T={};a&2&&(T.$$scope={dirty:a,ctx:o}),i.$set(T);const I={};a&2&&(I.$$scope={dirty:a,ctx:o}),d.$set(I);const z={};a&2&&(z.$$scope={dirty:a,ctx:o}),m.$set(z);const M={};a&2&&(M.$$scope={dirty:a,ctx:o}),g.$set(M);const E={};a&2&&(E.$$scope={dirty:a,ctx:o}),k.$set(E);const j={};a&2&&(j.$$scope={dirty:a,ctx:o}),c.$set(j)},i(o){S||(f(t.$$.fragment,o),f(i.$$.fragment,o),f(d.$$.fragment,o),f(m.$$.fragment,o),f(g.$$.fragment,o),f(k.$$.fragment,o),f(c.$$.fragment,o),S=!0)},o(o){w(t.$$.fragment,o),w(i.$$.fragment,o),w(d.$$.fragment,o),w(m.$$.fragment,o),w(g.$$.fragment,o),w(k.$$.fragment,o),w(c.$$.fragment,o),S=!1},d(o){o&&_(e),p(t),p(i),p(d),p(m),p(g),p(k),p(c)}}}function ue(l){let e;return{c(){e=A("narrower*")},m(t,n){h(t,e,n)},d(t){t&&_(e)}}}function fe(l){let e;return{c(){e=A("narrow*")},m(t,n){h(t,e,n)},d(t){t&&_(e)}}}function we(l){let e;return{c(){e=A("normal*")},m(t,n){h(t,e,n)},d(t){t&&_(e)}}}function pe(l){let e;return{c(){e=A("wide*")},m(t,n){h(t,e,n)},d(t){t&&_(e)}}}function he(l){let e;return{c(){e=A("wider*")},m(t,n){h(t,e,n)},d(t){t&&_(e)}}}function _e(l){let e;return{c(){e=A("widest")},m(t,n){h(t,e,n)},d(t){t&&_(e)}}}function ge(l){let e;return{c(){e=A("fluid")},m(t,n){h(t,e,n)},d(t){t&&_(e)}}}function ke(l){let e,t,n,i,s,d,b,m,D,g,y,k,r,c,S;return t=new B({props:{id:"section-demo",width:"narrower",$$slots:{default:[ue]},$$scope:{ctx:l}}}),i=new B({props:{id:"section-demo",width:"narrow",$$slots:{default:[fe]},$$scope:{ctx:l}}}),d=new B({props:{id:"section-demo",$$slots:{default:[we]},$$scope:{ctx:l}}}),m=new B({props:{id:"section-demo",width:"wide",$$slots:{default:[pe]},$$scope:{ctx:l}}}),g=new B({props:{id:"section-demo",width:"wider",$$slots:{default:[he]},$$scope:{ctx:l}}}),k=new B({props:{id:"section-demo",width:"widest",$$slots:{default:[_e]},$$scope:{ctx:l}}}),c=new B({props:{id:"section-demo",width:"fluid",$$slots:{default:[ge]},$$scope:{ctx:l}}}),{c(){e=H("div"),$(t.$$.fragment),n=v(),$(i.$$.fragment),s=v(),$(d.$$.fragment),b=v(),$(m.$$.fragment),D=v(),$(g.$$.fragment),y=v(),$(k.$$.fragment),r=v(),$(c.$$.fragment),U(e,"class","article-boundaries custom")},m(o,a){h(o,e,a),u(t,e,null),C(e,n),u(i,e,null),C(e,s),u(d,e,null),C(e,b),u(m,e,null),C(e,D),u(g,e,null),C(e,y),u(k,e,null),C(e,r),u(c,e,null),S=!0},p(o,a){const W={};a&2&&(W.$$scope={dirty:a,ctx:o}),t.$set(W);const T={};a&2&&(T.$$scope={dirty:a,ctx:o}),i.$set(T);const I={};a&2&&(I.$$scope={dirty:a,ctx:o}),d.$set(I);const z={};a&2&&(z.$$scope={dirty:a,ctx:o}),m.$set(z);const M={};a&2&&(M.$$scope={dirty:a,ctx:o}),g.$set(M);const E={};a&2&&(E.$$scope={dirty:a,ctx:o}),k.$set(E);const j={};a&2&&(j.$$scope={dirty:a,ctx:o}),c.$set(j)},i(o){S||(f(t.$$.fragment,o),f(i.$$.fragment,o),f(d.$$.fragment,o),f(m.$$.fragment,o),f(g.$$.fragment,o),f(k.$$.fragment,o),f(c.$$.fragment,o),S=!0)},o(o){w(t.$$.fragment,o),w(i.$$.fragment,o),w(d.$$.fragment,o),w(m.$$.fragment,o),w(g.$$.fragment,o),w(k.$$.fragment,o),w(c.$$.fragment,o),S=!1},d(o){o&&_(e),p(t),p(i),p(d),p(m),p(g),p(k),p(c)}}}function be(l){let e,t,n,i;return e=new x({props:{id:"article-column-widths-demo",$$slots:{default:[$e]},$$scope:{ctx:l}}}),n=new x({props:{id:"article-column-widths-demo",columnWidths:{narrower:310,narrow:450,normal:550,wide:675,wider:1400},$$slots:{default:[ke]},$$scope:{ctx:l}}}),{c(){$(e.$$.fragment),t=v(),$(n.$$.fragment)},m(s,d){u(e,s,d),h(s,t,d),u(n,s,d),i=!0},p(s,d){const b={};d&2&&(b.$$scope={dirty:d,ctx:s}),e.$set(b);const m={};d&2&&(m.$$scope={dirty:d,ctx:s}),n.$set(m)},i(s){i||(f(e.$$.fragment,s),f(n.$$.fragment,s),i=!0)},o(s){w(e.$$.fragment,s),w(n.$$.fragment,s),i=!1},d(s){p(e,s),s&&_(t),p(n,s)}}}function ve(l){let e,t,n,i,s,d,b,m;const D=[{title:"Layout/Article"},{component:x},N(G)];let g={};for(let r=0;r<D.length;r+=1)g=L(g,D[r]);e=new ee({props:g}),n=new te({props:{$$slots:{default:[ne,({args:r})=>({0:r}),({args:r})=>r?1:0]},$$scope:{ctx:l}}}),s=new R({props:{name:"Default",args:{embedded:!1,id:""},$$slots:{default:[se]},$$scope:{ctx:l}}});const y=[{name:"Custom columns"},K(J)];let k={$$slots:{default:[be]},$$scope:{ctx:l}};for(let r=0;r<y.length;r+=1)k=L(k,y[r]);return b=new R({props:k}),{c(){$(e.$$.fragment),t=v(),$(n.$$.fragment),i=v(),$(s.$$.fragment),d=v(),$(b.$$.fragment)},m(r,c){u(e,r,c),h(r,t,c),u(n,r,c),h(r,i,c),u(s,r,c),h(r,d,c),u(b,r,c),m=!0},p(r,[c]){const S=c&0?q(D,[D[0],c&0&&{component:x},c&0&&F(N(G))]):{};e.$set(S);const o={};c&3&&(o.$$scope={dirty:c,ctx:r}),n.$set(o);const a={};c&2&&(a.$$scope={dirty:c,ctx:r}),s.$set(a);const W=c&0?q(y,[y[0],F(K(J))]):{};c&2&&(W.$$scope={dirty:c,ctx:r}),b.$set(W)},i(r){m||(f(e.$$.fragment,r),f(n.$$.fragment,r),f(s.$$.fragment,r),f(b.$$.fragment,r),m=!0)},o(r){w(e.$$.fragment,r),w(n.$$.fragment,r),w(s.$$.fragment,r),w(b.$$.fragment,r),m=!1},d(r){p(e,r),r&&_(t),p(n,r),r&&_(i),p(s,r),r&&_(d),p(b,r)}}}class Q extends V{constructor(e){super(),X(this,e,null,ve,Y,{})}}Q.__docgen={version:3,name:"Article.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const P=O(Q,{meta:{title:"Layout/Article"},stories:{"tpl:default":{storyId:"layout-article--default",name:"default",template:!0,source:"<Article {...args} />",hasArgs:!0},Default:{storyId:"layout-article--default",name:"Default",template:!1,source:`<Article id="article-story-basic">
  <div class="demo-container">
    <div class="background-label">Article container</div>
    <div class="padding-label"><span>⇤</span>15px padding</div>
  </div>
</Article>`,hasArgs:!1},CustomColumns:{storyId:"layout-article--custom-columns",name:"Custom columns",template:!1,source:`<Article id="article-column-widths-demo">
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
</Article>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","customWellWidthsDocs","Article","Block","withComponentDocs","withStoryDocs"]}),De=P.meta,ye=["Default","CustomColumns"],We=P.stories.Default,xe=P.stories.CustomColumns;export{xe as CustomColumns,We as Default,ye as __namedExportsOrder,De as default};
//# sourceMappingURL=Article.stories-b32e1f37.js.map
