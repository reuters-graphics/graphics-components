import{S as v,i as A,s as C,C as B,c as l,y as d,m as f,b as y,t as u,a as c,f as D,d as $}from"./index-22a9b7f9.js";import{g as h,a as T}from"./spread-8a54911c.js";import{p as M,M as P,T as Z,S as I}from"./collect-stories-4618f393.js";import{B as w}from"./Byline-0539bfbd.js";import{w as O}from"./withParams-47e2ab71.js";import"./each-e59479a4.js";import"./Block-98bec5bc.js";import"./_commonjsHelpers-de833af9.js";import"./journalize-07958dc6.js";const k=`Byline and dateline.

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
`;function K(p){let n,r;const a=[p[1]];let i={};for(let t=0;t<a.length;t+=1)i=B(i,a[t]);return n=new w({props:i}),{c(){l(n.$$.fragment)},m(t,o){f(n,t,o),r=!0},p(t,o){const m=o&2?h(a,[T(t[1])]):{};n.$set(m)},i(t){r||(u(n.$$.fragment,t),r=!0)},o(t){c(n.$$.fragment,t),r=!1},d(t){$(n,t)}}}function R(p){let n,r,a,i,t,o;const m=[{title:"Components/Byline"},{component:w},p[0]];let _={};for(let e=0;e<m.length;e+=1)_=B(_,m[e]);return n=new P({props:_}),a=new Z({props:{$$slots:{default:[K,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:p}}}),t=new I({props:{name:"Default",args:{align:"left",authors:["Dea Bankova","Aditi Bhandari","Prasanta Kumar Dutta","Anurag Rao","Mariano Zafra"],publishTime:new Date("2021-09-12").toISOString(),updateTime:new Date("2021-09-12T13:57:00").toISOString()}}}),{c(){l(n.$$.fragment),r=d(),l(a.$$.fragment),i=d(),l(t.$$.fragment)},m(e,s){f(n,e,s),y(e,r,s),f(a,e,s),y(e,i,s),f(t,e,s),o=!0},p(e,[s]){const b=s&1?h(m,[m[0],m[1],T(e[0])]):{};n.$set(b);const g={};s&6&&(g.$$scope={dirty:s,ctx:e}),a.$set(g)},i(e){o||(u(n.$$.fragment,e),u(a.$$.fragment,e),u(t.$$.fragment,e),o=!0)},o(e){c(n.$$.fragment,e),c(a.$$.fragment,e),c(t.$$.fragment,e),o=!1},d(e){e&&(D(r),D(i)),$(n,e),$(a,e),$(t,e)}}}function j(p){return[{...O(k),argTypes:{align:{control:"select",options:["left","center"]}}}]}class q extends v{constructor(n){super(),A(this,n,j,R,C,{})}}const S=M(q,{meta:{title:"Components/Byline"},stories:{"tpl:default":{name:"default",template:!0,source:"<Byline {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Byline","withComponentDocs"]}),Q=S.meta,U=["Default"],V=S.stories.Default;export{V as Default,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=Byline.stories-bb5d36ec.js.map
