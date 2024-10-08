import{S as P,i as v,s as b,p as k,l as w,c,o as y,m as d,h as $,t as u,a as f,k as g,d as h,q as x}from"./index-C9aKRT5A.js";import{g as M,a as j}from"./spread-CgU5AtxT.js";import{b as A,p as H,w as T,M as q,T as N,S as E}from"./collect-stories-ceFdpR5E.js";import{p as I}from"./pym.v1-CD-t3sYy.js";import"./_commonjsHelpers-BosuxZz1.js";const O=`A Pym.js child instance for embeddables.

\`\`\`svelte
<script>
  import { PymChild } from '@reuters-graphics/graphics-components';
<\/script>

<PymChild polling="{500}" />
\`\`\`

You can access the Pym.js child through its store in other components to send custom height updates to parent frames:

\`\`\`svelte
<script>
  import {
    PymChild,
    pymChildStore,
  } from '@reuters-graphics/graphics-components';

  const updateHeight = () => {
    if ($pymChildStore) $pymChildStore.sendHeight();
  };
<\/script>

<PymChild />

<button on:click="{updateHeight}">Update height</button>
\`\`\`
`,U=A(null);function V(p,t,r){let{polling:n=500}=t,l;return k(()=>{l=new I.Child({polling:n}),U.set(l)}),p.$$set=o=>{"polling"in o&&r(0,n=o.polling)},[n]}class _ extends P{constructor(t){super(),v(this,t,V,null,b,{polling:0})}}_.__docgen={version:3,name:"PymChild.svelte",data:[{keywords:[],visibility:"public",description:"Pym.js polling interval",name:"polling",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:500}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Y(p){let t,r,n,l;const o=[p[0]];let i={};for(let s=0;s<o.length;s+=1)i=w(i,o[s]);return t=new _({props:i}),{c(){c(t.$$.fragment),r=y(),n=x("div"),n.textContent="Nothing to see here. 😎"},m(s,a){d(t,s,a),$(s,r,a),$(s,n,a),l=!0},p(s,a){const e=a&1?M(o,[j(s[0])]):{};t.$set(e)},i(s){l||(u(t.$$.fragment,s),l=!0)},o(s){f(t.$$.fragment,s),l=!1},d(s){s&&(g(r),g(n)),h(t,s)}}}function z(p){let t,r,n,l,o,i;const s=[{title:"Components/PymChild"},{component:_},T(O)];let a={};for(let e=0;e<s.length;e+=1)a=w(a,s[e]);return t=new q({props:a}),n=new N({props:{$$slots:{default:[Y,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:p}}}),o=new E({props:{name:"Default"}}),{c(){c(t.$$.fragment),r=y(),c(n.$$.fragment),l=y(),c(o.$$.fragment)},m(e,m){d(t,e,m),$(e,r,m),d(n,e,m),$(e,l,m),d(o,e,m),i=!0},p(e,[m]){const S={};t.$set(S);const C={};m&3&&(C.$$scope={dirty:m,ctx:e}),n.$set(C)},i(e){i||(u(t.$$.fragment,e),u(n.$$.fragment,e),u(o.$$.fragment,e),i=!0)},o(e){f(t.$$.fragment,e),f(n.$$.fragment,e),f(o.$$.fragment,e),i=!1},d(e){e&&(g(r),g(l)),h(t,e),h(n,e),h(o,e)}}}class B extends P{constructor(t){super(),v(this,t,null,z,b,{})}}const D=H(B,{meta:{title:"Components/PymChild"},stories:{"tpl:default":{name:"default",template:!0,source:`<PymChild {...args} />
<div>Nothing to see here. 😎</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","PymChild","withComponentDocs"]}),Q=D.meta,R=["Default"],W=D.stories.Default;export{W as Default,R as __namedExportsOrder,Q as default};
