import{S as I,i as S,s as w,c,m as p,t as f,a as u,d as $,q as _,o as A,f as v,h as k,j as g,n as D,k as y,l as N}from"./index-C9aKRT5A.js";import{g as T,a as x}from"./spread-CgU5AtxT.js";import{p as q,M as O,T as P,S as R,w as V}from"./collect-stories-ceFdpR5E.js";import{R as j,A as B}from"./ResponsiveAd-D2N0K2xq.js";import{B as E}from"./Block-C7biTRWl.js";import"./throttle-cOUaFLOV.js";import"./isObject-C3e4t58V.js";import"./isSymbol-Br3Fhm6g.js";import"./toNumber-BrygkUtK.js";const F=`Add programmatic ads inline on your page.

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
`;function U(d){let e,a,n,s,r,o,i,l;return i=new j({props:{desktopPlacementName:d[2]}}),{c(){e=_("div"),a=_("div"),a.textContent="Advertisement · Scroll to continue",n=A(),s=_("div"),r=_("div"),o=_("div"),c(i.$$.fragment),v(a,"class","ad-label svelte-1fg4mkm"),v(o,"class","svelte-1fg4mkm"),v(r,"class","ad-slot__inner svelte-1fg4mkm"),v(s,"class","ad-container svelte-1fg4mkm"),v(e,"class","ad-block svelte-1fg4mkm")},m(t,m){k(t,e,m),g(e,a),g(e,n),g(e,s),g(s,r),g(r,o),p(i,o,null),l=!0},p:D,i(t){l||(f(i.$$.fragment,t),l=!0)},o(t){u(i.$$.fragment,t),l=!1},d(t){t&&y(e),$(i)}}}function Y(d){let e,a;return e=new E({props:{id:d[0],class:"freestar-adslot "+d[1],$$slots:{default:[U]},$$scope:{ctx:d}}}),{c(){c(e.$$.fragment)},m(n,s){p(e,n,s),a=!0},p(n,[s]){const r={};s&1&&(r.id=n[0]),s&2&&(r.class="freestar-adslot "+n[1]),s&16&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){a||(f(e.$$.fragment,n),a=!0)},o(n){u(e.$$.fragment,n),a=!1},d(n){$(e,n)}}}function z(d,e,a){let{id:n=""}=e,{n:s=1}=e,{class:r="my-12"}=e;const o=`reuters_desktop_native_${s}`;return d.$$set=i=>{"id"in i&&a(0,n=i.id),"n"in i&&a(3,s=i.n),"class"in i&&a(1,r=i.class)},[n,r,o,s]}class b extends I{constructor(e){super(),S(this,e,z,Y,w,{id:0,n:3,class:1})}}b.__docgen={version:3,name:"InlineAd.svelte",data:[{keywords:[],visibility:"public",description:"Add an ID to target with SCSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Number of the inline ad in sequence. Use to add multiple inline ads to a page.",name:"n",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{visibility:"public",description:"Add a class to target with SCSS.",keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:"my-12"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function G(d){let e,a,n,s,r,o,i;return a=new B({}),s=new b({}),o=new b({}),{c(){e=_("div"),c(a.$$.fragment),n=A(),c(s.$$.fragment),r=A(),c(o.$$.fragment)},m(l,t){k(l,e,t),p(a,e,null),g(e,n),p(s,e,null),g(e,r),p(o,e,null),i=!0},p:D,i(l){i||(f(a.$$.fragment,l),f(s.$$.fragment,l),f(o.$$.fragment,l),i=!0)},o(l){u(a.$$.fragment,l),u(s.$$.fragment,l),u(o.$$.fragment,l),i=!1},d(l){l&&y(e),$(a),$(s),$(o)}}}function H(d){let e,a,n,s,r,o;const i=[{title:"Components/InlineAd"},{component:b},d[0]];let l={};for(let t=0;t<i.length;t+=1)l=N(l,i[t]);return e=new O({props:l}),n=new P({props:{$$slots:{default:[G]},$$scope:{ctx:d}}}),r=new R({props:{name:"Default"}}),{c(){c(e.$$.fragment),a=A(),c(n.$$.fragment),s=A(),c(r.$$.fragment)},m(t,m){p(e,t,m),k(t,a,m),p(n,t,m),k(t,s,m),p(r,t,m),o=!0},p(t,[m]){const M=m&1?T(i,[i[0],i[1],x(t[0])]):{};e.$set(M);const h={};m&2&&(h.$$scope={dirty:m,ctx:t}),n.$set(h)},i(t){o||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(r.$$.fragment,t),o=!0)},o(t){u(e.$$.fragment,t),u(n.$$.fragment,t),u(r.$$.fragment,t),o=!1},d(t){t&&(y(a),y(s)),$(e,t),$(n,t),$(r,t)}}}function J(d){return[{...V(F)}]}class K extends I{constructor(e){super(),S(this,e,J,H,w,{})}}const C=q(K,{meta:{title:"Components/InlineAd"},stories:{"tpl:default":{name:"default",template:!0,source:`<div>
  <AdScripts />
  <InlineAd />
  <InlineAd />
</div>`,hasArgs:!1},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Template","Story","Meta","adDocs","AdScripts","InlineAd","withComponentDocs"]}),ae=C.meta,ie=["Default"],re=C.stories.Default;export{re as Default,ie as __namedExportsOrder,ae as default};
