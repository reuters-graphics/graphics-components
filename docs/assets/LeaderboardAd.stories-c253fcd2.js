import{S as L,i as D,s as C,O as T,l as u,g as _,b as f,c as h,d as y,e as A,m as g,M as I,t as $,h as v,f as S,j as b,C as N,y as w,n as O}from"./index-99a30af8.js";import{g as W,a as x}from"./spread-8a54911c.js";import{p as z,M as H,T as R,S as V}from"./collect-stories-1e0d20c7.js";import{R as j,A as E}from"./ResponsiveAd-034dbb7c.js";import{w as P}from"./withParams-47e2ab71.js";import"./throttle-dfed7c30.js";import"./isObject-32699ff3.js";import"./now-bd49f550.js";import"./isSymbol-50749e90.js";const Y=`Add a leaderboard ad to your page.

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

<!-- ALWAYS check if in an embed context! -->
{#if !embedded}
  <!-- Include AdScripts only ONCE per page -->
  <AdScripts />
{/if}

<!-- ... -->

{#if !embedded}
  <!-- ALWAYS put the leaderboard ad directly above the SiteHeader -->
  <SponsorshipAd />
  <SiteHeader />
{/if}
\`\`\`
`;function q(i){let e,a,n,r,d,s,l,o,t,m;return T(i[4]),s=new j({props:{desktopPlacementName:B}}),{c(){e=u("div"),a=u("div"),n=u("div"),r=u("div"),d=u("div"),_(s.$$.fragment),f(r,"class","ad-slot__inner svelte-ggtsmk"),f(n,"class","ad-slot__container svelte-ggtsmk"),f(a,"class","ad-block svelte-ggtsmk"),f(e,"class",l="leaderboard__sticky "+i[1]+" svelte-ggtsmk"),f(e,"id",i[0]),h(e,"--height",i[3]+"px")},m(p,c){y(p,e,c),A(e,a),A(a,n),A(n,r),A(r,d),g(s,d,null),o=!0,t||(m=I(window,"resize",i[4]),t=!0)},p(p,[c]){(!o||c&2&&l!==(l="leaderboard__sticky "+p[1]+" svelte-ggtsmk"))&&f(e,"class",l),(!o||c&1)&&f(e,"id",p[0]),(!o||c&8)&&h(e,"--height",p[3]+"px")},i(p){o||($(s.$$.fragment,p),o=!0)},o(p){v(s.$$.fragment,p),o=!1},d(p){p&&S(e),b(s),t=!1,m()}}}const B="reuters_desktop_leaderboard_atf";function F(i,e,a){let n,{id:r=""}=e,{class:d=""}=e,s=1200;function l(){a(2,s=window.innerWidth)}return i.$$set=o=>{"id"in o&&a(0,r=o.id),"class"in o&&a(1,d=o.class)},i.$$.update=()=>{i.$$.dirty&4&&a(3,n=s<1024?110:275)},[r,d,s,n,l]}class k extends L{constructor(e){super(),D(this,e,F,q,C,{id:0,class:1})}}k.__docgen={version:3,name:"LeaderboardAd.svelte",data:[{keywords:[],visibility:"public",description:"Add an ID to target with SCSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Add a class to target with SCSS.",name:"cls",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:"Add a class to target with SCSS.",keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function G(i){let e,a,n,r,d;return a=new E({}),r=new k({}),{c(){e=u("div"),_(a.$$.fragment),n=w(),_(r.$$.fragment)},m(s,l){y(s,e,l),g(a,e,null),A(e,n),g(r,e,null),d=!0},p:O,i(s){d||($(a.$$.fragment,s),$(r.$$.fragment,s),d=!0)},o(s){v(a.$$.fragment,s),v(r.$$.fragment,s),d=!1},d(s){s&&S(e),b(a),b(r)}}}function J(i){let e,a,n,r,d,s;const l=[{title:"Components/LeaderboardAd"},i[0]];let o={};for(let t=0;t<l.length;t+=1)o=N(o,l[t]);return e=new H({props:o}),n=new R({props:{$$slots:{default:[G,({args:t})=>({1:t}),({args:t})=>t?2:0]},$$scope:{ctx:i}}}),d=new V({props:{name:"Default"}}),{c(){_(e.$$.fragment),a=w(),_(n.$$.fragment),r=w(),_(d.$$.fragment)},m(t,m){g(e,t,m),y(t,a,m),g(n,t,m),y(t,r,m),g(d,t,m),s=!0},p(t,[m]){const p=m&1?W(l,[l[0],x(t[0])]):{};e.$set(p);const c={};m&4&&(c.$$scope={dirty:m,ctx:t}),n.$set(c)},i(t){s||($(e.$$.fragment,t),$(n.$$.fragment,t),$(d.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),v(n.$$.fragment,t),v(d.$$.fragment,t),s=!1},d(t){t&&(S(a),S(r)),b(e,t),b(n,t),b(d,t)}}}function K(i){return[{title:"Components/LeaderboardAd",component:k,...P(Y)}]}class Q extends L{constructor(e){super(),D(this,e,K,J,C,{})}}const M=z(Q,{meta:{title:"Components/LeaderboardAd"},stories:{"tpl:default":{name:"default",template:!0,source:`<div>
  <AdScripts />
  <LeaderboardAd />
</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","adDocs","AdScripts","LeaderboardAd","withComponentDocs"]}),de=M.meta,ie=["Default"],oe=M.stories.Default;export{oe as Default,ie as __namedExportsOrder,de as default};
//# sourceMappingURL=LeaderboardAd.stories-c253fcd2.js.map
