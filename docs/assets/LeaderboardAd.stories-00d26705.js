import{S as D,i as C,s as T,O as I,o as u,g as _,b as f,c as L,r as A,d as $,e as b,m as g,M as N,t as v,h as w,f as k,j as y,D as O,C as j,z as S,n as q}from"./index-85f88930.js";import{g as H,a as R}from"./spread-8a54911c.js";import{p as V,M as W,T as P,S as Y}from"./collect-stories-fa95313f.js";import{R as B,A as F}from"./ResponsiveAd-c5f27562.js";import{g as G}from"./globals-7f7f1b26.js";import{w as J}from"./withParams-47e2ab71.js";import"./throttle-dfed7c30.js";import"./isObject-32699ff3.js";import"./now-bd49f550.js";import"./isSymbol-50749e90.js";const K=`Add a leaderboard ad to your page.

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
`;const{window:M}=G;function Q(o){let e,a,r,d,i,s,p,l,t,n;return I(o[6]),s=new B({props:{desktopPlacementName:U}}),{c(){e=u("div"),a=u("div"),r=u("div"),d=u("div"),i=u("div"),_(s.$$.fragment),f(d,"class","ad-slot__inner svelte-g0kawd"),f(r,"class","ad-slot__container svelte-g0kawd"),f(a,"class","ad-block svelte-g0kawd"),f(e,"class",p="leaderboard__sticky "+o[1]+" svelte-g0kawd"),f(e,"id",o[0]),L(e,"--height",o[5]+"px"),A(e,"sticky",o[3]),A(e,"unstick",o[4])},m(c,m){$(c,e,m),b(e,a),b(a,r),b(r,d),b(d,i),g(s,i,null),l=!0,t||(n=N(M,"resize",o[6]),t=!0)},p(c,[m]){(!l||m&2&&p!==(p="leaderboard__sticky "+c[1]+" svelte-g0kawd"))&&f(e,"class",p),(!l||m&1)&&f(e,"id",c[0]),(!l||m&32)&&L(e,"--height",c[5]+"px"),(!l||m&10)&&A(e,"sticky",c[3]),(!l||m&18)&&A(e,"unstick",c[4])},i(c){l||(v(s.$$.fragment,c),l=!0)},o(c){w(s.$$.fragment,c),l=!1},d(c){c&&k(e),y(s),t=!1,n()}}}const U="reuters_desktop_leaderboard_atf";function X(o,e,a){let r,{id:d=""}=e,{class:i=""}=e,s=1200,p=!1,l=!1;O(()=>{const n=()=>{window.scrollY>=r*1.1&&(a(3,p=!0),setTimeout(()=>{a(4,l=!0),setTimeout(()=>{a(3,p=!1)},400)},1500),window.removeEventListener("scroll",n))};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}});function t(){a(2,s=M.innerWidth)}return o.$$set=n=>{"id"in n&&a(0,d=n.id),"class"in n&&a(1,i=n.class)},o.$$.update=()=>{o.$$.dirty&4&&a(5,r=s<1024?110:275)},[d,i,s,p,l,r,t]}class h extends D{constructor(e){super(),C(this,e,X,Q,T,{id:0,class:1})}}h.__docgen={version:3,name:"LeaderboardAd.svelte",data:[{keywords:[],visibility:"public",description:"Add an ID to target with SCSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Add a class to target with SCSS.",name:"cls",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:"Add a class to target with SCSS.",keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Z(o){let e,a,r,d,i;return a=new F({}),d=new h({}),{c(){e=u("div"),_(a.$$.fragment),r=S(),_(d.$$.fragment),f(e,"class","svelte-1j6q5sq")},m(s,p){$(s,e,p),g(a,e,null),b(e,r),g(d,e,null),i=!0},p:q,i(s){i||(v(a.$$.fragment,s),v(d.$$.fragment,s),i=!0)},o(s){w(a.$$.fragment,s),w(d.$$.fragment,s),i=!1},d(s){s&&k(e),y(a),y(d)}}}function x(o){let e,a,r,d,i,s;const p=[{title:"Components/LeaderboardAd"},o[0]];let l={};for(let t=0;t<p.length;t+=1)l=j(l,p[t]);return e=new W({props:l}),r=new P({props:{$$slots:{default:[Z,({args:t})=>({1:t}),({args:t})=>t?2:0]},$$scope:{ctx:o}}}),i=new Y({props:{name:"Default"}}),{c(){_(e.$$.fragment),a=S(),_(r.$$.fragment),d=S(),_(i.$$.fragment)},m(t,n){g(e,t,n),$(t,a,n),g(r,t,n),$(t,d,n),g(i,t,n),s=!0},p(t,[n]){const c=n&1?H(p,[p[0],R(t[0])]):{};e.$set(c);const m={};n&4&&(m.$$scope={dirty:n,ctx:t}),r.$set(m)},i(t){s||(v(e.$$.fragment,t),v(r.$$.fragment,t),v(i.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),w(r.$$.fragment,t),w(i.$$.fragment,t),s=!1},d(t){t&&(k(a),k(d)),y(e,t),y(r,t),y(i,t)}}}function ee(o){return[{title:"Components/LeaderboardAd",component:h,...J(K)}]}class E extends D{constructor(e){super(),C(this,e,ee,x,T,{})}}E.__docgen={version:3,name:"LeaderboardAd.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const z=V(E,{meta:{title:"Components/LeaderboardAd"},stories:{"tpl:default":{name:"default",template:!0,source:`<div>
  <AdScripts />
  <LeaderboardAd />
</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","adDocs","AdScripts","LeaderboardAd","withComponentDocs"]}),pe=z.meta,me=["Default"],fe=z.stories.Default;export{fe as Default,me as __namedExportsOrder,pe as default};
//# sourceMappingURL=LeaderboardAd.stories-00d26705.js.map
