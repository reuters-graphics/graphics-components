import{S as D,i as x,s as M,y as C,q as S,h as b,z as U,A as T,B as N,t as h,a as y,k as _,p as E,v as L,l as V,c as g,o as O,m as v,d as k,D as j}from"./index-C9aKRT5A.js";import{g as q,a as B}from"./spread-CgU5AtxT.js";import{p as H,w as R,M as Y,T as F,c as G,S as J}from"./collect-stories-ceFdpR5E.js";const K=`Wrap components or other HTML elements to determine if they are visible on the page using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

This is really useful for lazy loading elements, especially expensive media files or components that fetch lots of data. You can also use it trigger animations or play media once a reader scrolls a component into view.

> **Pro tip:** Don't use this for content that's "above the fold" at the top of the page. That'll just slow down the first load of important visible content.

\`\`\`svelte
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
`,Q=`<script>
  import { Visible } from '@reuters-graphics/graphics-components';
<\/script>

<Visible let:visible>
  {#if visible}
    <p>Visible!</p>
  {:else}
    <p>Not yet visible.</p>
  {/if}
</Visible>
`,X=a=>({visible:a&1}),P=a=>({visible:a[0]});function Z(a){let t,s;const o=a[9].default,i=C(o,a,a[8],P);return{c(){t=S("div"),i&&i.c()},m(e,r){b(e,t,r),i&&i.m(t,null),a[10](t),s=!0},p(e,[r]){i&&i.p&&(!s||r&257)&&U(i,o,e,e[8],s?N(o,e[8],r,X):T(e[8]),P)},i(e){s||(h(i,e),s=!0)},o(e){y(i,e),s=!1},d(e){e&&_(t),i&&i.d(e),a[10](null)}}}function $(a,t,s){let{$$slots:o={},$$scope:i}=t,{once:e=!1}=t,{top:r=0}=t,{bottom:p=0}=t,{left:f=0}=t,{right:d=0}=t,{threshold:u=0}=t,n=!1,c;E(()=>{if(typeof IntersectionObserver<"u"){const m=`${p}px ${f}px ${r}px ${d}px`,I=new IntersectionObserver(z=>{s(0,n=z[0].isIntersecting),n&&e&&I.unobserve(c)},{rootMargin:m,threshold:u});return I.observe(c),()=>I.unobserve(c)}function l(){const m=c.getBoundingClientRect();s(0,n=m.bottom+p>0&&m.right+d>0&&m.top-r<window.innerHeight&&m.left-f<window.innerWidth),n&&e&&window.removeEventListener("scroll",l)}return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)});function w(l){L[l?"unshift":"push"](()=>{c=l,s(1,c)})}return a.$$set=l=>{"once"in l&&s(2,e=l.once),"top"in l&&s(3,r=l.top),"bottom"in l&&s(4,p=l.bottom),"left"in l&&s(5,f=l.left),"right"in l&&s(6,d=l.right),"threshold"in l&&s(7,u=l.threshold),"$$scope"in l&&s(8,i=l.$$scope)},[n,c,e,r,p,f,d,u,i,o,w]}class A extends D{constructor(t){super(),x(this,t,$,Z,M,{once:2,top:3,bottom:4,left:5,right:6,threshold:7})}}A.__docgen={version:3,name:"Visible.svelte",data:[{keywords:[],visibility:"public",description:`Whether to change visibility just once.

Useful for loading expensive images or other media and then keeping them around once they're first loaded.`,name:"once",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `top`.",name:"top",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[],visibility:"public",description:"Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `bottom`.",name:"bottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[],visibility:"public",description:"Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `left`.",name:"left",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[],visibility:"public",description:"Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `right`.",name:"right",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[],visibility:"public",description:"Set the Intersection Observer [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold).",name:"threshold",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"An element or component",name:"default",params:[{name:"{visible}",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"{visible}",type:{kind:"type",text:"*",type:"any"}}]}],refs:[]};function ee(a){let t;return{c(){t=S("p"),t.textContent="Not yet visible."},m(s,o){b(s,t,o)},d(s){s&&_(t)}}}function te(a){let t;return{c(){t=S("p"),t.textContent="Visible!"},m(s,o){b(s,t,o)},d(s){s&&_(t)}}}function ne(a){let t;function s(e,r){return e[1]?te:ee}let o=s(a),i=o(a);return{c(){i.c(),t=j()},m(e,r){i.m(e,r),b(e,t,r)},p(e,r){o!==(o=s(e))&&(i.d(1),i=o(e),i&&(i.c(),i.m(t.parentNode,t)))},d(e){e&&_(t),i.d(e)}}}function se(a){let t,s;const o=[a[0]];let i={$$slots:{default:[ne,({visible:e})=>({1:e}),({visible:e})=>e?2:0]},$$scope:{ctx:a}};for(let e=0;e<o.length;e+=1)i=V(i,o[e]);return t=new A({props:i}),{c(){g(t.$$.fragment)},m(e,r){v(t,e,r),s=!0},p(e,r){const p=r&1?q(o,[B(e[0])]):{};r&6&&(p.$$scope={dirty:r,ctx:e}),t.$set(p)},i(e){s||(h(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){k(t,e)}}}function ie(a){let t,s,o,i,e,r;const p=[{title:"Components/Visible"},{component:A},R(K)];let f={};for(let n=0;n<p.length;n+=1)f=V(f,p[n]);t=new Y({props:f}),o=new F({props:{$$slots:{default:[se,({args:n})=>({0:n}),({args:n})=>n?1:0]},$$scope:{ctx:a}}});const d=[{name:"Default"},G({svelte:Q})];let u={};for(let n=0;n<d.length;n+=1)u=V(u,d[n]);return e=new J({props:u}),{c(){g(t.$$.fragment),s=O(),g(o.$$.fragment),i=O(),g(e.$$.fragment)},m(n,c){v(t,n,c),b(n,s,c),v(o,n,c),b(n,i,c),v(e,n,c),r=!0},p(n,[c]){const w={};t.$set(w);const l={};c&5&&(l.$$scope={dirty:c,ctx:n}),o.$set(l);const m={};e.$set(m)},i(n){r||(h(t.$$.fragment,n),h(o.$$.fragment,n),h(e.$$.fragment,n),r=!0)},o(n){y(t.$$.fragment,n),y(o.$$.fragment,n),y(e.$$.fragment,n),r=!1},d(n){n&&(_(s),_(i)),k(t,n),k(o,n),k(e,n)}}}class oe extends D{constructor(t){super(),x(this,t,null,ie,M,{})}}const W=H(oe,{meta:{title:"Components/Visible"},stories:{"tpl:default":{name:"default",template:!0,source:`<Visible {...args} let:visible>
  {#if visible}
    <p>Visible!</p>
  {:else}
    <p>Not yet visible.</p>
  {/if}
</Visible>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","defaultSnippet","Visible","withSource","withComponentDocs"]}),ce=W.meta,pe=["Default"],fe=W.stories.Default;export{fe as Default,pe as __namedExportsOrder,ce as default};
