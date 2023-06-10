import{S as at,i as it,s as st,j as w,m as b,b as v,t as T,n as x,w as $,D as P,x as g,R as pt,a as d,T as ct,d as y,a5 as H,C as R,z as L,Q as N,e as lt,W as mt,p as j,k as M,l as U}from"./index-25af778d.js";import{p as ht,M as ft,T as ut,S as q}from"./collect-stories-cce06d4a.js";import{B as rt}from"./Block-9c89ee1a.js";import{P as gt}from"./PaddingReset-d848e1b7.js";import{m as G}from"./marked.esm-76161808.js";import{u as dt}from"./index-11ab1f87.js";import{a as E,w as yt}from"./withParams-90715500.js";import"./_commonjsHelpers-725317a4.js";const _t=`The \`PhotoPack\` component makes simple photo grids with custom layouts at whatever breakpoint you need.

\`\`\`html
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
{
  breakpoint: 450,
  rows: [1,2,1],
}
\`\`\`

... tells the component that when the \`PhotoPack\` container is 450 pixels or wider, it should group the 4 photos in 3 rows, 1 in the first, 2 in the second and 1 in the last.

You can define as many layouts for as many images as you like.
`,Q=`Setup your Google Doc with the images, layouts and other props you want:

\`\`\`yaml
# Google doc block
Type: photo-pack
ID: my-photo-pack
Class: mb-2 # adjust margin class as needed
Width: wide
CaptionWidth: normal
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

\`\`\`html
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

{#each content.blocks as block} {#if block.Type === 'text'}
<!-- ... other blocks -->

<!-- Copy/paste into your blocks loop! -->
{:else if block.Type === 'photo-pack'}
<PhotoPack {...getPhotoPackPropsFromDoc(block, assets)} />
<!-- END copy/paste -->
{/if} {/each}
\`\`\`
`,V="If any of your images is missing `altText` a small warning will overlay the photo.\n";function B(i,t,o){const e=i.slice();return e[13]=t[o],e[15]=o,e}function O(i,t,o){const e=i.slice();return e[16]=t[o],e[18]=o,e}function z(i,t,o){const e=i.slice();return e[13]=t[o],e[15]=o,e}function J(i,t,o){const e=i.slice();return e[16]=t[o],e[18]=o,e}function Y(i){let t;return{c(){t=$("div"),t.textContent="altText",g(t,"class","alt-warning svelte-icc27n")},m(o,e){d(o,t,e)},d(o){o&&y(t)}}}function X(i){let t,o,e,n,s,a,r=!i[16].altText&&Y();return{c(){t=$("figure"),o=$("img"),s=P(),r&&r.c(),N(o.src,e=i[16].src)||g(o,"src",e),g(o,"alt",n=i[16].altText),g(o,"class","svelte-icc27n"),R(o,"max-height",i[16].maxHeight?i[16].maxHeight+"px":""),g(t,"aria-labelledby",a=i[1]+"-figure-"+i[15]+"-"+i[18]),g(t,"class","svelte-icc27n")},m(l,c){d(l,t,c),L(t,o),L(t,s),r&&r.m(t,null)},p(l,c){c&64&&!N(o.src,e=l[16].src)&&g(o,"src",e),c&64&&n!==(n=l[16].altText)&&g(o,"alt",n),c&64&&R(o,"max-height",l[16].maxHeight?l[16].maxHeight+"px":""),l[16].altText?r&&(r.d(1),r=null):r||(r=Y(),r.c(),r.m(t,null)),c&2&&a!==(a=l[1]+"-figure-"+l[15]+"-"+l[18])&&g(t,"aria-labelledby",a)},d(l){l&&y(t),r&&r.d()}}}function Z(i){let t,o,e=`0 ${i[0]}px`,n=i[13],s=[];for(let a=0;a<n.length;a+=1)s[a]=X(J(i,n,a));return{c(){t=$("div");for(let a=0;a<s.length;a+=1)s[a].c();o=P(),g(t,"class","photopack-row svelte-icc27n"),R(t,"gap",e),R(t,"margin-bottom",i[0]+"px")},m(a,r){d(a,t,r);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(t,null);L(t,o)},p(a,r){if(r&66){n=a[13];let l;for(l=0;l<n.length;l+=1){const c=J(a,n,l);s[l]?s[l].p(c,r):(s[l]=X(c),s[l].c(),s[l].m(t,o))}for(;l<s.length;l+=1)s[l].d(1);s.length=n.length}r&1&&e!==(e=`0 ${a[0]}px`)&&R(t,"gap",e),r&1&&R(t,"margin-bottom",a[0]+"px")},d(a){a&&y(t),H(s,a)}}}function tt(i){let t,o,e=G(i[16].caption)+"",n,s;return{c(){t=$("div"),o=new mt(!1),n=P(),o.a=n,g(t,"id",s=i[1]+"-figure-"+i[15]+"-"+i[18]),g(t,"class","caption svelte-icc27n")},m(a,r){d(a,t,r),o.m(e,t),L(t,n)},p(a,r){r&64&&e!==(e=G(a[16].caption)+"")&&o.p(e),r&2&&s!==(s=a[1]+"-figure-"+a[15]+"-"+a[18])&&g(t,"id",s)},d(a){a&&y(t)}}}function et(i){let t,o=i[16].caption&&tt(i);return{c(){o&&o.c(),t=lt()},m(e,n){o&&o.m(e,n),d(e,t,n)},p(e,n){e[16].caption?o?o.p(e,n):(o=tt(e),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null)},d(e){o&&o.d(e),e&&y(t)}}}function ot(i){let t,o=i[13],e=[];for(let n=0;n<o.length;n+=1)e[n]=et(O(i,o,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=lt()},m(n,s){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(n,s);d(n,t,s)},p(n,s){if(s&66){o=n[13];let a;for(a=0;a<o.length;a+=1){const r=O(n,o,a);e[a]?e[a].p(r,s):(e[a]=et(r),e[a].c(),e[a].m(t.parentNode,t))}for(;a<e.length;a+=1)e[a].d(1);e.length=o.length}},d(n){H(e,n),n&&y(t)}}}function kt(i){let t,o=i[6],e=[];for(let n=0;n<o.length;n+=1)e[n]=ot(B(i,o,n));return{c(){t=$("div");for(let n=0;n<e.length;n+=1)e[n].c();g(t,"class","captions-container svelte-icc27n")},m(n,s){d(n,t,s);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(t,null)},p(n,s){if(s&66){o=n[6];let a;for(a=0;a<o.length;a+=1){const r=B(n,o,a);e[a]?e[a].p(r,s):(e[a]=ot(r),e[a].c(),e[a].m(t,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=o.length}},d(n){n&&y(t),H(e,n)}}}function wt(i){let t,o;return t=new rt({props:{width:i[4],$$slots:{default:[kt]},$$scope:{ctx:i}}}),{c(){w(t.$$.fragment)},m(e,n){b(t,e,n),o=!0},p(e,n){const s={};n&16&&(s.width=e[4]),n&2097218&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){o||(v(t.$$.fragment,e),o=!0)},o(e){T(t.$$.fragment,e),o=!1},d(e){x(t,e)}}}function bt(i){let t,o,e,n,s,a=i[6],r=[];for(let l=0;l<a.length;l+=1)r[l]=Z(z(i,a,l));return n=new gt({props:{containerIsFluid:i[3]==="fluid",$$slots:{default:[wt]},$$scope:{ctx:i}}}),{c(){t=$("div");for(let l=0;l<r.length;l+=1)r[l].c();e=P(),w(n.$$.fragment),g(t,"class","photopack-container svelte-icc27n"),pt(()=>i[10].call(t))},m(l,c){d(l,t,c);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(t,null);o=ct(t,i[10].bind(t)),d(l,e,c),b(n,l,c),s=!0},p(l,c){if(c&67){a=l[6];let f;for(f=0;f<a.length;f+=1){const _=z(l,a,f);r[f]?r[f].p(_,c):(r[f]=Z(_),r[f].c(),r[f].m(t,null))}for(;f<r.length;f+=1)r[f].d(1);r.length=a.length}const u={};c&8&&(u.containerIsFluid=l[3]==="fluid"),c&2097234&&(u.$$scope={dirty:c,ctx:l}),n.$set(u)},i(l){s||(v(n.$$.fragment,l),s=!0)},o(l){T(n.$$.fragment,l),s=!1},d(l){l&&y(t),H(r,l),o(),l&&y(e),x(n,l)}}}function vt(i){let t,o;return t=new rt({props:{width:i[3],id:i[1],cls:"photopack "+i[2],$$slots:{default:[bt]},$$scope:{ctx:i}}}),{c(){w(t.$$.fragment)},m(e,n){b(t,e,n),o=!0},p(e,[n]){const s={};n&8&&(s.width=e[3]),n&2&&(s.id=e[1]),n&4&&(s.cls="photopack "+e[2]),n&2097275&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){o||(v(t.$$.fragment,e),o=!0)},o(e){T(t.$$.fragment,e),o=!1},d(e){x(t,e)}}}function Tt(i,t,o){let e,n,{images:s=[]}=t,{layouts:a=[]}=t,{gap:r=10}=t;const l=()=>Math.floor((1+Math.random())*65536).toString(16).substring(1);let{id:c="photopack-"+l()+l()}=t,{cls:u=""}=t,{width:f="normal"}=t,{captionWidth:_="normal"}=t,k;const A=(m,p)=>{if(!p)return m.map(S=>[S]);let h=0;const C=[];for(const S of p.rows){const D=[];for(const K of[...Array(S).keys()])D.push(m[K+h]);C.push(D),h+=S}return C};function I(){k=this.clientWidth,o(5,k)}return i.$$set=m=>{"images"in m&&o(7,s=m.images),"layouts"in m&&o(8,a=m.layouts),"gap"in m&&o(0,r=m.gap),"id"in m&&o(1,c=m.id),"cls"in m&&o(2,u=m.cls),"width"in m&&o(3,f=m.width),"captionWidth"in m&&o(4,_=m.captionWidth)},i.$$.update=()=>{i.$$.dirty&256&&a.sort((m,p)=>m.breakpoint<p.breakpoint?1:-1),i.$$.dirty&416&&o(9,e=a.find(m=>m.rows.reduce((p,h)=>p+h,0)===s.length&&(k||0)>=m.breakpoint)),i.$$.dirty&640&&o(6,n=A(s,e))},[r,c,u,f,_,k,n,s,a,e,I]}class W extends at{constructor(t){super(),it(this,t,Tt,vt,st,{images:7,layouts:8,gap:0,id:1,cls:2,width:3,captionWidth:4})}}W.__docgen={version:3,name:"PhotoPack.svelte",data:[{keywords:[{name:"required",description:""}],visibility:"public",description:"Array of image objects",name:"images",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"required",description:""}],visibility:"public",description:"Array of layout objects",name:"layouts",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"Gap between images.",name:"gap",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:10},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Add an ID to target with SCSS. Should be unique from all other elements.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Add a class to target with SCSS.",name:"cls",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Width of the component within the text well.",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:`Set a different width for captions within the text well, for example,
"normal" to keep captions inline with the rest of the text well.
Can't ever be wider than \`width\`.`,name:"captionWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const nt=(i,t="")=>({id:i.ID,cls:i.Class,width:i.Width,captionWidth:i.CaptionWidth,gap:i.Gap&&isNaN(i.Gap)?null:parseInt(i.Gap),images:i.Images.map(o=>({src:/^https?:\/\/|^\/\//i.test(o.Src)?o.Src:dt(t,o.Src),altText:o.AltText,caption:o.Caption,maxHeight:o.MaxHeight&&isNaN(o.MaxHeight)?null:parseFloat(o.MaxHeight)})),layouts:i.Layouts.map(o=>({breakpoint:isNaN(o.Breakpoint)?null:parseFloat(o.Breakpoint),rows:o.Rows.split(",").map(e=>parseInt(e.trim()))}))});function xt(i){let t,o;const e=[i[6]];let n={};for(let s=0;s<e.length;s+=1)n=j(n,e[s]);return t=new W({props:n}),{c(){w(t.$$.fragment)},m(s,a){b(t,s,a),o=!0},p(s,a){const r=a&64?M(e,[U(s[6])]):{};t.$set(r)},i(s){o||(v(t.$$.fragment,s),o=!0)},o(s){T(t.$$.fragment,s),o=!1},d(s){x(t,s)}}}function Pt(i){let t,o,e,n,s,a,r,l,c,u;const f=[{title:"Components/PhotoPack"},{component:W},i[0]];let _={};for(let p=0;p<f.length;p+=1)_=j(_,f[p]);t=new ft({props:_}),e=new ut({props:{$$slots:{default:[xt,({args:p})=>({6:p}),({args:p})=>p?64:0]},$$scope:{ctx:i}}}),s=new q({props:{name:"Default",args:{width:"wide",captionWidth:"normal",images:i[1],layouts:i[2]}}});const k=[{name:"🚀 QUICKIT"},E(Q),{args:nt(i[3])}];let A={};for(let p=0;p<k.length;p+=1)A=j(A,k[p]);r=new q({props:A});const I=[{name:"Missing altText"},{args:{width:"wide",captionWidth:"normal",images:i[4],layouts:i[5]}},E(V)];let m={};for(let p=0;p<I.length;p+=1)m=j(m,I[p]);return c=new q({props:m}),{c(){w(t.$$.fragment),o=P(),w(e.$$.fragment),n=P(),w(s.$$.fragment),a=P(),w(r.$$.fragment),l=P(),w(c.$$.fragment)},m(p,h){b(t,p,h),d(p,o,h),b(e,p,h),d(p,n,h),b(s,p,h),d(p,a,h),b(r,p,h),d(p,l,h),b(c,p,h),u=!0},p(p,[h]){const C=h&1?M(f,[f[0],h&0&&{component:W},h&1&&U(p[0])]):{};t.$set(C);const S={};h&192&&(S.$$scope={dirty:h,ctx:p}),e.$set(S);const D=h&8?M(k,[k[0],h&0&&U(E(Q)),h&8&&{args:nt(p[3])}]):{};r.$set(D);const K=h&48?M(I,[I[0],h&48&&{args:{width:"wide",captionWidth:"normal",images:p[4],layouts:p[5]}},h&0&&U(E(V))]):{};c.$set(K)},i(p){u||(v(t.$$.fragment,p),v(e.$$.fragment,p),v(s.$$.fragment,p),v(r.$$.fragment,p),v(c.$$.fragment,p),u=!0)},o(p){T(t.$$.fragment,p),T(e.$$.fragment,p),T(s.$$.fragment,p),T(r.$$.fragment,p),T(c.$$.fragment,p),u=!1},d(p){x(t,p),p&&y(o),x(e,p),p&&y(n),x(s,p),p&&y(a),x(r,p),p&&y(l),x(c,p)}}}function St(i){return[{...yt(_t),argTypes:{width:{control:"select",options:["normal","wide","wider","widest","fluid"]},captionWidth:{control:"select",options:["normal","wide","wider","widest","fluid"]}}},[{src:"https://via.placeholder.com/1024x768.jpg",altText:"alt text",caption:"A residential building destroyed by shelling in the settlement of Borodyanka in the Kyiv region, Ukraine March 3, 2022. Picture taken with a drone. REUTERS/Maksim Levin",maxHeight:400},{src:"https://via.placeholder.com/1640x1180.jpg",altText:"alt text",caption:"Surveillance footage shows a missile hitting a residential building in Kyiv, Ukraine, February 26, 2022, in this still image taken from a video obtained by REUTERS"},{src:"https://via.placeholder.com/1200x900.jpg",altText:"alt text",caption:"People walk past the remains of a missile at a bus terminal in Kyiv, Ukraine March 4, 2022. REUTERS/Valentyn Ogirenko"},{src:"https://via.placeholder.com/1024x768.jpg",altText:"alt text",caption:"People walk past the remains of a missile at a bus terminal. REUTERS/Valentyn Ogirenko"}],[{breakpoint:450,rows:[1,2,1]},{breakpoint:750,rows:[1,3]}],{Type:"photo-pack",ID:"my-photo-pack",Class:"mb-2",Width:"wide",CaptionWidth:"normal",Gap:"10",Images:[{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog",MaxHeight:"600"},{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog"},{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog"},{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog"},{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog"}],Layouts:[{Breakpoint:"750",Rows:"2,3"},{Breakpoint:"450",Rows:"1, 2, 2"}]},[{src:"https://via.placeholder.com/1024x768.jpg",altText:"alt text",caption:"A residential building destroyed by shelling in the settlement of Borodyanka in the Kyiv region, Ukraine March 3, 2022. Picture taken with a drone. REUTERS/Maksim Levin",maxHeight:400},{src:"https://via.placeholder.com/1640x1180.jpg",altText:"",caption:"Surveillance footage shows a missile hitting a residential building in Kyiv, Ukraine, February 26, 2022, in this still image taken from a video obtained by REUTERS"}],[{breakpoint:450,rows:[2]}]]}class $t extends at{constructor(t){super(),it(this,t,St,Pt,st,{})}}const F=ht($t,{meta:{title:"Components/PhotoPack"},stories:{"tpl:default":{storyId:"components-photopack--default",name:"default",template:!0,source:"<PhotoPack {...args} />",hasArgs:!0},Default:{storyId:"components-photopack--default",name:"Default",template:!1,hasArgs:!1},QUICKIT:{storyId:"components-photopack--quickit",name:"🚀 QUICKIT",template:!1,hasArgs:!1},MissingAltText:{storyId:"components-photopack--missing-alt-text",name:"Missing altText",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","quickitDocs","missingAltTextDocs","PhotoPack","getPhotoPackPropsFromDoc","withComponentDocs","withStoryDocs"]}),Ut=F.meta,Lt=["Default","QUICKIT","MissingAltText"],Wt=F.stories.Default,Ht=F.stories.QUICKIT,Ft=F.stories.MissingAltText;export{Wt as Default,Ft as MissingAltText,Ht as QUICKIT,Lt as __namedExportsOrder,Ut as default};
//# sourceMappingURL=PhotoPack.stories-97d7835b.js.map
