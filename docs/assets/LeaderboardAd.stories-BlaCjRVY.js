import{S as D,i as C,s as T,Q as I,q as u,c as _,f,g as L,C as k,h as b,j as $,m as g,O as N,t as v,a as w,k as A,d as y,p as O,l as H,o as S,n as R}from"./index-C9aKRT5A.js";import{g as V,a as W}from"./spread-CgU5AtxT.js";import{p as j,M as q,T as P,S as Y,w as Q}from"./collect-stories-ceFdpR5E.js";import{R as B,A as F}from"./ResponsiveAd-DWkcJT_m.js";import{g as G}from"./globals-D0QH3NT1.js";import"./throttle-cOUaFLOV.js";import"./isObject-C3e4t58V.js";import"./isSymbol-Br3Fhm6g.js";import"./toNumber-BrygkUtK.js";const J=`Add a leaderboard ad to your page.

> **IMPORTANT!** Make sure ads are only used on dotcom pages, never on embeds.

\`\`\`svelte
<!-- +page.svelte -->
<script>
  import {
    AdScripts,
    LeaderboardAd,
    SiteHeader,
  } from '@reuters-graphics/graphics-components';
<\/script>

<!-- Include AdScripts only ONCE per page for any type of ad -->
<AdScripts />

<!-- ALWAYS put the leaderboard ad directly above the SiteHeader -->
<LeaderboardAd />
<SiteHeader />
\`\`\`
`,{window:M}=G;function K(o){let e,a,r,d,i,s,l,c,t,n;return I(o[6]),s=new B({props:{desktopPlacementName:U}}),{c(){e=u("div"),a=u("div"),r=u("div"),d=u("div"),i=u("div"),_(s.$$.fragment),f(d,"class","ad-slot__inner svelte-g0kawd"),f(r,"class","ad-slot__container svelte-g0kawd"),f(a,"class","ad-block svelte-g0kawd"),f(e,"class",l="leaderboard__sticky "+o[1]+" svelte-g0kawd"),f(e,"id",o[0]),L(e,"--height",o[5]+"px"),k(e,"sticky",o[3]),k(e,"unstick",o[4])},m(p,m){b(p,e,m),$(e,a),$(a,r),$(r,d),$(d,i),g(s,i,null),c=!0,t||(n=N(M,"resize",o[6]),t=!0)},p(p,[m]){(!c||m&2&&l!==(l="leaderboard__sticky "+p[1]+" svelte-g0kawd"))&&f(e,"class",l),(!c||m&1)&&f(e,"id",p[0]),(!c||m&32)&&L(e,"--height",p[5]+"px"),(!c||m&10)&&k(e,"sticky",p[3]),(!c||m&18)&&k(e,"unstick",p[4])},i(p){c||(v(s.$$.fragment,p),c=!0)},o(p){w(s.$$.fragment,p),c=!1},d(p){p&&A(e),y(s),t=!1,n()}}}const U="reuters_desktop_leaderboard_atf";function X(o,e,a){let r,{id:d=""}=e,{class:i=""}=e,s=1200,l=!1,c=!1;O(()=>{const n=()=>{window.scrollY>=r*1.1&&(a(3,l=!0),setTimeout(()=>{a(4,c=!0),setTimeout(()=>{a(3,l=!1)},400)},1500),window.removeEventListener("scroll",n))};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}});function t(){a(2,s=M.innerWidth)}return o.$$set=n=>{"id"in n&&a(0,d=n.id),"class"in n&&a(1,i=n.class)},o.$$.update=()=>{o.$$.dirty&4&&a(5,r=s<1024?110:275)},[d,i,s,l,c,r,t]}class h extends D{constructor(e){super(),C(this,e,X,K,T,{id:0,class:1})}}h.__docgen={version:3,name:"LeaderboardAd.svelte",data:[{keywords:[],visibility:"public",description:"Add an ID to target with SCSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Add a class to target with SCSS.",name:"cls",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:"Add a class to target with SCSS.",keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Z(o){let e,a,r,d,i;return a=new F({}),d=new h({}),{c(){e=u("div"),_(a.$$.fragment),r=S(),_(d.$$.fragment),f(e,"class","svelte-9hmzs6")},m(s,l){b(s,e,l),g(a,e,null),$(e,r),g(d,e,null),i=!0},p:R,i(s){i||(v(a.$$.fragment,s),v(d.$$.fragment,s),i=!0)},o(s){w(a.$$.fragment,s),w(d.$$.fragment,s),i=!1},d(s){s&&A(e),y(a),y(d)}}}function x(o){let e,a,r,d,i,s;const l=[{title:"Components/LeaderboardAd"},{component:h},o[0]];let c={};for(let t=0;t<l.length;t+=1)c=H(c,l[t]);return e=new q({props:c}),r=new P({props:{$$slots:{default:[Z]},$$scope:{ctx:o}}}),i=new Y({props:{name:"Default"}}),{c(){_(e.$$.fragment),a=S(),_(r.$$.fragment),d=S(),_(i.$$.fragment)},m(t,n){g(e,t,n),b(t,a,n),g(r,t,n),b(t,d,n),g(i,t,n),s=!0},p(t,[n]){const p=n&1?V(l,[l[0],l[1],W(t[0])]):{};e.$set(p);const m={};n&2&&(m.$$scope={dirty:n,ctx:t}),r.$set(m)},i(t){s||(v(e.$$.fragment,t),v(r.$$.fragment,t),v(i.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),w(r.$$.fragment,t),w(i.$$.fragment,t),s=!1},d(t){t&&(A(a),A(d)),y(e,t),y(r,t),y(i,t)}}}function ee(o){return[{...Q(J)}]}class E extends D{constructor(e){super(),C(this,e,ee,x,T,{})}}E.__docgen={version:3,name:"LeaderboardAd.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const z=j(E,{meta:{title:"Components/LeaderboardAd"},stories:{"tpl:default":{name:"default",template:!0,source:`<div>
  <AdScripts />
  <LeaderboardAd />
</div>`,hasArgs:!1},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","adDocs","AdScripts","LeaderboardAd","withComponentDocs"]}),ce=z.meta,pe=["Default"],me=z.stories.Default;export{me as Default,pe as __namedExportsOrder,ce as default};
