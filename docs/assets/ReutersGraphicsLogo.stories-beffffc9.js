import{S as y,i as C,s as S,C as D,c,y as h,m as u,b as d,t as i,a as f,f as R,d as g}from"./index-9d4f07d0.js";import{g as v,a as M}from"./spread-8a54911c.js";import{p as b,M as x,T,S as A}from"./collect-stories-4874c973.js";import{R as G}from"./ReutersGraphicsLogo-33970c23.js";import{w as j}from"./withParams-47e2ab71.js";const q=`Reuters Graphics' official logo.

> Generally, only used for internal tools. For public pages, use the [ReutersLogo](./?path=/docs/components-reuterslogo--default) component.

\`\`\`svelte
<script>
  import { ReutersGraphicsLogo } from '@reuters-graphics/graphics-components';
<\/script>

<ReutersGraphicsLogo />
\`\`\`
`;function E(l){let s,r;const o=[l[0]];let p={};for(let t=0;t<o.length;t+=1)p=D(p,o[t]);return s=new G({props:p}),{c(){c(s.$$.fragment)},m(t,a){u(s,t,a),r=!0},p(t,a){const m=a&1?v(o,[M(t[0])]):{};s.$set(m)},i(t){r||(i(s.$$.fragment,t),r=!0)},o(t){f(s.$$.fragment,t),r=!1},d(t){g(s,t)}}}function F(l){let s,r,o,p,t,a;const m=[{title:"Components/ReutersGraphicsLogo"},{component:G},j(q)];let $={};for(let e=0;e<m.length;e+=1)$=D($,m[e]);return s=new x({props:$}),o=new T({props:{$$slots:{default:[E,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:l}}}),t=new A({props:{name:"Default",args:{}}}),{c(){c(s.$$.fragment),r=h(),c(o.$$.fragment),p=h(),c(t.$$.fragment)},m(e,n){u(s,e,n),d(e,r,n),u(o,e,n),d(e,p,n),u(t,e,n),a=!0},p(e,[n]){const w={};s.$set(w);const _={};n&3&&(_.$$scope={dirty:n,ctx:e}),o.$set(_)},i(e){a||(i(s.$$.fragment,e),i(o.$$.fragment,e),i(t.$$.fragment,e),a=!0)},o(e){f(s.$$.fragment,e),f(o.$$.fragment,e),f(t.$$.fragment,e),a=!1},d(e){e&&(R(r),R(p)),g(s,e),g(o,e),g(t,e)}}}class I extends y{constructor(s){super(),C(this,s,null,F,S,{})}}const L=b(I,{meta:{title:"Components/ReutersGraphicsLogo"},stories:{"tpl:default":{name:"default",template:!0,source:"<ReutersGraphicsLogo {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","ReutersGraphicsLogo","withComponentDocs"]}),J=L.meta,K=["Default"],N=L.stories.Default;export{N as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=ReutersGraphicsLogo.stories-beffffc9.js.map
