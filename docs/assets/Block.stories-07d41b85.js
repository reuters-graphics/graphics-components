import{S as ne,i as le,s as ae,C as O,g as u,y as _,m as p,d as w,t as $,h as m,f as h,j as f,o as I,b as W,e as y,n as Z,z as T}from"./index-df681c7c.js";import{g as ee,a as te}from"./spread-8a54911c.js";import{p as re,M as ce,T as ie,S as q}from"./collect-stories-a6a786e2.js";import{B}from"./Block-2886d499.js";import{A as se}from"./Article-6674aca3.js";import{b as X,w as de}from"./withParams-47e2ab71.js";const ue=`The \`Block\` component is the basic building block of stories, a responsive container that wraps each section of your piece.

Blocks are stacked vertically within the well created by the [\`Article\`](./?path=/docs/layout-article) component. They can have different widths on larger screens depending on the \`width\` prop.

> 📌 Many of our other components already use the \`Block\` component, internally. You'll usually only need to use it yourself if you're making something custom.

\`\`\`svelte
<script>
  import { Block } from '@reuters-graphics/graphics-components';
<\/script>

<Block width="normal">
  <!-- Your stuff for this block -->
</Block>
\`\`\`
`,pe=`Our article well is designed to provide a basic responsive layout for you, but it's also made to get out of the way quickly when you need to do something custom.

If you need to get really radical, the easiest way is to create a \`Block\` with a \`fluid\` width -- which basically cancels out the article well dimensions -- and then code whatever you need from scratch or with another framework.

\`\`\`svelte
<Block width="fluid">
  <div class="my-radical-container">
    <!-- Now, you have full control! -->
  </div>
</Block>
\`\`\`

The demo below does exactly that to create an edge-to-edge grid with [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
`,$e=`Normally, \`Block\` containers resize fluidly below the original \`width\`. Sometimes, though, you may want the container to snap to the next breakpoint -- for example, if you have a static graphic that looks fine at the set block breakpoints, but isn't so great at widths inbetween.

You can use the \`snap\` prop to force the container to snap to each block width successively as the window sizes down.

\`\`\`svelte
<Block width="wider" snap="{true}">
  <!-- Your stuff for this block -->
</Block>
\`\`\`

If you want to skip certain block widths entirely, you can add one or more class of \`skip-{block width class}\` to the \`Block\`.

\`\`\`svelte
<!-- Will skip wide and go straight to normal column width on resize. -->
<Block width="wider" snap="{true}" class="skip-wide">
  <!-- Your stuff for this block -->
</Block>
\`\`\`

This is probably easier to see in action than explain in words, so check out the "Canvas" tab for the demo below and resize the window to get a better picture of how it all works.

> **NOTE:** The snap width breakpoints only work on \`Block\` components with widths \`wider\` and below. \`widest\` and \`fluid\` are both **always** fluid, since they go edge-to-edge.

#### Using with custom column widths

Snap width breakpoints are hard-coded to the default article well column widths, so if you set custom \`columnWidths\` on the \`Article\` tag (**rare!**), you can't use this functionality without a little extra work.

Luckily, it's still pretty easy. Just add a \`cls\` or \`id\` to your \`Block\` so you can target it with some custom SCSS. Now, defined a few SCSS variables corresponding to your custom column widths and use the \`block-snap-widths\` SCSS mixin to get the same functionality at your custom breakpoints.

\`\`\`svelte
<Block width="wider" snap="{true}" class="custom-blocks">
  <!-- Your stuff for this block -->
</Block>

<style lang="scss">
  $column-width-narrower: 310px;
  $column-width-narrow: 450px;
  $column-width-normal: 600px;
  $column-width-wide: 860px;
  $column-width-wider: 1400px;

  @import '@reuters-graphics/graphics-components/scss/mixins';

  :global {
    div.custom-blocks {
      @include block-snap-widths;
    }
  }
</style>
\`\`\`
`;function me(n){let e;return{c(){e=I("div"),e.textContent="Block",W(e,"class","label")},m(t,s){w(t,e,s)},p:Z,d(t){t&&h(e)}}}function fe(n){let e,t,s,a,i;const g=[n[1]];let v={$$slots:{default:[me]},$$scope:{ctx:n}};for(let r=0;r<g.length;r+=1)v=O(v,g[r]);return a=new B({props:v}),{c(){e=I("div"),t=I("div"),t.textContent="Article",s=_(),u(a.$$.fragment),W(t,"class","label"),W(e,"class","article-boundaries")},m(r,k){w(r,e,k),y(e,t),y(e,s),p(a,e,null),i=!0},p(r,k){const b=k&2?ee(g,[te(r[1])]):{};k&4&&(b.$$scope={dirty:k,ctx:r}),a.$set(b)},i(r){i||($(a.$$.fragment,r),i=!0)},o(r){m(a.$$.fragment,r),i=!1},d(r){r&&h(e),f(a)}}}function we(n){let e,t;return e=new se({props:{id:"block-demo-article",$$slots:{default:[fe]},$$scope:{ctx:n}}}),{c(){u(e.$$.fragment)},m(s,a){p(e,s,a),t=!0},p(s,a){const i={};a&6&&(i.$$scope={dirty:a,ctx:s}),e.$set(i)},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){f(e,s)}}}function he(n){let e;return{c(){e=I("div"),e.innerHTML='<div class="row svelte-1s74e5w"><div class="col svelte-1s74e5w">Column</div> <div class="col-6 svelte-1s74e5w">Column</div> <div class="col svelte-1s74e5w">Column</div></div> <div class="row svelte-1s74e5w"><div class="col svelte-1s74e5w">Column</div> <div class="col svelte-1s74e5w">Column</div></div>',W(e,"id","block-flex-example"),W(e,"class","svelte-1s74e5w")},m(t,s){w(t,e,s)},p:Z,d(t){t&&h(e)}}}function ke(n){let e,t;return e=new B({props:{width:"fluid",$$slots:{default:[he]},$$scope:{ctx:n}}}),{c(){u(e.$$.fragment)},m(s,a){p(e,s,a),t=!0},p(s,a){const i={};a&4&&(i.$$scope={dirty:a,ctx:s}),e.$set(i)},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){f(e,s)}}}function ge(n){let e;return{c(){e=T("narrower")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function be(n){let e;return{c(){e=T("narrow")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function _e(n){let e;return{c(){e=T("normal")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function ve(n){let e;return{c(){e=T("wide")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function ye(n){let e;return{c(){e=T("wider")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function Be(n){let e;return{c(){e=T("narrower")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function Ce(n){let e;return{c(){e=T("narrow")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function Se(n){let e;return{c(){e=T("normal.skip-narrow")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function Ae(n){let e;return{c(){e=T("wide.skip-normal.skip-narrow")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function De(n){let e;return{c(){e=T("wider.skip-wide")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function xe(n){let e,t,s,a,i,g,v,r,k,b,L,C,M,S,Y,A,o,c,N,D,z,x,E;return a=new B({props:{width:"narrower",snap:!0,class:"block-snap-widths-demo",$$slots:{default:[ge]},$$scope:{ctx:n}}}),g=new B({props:{width:"narrow",snap:!0,class:"block-snap-widths-demo",$$slots:{default:[be]},$$scope:{ctx:n}}}),r=new B({props:{width:"normal",snap:!0,class:"block-snap-widths-demo",$$slots:{default:[_e]},$$scope:{ctx:n}}}),b=new B({props:{width:"wide",snap:!0,class:"block-snap-widths-demo",$$slots:{default:[ve]},$$scope:{ctx:n}}}),C=new B({props:{width:"wider",snap:!0,class:"block-snap-widths-demo",$$slots:{default:[ye]},$$scope:{ctx:n}}}),S=new B({props:{width:"narrower",snap:!0,class:"block-snap-widths-demo even",$$slots:{default:[Be]},$$scope:{ctx:n}}}),A=new B({props:{width:"narrow",snap:!0,class:"block-snap-widths-demo even",$$slots:{default:[Ce]},$$scope:{ctx:n}}}),c=new B({props:{width:"normal",snap:!0,class:"block-snap-widths-demo even skip-narrow",$$slots:{default:[Se]},$$scope:{ctx:n}}}),D=new B({props:{width:"wide",snap:!0,class:"block-snap-widths-demo even skip-normal skip-narrow",$$slots:{default:[Ae]},$$scope:{ctx:n}}}),x=new B({props:{width:"wider",snap:!0,class:"block-snap-widths-demo even skip-wide",$$slots:{default:[De]},$$scope:{ctx:n}}}),{c(){e=I("div"),t=I("div"),t.textContent="Article",s=_(),u(a.$$.fragment),i=_(),u(g.$$.fragment),v=_(),u(r.$$.fragment),k=_(),u(b.$$.fragment),L=_(),u(C.$$.fragment),M=_(),u(S.$$.fragment),Y=_(),u(A.$$.fragment),o=_(),u(c.$$.fragment),N=_(),u(D.$$.fragment),z=_(),u(x.$$.fragment),W(t,"class","label"),W(e,"class","article-boundaries")},m(l,d){w(l,e,d),y(e,t),y(e,s),p(a,e,null),y(e,i),p(g,e,null),y(e,v),p(r,e,null),y(e,k),p(b,e,null),y(e,L),p(C,e,null),y(e,M),p(S,e,null),y(e,Y),p(A,e,null),y(e,o),p(c,e,null),y(e,N),p(D,e,null),y(e,z),p(x,e,null),E=!0},p(l,d){const P={};d&4&&(P.$$scope={dirty:d,ctx:l}),a.$set(P);const H={};d&4&&(H.$$scope={dirty:d,ctx:l}),g.$set(H);const J={};d&4&&(J.$$scope={dirty:d,ctx:l}),r.$set(J);const U={};d&4&&(U.$$scope={dirty:d,ctx:l}),b.$set(U);const F={};d&4&&(F.$$scope={dirty:d,ctx:l}),C.$set(F);const G={};d&4&&(G.$$scope={dirty:d,ctx:l}),S.$set(G);const K={};d&4&&(K.$$scope={dirty:d,ctx:l}),A.$set(K);const Q={};d&4&&(Q.$$scope={dirty:d,ctx:l}),c.$set(Q);const R={};d&4&&(R.$$scope={dirty:d,ctx:l}),D.$set(R);const V={};d&4&&(V.$$scope={dirty:d,ctx:l}),x.$set(V)},i(l){E||($(a.$$.fragment,l),$(g.$$.fragment,l),$(r.$$.fragment,l),$(b.$$.fragment,l),$(C.$$.fragment,l),$(S.$$.fragment,l),$(A.$$.fragment,l),$(c.$$.fragment,l),$(D.$$.fragment,l),$(x.$$.fragment,l),E=!0)},o(l){m(a.$$.fragment,l),m(g.$$.fragment,l),m(r.$$.fragment,l),m(b.$$.fragment,l),m(C.$$.fragment,l),m(S.$$.fragment,l),m(A.$$.fragment,l),m(c.$$.fragment,l),m(D.$$.fragment,l),m(x.$$.fragment,l),E=!1},d(l){l&&h(e),f(a),f(g),f(r),f(b),f(C),f(S),f(A),f(c),f(D),f(x)}}}function Te(n){let e,t;return e=new se({props:{id:"block-demo-article",$$slots:{default:[xe]},$$scope:{ctx:n}}}),{c(){u(e.$$.fragment)},m(s,a){p(e,s,a),t=!0},p(s,a){const i={};a&4&&(i.$$scope={dirty:a,ctx:s}),e.$set(i)},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){f(e,s)}}}function Le(n){let e,t,s,a,i,g,v,r,k,b;const L=[{title:"Layout/Block"},{component:B},n[0]];let C={};for(let o=0;o<L.length;o+=1)C=O(C,L[o]);e=new ce({props:C}),s=new ie({props:{$$slots:{default:[we,({args:o})=>({1:o}),({args:o})=>o?2:0]},$$scope:{ctx:n}}}),i=new q({props:{name:"Default",args:{width:"normal"}}});const M=[{name:"Custom layouts"},X(pe)];let S={$$slots:{default:[ke]},$$scope:{ctx:n}};for(let o=0;o<M.length;o+=1)S=O(S,M[o]);v=new q({props:S});const Y=[{name:"Snap widths"},X($e)];let A={$$slots:{default:[Te]},$$scope:{ctx:n}};for(let o=0;o<Y.length;o+=1)A=O(A,Y[o]);return k=new q({props:A}),{c(){u(e.$$.fragment),t=_(),u(s.$$.fragment),a=_(),u(i.$$.fragment),g=_(),u(v.$$.fragment),r=_(),u(k.$$.fragment)},m(o,c){p(e,o,c),w(o,t,c),p(s,o,c),w(o,a,c),p(i,o,c),w(o,g,c),p(v,o,c),w(o,r,c),p(k,o,c),b=!0},p(o,[c]){const N=c&1?ee(L,[L[0],L[1],te(o[0])]):{};e.$set(N);const D={};c&6&&(D.$$scope={dirty:c,ctx:o}),s.$set(D);const z={};c&4&&(z.$$scope={dirty:c,ctx:o}),v.$set(z);const x={};c&4&&(x.$$scope={dirty:c,ctx:o}),k.$set(x)},i(o){b||($(e.$$.fragment,o),$(s.$$.fragment,o),$(i.$$.fragment,o),$(v.$$.fragment,o),$(k.$$.fragment,o),b=!0)},o(o){m(e.$$.fragment,o),m(s.$$.fragment,o),m(i.$$.fragment,o),m(v.$$.fragment,o),m(k.$$.fragment,o),b=!1},d(o){o&&(h(t),h(a),h(g),h(r)),f(e,o),f(s,o),f(i,o),f(v,o),f(k,o)}}}function We(n){return[{...de(ue),argTypes:{width:{control:"select",options:["narrower","narrow","normal","wide","wider","widest","fluid"]}}}]}class oe extends ne{constructor(e){super(),le(this,e,We,Le,ae,{})}}oe.__docgen={version:3,name:"Block.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const j=re(oe,{meta:{title:"Layout/Block"},stories:{"tpl:default":{storyId:"layout-block--default",name:"default",template:!0,source:`<Article id="block-demo-article">
  <div class="article-boundaries">
    <div class="label">Article</div>
    <Block {...args}>
      <div class="label">Block</div>
    </Block>
  </div>
</Article>`,hasArgs:!0},Default:{storyId:"layout-block--default",name:"Default",template:!1,source:"",hasArgs:!1},CustomLayouts:{storyId:"layout-block--custom-layouts",name:"Custom layouts",template:!1,source:`<Block width="fluid">
  <!-- Enter bootstrap grid! -->
  <div id="block-flex-example">
    <div class="row">
      <div class="col">Column</div>
      <div class="col-6">Column</div>
      <div class="col">Column</div>
    </div>
    <div class="row">
      <div class="col">Column</div>
      <div class="col">Column</div>
    </div>
  </div>
</Block>`,hasArgs:!1},SnapWidths:{storyId:"layout-block--snap-widths",name:"Snap widths",template:!1,source:`<Article id="block-demo-article">
  <div class="article-boundaries">
    <div class="label">Article</div>
    <Block width="narrower" snap="{true}" class="block-snap-widths-demo"
      >narrower</Block
    >
    <Block width="narrow" snap="{true}" class="block-snap-widths-demo"
      >narrow</Block
    >
    <Block width="normal" snap="{true}" class="block-snap-widths-demo"
      >normal</Block
    >
    <Block width="wide" snap="{true}" class="block-snap-widths-demo"
      >wide</Block
    >
    <Block width="wider" snap="{true}" class="block-snap-widths-demo"
      >wider</Block
    >
    <Block width="narrower" snap="{true}" class="block-snap-widths-demo even"
      >narrower</Block
    >
    <Block width="narrow" snap="{true}" class="block-snap-widths-demo even"
      >narrow</Block
    >
    <Block
      width="normal"
      snap="{true}"
      class="block-snap-widths-demo even skip-narrow"
      >normal.skip-narrow</Block
    >
    <Block
      width="wide"
      snap="{true}"
      class="block-snap-widths-demo even skip-normal skip-narrow"
      >wide.skip-normal.skip-narrow</Block
    >
    <Block
      width="wider"
      snap="{true}"
      class="block-snap-widths-demo even skip-wide">wider.skip-wide</Block
    >
  </div>
</Article>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","customLayoutsDocs","snapWidthsDocs","Block","Article","withComponentDocs","withStoryDocs"]}),Oe=j.meta,je=["Default","CustomLayouts","SnapWidths"],qe=j.stories.Default,Pe=j.stories.CustomLayouts,He=j.stories.SnapWidths;export{Pe as CustomLayouts,qe as Default,He as SnapWidths,je as __namedExportsOrder,Oe as default};
//# sourceMappingURL=Block.stories-07d41b85.js.map
