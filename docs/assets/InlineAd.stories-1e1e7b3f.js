import{S as I,i as S,s as w,g as p,m as c,t as f,h as u,j as g,o as _,z as A,b as v,d as y,e as $,n as C,f as k,C as N}from"./index-85f88930.js";import{g as T,a as x}from"./spread-8a54911c.js";import{p as q,M as O,T as P,S as R}from"./collect-stories-fa95313f.js";import{R as V,A as j}from"./ResponsiveAd-d4d27ac4.js";import{B}from"./Block-d1b8152c.js";import{w as E}from"./withParams-47e2ab71.js";import"./throttle-dfed7c30.js";import"./isObject-32699ff3.js";import"./now-bd49f550.js";import"./isSymbol-50749e90.js";const z=`Add programmatic ads inline on your page.

> **IMPORTANT!** Make sure ads are only used on dotcom pages, never on embeds.

\`\`\`svelte
<!-- +page.svelte -->
<script>
  import { AdScripts } from '@reuters-graphics/graphics-components';
<\/script>

<!-- Include AdScripts only ONCE per page for any type of ad -->
<AdScripts />
\`\`\`

\`\`\`svelte
<!-- App.svelte -->
<script>
  import { InlineAd } from '@reuters-graphics/graphics-components';

  export let embedded = false;
<\/script>

{#each content.blocks as block}
  <!-- ... -->

  {#if block.Type === 'inline-ad'}
    <!-- Check if in an embed context! -->
    {#if !embedded}
      <InlineAd />
    {/if}
  {/if}

  <!-- ... -->
{/each}
\`\`\`

You may add **up to three** inline ads per page, but must set the \`n\` prop on multiple ads in sequential order, 1 - 3.

\`\`\`svelte
<!-- First inline ad on the page -->
<InlineAd n="{1}" />
<!-- ... second ... -->
<InlineAd n="{2}" />
<!-- ... third and final. -->
<InlineAd n="{3}" />
\`\`\`
`;function F(d){let e,a,n,s,r,o,i,l;return i=new V({props:{desktopPlacementName:d[2]}}),{c(){e=_("div"),a=_("div"),a.textContent="Advertisement · Scroll to continue",n=A(),s=_("div"),r=_("div"),o=_("div"),p(i.$$.fragment),v(a,"class","ad-label svelte-1fg4mkm"),v(o,"class","svelte-1fg4mkm"),v(r,"class","ad-slot__inner svelte-1fg4mkm"),v(s,"class","ad-container svelte-1fg4mkm"),v(e,"class","ad-block svelte-1fg4mkm")},m(t,m){y(t,e,m),$(e,a),$(e,n),$(e,s),$(s,r),$(r,o),c(i,o,null),l=!0},p:C,i(t){l||(f(i.$$.fragment,t),l=!0)},o(t){u(i.$$.fragment,t),l=!1},d(t){t&&k(e),g(i)}}}function U(d){let e,a;return e=new B({props:{id:d[0],class:"freestar-adslot "+d[1],$$slots:{default:[F]},$$scope:{ctx:d}}}),{c(){p(e.$$.fragment)},m(n,s){c(e,n,s),a=!0},p(n,[s]){const r={};s&1&&(r.id=n[0]),s&2&&(r.class="freestar-adslot "+n[1]),s&16&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){a||(f(e.$$.fragment,n),a=!0)},o(n){u(e.$$.fragment,n),a=!1},d(n){g(e,n)}}}function Y(d,e,a){let{id:n=""}=e,{n:s=1}=e,{class:r="my-12"}=e;const o=`reuters_desktop_native_${s}`;return d.$$set=i=>{"id"in i&&a(0,n=i.id),"n"in i&&a(3,s=i.n),"class"in i&&a(1,r=i.class)},[n,r,o,s]}class b extends I{constructor(e){super(),S(this,e,Y,U,w,{id:0,n:3,class:1})}}b.__docgen={version:3,name:"InlineAd.svelte",data:[{keywords:[],visibility:"public",description:"Add an ID to target with SCSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Number of the inline ad in sequence. Use to add multiple inline ads to a page.",name:"n",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{visibility:"public",description:"Add a class to target with SCSS.",keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:"my-12"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function G(d){let e,a,n,s,r,o,i;return a=new j({}),s=new b({}),o=new b({}),{c(){e=_("div"),p(a.$$.fragment),n=A(),p(s.$$.fragment),r=A(),p(o.$$.fragment)},m(l,t){y(l,e,t),c(a,e,null),$(e,n),c(s,e,null),$(e,r),c(o,e,null),i=!0},p:C,i(l){i||(f(a.$$.fragment,l),f(s.$$.fragment,l),f(o.$$.fragment,l),i=!0)},o(l){u(a.$$.fragment,l),u(s.$$.fragment,l),u(o.$$.fragment,l),i=!1},d(l){l&&k(e),g(a),g(s),g(o)}}}function H(d){let e,a,n,s,r,o;const i=[{title:"Components/InlineAd"},d[0]];let l={};for(let t=0;t<i.length;t+=1)l=N(l,i[t]);return e=new O({props:l}),n=new P({props:{$$slots:{default:[G,({args:t})=>({1:t}),({args:t})=>t?2:0]},$$scope:{ctx:d}}}),r=new R({props:{name:"Default"}}),{c(){p(e.$$.fragment),a=A(),p(n.$$.fragment),s=A(),p(r.$$.fragment)},m(t,m){c(e,t,m),y(t,a,m),c(n,t,m),y(t,s,m),c(r,t,m),o=!0},p(t,[m]){const M=m&1?T(i,[i[0],x(t[0])]):{};e.$set(M);const h={};m&4&&(h.$$scope={dirty:m,ctx:t}),n.$set(h)},i(t){o||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(r.$$.fragment,t),o=!0)},o(t){u(e.$$.fragment,t),u(n.$$.fragment,t),u(r.$$.fragment,t),o=!1},d(t){t&&(k(a),k(s)),g(e,t),g(n,t),g(r,t)}}}function J(d){return[{title:"Components/InlineAd",component:b,...E(z)}]}class K extends I{constructor(e){super(),S(this,e,J,H,w,{})}}const D=q(K,{meta:{title:"Components/InlineAd"},stories:{"tpl:default":{name:"default",template:!0,source:`<div>
  <AdScripts />
  <InlineAd />
  <InlineAd />
</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","adDocs","AdScripts","InlineAd","withComponentDocs"]}),ie=D.meta,re=["Default"],le=D.stories.Default;export{le as Default,re as __namedExportsOrder,ie as default};
//# sourceMappingURL=InlineAd.stories-1e1e7b3f.js.map
