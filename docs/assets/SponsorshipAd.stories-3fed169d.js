import{S as w,i as D,s as C,g as f,m as u,t as _,h as $,j as g,o as c,z as y,b as v,d as h,e as m,f as S,k as M,A as T,C as I,n as N}from"./index-85f88930.js";import{g as O,a as R}from"./spread-8a54911c.js";import{p as V,M as j,T as x,S as B}from"./collect-stories-fa95313f.js";import{R as E,A as P}from"./ResponsiveAd-c5f27562.js";import{B as z}from"./Block-d1b8152c.js";import{w as F}from"./withParams-47e2ab71.js";import"./throttle-dfed7c30.js";import"./isObject-32699ff3.js";import"./now-bd49f550.js";import"./isSymbol-50749e90.js";const G=`Add a sponsorship ad to your page.

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
`;function k(l){let e,o,s;return{c(){e=c("div"),o=c("div"),s=M(l[2]),v(e,"class","ad-label svelte-1sukdmq")},m(n,a){h(n,e,a),m(e,o),m(o,s)},p(n,a){a&4&&T(s,n[2])},d(n){n&&S(e)}}}function H(l){let e,o,s,n,a,r,p,i=l[2]&&k(l);return r=new E({props:{desktopPlacementName:K}}),{c(){e=c("div"),i&&i.c(),o=y(),s=c("div"),n=c("div"),a=c("div"),f(r.$$.fragment),v(a,"class","svelte-1sukdmq"),v(n,"class","ad-slot__inner svelte-1sukdmq"),v(s,"class","ad-container svelte-1sukdmq"),v(e,"class","ad-block svelte-1sukdmq")},m(t,d){h(t,e,d),i&&i.m(e,null),m(e,o),m(e,s),m(s,n),m(n,a),u(r,a,null),p=!0},p(t,d){t[2]?i?i.p(t,d):(i=k(t),i.c(),i.m(e,o)):i&&(i.d(1),i=null)},i(t){p||(_(r.$$.fragment,t),p=!0)},o(t){$(r.$$.fragment,t),p=!1},d(t){t&&S(e),i&&i.d(),g(r)}}}function J(l){let e,o;return e=new z({props:{id:l[0],class:"freestar-adslot "+l[1],$$slots:{default:[H]},$$scope:{ctx:l}}}),{c(){f(e.$$.fragment)},m(s,n){u(e,s,n),o=!0},p(s,[n]){const a={};n&1&&(a.id=s[0]),n&2&&(a.class="freestar-adslot "+s[1]),n&12&&(a.$$scope={dirty:n,ctx:s}),e.$set(a)},i(s){o||(_(e.$$.fragment,s),o=!0)},o(s){$(e.$$.fragment,s),o=!1},d(s){g(e,s)}}}const K="reuters_sponsorlogo";function Q(l,e,o){let{id:s=""}=e,{class:n="my-12"}=e,{adLabel:a=""}=e;return l.$$set=r=>{"id"in r&&o(0,s=r.id),"class"in r&&o(1,n=r.class),"adLabel"in r&&o(2,a=r.adLabel)},[s,n,a]}class A extends w{constructor(e){super(),D(this,e,Q,J,C,{id:0,class:1,adLabel:2})}}A.__docgen={version:3,name:"SponsorshipAd.svelte",data:[{keywords:[],visibility:"public",description:"Add an ID to target with SCSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:"Add a class to target with SCSS.",keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:"my-12"},{keywords:[],visibility:"public",description:"Label placed directly above the sponsorship ad",name:"adLabel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function U(l){let e,o,s,n,a;return o=new P({}),n=new A({}),{c(){e=c("div"),f(o.$$.fragment),s=y(),f(n.$$.fragment)},m(r,p){h(r,e,p),u(o,e,null),m(e,s),u(n,e,null),a=!0},p:N,i(r){a||(_(o.$$.fragment,r),_(n.$$.fragment,r),a=!0)},o(r){$(o.$$.fragment,r),$(n.$$.fragment,r),a=!1},d(r){r&&S(e),g(o),g(n)}}}function W(l){let e,o,s,n,a,r;const p=[{title:"Components/SponsorshipAd"},l[0]];let i={};for(let t=0;t<p.length;t+=1)i=I(i,p[t]);return e=new j({props:i}),s=new x({props:{$$slots:{default:[U,({args:t})=>({1:t}),({args:t})=>t?2:0]},$$scope:{ctx:l}}}),a=new B({props:{name:"Default"}}),{c(){f(e.$$.fragment),o=y(),f(s.$$.fragment),n=y(),f(a.$$.fragment)},m(t,d){u(e,t,d),h(t,o,d),u(s,t,d),h(t,n,d),u(a,t,d),r=!0},p(t,[d]){const L=d&1?O(p,[p[0],R(t[0])]):{};e.$set(L);const b={};d&4&&(b.$$scope={dirty:d,ctx:t}),s.$set(b)},i(t){r||(_(e.$$.fragment,t),_(s.$$.fragment,t),_(a.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),$(s.$$.fragment,t),$(a.$$.fragment,t),r=!1},d(t){t&&(S(o),S(n)),g(e,t),g(s,t),g(a,t)}}}function X(l){return[{title:"Components/SponsorshipAd",component:A,...F(G)}]}class Y extends w{constructor(e){super(),D(this,e,X,W,C,{})}}const q=V(Y,{meta:{title:"Components/SponsorshipAd"},stories:{"tpl:default":{name:"default",template:!0,source:`<div>
  <AdScripts />
  <SponsorshipAd />
</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","adDocs","AdScripts","SponsorshipAd","withComponentDocs"]}),de=q.meta,pe=["Default"],ce=q.stories.Default;export{ce as Default,pe as __namedExportsOrder,de as default};
//# sourceMappingURL=SponsorshipAd.stories-3fed169d.js.map
