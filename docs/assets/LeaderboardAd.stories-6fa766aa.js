import{S as D,i as C,s as T,O as I,l as u,g as _,b as f,c as L,q as A,d as $,e as w,m as g,M as N,t as v,h as b,f as S,j as y,D as O,C as W,y as k,n as j}from"./index-99a30af8.js";import{g as z,a as H}from"./spread-8a54911c.js";import{p as R,M as V,T as Y,S as P}from"./collect-stories-1e0d20c7.js";import{R as B,A as F}from"./ResponsiveAd-034dbb7c.js";import{g as G}from"./globals-7f7f1b26.js";import{w as J}from"./withParams-47e2ab71.js";import"./throttle-dfed7c30.js";import"./isObject-32699ff3.js";import"./now-bd49f550.js";import"./isSymbol-50749e90.js";const K=`Add a leaderboard ad to your page.

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
`;const{window:M}=G;function Q(o){let e,a,r,d,i,s,p,l,t,n;return I(o[6]),s=new B({props:{desktopPlacementName:U}}),{c(){e=u("div"),a=u("div"),r=u("div"),d=u("div"),i=u("div"),_(s.$$.fragment),f(d,"class","ad-slot__inner svelte-1stf2o1"),f(r,"class","ad-slot__container svelte-1stf2o1"),f(a,"class","ad-block svelte-1stf2o1"),f(e,"class",p="leaderboard__sticky "+o[1]+" svelte-1stf2o1"),f(e,"id",o[0]),L(e,"--height",o[5]+"px"),A(e,"sticky",o[3]),A(e,"unstick",o[4])},m(c,m){$(c,e,m),w(e,a),w(a,r),w(r,d),w(d,i),g(s,i,null),l=!0,t||(n=N(M,"resize",o[6]),t=!0)},p(c,[m]){(!l||m&2&&p!==(p="leaderboard__sticky "+c[1]+" svelte-1stf2o1"))&&f(e,"class",p),(!l||m&1)&&f(e,"id",c[0]),(!l||m&32)&&L(e,"--height",c[5]+"px"),(!l||m&10)&&A(e,"sticky",c[3]),(!l||m&18)&&A(e,"unstick",c[4])},i(c){l||(v(s.$$.fragment,c),l=!0)},o(c){b(s.$$.fragment,c),l=!1},d(c){c&&S(e),y(s),t=!1,n()}}}const U="reuters_desktop_leaderboard_atf";function X(o,e,a){let r,{id:d=""}=e,{class:i=""}=e,s=1200,p=!1,l=!1;O(()=>{const n=()=>{window.scrollY>=r*1.1&&(a(3,p=!0),setTimeout(()=>{a(4,l=!0),setTimeout(()=>{a(3,p=!1)},800)},3e3),window.removeEventListener("scroll",n))};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}});function t(){a(2,s=M.innerWidth)}return o.$$set=n=>{"id"in n&&a(0,d=n.id),"class"in n&&a(1,i=n.class)},o.$$.update=()=>{o.$$.dirty&4&&a(5,r=s<1024?110:275)},[d,i,s,p,l,r,t]}class h extends D{constructor(e){super(),C(this,e,X,Q,T,{id:0,class:1})}}h.__docgen={version:3,name:"LeaderboardAd.svelte",data:[{keywords:[],visibility:"public",description:"Add an ID to target with SCSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Add a class to target with SCSS.",name:"cls",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:"Add a class to target with SCSS.",keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Z(o){let e,a,r,d,i;return a=new F({}),d=new h({}),{c(){e=u("div"),_(a.$$.fragment),r=k(),_(d.$$.fragment),f(e,"class","svelte-1j6q5sq")},m(s,p){$(s,e,p),g(a,e,null),w(e,r),g(d,e,null),i=!0},p:j,i(s){i||(v(a.$$.fragment,s),v(d.$$.fragment,s),i=!0)},o(s){b(a.$$.fragment,s),b(d.$$.fragment,s),i=!1},d(s){s&&S(e),y(a),y(d)}}}function x(o){let e,a,r,d,i,s;const p=[{title:"Components/LeaderboardAd"},o[0]];let l={};for(let t=0;t<p.length;t+=1)l=W(l,p[t]);return e=new V({props:l}),r=new Y({props:{$$slots:{default:[Z,({args:t})=>({1:t}),({args:t})=>t?2:0]},$$scope:{ctx:o}}}),i=new P({props:{name:"Default"}}),{c(){_(e.$$.fragment),a=k(),_(r.$$.fragment),d=k(),_(i.$$.fragment)},m(t,n){g(e,t,n),$(t,a,n),g(r,t,n),$(t,d,n),g(i,t,n),s=!0},p(t,[n]){const c=n&1?z(p,[p[0],H(t[0])]):{};e.$set(c);const m={};n&4&&(m.$$scope={dirty:n,ctx:t}),r.$set(m)},i(t){s||(v(e.$$.fragment,t),v(r.$$.fragment,t),v(i.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),b(r.$$.fragment,t),b(i.$$.fragment,t),s=!1},d(t){t&&(S(a),S(d)),y(e,t),y(r,t),y(i,t)}}}function ee(o){return[{title:"Components/LeaderboardAd",component:h,...J(K)}]}class E extends D{constructor(e){super(),C(this,e,ee,x,T,{})}}E.__docgen={version:3,name:"LeaderboardAd.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const q=R(E,{meta:{title:"Components/LeaderboardAd"},stories:{"tpl:default":{name:"default",template:!0,source:`<div>
  <AdScripts />
  <LeaderboardAd />
</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","adDocs","AdScripts","LeaderboardAd","withComponentDocs"]}),pe=q.meta,me=["Default"],fe=q.stories.Default;export{fe as Default,me as __namedExportsOrder,pe as default};
//# sourceMappingURL=LeaderboardAd.stories-6fa766aa.js.map
