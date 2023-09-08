import{S as D,i as A,s as C,C as v,g as c,y as h,m,d as $,t as f,h as u,f as _,j as g,o as P,b as R,n as I}from"./index-df681c7c.js";import{g as S,a as x}from"./spread-8a54911c.js";import{p as M,M as T,T as j,S as F}from"./collect-stories-a6a786e2.js";import{P as k}from"./PaddingReset-6a0440e6.js";import{B as q}from"./Block-f95db830.js";import{w as E}from"./withParams-47e2ab71.js";const O=`Sometimes you want a visual element to be fluid, i.e., edge-to-edge, but keep padding on text that's adajcent to it.

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
`;function Y(d){let t;return{c(){t=P("div"),R(t,"class","inner svelte-2p4lln")},m(a,s){$(a,t,s)},p:I,d(a){a&&_(t)}}}function z(d){let t,a,s,o;const r=[d[0]];let l={$$slots:{default:[Y]},$$scope:{ctx:d}};for(let n=0;n<r.length;n+=1)l=v(l,r[n]);return s=new k({props:l}),{c(){t=P("div"),a=h(),c(s.$$.fragment),R(t,"class","outer svelte-2p4lln")},m(n,i){$(n,t,i),$(n,a,i),m(s,n,i),o=!0},p(n,i){const e=i&1?S(r,[x(n[0])]):{};i&2&&(e.$$scope={dirty:i,ctx:n}),s.$set(e)},i(n){o||(f(s.$$.fragment,n),o=!0)},o(n){u(s.$$.fragment,n),o=!1},d(n){n&&(_(t),_(a)),g(s,n)}}}function G(d){let t,a;return t=new q({props:{width:"fluid",$$slots:{default:[z]},$$scope:{ctx:d}}}),{c(){c(t.$$.fragment)},m(s,o){m(t,s,o),a=!0},p(s,o){const r={};o&3&&(r.$$scope={dirty:o,ctx:s}),t.$set(r)},i(s){a||(f(t.$$.fragment,s),a=!0)},o(s){u(t.$$.fragment,s),a=!1},d(s){g(t,s)}}}function H(d){let t,a,s,o,r,l;const n=[{title:"Components/PaddingReset"},{component:k},E(O)];let i={};for(let e=0;e<n.length;e+=1)i=v(i,n[e]);return t=new T({props:i}),s=new j({props:{$$slots:{default:[G,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:d}}}),r=new F({props:{name:"Default",args:{containerIsFluid:!0}}}),{c(){c(t.$$.fragment),a=h(),c(s.$$.fragment),o=h(),c(r.$$.fragment)},m(e,p){m(t,e,p),$(e,a,p),m(s,e,p),$(e,o,p),m(r,e,p),l=!0},p(e,[p]){const y={};t.$set(y);const w={};p&3&&(w.$$scope={dirty:p,ctx:e}),s.$set(w)},i(e){l||(f(t.$$.fragment,e),f(s.$$.fragment,e),f(r.$$.fragment,e),l=!0)},o(e){u(t.$$.fragment,e),u(s.$$.fragment,e),u(r.$$.fragment,e),l=!1},d(e){e&&(_(a),_(o)),g(t,e),g(s,e),g(r,e)}}}class B extends D{constructor(t){super(),A(this,t,null,H,C,{})}}B.__docgen={version:3,name:"PaddingReset.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const b=M(B,{meta:{title:"Components/PaddingReset"},stories:{"tpl:default":{storyId:"components-paddingreset--default",name:"default",template:!0,source:`<Block width="fluid">
  <div class="outer"></div>
  <PaddingReset {...args}>
    <div class="inner"></div>
  </PaddingReset>
</Block>`,hasArgs:!0},Default:{storyId:"components-paddingreset--default",name:"Default",template:!1,source:"",hasArgs:!0}},allocatedIds:["default","Meta","Template","Story","componentDocs","PaddingReset","Block","withComponentDocs"]}),V=b.meta,W=["Default"],X=b.stories.Default;export{X as Default,W as __namedExportsOrder,V as default};
//# sourceMappingURL=PaddingReset.stories-ae0230d2.js.map
