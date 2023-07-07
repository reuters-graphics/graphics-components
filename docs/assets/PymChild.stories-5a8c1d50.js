import{S as v,i as D,s as b,o as A,p as S,j as c,D as _,m as d,a as y,k,l as x,b as u,t as f,n as h,d as $,w as H}from"./index-25af778d.js";import{w as I,p as T,M as U,T as N,S as q}from"./collect-stories-cce06d4a.js";import{p as E}from"./pym.v1-49c58be6.js";import{w as P}from"./withParams-90715500.js";import"./_commonjsHelpers-725317a4.js";const w=`A Pym.js child instance for embeddables.

\`\`\`html
<script>
  import { PymChild } from '@reuters-graphics/graphics-components';
<\/script>

<PymChild polling="{500}" />
\`\`\`

You can access the Pym.js child through its store in other components to send custom height updates to parent frames:

\`\`\`html
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
`,O=I(null);function V(p,s,r){let{polling:n=500}=s,i;return A(()=>{i=new E.Child({polling:n}),O.set(i)}),p.$$set=o=>{"polling"in o&&r(0,n=o.polling)},[n]}class g extends v{constructor(s){super(),D(this,s,V,null,b,{polling:0})}}g.__docgen={version:3,name:"PymChild.svelte",data:[{keywords:[],visibility:"public",description:"Pym.js polling interval",name:"polling",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:500}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Y(p){let s,r,n,i;const o=[p[0]];let m={};for(let t=0;t<o.length;t+=1)m=S(m,o[t]);return s=new g({props:m}),{c(){c(s.$$.fragment),r=_(),n=H("div"),n.textContent="Nothing to see here. 😎"},m(t,a){d(s,t,a),y(t,r,a),y(t,n,a),i=!0},p(t,a){const e=a&1?k(o,[x(t[0])]):{};s.$set(e)},i(t){i||(u(s.$$.fragment,t),i=!0)},o(t){f(s.$$.fragment,t),i=!1},d(t){h(s,t),t&&$(r),t&&$(n)}}}function z(p){let s,r,n,i,o,m;const t=[{title:"Utilities/PymChild"},{component:g},P(w)];let a={};for(let e=0;e<t.length;e+=1)a=S(a,t[e]);return s=new U({props:a}),n=new N({props:{$$slots:{default:[Y,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:p}}}),o=new q({props:{name:"Default"}}),{c(){c(s.$$.fragment),r=_(),c(n.$$.fragment),i=_(),c(o.$$.fragment)},m(e,l){d(s,e,l),y(e,r,l),d(n,e,l),y(e,i,l),d(o,e,l),m=!0},p(e,[l]){const M=l&0?k(t,[t[0],l&0&&{component:g},l&0&&x(P(w))]):{};s.$set(M);const C={};l&3&&(C.$$scope={dirty:l,ctx:e}),n.$set(C)},i(e){m||(u(s.$$.fragment,e),u(n.$$.fragment,e),u(o.$$.fragment,e),m=!0)},o(e){f(s.$$.fragment,e),f(n.$$.fragment,e),f(o.$$.fragment,e),m=!1},d(e){h(s,e),e&&$(r),h(n,e),e&&$(i),h(o,e)}}}class B extends v{constructor(s){super(),D(this,s,null,z,b,{})}}const j=T(B,{meta:{title:"Utilities/PymChild"},stories:{"tpl:default":{storyId:"utilities-pymchild--default",name:"default",template:!0,source:`<PymChild {...args} />
<div>Nothing to see here. 😎</div>`,hasArgs:!0},Default:{storyId:"utilities-pymchild--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","PymChild","withComponentDocs"]}),Q=j.meta,R=["Default"],W=j.stories.Default;export{W as Default,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=PymChild.stories-5a8c1d50.js.map
