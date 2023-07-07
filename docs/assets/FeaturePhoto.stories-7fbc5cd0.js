import{S as G,i as B,s as H,j as w,m as I,b as h,t as y,n as T,o as Y,w as C,D as A,x as d,a as b,z as $,g as J,c as X,d as _,f as Z,M as ee,Y as te,Q as j,p as z,k as U,l as F}from"./index-25af778d.js";import{p as ne,M as se,T as oe,S as O}from"./collect-stories-cce06d4a.js";import{B as re}from"./Block-9c89ee1a.js";import{P as ie}from"./PaddingReset-d848e1b7.js";import{a as D,w as ae}from"./withParams-90715500.js";const le=`A full-width photo inside the text well.

\`\`\`html
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
`,W=`An example of using \`FeaturePhoto\` in the Graphics Kit with a Google Doc.

\`\`\`yaml
# Google doc block
Type: photo
Width: normal
Src: images/shark.jpg
AltText: The king of the sea
Caption: Carcharodon carcharias - REUTERS
\`\`\`

\`\`\`html
<!-- App.svelte -->
<script>
  // Add FeaturePhoto to imports from graphics-components
  import { FeaturePhoto } from '@reuters-graphics/graphics-components';

  // These should be already imported for you.
  import content from '$locales/en/content.json';
  import { assets } from '$app/paths';
<\/script>

{#each content.blocks as block} {#if block.Type === 'text'}
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
{/if} {/each}
\`\`\`
`,K="If your photo is missing `altText` a small warning will overlay the image.\n";function ce(i){let e,s;return{c(){e=C("div"),d(e,"class","placeholder svelte-1wfjqh7"),d(e,"height",s=`${i[3]}px`)},m(n,o){b(n,e,o)},p(n,o){o&8&&s!==(s=`${n[3]}px`)&&d(e,"height",s)},d(n){n&&_(e)}}}function fe(i){let e,s;return{c(){e=C("img"),j(e.src,s=i[0])||d(e,"src",s),d(e,"alt",i[1]),d(e,"class","svelte-1wfjqh7")},m(n,o){b(n,e,o)},p(n,o){o&1&&!j(e.src,s=n[0])&&d(e,"src",s),o&2&&d(e,"alt",n[1])},d(n){n&&_(e)}}}function Q(i){let e,s;return e=new ie({props:{containerIsFluid:i[4]==="fluid",$$slots:{default:[pe]},$$scope:{ctx:i}}}),{c(){w(e.$$.fragment)},m(n,o){I(e,n,o),s=!0},p(n,o){const r={};o&16&&(r.containerIsFluid=n[4]==="fluid"),o&16388&&(r.$$scope={dirty:o,ctx:n}),e.$set(r)},i(n){s||(h(e.$$.fragment,n),s=!0)},o(n){y(e.$$.fragment,n),s=!1},d(n){T(e,n)}}}function pe(i){let e,s;return{c(){e=C("figcaption"),s=ee(i[2]),d(e,"class","svelte-1wfjqh7")},m(n,o){b(n,e,o),$(e,s)},p(n,o){o&4&&te(s,n[2])},d(n){n&&_(e)}}}function V(i){let e;return{c(){e=C("div"),e.textContent="altText",d(e,"class","alt-warning svelte-1wfjqh7")},m(s,n){b(s,e,n)},d(s){s&&_(e)}}}function me(i){let e,s,n,o;function r(l,u){return!l[5]||l[8]&&l[6]?fe:ce}let m=r(i),p=m(i),a=i[2]&&Q(i),c=!i[1]&&V();return{c(){e=C("figure"),p.c(),s=A(),a&&a.c(),n=A(),c&&c.c(),d(e,"aria-label","media"),d(e,"class","svelte-1wfjqh7")},m(l,u){b(l,e,u),p.m(e,null),$(e,s),a&&a.m(e,null),$(e,n),c&&c.m(e,null),i[13](e),o=!0},p(l,u){m===(m=r(l))&&p?p.p(l,u):(p.d(1),p=m(l),p&&(p.c(),p.m(e,s))),l[2]?a?(a.p(l,u),u&4&&h(a,1)):(a=Q(l),a.c(),h(a,1),a.m(e,n)):a&&(J(),y(a,1,1,()=>{a=null}),X()),l[1]?c&&(c.d(1),c=null):c||(c=V(),c.c(),c.m(e,null))},i(l){o||(h(a),o=!0)},o(l){y(a),o=!1},d(l){l&&_(e),p.d(),a&&a.d(),c&&c.d(),i[13](null)}}}function ue(i){let e,s;return e=new re({props:{width:i[4],cls:"photo",$$slots:{default:[me]},$$scope:{ctx:i}}}),{c(){w(e.$$.fragment)},m(n,o){I(e,n,o),s=!0},p(n,[o]){const r={};o&16&&(r.width=n[4]),o&16639&&(r.$$scope={dirty:o,ctx:n}),e.$set(r)},i(n){s||(h(e.$$.fragment,n),s=!0)},o(n){y(e.$$.fragment,n),s=!1},d(n){T(e,n)}}}function de(i,e,s){let{src:n}=e,{altText:o}=e,{caption:r}=e,{height:m=100}=e,{width:p="normal"}=e,{lazy:a=!1}=e,{top:c=0}=e,{bottom:l=0}=e,{left:u=0}=e,{right:v=0}=e,k=!1,g;const P=typeof IntersectionObserver<"u";Y(()=>{if(a&&P){const t=`${l}px ${u}px ${c}px ${v}px`,f=new IntersectionObserver(R=>{s(6,k=R[0].isIntersecting),k&&f.unobserve(g)},{rootMargin:t});return f.observe(g),()=>f.unobserve(g)}});function x(t){Z[t?"unshift":"push"](()=>{g=t,s(7,g)})}return i.$$set=t=>{"src"in t&&s(0,n=t.src),"altText"in t&&s(1,o=t.altText),"caption"in t&&s(2,r=t.caption),"height"in t&&s(3,m=t.height),"width"in t&&s(4,p=t.width),"lazy"in t&&s(5,a=t.lazy),"top"in t&&s(9,c=t.top),"bottom"in t&&s(10,l=t.bottom),"left"in t&&s(11,u=t.left),"right"in t&&s(12,v=t.right)},[n,o,r,m,p,a,k,g,P,c,l,u,v,x]}class M extends G{constructor(e){super(),B(this,e,de,ue,H,{src:0,altText:1,caption:2,height:3,width:4,lazy:5,top:9,bottom:10,left:11,right:12})}}M.__docgen={version:3,name:"FeaturePhoto.svelte",data:[{keywords:[{name:"type",description:"{string}"},{name:"required",description:""}],visibility:"public",description:"Photo src",name:"src",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"},{name:"required",description:""}],visibility:"public",description:"Photo altText",name:"altText",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Caption below the photo",name:"caption",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[],visibility:"public",description:"Height of the photo placeholder when lazy-loading",name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:100},{keywords:[],visibility:"public",description:"Width of the container, one of: normal, wide, wider, widest or fluid",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[],visibility:"public",description:"Whether to lazy load the photo using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)",name:"lazy",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `top` when lazy loading.",name:"top",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[],visibility:"public",description:"Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `bottom` when lazy loading.",name:"bottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[],visibility:"public",description:"Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `left` when lazy loading.",name:"left",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[],visibility:"public",description:"Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `right` when lazy loading.",name:"right",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const S=""+new URL("shark-f4201fc0.jpg",import.meta.url).href;function he(i){let e,s;const n=[i[1]];let o={};for(let r=0;r<n.length;r+=1)o=z(o,n[r]);return e=new M({props:o}),{c(){w(e.$$.fragment)},m(r,m){I(e,r,m),s=!0},p(r,m){const p=m&2?U(n,[F(r[1])]):{};e.$set(p)},i(r){s||(h(e.$$.fragment,r),s=!0)},o(r){y(e.$$.fragment,r),s=!1},d(r){T(e,r)}}}function ge(i){let e,s,n,o,r,m,p,a,c,l;const u=[{title:"Components/FeaturePhoto"},{component:M},i[0]];let v={};for(let t=0;t<u.length;t+=1)v=z(v,u[t]);e=new se({props:v}),n=new oe({props:{$$slots:{default:[he,({args:t})=>({1:t}),({args:t})=>t?2:0]},$$scope:{ctx:i}}}),r=new O({props:{name:"Default",args:{src:S,altText:"A shark!",width:"normal",caption:"Carcharodon carcharias - REUTERS"}}});const k=[{name:"🚀 QUICKIT"},{args:{src:S,altText:"A shark!",width:"normal",caption:"Carcharodon carcharias - REUTERS"}},D(W)];let g={};for(let t=0;t<k.length;t+=1)g=z(g,k[t]);p=new O({props:g});const P=[{name:"Missing altText"},{args:{src:S,width:"normal",caption:"Carcharodon carcharias - REUTERS"}},D(K)];let x={};for(let t=0;t<P.length;t+=1)x=z(x,P[t]);return c=new O({props:x}),{c(){w(e.$$.fragment),s=A(),w(n.$$.fragment),o=A(),w(r.$$.fragment),m=A(),w(p.$$.fragment),a=A(),w(c.$$.fragment)},m(t,f){I(e,t,f),b(t,s,f),I(n,t,f),b(t,o,f),I(r,t,f),b(t,m,f),I(p,t,f),b(t,a,f),I(c,t,f),l=!0},p(t,[f]){const R=f&1?U(u,[u[0],f&0&&{component:M},f&1&&F(t[0])]):{};e.$set(R);const q={};f&6&&(q.$$scope={dirty:f,ctx:t}),n.$set(q);const L=f&0?U(k,[k[0],f&0&&{args:{src:S,altText:"A shark!",width:"normal",caption:"Carcharodon carcharias - REUTERS"}},f&0&&F(D(W))]):{};p.$set(L);const N=f&0?U(P,[P[0],f&0&&{args:{src:S,width:"normal",caption:"Carcharodon carcharias - REUTERS"}},f&0&&F(D(K))]):{};c.$set(N)},i(t){l||(h(e.$$.fragment,t),h(n.$$.fragment,t),h(r.$$.fragment,t),h(p.$$.fragment,t),h(c.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),y(n.$$.fragment,t),y(r.$$.fragment,t),y(p.$$.fragment,t),y(c.$$.fragment,t),l=!1},d(t){T(e,t),t&&_(s),T(n,t),t&&_(o),T(r,t),t&&_(m),T(p,t),t&&_(a),T(c,t)}}}function ye(i){return[{...ae(le),argTypes:{width:{control:"select",options:["normal","wide","wider","widest","fluid"]}}}]}class be extends G{constructor(e){super(),B(this,e,ye,ge,H,{})}}const E=ne(be,{meta:{title:"Components/FeaturePhoto"},stories:{"tpl:default":{storyId:"components-featurephoto--default",name:"default",template:!0,source:"<FeaturePhoto {...args} />",hasArgs:!0},Default:{storyId:"components-featurephoto--default",name:"Default",template:!1,hasArgs:!1},QUICKIT:{storyId:"components-featurephoto--quickit",name:"🚀 QUICKIT",template:!1,hasArgs:!1},MissingAltText:{storyId:"components-featurephoto--missing-alt-text",name:"Missing altText",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","quickitDocs","missingAltTextDocs","FeaturePhoto","sharkSrc","withComponentDocs","withStoryDocs"]}),ve=E.meta,Pe=["Default","QUICKIT","MissingAltText"],Ae=E.stories.Default,xe=E.stories.QUICKIT,Se=E.stories.MissingAltText;export{Ae as Default,Se as MissingAltText,xe as QUICKIT,Pe as __namedExportsOrder,ve as default};
//# sourceMappingURL=FeaturePhoto.stories-7fbc5cd0.js.map
