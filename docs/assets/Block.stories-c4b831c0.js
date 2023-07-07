import{S as ae,i as re,s as ce,p as j,j as u,D as _,m as p,a as w,k as q,l as P,b as f,t as m,n as $,d as h,w as M,x as Y,z as B,E as oe,M as L}from"./index-25af778d.js";import{p as ie,M as de,T as ue,S as J}from"./collect-stories-cce06d4a.js";import{B as y}from"./Block-9c89ee1a.js";import{A as ne}from"./Article-06c782e7.js";import{a as O,w as pe}from"./withParams-90715500.js";const fe=`The \`Block\` component is the basic building block of stories, a responsive container that wraps each section of your piece.

Blocks are stacked vertically within the well created by the [\`Article\`](./?path=/docs/layout-article) component. They can have different widths on larger screens depending on the \`width\` prop.

> 📌 Many of our other components already use the \`Block\` component, internally. You'll usually only need to use it yourself if you're making something custom.

\`\`\`html
<script>
  import { Block } from '@reuters-graphics/graphics-components';
<\/script>

<Block width="normal">
  <!-- Your stuff for this block -->
</Block>
\`\`\`
`,te=`Our article well is designed to provide a basic responsive layout for you, but it's also made to get out of the way quickly when you need to do something custom.

If you need to get really radical, the easiest way is to create a \`Block\` with a \`fluid\` width -- which basically cancels out the article well dimensions -- and then code whatever you need from scratch or with another framework.

\`\`\`html
<Block width="fluid">
  <div class="my-radical-container">
    <!-- Now, you have full control! -->
  </div>
</Block>
\`\`\`

The demo below does exactly that to create an edge-to-edge grid with [bootstrap](https://getbootstrap.com/docs/5.2/layout/grid/).
`,se=`Normally, \`Block\` containers resize fluidly below the original \`width\`. Sometimes, though, you may want the container to snap to the next breakpoint -- for example, if you have a static graphic that looks fine at the set block breakpoints, but isn't so great at widths inbetween.

You can use the \`snap\` prop to force the container to snap to each block width successively as the window sizes down.

\`\`\`html
<Block width="wider" snap="{true}">
  <!-- Your stuff for this block -->
</Block>
\`\`\`

If you want to skip certain block widths entirely, you can add one or more class of \`skip-{block width class}\` to the \`Block\`.

\`\`\`html
<!-- Will skip wide and go straight to normal column width on resize. -->
<Block width="wider" snap="{true}" cls="skip-wide">
  <!-- Your stuff for this block -->
</Block>
\`\`\`

This is probably easier to see in action than explain in words, so check out the "Canvas" tab for the demo below and resize the window to get a better picture of how it all works.

> **NOTE:** The snap width breakpoints only work on \`Block\` components with widths \`wider\` and below. \`widest\` and \`fluid\` are both **always** fluid, since they go edge-to-edge.

#### Using with custom column widths

Snap width breakpoints are hard-coded to the default article well column widths, so if you set custom \`columnWidths\` on the \`Article\` tag (**rare!**), you can't use this functionality without a little extra work.

Luckily, it's still pretty easy. Just add a \`cls\` or \`id\` to your \`Block\` so you can target it with some custom SCSS. Now, defined a few SCSS variables corresponding to your custom column widths and use the \`block-snap-widths\` SCSS mixin to get the same functionality at your custom breakpoints.

\`\`\`html
<Block width="wider" snap="{true}" cls="custom-blocks">
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
`;function me(n){let e;return{c(){e=M("div"),e.textContent="Block",Y(e,"class","label")},m(t,s){w(t,e,s)},p:oe,d(t){t&&h(e)}}}function $e(n){let e,t,s,a,i;const g=[n[1]];let v={$$slots:{default:[me]},$$scope:{ctx:n}};for(let c=0;c<g.length;c+=1)v=j(v,g[c]);return a=new y({props:v}),{c(){e=M("div"),t=M("div"),t.textContent="Article",s=_(),u(a.$$.fragment),Y(t,"class","label"),Y(e,"class","article-boundaries")},m(c,k){w(c,e,k),B(e,t),B(e,s),p(a,e,null),i=!0},p(c,k){const b=k&2?q(g,[P(c[1])]):{};k&4&&(b.$$scope={dirty:k,ctx:c}),a.$set(b)},i(c){i||(f(a.$$.fragment,c),i=!0)},o(c){m(a.$$.fragment,c),i=!1},d(c){c&&h(e),$(a)}}}function we(n){let e,t;return e=new ne({props:{id:"block-demo-article",$$slots:{default:[$e]},$$scope:{ctx:n}}}),{c(){u(e.$$.fragment)},m(s,a){p(e,s,a),t=!0},p(s,a){const i={};a&6&&(i.$$scope={dirty:a,ctx:s}),e.$set(i)},i(s){t||(f(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){$(e,s)}}}function he(n){let e;return{c(){e=M("div"),e.innerHTML=`<div class="row svelte-ku86hf"><div class="col svelte-ku86hf">Column</div> 
        <div class="col-6 svelte-ku86hf">Column</div> 
        <div class="col svelte-ku86hf">Column</div></div> 
      <div class="row svelte-ku86hf"><div class="col svelte-ku86hf">Column</div> 
        <div class="col svelte-ku86hf">Column</div></div>`,Y(e,"class","container-fluid text-center svelte-ku86hf")},m(t,s){w(t,e,s)},p:oe,d(t){t&&h(e)}}}function ke(n){let e,t;return e=new y({props:{width:"fluid",$$slots:{default:[he]},$$scope:{ctx:n}}}),{c(){u(e.$$.fragment)},m(s,a){p(e,s,a),t=!0},p(s,a){const i={};a&4&&(i.$$scope={dirty:a,ctx:s}),e.$set(i)},i(s){t||(f(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){$(e,s)}}}function ge(n){let e;return{c(){e=L("narrower")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function be(n){let e;return{c(){e=L("narrow")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function _e(n){let e;return{c(){e=L("normal")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function ve(n){let e;return{c(){e=L("wide")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function ye(n){let e;return{c(){e=L("wider")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function Be(n){let e;return{c(){e=L("narrower")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function Ce(n){let e;return{c(){e=L("narrow")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function Se(n){let e;return{c(){e=L("normal.skip-narrow")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function De(n){let e;return{c(){e=L("wide.skip-normal.skip-narrow")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function Ae(n){let e;return{c(){e=L("wider.skip-wide")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function Te(n){let e,t,s,a,i,g,v,c,k,b,x,C,W,S,I,D,o,r,E,A,z,T,N;return a=new y({props:{width:"narrower",snap:!0,cls:"block-snap-widths-demo",$$slots:{default:[ge]},$$scope:{ctx:n}}}),g=new y({props:{width:"narrow",snap:!0,cls:"block-snap-widths-demo",$$slots:{default:[be]},$$scope:{ctx:n}}}),c=new y({props:{width:"normal",snap:!0,cls:"block-snap-widths-demo",$$slots:{default:[_e]},$$scope:{ctx:n}}}),b=new y({props:{width:"wide",snap:!0,cls:"block-snap-widths-demo",$$slots:{default:[ve]},$$scope:{ctx:n}}}),C=new y({props:{width:"wider",snap:!0,cls:"block-snap-widths-demo",$$slots:{default:[ye]},$$scope:{ctx:n}}}),S=new y({props:{width:"narrower",snap:!0,cls:"block-snap-widths-demo even",$$slots:{default:[Be]},$$scope:{ctx:n}}}),D=new y({props:{width:"narrow",snap:!0,cls:"block-snap-widths-demo even",$$slots:{default:[Ce]},$$scope:{ctx:n}}}),r=new y({props:{width:"normal",snap:!0,cls:"block-snap-widths-demo even skip-narrow",$$slots:{default:[Se]},$$scope:{ctx:n}}}),A=new y({props:{width:"wide",snap:!0,cls:"block-snap-widths-demo even skip-normal skip-narrow",$$slots:{default:[De]},$$scope:{ctx:n}}}),T=new y({props:{width:"wider",snap:!0,cls:"block-snap-widths-demo even skip-wide",$$slots:{default:[Ae]},$$scope:{ctx:n}}}),{c(){e=M("div"),t=M("div"),t.textContent="Article",s=_(),u(a.$$.fragment),i=_(),u(g.$$.fragment),v=_(),u(c.$$.fragment),k=_(),u(b.$$.fragment),x=_(),u(C.$$.fragment),W=_(),u(S.$$.fragment),I=_(),u(D.$$.fragment),o=_(),u(r.$$.fragment),E=_(),u(A.$$.fragment),z=_(),u(T.$$.fragment),Y(t,"class","label"),Y(e,"class","article-boundaries")},m(l,d){w(l,e,d),B(e,t),B(e,s),p(a,e,null),B(e,i),p(g,e,null),B(e,v),p(c,e,null),B(e,k),p(b,e,null),B(e,x),p(C,e,null),B(e,W),p(S,e,null),B(e,I),p(D,e,null),B(e,o),p(r,e,null),B(e,E),p(A,e,null),B(e,z),p(T,e,null),N=!0},p(l,d){const U={};d&4&&(U.$$scope={dirty:d,ctx:l}),a.$set(U);const F={};d&4&&(F.$$scope={dirty:d,ctx:l}),g.$set(F);const G={};d&4&&(G.$$scope={dirty:d,ctx:l}),c.$set(G);const K={};d&4&&(K.$$scope={dirty:d,ctx:l}),b.$set(K);const Q={};d&4&&(Q.$$scope={dirty:d,ctx:l}),C.$set(Q);const R={};d&4&&(R.$$scope={dirty:d,ctx:l}),S.$set(R);const V={};d&4&&(V.$$scope={dirty:d,ctx:l}),D.$set(V);const X={};d&4&&(X.$$scope={dirty:d,ctx:l}),r.$set(X);const Z={};d&4&&(Z.$$scope={dirty:d,ctx:l}),A.$set(Z);const ee={};d&4&&(ee.$$scope={dirty:d,ctx:l}),T.$set(ee)},i(l){N||(f(a.$$.fragment,l),f(g.$$.fragment,l),f(c.$$.fragment,l),f(b.$$.fragment,l),f(C.$$.fragment,l),f(S.$$.fragment,l),f(D.$$.fragment,l),f(r.$$.fragment,l),f(A.$$.fragment,l),f(T.$$.fragment,l),N=!0)},o(l){m(a.$$.fragment,l),m(g.$$.fragment,l),m(c.$$.fragment,l),m(b.$$.fragment,l),m(C.$$.fragment,l),m(S.$$.fragment,l),m(D.$$.fragment,l),m(r.$$.fragment,l),m(A.$$.fragment,l),m(T.$$.fragment,l),N=!1},d(l){l&&h(e),$(a),$(g),$(c),$(b),$(C),$(S),$(D),$(r),$(A),$(T)}}}function Le(n){let e,t;return e=new ne({props:{id:"block-demo-article",$$slots:{default:[Te]},$$scope:{ctx:n}}}),{c(){u(e.$$.fragment)},m(s,a){p(e,s,a),t=!0},p(s,a){const i={};a&4&&(i.$$scope={dirty:a,ctx:s}),e.$set(i)},i(s){t||(f(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){$(e,s)}}}function xe(n){let e,t,s,a,i,g,v,c,k,b;const x=[{title:"Layout/Block"},{component:y},n[0]];let C={};for(let o=0;o<x.length;o+=1)C=j(C,x[o]);e=new de({props:C}),s=new ue({props:{$$slots:{default:[we,({args:o})=>({1:o}),({args:o})=>o?2:0]},$$scope:{ctx:n}}}),i=new J({props:{name:"Default",args:{width:"normal"}}});const W=[{name:"Custom layouts"},O(te)];let S={$$slots:{default:[ke]},$$scope:{ctx:n}};for(let o=0;o<W.length;o+=1)S=j(S,W[o]);v=new J({props:S});const I=[{name:"Snap widths"},O(se)];let D={$$slots:{default:[Le]},$$scope:{ctx:n}};for(let o=0;o<I.length;o+=1)D=j(D,I[o]);return k=new J({props:D}),{c(){u(e.$$.fragment),t=_(),u(s.$$.fragment),a=_(),u(i.$$.fragment),g=_(),u(v.$$.fragment),c=_(),u(k.$$.fragment)},m(o,r){p(e,o,r),w(o,t,r),p(s,o,r),w(o,a,r),p(i,o,r),w(o,g,r),p(v,o,r),w(o,c,r),p(k,o,r),b=!0},p(o,[r]){const E=r&1?q(x,[x[0],r&0&&{component:y},r&1&&P(o[0])]):{};e.$set(E);const A={};r&6&&(A.$$scope={dirty:r,ctx:o}),s.$set(A);const z=r&0?q(W,[W[0],P(O(te))]):{};r&4&&(z.$$scope={dirty:r,ctx:o}),v.$set(z);const T=r&0?q(I,[I[0],P(O(se))]):{};r&4&&(T.$$scope={dirty:r,ctx:o}),k.$set(T)},i(o){b||(f(e.$$.fragment,o),f(s.$$.fragment,o),f(i.$$.fragment,o),f(v.$$.fragment,o),f(k.$$.fragment,o),b=!0)},o(o){m(e.$$.fragment,o),m(s.$$.fragment,o),m(i.$$.fragment,o),m(v.$$.fragment,o),m(k.$$.fragment,o),b=!1},d(o){$(e,o),o&&h(t),$(s,o),o&&h(a),$(i,o),o&&h(g),$(v,o),o&&h(c),$(k,o)}}}function We(n){return[{...pe(fe),argTypes:{width:{control:"select",options:["narrower","narrow","normal","wide","wider","widest","fluid"]}}}]}class le extends ae{constructor(e){super(),re(this,e,We,xe,ce,{})}}le.__docgen={version:3,name:"Block.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const H=ie(le,{meta:{title:"Layout/Block"},stories:{"tpl:default":{storyId:"layout-block--default",name:"default",template:!0,source:`<Article id="block-demo-article">
  <div class="article-boundaries">
    <div class="label">Article</div>
    <Block {...args}>
      <div class="label">Block</div>
    </Block>
  </div>
</Article>`,hasArgs:!0},Default:{storyId:"layout-block--default",name:"Default",template:!1,hasArgs:!1},CustomLayouts:{storyId:"layout-block--custom-layouts",name:"Custom layouts",template:!1,source:`<Block width="fluid">
  <!-- Enter bootstrap grid! -->
  <div class="container-fluid text-center">
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
    <Block width="narrower" snap="{true}" cls="block-snap-widths-demo"
      >narrower</Block
    >
    <Block width="narrow" snap="{true}" cls="block-snap-widths-demo"
      >narrow</Block
    >
    <Block width="normal" snap="{true}" cls="block-snap-widths-demo"
      >normal</Block
    >
    <Block width="wide" snap="{true}" cls="block-snap-widths-demo">wide</Block
    >
    <Block width="wider" snap="{true}" cls="block-snap-widths-demo"
      >wider</Block
    >
    <Block width="narrower" snap="{true}" cls="block-snap-widths-demo even"
      >narrower</Block
    >
    <Block width="narrow" snap="{true}" cls="block-snap-widths-demo even"
      >narrow</Block
    >
    <Block
      width="normal"
      snap="{true}"
      cls="block-snap-widths-demo even skip-narrow">normal.skip-narrow</Block
    >
    <Block
      width="wide"
      snap="{true}"
      cls="block-snap-widths-demo even skip-normal skip-narrow"
      >wide.skip-normal.skip-narrow</Block
    >
    <Block
      width="wider"
      snap="{true}"
      cls="block-snap-widths-demo even skip-wide">wider.skip-wide</Block
    >
  </div>
</Article>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","customLayoutsDocs","snapWidthsDocs","Block","Article","withComponentDocs","withStoryDocs"]}),Ne=H.meta,Oe=["Default","CustomLayouts","SnapWidths"],je=H.stories.Default,qe=H.stories.CustomLayouts,Pe=H.stories.SnapWidths;export{qe as CustomLayouts,je as Default,Pe as SnapWidths,Oe as __namedExportsOrder,Ne as default};
//# sourceMappingURL=Block.stories-c4b831c0.js.map
