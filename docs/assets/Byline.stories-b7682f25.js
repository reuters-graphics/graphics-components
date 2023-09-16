import{S as v,i as A,s as C,C as B,c as p,p as g,m as f,b as y,t as u,a as c,f as D,d as $}from"./index-2c1648fc.js";import{g as h,a as T}from"./spread-8a54911c.js";import{p as M,M as I,T as P,S as Z}from"./collect-stories-640c7888.js";import{B as b}from"./Byline-b58b294f.js";import{w as O}from"./withParams-47e2ab71.js";import"./each-e59479a4.js";import"./Block-d69850f9.js";import"./_commonjsHelpers-de833af9.js";import"./journalize-07958dc6.js";const k=`Byline and dateline.

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
`;function K(m){let n,r;const a=[m[1]];let i={};for(let t=0;t<a.length;t+=1)i=B(i,a[t]);return n=new b({props:i}),{c(){p(n.$$.fragment)},m(t,o){f(n,t,o),r=!0},p(t,o){const l=o&2?h(a,[T(t[1])]):{};n.$set(l)},i(t){r||(u(n.$$.fragment,t),r=!0)},o(t){c(n.$$.fragment,t),r=!1},d(t){$(n,t)}}}function R(m){let n,r,a,i,t,o;const l=[{title:"Components/Byline"},{component:b},m[0]];let _={};for(let e=0;e<l.length;e+=1)_=B(_,l[e]);return n=new I({props:_}),a=new P({props:{$$slots:{default:[K,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:m}}}),t=new Z({props:{name:"Default",args:{align:"left",authors:["Dea Bankova","Aditi Bhandari","Prasanta Kumar Dutta","Anurag Rao","Mariano Zafra"],publishTime:new Date("2021-09-12").toISOString(),updateTime:new Date("2021-09-12T13:57:00").toISOString()}}}),{c(){p(n.$$.fragment),r=g(),p(a.$$.fragment),i=g(),p(t.$$.fragment)},m(e,s){f(n,e,s),y(e,r,s),f(a,e,s),y(e,i,s),f(t,e,s),o=!0},p(e,[s]){const S=s&1?h(l,[l[0],l[1],T(e[0])]):{};n.$set(S);const d={};s&6&&(d.$$scope={dirty:s,ctx:e}),a.$set(d)},i(e){o||(u(n.$$.fragment,e),u(a.$$.fragment,e),u(t.$$.fragment,e),o=!0)},o(e){c(n.$$.fragment,e),c(a.$$.fragment,e),c(t.$$.fragment,e),o=!1},d(e){e&&(D(r),D(i)),$(n,e),$(a,e),$(t,e)}}}function j(m){return[{...O(k),argTypes:{align:{control:"select",options:["left","center"]}}}]}class q extends v{constructor(n){super(),A(this,n,j,R,C,{})}}const w=M(q,{meta:{title:"Components/Byline"},stories:{"tpl:default":{storyId:"components-byline--default",name:"default",template:!0,source:"<Byline {...args} />",hasArgs:!0},Default:{storyId:"components-byline--default",name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Byline","withComponentDocs"]}),Q=w.meta,U=["Default"],V=w.stories.Default;export{V as Default,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=Byline.stories-b7682f25.js.map
