import{S as ae,i as ne,s as se,g as b,m as w,t as x,h as v,j as T,o as A,y as P,b as g,P as re,d,Q as ce,f as y,V as L,c as I,e as U,F as q,k as N,H as pe,C as E}from"./index-4f5e5369.js";import{g as M,a as ie}from"./spread-8a54911c.js";import{p as me,M as he,T as fe,S as F}from"./collect-stories-6e37d46b.js";import{e as S}from"./each-e59479a4.js";import{B as le}from"./Block-67c7bec3.js";import{P as ue}from"./PaddingReset-bdb61f35.js";import{m as G}from"./marked.esm-76161808.js";import{u as ge}from"./index-b62d9356.js";import{b as Q,w as de}from"./withParams-47e2ab71.js";import"./_commonjsHelpers-de833af9.js";const ye=`The \`PhotoPack\` component makes simple photo grids with custom layouts at whatever breakpoint you need.

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
`,_e=`Setup your Google Doc with the images, layouts and other props you want:

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
`,ke="If any of your images is missing `altText` a small warning will overlay the photo.\n";function V(s,e,t){const o=s.slice();return o[13]=e[t],o[15]=t,o}function B(s,e,t){const o=s.slice();return o[16]=e[t],o[18]=t,o}function O(s,e,t){const o=s.slice();return o[13]=e[t],o[15]=t,o}function z(s,e,t){const o=s.slice();return o[16]=e[t],o[18]=t,o}function J(s){let e;return{c(){e=A("div"),e.textContent="altText",g(e,"class","alt-warning absolute text-xxs py-1 px-2 svelte-1cbbkss")},m(t,o){d(t,e,o)},d(t){t&&y(e)}}}function Y(s){let e,t,o,a,i,n,r=!s[16].altText&&J();return{c(){e=A("figure"),t=A("img"),i=P(),r&&r.c(),g(t,"class","m-0 w-full h-full object-cover"),q(t.src,o=s[16].src)||g(t,"src",o),g(t,"alt",a=s[16].altText),I(t,"max-height",s[16].maxHeight?s[16].maxHeight+"px":""),g(e,"class","relative m-0 p-0 flex-1"),g(e,"aria-labelledby",n=s[1]+"-figure-"+s[15]+"-"+s[18])},m(l,p){d(l,e,p),U(e,t),U(e,i),r&&r.m(e,null)},p(l,p){p&64&&!q(t.src,o=l[16].src)&&g(t,"src",o),p&64&&a!==(a=l[16].altText)&&g(t,"alt",a),p&64&&I(t,"max-height",l[16].maxHeight?l[16].maxHeight+"px":""),l[16].altText?r&&(r.d(1),r=null):r||(r=J(),r.c(),r.m(e,null)),p&2&&n!==(n=l[1]+"-figure-"+l[15]+"-"+l[18])&&g(e,"aria-labelledby",n)},d(l){l&&y(e),r&&r.d()}}}function X(s){let e,t,o=`0 ${s[0]}px`,a=S(s[13]),i=[];for(let n=0;n<a.length;n+=1)i[n]=Y(z(s,a,n));return{c(){e=A("div");for(let n=0;n<i.length;n+=1)i[n].c();t=P(),g(e,"class","photopack-row flex justify-between"),I(e,"gap",o),I(e,"margin-bottom",s[15]<s[6].length-1?s[0]+"px":"")},m(n,r){d(n,e,r);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);U(e,t)},p(n,r){if(r&66){a=S(n[13]);let l;for(l=0;l<a.length;l+=1){const p=z(n,a,l);i[l]?i[l].p(p,r):(i[l]=Y(p),i[l].c(),i[l].m(e,t))}for(;l<i.length;l+=1)i[l].d(1);i.length=a.length}r&1&&o!==(o=`0 ${n[0]}px`)&&I(e,"gap",o),r&65&&I(e,"margin-bottom",n[15]<n[6].length-1?n[0]+"px":"")},d(n){n&&y(e),L(i,n)}}}function Z(s){let e,t,o=G(s[16].caption)+"",a,i;return{c(){e=A("div"),t=new pe(!1),a=P(),t.a=a,g(e,"id",i=s[1]+"-figure-"+s[15]+"-"+s[18]),g(e,"class","caption")},m(n,r){d(n,e,r),t.m(o,e),U(e,a)},p(n,r){r&64&&o!==(o=G(n[16].caption)+"")&&t.p(o),r&2&&i!==(i=n[1]+"-figure-"+n[15]+"-"+n[18])&&g(e,"id",i)},d(n){n&&y(e)}}}function ee(s){let e,t=s[16].caption&&Z(s);return{c(){t&&t.c(),e=N()},m(o,a){t&&t.m(o,a),d(o,e,a)},p(o,a){o[16].caption?t?t.p(o,a):(t=Z(o),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(o){o&&y(e),t&&t.d(o)}}}function te(s){let e,t=S(s[13]),o=[];for(let a=0;a<t.length;a+=1)o[a]=ee(B(s,t,a));return{c(){for(let a=0;a<o.length;a+=1)o[a].c();e=N()},m(a,i){for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(a,i);d(a,e,i)},p(a,i){if(i&66){t=S(a[13]);let n;for(n=0;n<t.length;n+=1){const r=B(a,t,n);o[n]?o[n].p(r,i):(o[n]=ee(r),o[n].c(),o[n].m(e.parentNode,e))}for(;n<o.length;n+=1)o[n].d(1);o.length=t.length}},d(a){a&&y(e),L(o,a)}}}function be(s){let e,t=S(s[6]),o=[];for(let a=0;a<t.length;a+=1)o[a]=te(V(s,t,a));return{c(){for(let a=0;a<o.length;a+=1)o[a].c();e=N()},m(a,i){for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(a,i);d(a,e,i)},p(a,i){if(i&66){t=S(a[6]);let n;for(n=0;n<t.length;n+=1){const r=V(a,t,n);o[n]?o[n].p(r,i):(o[n]=te(r),o[n].c(),o[n].m(e.parentNode,e))}for(;n<o.length;n+=1)o[n].d(1);o.length=t.length}},d(a){a&&y(e),L(o,a)}}}function we(s){let e,t,o;return t=new le({props:{width:s[4],class:"photopack-captions-container",$$slots:{default:[be]},$$scope:{ctx:s}}}),{c(){e=A("div"),b(t.$$.fragment),g(e,"class","notes contents svelte-1cbbkss")},m(a,i){d(a,e,i),w(t,e,null),o=!0},p(a,i){const n={};i&16&&(n.width=a[4]),i&2097218&&(n.$$scope={dirty:i,ctx:a}),t.$set(n)},i(a){o||(x(t.$$.fragment,a),o=!0)},o(a){v(t.$$.fragment,a),o=!1},d(a){a&&y(e),T(t)}}}function xe(s){let e,t,o,a,i,n=S(s[6]),r=[];for(let l=0;l<n.length;l+=1)r[l]=X(O(s,n,l));return a=new ue({props:{containerIsFluid:s[3]==="fluid",$$slots:{default:[we]},$$scope:{ctx:s}}}),{c(){e=A("div");for(let l=0;l<r.length;l+=1)r[l].c();o=P(),b(a.$$.fragment),g(e,"class","photopack-container w-full svelte-1cbbkss"),re(()=>s[10].call(e))},m(l,p){d(l,e,p);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(e,null);t=ce(e,s[10].bind(e)),d(l,o,p),w(a,l,p),i=!0},p(l,p){if(p&67){n=S(l[6]);let h;for(h=0;h<n.length;h+=1){const k=O(l,n,h);r[h]?r[h].p(k,p):(r[h]=X(k),r[h].c(),r[h].m(e,null))}for(;h<r.length;h+=1)r[h].d(1);r.length=n.length}const u={};p&8&&(u.containerIsFluid=l[3]==="fluid"),p&2097234&&(u.$$scope={dirty:p,ctx:l}),a.$set(u)},i(l){i||(x(a.$$.fragment,l),i=!0)},o(l){v(a.$$.fragment,l),i=!1},d(l){l&&(y(e),y(o)),L(r,l),t(),T(a,l)}}}function ve(s){let e,t;return e=new le({props:{width:s[3],id:s[1],class:"photopack fmy-6 "+s[2],$$slots:{default:[xe]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},m(o,a){w(e,o,a),t=!0},p(o,[a]){const i={};a&8&&(i.width=o[3]),a&2&&(i.id=o[1]),a&4&&(i.class="photopack fmy-6 "+o[2]),a&2097275&&(i.$$scope={dirty:a,ctx:o}),e.$set(i)},i(o){t||(x(e.$$.fragment,o),t=!0)},o(o){v(e.$$.fragment,o),t=!1},d(o){T(e,o)}}}function Te(s,e,t){let o,a,{images:i=[]}=e,{layouts:n=[]}=e,{gap:r=15}=e;const l=()=>Math.floor((1+Math.random())*65536).toString(16).substring(1);let{id:p="photopack-"+l()+l()}=e,{class:u=""}=e,{width:h="normal"}=e,{textWidth:k="normal"}=e,_;const C=(m,c)=>{if(!c)return m.map(R=>[R]);let f=0;const D=[];for(const R of c.rows){const j=[];for(const H of[...Array(R).keys()])j.push(m[H+f]);D.push(j),f+=R}return D};function $(){_=this.clientWidth,t(5,_)}return s.$$set=m=>{"images"in m&&t(7,i=m.images),"layouts"in m&&t(8,n=m.layouts),"gap"in m&&t(0,r=m.gap),"id"in m&&t(1,p=m.id),"class"in m&&t(2,u=m.class),"width"in m&&t(3,h=m.width),"textWidth"in m&&t(4,k=m.textWidth)},s.$$.update=()=>{s.$$.dirty&256&&n.sort((m,c)=>m.breakpoint<c.breakpoint?1:-1),s.$$.dirty&416&&t(9,o=n.find(m=>m.rows.reduce((c,f)=>c+f,0)===i.length&&(_||0)>=m.breakpoint)),s.$$.dirty&640&&t(6,a=C(i,o))},[r,p,u,h,k,_,a,i,n,o,$]}class K extends ae{constructor(e){super(),ne(this,e,Te,ve,se,{images:7,layouts:8,gap:0,id:1,class:2,width:3,textWidth:4})}}K.__docgen={version:3,name:"PhotoPack.svelte",data:[{keywords:[{name:"required",description:""}],visibility:"public",description:"Array of image objects",name:"images",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"required",description:""}],visibility:"public",description:"Array of layout objects",name:"layouts",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"Gap between images.",name:"gap",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:15},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Add an ID to target with SCSS. Should be unique from all other elements.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{visibility:"public",description:"Add a class to target with SCSS.",keywords:[{name:"type",description:"{string}"}],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""},{keywords:[],visibility:"public",description:"Width of the component within the text well.",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:`Set a different width for captions within the text well, for example,
"normal" to keep captions inline with the rest of the text well.
Can't ever be wider than \`width\`.`,name:"textWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const oe=(s,e="")=>({id:s.ID,cls:s.Class,width:s.Width,textWidth:s.textWidth,gap:s.Gap&&isNaN(s.Gap)?null:parseInt(s.Gap),images:s.Images.map(t=>({src:/^https?:\/\/|^\/\//i.test(t.Src)?t.Src:ge(e,t.Src),altText:t.AltText,caption:t.Caption,maxHeight:t.MaxHeight&&isNaN(t.MaxHeight)?null:parseFloat(t.MaxHeight)})),layouts:s.Layouts.map(t=>({breakpoint:isNaN(t.Breakpoint)?null:parseFloat(t.Breakpoint),rows:t.Rows.split(",").map(o=>parseInt(o.trim()))}))});function Pe(s){let e,t;const o=[s[6]];let a={};for(let i=0;i<o.length;i+=1)a=E(a,o[i]);return e=new K({props:a}),{c(){b(e.$$.fragment)},m(i,n){w(e,i,n),t=!0},p(i,n){const r=n&64?M(o,[ie(i[6])]):{};e.$set(r)},i(i){t||(x(e.$$.fragment,i),t=!0)},o(i){v(e.$$.fragment,i),t=!1},d(i){T(e,i)}}}function Se(s){let e,t,o,a,i,n,r,l,p,u;const h=[{title:"Components/PhotoPack"},{component:K},s[0]];let k={};for(let c=0;c<h.length;c+=1)k=E(k,h[c]);e=new he({props:k}),o=new fe({props:{$$slots:{default:[Pe,({args:c})=>({6:c}),({args:c})=>c?64:0]},$$scope:{ctx:s}}}),i=new F({props:{name:"Default",args:{width:"wide",textWidth:"normal",images:s[1],layouts:s[2]}}});const _=[{name:"🚀 QUICKIT"},Q(_e),{args:oe(s[3])}];let C={};for(let c=0;c<_.length;c+=1)C=E(C,_[c]);r=new F({props:C});const $=[{name:"Missing altText"},{args:{width:"wide",textWidth:"normal",images:s[4],layouts:s[5]}},Q(ke)];let m={};for(let c=0;c<$.length;c+=1)m=E(m,$[c]);return p=new F({props:m}),{c(){b(e.$$.fragment),t=P(),b(o.$$.fragment),a=P(),b(i.$$.fragment),n=P(),b(r.$$.fragment),l=P(),b(p.$$.fragment)},m(c,f){w(e,c,f),d(c,t,f),w(o,c,f),d(c,a,f),w(i,c,f),d(c,n,f),w(r,c,f),d(c,l,f),w(p,c,f),u=!0},p(c,[f]){const D=f&1?M(h,[h[0],h[1],ie(c[0])]):{};e.$set(D);const R={};f&192&&(R.$$scope={dirty:f,ctx:c}),o.$set(R);const j=f&8?M(_,[_[0],_[1],{args:oe(c[3])}]):{};r.$set(j);const H=f&48?M($,[$[0],{args:{width:"wide",textWidth:"normal",images:c[4],layouts:c[5]}},$[2]]):{};p.$set(H)},i(c){u||(x(e.$$.fragment,c),x(o.$$.fragment,c),x(i.$$.fragment,c),x(r.$$.fragment,c),x(p.$$.fragment,c),u=!0)},o(c){v(e.$$.fragment,c),v(o.$$.fragment,c),v(i.$$.fragment,c),v(r.$$.fragment,c),v(p.$$.fragment,c),u=!1},d(c){c&&(y(t),y(a),y(n),y(l)),T(e,c),T(o,c),T(i,c),T(r,c),T(p,c)}}}function $e(s){return[{...de(ye),argTypes:{width:{control:"select",options:["normal","wide","wider","widest","fluid"]},textWidth:{control:"select",options:["normal","wide","wider","widest","fluid"]}}},[{src:"https://via.placeholder.com/1024x768.jpg",altText:"alt text",caption:"A residential building destroyed by shelling in the settlement of Borodyanka in the Kyiv region, Ukraine March 3, 2022. Picture taken with a drone. REUTERS/Maksim Levin",maxHeight:400},{src:"https://via.placeholder.com/1640x1180.jpg",altText:"alt text",caption:"Surveillance footage shows a missile hitting a residential building in Kyiv, Ukraine, February 26, 2022, in this still image taken from a video obtained by REUTERS"},{src:"https://via.placeholder.com/1200x900.jpg",altText:"alt text",caption:"People walk past the remains of a missile at a bus terminal in Kyiv, Ukraine March 4, 2022. REUTERS/Valentyn Ogirenko"},{src:"https://via.placeholder.com/1024x768.jpg",altText:"alt text",caption:"People walk past the remains of a missile at a bus terminal. REUTERS/Valentyn Ogirenko"}],[{breakpoint:450,rows:[1,2,1]},{breakpoint:750,rows:[1,3]}],{Type:"photo-pack",ID:"my-photo-pack",Class:"mb-2",Width:"wide",textWidth:"normal",Gap:"15",Images:[{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog",MaxHeight:"600"},{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog"},{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog"},{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog"},{Src:"https://via.placeholder.com/1024x768.jpg",AltText:"alt text",Caption:"Lorem ipsum. Reuters/Photog"}],Layouts:[{Breakpoint:"750",Rows:"2,3"},{Breakpoint:"450",Rows:"1, 2, 2"}]},[{src:"https://via.placeholder.com/1024x768.jpg",altText:"alt text",caption:"A residential building destroyed by shelling in the settlement of Borodyanka in the Kyiv region, Ukraine March 3, 2022. Picture taken with a drone. REUTERS/Maksim Levin",maxHeight:400},{src:"https://via.placeholder.com/1640x1180.jpg",altText:"",caption:"Surveillance footage shows a missile hitting a residential building in Kyiv, Ukraine, February 26, 2022, in this still image taken from a video obtained by REUTERS"}],[{breakpoint:450,rows:[2]}]]}class Re extends ae{constructor(e){super(),ne(this,e,$e,Se,se,{})}}const W=me(Re,{meta:{title:"Components/PhotoPack"},stories:{"tpl:default":{name:"default",template:!0,source:"<PhotoPack {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},QUICKIT:{name:"🚀 QUICKIT",template:!1,source:"",hasArgs:!1},MissingAltText:{name:"Missing altText",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","quickitDocs","missingAltTextDocs","PhotoPack","getPhotoPackPropsFromDoc","withComponentDocs","withStoryDocs"]}),He=W.meta,Fe=["Default","QUICKIT","MissingAltText"],Ne=W.stories.Default,Ke=W.stories.QUICKIT,qe=W.stories.MissingAltText;export{Ne as Default,qe as MissingAltText,Ke as QUICKIT,Fe as __namedExportsOrder,He as default};
//# sourceMappingURL=PhotoPack.stories-747054b3.js.map
