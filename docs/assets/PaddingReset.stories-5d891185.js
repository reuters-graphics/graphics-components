import{S,i as M,s as T,p as R,j as c,D as h,m,a as $,k as B,l as b,b as f,t as u,n as g,d as _,w as D,x as y,E as j}from"./index-25af778d.js";import{p as C,M as F,T as E,S as U}from"./collect-stories-cce06d4a.js";import{P as w}from"./PaddingReset-d848e1b7.js";import{B as q}from"./Block-9c89ee1a.js";import{w as P}from"./withParams-90715500.js";const k=`Sometimes you want a visual element to be fluid, i.e., edge-to-edge, but keep padding on text that's adajcent to it.

The \`PaddingReset\` component resets padding on the \`Article\` well that's been cancelled by a \`Block\` with a \`fluid\` width.

\`\`\`html
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

\`\`\`html
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
`;function O(d){let t;return{c(){t=D("div"),y(t,"class","inner svelte-2p4lln")},m(a,s){$(a,t,s)},p:j,d(a){a&&_(t)}}}function Y(d){let t,a,s,o;const i=[d[0]];let p={$$slots:{default:[O]},$$scope:{ctx:d}};for(let n=0;n<i.length;n+=1)p=R(p,i[n]);return s=new w({props:p}),{c(){t=D("div"),a=h(),c(s.$$.fragment),y(t,"class","outer svelte-2p4lln")},m(n,r){$(n,t,r),$(n,a,r),m(s,n,r),o=!0},p(n,r){const e=r&1?B(i,[b(n[0])]):{};r&2&&(e.$$scope={dirty:r,ctx:n}),s.$set(e)},i(n){o||(f(s.$$.fragment,n),o=!0)},o(n){u(s.$$.fragment,n),o=!1},d(n){n&&_(t),n&&_(a),g(s,n)}}}function z(d){let t,a;return t=new q({props:{width:"fluid",$$slots:{default:[Y]},$$scope:{ctx:d}}}),{c(){c(t.$$.fragment)},m(s,o){m(t,s,o),a=!0},p(s,o){const i={};o&3&&(i.$$scope={dirty:o,ctx:s}),t.$set(i)},i(s){a||(f(t.$$.fragment,s),a=!0)},o(s){u(t.$$.fragment,s),a=!1},d(s){g(t,s)}}}function G(d){let t,a,s,o,i,p;const n=[{title:"Utilities/PaddingReset"},{component:w},P(k)];let r={};for(let e=0;e<n.length;e+=1)r=R(r,n[e]);return t=new F({props:r}),s=new E({props:{$$slots:{default:[z,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:d}}}),i=new U({props:{name:"Default",args:{containerIsFluid:!0}}}),{c(){c(t.$$.fragment),a=h(),c(s.$$.fragment),o=h(),c(i.$$.fragment)},m(e,l){m(t,e,l),$(e,a,l),m(s,e,l),$(e,o,l),m(i,e,l),p=!0},p(e,[l]){const I=l&0?B(n,[n[0],l&0&&{component:w},l&0&&b(P(k))]):{};t.$set(I);const v={};l&3&&(v.$$scope={dirty:l,ctx:e}),s.$set(v)},i(e){p||(f(t.$$.fragment,e),f(s.$$.fragment,e),f(i.$$.fragment,e),p=!0)},o(e){u(t.$$.fragment,e),u(s.$$.fragment,e),u(i.$$.fragment,e),p=!1},d(e){g(t,e),e&&_(a),g(s,e),e&&_(o),g(i,e)}}}class x extends S{constructor(t){super(),M(this,t,null,G,T,{})}}x.__docgen={version:3,name:"PaddingReset.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const A=C(x,{meta:{title:"Utilities/PaddingReset"},stories:{"tpl:default":{storyId:"utilities-paddingreset--default",name:"default",template:!0,source:`<Block width="fluid">
  <div class="outer"></div>
  <PaddingReset {...args}>
    <div class="inner"></div>
  </PaddingReset>
</Block>`,hasArgs:!0},Default:{storyId:"utilities-paddingreset--default",name:"Default",template:!1,hasArgs:!0}},allocatedIds:["default","Meta","Template","Story","componentDocs","PaddingReset","Block","withComponentDocs"]}),Q=A.meta,V=["Default"],W=A.stories.Default;export{W as Default,V as __namedExportsOrder,Q as default};
//# sourceMappingURL=PaddingReset.stories-5d891185.js.map
