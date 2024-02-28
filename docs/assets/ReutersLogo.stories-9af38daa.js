import{S as v,i as y,s as M,C as h,g as u,y as d,m as f,d as D,t as c,h as i,f as R,j as g}from"./index-43e9a565.js";import{g as L,a as C}from"./spread-8a54911c.js";import{p as j,M as x,T as A,S as P}from"./collect-stories-23d08061.js";import{R as w}from"./ReutersLogo-3457aa8f.js";import{w as b}from"./withParams-47e2ab71.js";const q=`The official home of the Reuters logo.

\`\`\`svelte
<script>
  import { ReutersLogo } from '@reuters-graphics/graphics-components';
<\/script>

<ReutersLogo />
\`\`\`
`;function E(l){let o,n;const s=[l[1]];let m={};for(let t=0;t<s.length;t+=1)m=h(m,s[t]);return o=new w({props:m}),{c(){u(o.$$.fragment)},m(t,a){f(o,t,a),n=!0},p(t,a){const p=a&2?L(s,[C(t[1])]):{};o.$set(p)},i(t){n||(c(o.$$.fragment,t),n=!0)},o(t){i(o.$$.fragment,t),n=!1},d(t){g(o,t)}}}function I(l){let o,n,s,m,t,a;const p=[{title:"Components/ReutersLogo"},{component:w},l[0]];let $={};for(let e=0;e<p.length;e+=1)$=h($,p[e]);return o=new x({props:$}),s=new A({props:{$$slots:{default:[E,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:l}}}),t=new P({props:{name:"Default"}}),{c(){u(o.$$.fragment),n=d(),u(s.$$.fragment),m=d(),u(t.$$.fragment)},m(e,r){f(o,e,r),D(e,n,r),f(s,e,r),D(e,m,r),f(t,e,r),a=!0},p(e,[r]){const T=r&1?L(p,[p[0],p[1],C(e[0])]):{};o.$set(T);const _={};r&6&&(_.$$scope={dirty:r,ctx:e}),s.$set(_)},i(e){a||(c(o.$$.fragment,e),c(s.$$.fragment,e),c(t.$$.fragment,e),a=!0)},o(e){i(o.$$.fragment,e),i(s.$$.fragment,e),i(t.$$.fragment,e),a=!1},d(e){e&&(R(n),R(m)),g(o,e),g(s,e),g(t,e)}}}function O(l){return[{...b(q),argTypes:{logoColour:{control:"color"},textColour:{control:"color"}}}]}class k extends v{constructor(o){super(),y(this,o,O,I,M,{})}}const S=j(k,{meta:{title:"Components/ReutersLogo"},stories:{"tpl:default":{name:"default",template:!0,source:"<ReutersLogo {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","ReutersLogo","withComponentDocs"]}),J=S.meta,K=["Default"],N=S.stories.Default;export{N as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=ReutersLogo.stories-9af38daa.js.map
