import{S as w,i as D,s as C,g as f,m as u,t as _,h as $,j as g,l as c,y as A,b as h,d as v,e as m,f as S,z as M,A as T,C as I,n as N}from"./index-99a30af8.js";import{g as R,a as O}from"./spread-8a54911c.js";import{p as V,M as j,T as B,S as E}from"./collect-stories-1e0d20c7.js";import{R as P,A as q}from"./ResponsiveAd-034dbb7c.js";import{B as x}from"./Block-a09d61d3.js";import{w as W}from"./withParams-47e2ab71.js";import"./throttle-dfed7c30.js";import"./isObject-32699ff3.js";import"./now-bd49f550.js";import"./isSymbol-50749e90.js";const Y=`Add a sponsorship ad to your page.

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
`;function k(l){let e,r,s;return{c(){e=c("div"),r=c("div"),s=M(l[2]),h(e,"class","ad-label svelte-1pz1lem")},m(n,a){v(n,e,a),m(e,r),m(r,s)},p(n,a){a&4&&T(s,n[2])},d(n){n&&S(e)}}}function F(l){let e,r,s,n,a,o,d,i=l[2]&&k(l);return o=new P({props:{desktopPlacementName:H}}),{c(){e=c("div"),i&&i.c(),r=A(),s=c("div"),n=c("div"),a=c("div"),f(o.$$.fragment),h(a,"class","svelte-1pz1lem"),h(n,"class","ad-slot__inner svelte-1pz1lem"),h(s,"class","ad-container svelte-1pz1lem"),h(e,"class","ad-block svelte-1pz1lem")},m(t,p){v(t,e,p),i&&i.m(e,null),m(e,r),m(e,s),m(s,n),m(n,a),u(o,a,null),d=!0},p(t,p){t[2]?i?i.p(t,p):(i=k(t),i.c(),i.m(e,r)):i&&(i.d(1),i=null)},i(t){d||(_(o.$$.fragment,t),d=!0)},o(t){$(o.$$.fragment,t),d=!1},d(t){t&&S(e),i&&i.d(),g(o)}}}function G(l){let e,r;return e=new x({props:{id:l[0],class:"freestar-adslot "+l[1],$$slots:{default:[F]},$$scope:{ctx:l}}}),{c(){f(e.$$.fragment)},m(s,n){u(e,s,n),r=!0},p(s,[n]){const a={};n&1&&(a.id=s[0]),n&2&&(a.class="freestar-adslot "+s[1]),n&12&&(a.$$scope={dirty:n,ctx:s}),e.$set(a)},i(s){r||(_(e.$$.fragment,s),r=!0)},o(s){$(e.$$.fragment,s),r=!1},d(s){g(e,s)}}}const H="reuters_sponsorlogo";function J(l,e,r){let{id:s=""}=e,{class:n="my-12"}=e,{adLabel:a=""}=e;return l.$$set=o=>{"id"in o&&r(0,s=o.id),"class"in o&&r(1,n=o.class),"adLabel"in o&&r(2,a=o.adLabel)},[s,n,a]}class y extends w{constructor(e){super(),D(this,e,J,G,C,{id:0,class:1,adLabel:2})}}y.__docgen={version:3,name:"SponsorshipAd.svelte",data:[{keywords:[],visibility:"public",description:"Add an ID to target with SCSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:"Add a class to target with SCSS.",keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:"my-12"},{keywords:[],visibility:"public",description:"Label placed directly above the sponsorship ad",name:"adLabel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:"",keywords:[{name:"component",description:"`SponsorshipAd` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-SponsorshipAd--default)"}],events:[],slots:[],refs:[]};function K(l){let e,r,s,n,a;return r=new q({}),n=new y({}),{c(){e=c("div"),f(r.$$.fragment),s=A(),f(n.$$.fragment)},m(o,d){v(o,e,d),u(r,e,null),m(e,s),u(n,e,null),a=!0},p:N,i(o){a||(_(r.$$.fragment,o),_(n.$$.fragment,o),a=!0)},o(o){$(r.$$.fragment,o),$(n.$$.fragment,o),a=!1},d(o){o&&S(e),g(r),g(n)}}}function Q(l){let e,r,s,n,a,o;const d=[{title:"Components/SponsorshipAd"},l[0]];let i={};for(let t=0;t<d.length;t+=1)i=I(i,d[t]);return e=new j({props:i}),s=new B({props:{$$slots:{default:[K,({args:t})=>({1:t}),({args:t})=>t?2:0]},$$scope:{ctx:l}}}),a=new E({props:{name:"Default"}}),{c(){f(e.$$.fragment),r=A(),f(s.$$.fragment),n=A(),f(a.$$.fragment)},m(t,p){u(e,t,p),v(t,r,p),u(s,t,p),v(t,n,p),u(a,t,p),o=!0},p(t,[p]){const z=p&1?R(d,[d[0],O(t[0])]):{};e.$set(z);const b={};p&4&&(b.$$scope={dirty:p,ctx:t}),s.$set(b)},i(t){o||(_(e.$$.fragment,t),_(s.$$.fragment,t),_(a.$$.fragment,t),o=!0)},o(t){$(e.$$.fragment,t),$(s.$$.fragment,t),$(a.$$.fragment,t),o=!1},d(t){t&&(S(r),S(n)),g(e,t),g(s,t),g(a,t)}}}function U(l){return[{title:"Components/SponsorshipAd",component:y,...W(Y)}]}class X extends w{constructor(e){super(),D(this,e,U,Q,C,{})}}const L=V(X,{meta:{title:"Components/SponsorshipAd"},stories:{"tpl:default":{name:"default",template:!0,source:`<div>
  <AdScripts />
  <SponsorshipAd />
</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","adDocs","AdScripts","SponsorshipAd","withComponentDocs"]}),pe=L.meta,de=["Default"],ce=L.stories.Default;export{ce as Default,de as __namedExportsOrder,pe as default};
//# sourceMappingURL=SponsorshipAd.stories-4b0d7c91.js.map
