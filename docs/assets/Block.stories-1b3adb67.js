import{S as oe,i as le,s as ae,C as O,g as u,y as b,m as p,d as w,t as $,h as m,f as h,j as f,o as M,b as W,e as B,n as Z,z as T}from"./index-43e9a565.js";import{g as ee,a as te}from"./spread-8a54911c.js";import{p as re,M as ie,T as ce,S as q}from"./collect-stories-23d08061.js";import{B as y}from"./Block-db774151.js";import{A as se}from"./Article-dc25aab5.js";import{b as X,w as de}from"./withParams-47e2ab71.js";const ue=`The \`Block\` component is the basic building block of stories, a responsive container that wraps each section of your piece.

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

This is probably easier to see in action than explain in words, so resize the window to get a better picture of how it all works.

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
`;function me(o){let e;return{c(){e=M("div"),e.textContent="Block",W(e,"class","label")},m(t,s){w(t,e,s)},p:Z,d(t){t&&h(e)}}}function fe(o){let e,t,s,a,c;const g=[o[1]];let v={$$slots:{default:[me]},$$scope:{ctx:o}};for(let r=0;r<g.length;r+=1)v=O(v,g[r]);return a=new y({props:v}),{c(){e=M("div"),t=M("div"),t.textContent="Article",s=b(),u(a.$$.fragment),W(t,"class","label"),W(e,"class","article-boundaries")},m(r,k){w(r,e,k),B(e,t),B(e,s),p(a,e,null),c=!0},p(r,k){const _=k&2?ee(g,[te(r[1])]):{};k&4&&(_.$$scope={dirty:k,ctx:r}),a.$set(_)},i(r){c||($(a.$$.fragment,r),c=!0)},o(r){m(a.$$.fragment,r),c=!1},d(r){r&&h(e),f(a)}}}function we(o){let e,t;return e=new se({props:{id:"block-demo-article",$$slots:{default:[fe]},$$scope:{ctx:o}}}),{c(){u(e.$$.fragment)},m(s,a){p(e,s,a),t=!0},p(s,a){const c={};a&6&&(c.$$scope={dirty:a,ctx:s}),e.$set(c)},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){f(e,s)}}}function he(o){let e;return{c(){e=M("div"),e.innerHTML='<div class="row svelte-iixsdp"><div class="col svelte-iixsdp">Column</div> <div class="col-6 svelte-iixsdp">Column</div> <div class="col svelte-iixsdp">Column</div></div> <div class="row svelte-iixsdp"><div class="col svelte-iixsdp">Column</div> <div class="col svelte-iixsdp">Column</div></div>',W(e,"id","block-flex-example"),W(e,"class","svelte-iixsdp")},m(t,s){w(t,e,s)},p:Z,d(t){t&&h(e)}}}function ke(o){let e,t;return e=new y({props:{width:"fluid",$$slots:{default:[he]},$$scope:{ctx:o}}}),{c(){u(e.$$.fragment)},m(s,a){p(e,s,a),t=!0},p(s,a){const c={};a&4&&(c.$$scope={dirty:a,ctx:s}),e.$set(c)},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){f(e,s)}}}function ge(o){let e;return{c(){e=T("narrower")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function _e(o){let e;return{c(){e=T("narrow")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function be(o){let e;return{c(){e=T("normal")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function ve(o){let e;return{c(){e=T("wide")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function Be(o){let e;return{c(){e=T("wider")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function ye(o){let e;return{c(){e=T("narrower")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function Ce(o){let e;return{c(){e=T("narrow")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function Se(o){let e;return{c(){e=T("normal.skip-narrow")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function xe(o){let e;return{c(){e=T("wide.skip-normal.skip-narrow")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function Ae(o){let e;return{c(){e=T("wider.skip-wide")},m(t,s){w(t,e,s)},d(t){t&&h(e)}}}function De(o){let e,t,s,a,c,g,v,r,k,_,L,C,Y,S,z,x,n,i,E,A,N,D,I;return a=new y({props:{width:"narrower",snap:!0,class:"block-snap-widths-demo",$$slots:{default:[ge]},$$scope:{ctx:o}}}),g=new y({props:{width:"narrow",snap:!0,class:"block-snap-widths-demo",$$slots:{default:[_e]},$$scope:{ctx:o}}}),r=new y({props:{width:"normal",snap:!0,class:"block-snap-widths-demo",$$slots:{default:[be]},$$scope:{ctx:o}}}),_=new y({props:{width:"wide",snap:!0,class:"block-snap-widths-demo",$$slots:{default:[ve]},$$scope:{ctx:o}}}),C=new y({props:{width:"wider",snap:!0,class:"block-snap-widths-demo",$$slots:{default:[Be]},$$scope:{ctx:o}}}),S=new y({props:{width:"narrower",snap:!0,class:"block-snap-widths-demo even",$$slots:{default:[ye]},$$scope:{ctx:o}}}),x=new y({props:{width:"narrow",snap:!0,class:"block-snap-widths-demo even",$$slots:{default:[Ce]},$$scope:{ctx:o}}}),i=new y({props:{width:"normal",snap:!0,class:"block-snap-widths-demo even skip-narrow",$$slots:{default:[Se]},$$scope:{ctx:o}}}),A=new y({props:{width:"wide",snap:!0,class:"block-snap-widths-demo even skip-normal skip-narrow",$$slots:{default:[xe]},$$scope:{ctx:o}}}),D=new y({props:{width:"wider",snap:!0,class:"block-snap-widths-demo even skip-wide",$$slots:{default:[Ae]},$$scope:{ctx:o}}}),{c(){e=M("div"),t=M("div"),t.textContent="Article",s=b(),u(a.$$.fragment),c=b(),u(g.$$.fragment),v=b(),u(r.$$.fragment),k=b(),u(_.$$.fragment),L=b(),u(C.$$.fragment),Y=b(),u(S.$$.fragment),z=b(),u(x.$$.fragment),n=b(),u(i.$$.fragment),E=b(),u(A.$$.fragment),N=b(),u(D.$$.fragment),W(t,"class","label"),W(e,"class","article-boundaries")},m(l,d){w(l,e,d),B(e,t),B(e,s),p(a,e,null),B(e,c),p(g,e,null),B(e,v),p(r,e,null),B(e,k),p(_,e,null),B(e,L),p(C,e,null),B(e,Y),p(S,e,null),B(e,z),p(x,e,null),B(e,n),p(i,e,null),B(e,E),p(A,e,null),B(e,N),p(D,e,null),I=!0},p(l,d){const P={};d&4&&(P.$$scope={dirty:d,ctx:l}),a.$set(P);const H={};d&4&&(H.$$scope={dirty:d,ctx:l}),g.$set(H);const J={};d&4&&(J.$$scope={dirty:d,ctx:l}),r.$set(J);const U={};d&4&&(U.$$scope={dirty:d,ctx:l}),_.$set(U);const F={};d&4&&(F.$$scope={dirty:d,ctx:l}),C.$set(F);const G={};d&4&&(G.$$scope={dirty:d,ctx:l}),S.$set(G);const K={};d&4&&(K.$$scope={dirty:d,ctx:l}),x.$set(K);const Q={};d&4&&(Q.$$scope={dirty:d,ctx:l}),i.$set(Q);const R={};d&4&&(R.$$scope={dirty:d,ctx:l}),A.$set(R);const V={};d&4&&(V.$$scope={dirty:d,ctx:l}),D.$set(V)},i(l){I||($(a.$$.fragment,l),$(g.$$.fragment,l),$(r.$$.fragment,l),$(_.$$.fragment,l),$(C.$$.fragment,l),$(S.$$.fragment,l),$(x.$$.fragment,l),$(i.$$.fragment,l),$(A.$$.fragment,l),$(D.$$.fragment,l),I=!0)},o(l){m(a.$$.fragment,l),m(g.$$.fragment,l),m(r.$$.fragment,l),m(_.$$.fragment,l),m(C.$$.fragment,l),m(S.$$.fragment,l),m(x.$$.fragment,l),m(i.$$.fragment,l),m(A.$$.fragment,l),m(D.$$.fragment,l),I=!1},d(l){l&&h(e),f(a),f(g),f(r),f(_),f(C),f(S),f(x),f(i),f(A),f(D)}}}function Te(o){let e,t;return e=new se({props:{id:"block-demo-article",$$slots:{default:[De]},$$scope:{ctx:o}}}),{c(){u(e.$$.fragment)},m(s,a){p(e,s,a),t=!0},p(s,a){const c={};a&4&&(c.$$scope={dirty:a,ctx:s}),e.$set(c)},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){f(e,s)}}}function Le(o){let e,t,s,a,c,g,v,r,k,_;const L=[{title:"Layout/Block"},{component:y},o[0]];let C={};for(let n=0;n<L.length;n+=1)C=O(C,L[n]);e=new ie({props:C}),s=new ce({props:{$$slots:{default:[we,({args:n})=>({1:n}),({args:n})=>n?2:0]},$$scope:{ctx:o}}}),c=new q({props:{name:"Default",args:{width:"normal"}}});const Y=[{name:"Custom layouts"},X(pe)];let S={$$slots:{default:[ke]},$$scope:{ctx:o}};for(let n=0;n<Y.length;n+=1)S=O(S,Y[n]);v=new q({props:S});const z=[{name:"Snap widths"},X($e)];let x={$$slots:{default:[Te]},$$scope:{ctx:o}};for(let n=0;n<z.length;n+=1)x=O(x,z[n]);return k=new q({props:x}),{c(){u(e.$$.fragment),t=b(),u(s.$$.fragment),a=b(),u(c.$$.fragment),g=b(),u(v.$$.fragment),r=b(),u(k.$$.fragment)},m(n,i){p(e,n,i),w(n,t,i),p(s,n,i),w(n,a,i),p(c,n,i),w(n,g,i),p(v,n,i),w(n,r,i),p(k,n,i),_=!0},p(n,[i]){const E=i&1?ee(L,[L[0],L[1],te(n[0])]):{};e.$set(E);const A={};i&6&&(A.$$scope={dirty:i,ctx:n}),s.$set(A);const N={};i&4&&(N.$$scope={dirty:i,ctx:n}),v.$set(N);const D={};i&4&&(D.$$scope={dirty:i,ctx:n}),k.$set(D)},i(n){_||($(e.$$.fragment,n),$(s.$$.fragment,n),$(c.$$.fragment,n),$(v.$$.fragment,n),$(k.$$.fragment,n),_=!0)},o(n){m(e.$$.fragment,n),m(s.$$.fragment,n),m(c.$$.fragment,n),m(v.$$.fragment,n),m(k.$$.fragment,n),_=!1},d(n){n&&(h(t),h(a),h(g),h(r)),f(e,n),f(s,n),f(c,n),f(v,n),f(k,n)}}}function We(o){return[{...de(ue),argTypes:{width:{control:"select",options:["narrower","narrow","normal","wide","wider","widest","fluid"]}}}]}class ne extends oe{constructor(e){super(),le(this,e,We,Le,ae,{})}}ne.__docgen={version:3,name:"Block.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const j=re(ne,{meta:{title:"Layout/Block"},stories:{"tpl:default":{name:"default",template:!0,source:`<Article id="block-demo-article">
  <div class="article-boundaries">
    <div class="label">Article</div>
    <Block {...args}>
      <div class="label">Block</div>
    </Block>
  </div>
</Article>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},CustomLayouts:{name:"Custom layouts",template:!1,source:`<Block width="fluid">
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
</Block>`,hasArgs:!1},SnapWidths:{name:"Snap widths",template:!1,source:`<Article id="block-demo-article">
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
//# sourceMappingURL=Block.stories-1b3adb67.js.map
