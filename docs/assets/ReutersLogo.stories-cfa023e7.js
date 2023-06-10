import{S as M,i as v,s as y,p as L,j as u,D,m as f,a as R,k as w,l as C,b as c,t as g,n as i,d as h}from"./index-25af778d.js";import{p as I,M as b,T as j,S as x}from"./collect-stories-cce06d4a.js";import{R as _}from"./ReutersLogo-9287cf54.js";import{w as A}from"./withParams-90715500.js";const P=`The official home of the Reuters logo.

\`\`\`html
<script>
  import { ReutersLogo } from '@reuters-graphics/graphics-components';
<\/script>

<ReutersLogo />
\`\`\`
`;function k(m){let o,n;const s=[m[1]];let l={};for(let t=0;t<s.length;t+=1)l=L(l,s[t]);return o=new _({props:l}),{c(){u(o.$$.fragment)},m(t,a){f(o,t,a),n=!0},p(t,a){const p=a&2?w(s,[C(t[1])]):{};o.$set(p)},i(t){n||(c(o.$$.fragment,t),n=!0)},o(t){g(o.$$.fragment,t),n=!1},d(t){i(o,t)}}}function q(m){let o,n,s,l,t,a;const p=[{title:"Components/ReutersLogo"},{component:_},m[0]];let $={};for(let e=0;e<p.length;e+=1)$=L($,p[e]);return o=new b({props:$}),s=new j({props:{$$slots:{default:[k,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:m}}}),t=new x({props:{name:"Default"}}),{c(){u(o.$$.fragment),n=D(),u(s.$$.fragment),l=D(),u(t.$$.fragment)},m(e,r){f(o,e,r),R(e,n,r),f(s,e,r),R(e,l,r),f(t,e,r),a=!0},p(e,[r]){const T=r&1?w(p,[p[0],r&0&&{component:_},r&1&&C(e[0])]):{};o.$set(T);const d={};r&6&&(d.$$scope={dirty:r,ctx:e}),s.$set(d)},i(e){a||(c(o.$$.fragment,e),c(s.$$.fragment,e),c(t.$$.fragment,e),a=!0)},o(e){g(o.$$.fragment,e),g(s.$$.fragment,e),g(t.$$.fragment,e),a=!1},d(e){i(o,e),e&&h(n),i(s,e),e&&h(l),i(t,e)}}}function E(m){return[{...A(P),argTypes:{logoColour:{control:"color"},textColour:{control:"color"}}}]}class O extends M{constructor(o){super(),v(this,o,E,q,y,{})}}const S=I(O,{meta:{title:"Components/ReutersLogo"},stories:{"tpl:default":{storyId:"components-reuterslogo--default",name:"default",template:!0,source:"<ReutersLogo {...args} />",hasArgs:!0},Default:{storyId:"components-reuterslogo--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","ReutersLogo","withComponentDocs"]}),H=S.meta,J=["Default"],K=S.stories.Default;export{K as Default,J as __namedExportsOrder,H as default};
//# sourceMappingURL=ReutersLogo.stories-cfa023e7.js.map
