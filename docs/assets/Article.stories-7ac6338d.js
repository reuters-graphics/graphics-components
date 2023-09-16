import{S as R,i as G,s as J,C as j,c as $,p as v,m as u,b as h,t as f,a as p,f as g,d as w,l as q,h as F,n as K,k as C,y as A}from"./index-2c1648fc.js";import{g as N,a as Q}from"./spread-8a54911c.js";import{p as V,M as X,T as Y,S as U}from"./collect-stories-640c7888.js";import{A as L}from"./Article-446669e0.js";import{B}from"./Block-d69850f9.js";const Z=`The \`Article\` component contains all the content of our story and also establishes the dimensions of our article well, the default central trunk of our page layout.

> 📌 In most cases, **you won't need to mess with the \`Article\` component** because it's already included in our rigs for you!

\`\`\`svelte
<script>
  import { Article } from '@reuters-graphics/graphics-components';
<\/script>

<article>
  <!-- The story stuff goes in here! -->
</article>
\`\`\`
`,O=`The \`Article\` component also creates several column dimensions inside our article well. The standard widths of columns follow a basic class scheme:

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
`,ee=(r,e={})=>{var i;return{parameters:{docs:{...(i=e==null?void 0:e.parameters)==null?void 0:i.docs,description:{story:r}}}}},te=(r,e={})=>{var i;return{parameters:{docs:{...(i=e==null?void 0:e.parameters)==null?void 0:i.docs,description:{component:r}}}}};function ne(r){let e,t;const n=[r[0]];let i={};for(let s=0;s<n.length;s+=1)i=j(i,n[s]);return e=new L({props:i}),{c(){$(e.$$.fragment)},m(s,c){u(e,s,c),t=!0},p(s,c){const b=c&1?N(n,[Q(s[0])]):{};e.$set(b)},i(s){t||(f(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){w(e,s)}}}function oe(r){let e;return{c(){e=q("div"),e.innerHTML='<div class="background-label svelte-1z127ee">Article container</div> <div class="padding-label svelte-1z127ee"><span class="svelte-1z127ee">⇤</span>15px padding</div>',F(e,"class","demo-container svelte-1z127ee")},m(t,n){h(t,e,n)},p:K,d(t){t&&g(e)}}}function se(r){let e,t;return e=new L({props:{id:"article-story-basic",$$slots:{default:[oe]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment)},m(n,i){u(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(f(e.$$.fragment,n),t=!0)},o(n){p(e.$$.fragment,n),t=!1},d(n){w(e,n)}}}function re(r){let e;return{c(){e=A("narrower")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function le(r){let e;return{c(){e=A("narrow")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ie(r){let e;return{c(){e=A("normal")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ae(r){let e;return{c(){e=A("wide")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ce(r){let e;return{c(){e=A("wider")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function de(r){let e;return{c(){e=A("widest")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function me(r){let e;return{c(){e=A("fluid")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function $e(r){let e,t,n,i,s,c,b,m,S,_,D,k,l,d,y;return t=new B({props:{id:"section-demo",width:"narrower",$$slots:{default:[re]},$$scope:{ctx:r}}}),i=new B({props:{id:"section-demo",width:"narrow",$$slots:{default:[le]},$$scope:{ctx:r}}}),c=new B({props:{id:"section-demo",$$slots:{default:[ie]},$$scope:{ctx:r}}}),m=new B({props:{id:"section-demo",width:"wide",$$slots:{default:[ae]},$$scope:{ctx:r}}}),_=new B({props:{id:"section-demo",width:"wider",$$slots:{default:[ce]},$$scope:{ctx:r}}}),k=new B({props:{id:"section-demo",width:"widest",$$slots:{default:[de]},$$scope:{ctx:r}}}),d=new B({props:{id:"section-demo",width:"fluid",$$slots:{default:[me]},$$scope:{ctx:r}}}),{c(){e=q("div"),$(t.$$.fragment),n=v(),$(i.$$.fragment),s=v(),$(c.$$.fragment),b=v(),$(m.$$.fragment),S=v(),$(_.$$.fragment),D=v(),$(k.$$.fragment),l=v(),$(d.$$.fragment),F(e,"class","article-boundaries")},m(o,a){h(o,e,a),u(t,e,null),C(e,n),u(i,e,null),C(e,s),u(c,e,null),C(e,b),u(m,e,null),C(e,S),u(_,e,null),C(e,D),u(k,e,null),C(e,l),u(d,e,null),y=!0},p(o,a){const W={};a&2&&(W.$$scope={dirty:a,ctx:o}),t.$set(W);const T={};a&2&&(T.$$scope={dirty:a,ctx:o}),i.$set(T);const x={};a&2&&(x.$$scope={dirty:a,ctx:o}),c.$set(x);const I={};a&2&&(I.$$scope={dirty:a,ctx:o}),m.$set(I);const z={};a&2&&(z.$$scope={dirty:a,ctx:o}),_.$set(z);const M={};a&2&&(M.$$scope={dirty:a,ctx:o}),k.$set(M);const E={};a&2&&(E.$$scope={dirty:a,ctx:o}),d.$set(E)},i(o){y||(f(t.$$.fragment,o),f(i.$$.fragment,o),f(c.$$.fragment,o),f(m.$$.fragment,o),f(_.$$.fragment,o),f(k.$$.fragment,o),f(d.$$.fragment,o),y=!0)},o(o){p(t.$$.fragment,o),p(i.$$.fragment,o),p(c.$$.fragment,o),p(m.$$.fragment,o),p(_.$$.fragment,o),p(k.$$.fragment,o),p(d.$$.fragment,o),y=!1},d(o){o&&g(e),w(t),w(i),w(c),w(m),w(_),w(k),w(d)}}}function ue(r){let e;return{c(){e=A("narrower*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function fe(r){let e;return{c(){e=A("narrow*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function pe(r){let e;return{c(){e=A("normal*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function we(r){let e;return{c(){e=A("wide*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function he(r){let e;return{c(){e=A("wider*")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ge(r){let e;return{c(){e=A("widest")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function _e(r){let e;return{c(){e=A("fluid")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function ke(r){let e,t,n,i,s,c,b,m,S,_,D,k,l,d,y;return t=new B({props:{id:"section-demo",width:"narrower",$$slots:{default:[ue]},$$scope:{ctx:r}}}),i=new B({props:{id:"section-demo",width:"narrow",$$slots:{default:[fe]},$$scope:{ctx:r}}}),c=new B({props:{id:"section-demo",$$slots:{default:[pe]},$$scope:{ctx:r}}}),m=new B({props:{id:"section-demo",width:"wide",$$slots:{default:[we]},$$scope:{ctx:r}}}),_=new B({props:{id:"section-demo",width:"wider",$$slots:{default:[he]},$$scope:{ctx:r}}}),k=new B({props:{id:"section-demo",width:"widest",$$slots:{default:[ge]},$$scope:{ctx:r}}}),d=new B({props:{id:"section-demo",width:"fluid",$$slots:{default:[_e]},$$scope:{ctx:r}}}),{c(){e=q("div"),$(t.$$.fragment),n=v(),$(i.$$.fragment),s=v(),$(c.$$.fragment),b=v(),$(m.$$.fragment),S=v(),$(_.$$.fragment),D=v(),$(k.$$.fragment),l=v(),$(d.$$.fragment),F(e,"class","article-boundaries custom")},m(o,a){h(o,e,a),u(t,e,null),C(e,n),u(i,e,null),C(e,s),u(c,e,null),C(e,b),u(m,e,null),C(e,S),u(_,e,null),C(e,D),u(k,e,null),C(e,l),u(d,e,null),y=!0},p(o,a){const W={};a&2&&(W.$$scope={dirty:a,ctx:o}),t.$set(W);const T={};a&2&&(T.$$scope={dirty:a,ctx:o}),i.$set(T);const x={};a&2&&(x.$$scope={dirty:a,ctx:o}),c.$set(x);const I={};a&2&&(I.$$scope={dirty:a,ctx:o}),m.$set(I);const z={};a&2&&(z.$$scope={dirty:a,ctx:o}),_.$set(z);const M={};a&2&&(M.$$scope={dirty:a,ctx:o}),k.$set(M);const E={};a&2&&(E.$$scope={dirty:a,ctx:o}),d.$set(E)},i(o){y||(f(t.$$.fragment,o),f(i.$$.fragment,o),f(c.$$.fragment,o),f(m.$$.fragment,o),f(_.$$.fragment,o),f(k.$$.fragment,o),f(d.$$.fragment,o),y=!0)},o(o){p(t.$$.fragment,o),p(i.$$.fragment,o),p(c.$$.fragment,o),p(m.$$.fragment,o),p(_.$$.fragment,o),p(k.$$.fragment,o),p(d.$$.fragment,o),y=!1},d(o){o&&g(e),w(t),w(i),w(c),w(m),w(_),w(k),w(d)}}}function be(r){let e,t,n,i;return e=new L({props:{id:"article-column-widths-demo",$$slots:{default:[$e]},$$scope:{ctx:r}}}),n=new L({props:{id:"article-column-widths-demo",columnWidths:{narrower:310,narrow:450,normal:550,wide:675,wider:1400},$$slots:{default:[ke]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment),t=v(),$(n.$$.fragment)},m(s,c){u(e,s,c),h(s,t,c),u(n,s,c),i=!0},p(s,c){const b={};c&2&&(b.$$scope={dirty:c,ctx:s}),e.$set(b);const m={};c&2&&(m.$$scope={dirty:c,ctx:s}),n.$set(m)},i(s){i||(f(e.$$.fragment,s),f(n.$$.fragment,s),i=!0)},o(s){p(e.$$.fragment,s),p(n.$$.fragment,s),i=!1},d(s){s&&g(t),w(e,s),w(n,s)}}}function ve(r){let e,t,n,i,s,c,b,m;const S=[{title:"Layout/Article"},{component:L},te(Z)];let _={};for(let l=0;l<S.length;l+=1)_=j(_,S[l]);e=new X({props:_}),n=new Y({props:{$$slots:{default:[ne,({args:l})=>({0:l}),({args:l})=>l?1:0]},$$scope:{ctx:r}}}),s=new U({props:{name:"Default",args:{embedded:!1,id:""},$$slots:{default:[se]},$$scope:{ctx:r}}});const D=[{name:"Custom columns"},ee(O)];let k={$$slots:{default:[be]},$$scope:{ctx:r}};for(let l=0;l<D.length;l+=1)k=j(k,D[l]);return b=new U({props:k}),{c(){$(e.$$.fragment),t=v(),$(n.$$.fragment),i=v(),$(s.$$.fragment),c=v(),$(b.$$.fragment)},m(l,d){u(e,l,d),h(l,t,d),u(n,l,d),h(l,i,d),u(s,l,d),h(l,c,d),u(b,l,d),m=!0},p(l,[d]){const y={};e.$set(y);const o={};d&3&&(o.$$scope={dirty:d,ctx:l}),n.$set(o);const a={};d&2&&(a.$$scope={dirty:d,ctx:l}),s.$set(a);const W={};d&2&&(W.$$scope={dirty:d,ctx:l}),b.$set(W)},i(l){m||(f(e.$$.fragment,l),f(n.$$.fragment,l),f(s.$$.fragment,l),f(b.$$.fragment,l),m=!0)},o(l){p(e.$$.fragment,l),p(n.$$.fragment,l),p(s.$$.fragment,l),p(b.$$.fragment,l),m=!1},d(l){l&&(g(t),g(i),g(c)),w(e,l),w(n,l),w(s,l),w(b,l)}}}class P extends R{constructor(e){super(),G(this,e,null,ve,J,{})}}P.__docgen={version:3,name:"Article.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const H=V(P,{meta:{title:"Layout/Article"},stories:{"tpl:default":{storyId:"layout-article--default",name:"default",template:!0,source:"<Article {...args} />",hasArgs:!0},Default:{storyId:"layout-article--default",name:"Default",template:!1,source:`<Article id="article-story-basic">
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
</Article>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","customWellWidthsDocs","Article","Block","withComponentDocs","withStoryDocs"]}),De=H.meta,We=["Default","CustomColumns"],Te=H.stories.Default,xe=H.stories.CustomColumns;export{xe as CustomColumns,Te as Default,We as __namedExportsOrder,De as default};
//# sourceMappingURL=Article.stories-7ac6338d.js.map
