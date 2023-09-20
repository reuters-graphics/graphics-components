import{S as Q,i as G,s as q,C as y,g as m,y as _,m as f,d as T,t as h,h as u,f as w,j as g}from"./index-06834efe.js";import{g as E,a as M}from"./spread-8a54911c.js";import{p as W,M as z,T as L,S as I}from"./collect-stories-3e05a7a9.js";import{F as v}from"./FeaturePhoto-eaf46eea.js";import{b as U,w as N}from"./withParams-47e2ab71.js";import"./Block-3bcdcbfd.js";import"./PaddingReset-b428f452.js";const O=`A full-width photo inside the text well.

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
`,B=`An example of using \`FeaturePhoto\` in the Graphics Kit with a Google Doc.

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
`,H="If your photo is missing `altText` a small warning will overlay the image.\n",S=""+new URL("shark-f4201fc0.jpg",import.meta.url).href;function J(c){let s,r;const n=[c[1]];let i={};for(let e=0;e<n.length;e+=1)i=y(i,n[e]);return s=new v({props:i}),{c(){m(s.$$.fragment)},m(e,p){f(s,e,p),r=!0},p(e,p){const a=p&2?E(n,[M(e[1])]):{};s.$set(a)},i(e){r||(h(s.$$.fragment,e),r=!0)},o(e){u(s.$$.fragment,e),r=!1},d(e){g(s,e)}}}function V(c){let s,r,n,i,e,p,a,k,l,d;const $=[{title:"Components/FeaturePhoto"},{component:v},c[0]];let A={};for(let t=0;t<$.length;t+=1)A=y(A,$[t]);s=new z({props:A}),n=new L({props:{$$slots:{default:[J,({args:t})=>({1:t}),({args:t})=>t?2:0]},$$scope:{ctx:c}}}),e=new I({props:{name:"Default",args:{src:S,altText:"A shark!",width:"normal",caption:"Carcharodon carcharias - REUTERS"}}});const P=[{name:"🚀 QUICKIT"},{args:{src:S,altText:"A shark!",width:"normal",caption:"Carcharodon carcharias - REUTERS"}},U(B)];let C={};for(let t=0;t<P.length;t+=1)C=y(C,P[t]);a=new I({props:C});const b=[{name:"Missing altText"},{args:{src:S,width:"normal",caption:"Carcharodon carcharias - REUTERS"}},U(H)];let D={};for(let t=0;t<b.length;t+=1)D=y(D,b[t]);return l=new I({props:D}),{c(){m(s.$$.fragment),r=_(),m(n.$$.fragment),i=_(),m(e.$$.fragment),p=_(),m(a.$$.fragment),k=_(),m(l.$$.fragment)},m(t,o){f(s,t,o),T(t,r,o),f(n,t,o),T(t,i,o),f(e,t,o),T(t,p,o),f(a,t,o),T(t,k,o),f(l,t,o),d=!0},p(t,[o]){const R=o&1?E($,[$[0],$[1],M(t[0])]):{};s.$set(R);const F={};o&6&&(F.$$scope={dirty:o,ctx:t}),n.$set(F);const K={};a.$set(K);const j={};l.$set(j)},i(t){d||(h(s.$$.fragment,t),h(n.$$.fragment,t),h(e.$$.fragment,t),h(a.$$.fragment,t),h(l.$$.fragment,t),d=!0)},o(t){u(s.$$.fragment,t),u(n.$$.fragment,t),u(e.$$.fragment,t),u(a.$$.fragment,t),u(l.$$.fragment,t),d=!1},d(t){t&&(w(r),w(i),w(p),w(k)),g(s,t),g(n,t),g(e,t),g(a,t),g(l,t)}}}function X(c){return[{...N(O),argTypes:{width:{control:"select",options:["normal","wide","wider","widest","fluid"]},textWidth:{control:"select",options:["normal","wide","wider","widest","fluid"]}}}]}class Y extends Q{constructor(s){super(),G(this,s,X,V,q,{})}}const x=W(Y,{meta:{title:"Components/FeaturePhoto"},stories:{"tpl:default":{name:"default",template:!0,source:"<FeaturePhoto {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},QUICKIT:{name:"🚀 QUICKIT",template:!1,source:"",hasArgs:!1},MissingAltText:{name:"Missing altText",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","quickitDocs","missingAltTextDocs","FeaturePhoto","sharkSrc","withComponentDocs","withStoryDocs"]}),rt=x.meta,it=["Default","QUICKIT","MissingAltText"],pt=x.stories.Default,lt=x.stories.QUICKIT,ct=x.stories.MissingAltText;export{pt as Default,ct as MissingAltText,lt as QUICKIT,it as __namedExportsOrder,rt as default};
//# sourceMappingURL=FeaturePhoto.stories-b0c56a11.js.map
