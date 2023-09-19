import{S as Q,i as Y,s as Z,o as H,y as T,h,r as He,j as K,b as v,k as I,t as g,v as M,a as f,w as z,f as y,x as it,c as x,m as $,d as b,l as q,u as U,p as F,q as X,e as ce,P as Fe,Q as Xe,n as L,C,J}from"./index-9d4f07d0.js";import{g as Je,a as Qe}from"./spread-8a54911c.js";import{p as st,M as at,T as nt,S as G}from"./collect-stories-4874c973.js";import{B as R}from"./Block-70634aae.js";import{S as N}from"./SiteHeader-a48b848d.js";import{H as ee}from"./Headline-624508a4.js";import{G as ge}from"./GraphicBlock-3ec628d3.js";import{B as lt}from"./Byline-2e37fae3.js";import{P as ot}from"./PaddingReset-076c7103.js";import{F as rt}from"./FeaturePhoto-72b5d52d.js";import{V as Ye}from"./Video-bdbb4e5f.js";import{b as E,w as pt}from"./withParams-47e2ab71.js";import"./ReutersLogo-87467ce3.js";import"./each-e59479a4.js";import"./index-2224dbf5.js";import"./time-f9db70de.js";import"./_commonjsHelpers-de833af9.js";import"./marked.esm-76161808.js";import"./journalize-07958dc6.js";import"./fa-af834aa8.js";import"./index.es-a32769a3.js";const dt=`Reuters Graphics headline with a Hero media

\`\`\`svelte
<script>
  import { HeroHeadline } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths'; // 👈 If using in the Graphics Kit...

  export let embedded = false;
<\/script>

<HeroHeadline
  embedded="{embedded}"
  img="{\`\${assets}/images/myImage.jpg\`}"
  hed="{'Reuters Graphics Interactive'}"
  dek="{'The beginning of a beautiful page'}"
  section="{'World News'}"
  authors="{['Simon Scarr', 'Vijdan Mohammad Kawoosa']}"
  publishTime="{new Date('2022-03-04').toISOString()}"
/>
\`\`\`
`,ct=`Reuters Graphics headline with ai2svelte graphic as background.

\`\`\`svelte
<script>
  import {
    HeroHeadline,
    GraphicBlock,
  } from '@reuters-graphics/graphics-components';
  import QuakeMap from './ai2svelte/graphic.svelte';
  import { assets } from '$app/paths';

  export let embedded = false;
<\/script>

<HeroHeadline
  embedded="{embedded}"
  hed="{'Earthquake devastates Afghanistan'}"
  hedSize="{'big'}"
  hedWidth="wide"
  class="custom-hero mb-0"
  dek=""
  authors="{[
    'Anand Katakam',
    'Vijdan Mohammad Kawoosa',
    'Adolfo Arranz',
    'Wen Foo',
    'Simon Scarr',
    'Aman Bhargava',
    'Jitesh Chowdhury',
    'Manas Sharma',
    'Aditi Bhandari',
  ]}"
  publishTime="{new Date('2022-06-24').toISOString()}"
>
  <div slot="background">
    <GraphicBlock
      width="widest"
      role="figure"
      class="my-0"
      textWidth="normal"
      notes=""
      ariaDescription="Earthquake impact map"
    >
      <svelte:component this="{QuakeMap}" />
    </GraphicBlock>
  </div>
</HeroHeadline>

<style lang="scss">
  .hero-wrapper {
    .custom-hero.headline {
      // Adjust vertical positioning
      align-items: flex-end !important;

      @media (max-width: 1100px) {
        // Adjust line length of title
        max-width: var(--normal-column-width) !important;
      }
    }

    // Make hero smaller than 100vh
    --heroHeight: 85svh;

    @media (max-width: 960px) {
      --heroHeight: 65svh;
    }

    // For small height
    @media (max-height: 850px) {
      --heroHeight: 100svh;
    }

    // Custom hero sizing for landscape mobile
    @media (max-width: 960px) and (orientation: landscape) {
      --heroHeight: 200svh;
    }
  }

  // Override default fixed height for hero layout in embeds
  .hero-wrapper.embedded {
    --heroHeight: 1000px;
  }
</style>
\`\`\`
`,gt=`Reuters Graphics headline followed by a graphic or any media block.

\`\`\`svelte
<script>
  import {
    HeroHeadline,
    GraphicBlock,
  } from '@reuters-graphics/graphics-components';
  import Map from './ai2svelte/graphic.svelte';
  import { assets } from '$app/paths';

  export let embedded = false;
<\/script>

<HeroHeadline
  embedded="{embedded}"
  hed="{'The plunge from 29,000 feet'}"
  hedWidth="wide"
  class="mb-0"
  dek="{'How China Eastern Airlines flight MU5735 went from an uneventful flight at cruising altitude to disaster in just minutes.'}"
  section="{'Global news'}"
  authors="{['Simon Scarr', 'Vijdan Mohammad Kawoosa']}"
  publishTime="{new Date('2020-01-01').toISOString()}"
>
  <div slot="inline">
    <GraphicBlock
      width="widest"
      role="img"
      class="my-0"
      textWidth="normal"
      notes="Source: Satellite image from Google, Maxar Technologies, CNES/Airbus, Landsat/Copernicus"
      ariaDescription="Aerial map showing trajectory of crash"
    >
      <svelte:component this="{Map}" assetsPath="{assets || '/'}" />
    </GraphicBlock>
  </div>
</HeroHeadline>
\`\`\`
`,Pe=`Reuters Graphics headline followed by a graphic or any media block.

\`\`\`svelte
<script>
  import {
    HeroHeadline,
    FeaturePhoto,
  } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths';

  export let embedded = false;
<\/script>

<HeroHeadline
  embedded="{embedded}"
  hed="{'Buried under the bricks'}"
  hedWidth="wide"
  class="mb-0"
  dek="{'How mud-brick housing made the Morocco earthquake so deadly'}"
  section="{'Global news'}"
  authors="{['Mariano Zafra']}"
  publishTime="{new Date('2020-01-01').toISOString()}"
>
  <div slot="inline">
    <FeaturePhoto
      width="widest"
      class="my-0"
      src="{\`\${assets}/images/myImage.jpg\`}"
      caption="Photo by REUTERS/Nacho Doce."
      altText="A photo of the town of Adassil, Morocco, showing severe damage to many houses, which have collapsed after the earthquake. The houses are all made of mud brick."
    />
  </div>
</HeroHeadline>
\`\`\`
`,ut=`Make the hero full bleed and under the header.

\`\`\`scss
// global.scss

.nav-container {
  background-color: transparent !important;
}
.nav-container .inner {
  background-color: transparent !important;
  border: none;
}

.hero-wrapper {
  margin-top: -64px;
}
\`\`\`
`,ft=`Add a cover video and position the title with ease.

\`\`\`svelte
<script>
  import { HeroHeadline, Video } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths';

  export let embedded = false;
<\/script>

<HeroHeadline
  embedded="{embedded}"
  class="custom-hero"
  hed="The conflict in Ethiopia"
  hedSize="bigger"
  hedWidth="wide"
  authors="{['Aditi Bhandari ', 'David Lewis']}"
  publishTime="{new Date('2020-12-18').toISOString()}"
>
  <div slot="background">
    <Video
      width="widest"
      class="my-0"
      showControls="{false}"
      preloadVideo="auto"
      playVideoWhenInView="{false}"
      src="{assets}/videos/intro.mp4"
      poster="{assets}/images/video-poster-intro.jpg"
      notes="Drone footage from the Village 8 refugee camp in Sudan."
      ariaDescription="Aerial footage of people houses in refugee camp"
    />
  </div>
</HeroHeadline>

<style lang="scss">
  .hero-wrapper {
    --heroHeight: calc(100svh - 60px);
    .custom-hero.headline {
      header {
        // Adjust vertical position as offset from default center
        top: calc(50svh - 250px);
      }

      h1 {
        color: #ffd430;
        text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
      }
    }
  }
</style>
\`\`\`
`,mt=`Add a custom styled headline.

\`\`\`svelte
<script>
  import { HeroHeadline } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths'; // 👈 If using in the Graphics Kit...

  export let embedded = false;
<\/script>

<HeroHeadline
  embedded="{embedded}"
  class="custom-hed"
  authors="{[
    'Prasanta Kumar Dutta',
    'Dea Bankova',
    'Aditi Bhandari',
    'Anurag Rao',
  ]}"
  publishTime="{new Date('2023-05-11').toISOString()}"
  img="{\`\${assets}/images/myImage.jpg\`}"
>
  <h1 slot="hed">
    <div class="body-note">A visual guide to</div>
    <div class="title text-6xl font-light tracking-widest">EUROVISION</div>
  </h1>
</HeroHeadline>

<style lang="scss">
  .custom-hed {
    h1 {
      .body-note {
        color: #ffffff;
      }
      .title {
        color: #ffffff;
        text-shadow: 1px 1px 8px #ff7c88;
        filter: drop-shadow(0px 0px 12px #ff7c88);
      }
    }
  }
</style>
\`\`\`
`,Ze=""+new URL("polar-03b9c9c8.jpg",import.meta.url).href,ht=""+new URL("eurovis-8a6cd683.jpeg",import.meta.url).href;const vt=n=>({}),We=n=>({}),yt=n=>({}),Ie=n=>({}),xt=n=>({}),De=n=>({}),$t=n=>({}),Ve=n=>({}),bt=n=>({}),Ce=n=>({});function Re(n){let e,i;return e=new R({props:{width:"fluid",class:"hero-headline background-hero fmt-0",$$slots:{default:[Ht]},$$scope:{ctx:n}}}),{c(){x(e.$$.fragment)},m(t,s){$(e,t,s),i=!0},p(t,s){const a={};s&182270&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),i=!1},d(t){b(e,t)}}}function wt(n){let e,i;return e=new ee({props:{class:n[5]+" !text-"+n[7],width:n[8],section:n[10],hedSize:n[6],hed:n[4],dek:n[9]}}),{c(){x(e.$$.fragment)},m(t,s){$(e,t,s),i=!0},p(t,s){const a={};s&160&&(a.class=t[5]+" !text-"+t[7]),s&256&&(a.width=t[8]),s&1024&&(a.section=t[10]),s&64&&(a.hedSize=t[6]),s&16&&(a.hed=t[4]),s&512&&(a.dek=t[9]),e.$set(a)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),i=!1},d(t){b(e,t)}}}function _t(n){let e,i;return e=new ee({props:{class:n[5]+" !text-"+n[7],width:n[8],section:n[10],hedSize:n[6],hed:n[4],dek:n[9],$$slots:{hed:[kt]},$$scope:{ctx:n}}}),{c(){x(e.$$.fragment)},m(t,s){$(e,t,s),i=!0},p(t,s){const a={};s&160&&(a.class=t[5]+" !text-"+t[7]),s&256&&(a.width=t[8]),s&1024&&(a.section=t[10]),s&64&&(a.hedSize=t[6]),s&16&&(a.hed=t[4]),s&512&&(a.dek=t[9]),s&131072&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),i=!1},d(t){b(e,t)}}}function kt(n){let e,i;const t=n[16].hed,s=q(t,n,n[17],Ce);return{c(){e=H("div"),s&&s.c(),h(e,"slot","hed")},m(a,l){v(a,e,l),s&&s.m(e,null),i=!0},p(a,l){s&&s.p&&(!i||l&131072)&&U(s,t,a,a[17],i?X(t,a[17],l,bt):F(a[17]),Ce)},i(a){i||(g(s,a),i=!0)},o(a){f(s,a),i=!1},d(a){a&&y(e),s&&s.d(a)}}}function At(n){let e,i;return e=new ge({props:{width:n[14],role:"img",class:"my-0",textWidth:"normal",notes:n[3],ariaDescription:n[2],$$slots:{default:[Tt]},$$scope:{ctx:n}}}),{c(){x(e.$$.fragment)},m(t,s){$(e,t,s),i=!0},p(t,s){const a={};s&16384&&(a.width=t[14]),s&8&&(a.notes=t[3]),s&4&&(a.ariaDescription=t[2]),s&131074&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),i=!1},d(t){b(e,t)}}}function St(n){let e;const i=n[16].background,t=q(i,n,n[17],Ve);return{c(){t&&t.c()},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&131072)&&U(t,i,s,s[17],e?X(i,s[17],a,$t):F(s[17]),Ve)},i(s){e||(g(t,s),e=!0)},o(s){f(t,s),e=!1},d(s){t&&t.d(s)}}}function Tt(n){let e;return{c(){e=H("div"),h(e,"class","background-image svelte-98anul"),K(e,"background-image","url("+n[1]+")")},m(i,t){v(i,e,t)},p(i,t){t&2&&K(e,"background-image","url("+i[1]+")")},d(i){i&&y(e)}}}function Ht(n){let e,i,t,s,a,l,o;const r=[_t,wt],d=[];function u(c,A){return c[15].hed?0:1}e=u(n),i=d[e]=r[e](n);const w=[St,At],m=[];function S(c,A){return c[15].background?0:1}return a=S(n),l=m[a]=w[a](n),{c(){i.c(),t=T(),s=H("div"),l.c(),h(s,"class","graphic-container")},m(c,A){d[e].m(c,A),v(c,t,A),v(c,s,A),m[a].m(s,null),o=!0},p(c,A){let P=e;e=u(c),e===P?d[e].p(c,A):(M(),f(d[P],1,1,()=>{d[P]=null}),z(),i=d[e],i?i.p(c,A):(i=d[e]=r[e](c),i.c()),g(i,1),i.m(t.parentNode,t));let W=a;a=S(c),a===W?m[a].p(c,A):(M(),f(m[W],1,1,()=>{m[W]=null}),z(),l=m[a],l?l.p(c,A):(l=m[a]=w[a](c),l.c()),g(l,1),l.m(s,null))},i(c){o||(g(i),g(l),o=!0)},o(c){f(i),f(l),o=!1},d(c){c&&(y(t),y(s)),d[e].d(c),m[a].d()}}}function Be(n){let e,i;return e=new R({props:{width:"fluid",class:"hero-headline inline-hero",$$slots:{default:[Vt]},$$scope:{ctx:n}}}),{c(){x(e.$$.fragment)},m(t,s){$(e,t,s),i=!0},p(t,s){const a={};s&165872&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),i=!1},d(t){b(e,t)}}}function Pt(n){let e,i;return e=new ee({props:{class:n[5]+" !text-"+n[7],width:n[8],section:n[10],hedSize:n[6],hed:n[4],dek:n[9]}}),{c(){x(e.$$.fragment)},m(t,s){$(e,t,s),i=!0},p(t,s){const a={};s&160&&(a.class=t[5]+" !text-"+t[7]),s&256&&(a.width=t[8]),s&1024&&(a.section=t[10]),s&64&&(a.hedSize=t[6]),s&16&&(a.hed=t[4]),s&512&&(a.dek=t[9]),e.$set(a)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),i=!1},d(t){b(e,t)}}}function Wt(n){let e,i;return e=new ee({props:{class:n[5]+" !text-"+n[7],width:n[8],section:n[10],hedSize:n[6],hed:n[4],dek:n[9],$$slots:{hed:[It]},$$scope:{ctx:n}}}),{c(){x(e.$$.fragment)},m(t,s){$(e,t,s),i=!0},p(t,s){const a={};s&160&&(a.class=t[5]+" !text-"+t[7]),s&256&&(a.width=t[8]),s&1024&&(a.section=t[10]),s&64&&(a.hedSize=t[6]),s&16&&(a.hed=t[4]),s&512&&(a.dek=t[9]),s&131072&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),i=!1},d(t){b(e,t)}}}function It(n){let e,i;const t=n[16].hed,s=q(t,n,n[17],De);return{c(){e=H("div"),s&&s.c(),h(e,"slot","hed")},m(a,l){v(a,e,l),s&&s.m(e,null),i=!0},p(a,l){s&&s.p&&(!i||l&131072)&&U(s,t,a,a[17],i?X(t,a[17],l,xt):F(a[17]),De)},i(a){i||(g(s,a),i=!0)},o(a){f(s,a),i=!1},d(a){a&&y(e),s&&s.d(a)}}}function Dt(n){let e,i,t,s;const a=[Wt,Pt],l=[];function o(r,d){return r[15].hed?0:1}return e=o(n),i=l[e]=a[e](n),{c(){i.c(),t=ce()},m(r,d){l[e].m(r,d),v(r,t,d),s=!0},p(r,d){let u=e;e=o(r),e===u?l[e].p(r,d):(M(),f(l[u],1,1,()=>{l[u]=null}),z(),i=l[e],i?i.p(r,d):(i=l[e]=a[e](r),i.c()),g(i,1),i.m(t.parentNode,t))},i(r){s||(g(i),s=!0)},o(r){f(i),s=!1},d(r){r&&y(t),l[e].d(r)}}}function Vt(n){let e,i,t,s;e=new ot({props:{containerIsFluid:!0,$$slots:{default:[Dt]},$$scope:{ctx:n}}});const a=n[16].inline,l=q(a,n,n[17],Ie);return{c(){x(e.$$.fragment),i=T(),t=H("div"),l&&l.c(),h(t,"class","graphic-container")},m(o,r){$(e,o,r),v(o,i,r),v(o,t,r),l&&l.m(t,null),s=!0},p(o,r){const d={};r&165872&&(d.$$scope={dirty:r,ctx:o}),e.$set(d),l&&l.p&&(!s||r&131072)&&U(l,a,o,o[17],s?X(a,o[17],r,yt):F(o[17]),Ie)},i(o){s||(g(e.$$.fragment,o),g(l,o),s=!0)},o(o){f(e.$$.fragment,o),f(l,o),s=!1},d(o){o&&(y(i),y(t)),b(e,o),l&&l.d(o)}}}function Ct(n){let e,i;return e=new lt({props:{authors:n[11],publishTime:n[12],updateTime:n[13],align:"left"}}),{c(){x(e.$$.fragment)},m(t,s){$(e,t,s),i=!0},p(t,s){const a={};s&2048&&(a.authors=t[11]),s&4096&&(a.publishTime=t[12]),s&8192&&(a.updateTime=t[13]),e.$set(a)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),i=!1},d(t){b(e,t)}}}function Rt(n){let e;const i=n[16].byline,t=q(i,n,n[17],We);return{c(){t&&t.c()},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&131072)&&U(t,i,s,s[17],e?X(i,s[17],a,vt):F(s[17]),We)},i(s){e||(g(t,s),e=!0)},o(s){f(t,s),e=!1},d(s){t&&t.d(s)}}}function Bt(n){let e,i,t,s,a,l,o,r,d=(n[15].background||n[1])&&Re(n),u=n[15].inline&&Be(n);const w=[Rt,Ct],m=[];function S(c,A){return c[15].byline?0:c[11].length>0||c[12]?1:-1}return~(l=S(n))&&(o=m[l]=w[l](n)),{c(){e=H("div"),i=H("div"),d&&d.c(),t=T(),u&&u.c(),s=T(),a=H("div"),o&&o.c(),h(i,"class","hero-wrapper fmb-6 svelte-98anul"),He(i,"embedded",n[0]),h(a,"class","hero-byline fmb-6 svelte-98anul"),K(e,"--heroHeight",n[0]?"850px":"100svh"),K(e,"display","contents")},m(c,A){v(c,e,A),I(e,i),d&&d.m(i,null),I(i,t),u&&u.m(i,null),I(e,s),I(e,a),~l&&m[l].m(a,null),r=!0},p(c,[A]){c[15].background||c[1]?d?(d.p(c,A),A&32770&&g(d,1)):(d=Re(c),d.c(),g(d,1),d.m(i,t)):d&&(M(),f(d,1,1,()=>{d=null}),z()),c[15].inline?u?(u.p(c,A),A&32768&&g(u,1)):(u=Be(c),u.c(),g(u,1),u.m(i,null)):u&&(M(),f(u,1,1,()=>{u=null}),z()),(!r||A&1)&&He(i,"embedded",c[0]);let P=l;l=S(c),l===P?~l&&m[l].p(c,A):(o&&(M(),f(m[P],1,1,()=>{m[P]=null}),z()),~l?(o=m[l],o?o.p(c,A):(o=m[l]=w[l](c),o.c()),g(o,1),o.m(a,null)):o=null),(!r||A&1)&&K(e,"--heroHeight",c[0]?"850px":"100svh")},i(c){r||(g(d),g(u),g(o),r=!0)},o(c){f(d),f(u),f(o),r=!1},d(c){c&&y(e),d&&d.d(),u&&u.d(),~l&&m[l].d()}}}function Gt(n,e,i){let{$$slots:t={},$$scope:s}=e;const a=it(t);let{embedded:l=!1}=e,{img:o=null}=e,{ariaDescription:r=null}=e,{notes:d=null}=e,{hed:u="Reuters Graphics Interactive"}=e,{class:w=""}=e,{hedSize:m="normal"}=e,{hedAlign:S="center"}=e,{hedWidth:c="normal"}=e,{dek:A=null}=e,{section:P=null}=e,{authors:W=[]}=e,{publishTime:O=""}=e,{updateTime:D=""}=e,{width:j="widest"}=e;return n.$$set=_=>{"embedded"in _&&i(0,l=_.embedded),"img"in _&&i(1,o=_.img),"ariaDescription"in _&&i(2,r=_.ariaDescription),"notes"in _&&i(3,d=_.notes),"hed"in _&&i(4,u=_.hed),"class"in _&&i(5,w=_.class),"hedSize"in _&&i(6,m=_.hedSize),"hedAlign"in _&&i(7,S=_.hedAlign),"hedWidth"in _&&i(8,c=_.hedWidth),"dek"in _&&i(9,A=_.dek),"section"in _&&i(10,P=_.section),"authors"in _&&i(11,W=_.authors),"publishTime"in _&&i(12,O=_.publishTime),"updateTime"in _&&i(13,D=_.updateTime),"width"in _&&i(14,j=_.width),"$$scope"in _&&i(17,s=_.$$scope)},n.$$.update=()=>{n.$$.dirty&64},[l,o,r,d,u,w,m,S,c,A,P,W,O,D,j,a,t,s]}class V extends Q{constructor(e){super(),Y(this,e,Gt,Bt,Z,{embedded:0,img:1,ariaDescription:2,notes:3,hed:4,class:5,hedSize:6,hedAlign:7,hedWidth:8,dek:9,section:10,authors:11,publishTime:12,updateTime:13,width:14})}}V.__docgen={version:3,name:"Hero.svelte",data:[{keywords:[],visibility:"public",description:"Set to true for embeddables.",name:"embedded",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Path to background image",name:"img",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"ARIA description, passed in as a markdown string.",name:"ariaDescription",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Notes to the graphic, passed in as a markdown string.",name:"notes",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Headline, parsed as an _inline_ markdown string in an `h1` element.",name:"hed",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Reuters Graphics Interactive"},{visibility:"public",description:"Add extra classes to the block tag to target it with custom CSS.",keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Headline size",name:"hedSize",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Headline horizontal alignment",name:"hedAlign",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"center"},{keywords:[],visibility:"public",description:"Width of the headline.",name:"hedWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Dek, parsed as a markdown string.",name:"dek",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Section title",name:"section",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[],visibility:"public",description:"Array of author names, which will be slugified to create links to Reuters author pages",name:"authors",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Publish time as a datetime string.",name:"publishTime",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Update time as a datetime string.",name:"updateTime",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Width of the Hero graphic.",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"widest"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"Headline named slot",name:"hed"},{keywords:[],visibility:"public",description:"Hero graphic named slot",name:"background"},{keywords:[],visibility:"public",description:"Hero named slot",name:"inline"},{keywords:[],visibility:"public",description:"Custom byline/dateline",name:"byline"}],refs:[]};const Mt=""+new URL("CRASH_1-xs-e3451831.jpeg",import.meta.url).href,zt=""+new URL("CRASH_1-sm-c0ca5527.jpeg",import.meta.url).href,Lt=""+new URL("CRASH_1-md-0a9d34cc.jpeg",import.meta.url).href,jt=""+new URL("CRASH_1-lg-8fffc63f.jpeg",import.meta.url).href,Et=""+new URL("CRASH_1-xl-670d0ed4.jpeg",import.meta.url).href,Nt=""+new URL("CRASH_1-xl_copy-1fd396d3.jpeg",import.meta.url).href;function Ge(n){let e;return{c(){e=H("div"),e.innerHTML=`<div style="padding: 0 0 93.0303% 0;"></div> <div id="g-CRASH_1-xs-img" class="g-aiImg svelte-12cxoa9" alt="" style="${`background-image: url(${Mt});`}"></div> <div id="g-ai0-1" class="g-xs-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:18.0723%;margin-top:-14.5px;left:7.0539%;width:76px;"><p class="g-pstyle0 svelte-12cxoa9">Cruising at</p> <p class="g-pstyle0 svelte-12cxoa9">29,100 feet</p></div> <div id="g-ai0-2" class="g-xs-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:20.271%;margin-top:-21.2px;left:26.8941%;width:103px;"><p class="g-pstyle1 svelte-12cxoa9">2.21 pm</p> <p class="g-pstyle0 svelte-12cxoa9">Steep drop from</p> <p class="g-pstyle0 svelte-12cxoa9">27,025 feet</p></div> <div id="g-ai0-3" class="g-xs-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:42.7133%;margin-top:-15.1px;right:3.3749%;width:96px;"><p class="g-pstyle2 svelte-12cxoa9">Typical path to</p> <p class="g-pstyle2 svelte-12cxoa9">Guangzhou</p></div> <div id="g-ai0-4" class="g-xs-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:70.482%;margin-top:-15.4px;right:2.4487%;width:79px;"><p class="g-pstyle2 svelte-12cxoa9">Last known</p> <p class="g-pstyle2 svelte-12cxoa9">location</p></div> <div id="g-ai0-5" class="g-xs-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:87.4202%;margin-top:-15.4px;right:16.3453%;width:50px;"><p class="g-pstyle2 svelte-12cxoa9">Crash</p> <p class="g-pstyle2 svelte-12cxoa9">site</p></div>`,h(e,"id","g-CRASH_1-xs"),h(e,"class","g-artboard svelte-12cxoa9"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function Me(n){let e;return{c(){e=H("div"),e.innerHTML=`<div style="padding: 0 0 77.8431% 0;"></div> <div id="g-CRASH_1-sm-img" class="g-aiImg svelte-12cxoa9" alt="" style="${`background-image: url(${zt});`}"></div> <div id="g-ai1-1" class="g-sm-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:17.3436%;margin-top:-16.9px;left:16.4992%;width:86px;"><p class="g-pstyle0 svelte-12cxoa9">Cruising at</p> <p class="g-pstyle0 svelte-12cxoa9">29,100 feet</p></div> <div id="g-ai1-2" class="g-sm-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:20.87%;margin-top:-24.9px;left:32.8523%;width:117px;"><p class="g-pstyle1 svelte-12cxoa9">2.21 pm</p> <p class="g-pstyle0 svelte-12cxoa9">Steep drop from</p> <p class="g-pstyle0 svelte-12cxoa9">27,025 feet</p></div> <div id="g-ai1-3" class="g-sm-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:43.9824%;margin-top:-17.6px;right:4.7685%;width:108px;"><p class="g-pstyle2 svelte-12cxoa9">Typical path to</p> <p class="g-pstyle2 svelte-12cxoa9">Guangzhou</p></div> <div id="g-ai1-4" class="g-sm-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:71.9421%;margin-top:-17.6px;right:4.6892%;width:89px;"><p class="g-pstyle2 svelte-12cxoa9">Last known</p> <p class="g-pstyle2 svelte-12cxoa9">location</p></div> <div id="g-ai1-5" class="g-sm-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:87.0554%;margin-top:-17.6px;right:19.7924%;width:55px;"><p class="g-pstyle2 svelte-12cxoa9">Crash</p> <p class="g-pstyle2 svelte-12cxoa9">site</p></div>`,h(e,"id","g-CRASH_1-sm"),h(e,"class","g-artboard svelte-12cxoa9"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function ze(n){let e;return{c(){e=H("div"),e.innerHTML=`<div style="padding: 0 0 68.7879% 0;"></div> <div id="g-CRASH_1-md-img" class="g-aiImg svelte-12cxoa9" alt="" style="${`background-image: url(${Lt});`}"></div> <div id="g-ai2-1" class="g-md-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:17.1581%;margin-top:-13.9px;left:3.6766%;width:76px;"><p class="g-pstyle0 svelte-12cxoa9">Cruising at</p> <p class="g-pstyle0 svelte-12cxoa9">29,100 feet</p></div> <div id="g-ai2-2" class="g-md-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:20.0216%;margin-top:-13.9px;left:19.6076%;width:92px;"><p class="g-pstyle1 svelte-12cxoa9">2.20 pm</p> <p class="g-pstyle0 svelte-12cxoa9">Slight descent</p></div> <div id="g-ai2-3" class="g-md-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:24.1477%;margin-top:-20.6px;left:34.5493%;width:102px;"><p class="g-pstyle1 svelte-12cxoa9">2.21 pm</p> <p class="g-pstyle0 svelte-12cxoa9">Steep drop from</p> <p class="g-pstyle0 svelte-12cxoa9">27,025 feet</p></div> <div id="g-ai2-4" class="g-md-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:46.8149%;margin-top:-14.5px;right:2.8165%;width:95px;"><p class="g-pstyle2 svelte-12cxoa9">Typical path to</p> <p class="g-pstyle2 svelte-12cxoa9">Guangzhou</p></div> <div id="g-ai2-5" class="g-md-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:80.0748%;margin-top:-14.5px;left:84.28%;width:79px;"><p class="g-pstyle0 svelte-12cxoa9">Last known</p> <p class="g-pstyle0 svelte-12cxoa9">location</p></div> <div id="g-ai2-6" class="g-md-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:87.5638%;margin-top:-14.5px;right:22.3457%;width:86px;"><p class="g-pstyle2 svelte-12cxoa9">Approximate</p> <p class="g-pstyle2 svelte-12cxoa9">crash site</p></div>`,h(e,"id","g-CRASH_1-md"),h(e,"class","g-artboard svelte-12cxoa9"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function Le(n){let e;return{c(){e=H("div"),e.innerHTML=`<div style="padding: 0 0 61.3978% 0;"></div> <div id="g-CRASH_1-lg-img" class="g-aiImg svelte-12cxoa9" alt="" style="${`background-image: url(${jt});`}"></div> <div id="g-ai3-1" class="g-lg-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:16.9729%;margin-top:-17.9px;left:4.0448%;width:90px;"><p class="g-pstyle0 svelte-12cxoa9">Cruising at</p> <p class="g-pstyle0 svelte-12cxoa9">29,100 feet</p></div> <div id="g-ai3-2" class="g-lg-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:20.3004%;margin-top:-17.9px;left:27.525%;width:111px;"><p class="g-pstyle1 svelte-12cxoa9">2.20 pm</p> <p class="g-pstyle2 svelte-12cxoa9">Slight descent</p></div> <div id="g-ai3-3" class="g-lg-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:24.5911%;margin-top:-26.4px;left:40.9124%;width:124px;"><p class="g-pstyle1 svelte-12cxoa9">2.21 pm</p> <p class="g-pstyle2 svelte-12cxoa9">Steep drop from</p> <p class="g-pstyle2 svelte-12cxoa9">27,025 feet</p></div> <div id="g-ai3-4" class="g-lg-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:47.2373%;margin-top:-18.7px;right:2.986%;width:114px;"><p class="g-pstyle3 svelte-12cxoa9">Typical path to</p> <p class="g-pstyle3 svelte-12cxoa9">Guangzhou</p></div> <div id="g-ai3-5" class="g-lg-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:80.6874%;margin-top:-18.7px;left:85.4704%;width:94px;"><p class="g-pstyle2 svelte-12cxoa9">Last known</p> <p class="g-pstyle2 svelte-12cxoa9">location</p></div> <div id="g-ai3-6" class="g-lg-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:88.0429%;margin-top:-18.7px;right:20.5522%;width:102px;"><p class="g-pstyle3 svelte-12cxoa9">Approximate</p> <p class="g-pstyle3 svelte-12cxoa9">crash site</p></div>`,h(e,"id","g-CRASH_1-lg"),h(e,"class","g-artboard svelte-12cxoa9"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function je(n){let e;return{c(){e=H("div"),e.innerHTML=`<div style="padding: 0 0 47% 0;"></div> <div id="g-CRASH_1-xl-img" class="g-aiImg svelte-12cxoa9" alt="" style="${`background-image: url(${Et});`}"></div> <div id="g-ai4-1" class="g-xl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:16.4851%;margin-top:-19px;left:21.0319%;width:95px;"><p class="g-pstyle0 svelte-12cxoa9">Cruising at</p> <p class="g-pstyle0 svelte-12cxoa9">29,100 feet</p></div> <div id="g-ai4-2" class="g-xl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:20.1977%;margin-top:-17.9px;left:38.5203%;width:111px;"><p class="g-pstyle1 svelte-12cxoa9">2.20 pm</p> <p class="g-pstyle2 svelte-12cxoa9">Slight descent</p></div> <div id="g-ai4-3" class="g-xl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:24.5417%;margin-top:-26.4px;left:48.8956%;width:124px;"><p class="g-pstyle1 svelte-12cxoa9">2.21 pm</p> <p class="g-pstyle2 svelte-12cxoa9">Steep drop from</p> <p class="g-pstyle2 svelte-12cxoa9">27,025 feet</p></div> <div id="g-ai4-4" class="g-xl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:53.1427%;margin-top:-18.7px;right:2.0477%;width:114px;"><p class="g-pstyle3 svelte-12cxoa9">Typical path to</p> <p class="g-pstyle3 svelte-12cxoa9">Guangzhou</p></div> <div id="g-ai4-5" class="g-xl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:81.3342%;margin-top:-18.7px;left:83.4281%;width:94px;"><p class="g-pstyle2 svelte-12cxoa9">Last known</p> <p class="g-pstyle2 svelte-12cxoa9">location</p></div> <div id="g-ai4-6" class="g-xl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:88.781%;margin-top:-18.7px;right:21.2395%;width:102px;"><p class="g-pstyle3 svelte-12cxoa9">Approximate</p> <p class="g-pstyle3 svelte-12cxoa9">crash site</p></div>`,h(e,"id","g-CRASH_1-xl"),h(e,"class","g-artboard svelte-12cxoa9"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function Ee(n){let e;return{c(){e=H("div"),e.innerHTML=`<div style="padding: 0 0 46.8889% 0;"></div> <div id="g-CRASH_1-xl_copy-img" class="g-aiImg svelte-12cxoa9" alt="" style="${`background-image: url(${Nt});`}"></div> <div id="g-ai5-1" class="g-xxl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:13.5823%;margin-top:-19px;left:17.5449%;width:95px;"><p class="g-pstyle0 svelte-12cxoa9">Cruising at</p> <p class="g-pstyle0 svelte-12cxoa9">29,100 feet</p></div> <div id="g-ai5-2" class="g-xxl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:16.11%;margin-top:-19px;left:34.2801%;width:117px;"><p class="g-pstyle1 svelte-12cxoa9">2.20 pm</p> <p class="g-pstyle0 svelte-12cxoa9">Slight descent</p></div> <div id="g-ai5-3" class="g-xxl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:20.5333%;margin-top:-28px;left:45.3329%;width:130px;"><p class="g-pstyle1 svelte-12cxoa9">2.21 pm</p> <p class="g-pstyle0 svelte-12cxoa9">Steep drop from</p> <p class="g-pstyle0 svelte-12cxoa9">27,025 feet</p></div> <div id="g-ai5-4" class="g-xxl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:51.1596%;margin-top:-19.8px;right:2.3384%;width:121px;"><p class="g-pstyle2 svelte-12cxoa9">Typical path to</p> <p class="g-pstyle2 svelte-12cxoa9">Guangzhou</p></div> <div id="g-ai5-5" class="g-xxl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:81.3333%;margin-top:-19.8px;left:82.1208%;width:98px;"><p class="g-pstyle0 svelte-12cxoa9">Last known</p> <p class="g-pstyle0 svelte-12cxoa9">location</p></div> <div id="g-ai5-6" class="g-xxl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:89.3902%;margin-top:-19.8px;right:22.7998%;width:108px;"><p class="g-pstyle2 svelte-12cxoa9">Approximate</p> <p class="g-pstyle2 svelte-12cxoa9">crash site</p></div>`,h(e,"id","g-CRASH_1-xl_copy"),h(e,"class","g-artboard svelte-12cxoa9"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function Ot(n){let e,i,t,s,a,l,o,r=n[0]&&n[0]>=0&&n[0]<510&&Ge(),d=n[0]&&n[0]>=510&&n[0]<660&&Me(),u=n[0]&&n[0]>=660&&n[0]<930&&ze(),w=n[0]&&n[0]>=930&&n[0]<1200&&Le(),m=n[0]&&n[0]>=1200&&n[0]<1350&&je(),S=n[0]&&n[0]>=1350&&Ee();return{c(){e=H("div"),r&&r.c(),i=T(),d&&d.c(),t=T(),u&&u.c(),s=T(),w&&w.c(),a=T(),m&&m.c(),l=T(),S&&S.c(),h(e,"id","g-CRASH_1-box"),h(e,"class","svelte-12cxoa9"),Fe(()=>n[2].call(e))},m(c,A){v(c,e,A),r&&r.m(e,null),I(e,i),d&&d.m(e,null),I(e,t),u&&u.m(e,null),I(e,s),w&&w.m(e,null),I(e,a),m&&m.m(e,null),I(e,l),S&&S.m(e,null),o=Xe(e,n[2].bind(e))},p(c,[A]){c[0]&&c[0]>=0&&c[0]<510?r||(r=Ge(),r.c(),r.m(e,i)):r&&(r.d(1),r=null),c[0]&&c[0]>=510&&c[0]<660?d||(d=Me(),d.c(),d.m(e,t)):d&&(d.d(1),d=null),c[0]&&c[0]>=660&&c[0]<930?u||(u=ze(),u.c(),u.m(e,s)):u&&(u.d(1),u=null),c[0]&&c[0]>=930&&c[0]<1200?w||(w=Le(),w.c(),w.m(e,a)):w&&(w.d(1),w=null),c[0]&&c[0]>=1200&&c[0]<1350?m||(m=je(),m.c(),m.m(e,l)):m&&(m.d(1),m=null),c[0]&&c[0]>=1350?S||(S=Ee(),S.c(),S.m(e,null)):S&&(S.d(1),S=null)},i:L,o:L,d(c){c&&y(e),r&&r.d(),d&&d.d(),u&&u.d(),w&&w.d(),m&&m.d(),S&&S.d(),o()}}}function Kt(n,e,i){let{assetsPath:t="./"}=e,s=null;function a(){s=this.clientWidth,i(0,s)}return n.$$set=l=>{"assetsPath"in l&&i(1,t=l.assetsPath)},[s,t,a]}class pe extends Q{constructor(e){super(),Y(this,e,Kt,Ot,Z,{assetsPath:1})}}pe.__docgen={version:3,name:"crash.svelte",data:[{visibility:"public",description:null,keywords:[],name:"assetsPath",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"./"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const qt=""+new URL("quake-map-top-xs-bcd1bf0d.jpeg",import.meta.url).href,Ut=""+new URL("quake-map-top-sm-35f63447.jpeg",import.meta.url).href,Ft=""+new URL("quake-map-top-md-56188f42.jpeg",import.meta.url).href,Xt=""+new URL("quake-map-top-lg-eba813c5.jpeg",import.meta.url).href,Jt=""+new URL("quake-map-top-xl-2adbd119.jpeg",import.meta.url).href;function Ne(n){let e;return{c(){e=H("div"),e.innerHTML=`<div style="padding: 0 0 117.5758% 0;"></div> <div id="g-quake-map-top-xs-img" class="g-aiImg svelte-11uc9ua" alt="" style="${`background-image: url(${qt});`}"></div> <div id="g-ai0-1" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:-1.3529%;margin-top:-6.8px;left:33.0848%;width:46px;"><p class="g-pstyle0 svelte-11uc9ua">Kabul</p></div> <div id="g-ai0-2" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:4.3062%;margin-top:-7.7px;left:4.0902%;width:65px;"><p class="g-pstyle1 svelte-11uc9ua">Shaking</p></div> <div id="g-ai0-3" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:8.1722%;margin-top:-7.7px;left:4.0902%;width:78px;"><p class="g-pstyle2 svelte-11uc9ua">Very strong</p></div> <div id="g-ai0-4" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:19.5124%;margin-top:-7.7px;left:4.0902%;width:49px;"><p class="g-pstyle2 svelte-11uc9ua">Weak</p></div> <div id="g-ai0-5" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:22.4511%;margin-top:-5.1px;left:45.2353%;margin-left:-74px;width:148px;"><p class="g-pstyle3 svelte-11uc9ua">AFGHANISTAN</p></div> <div id="g-ai0-6" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:29.7371%;margin-top:-8.4px;left:34.8676%;width:56px;"><p class="g-pstyle4 svelte-11uc9ua">Gardez</p></div> <div id="g-ai0-7" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:39.2732%;margin-top:-8.4px;left:65.8508%;width:50px;"><p class="g-pstyle4 svelte-11uc9ua">Khost</p></div> <div id="g-ai0-8" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:45.9742%;margin-top:-8.4px;left:46.1799%;width:73px;"><p class="g-pstyle5 svelte-11uc9ua">Epicentre</p></div> <div id="g-ai0-9" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:49.8402%;margin-top:-8.4px;left:93.2747%;margin-left:-27px;width:54px;"><p class="g-pstyle6 svelte-11uc9ua">Bannu</p></div> <div id="g-ai0-10" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:63.4369%;margin-top:-5.1px;left:65.9996%;margin-left:-50px;width:100px;"><p class="g-pstyle7 svelte-11uc9ua">PAKISTAN</p></div>`,h(e,"id","g-quake-map-top-xs"),h(e,"class","g-artboard svelte-11uc9ua"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function Oe(n){let e;return{c(){e=H("div"),e.innerHTML=`<div style="padding: 0 0 83.5294% 0;"></div> <div id="g-quake-map-top-sm-img" class="g-aiImg svelte-11uc9ua" alt="" style="${`background-image: url(${Ut});`}"></div> <div id="g-ai1-1" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:5.3132%;margin-top:-8.6px;left:3.5997%;width:71px;"><p class="g-pstyle0 svelte-11uc9ua">Shaking</p></div> <div id="g-ai1-2" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:9.3038%;margin-top:-8.6px;left:3.5997%;width:86px;"><p class="g-pstyle1 svelte-11uc9ua">Very strong</p></div> <div id="g-ai1-3" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:18.8592%;margin-top:-5.3px;left:41.2699%;margin-left:-91.5px;width:183px;"><p class="g-pstyle2 svelte-11uc9ua">AFGHANISTAN</p></div> <div id="g-ai1-4" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:21.2757%;margin-top:-8.6px;left:3.5997%;width:53px;"><p class="g-pstyle1 svelte-11uc9ua">Weak</p></div> <div id="g-ai1-5" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:30.6101%;margin-top:-9.4px;left:40.186%;width:61px;"><p class="g-pstyle3 svelte-11uc9ua">Gardez</p></div> <div id="g-ai1-6" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:34.8355%;margin-top:-9.4px;left:9.9042%;width:60px;"><p class="g-pstyle3 svelte-11uc9ua">Ghazni</p></div> <div id="g-ai1-7" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:40.4693%;margin-top:-9.4px;left:63.0024%;width:54px;"><p class="g-pstyle3 svelte-11uc9ua">Khost</p></div> <div id="g-ai1-8" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:47.2768%;margin-top:-9.4px;left:48.5165%;width:80px;"><p class="g-pstyle4 svelte-11uc9ua">Epicentre</p></div> <div id="g-ai1-9" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:50.7979%;margin-top:-9.4px;left:82.1761%;margin-left:-29px;width:58px;"><p class="g-pstyle5 svelte-11uc9ua">Bannu</p></div> <div id="g-ai1-10" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:68.3897%;margin-top:-5.3px;left:73.6919%;margin-left:-67.5px;width:135px;"><p class="g-pstyle2 svelte-11uc9ua">PAKISTAN</p></div>`,h(e,"id","g-quake-map-top-sm"),h(e,"class","g-artboard svelte-11uc9ua"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function Ke(n){let e;return{c(){e=H("div"),e.innerHTML=`<div style="padding: 0 0 91.8182% 0;"></div> <div id="g-quake-map-top-md-img" class="g-aiImg svelte-11uc9ua" alt="" style="${`background-image: url(${Ft});`}"></div> <div id="g-ai2-1" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:3.5477%;margin-top:-7.5px;left:2.6635%;width:62px;"><p class="g-pstyle0 svelte-11uc9ua">Shaking</p></div> <div id="g-ai2-2" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:6.188%;margin-top:-7.5px;left:2.6635%;width:74px;"><p class="g-pstyle1 svelte-11uc9ua">Very strong</p></div> <div id="g-ai2-3" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:7.0759%;margin-top:-6.9px;right:6.4574%;width:100px;"><p class="g-pstyle2 svelte-11uc9ua">Afghanistan</p></div> <div id="g-ai2-4" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:15.2639%;margin-top:-7.5px;left:2.6635%;width:47px;"><p class="g-pstyle1 svelte-11uc9ua">Weak</p></div> <div id="g-ai2-5" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:18.7377%;margin-top:-7.6px;left:38.071%;margin-left:-136.5px;width:273px;"><p class="g-pstyle3 svelte-11uc9ua">AFGHANISTAN</p></div> <div id="g-ai2-6" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:30.2476%;margin-top:-10.3px;left:38.0816%;width:63px;"><p class="g-pstyle4 svelte-11uc9ua">Gardez</p></div> <div id="g-ai2-7" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:33.8779%;margin-top:-10.3px;left:9.3056%;margin-left:-31px;width:62px;"><p class="g-pstyle5 svelte-11uc9ua">Ghazni</p></div> <div id="g-ai2-8" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:40.1486%;margin-top:-10.3px;left:63.0563%;width:55px;"><p class="g-pstyle4 svelte-11uc9ua">Khost</p></div> <div id="g-ai2-9" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:47.1569%;margin-top:-10.8px;left:47.4444%;width:86px;"><p class="g-pstyle6 svelte-11uc9ua">Epicentre</p></div> <div id="g-ai2-10" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:50.8746%;margin-top:-10.3px;left:84.5785%;margin-left:-30px;width:60px;"><p class="g-pstyle5 svelte-11uc9ua">Bannu</p></div> <div id="g-ai2-11" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:62.467%;margin-top:-7.6px;left:80.6735%;margin-left:-100px;width:200px;"><p class="g-pstyle3 svelte-11uc9ua">PAKISTAN</p></div>`,h(e,"id","g-quake-map-top-md"),h(e,"class","g-artboard svelte-11uc9ua"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function qe(n){let e;return{c(){e=H("div"),e.innerHTML=`<div style="padding: 0 0 55.1667% 0;"></div> <div id="g-quake-map-top-lg-img" class="g-aiImg svelte-11uc9ua" alt="" style="${`background-image: url(${Xt});`}"></div> <div id="g-ai3-1" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:4.1944%;margin-top:-8.8px;left:1.7817%;width:67px;"><p class="g-pstyle0 svelte-11uc9ua">Shaking</p></div> <div id="g-ai3-2" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:6.9135%;margin-top:-8.8px;left:1.7817%;width:81px;"><p class="g-pstyle1 svelte-11uc9ua">Very strong</p></div> <div id="g-ai3-3" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:7.006%;margin-top:-7.4px;right:4.4122%;width:100px;"><p class="g-pstyle2 svelte-11uc9ua">Afghanistan</p></div> <div id="g-ai3-4" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:14.111%;margin-top:-8.4px;left:29.9587%;margin-left:-151px;width:302px;"><p class="g-pstyle3 svelte-11uc9ua">AFGHANISTAN</p></div> <div id="g-ai3-5" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:16.128%;margin-top:-8.8px;left:1.7818%;width:51px;"><p class="g-pstyle1 svelte-11uc9ua">Weak</p></div> <div id="g-ai3-6" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:28.2991%;margin-top:-11.3px;left:44.1554%;width:67px;"><p class="g-pstyle4 svelte-11uc9ua">Gardez</p></div> <div id="g-ai3-7" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:31.9244%;margin-top:-11.3px;left:26.4286%;margin-left:-33px;width:66px;"><p class="g-pstyle5 svelte-11uc9ua">Ghazni</p></div> <div id="g-ai3-8" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:37.676%;margin-top:-8.4px;left:85.4421%;margin-left:-110.5px;width:221px;"><p class="g-pstyle3 svelte-11uc9ua">PAKISTAN</p></div> <div id="g-ai3-9" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:38.42%;margin-top:-11.3px;left:59.5142%;width:59px;"><p class="g-pstyle4 svelte-11uc9ua">Khost</p></div> <div id="g-ai3-10" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:45.5991%;margin-top:-11.9px;left:49.9132%;width:94px;"><p class="g-pstyle6 svelte-11uc9ua">Epicentre</p></div> <div id="g-ai3-11" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:53.9788%;margin-top:-11.3px;left:72.7294%;margin-left:-32px;width:64px;"><p class="g-pstyle5 svelte-11uc9ua">Bannu</p></div>`,h(e,"id","g-quake-map-top-lg"),h(e,"class","g-artboard svelte-11uc9ua"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function Ue(n){let e;return{c(){e=H("div"),e.innerHTML=`<div style="padding: 0 0 51.2308% 0;"></div> <div id="g-quake-map-top-xl-img" class="g-aiImg svelte-11uc9ua" alt="" style="${`background-image: url(${Jt});`}"></div> <div id="g-ai4-1" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:3.8689%;margin-top:-8.8px;left:1.5293%;width:67px;"><p class="g-pstyle0 svelte-11uc9ua">Shaking</p></div> <div id="g-ai4-2" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:6.063%;margin-top:-7.4px;right:4.342%;width:100px;"><p class="g-pstyle1 svelte-11uc9ua">Afghanistan</p></div> <div id="g-ai4-3" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:6.5716%;margin-top:-8.8px;left:1.5293%;width:81px;"><p class="g-pstyle2 svelte-11uc9ua">Very strong</p></div> <div id="g-ai4-4" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:13.726%;margin-top:-8.4px;left:30.8465%;margin-left:-151px;width:302px;"><p class="g-pstyle3 svelte-11uc9ua">AFGHANISTAN</p></div> <div id="g-ai4-5" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:15.7308%;margin-top:-8.8px;left:1.5294%;width:51px;"><p class="g-pstyle2 svelte-11uc9ua">Weak</p></div> <div id="g-ai4-6" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:27.8288%;margin-top:-11.3px;left:43.9511%;width:67px;"><p class="g-pstyle4 svelte-11uc9ua">Gardez</p></div> <div id="g-ai4-7" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:31.4324%;margin-top:-11.3px;left:27.588%;margin-left:-33px;width:66px;"><p class="g-pstyle5 svelte-11uc9ua">Ghazni</p></div> <div id="g-ai4-8" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:37.1494%;margin-top:-8.4px;left:82.0619%;margin-left:-110.5px;width:221px;"><p class="g-pstyle3 svelte-11uc9ua">PAKISTAN</p></div> <div id="g-ai4-9" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:37.8889%;margin-top:-11.3px;left:58.1285%;width:59px;"><p class="g-pstyle4 svelte-11uc9ua">Khost</p></div> <div id="g-ai4-10" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:45.025%;margin-top:-11.9px;left:49.2661%;width:94px;"><p class="g-pstyle6 svelte-11uc9ua">Epicentre</p></div> <div id="g-ai4-11" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:53.3543%;margin-top:-11.3px;left:70.3271%;margin-left:-32px;width:64px;"><p class="g-pstyle5 svelte-11uc9ua">Bannu</p></div>`,h(e,"id","g-quake-map-top-xl"),h(e,"class","g-artboard svelte-11uc9ua"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function Qt(n){let e,i,t,s,a,l,o=n[0]&&n[0]>=0&&n[0]<510&&Ne(),r=n[0]&&n[0]>=510&&n[0]<660&&Oe(),d=n[0]&&n[0]>=660&&n[0]<1200&&Ke(),u=n[0]&&n[0]>=1200&&n[0]<1300&&qe(),w=n[0]&&n[0]>=1300&&Ue();return{c(){e=H("div"),o&&o.c(),i=T(),r&&r.c(),t=T(),d&&d.c(),s=T(),u&&u.c(),a=T(),w&&w.c(),h(e,"id","g-quake-map-top-box"),h(e,"class","svelte-11uc9ua"),Fe(()=>n[2].call(e))},m(m,S){v(m,e,S),o&&o.m(e,null),I(e,i),r&&r.m(e,null),I(e,t),d&&d.m(e,null),I(e,s),u&&u.m(e,null),I(e,a),w&&w.m(e,null),l=Xe(e,n[2].bind(e))},p(m,[S]){m[0]&&m[0]>=0&&m[0]<510?o||(o=Ne(),o.c(),o.m(e,i)):o&&(o.d(1),o=null),m[0]&&m[0]>=510&&m[0]<660?r||(r=Oe(),r.c(),r.m(e,t)):r&&(r.d(1),r=null),m[0]&&m[0]>=660&&m[0]<1200?d||(d=Ke(),d.c(),d.m(e,s)):d&&(d.d(1),d=null),m[0]&&m[0]>=1200&&m[0]<1300?u||(u=qe(),u.c(),u.m(e,a)):u&&(u.d(1),u=null),m[0]&&m[0]>=1300?w||(w=Ue(),w.c(),w.m(e,null)):w&&(w.d(1),w=null)},i:L,o:L,d(m){m&&y(e),o&&o.d(),r&&r.d(),d&&d.d(),u&&u.d(),w&&w.d(),l()}}}function Yt(n,e,i){let{assetsPath:t="./"}=e,s=null;function a(){s=this.clientWidth,i(0,s)}return n.$$set=l=>{"assetsPath"in l&&i(1,t=l.assetsPath)},[s,t,a]}class de extends Q{constructor(e){super(),Y(this,e,Yt,Qt,Z,{assetsPath:1})}}de.__docgen={version:3,name:"quakemap.svelte",data:[{visibility:"public",description:null,keywords:[],name:"assetsPath",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"./"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Zt(n){let e,i;return e=new N({}),{c(){x(e.$$.fragment)},m(t,s){$(e,t,s),i=!0},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),i=!1},d(t){b(e,t)}}}function ei(n){let e,i,t,s;e=new R({props:{width:"fluid",class:"chromatic-ignore",$$slots:{default:[Zt]},$$scope:{ctx:n}}});const a=[n[1]];let l={};for(let o=0;o<a.length;o+=1)l=C(l,a[o]);return t=new V({props:l}),{c(){x(e.$$.fragment),i=T(),x(t.$$.fragment)},m(o,r){$(e,o,r),v(o,i,r),$(t,o,r),s=!0},p(o,r){const d={};r&4&&(d.$$scope={dirty:r,ctx:o}),e.$set(d);const u=r&2?Je(a,[Qe(o[1])]):{};t.$set(u)},i(o){s||(g(e.$$.fragment,o),g(t.$$.fragment,o),s=!0)},o(o){f(e.$$.fragment,o),f(t.$$.fragment,o),s=!1},d(o){o&&y(i),b(e,o),b(t,o)}}}function ti(n){let e,i;return e=new N({}),{c(){x(e.$$.fragment)},m(t,s){$(e,t,s),i=!0},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),i=!1},d(t){b(e,t)}}}function ii(n){let e,i,t,s,a;return i=new R({props:{width:"fluid",class:"chromatic-ignore",$$slots:{default:[ti]},$$scope:{ctx:n}}}),s=new V({props:{section:"World News",hed:"Reuters Graphics Interactive",dek:"The beginning of a beautiful page",authors:["Simon Scarr","Vijdan Mohammad Kawoosa"],publishTime:new Date("2022-03-04").toISOString(),img:Ze}}),{c(){e=H("div"),x(i.$$.fragment),t=T(),x(s.$$.fragment),h(e,"class","transparent-header svelte-u6gdb6")},m(l,o){v(l,e,o),$(i,e,null),I(e,t),$(s,e,null),a=!0},p(l,o){const r={};o&4&&(r.$$scope={dirty:o,ctx:l}),i.$set(r)},i(l){a||(g(i.$$.fragment,l),g(s.$$.fragment,l),a=!0)},o(l){f(i.$$.fragment,l),f(s.$$.fragment,l),a=!1},d(l){l&&y(e),b(i),b(s)}}}function si(n){let e,i;return e=new N({}),{c(){x(e.$$.fragment)},m(t,s){$(e,t,s),i=!0},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),i=!1},d(t){b(e,t)}}}function ai(n){let e,i,t;var s=de;function a(l,o){return{}}return s&&(e=J(s,a())),{c(){e&&x(e.$$.fragment),i=ce()},m(l,o){e&&$(e,l,o),v(l,i,o),t=!0},p(l,o){if(s!==(s=de)){if(e){M();const r=e;f(r.$$.fragment,1,0,()=>{b(r,1)}),z()}s?(e=J(s,a()),x(e.$$.fragment),g(e.$$.fragment,1),$(e,i.parentNode,i)):e=null}},i(l){t||(e&&g(e.$$.fragment,l),t=!0)},o(l){e&&f(e.$$.fragment,l),t=!1},d(l){l&&y(i),e&&b(e,l)}}}function ni(n){let e,i,t;return i=new ge({props:{width:"widest",role:"figure",class:"my-0",textWidth:"normal",notes:"",ariaDescription:"Earthquake impact map",$$slots:{default:[ai]},$$scope:{ctx:n}}}),{c(){e=H("div"),x(i.$$.fragment),h(e,"slot","background")},m(s,a){v(s,e,a),$(i,e,null),t=!0},p(s,a){const l={};a&4&&(l.$$scope={dirty:a,ctx:s}),i.$set(l)},i(s){t||(g(i.$$.fragment,s),t=!0)},o(s){f(i.$$.fragment,s),t=!1},d(s){s&&y(e),b(i)}}}function li(n){let e,i,t,s,a,l;return e=new R({props:{width:"fluid",class:"chromatic-ignore",$$slots:{default:[si]},$$scope:{ctx:n}}}),t=new V({props:{hed:"Earthquake devastates Afghanistan",hedSize:"big",hedWidth:"wide",class:"custom-hero mb-0",dek:"",authors:["Anand Katakam","Vijdan Mohammad Kawoosa","Adolfo Arranz","Wen Foo","Simon Scarr","Aman Bhargava","Jitesh Chowdhury","Manas Sharma","Aditi Bhandari"],publishTime:new Date("2022-06-24").toISOString(),$$slots:{background:[ni]},$$scope:{ctx:n}}}),{c(){x(e.$$.fragment),i=T(),x(t.$$.fragment),s=T(),a=H("style"),a.textContent=`.hero-wrapper {
  --heroHeight: 85svh;
}
.hero-wrapper .custom-hero.headline {
  align-items: flex-end !important;
}
@media (max-width: 1100px) {
  .hero-wrapper .custom-hero.headline {
    max-width: var(--normal-column-width) !important;
  }
}
@media (max-width: 960px) {
  .hero-wrapper {
    --heroHeight: 65svh;
  }
}
@media (max-height: 850px) {
  .hero-wrapper {
    --heroHeight: 100svh;
  }
}
@media (max-width: 960px) and (orientation: landscape) {
  .hero-wrapper {
    --heroHeight: 200svh;
  }
}

.hero-wrapper.embedded {
  --heroHeight: 1000px;
}`,h(a,"lang","scss")},m(o,r){$(e,o,r),v(o,i,r),$(t,o,r),v(o,s,r),v(o,a,r),l=!0},p(o,r){const d={};r&4&&(d.$$scope={dirty:r,ctx:o}),e.$set(d);const u={};r&4&&(u.$$scope={dirty:r,ctx:o}),t.$set(u)},i(o){l||(g(e.$$.fragment,o),g(t.$$.fragment,o),l=!0)},o(o){f(e.$$.fragment,o),f(t.$$.fragment,o),l=!1},d(o){o&&(y(i),y(s),y(a)),b(e,o),b(t,o)}}}function oi(n){let e,i;return e=new N({}),{c(){x(e.$$.fragment)},m(t,s){$(e,t,s),i=!0},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),i=!1},d(t){b(e,t)}}}function ri(n){let e,i,t;return i=new Ye({props:{width:"widest",class:"my-0",showControls:!1,preloadVideo:"auto",playVideoWhenInView:!1,src:"https://vm.reuters.tv/9c72e/titlef2ac(425954_R21MP41500).mp4",poster:"https://www.reuters.com/resizer/vexYmtEuXKmfnsCbfS6jSMVbHms=/1080x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VKJHKJEENVO4DASDND3VLHPV5Y.jpg",notes:"Drone footage from the Village 8 refugee camp in Sudan.",ariaDescription:"Aerial footage of people houses in refugee camp"}}),{c(){e=H("div"),x(i.$$.fragment),h(e,"slot","background")},m(s,a){v(s,e,a),$(i,e,null),t=!0},p:L,i(s){t||(g(i.$$.fragment,s),t=!0)},o(s){f(i.$$.fragment,s),t=!1},d(s){s&&y(e),b(i)}}}function pi(n){let e,i,t,s,a,l;return e=new R({props:{width:"fluid",class:"chromatic-ignore",$$slots:{default:[oi]},$$scope:{ctx:n}}}),t=new V({props:{class:"video-hero",hed:"The conflict in Ethiopia",hedSize:"bigger",hedWidth:"wide",authors:["Aditi Bhandari ","David Lewis"],publishTime:new Date("2020-12-18").toISOString(),$$slots:{background:[ri]},$$scope:{ctx:n}}}),{c(){x(e.$$.fragment),i=T(),x(t.$$.fragment),s=T(),a=H("style"),a.textContent=`.hero-wrapper {
  --heroHeight: calc(100svh - 60px);
}
.hero-wrapper .video-hero.headline header {
  top: calc(50svh - 250px);
}
.hero-wrapper .video-hero.headline h1 {
  color: #ffd430;
  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
}`,h(a,"lang","scss")},m(o,r){$(e,o,r),v(o,i,r),$(t,o,r),v(o,s,r),v(o,a,r),l=!0},p(o,r){const d={};r&4&&(d.$$scope={dirty:r,ctx:o}),e.$set(d);const u={};r&4&&(u.$$scope={dirty:r,ctx:o}),t.$set(u)},i(o){l||(g(e.$$.fragment,o),g(t.$$.fragment,o),l=!0)},o(o){f(e.$$.fragment,o),f(t.$$.fragment,o),l=!1},d(o){o&&(y(i),y(s),y(a)),b(e,o),b(t,o)}}}function di(n){let e,i;return e=new N({}),{c(){x(e.$$.fragment)},m(t,s){$(e,t,s),i=!0},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),i=!1},d(t){b(e,t)}}}function ci(n){let e,i,t;return i=new rt({props:{width:"widest",class:"my-0",src:"https://www.reuters.com/graphics/MOROCCO-QUAKE/CONSTRUCTION/xmpjlblojpr/cdn/images/opening.jpg",caption:"Photo by REUTERS/Nacho Doce.",altText:"A photo of the town of Adassil, Morocco, showing severe damage to many houses, which have collapsed after the earthquake. The houses are all made of mud brick."}}),{c(){e=H("div"),x(i.$$.fragment),h(e,"slot","inline")},m(s,a){v(s,e,a),$(i,e,null),t=!0},p:L,i(s){t||(g(i.$$.fragment,s),t=!0)},o(s){f(i.$$.fragment,s),t=!1},d(s){s&&y(e),b(i)}}}function gi(n){let e,i,t,s;return e=new R({props:{width:"fluid",class:"chromatic-ignore",$$slots:{default:[di]},$$scope:{ctx:n}}}),t=new V({props:{hed:"Buried under the bricks",hedWidth:"wide",class:"mb-0",dek:"How mud-brick housing made the Morocco earthquake so deadly",section:"Global news",authors:["Mariano Zafra"],publishTime:new Date("2020-01-01").toISOString(),$$slots:{inline:[ci]},$$scope:{ctx:n}}}),{c(){x(e.$$.fragment),i=T(),x(t.$$.fragment)},m(a,l){$(e,a,l),v(a,i,l),$(t,a,l),s=!0},p(a,l){const o={};l&4&&(o.$$scope={dirty:l,ctx:a}),e.$set(o);const r={};l&4&&(r.$$scope={dirty:l,ctx:a}),t.$set(r)},i(a){s||(g(e.$$.fragment,a),g(t.$$.fragment,a),s=!0)},o(a){f(e.$$.fragment,a),f(t.$$.fragment,a),s=!1},d(a){a&&y(i),b(e,a),b(t,a)}}}function ui(n){let e,i;return e=new N({}),{c(){x(e.$$.fragment)},m(t,s){$(e,t,s),i=!0},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),i=!1},d(t){b(e,t)}}}function fi(n){let e,i,t;var s=pe;function a(l,o){return{}}return s&&(e=J(s,a())),{c(){e&&x(e.$$.fragment),i=ce()},m(l,o){e&&$(e,l,o),v(l,i,o),t=!0},p(l,o){if(s!==(s=pe)){if(e){M();const r=e;f(r.$$.fragment,1,0,()=>{b(r,1)}),z()}s?(e=J(s,a()),x(e.$$.fragment),g(e.$$.fragment,1),$(e,i.parentNode,i)):e=null}},i(l){t||(e&&g(e.$$.fragment,l),t=!0)},o(l){e&&f(e.$$.fragment,l),t=!1},d(l){l&&y(i),e&&b(e,l)}}}function mi(n){let e,i,t;return i=new ge({props:{width:"widest",role:"img",class:"my-0",textWidth:"normal",notes:"Source: Satellite image from Google, Maxar Technologies, CNES/Airbus, Landsat/Copernicus",ariaDescription:"Aerial map showing trajectory of crash",$$slots:{default:[fi]},$$scope:{ctx:n}}}),{c(){e=H("div"),x(i.$$.fragment),h(e,"slot","inline")},m(s,a){v(s,e,a),$(i,e,null),t=!0},p(s,a){const l={};a&4&&(l.$$scope={dirty:a,ctx:s}),i.$set(l)},i(s){t||(g(i.$$.fragment,s),t=!0)},o(s){f(i.$$.fragment,s),t=!1},d(s){s&&y(e),b(i)}}}function hi(n){let e,i,t,s;return e=new R({props:{width:"fluid",class:"chromatic-ignore",$$slots:{default:[ui]},$$scope:{ctx:n}}}),t=new V({props:{hed:"The plunge from 29,000 feet",hedWidth:"wide",class:"mb-0",dek:"How China Eastern Airlines flight MU5735 went from an uneventful flight at cruising altitude to disaster in just minutes.",section:"Global news",authors:["Simon Scarr","Vijdan Mohammad Kawoosa"],publishTime:new Date("2020-01-01").toISOString(),$$slots:{inline:[mi]},$$scope:{ctx:n}}}),{c(){x(e.$$.fragment),i=T(),x(t.$$.fragment)},m(a,l){$(e,a,l),v(a,i,l),$(t,a,l),s=!0},p(a,l){const o={};l&4&&(o.$$scope={dirty:l,ctx:a}),e.$set(o);const r={};l&4&&(r.$$scope={dirty:l,ctx:a}),t.$set(r)},i(a){s||(g(e.$$.fragment,a),g(t.$$.fragment,a),s=!0)},o(a){f(e.$$.fragment,a),f(t.$$.fragment,a),s=!1},d(a){a&&y(i),b(e,a),b(t,a)}}}function vi(n){let e,i;return e=new N({}),{c(){x(e.$$.fragment)},m(t,s){$(e,t,s),i=!0},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),i=!1},d(t){b(e,t)}}}function yi(n){let e,i,t;return i=new Ye({props:{width:"widest",class:"my-0",showControls:!1,preloadVideo:"auto",playVideoWhenInView:!1,src:"https://www.reuters.com/graphics/LIBYA-STORM/EXPLAINER/klvyzqebzpg/cdn/video/drone.mp4",notes:"Drone shots of Derna, Libya. September 14, 2023. REUTERS",ariaDescription:"alttext fot video"}}),{c(){e=H("div"),x(i.$$.fragment),h(e,"slot","inline")},m(s,a){v(s,e,a),$(i,e,null),t=!0},p:L,i(s){t||(g(i.$$.fragment,s),t=!0)},o(s){f(i.$$.fragment,s),t=!1},d(s){s&&y(e),b(i)}}}function xi(n){let e,i,t,s;return e=new R({props:{width:"fluid",class:"chromatic-ignore",$$slots:{default:[vi]},$$scope:{ctx:n}}}),t=new V({props:{hed:"Devastation in Derna",hedWidth:"wide",class:"mb-0",dek:"How raging floods burst dams, destroyed neighbourhoods and killed thousands in Libya",section:"Global news",authors:["Simon Scarr"],publishTime:new Date("2020-01-01").toISOString(),$$slots:{inline:[yi]},$$scope:{ctx:n}}}),{c(){x(e.$$.fragment),i=T(),x(t.$$.fragment)},m(a,l){$(e,a,l),v(a,i,l),$(t,a,l),s=!0},p(a,l){const o={};l&4&&(o.$$scope={dirty:l,ctx:a}),e.$set(o);const r={};l&4&&(r.$$scope={dirty:l,ctx:a}),t.$set(r)},i(a){s||(g(e.$$.fragment,a),g(t.$$.fragment,a),s=!0)},o(a){f(e.$$.fragment,a),f(t.$$.fragment,a),s=!1},d(a){a&&y(i),b(e,a),b(t,a)}}}function $i(n){let e;return{c(){e=H("h1"),e.innerHTML='<div class="body-note">A visual guide to</div> <div class="title text-6xl font-light tracking-widest">EUROVISION</div>',h(e,"slot","hed")},m(i,t){v(i,e,t)},p:L,d(i){i&&y(e)}}}function bi(n){let e,i,t,s;return e=new V({props:{class:"custom-hed",authors:["Prasanta Kumar Dutta","Dea Bankova","Aditi Bhandari","Anurag Rao"],publishTime:new Date("2023-05-11").toISOString(),img:ht,$$slots:{hed:[$i]},$$scope:{ctx:n}}}),{c(){x(e.$$.fragment),i=T(),t=H("style"),t.textContent=`.custom-hed h1 .body-note {
  color: #ffffff;
}
.custom-hed h1 .title {
  color: #ffffff;
  text-shadow: 1px 1px 8px #ff7c88;
  filter: drop-shadow(0px 0px 12px #ff7c88);
}`,h(t,"lang","scss")},m(a,l){$(e,a,l),v(a,i,l),v(a,t,l),s=!0},p(a,l){const o={};l&4&&(o.$$scope={dirty:l,ctx:a}),e.$set(o)},i(a){s||(g(e.$$.fragment,a),s=!0)},o(a){f(e.$$.fragment,a),s=!1},d(a){a&&(y(i),y(t)),b(e,a)}}}function wi(n){let e,i,t,s,a,l,o,r,d,u,w,m,S,c,A,P,W,O,D,j;const _=[{title:"Components/HeroHeadline"},{component:V},n[0]];let te={};for(let p=0;p<_.length;p+=1)te=C(te,_[p]);e=new at({props:te}),t=new nt({props:{$$slots:{default:[ei,({args:p})=>({1:p}),({args:p})=>p?2:0]},$$scope:{ctx:n}}}),a=new G({props:{name:"With backdrop photo",args:{section:"World News",hed:"Reuters Graphics Interactive",dek:"The beginning of a beautiful page",authors:["Simon Scarr","Vijdan Mohammad Kawoosa"],publishTime:new Date("2022-03-04").toISOString(),img:Ze}}});const ue=[{name:"With transparent header"},E(ut)];let ie={$$slots:{default:[ii]},$$scope:{ctx:n}};for(let p=0;p<ue.length;p+=1)ie=C(ie,ue[p]);o=new G({props:ie});const fe=[{name:"With backdrop graphic"},E(ct)];let se={$$slots:{default:[li]},$$scope:{ctx:n}};for(let p=0;p<fe.length;p+=1)se=C(se,fe[p]);d=new G({props:se});const me=[{name:"With backdrop video"},E(ft)];let ae={$$slots:{default:[pi]},$$scope:{ctx:n}};for(let p=0;p<me.length;p+=1)ae=C(ae,me[p]);w=new G({props:ae});const he=[{name:"With inline photo"},E(Pe)];let ne={$$slots:{default:[gi]},$$scope:{ctx:n}};for(let p=0;p<he.length;p+=1)ne=C(ne,he[p]);S=new G({props:ne});const ve=[{name:"With inline graphic"},E(gt)];let le={$$slots:{default:[hi]},$$scope:{ctx:n}};for(let p=0;p<ve.length;p+=1)le=C(le,ve[p]);A=new G({props:le});const ye=[{name:"With inline video"},E(Pe)];let oe={$$slots:{default:[xi]},$$scope:{ctx:n}};for(let p=0;p<ye.length;p+=1)oe=C(oe,ye[p]);W=new G({props:oe});const xe=[{name:"With custom hed"},E(mt)];let re={$$slots:{default:[bi]},$$scope:{ctx:n}};for(let p=0;p<xe.length;p+=1)re=C(re,xe[p]);return D=new G({props:re}),{c(){x(e.$$.fragment),i=T(),x(t.$$.fragment),s=T(),x(a.$$.fragment),l=T(),x(o.$$.fragment),r=T(),x(d.$$.fragment),u=T(),x(w.$$.fragment),m=T(),x(S.$$.fragment),c=T(),x(A.$$.fragment),P=T(),x(W.$$.fragment),O=T(),x(D.$$.fragment)},m(p,k){$(e,p,k),v(p,i,k),$(t,p,k),v(p,s,k),$(a,p,k),v(p,l,k),$(o,p,k),v(p,r,k),$(d,p,k),v(p,u,k),$(w,p,k),v(p,m,k),$(S,p,k),v(p,c,k),$(A,p,k),v(p,P,k),$(W,p,k),v(p,O,k),$(D,p,k),j=!0},p(p,[k]){const tt=k&1?Je(_,[_[0],_[1],Qe(p[0])]):{};e.$set(tt);const $e={};k&6&&($e.$$scope={dirty:k,ctx:p}),t.$set($e);const be={};k&4&&(be.$$scope={dirty:k,ctx:p}),o.$set(be);const we={};k&4&&(we.$$scope={dirty:k,ctx:p}),d.$set(we);const _e={};k&4&&(_e.$$scope={dirty:k,ctx:p}),w.$set(_e);const ke={};k&4&&(ke.$$scope={dirty:k,ctx:p}),S.$set(ke);const Ae={};k&4&&(Ae.$$scope={dirty:k,ctx:p}),A.$set(Ae);const Se={};k&4&&(Se.$$scope={dirty:k,ctx:p}),W.$set(Se);const Te={};k&4&&(Te.$$scope={dirty:k,ctx:p}),D.$set(Te)},i(p){j||(g(e.$$.fragment,p),g(t.$$.fragment,p),g(a.$$.fragment,p),g(o.$$.fragment,p),g(d.$$.fragment,p),g(w.$$.fragment,p),g(S.$$.fragment,p),g(A.$$.fragment,p),g(W.$$.fragment,p),g(D.$$.fragment,p),j=!0)},o(p){f(e.$$.fragment,p),f(t.$$.fragment,p),f(a.$$.fragment,p),f(o.$$.fragment,p),f(d.$$.fragment,p),f(w.$$.fragment,p),f(S.$$.fragment,p),f(A.$$.fragment,p),f(W.$$.fragment,p),f(D.$$.fragment,p),j=!1},d(p){p&&(y(i),y(s),y(l),y(r),y(u),y(m),y(c),y(P),y(O)),b(e,p),b(t,p),b(a,p),b(o,p),b(d,p),b(w,p),b(S,p),b(A,p),b(W,p),b(D,p)}}}function _i(n){return[{...pt(dt),argTypes:{hedSize:{control:"select",options:["small","normal","big","bigger","biggest"]},hedWidth:{control:"select",options:["normal","wide","wider","widest"]},hedAlign:{control:"select",options:["left","center","right"]},width:{control:"select",options:["normal","wide","wider","widest"]}}}]}class et extends Q{constructor(e){super(),Y(this,e,_i,wi,Z,{})}}et.__docgen={version:3,name:"Hero.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const B=st(et,{meta:{title:"Components/HeroHeadline"},stories:{"tpl:default":{name:"default",template:!0,source:`<Block width="fluid" class="chromatic-ignore">
  <SiteHeader />
</Block>

<HeroHeadline {...args} />`,hasArgs:!0},WithBackdropPhoto:{name:"With backdrop photo",template:!1,source:"",hasArgs:!1},WithTransparentHeader:{name:"With transparent header",template:!1,source:`<div class="transparent-header">
  <Block width="fluid" class="chromatic-ignore">
    <SiteHeader />
  </Block>

  <HeroHeadline
    section="World News"
    hed="Reuters Graphics Interactive"
    dek="The beginning of a beautiful page"
    authors="{['Simon Scarr', 'Vijdan Mohammad Kawoosa']}"
    publishTime="{new Date('2022-03-04').toISOString()}"
    img="{polarImgSrc}"
  />
</div>`,hasArgs:!1},WithBackdropGraphic:{name:"With backdrop graphic",template:!1,source:`<Block width="fluid" class="chromatic-ignore">
  <SiteHeader />
</Block>

<HeroHeadline
  hed="{'Earthquake devastates Afghanistan'}"
  hedSize="{'big'}"
  hedWidth="wide"
  class="custom-hero mb-0"
  dek=""
  authors="{[
    'Anand Katakam',
    'Vijdan Mohammad Kawoosa',
    'Adolfo Arranz',
    'Wen Foo',
    'Simon Scarr',
    'Aman Bhargava',
    'Jitesh Chowdhury',
    'Manas Sharma',
    'Aditi Bhandari',
  ]}"
  publishTime="{new Date('2022-06-24').toISOString()}"
>
  <div slot="background">
    <GraphicBlock
      width="widest"
      role="figure"
      class="my-0"
      textWidth="normal"
      notes=""
      ariaDescription="Earthquake impact map"
    >
      <svelte:component this="{QuakeMap}" />
    </GraphicBlock>
  </div>
</HeroHeadline>
<style lang="scss">.hero-wrapper {
--heroHeight: 85svh;
}
.hero-wrapper .custom-hero.headline {
align-items: flex-end !important;
}
@media (max-width: 1100px) {
.hero-wrapper .custom-hero.headline {
  max-width: var(--normal-column-width) !important;
}
}
@media (max-width: 960px) {
.hero-wrapper {
  --heroHeight: 65svh;
}
}
@media (max-height: 850px) {
.hero-wrapper {
  --heroHeight: 100svh;
}
}
@media (max-width: 960px) and (orientation: landscape) {
.hero-wrapper {
  --heroHeight: 200svh;
}
}

.hero-wrapper.embedded {
--heroHeight: 1000px;
}</style>`,hasArgs:!1},WithBackdropVideo:{name:"With backdrop video",template:!1,source:`<Block width="fluid" class="chromatic-ignore">
  <SiteHeader />
</Block>

<HeroHeadline
  class="video-hero"
  hed="The conflict in Ethiopia"
  hedSize="bigger"
  hedWidth="wide"
  authors="{['Aditi Bhandari ', 'David Lewis']}"
  publishTime="{new Date('2020-12-18').toISOString()}"
>
  <div slot="background">
    <Video
      width="widest"
      class="my-0"
      showControls="{false}"
      preloadVideo="auto"
      playVideoWhenInView="{false}"
      src="https://vm.reuters.tv/9c72e/titlef2ac(425954_R21MP41500).mp4"
      poster="https://www.reuters.com/resizer/vexYmtEuXKmfnsCbfS6jSMVbHms=/1080x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VKJHKJEENVO4DASDND3VLHPV5Y.jpg"
      notes="Drone footage from the Village 8 refugee camp in Sudan."
      ariaDescription="Aerial footage of people houses in refugee camp"
    />
  </div>
</HeroHeadline>
<style lang="scss">.hero-wrapper {
--heroHeight: calc(100svh - 60px);
}
.hero-wrapper .video-hero.headline header {
top: calc(50svh - 250px);
}
.hero-wrapper .video-hero.headline h1 {
color: #ffd430;
text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
}</style>`,hasArgs:!1},WithInlinePhoto:{name:"With inline photo",template:!1,source:`<Block width="fluid" class="chromatic-ignore">
  <SiteHeader />
</Block>

<HeroHeadline
  hed="{'Buried under the bricks'}"
  hedWidth="wide"
  class="mb-0"
  dek="{'How mud-brick housing made the Morocco earthquake so deadly'}"
  section="{'Global news'}"
  authors="{['Mariano Zafra']}"
  publishTime="{new Date('2020-01-01').toISOString()}"
>
  <div slot="inline">
    <FeaturePhoto
      width="widest"
      class="my-0"
      src="https://www.reuters.com/graphics/MOROCCO-QUAKE/CONSTRUCTION/xmpjlblojpr/cdn/images/opening.jpg"
      caption="Photo by REUTERS/Nacho Doce."
      altText="A photo of the town of Adassil, Morocco, showing severe damage to many houses, which have collapsed after the earthquake. The houses are all made of mud brick."
    />
  </div>
</HeroHeadline>`,hasArgs:!1},WithInlineGraphic:{name:"With inline graphic",template:!1,source:`<Block width="fluid" class="chromatic-ignore">
  <SiteHeader />
</Block>

<HeroHeadline
  hed="{'The plunge from 29,000 feet'}"
  hedWidth="wide"
  class="mb-0"
  dek="{'How China Eastern Airlines flight MU5735 went from an uneventful flight at cruising altitude to disaster in just minutes.'}"
  section="{'Global news'}"
  authors="{['Simon Scarr', 'Vijdan Mohammad Kawoosa']}"
  publishTime="{new Date('2020-01-01').toISOString()}"
>
  <div slot="inline">
    <GraphicBlock
      width="widest"
      role="img"
      class="my-0"
      textWidth="normal"
      notes="Source: Satellite image from Google, Maxar Technologies, CNES/Airbus, Landsat/Copernicus"
      ariaDescription="Aerial map showing trajectory of crash"
    >
      <svelte:component this="{CrashMap}" />
    </GraphicBlock>
  </div>
</HeroHeadline>`,hasArgs:!1},WithInlineVideo:{name:"With inline video",template:!1,source:`<Block width="fluid" class="chromatic-ignore">
  <SiteHeader />
</Block>

<HeroHeadline
  hed="{'Devastation in Derna'}"
  hedWidth="wide"
  class="mb-0"
  dek="{'How raging floods burst dams, destroyed neighbourhoods and killed thousands in Libya'}"
  section="{'Global news'}"
  authors="{['Simon Scarr']}"
  publishTime="{new Date('2020-01-01').toISOString()}"
>
  <div slot="inline">
    <Video
      width="widest"
      class="my-0"
      showControls="{false}"
      preloadVideo="auto"
      playVideoWhenInView="{false}"
      src="https://www.reuters.com/graphics/LIBYA-STORM/EXPLAINER/klvyzqebzpg/cdn/video/drone.mp4"
      notes="Drone shots of Derna, Libya. September 14, 2023. REUTERS"
      ariaDescription="alttext fot video"
    />
  </div>
</HeroHeadline>`,hasArgs:!1},WithCustomHed:{name:"With custom hed",template:!1,source:`<HeroHeadline
  class="custom-hed"
  authors="{[
    'Prasanta Kumar Dutta',
    'Dea Bankova',
    'Aditi Bhandari',
    'Anurag Rao',
  ]}"
  publishTime="{new Date('2023-05-11').toISOString()}"
  img="{eurovisImgSrc}"
>
  <h1 slot="hed">
    <div class="body-note">A visual guide to</div>
    <div class="title text-6xl font-light tracking-widest">EUROVISION</div>
  </h1>
</HeroHeadline>

<style lang="scss">.custom-hed h1 .body-note {
color: #ffffff;
}
.custom-hed h1 .title {
color: #ffffff;
text-shadow: 1px 1px 8px #ff7c88;
filter: drop-shadow(0px 0px 12px #ff7c88);
}</style>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","backgroundGraphicDocs","inlineGraphicDocs","inlinePhotoDocs","transparentHeaderDocs","videoDocs","customHedDocs","polarImgSrc","eurovisImgSrc","Block","SiteHeader","HeroHeadline","GraphicBlock","FeaturePhoto","Video","CrashMap","QuakeMap","withComponentDocs","withStoryDocs"]}),Ki=B.meta,qi=["WithBackdropPhoto","WithTransparentHeader","WithBackdropGraphic","WithBackdropVideo","WithInlinePhoto","WithInlineGraphic","WithInlineVideo","WithCustomHed"],Ui=B.stories.WithBackdropPhoto,Fi=B.stories.WithTransparentHeader,Xi=B.stories.WithBackdropGraphic,Ji=B.stories.WithBackdropVideo,Qi=B.stories.WithInlinePhoto,Yi=B.stories.WithInlineGraphic,Zi=B.stories.WithInlineVideo,es=B.stories.WithCustomHed;export{Xi as WithBackdropGraphic,Ui as WithBackdropPhoto,Ji as WithBackdropVideo,es as WithCustomHed,Yi as WithInlineGraphic,Qi as WithInlinePhoto,Zi as WithInlineVideo,Fi as WithTransparentHeader,qi as __namedExportsOrder,Ki as default};
//# sourceMappingURL=Hero.stories-5b0f0b36.js.map
