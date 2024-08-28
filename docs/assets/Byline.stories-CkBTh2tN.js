import{S as v,i as A,s as M,l as B,c as p,o as d,m as f,h as y,t as u,a as c,k as D,d as $}from"./index-C9aKRT5A.js";import{g as h,a as T}from"./spread-CgU5AtxT.js";import{p as C,M as P,T as Z,S as k,w as I}from"./collect-stories-ceFdpR5E.js";import{B as w}from"./Byline-CgwnbxHA.js";import"./each-D6YF6ztN.js";import"./Block-C7biTRWl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./journalize-K6hK94UL.js";const O=`Byline and dateline.

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
`;function K(m){let n,r;const a=[m[1]];let i={};for(let t=0;t<a.length;t+=1)i=B(i,a[t]);return n=new w({props:i}),{c(){p(n.$$.fragment)},m(t,o){f(n,t,o),r=!0},p(t,o){const l=o&2?h(a,[T(t[1])]):{};n.$set(l)},i(t){r||(u(n.$$.fragment,t),r=!0)},o(t){c(n.$$.fragment,t),r=!1},d(t){$(n,t)}}}function R(m){let n,r,a,i,t,o;const l=[{title:"Components/Byline"},{component:w},m[0]];let _={};for(let e=0;e<l.length;e+=1)_=B(_,l[e]);return n=new P({props:_}),a=new Z({props:{$$slots:{default:[K,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:m}}}),t=new k({props:{name:"Default",args:{align:"left",authors:["Dea Bankova","Aditi Bhandari","Prasanta Kumar Dutta","Anurag Rao","Mariano Zafra"],publishTime:new Date("2021-09-12").toISOString(),updateTime:new Date("2021-09-12T13:57:00").toISOString()}}}),{c(){p(n.$$.fragment),r=d(),p(a.$$.fragment),i=d(),p(t.$$.fragment)},m(e,s){f(n,e,s),y(e,r,s),f(a,e,s),y(e,i,s),f(t,e,s),o=!0},p(e,[s]){const b=s&1?h(l,[l[0],l[1],T(e[0])]):{};n.$set(b);const g={};s&6&&(g.$$scope={dirty:s,ctx:e}),a.$set(g)},i(e){o||(u(n.$$.fragment,e),u(a.$$.fragment,e),u(t.$$.fragment,e),o=!0)},o(e){c(n.$$.fragment,e),c(a.$$.fragment,e),c(t.$$.fragment,e),o=!1},d(e){e&&(D(r),D(i)),$(n,e),$(a,e),$(t,e)}}}function j(m){return[{...I(O),argTypes:{align:{control:"select",options:["left","center"]}}}]}class q extends v{constructor(n){super(),A(this,n,j,R,M,{})}}const S=C(q,{meta:{title:"Components/Byline"},stories:{"tpl:default":{name:"default",template:!0,source:"<Byline {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Byline","withComponentDocs"]}),N=S.meta,Q=["Default"],U=S.stories.Default;export{U as Default,Q as __namedExportsOrder,N as default};
