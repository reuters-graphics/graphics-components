import{S as I,i as b,s as w,g as c,m as p,t as f,h as u,j as $,l as _,y as A,b as v,d as S,e as g,n as C,f as y,C as T}from"./index-99a30af8.js";import{g as x,a as N}from"./spread-8a54911c.js";import{p as R,M as O,T as j,S as B}from"./collect-stories-1e0d20c7.js";import{R as E,A as P}from"./ResponsiveAd-034dbb7c.js";import{B as V}from"./Block-a09d61d3.js";import{w as q}from"./withParams-47e2ab71.js";import"./throttle-dfed7c30.js";import"./isObject-32699ff3.js";import"./now-bd49f550.js";import"./isSymbol-50749e90.js";const L=`Add programmatic ads inline on your page.

> **IMPORTANT!** Make sure ads are only used on dotcom pages, never on embeds.

\`\`\`svelte
<script>
  import { AdSlot, AdScripts } from '@reuters-graphics/graphics-components';
<\/script>

<!-- ALWAYS check if in an embed context! -->
{#if !embedded}
  <!-- Include AdScripts only ONCE per page -->
  <AdScripts />
{/if}

<!-- ... -->

{#if !embedded}
  <AdSlot />
{/if}

<!-- ... -->

{#if !embedded}
  <!-- Can add multiple ads to your page -->
  <AdSlot />
{/if}
\`\`\`
`;function W(d){let e,r,n,s,a,o,l,i;return l=new E({props:{desktopPlacementName:z}}),{c(){e=_("div"),r=_("div"),r.textContent="Advertisement · Scroll to continue",n=A(),s=_("div"),a=_("div"),o=_("div"),c(l.$$.fragment),v(r,"class","ad-label svelte-1fg4mkm"),v(o,"class","svelte-1fg4mkm"),v(a,"class","ad-slot__inner svelte-1fg4mkm"),v(s,"class","ad-container svelte-1fg4mkm"),v(e,"class","ad-block svelte-1fg4mkm")},m(t,m){S(t,e,m),g(e,r),g(e,n),g(e,s),g(s,a),g(a,o),p(l,o,null),i=!0},p:C,i(t){i||(f(l.$$.fragment,t),i=!0)},o(t){u(l.$$.fragment,t),i=!1},d(t){t&&y(e),$(l)}}}function Y(d){let e,r;return e=new V({props:{id:d[0],class:"freestar-adslot "+d[1],$$slots:{default:[W]},$$scope:{ctx:d}}}),{c(){c(e.$$.fragment)},m(n,s){p(e,n,s),r=!0},p(n,[s]){const a={};s&1&&(a.id=n[0]),s&2&&(a.class="freestar-adslot "+n[1]),s&4&&(a.$$scope={dirty:s,ctx:n}),e.$set(a)},i(n){r||(f(e.$$.fragment,n),r=!0)},o(n){u(e.$$.fragment,n),r=!1},d(n){$(e,n)}}}const z="reuters_desktop_native_1";function F(d,e,r){let{id:n=""}=e,{class:s="my-12"}=e;return d.$$set=a=>{"id"in a&&r(0,n=a.id),"class"in a&&r(1,s=a.class)},[n,s]}class k extends I{constructor(e){super(),b(this,e,F,Y,w,{id:0,class:1})}}k.__docgen={version:3,name:"InlineAd.svelte",data:[{keywords:[],visibility:"public",description:"Add an ID to target with SCSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:"Add a class to target with SCSS.",keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:"my-12"}],computed:[],methods:[],components:[],description:"",keywords:[{name:"component",description:"`InlineAd` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-InlineAd--default)"}],events:[],slots:[],refs:[]};function G(d){let e,r,n,s,a,o,l;return r=new P({}),s=new k({}),o=new k({}),{c(){e=_("div"),c(r.$$.fragment),n=A(),c(s.$$.fragment),a=A(),c(o.$$.fragment)},m(i,t){S(i,e,t),p(r,e,null),g(e,n),p(s,e,null),g(e,a),p(o,e,null),l=!0},p:C,i(i){l||(f(r.$$.fragment,i),f(s.$$.fragment,i),f(o.$$.fragment,i),l=!0)},o(i){u(r.$$.fragment,i),u(s.$$.fragment,i),u(o.$$.fragment,i),l=!1},d(i){i&&y(e),$(r),$(s),$(o)}}}function H(d){let e,r,n,s,a,o;const l=[{title:"Components/InlineAd"},d[0]];let i={};for(let t=0;t<l.length;t+=1)i=T(i,l[t]);return e=new O({props:i}),n=new j({props:{$$slots:{default:[G,({args:t})=>({1:t}),({args:t})=>t?2:0]},$$scope:{ctx:d}}}),a=new B({props:{name:"Default"}}),{c(){c(e.$$.fragment),r=A(),c(n.$$.fragment),s=A(),c(a.$$.fragment)},m(t,m){p(e,t,m),S(t,r,m),p(n,t,m),S(t,s,m),p(a,t,m),o=!0},p(t,[m]){const M=m&1?x(l,[l[0],N(t[0])]):{};e.$set(M);const h={};m&4&&(h.$$scope={dirty:m,ctx:t}),n.$set(h)},i(t){o||(f(e.$$.fragment,t),f(n.$$.fragment,t),f(a.$$.fragment,t),o=!0)},o(t){u(e.$$.fragment,t),u(n.$$.fragment,t),u(a.$$.fragment,t),o=!1},d(t){t&&(y(r),y(s)),$(e,t),$(n,t),$(a,t)}}}function J(d){return[{title:"Components/InlineAd",component:k,...q(L)}]}class K extends I{constructor(e){super(),b(this,e,J,H,w,{})}}const D=R(K,{meta:{title:"Components/InlineAd"},stories:{"tpl:default":{name:"default",template:!0,source:`<div>
  <AdScripts />
  <InlineAd />
  <InlineAd />
</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","adDocs","AdScripts","InlineAd","withComponentDocs"]}),ie=D.meta,oe=["Default"],le=D.stories.Default;export{le as Default,oe as __namedExportsOrder,ie as default};
//# sourceMappingURL=InlineAd.stories-0f56ab54.js.map