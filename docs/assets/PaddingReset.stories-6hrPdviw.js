import{S as y,i as A,s as S,l as v,c,o as h,m,h as $,t as f,a as u,k as _,d as g,q as k,f as P,n as x}from"./index-C9aKRT5A.js";import{g as C,a as I}from"./spread-CgU5AtxT.js";import{p as M,w as T,M as F,T as j,S as q}from"./collect-stories-ceFdpR5E.js";import{P as R}from"./PaddingReset-CiOBBFtT.js";import{B as E}from"./Block-C7biTRWl.js";const O=`Sometimes you want a visual element to be fluid, i.e., edge-to-edge, but keep padding on text that's adajcent to it.

The \`PaddingReset\` component resets padding on the \`Article\` well that's been cancelled by a \`Block\` with a \`fluid\` width.

\`\`\`svelte
<script>
  import { Block, PaddingReset } from '@reuters-graphics/graphics-components';
<\/script>

<Block width="fluid">
  <!-- An edge-to-edge image -->
  <img src="https//..." alt="..." width="100%" />
  <PaddingReset>
    <p>A caption for the image that will still be padded.</p>
  </PaddingReset>
</Block>
\`\`\`

You can also add the padding conditionally by using the \`containerIsFluid\` prop, which is what many other components in this library do.

\`\`\`svelte
<script>
  import { Block, PaddingReset } from '@reuters-graphics/graphics-components';

  export let src = 'https://...';
  export let width = 'fluid';
<\/script>

<Block width="{width}">
  <img src="{src}" alt="..." width="100%" />
  <PaddingReset containerIsFluid="{width === 'fluid'}">
    <p>A caption for the image that will be padded when Block is fluid.</p>
  </PaddingReset>
</Block>
\`\`\`
`;function Y(l){let t;return{c(){t=k("div"),P(t,"class","inner svelte-2p4lln")},m(a,s){$(a,t,s)},p:x,d(a){a&&_(t)}}}function z(l){let t,a,s,o;const i=[l[0]];let d={$$slots:{default:[Y]},$$scope:{ctx:l}};for(let n=0;n<i.length;n+=1)d=v(d,i[n]);return s=new R({props:d}),{c(){t=k("div"),a=h(),c(s.$$.fragment),P(t,"class","outer svelte-2p4lln")},m(n,r){$(n,t,r),$(n,a,r),m(s,n,r),o=!0},p(n,r){const e=r&1?C(i,[I(n[0])]):{};r&2&&(e.$$scope={dirty:r,ctx:n}),s.$set(e)},i(n){o||(f(s.$$.fragment,n),o=!0)},o(n){u(s.$$.fragment,n),o=!1},d(n){n&&(_(t),_(a)),g(s,n)}}}function G(l){let t,a;return t=new E({props:{width:"fluid",$$slots:{default:[z]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},m(s,o){m(t,s,o),a=!0},p(s,o){const i={};o&3&&(i.$$scope={dirty:o,ctx:s}),t.$set(i)},i(s){a||(f(t.$$.fragment,s),a=!0)},o(s){u(t.$$.fragment,s),a=!1},d(s){g(t,s)}}}function H(l){let t,a,s,o,i,d;const n=[{title:"Components/PaddingReset"},{component:R},T(O)];let r={};for(let e=0;e<n.length;e+=1)r=v(r,n[e]);return t=new F({props:r}),s=new j({props:{$$slots:{default:[G,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:l}}}),i=new q({props:{name:"Default",args:{containerIsFluid:!0}}}),{c(){c(t.$$.fragment),a=h(),c(s.$$.fragment),o=h(),c(i.$$.fragment)},m(e,p){m(t,e,p),$(e,a,p),m(s,e,p),$(e,o,p),m(i,e,p),d=!0},p(e,[p]){const D={};t.$set(D);const w={};p&3&&(w.$$scope={dirty:p,ctx:e}),s.$set(w)},i(e){d||(f(t.$$.fragment,e),f(s.$$.fragment,e),f(i.$$.fragment,e),d=!0)},o(e){u(t.$$.fragment,e),u(s.$$.fragment,e),u(i.$$.fragment,e),d=!1},d(e){e&&(_(a),_(o)),g(t,e),g(s,e),g(i,e)}}}class B extends y{constructor(t){super(),A(this,t,null,H,S,{})}}B.__docgen={version:3,name:"PaddingReset.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const b=M(B,{meta:{title:"Components/PaddingReset"},stories:{"tpl:default":{name:"default",template:!0,source:`<Block width="fluid">
  <div class="outer"></div>
  <PaddingReset {...args}>
    <div class="inner"></div>
  </PaddingReset>
</Block>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","PaddingReset","Block","withComponentDocs"]}),U=b.meta,V=["Default"],W=b.stories.Default;export{W as Default,V as __namedExportsOrder,U as default};
