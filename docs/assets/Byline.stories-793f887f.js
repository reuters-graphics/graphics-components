import{S as v,i as A,s as C,C as B,g as l,z as d,m as f,d as y,t as u,h as c,f as D,j as $}from"./index-85f88930.js";import{g as h,a as T}from"./spread-8a54911c.js";import{p as M,M as P,T as Z,S as I}from"./collect-stories-fa95313f.js";import{B as w}from"./Byline-bc75d557.js";import{w as O}from"./withParams-47e2ab71.js";import"./each-e59479a4.js";import"./Block-d1b8152c.js";import"./_commonjsHelpers-de833af9.js";import"./journalize-07958dc6.js";const j=`Byline and dateline.

\`\`\`svelte
<script>
  import { Byline } from '@reuters-graphics/graphics-components';
<\/script>

<Byline
  authors="{[
    'Dea Bankova',
    'Aditi Bhandari',
    'Prasanta Kumar Dutta',
    'Anurag Rao',
    'Mariano Zafra',
  ]}"
  publishTime="2021-09-12T00:00:00.000Z"
  updateTime="2021-09-12T12:57:00.000Z"
/>
\`\`\`
`;function k(p){let n,r;const a=[p[1]];let i={};for(let t=0;t<a.length;t+=1)i=B(i,a[t]);return n=new w({props:i}),{c(){l(n.$$.fragment)},m(t,o){f(n,t,o),r=!0},p(t,o){const m=o&2?h(a,[T(t[1])]):{};n.$set(m)},i(t){r||(u(n.$$.fragment,t),r=!0)},o(t){c(n.$$.fragment,t),r=!1},d(t){$(n,t)}}}function K(p){let n,r,a,i,t,o;const m=[{title:"Components/Byline"},{component:w},p[0]];let g={};for(let e=0;e<m.length;e+=1)g=B(g,m[e]);return n=new P({props:g}),a=new Z({props:{$$slots:{default:[k,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:p}}}),t=new I({props:{name:"Default",args:{align:"left",authors:["Dea Bankova","Aditi Bhandari","Prasanta Kumar Dutta","Anurag Rao","Mariano Zafra"],publishTime:new Date("2021-09-12").toISOString(),updateTime:new Date("2021-09-12T13:57:00").toISOString()}}}),{c(){l(n.$$.fragment),r=d(),l(a.$$.fragment),i=d(),l(t.$$.fragment)},m(e,s){f(n,e,s),y(e,r,s),f(a,e,s),y(e,i,s),f(t,e,s),o=!0},p(e,[s]){const b=s&1?h(m,[m[0],m[1],T(e[0])]):{};n.$set(b);const _={};s&6&&(_.$$scope={dirty:s,ctx:e}),a.$set(_)},i(e){o||(u(n.$$.fragment,e),u(a.$$.fragment,e),u(t.$$.fragment,e),o=!0)},o(e){c(n.$$.fragment,e),c(a.$$.fragment,e),c(t.$$.fragment,e),o=!1},d(e){e&&(D(r),D(i)),$(n,e),$(a,e),$(t,e)}}}function R(p){return[{...O(j),argTypes:{align:{control:"select",options:["left","center"]}}}]}class q extends v{constructor(n){super(),A(this,n,R,K,C,{})}}const S=M(q,{meta:{title:"Components/Byline"},stories:{"tpl:default":{name:"default",template:!0,source:"<Byline {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Byline","withComponentDocs"]}),Q=S.meta,U=["Default"],V=S.stories.Default;export{V as Default,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=Byline.stories-793f887f.js.map
