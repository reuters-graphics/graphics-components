import{S as ee,i as ne,s as te,p as I,j as d,D,m as u,a as c,k as T,l as C,b as f,t as h,n as $,d as p,w as _,x as i,E as y,M,z as k,Q as se}from"./index-25af778d.js";import{p as ae,M as oe,T as le,S as B}from"./collect-stories-cce06d4a.js";import{H as v}from"./Headline-3a2c7ebf.js";import{w as Q,a as H}from"./withParams-90715500.js";import"./Block-9c89ee1a.js";import"./marked.esm-76161808.js";const F=`Reuters Graphics headline

\`\`\`html
<script>
  import { Headline } from '@reuters-graphics/graphics-components';
<\/script>

<Headline
  hed="{'Reuters Graphics Interactive'}"
  dek="{'The beginning of a beautiful page'}"
  section="{'Global news'}"
/>
\`\`\`
`,K=`Add a byline and dateline with \`byline\` and \`dateline\` named slots.

\`\`\`html
<script>
  import { Headline } from '@reuters-graphics/graphics-components';
<\/script>

<Headline
  hed="{'Reuters Graphics Interactive'}"
  dek="{'The beginning of a beautiful page'}"
  section="{'Global news'}"
>
  <!-- Use named slots to add a byline... -->
  <span slot="byline">By <strong>Peppa Pig</strong></span>
  <!-- ...and a dateline. -->
  <span slot="dateline">Published Jan. 1, 2020</span>
</Headline>
\`\`\`
`,V=`Use the \`hed\` and/or \`dek\` named slots to override those elements with completely custom markup.

\`\`\`html
<script>
  import { Headline } from '@reuters-graphics/graphics-components';
<\/script>

<Headline>
  <h1 slot="hed" class="custom-hed">
    <span class="small block">The secret to</span>
    “The Nutcracker's”
    <span class="small block">success</span>
  </h1>
  <p slot="dek" class="custom-dek">
    How “The Nutcracker” ballet became an
    <span class="highlight">American holday staple</span>and a financial pillar
    of ballet companies across the country
  </p>
</Headline>

<style lang="scss">
  h1 {
    span.block {
      display: block;
      &.small {
        font-size: 1.4rem;
      }
    }
  }
  p.custom-dek {
    span {
      background-color: rgb(255, 255, 154);
      padding: 2px 4px;
      margin: 0 4px;
      font-weight: 600;
    }
  }
</style>
\`\`\`
`,X=`Add a crown image in the \`crown\` named slot and override the headline in the \`hed\` named slot.

\`\`\`html
<script>
  import { Headline } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths';
<\/script>

<Headline>
  <!-- Add a crown -->
  <img slot="crown" src="{\`\${assets}/images/crown.png\`}" />
  <!-- Override the hed with a named slot -->
  <h2 slot="hed" class="spaced font-serif">Europa</h2>
  <span slot="dateline">Published Jan. 1, 2020</span>
</Headline>
\`\`\`
`,re=""+new URL("crown-7a9383fa.png",import.meta.url).href;function ie(r){let e,s;const n=[r[0]];let o={};for(let a=0;a<n.length;a+=1)o=I(o,n[a]);return e=new v({props:o}),{c(){d(e.$$.fragment)},m(a,m){u(e,a,m),s=!0},p(a,m){const g=m&1?T(n,[C(a[0])]):{};e.$set(g)},i(a){s||(f(e.$$.fragment,a),s=!0)},o(a){h(e.$$.fragment,a),s=!1},d(a){$(e,a)}}}function ce(r){let e;return{c(){e=_("span"),e.innerHTML="By <strong>Peppa Pig</strong>",i(e,"slot","byline")},m(s,n){c(s,e,n)},p:y,d(s){s&&p(e)}}}function pe(r){let e,s,n,o;return{c(){e=_("span"),s=M("Published "),n=_("time"),o=M("Jan. 1, 2020"),i(n,"datetime",new Date("2020-01-01").toISOString()),i(e,"slot","dateline")},m(a,m){c(a,e,m),k(e,s),k(e,n),k(n,o)},p:y,d(a){a&&p(e)}}}function me(r){let e,s;return e=new v({props:{hed:"Reuters Graphics Interactive",dek:"The beginning of a beautiful page",section:"Global news",$$slots:{dateline:[pe],byline:[ce]},$$scope:{ctx:r}}}),{c(){d(e.$$.fragment)},m(n,o){u(e,n,o),s=!0},p(n,o){const a={};o&2&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){s||(f(e.$$.fragment,n),s=!0)},o(n){h(e.$$.fragment,n),s=!1},d(n){$(e,n)}}}function de(r){let e;return{c(){e=_("h1"),e.innerHTML=`<span class="small svelte-1lbnlx4">The secret to</span>
      “The Nutcracker&#39;s”
      <span class="small svelte-1lbnlx4">success</span>`,i(e,"class","custom-hed svelte-1lbnlx4"),i(e,"slot","hed")},m(s,n){c(s,e,n)},p:y,d(s){s&&p(e)}}}function ue(r){let e;return{c(){e=_("p"),e.innerHTML='How “The Nutcracker” ballet became an <span class="svelte-1lbnlx4">American holday staple</span>and a financial pillar of ballet companies across the country',i(e,"class","custom-dek svelte-1lbnlx4"),i(e,"slot","dek")},m(s,n){c(s,e,n)},p:y,d(s){s&&p(e)}}}function fe(r){let e,s;return e=new v({props:{$$slots:{dek:[ue],hed:[de]},$$scope:{ctx:r}}}),{c(){d(e.$$.fragment)},m(n,o){u(e,n,o),s=!0},p(n,o){const a={};o&2&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){s||(f(e.$$.fragment,n),s=!0)},o(n){h(e.$$.fragment,n),s=!1},d(n){$(e,n)}}}function he(r){let e,s;return{c(){e=_("img"),i(e,"slot","crown"),se(e.src,s=re)||i(e,"src",s),i(e,"alt","Illustration of Europe")},m(n,o){c(n,e,o)},p:y,d(n){n&&p(e)}}}function $e(r){let e;return{c(){e=_("h1"),e.textContent="Europa",i(e,"slot","hed"),i(e,"class","spaced font-serif")},m(s,n){c(s,e,n)},p:y,d(s){s&&p(e)}}}function ge(r){let e,s,n,o;return{c(){e=_("span"),s=M("Published "),n=_("time"),o=M("Jan. 1, 2020"),i(n,"datetime",new Date("2020-01-01").toISOString()),i(e,"slot","dateline")},m(a,m){c(a,e,m),k(e,s),k(e,n),k(n,o)},p:y,d(a){a&&p(e)}}}function _e(r){let e,s;return e=new v({props:{$$slots:{dateline:[ge],hed:[$e],crown:[he]},$$scope:{ctx:r}}}),{c(){d(e.$$.fragment)},m(n,o){u(e,n,o),s=!0},p(n,o){const a={};o&2&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){s||(f(e.$$.fragment,n),s=!0)},o(n){h(e.$$.fragment,n),s=!1},d(n){$(e,n)}}}function we(r){let e,s,n,o,a,m,g,E,w,N,b,x;const W=[{title:"Components/Headline"},{component:v},Q(F)];let O={};for(let t=0;t<W.length;t+=1)O=I(O,W[t]);e=new oe({props:O}),n=new le({props:{$$slots:{default:[ie,({args:t})=>({0:t}),({args:t})=>t?1:0]},$$scope:{ctx:r}}}),a=new B({props:{name:"Default",args:{section:"World News",hed:"Reuters Graphics interactive"}}});const A=[{name:"With byline"},H(K)];let R={$$slots:{default:[me]},$$scope:{ctx:r}};for(let t=0;t<A.length;t+=1)R=I(R,A[t]);g=new B({props:R});const P=[{name:"Custom hed"},H(V)];let J={$$slots:{default:[fe]},$$scope:{ctx:r}};for(let t=0;t<P.length;t+=1)J=I(J,P[t]);w=new B({props:J});const G=[{name:"With crown"},H(X)];let L={$$slots:{default:[_e]},$$scope:{ctx:r}};for(let t=0;t<G.length;t+=1)L=I(L,G[t]);return b=new B({props:L}),{c(){d(e.$$.fragment),s=D(),d(n.$$.fragment),o=D(),d(a.$$.fragment),m=D(),d(g.$$.fragment),E=D(),d(w.$$.fragment),N=D(),d(b.$$.fragment)},m(t,l){u(e,t,l),c(t,s,l),u(n,t,l),c(t,o,l),u(a,t,l),c(t,m,l),u(g,t,l),c(t,E,l),u(w,t,l),c(t,N,l),u(b,t,l),x=!0},p(t,[l]){const Z=l&0?T(W,[W[0],l&0&&{component:v},l&0&&C(Q(F))]):{};e.$set(Z);const U={};l&3&&(U.$$scope={dirty:l,ctx:t}),n.$set(U);const j=l&0?T(A,[A[0],C(H(K))]):{};l&2&&(j.$$scope={dirty:l,ctx:t}),g.$set(j);const q=l&0?T(P,[P[0],C(H(V))]):{};l&2&&(q.$$scope={dirty:l,ctx:t}),w.$set(q);const z=l&0?T(G,[G[0],C(H(X))]):{};l&2&&(z.$$scope={dirty:l,ctx:t}),b.$set(z)},i(t){x||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(a.$$.fragment,t),f(g.$$.fragment,t),f(w.$$.fragment,t),f(b.$$.fragment,t),x=!0)},o(t){h(e.$$.fragment,t),h(n.$$.fragment,t),h(a.$$.fragment,t),h(g.$$.fragment,t),h(w.$$.fragment,t),h(b.$$.fragment,t),x=!1},d(t){$(e,t),t&&p(s),$(n,t),t&&p(o),$(a,t),t&&p(m),$(g,t),t&&p(E),$(w,t),t&&p(N),$(b,t)}}}class Y extends ee{constructor(e){super(),ne(this,e,null,we,te,{})}}Y.__docgen={version:3,name:"Headline.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const S=ae(Y,{meta:{title:"Components/Headline"},stories:{"tpl:default":{storyId:"components-headline--default",name:"default",template:!0,source:"<Headline {...args} />",hasArgs:!0},Default:{storyId:"components-headline--default",name:"Default",template:!1,hasArgs:!1},WithByline:{storyId:"components-headline--with-byline",name:"With byline",template:!1,source:`<Headline
  hed="{'Reuters Graphics Interactive'}"
  dek="{'The beginning of a beautiful page'}"
  section="{'Global news'}"
>
  <!-- Use named slots to add a byline... -->
  <span slot="byline">By <strong>Peppa Pig</strong></span>
  <!-- ...and a dateline. -->
  <span slot="dateline"
    >Published <time datetime="{new Date('2020-01-01').toISOString()}"
      >Jan. 1, 2020</time
    ></span
  >
</Headline>`,hasArgs:!1},CustomHed:{storyId:"components-headline--custom-hed",name:"Custom hed",template:!1,source:`<Headline>
  <h1 class="custom-hed" slot="hed">
    <span class="small">The secret to</span>
    “The Nutcracker's”
    <span class="small">success</span>
  </h1>
  <p class="custom-dek" slot="dek">
    How “The Nutcracker” ballet became an <span>American holday staple</span
    >and a financial pillar of ballet companies across the country
  </p>
</Headline>`,hasArgs:!1},WithCrown:{storyId:"components-headline--with-crown",name:"With crown",template:!1,source:`<Headline>
  <!-- Add a crown -->
  <img slot="crown" src="{crownImgSrc}" alt="Illustration of Europe" />
  <!-- Override the hed with a named slot -->
  <h1 slot="hed" class="spaced font-serif">Europa</h1>
  <span slot="dateline"
    >Published <time datetime="{new Date('2020-01-01').toISOString()}"
      >Jan. 1, 2020</time
    ></span
  >
</Headline>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","withBylineDocs","customHedDocs","withCrownDocs","crownImgSrc","Headline","withComponentDocs","withStoryDocs"]}),Ie=S.meta,Te=["Default","WithByline","CustomHed","WithCrown"],Ce=S.stories.Default,Se=S.stories.WithByline,xe=S.stories.CustomHed,We=S.stories.WithCrown;export{xe as CustomHed,Ce as Default,Se as WithByline,We as WithCrown,Te as __namedExportsOrder,Ie as default};
//# sourceMappingURL=Headline.stories-62f04904.js.map
