import{S as at,i as nt,s as st,c as b,m as w,t as x,a as v,d as T,l as R,p as P,h as d,Q as rt,b as g,R as pt,f as y,K as L,j as A,k as U,F as q,e as K,H as ct,C as E}from"./index-2c1648fc.js";import{g as M,a as it}from"./spread-8a54911c.js";import{p as mt,M as ht,T as ft,S as F}from"./collect-stories-640c7888.js";import{e as S}from"./each-e59479a4.js";import{B as lt}from"./Block-d69850f9.js";import{P as ut}from"./PaddingReset-05774ed0.js";import{m as G}from"./marked.esm-76161808.js";import{u as dt}from"./index-b62d9356.js";import{b as Q,w as gt}from"./withParams-47e2ab71.js";import"./_commonjsHelpers-de833af9.js";const yt=`The \`PhotoPack\` component makes simple photo grids with custom layouts at whatever breakpoint you need.

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
{
  breakpoint: 450,
  rows: [1,2,1],
}
\`\`\`

... tells the component that when the \`PhotoPack\` container is 450 pixels or wider, it should group the 4 photos in 3 rows, 1 in the first, 2 in the second and 1 in the last.

You can define as many layouts for as many images as you like.
`,_t=`Setup your Google Doc with the images, layouts and other props you want:

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
`,kt="If any of your images is missing `altText` a small warning will overlay the photo.\n";function V(s,t,e){const o=s.slice();return o[13]=t[e],o[15]=e,o}function B(s,t,e){const o=s.slice();return o[16]=t[e],o[18]=e,o}function O(s,t,e){const o=s.slice();return o[13]=t[e],o[15]=e,o}function z(s,t,e){const o=s.slice();return o[16]=t[e],o[18]=e,o}function J(s){let t;return{c(){t=R("div"),t.textContent="altText",d(t,"class","alt-warning absolute text-xxs py-1 px-2 svelte-1cbbkss")},m(e,o){g(e,t,o)},d(e){e&&y(t)}}}function Y(s){let t,e,o,a,i,n,r=!s[16].altText&&J();return{c(){t=R("figure"),e=R("img"),i=P(),r&&r.c(),d(e,"class","m-0 w-full h-full object-cover"),q(e.src,o=s[16].src)||d(e,"src",o),d(e,"alt",a=s[16].altText),A(e,"max-height",s[16].maxHeight?s[16].maxHeight+"px":""),d(t,"class","relative m-0 p-0 flex-1"),d(t,"aria-labelledby",n=s[1]+"-figure-"+s[15]+"-"+s[18])},m(l,c){g(l,t,c),U(t,e),U(t,i),r&&r.m(t,null)},p(l,c){c&64&&!q(e.src,o=l[16].src)&&d(e,"src",o),c&64&&a!==(a=l[16].altText)&&d(e,"alt",a),c&64&&A(e,"max-height",l[16].maxHeight?l[16].maxHeight+"px":""),l[16].altText?r&&(r.d(1),r=null):r||(r=J(),r.c(),r.m(t,null)),c&2&&n!==(n=l[1]+"-figure-"+l[15]+"-"+l[18])&&d(t,"aria-labelledby",n)},d(l){l&&y(t),r&&r.d()}}}function X(s){let t,e,o=`0 ${s[0]}px`,a=S(s[13]),i=[];for(let n=0;n<a.length;n+=1)i[n]=Y(z(s,a,n));return{c(){t=R("div");for(let n=0;n<i.length;n+=1)i[n].c();e=P(),d(t,"class","photopack-row flex justify-between"),A(t,"gap",o),A(t,"margin-bottom",s[15]<s[6].length-1?s[0]+"px":"")},m(n,r){g(n,t,r);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(t,null);U(t,e)},p(n,r){if(r&66){a=S(n[13]);let l;for(l=0;l<a.length;l+=1){const c=z(n,a,l);i[l]?i[l].p(c,r):(i[l]=Y(c),i[l].c(),i[l].m(t,e))}for(;l<i.length;l+=1)i[l].d(1);i.length=a.length}r&1&&o!==(o=`0 ${n[0]}px`)&&A(t,"gap",o),r&65&&A(t,"margin-bottom",n[15]<n[6].length-1?n[0]+"px":"")},d(n){n&&y(t),L(i,n)}}}function Z(s){let t,e,o=G(s[16].caption)+"",a,i;return{c(){t=R("div"),e=new ct(!1),a=P(),e.a=a,d(t,"id",i=s[1]+"-figure-"+s[15]+"-"+s[18]),d(t,"class","caption")},m(n,r){g(n,t,r),e.m(o,t),U(t,a)},p(n,r){r&64&&o!==(o=G(n[16].caption)+"")&&e.p(o),r&2&&i!==(i=n[1]+"-figure-"+n[15]+"-"+n[18])&&d(t,"id",i)},d(n){n&&y(t)}}}function tt(s){let t,e=s[16].caption&&Z(s);return{c(){e&&e.c(),t=K()},m(o,a){e&&e.m(o,a),g(o,t,a)},p(o,a){o[16].caption?e?e.p(o,a):(e=Z(o),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(o){o&&y(t),e&&e.d(o)}}}function et(s){let t,e=S(s[13]),o=[];for(let a=0;a<e.length;a+=1)o[a]=tt(B(s,e,a));return{c(){for(let a=0;a<o.length;a+=1)o[a].c();t=K()},m(a,i){for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(a,i);g(a,t,i)},p(a,i){if(i&66){e=S(a[13]);let n;for(n=0;n<e.length;n+=1){const r=B(a,e,n);o[n]?o[n].p(r,i):(o[n]=tt(r),o[n].c(),o[n].m(t.parentNode,t))}for(;n<o.length;n+=1)o[n].d(1);o.length=e.length}},d(a){a&&y(t),L(o,a)}}}function bt(s){let t,e=S(s[6]),o=[];for(let a=0;a<e.length;a+=1)o[a]=et(V(s,e,a));return{c(){for(let a=0;a<o.length;a+=1)o[a].c();t=K()},m(a,i){for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(a,i);g(a,t,i)},p(a,i){if(i&66){e=S(a[6]);let n;for(n=0;n<e.length;n+=1){const r=V(a,e,n);o[n]?o[n].p(r,i):(o[n]=et(r),o[n].c(),o[n].m(t.parentNode,t))}for(;n<o.length;n+=1)o[n].d(1);o.length=e.length}},d(a){a&&y(t),L(o,a)}}}function wt(s){let t,e,o;return e=new lt({props:{width:s[4],class:"photopack-captions-container",$$slots:{default:[bt]},$$scope:{ctx:s}}}),{c(){t=R("div"),b(e.$$.fragment),d(t,"class","notes contents svelte-1cbbkss")},m(a,i){g(a,t,i),w(e,t,null),o=!0},p(a,i){const n={};i&16&&(n.width=a[4]),i&2097218&&(n.$$scope={dirty:i,ctx:a}),e.$set(n)},i(a){o||(x(e.$$.fragment,a),o=!0)},o(a){v(e.$$.fragment,a),o=!1},d(a){a&&y(t),T(e)}}}function xt(s){let t,e,o,a,i,n=S(s[6]),r=[];for(let l=0;l<n.length;l+=1)r[l]=X(O(s,n,l));return a=new ut({props:{containerIsFluid:s[3]==="fluid",$$slots:{default:[wt]},$$scope:{ctx:s}}}),{c(){t=R("div");for(let l=0;l<r.length;l+=1)r[l].c();o=P(),b(a.$$.fragment),d(t,"class","photopack-container w-full svelte-1cbbkss"),rt(()=>s[10].call(t))},m(l,c){g(l,t,c);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(t,null);e=pt(t,s[10].bind(t)),g(l,o,c),w(a,l,c),i=!0},p(l,c){if(c&67){n=S(l[6]);let h;for(h=0;h<n.length;h+=1){const k=O(l,n,h);r[h]?r[h].p(k,c):(r[h]=X(k),r[h].c(),r[h].m(t,null))}for(;h<r.length;h+=1)r[h].d(1);r.length=n.length}const u={};c&8&&(u.containerIsFluid=l[3]==="fluid"),c&2097234&&(u.$$scope={dirty:c,ctx:l}),a.$set(u)},i(l){i||(x(a.$$.fragment,l),i=!0)},o(l){v(a.$$.fragment,l),i=!1},d(l){l&&(y(t),y(o)),L(r,l),e(),T(a,l)}}}function vt(s){let t,e;return t=new lt({props:{width:s[3],id:s[1],class:"photopack fmy-6 "+s[2],$$slots:{default:[xt]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},m(o,a){w(t,o,a),e=!0},p(o,[a]){const i={};a&8&&(i.width=o[3]),a&2&&(i.id=o[1]),a&4&&(i.class="photopack fmy-6 "+o[2]),a&2097275&&(i.$$scope={dirty:a,ctx:o}),t.$set(i)},i(o){e||(x(t.$$.fragment,o),e=!0)},o(o){v(t.$$.fragment,o),e=!1},d(o){T(t,o)}}}function Tt(s,t,e){let o,a,{images:i=[]}=t,{layouts:n=[]}=t,{gap:r=15}=t;const l=()=>Math.floor((1+Math.random())*65536).toString(16).substring(1);let{id:c="photopack-"+l()+l()}=t,{class:u=""}=t,{width:h="normal"}=t,{textWidth:k="normal"}=t,_;const C=(m,p)=>{if(!p)return m.map(I=>[I]);let f=0;const D=[];for(const I of p.rows){const j=[];for(const H of[...Array(I).keys()])j.push(m[H+f]);D.push(j),f+=I}return D};function $(){_=this.clientWidth,e(5,_)}return s.$$set=m=>{"images"in m&&e(7,i=m.images),"layouts"in m&&e(8,n=m.layouts),"gap"in m&&e(0,r=m.gap),"id"in m&&e(1,c=m.id),"class"in m&&e(2,u=m.class),"width"in m&&e(3,h=m.width),"textWidth"in m&&e(4,k=m.textWidth)},s.$$.update=()=>{s.$$.dirty&256&&n.sort((m,p)=>m.breakpoint<p.breakpoint?1:-1),s.$$.dirty&416&&e(9,o=n.find(m=>m.rows.reduce((p,f)=>p+f,0)===i.length&&(_||0)>=m.breakpoint)),s.$$.dirty&640&&e(6,a=C(i,o))},[r,c,u,h,k,_,a,i,n,o,$]}class N extends at{constructor(t){super(),nt(this,t,Tt,vt,st,{images:7,layouts:8,gap:0,id:1,class:2,width:3,textWidth:4})}}N.__docgen={version:3,name:"PhotoPack.svelte",data:[{keywords:[{name:"required",description:""}],visibility:"public",description:"Array of image objects",name:"images",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"required",description:""}],visibility:"public",description:"Array of layout objects",name:"layouts",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"Gap between images.",name:"gap",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:15},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Add an ID to target with SCSS. Should be unique from all other elements.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{visibility:"public",description:"Add a class to target with SCSS.",keywords:[{name:"type",description:"{string}"}],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""},{keywords:[],visibility:"public",description:"Width of the component within the text well.",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:`Set a different width for captions within the text well, for example,
"normal" to keep captions inline with the rest of the text well.
Can't ever be wider than \`width\`.`,name:"textWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ot=(s,t="")=>({id:s.ID,cls:s.Class,width:s.Width,textWidth:s.textWidth,gap:s.Gap&&isNaN(s.Gap)?null:parseInt(s.Gap),images:s.Images.map(e=>({src:/^https?:\/\/|^\/\//i.test(e.Src)?e.Src:dt(t,e.Src),altText:e.AltText,caption:e.Caption,maxHeight:e.MaxHeight&&isNaN(e.MaxHeight)?null:parseFloat(e.MaxHeight)})),layouts:s.Layouts.map(e=>({breakpoint:isNaN(e.Breakpoint)?null:parseFloat(e.Breakpoint),rows:e.Rows.split(",").map(o=>parseInt(o.trim()))}))});function Pt(s){let t,e;const o=[s[6]];let a={};for(let i=0;i<o.length;i+=1)a=E(a,o[i]);return t=new N({props:a}),{c(){b(t.$$.fragment)},m(i,n){w(t,i,n),e=!0},p(i,n){const r=n&64?M(o,[it(i[6])]):{};t.$set(r)},i(i){e||(x(t.$$.fragment,i),e=!0)},o(i){v(t.$$.fragment,i),e=!1},d(i){T(t,i)}}}function St(s){let t,e,o,a,i,n,r,l,c,u;const h=[{title:"Components/PhotoPack"},{component:N},s[0]];let k={};for(let p=0;p<h.length;p+=1)k=E(k,h[p]);t=new ht({props:k}),o=new ft({props:{$$slots:{default:[Pt,({args:p})=>({6:p}),({args:p})=>p?64:0]},$$scope:{ctx:s}}}),i=new F({props:{name:"Default",args:{width:"wide",textWidth:"normal",images:s[1],layouts:s[2]}}});const _=[{name:"🚀 QUICKIT"},Q(_t),{args:ot(s[3])}];let C={};for(let p=0;p<_.length;p+=1)C=E(C,_[p]);r=new F({props:C});const $=[{name:"Missing altText"},{args:{width:"wide",textWidth:"normal",images:s[4],layouts:s[5]}},Q(kt)];let m={};for(let p=0;p<$.length;p+=1)m=E(m,$[p]);return c=new F({props:m}),{c(){b(t.$$.fragment),e=P(),b(o.$$.fragment),a=P(),b(i.$$.fragment),n=P(),b(r.$$.fragment),l=P(),b(c.$$.fragment)},m(p,f){w(t,p,f),g(p,e,f),w(o,p,f),g(p,a,f),w(i,p,f),g(p,n,f),w(r,p,f),g(p,l,f),w(c,p,f),u=!0},p(p,[f]){const D=f&1?M(h,[h[0],h[1],it(p[0])]):{};t.$set(D);const I={};f&192&&(I.$$scope={dirty:f,ctx:p}),o.$set(I);const j=f&8?M(_,[_[0],_[1],{args:ot(p[3])}]):{};r.$set(j);const H=f&48?M($,[$[0],{args:{width:"wide",textWidth:"normal",images:p[4],layouts:p[5]}},$[2]]):{};c.$set(H)},i(p){u||(x(t.$$.fragment,p),x(o.$$.fragment,p),x(i.$$.fragment,p),x(r.$$.fragment,p),x(c.$$.fragment,p),u=!0)},o(p){v(t.$$.fragment,p),v(o.$$.fragment,p),v(i.$$.fragment,p),v(r.$$.fragment,p),v(c.$$.fragment,p),u=!1},d(p){p&&(y(e),y(a),y(n),y(l)),T(t,p),T(o,p),T(i,p),T(r,p),T(c,p)}}}function $t(s){return[{...gt(yt),argTypes:{width:{control:"select",options:["normal","wide","wider","widest","fluid"]},textWidth:{control:"select",options:["normal","wide","wider","widest","fluid"]}}},[{src:"https://via.placeholder.com/1024x768.jpg",altText:"alt text",caption:"A residential building destroyed by shelling in the settlement of Borodyanka in the Kyiv region, Ukraine March 3, 2022. Picture taken with a drone. REUTERS/Maksim Levin",maxHeight:400},{src:"https://via.placeholder.com/1640x1180.jpg",altText:"alt text",caption:"Surveillance footage shows a missile hitting a residential building in Kyiv, Ukraine, February 26, 2022, in this still image taken from a video obtained by REUTERS"},{src:"https://via.placeholder.com/1200x900.jpg",altText:"alt text",caption:"People walk past the remains of a missile at a bus terminal in Kyiv, Ukraine March 4, 2022. REUTERS/Valentyn Ogirenko"},{src:"https://via.placeholder.com/1024x768.jpg",altText:"alt text",caption:"People walk past the remains of a missile at a bus terminal. REUTERS/Valentyn Ogirenko"}],[{breakpoint:450,rows:[1,2,1]},{breakpoint:750,rows:[1,3]}],{Type:"photo-pack",ID:"my-photo-pack",Class:"mb-2",Width:"wide",textWidth:"normal",Gap:"15",Images:[{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog",MaxHeight:"600"},{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog"},{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog"},{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog"},{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog"}],Layouts:[{Breakpoint:"750",Rows:"2,3"},{Breakpoint:"450",Rows:"1, 2, 2"}]},[{src:"https://via.placeholder.com/1024x768.jpg",altText:"alt text",caption:"A residential building destroyed by shelling in the settlement of Borodyanka in the Kyiv region, Ukraine March 3, 2022. Picture taken with a drone. REUTERS/Maksim Levin",maxHeight:400},{src:"https://via.placeholder.com/1640x1180.jpg",altText:"",caption:"Surveillance footage shows a missile hitting a residential building in Kyiv, Ukraine, February 26, 2022, in this still image taken from a video obtained by REUTERS"}],[{breakpoint:450,rows:[2]}]]}class It extends at{constructor(t){super(),nt(this,t,$t,St,st,{})}}const W=mt(It,{meta:{title:"Components/PhotoPack"},stories:{"tpl:default":{storyId:"components-photopack--default",name:"default",template:!0,source:"<PhotoPack {...args} />",hasArgs:!0},Default:{storyId:"components-photopack--default",name:"Default",template:!1,source:"",hasArgs:!1},QUICKIT:{storyId:"components-photopack--quickit",name:"🚀 QUICKIT",template:!1,source:"",hasArgs:!1},MissingAltText:{storyId:"components-photopack--missing-alt-text",name:"Missing altText",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","quickitDocs","missingAltTextDocs","PhotoPack","getPhotoPackPropsFromDoc","withComponentDocs","withStoryDocs"]}),Ht=W.meta,Ft=["Default","QUICKIT","MissingAltText"],Kt=W.stories.Default,Nt=W.stories.QUICKIT,qt=W.stories.MissingAltText;export{Kt as Default,qt as MissingAltText,Nt as QUICKIT,Ft as __namedExportsOrder,Ht as default};
//# sourceMappingURL=PhotoPack.stories-ff4c38d6.js.map
