import{S as ae,i as se,s as ie,c as b,m as x,t as u,a as d,d as T,q as A,o as P,f as y,Q as ce,h as _,R as pe,k,K as L,g as I,j as U,w as B,D as K,r as N,u as q,l as E}from"./index-C9aKRT5A.js";import{g as M,a as le}from"./spread-CgU5AtxT.js";import{p as me,M as fe,T as he,S as F,a as Q,w as ue}from"./collect-stories-ceFdpR5E.js";import{e as $}from"./each-D6YF6ztN.js";import{B as re}from"./Block-C7biTRWl.js";import{P as ge}from"./PaddingReset-CiOBBFtT.js";import{M as de}from"./Markdown-BNYiGaXJ.js";import{u as ye}from"./index-DkGirDfU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CROxjmim.js";const _e=`The \`PhotoPack\` component makes simple photo grids with custom layouts at whatever breakpoint you need.

\`\`\`svelte
<script>
  import { PhotoPack } from '@reuters-graphics/graphics-components';

  const images = [
    {
      src: 'https://...',
      altText: 'Alt text',
      caption: 'Lorem ipsum. REUTERS/Photog',
      // Optional max-height of image across all layouts
      maxHeight: 800,
    },
    // ...
  ];

  const layouts = [
    {
      // Breakpoint above which this layout applies
      breakpoint: 450,
      // Number of photos in each row of this layout, adding up to the total number of images
      rows: [1, 2, 1],
    },
    { breakpoint: 750, rows: [1, 3] },
  ];
<\/script>

<PhotoPack images="{images}" layouts="{layouts}" />
\`\`\`

\`images\` are defined with their src, alt text, captions and an optional \`maxHeight\`, which makes sure the image is no taller than that height in pixels in any layout.

\`layouts\` describe how those images will be laid out in rows at different breakpoints. The default layout (mobile-first) is each photo on its own row, stacked vertically, but you can group photos into \`rows\` above a \`breakpoint\` by specifying the number of photos that should go in that row. For example:

\`\`\`javascript
const layouts = [{
  breakpoint: 450,
  rows: [1,2,1],
}];
\`\`\`

... tells the component that when the \`PhotoPack\` container is 450 pixels or wider, it should group the 4 photos in 3 rows, 1 in the first, 2 in the second and 1 in the last.

You can define as many layouts for as many images as you like.
`,ke=`Setup your Google Doc with the images, layouts and other props you want:

\`\`\`yaml
# Google doc block
Type: photo-pack
ID: my-photo-pack
Class: mb-2 # adjust margin class as needed
Width: wide
TextWidth: normal
Gap: 10
[.Images]
  Src: images/my-img-1.jpg
  AltText: Alt text
  Caption: Lorem ipsum. REUTERS/Photog
  MaxHeight: 600 # Optional max-height

  Src: images/my-img-2.jpg
  AltText: Alt text
  Caption: Lorem ipsum. REUTERS/Photog

  Src: images/my-img-3.jpg
  AltText: Alt text
  Caption: Lorem ipsum. REUTERS/Photog

  Src: images/my-img-4.jpg
  AltText: Alt text
  Caption: Lorem ipsum. REUTERS/Photog

  Src: images/my-img-5.jpg
  AltText: Alt text
  Caption: Lorem ipsum. REUTERS/Photog
[]
[.Layouts]
  Breakpoint: 750
  Rows: 2,3 # Must add to total number of images!

  Breakpoint: 450
  Rows: 1,2,2
[]
\`\`\`

In your project, you can use the \`getPhotoPackPropsFromDoc\` utilty to easily convert the GoogleDoc format above into the props the \`PhotoPack\` component expects.

\`\`\`svelte
<!-- App.svelte -->
<script>
  import {
    getPhotoPackPropsFromDoc,
    PhotoPack,
  } from '@reuters-graphics/graphics-components';

  // These should be already imported for you.
  import content from '$locales/en/content.json';
  import { assets } from '$app/paths';
<\/script>

{#each content.blocks as block}
  {#if block.Type === 'text'}
    <!-- ... other blocks -->

    <!-- Copy/paste into your blocks loop! -->
  {:else if block.Type === 'photo-pack'}
    <PhotoPack {...getPhotoPackPropsFromDoc(block, assets)} />
    <!-- END copy/paste -->
  {/if}
{/each}
\`\`\`
`,we="If any of your images is missing `altText` a small warning will overlay the photo.\n";function V(i,e,s){const a=i.slice();return a[13]=e[s],a[15]=s,a}function O(i,e,s){const a=i.slice();return a[16]=e[s],a[18]=s,a}function z(i,e,s){const a=i.slice();return a[13]=e[s],a[15]=s,a}function J(i,e,s){const a=i.slice();return a[16]=e[s],a[18]=s,a}function Y(i){let e;return{c(){e=A("div"),e.textContent="altText",y(e,"class","alt-warning absolute text-xxs py-1 px-2 svelte-1fn13c0")},m(s,a){_(s,e,a)},d(s){s&&k(e)}}}function X(i){let e,s,a,t,r,o,l=!i[16].altText&&Y();return{c(){e=A("figure"),s=A("img"),r=P(),l&&l.c(),y(s,"class","m-0 w-full h-full object-cover"),B(s.src,a=i[16].src)||y(s,"src",a),y(s,"alt",t=i[16].altText),I(s,"max-height",i[16].maxHeight?i[16].maxHeight+"px":""),y(e,"class","relative m-0 p-0 flex-1"),y(e,"aria-labelledby",o=i[1]+"-figure-"+i[15]+"-"+i[18])},m(n,p){_(n,e,p),U(e,s),U(e,r),l&&l.m(e,null)},p(n,p){p&64&&!B(s.src,a=n[16].src)&&y(s,"src",a),p&64&&t!==(t=n[16].altText)&&y(s,"alt",t),p&64&&I(s,"max-height",n[16].maxHeight?n[16].maxHeight+"px":""),n[16].altText?l&&(l.d(1),l=null):l||(l=Y(),l.c(),l.m(e,null)),p&2&&o!==(o=n[1]+"-figure-"+n[15]+"-"+n[18])&&y(e,"aria-labelledby",o)},d(n){n&&k(e),l&&l.d()}}}function Z(i){let e,s,a=`0 ${i[0]}px`,t=$(i[13]),r=[];for(let o=0;o<t.length;o+=1)r[o]=X(J(i,t,o));return{c(){e=A("div");for(let o=0;o<r.length;o+=1)r[o].c();s=P(),y(e,"class","photopack-row flex justify-between"),I(e,"gap",a),I(e,"margin-bottom",i[15]<i[6].length-1?i[0]+"px":"")},m(o,l){_(o,e,l);for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(e,null);U(e,s)},p(o,l){if(l&66){t=$(o[13]);let n;for(n=0;n<t.length;n+=1){const p=J(o,t,n);r[n]?r[n].p(p,l):(r[n]=X(p),r[n].c(),r[n].m(e,s))}for(;n<r.length;n+=1)r[n].d(1);r.length=t.length}l&1&&a!==(a=`0 ${o[0]}px`)&&I(e,"gap",a),l&65&&I(e,"margin-bottom",o[15]<o[6].length-1?o[0]+"px":"")},d(o){o&&k(e),L(r,o)}}}function ee(i){let e,s,a,t,r;return s=new de({props:{source:i[16].caption}}),{c(){e=A("div"),b(s.$$.fragment),a=P(),y(e,"id",t=i[1]+"-figure-"+i[15]+"-"+i[18]),y(e,"class","caption")},m(o,l){_(o,e,l),x(s,e,null),U(e,a),r=!0},p(o,l){const n={};l&64&&(n.source=o[16].caption),s.$set(n),(!r||l&2&&t!==(t=o[1]+"-figure-"+o[15]+"-"+o[18]))&&y(e,"id",t)},i(o){r||(u(s.$$.fragment,o),r=!0)},o(o){d(s.$$.fragment,o),r=!1},d(o){o&&k(e),T(s)}}}function te(i){let e,s,a=i[16].caption&&ee(i);return{c(){a&&a.c(),e=K()},m(t,r){a&&a.m(t,r),_(t,e,r),s=!0},p(t,r){t[16].caption?a?(a.p(t,r),r&64&&u(a,1)):(a=ee(t),a.c(),u(a,1),a.m(e.parentNode,e)):a&&(N(),d(a,1,1,()=>{a=null}),q())},i(t){s||(u(a),s=!0)},o(t){d(a),s=!1},d(t){t&&k(e),a&&a.d(t)}}}function oe(i){let e,s,a=$(i[13]),t=[];for(let o=0;o<a.length;o+=1)t[o]=te(O(i,a,o));const r=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=K()},m(o,l){for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(o,l);_(o,e,l),s=!0},p(o,l){if(l&66){a=$(o[13]);let n;for(n=0;n<a.length;n+=1){const p=O(o,a,n);t[n]?(t[n].p(p,l),u(t[n],1)):(t[n]=te(p),t[n].c(),u(t[n],1),t[n].m(e.parentNode,e))}for(N(),n=a.length;n<t.length;n+=1)r(n);q()}},i(o){if(!s){for(let l=0;l<a.length;l+=1)u(t[l]);s=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);s=!1},d(o){o&&k(e),L(t,o)}}}function be(i){let e,s,a=$(i[6]),t=[];for(let o=0;o<a.length;o+=1)t[o]=oe(V(i,a,o));const r=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=K()},m(o,l){for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(o,l);_(o,e,l),s=!0},p(o,l){if(l&66){a=$(o[6]);let n;for(n=0;n<a.length;n+=1){const p=V(o,a,n);t[n]?(t[n].p(p,l),u(t[n],1)):(t[n]=oe(p),t[n].c(),u(t[n],1),t[n].m(e.parentNode,e))}for(N(),n=a.length;n<t.length;n+=1)r(n);q()}},i(o){if(!s){for(let l=0;l<a.length;l+=1)u(t[l]);s=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);s=!1},d(o){o&&k(e),L(t,o)}}}function xe(i){let e,s,a;return s=new re({props:{width:i[4],class:"photopack-captions-container",$$slots:{default:[be]},$$scope:{ctx:i}}}),{c(){e=A("div"),b(s.$$.fragment),y(e,"class","notes contents svelte-1fn13c0")},m(t,r){_(t,e,r),x(s,e,null),a=!0},p(t,r){const o={};r&16&&(o.width=t[4]),r&2097218&&(o.$$scope={dirty:r,ctx:t}),s.$set(o)},i(t){a||(u(s.$$.fragment,t),a=!0)},o(t){d(s.$$.fragment,t),a=!1},d(t){t&&k(e),T(s)}}}function Te(i){let e,s,a,t,r,o=$(i[6]),l=[];for(let n=0;n<o.length;n+=1)l[n]=Z(z(i,o,n));return t=new ge({props:{containerIsFluid:i[3]==="fluid",$$slots:{default:[xe]},$$scope:{ctx:i}}}),{c(){e=A("div");for(let n=0;n<l.length;n+=1)l[n].c();a=P(),b(t.$$.fragment),y(e,"class","photopack-container w-full svelte-1fn13c0"),ce(()=>i[10].call(e))},m(n,p){_(n,e,p);for(let g=0;g<l.length;g+=1)l[g]&&l[g].m(e,null);s=pe(e,i[10].bind(e)),_(n,a,p),x(t,n,p),r=!0},p(n,p){if(p&67){o=$(n[6]);let f;for(f=0;f<o.length;f+=1){const v=z(n,o,f);l[f]?l[f].p(v,p):(l[f]=Z(v),l[f].c(),l[f].m(e,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=o.length}const g={};p&8&&(g.containerIsFluid=n[3]==="fluid"),p&2097234&&(g.$$scope={dirty:p,ctx:n}),t.$set(g)},i(n){r||(u(t.$$.fragment,n),r=!0)},o(n){d(t.$$.fragment,n),r=!1},d(n){n&&(k(e),k(a)),L(l,n),s(),T(t,n)}}}function ve(i){let e,s;return e=new re({props:{width:i[3],id:i[1],class:"photopack fmy-6 "+i[2],$$slots:{default:[Te]},$$scope:{ctx:i}}}),{c(){b(e.$$.fragment)},m(a,t){x(e,a,t),s=!0},p(a,[t]){const r={};t&8&&(r.width=a[3]),t&2&&(r.id=a[1]),t&4&&(r.class="photopack fmy-6 "+a[2]),t&2097275&&(r.$$scope={dirty:t,ctx:a}),e.$set(r)},i(a){s||(u(e.$$.fragment,a),s=!0)},o(a){d(e.$$.fragment,a),s=!1},d(a){T(e,a)}}}function Pe(i,e,s){let a,t,{images:r=[]}=e,{layouts:o=[]}=e,{gap:l=15}=e;const n=()=>Math.floor((1+Math.random())*65536).toString(16).substring(1);let{id:p="photopack-"+n()+n()}=e,{class:g=""}=e,{width:f="normal"}=e,{textWidth:v="normal"}=e,w;const C=(m,c)=>{if(!c)return m.map(R=>[R]);let h=0;const D=[];for(const R of c.rows){const j=[];for(const H of[...Array(R).keys()])j.push(m[H+h]);D.push(j),h+=R}return D};function S(){w=this.clientWidth,s(5,w)}return i.$$set=m=>{"images"in m&&s(7,r=m.images),"layouts"in m&&s(8,o=m.layouts),"gap"in m&&s(0,l=m.gap),"id"in m&&s(1,p=m.id),"class"in m&&s(2,g=m.class),"width"in m&&s(3,f=m.width),"textWidth"in m&&s(4,v=m.textWidth)},i.$$.update=()=>{i.$$.dirty&256&&o.sort((m,c)=>m.breakpoint<c.breakpoint?1:-1),i.$$.dirty&416&&s(9,a=o.find(m=>m.rows.reduce((c,h)=>c+h,0)===r.length&&(w||0)>=m.breakpoint)),i.$$.dirty&640&&s(6,t=C(r,a))},[l,p,g,f,v,w,t,r,o,a,S]}class G extends ae{constructor(e){super(),se(this,e,Pe,ve,ie,{images:7,layouts:8,gap:0,id:1,class:2,width:3,textWidth:4})}}G.__docgen={version:3,name:"PhotoPack.svelte",data:[{keywords:[{name:"required",description:""}],visibility:"public",description:"Array of image objects",name:"images",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"required",description:""}],visibility:"public",description:"Array of layout objects",name:"layouts",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"Gap between images.",name:"gap",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:15},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Add an ID to target with SCSS. Should be unique from all other elements.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{visibility:"public",description:"Add a class to target with SCSS.",keywords:[{name:"type",description:"{string}"}],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""},{keywords:[],visibility:"public",description:"Width of the component within the text well.",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:`Set a different width for captions within the text well, for example,
"normal" to keep captions inline with the rest of the text well.
Can't ever be wider than \`width\`.`,name:"textWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ne=(i,e="")=>({id:i.ID,cls:i.Class,width:i.Width,textWidth:i.textWidth,gap:i.Gap&&isNaN(i.Gap)?null:parseInt(i.Gap),images:i.Images.map(s=>({src:/^https?:\/\/|^\/\//i.test(s.Src)?s.Src:ye(e,s.Src),altText:s.AltText,caption:s.Caption,maxHeight:s.MaxHeight&&isNaN(s.MaxHeight)?null:parseFloat(s.MaxHeight)})),layouts:i.Layouts.map(s=>({breakpoint:isNaN(s.Breakpoint)?null:parseFloat(s.Breakpoint),rows:s.Rows.split(",").map(a=>parseInt(a.trim()))}))});function $e(i){let e,s;const a=[i[6]];let t={};for(let r=0;r<a.length;r+=1)t=E(t,a[r]);return e=new G({props:t}),{c(){b(e.$$.fragment)},m(r,o){x(e,r,o),s=!0},p(r,o){const l=o&64?M(a,[le(r[6])]):{};e.$set(l)},i(r){s||(u(e.$$.fragment,r),s=!0)},o(r){d(e.$$.fragment,r),s=!1},d(r){T(e,r)}}}function Se(i){let e,s,a,t,r,o,l,n,p,g;const f=[{title:"Components/PhotoPack"},{component:G},i[0]];let v={};for(let c=0;c<f.length;c+=1)v=E(v,f[c]);e=new fe({props:v}),a=new he({props:{$$slots:{default:[$e,({args:c})=>({6:c}),({args:c})=>c?64:0]},$$scope:{ctx:i}}}),r=new F({props:{name:"Default",args:{width:"wide",textWidth:"normal",images:i[1],layouts:i[2]}}});const w=[{name:"🚀 QUICKIT"},Q(ke),{args:ne(i[3])}];let C={};for(let c=0;c<w.length;c+=1)C=E(C,w[c]);l=new F({props:C});const S=[{name:"Missing altText"},{args:{width:"wide",textWidth:"normal",images:i[4],layouts:i[5]}},Q(we)];let m={};for(let c=0;c<S.length;c+=1)m=E(m,S[c]);return p=new F({props:m}),{c(){b(e.$$.fragment),s=P(),b(a.$$.fragment),t=P(),b(r.$$.fragment),o=P(),b(l.$$.fragment),n=P(),b(p.$$.fragment)},m(c,h){x(e,c,h),_(c,s,h),x(a,c,h),_(c,t,h),x(r,c,h),_(c,o,h),x(l,c,h),_(c,n,h),x(p,c,h),g=!0},p(c,[h]){const D=h&1?M(f,[f[0],f[1],le(c[0])]):{};e.$set(D);const R={};h&192&&(R.$$scope={dirty:h,ctx:c}),a.$set(R);const j=h&8?M(w,[w[0],w[1],{args:ne(c[3])}]):{};l.$set(j);const H=h&48?M(S,[S[0],{args:{width:"wide",textWidth:"normal",images:c[4],layouts:c[5]}},S[2]]):{};p.$set(H)},i(c){g||(u(e.$$.fragment,c),u(a.$$.fragment,c),u(r.$$.fragment,c),u(l.$$.fragment,c),u(p.$$.fragment,c),g=!0)},o(c){d(e.$$.fragment,c),d(a.$$.fragment,c),d(r.$$.fragment,c),d(l.$$.fragment,c),d(p.$$.fragment,c),g=!1},d(c){c&&(k(s),k(t),k(o),k(n)),T(e,c),T(a,c),T(r,c),T(l,c),T(p,c)}}}function Re(i){return[{...ue(_e),argTypes:{width:{control:"select",options:["normal","wide","wider","widest","fluid"]},textWidth:{control:"select",options:["normal","wide","wider","widest","fluid"]}}},[{src:"https://via.placeholder.com/1024x768.jpg",altText:"alt text",caption:"A residential building destroyed by shelling in the settlement of Borodyanka in the Kyiv region, Ukraine March 3, 2022. Picture taken with a drone. REUTERS/Maksim Levin",maxHeight:400},{src:"https://via.placeholder.com/1640x1180.jpg",altText:"alt text",caption:"Surveillance footage shows a missile hitting a residential building in Kyiv, Ukraine, February 26, 2022, in this still image taken from a video obtained by REUTERS"},{src:"https://via.placeholder.com/1200x900.jpg",altText:"alt text",caption:"People walk past the remains of a missile at a bus terminal in Kyiv, Ukraine March 4, 2022. REUTERS/Valentyn Ogirenko"},{src:"https://via.placeholder.com/1024x768.jpg",altText:"alt text",caption:"People walk past the remains of a missile at a bus terminal. REUTERS/Valentyn Ogirenko"}],[{breakpoint:450,rows:[1,2,1]},{breakpoint:750,rows:[1,3]}],{Type:"photo-pack",ID:"my-photo-pack",Class:"mb-2",Width:"wide",textWidth:"normal",Gap:"15",Images:[{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog",MaxHeight:"600"},{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog"},{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog"},{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog"},{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog"}],Layouts:[{Breakpoint:"750",Rows:"2,3"},{Breakpoint:"450",Rows:"1, 2, 2"}]},[{src:"https://via.placeholder.com/1024x768.jpg",altText:"alt text",caption:"A residential building destroyed by shelling in the settlement of Borodyanka in the Kyiv region, Ukraine March 3, 2022. Picture taken with a drone. REUTERS/Maksim Levin",maxHeight:400},{src:"https://via.placeholder.com/1640x1180.jpg",altText:"",caption:"Surveillance footage shows a missile hitting a residential building in Kyiv, Ukraine, February 26, 2022, in this still image taken from a video obtained by REUTERS"}],[{breakpoint:450,rows:[2]}]]}class Ae extends ae{constructor(e){super(),se(this,e,Re,Se,ie,{})}}const W=me(Ae,{meta:{title:"Components/PhotoPack"},stories:{"tpl:default":{name:"default",template:!0,source:"<PhotoPack {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},QUICKIT:{name:"🚀 QUICKIT",template:!1,source:"",hasArgs:!1},MissingAltText:{name:"Missing altText",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","quickitDocs","missingAltTextDocs","PhotoPack","getPhotoPackPropsFromDoc","withComponentDocs","withStoryDocs"]}),Fe=W.meta,Ke=["Default","QUICKIT","MissingAltText"],Ne=W.stories.Default,qe=W.stories.QUICKIT,Ge=W.stories.MissingAltText;export{Ne as Default,Ge as MissingAltText,qe as QUICKIT,Ke as __namedExportsOrder,Fe as default};
