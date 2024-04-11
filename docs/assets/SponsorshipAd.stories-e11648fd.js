import{S as w,i as k,s as D,g as m,m as c,t as f,h as u,j as $,l as g,y as v,b as h,d as S,e as _,n as C,f as A,C as z}from"./index-99a30af8.js";import{g as I,a as N}from"./spread-8a54911c.js";import{p as R,M as x,T as O,S as j}from"./collect-stories-1e0d20c7.js";import{R as B,A as E}from"./ResponsiveAd-034dbb7c.js";import{B as L}from"./Block-a09d61d3.js";import{w as P}from"./withParams-47e2ab71.js";import"./throttle-dfed7c30.js";import"./isObject-32699ff3.js";import"./now-bd49f550.js";import"./isSymbol-50749e90.js";const V=`Add a sponsorship ad to your page.

> **IMPORTANT!** Make sure ads are only used on dotcom pages, never on embeds.

\`\`\`svelte
<script>
  import {
    SponsorshipAd,
    AdScripts,
  } from '@reuters-graphics/graphics-components';
<\/script>

<!-- ALWAYS check if in an embed context! -->
{#if !embedded}
  <!-- Include AdScripts only ONCE per page -->
  <AdScripts />
{/if}

<!-- ... -->

{#if !embedded}
  <SponsorshipAd />
{/if}
\`\`\`
`;function q(i){let e,a,s,o,n,r,p,d;return p=new B({props:{desktopPlacementName:W}}),{c(){e=g("div"),a=g("div"),a.innerHTML="<div>Today&#39;s Sponsor</div>",s=v(),o=g("div"),n=g("div"),r=g("div"),m(p.$$.fragment),h(a,"class","ad-label svelte-1pz1lem"),h(r,"class","svelte-1pz1lem"),h(n,"class","ad-slot__inner svelte-1pz1lem"),h(o,"class","ad-container svelte-1pz1lem"),h(e,"class","ad-block svelte-1pz1lem")},m(t,l){S(t,e,l),_(e,a),_(e,s),_(e,o),_(o,n),_(n,r),c(p,r,null),d=!0},p:C,i(t){d||(f(p.$$.fragment,t),d=!0)},o(t){u(p.$$.fragment,t),d=!1},d(t){t&&A(e),$(p)}}}function H(i){let e,a;return e=new L({props:{id:i[0],class:"freestar-adslot "+i[1],$$slots:{default:[q]},$$scope:{ctx:i}}}),{c(){m(e.$$.fragment)},m(s,o){c(e,s,o),a=!0},p(s,[o]){const n={};o&1&&(n.id=s[0]),o&2&&(n.class="freestar-adslot "+s[1]),o&4&&(n.$$scope={dirty:o,ctx:s}),e.$set(n)},i(s){a||(f(e.$$.fragment,s),a=!0)},o(s){u(e.$$.fragment,s),a=!1},d(s){$(e,s)}}}const W="reuters_sponsorlogo";function Y(i,e,a){let{id:s=""}=e,{class:o="my-12"}=e;return i.$$set=n=>{"id"in n&&a(0,s=n.id),"class"in n&&a(1,o=n.class)},[s,o]}class y extends w{constructor(e){super(),k(this,e,Y,H,D,{id:0,class:1})}}y.__docgen={version:3,name:"SponsorshipAd.svelte",data:[{keywords:[],visibility:"public",description:"Add an ID to target with SCSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:"Add a class to target with SCSS.",keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:"my-12"}],computed:[],methods:[],components:[],description:"",keywords:[{name:"component",description:"`SponsorshipeAd` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-SponsorshipAd--default)"}],events:[],slots:[],refs:[]};function F(i){let e,a,s,o,n;return a=new E({}),o=new y({}),{c(){e=g("div"),m(a.$$.fragment),s=v(),m(o.$$.fragment)},m(r,p){S(r,e,p),c(a,e,null),_(e,s),c(o,e,null),n=!0},p:C,i(r){n||(f(a.$$.fragment,r),f(o.$$.fragment,r),n=!0)},o(r){u(a.$$.fragment,r),u(o.$$.fragment,r),n=!1},d(r){r&&A(e),$(a),$(o)}}}function G(i){let e,a,s,o,n,r;const p=[{title:"Components/SponsorshipAd"},i[0]];let d={};for(let t=0;t<p.length;t+=1)d=z(d,p[t]);return e=new x({props:d}),s=new O({props:{$$slots:{default:[F,({args:t})=>({1:t}),({args:t})=>t?2:0]},$$scope:{ctx:i}}}),n=new j({props:{name:"Default"}}),{c(){m(e.$$.fragment),a=v(),m(s.$$.fragment),o=v(),m(n.$$.fragment)},m(t,l){c(e,t,l),S(t,a,l),c(s,t,l),S(t,o,l),c(n,t,l),r=!0},p(t,[l]){const T=l&1?I(p,[p[0],N(t[0])]):{};e.$set(T);const b={};l&4&&(b.$$scope={dirty:l,ctx:t}),s.$set(b)},i(t){r||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(n.$$.fragment,t),r=!0)},o(t){u(e.$$.fragment,t),u(s.$$.fragment,t),u(n.$$.fragment,t),r=!1},d(t){t&&(A(a),A(o)),$(e,t),$(s,t),$(n,t)}}}function J(i){return[{title:"Components/SponsorshipAd",component:y,...P(V)}]}class K extends w{constructor(e){super(),k(this,e,J,G,D,{})}}const M=R(K,{meta:{title:"Components/SponsorshipAd"},stories:{"tpl:default":{name:"default",template:!0,source:`<div>
  <AdScripts />
  <SponsorshipAd />
</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","adDocs","AdScripts","SponsorshipAd","withComponentDocs"]}),re=M.meta,ie=["Default"],pe=M.stories.Default;export{pe as Default,ie as __namedExportsOrder,re as default};
//# sourceMappingURL=SponsorshipAd.stories-e11648fd.js.map
