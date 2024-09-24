import{S as w,i as D,s as C,c as m,m as u,t as $,a as g,d as _,q as c,o as y,f as v,h,j as f,k as S,e as M,x as T,l as I,n as N}from"./index-C9aKRT5A.js";import{g as x,a as O}from"./spread-CgU5AtxT.js";import{p as R,M as V,T as j,S as B,w as E}from"./collect-stories-ceFdpR5E.js";import{R as P,A as z}from"./ResponsiveAd-bwMiP1BO.js";import{B as F}from"./Block-C7biTRWl.js";import"./throttle-cOUaFLOV.js";import"./isObject-C3e4t58V.js";import"./isSymbol-Br3Fhm6g.js";import"./toNumber-BrygkUtK.js";const G=`Add a sponsorship ad to your page.

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
  import { SponsorshipAd } from '@reuters-graphics/graphics-components';

  export let embedded = false;
<\/script>

<!-- Check if in an embed context! -->
{#if !embedded}
  <SponsorshipAd />
{/if}
\`\`\`
`;function b(l){let e,o,s;return{c(){e=c("div"),o=c("div"),s=M(l[2]),v(e,"class","ad-label svelte-1sukdmq")},m(n,a){h(n,e,a),f(e,o),f(o,s)},p(n,a){a&4&&T(s,n[2])},d(n){n&&S(e)}}}function H(l){let e,o,s,n,a,r,p,i=l[2]&&b(l);return r=new P({props:{desktopPlacementName:K}}),{c(){e=c("div"),i&&i.c(),o=y(),s=c("div"),n=c("div"),a=c("div"),m(r.$$.fragment),v(a,"class","svelte-1sukdmq"),v(n,"class","ad-slot__inner svelte-1sukdmq"),v(s,"class","ad-container svelte-1sukdmq"),v(e,"class","ad-block svelte-1sukdmq")},m(t,d){h(t,e,d),i&&i.m(e,null),f(e,o),f(e,s),f(s,n),f(n,a),u(r,a,null),p=!0},p(t,d){t[2]?i?i.p(t,d):(i=b(t),i.c(),i.m(e,o)):i&&(i.d(1),i=null)},i(t){p||($(r.$$.fragment,t),p=!0)},o(t){g(r.$$.fragment,t),p=!1},d(t){t&&S(e),i&&i.d(),_(r)}}}function J(l){let e,o;return e=new F({props:{id:l[0],class:"freestar-adslot "+l[1],$$slots:{default:[H]},$$scope:{ctx:l}}}),{c(){m(e.$$.fragment)},m(s,n){u(e,s,n),o=!0},p(s,[n]){const a={};n&1&&(a.id=s[0]),n&2&&(a.class="freestar-adslot "+s[1]),n&12&&(a.$$scope={dirty:n,ctx:s}),e.$set(a)},i(s){o||($(e.$$.fragment,s),o=!0)},o(s){g(e.$$.fragment,s),o=!1},d(s){_(e,s)}}}const K="reuters_sponsorlogo";function Q(l,e,o){let{id:s=""}=e,{class:n="my-12"}=e,{adLabel:a=""}=e;return l.$$set=r=>{"id"in r&&o(0,s=r.id),"class"in r&&o(1,n=r.class),"adLabel"in r&&o(2,a=r.adLabel)},[s,n,a]}class k extends w{constructor(e){super(),D(this,e,Q,J,C,{id:0,class:1,adLabel:2})}}k.__docgen={version:3,name:"SponsorshipAd.svelte",data:[{keywords:[],visibility:"public",description:"Add an ID to target with SCSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:"Add a class to target with SCSS.",keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:"my-12"},{keywords:[],visibility:"public",description:"Label placed directly above the sponsorship ad",name:"adLabel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function U(l){let e,o,s,n,a;return o=new z({}),n=new k({}),{c(){e=c("div"),m(o.$$.fragment),s=y(),m(n.$$.fragment)},m(r,p){h(r,e,p),u(o,e,null),f(e,s),u(n,e,null),a=!0},p:N,i(r){a||($(o.$$.fragment,r),$(n.$$.fragment,r),a=!0)},o(r){g(o.$$.fragment,r),g(n.$$.fragment,r),a=!1},d(r){r&&S(e),_(o),_(n)}}}function W(l){let e,o,s,n,a,r;const p=[{title:"Components/SponsorshipAd"},{component:k},l[0]];let i={};for(let t=0;t<p.length;t+=1)i=I(i,p[t]);return e=new V({props:i}),s=new j({props:{$$slots:{default:[U]},$$scope:{ctx:l}}}),a=new B({props:{name:"Default"}}),{c(){m(e.$$.fragment),o=y(),m(s.$$.fragment),n=y(),m(a.$$.fragment)},m(t,d){u(e,t,d),h(t,o,d),u(s,t,d),h(t,n,d),u(a,t,d),r=!0},p(t,[d]){const L=d&1?x(p,[p[0],p[1],O(t[0])]):{};e.$set(L);const A={};d&2&&(A.$$scope={dirty:d,ctx:t}),s.$set(A)},i(t){r||($(e.$$.fragment,t),$(s.$$.fragment,t),$(a.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),g(s.$$.fragment,t),g(a.$$.fragment,t),r=!1},d(t){t&&(S(o),S(n)),_(e,t),_(s,t),_(a,t)}}}function X(l){return[{...E(G)}]}class Y extends w{constructor(e){super(),D(this,e,X,W,C,{})}}const q=R(Y,{meta:{title:"Components/SponsorshipAd"},stories:{"tpl:default":{name:"default",template:!0,source:`<div>
  <AdScripts />
  <SponsorshipAd />
</div>`,hasArgs:!1},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","adDocs","AdScripts","SponsorshipAd","withComponentDocs"]}),le=q.meta,de=["Default"],pe=q.stories.Default;export{pe as Default,de as __namedExportsOrder,le as default};
