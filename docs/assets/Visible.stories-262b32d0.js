import{S as U,i as T,s as N,q as L,w as P,a as b,u as q,r as H,v as B,b as h,t as v,d as _,o as R,f as Y,p as S,j as y,D,m as g,k as A,l as O,n as w,e as F}from"./index-25af778d.js";import{p as G,M as J,T as K,S as Q}from"./collect-stories-cce06d4a.js";import{w as x,b as M}from"./withParams-90715500.js";const W=`Wrap components or other HTML elements to determine if they are visible on the page using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

This is really useful for lazy loading elements, especially expensive media files or components that fetch lots of data. You can also use it trigger animations or play media once a reader scrolls a component into view.

> **Pro tip:** Don't use this for content that's "above the fold" at the top of the page. That'll just slow down the first load of important visible content.

\`\`\`html
<script>
  import { Visible } from '@reuters-graphics/graphics-components';
<\/script>

<Visible let:visible>
  {#if visible}
  <p>Visible!</p>
  {:else}
  <p>Not yet visible.</p>
  {/if}
</Visible>
\`\`\`
`,C=`<script>
  import { Visible } from '@reuters-graphics/graphics-components';
<\/script>

<Visible let:visible>
  {#if visible}
    <p>Visible!</p>
  {:else}
    <p>Not yet visible.</p>
  {/if}
</Visible>
`,X=a=>({visible:a&1}),z=a=>({visible:a[0]});function Z(a){let t,s;const o=a[9].default,i=L(o,a,a[8],z);return{c(){t=P("div"),i&&i.c()},m(e,r){b(e,t,r),i&&i.m(t,null),a[10](t),s=!0},p(e,[r]){i&&i.p&&(!s||r&257)&&q(i,o,e,e[8],s?B(o,e[8],r,X):H(e[8]),z)},i(e){s||(h(i,e),s=!0)},o(e){v(i,e),s=!1},d(e){e&&_(t),i&&i.d(e),a[10](null)}}}function $(a,t,s){let{$$slots:o={},$$scope:i}=t,{once:e=!1}=t,{top:r=0}=t,{bottom:f=0}=t,{left:m=0}=t,{right:p=0}=t,{threshold:d=0}=t,n=!1,c;R(()=>{if(typeof IntersectionObserver<"u"){const u=`${f}px ${m}px ${r}px ${p}px`,V=new IntersectionObserver(E=>{s(0,n=E[0].isIntersecting),n&&e&&V.unobserve(c)},{rootMargin:u,threshold:d});return V.observe(c),()=>V.unobserve(c)}function l(){const u=c.getBoundingClientRect();s(0,n=u.bottom+f>0&&u.right+p>0&&u.top-r<window.innerHeight&&u.left-m<window.innerWidth),n&&e&&window.removeEventListener("scroll",l)}return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)});function I(l){Y[l?"unshift":"push"](()=>{c=l,s(1,c)})}return a.$$set=l=>{"once"in l&&s(2,e=l.once),"top"in l&&s(3,r=l.top),"bottom"in l&&s(4,f=l.bottom),"left"in l&&s(5,m=l.left),"right"in l&&s(6,p=l.right),"threshold"in l&&s(7,d=l.threshold),"$$scope"in l&&s(8,i=l.$$scope)},[n,c,e,r,f,m,p,d,i,o,I]}class k extends U{constructor(t){super(),T(this,t,$,Z,N,{once:2,top:3,bottom:4,left:5,right:6,threshold:7})}}k.__docgen={version:3,name:"Visible.svelte",data:[{keywords:[],visibility:"public",description:`Whether to change visibility just once.

Useful for loading expensive images or other media and then keeping them around once they're first loaded.`,name:"once",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `top`.",name:"top",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[],visibility:"public",description:"Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `bottom`.",name:"bottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[],visibility:"public",description:"Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `left`.",name:"left",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[],visibility:"public",description:"Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `right`.",name:"right",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[],visibility:"public",description:"Set the Intersection Observer [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold).",name:"threshold",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"An element or component",name:"default",params:[{name:"visible",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"visible",type:{kind:"type",text:"*",type:"any"}}]}],refs:[]};function ee(a){let t;return{c(){t=P("p"),t.textContent="Not yet visible."},m(s,o){b(s,t,o)},d(s){s&&_(t)}}}function te(a){let t;return{c(){t=P("p"),t.textContent="Visible!"},m(s,o){b(s,t,o)},d(s){s&&_(t)}}}function ne(a){let t;function s(e,r){return e[1]?te:ee}let o=s(a),i=o(a);return{c(){i.c(),t=F()},m(e,r){i.m(e,r),b(e,t,r)},p(e,r){o!==(o=s(e))&&(i.d(1),i=o(e),i&&(i.c(),i.m(t.parentNode,t)))},d(e){i.d(e),e&&_(t)}}}function se(a){let t,s;const o=[a[0]];let i={$$slots:{default:[ne,({visible:e})=>({1:e}),({visible:e})=>e?2:0]},$$scope:{ctx:a}};for(let e=0;e<o.length;e+=1)i=S(i,o[e]);return t=new k({props:i}),{c(){y(t.$$.fragment)},m(e,r){g(t,e,r),s=!0},p(e,r){const f=r&1?A(o,[O(e[0])]):{};r&6&&(f.$$scope={dirty:r,ctx:e}),t.$set(f)},i(e){s||(h(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function ie(a){let t,s,o,i,e,r;const f=[{title:"Components/Visible"},{component:k},x(W)];let m={};for(let n=0;n<f.length;n+=1)m=S(m,f[n]);t=new J({props:m}),o=new K({props:{$$slots:{default:[se,({args:n})=>({0:n}),({args:n})=>n?1:0]},$$scope:{ctx:a}}});const p=[{name:"Default"},M({svelte:C})];let d={};for(let n=0;n<p.length;n+=1)d=S(d,p[n]);return e=new Q({props:d}),{c(){y(t.$$.fragment),s=D(),y(o.$$.fragment),i=D(),y(e.$$.fragment)},m(n,c){g(t,n,c),b(n,s,c),g(o,n,c),b(n,i,c),g(e,n,c),r=!0},p(n,[c]){const I=c&0?A(f,[f[0],c&0&&{component:k},c&0&&O(x(W))]):{};t.$set(I);const l={};c&5&&(l.$$scope={dirty:c,ctx:n}),o.$set(l);const u=c&0?A(p,[p[0],O(M({svelte:C}))]):{};e.$set(u)},i(n){r||(h(t.$$.fragment,n),h(o.$$.fragment,n),h(e.$$.fragment,n),r=!0)},o(n){v(t.$$.fragment,n),v(o.$$.fragment,n),v(e.$$.fragment,n),r=!1},d(n){w(t,n),n&&_(s),w(o,n),n&&_(i),w(e,n)}}}class oe extends U{constructor(t){super(),T(this,t,null,ie,N,{})}}const j=G(oe,{meta:{title:"Components/Visible"},stories:{"tpl:default":{storyId:"components-visible--default",name:"default",template:!0,source:`<Visible {...args} let:visible>
  {#if visible}
    <p>Visible!</p>
  {:else}
    <p>Not yet visible.</p>
  {/if}
</Visible>`,hasArgs:!0},Default:{storyId:"components-visible--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","defaultSnippet","Visible","withSource","withComponentDocs"]}),ce=j.meta,fe=["Default"],pe=j.stories.Default;export{pe as Default,fe as __namedExportsOrder,ce as default};
//# sourceMappingURL=Visible.stories-262b32d0.js.map
