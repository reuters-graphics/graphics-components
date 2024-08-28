import{S as j,i as G,s as q,l as y,c as m,o as _,m as f,h as T,t as h,a as u,k as w,d as g}from"./index-C9aKRT5A.js";import{g as U,a as v}from"./spread-CgU5AtxT.js";import{p as W,M as z,T as O,S as I,a as M,w as B}from"./collect-stories-ceFdpR5E.js";import{F as E}from"./FeaturePhoto-DrqYCojc.js";import"./Block-C7biTRWl.js";import"./PaddingReset-CiOBBFtT.js";const L=`A full-width photo inside the text well.

\`\`\`svelte
<script>
  import { FeaturePhoto } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths'; // 👈 If using in the Graphics Kit...
<\/script>

<FeaturePhoto
  src="{\`\${assets}/images/myImage.jpg\`}"
  altText="Some alt text"
  caption="A caption"
  lazy="{false}"
  width="normal"
/>
\`\`\`
`,N=`An example of using \`FeaturePhoto\` in the Graphics Kit with a Google Doc.

\`\`\`yaml
# Google doc block
Type: photo
Width: normal
Src: images/shark.jpg
AltText: The king of the sea
Caption: Carcharodon carcharias - REUTERS
\`\`\`

\`\`\`svelte
<!-- App.svelte -->
<script>
  // Add FeaturePhoto to imports from graphics-components
  import { FeaturePhoto } from '@reuters-graphics/graphics-components';

  // These should be already imported for you.
  import content from '$locales/en/content.json';
  import { assets } from '$app/paths';
<\/script>

{#each content.blocks as block}
  {#if block.Type === 'text'}
    <!-- ... other blocks -->

    <!-- Copy/paste into your blocks loop! -->
  {:else if block.Type === 'photo'}
    <FeaturePhoto
      width="{block.Width}"
      src="{\`\${assets}/\${block.Src}\`}"
      altText="{block.AltText}"
      caption="{block.Caption}"
    />
    <!-- END copy/paste -->
  {/if}
{/each}
\`\`\`
`,H="If your photo is missing `altText` a small warning will overlay the image.\n",S=""+new URL("shark-BvMOz9gh.jpg",import.meta.url).href;function J(c){let s,r;const n=[c[1]];let i={};for(let e=0;e<n.length;e+=1)i=y(i,n[e]);return s=new E({props:i}),{c(){m(s.$$.fragment)},m(e,p){f(s,e,p),r=!0},p(e,p){const a=p&2?U(n,[v(e[1])]):{};s.$set(a)},i(e){r||(h(s.$$.fragment,e),r=!0)},o(e){u(s.$$.fragment,e),r=!1},d(e){g(s,e)}}}function V(c){let s,r,n,i,e,p,a,x,l,d;const $=[{title:"Components/FeaturePhoto"},{component:E},c[0]];let A={};for(let t=0;t<$.length;t+=1)A=y(A,$[t]);s=new z({props:A}),n=new O({props:{$$slots:{default:[J,({args:t})=>({1:t}),({args:t})=>t?2:0]},$$scope:{ctx:c}}}),e=new I({props:{name:"Default",args:{src:S,altText:"A shark!",width:"normal",caption:"Carcharodon carcharias - REUTERS"}}});const P=[{name:"🚀 QUICKIT"},{args:{src:S,altText:"A shark!",width:"normal",caption:"Carcharodon carcharias - REUTERS"}},M(N)];let D={};for(let t=0;t<P.length;t+=1)D=y(D,P[t]);a=new I({props:D});const F=[{name:"Missing altText"},{args:{src:S,width:"normal",caption:"Carcharodon carcharias - REUTERS"}},M(H)];let C={};for(let t=0;t<F.length;t+=1)C=y(C,F[t]);return l=new I({props:C}),{c(){m(s.$$.fragment),r=_(),m(n.$$.fragment),i=_(),m(e.$$.fragment),p=_(),m(a.$$.fragment),x=_(),m(l.$$.fragment)},m(t,o){f(s,t,o),T(t,r,o),f(n,t,o),T(t,i,o),f(e,t,o),T(t,p,o),f(a,t,o),T(t,x,o),f(l,t,o),d=!0},p(t,[o]){const R=o&1?U($,[$[0],$[1],v(t[0])]):{};s.$set(R);const b={};o&6&&(b.$$scope={dirty:o,ctx:t}),n.$set(b);const K={};a.$set(K);const Q={};l.$set(Q)},i(t){d||(h(s.$$.fragment,t),h(n.$$.fragment,t),h(e.$$.fragment,t),h(a.$$.fragment,t),h(l.$$.fragment,t),d=!0)},o(t){u(s.$$.fragment,t),u(n.$$.fragment,t),u(e.$$.fragment,t),u(a.$$.fragment,t),u(l.$$.fragment,t),d=!1},d(t){t&&(w(r),w(i),w(p),w(x)),g(s,t),g(n,t),g(e,t),g(a,t),g(l,t)}}}function X(c){return[{...B(L),argTypes:{width:{control:"select",options:["normal","wide","wider","widest","fluid"]},textWidth:{control:"select",options:["normal","wide","wider","widest","fluid"]}}}]}class Y extends j{constructor(s){super(),G(this,s,X,V,q,{})}}const k=W(Y,{meta:{title:"Components/FeaturePhoto"},stories:{"tpl:default":{name:"default",template:!0,source:"<FeaturePhoto {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},QUICKIT:{name:"🚀 QUICKIT",template:!1,source:"",hasArgs:!1},MissingAltText:{name:"Missing altText",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","quickitDocs","missingAltTextDocs","FeaturePhoto","sharkSrc","withComponentDocs","withStoryDocs"]}),at=k.meta,rt=["Default","QUICKIT","MissingAltText"],it=k.stories.Default,pt=k.stories.QUICKIT,lt=k.stories.MissingAltText;export{it as Default,lt as MissingAltText,pt as QUICKIT,rt as __namedExportsOrder,at as default};
