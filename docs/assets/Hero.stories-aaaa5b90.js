import{S as J,i as Y,s as Z,o as T,y as H,b as h,p as ye,c as q,d as v,e as W,t as u,v as G,h as m,w as D,f as y,x as qe,g as _,m as b,j as w,l as O,u as E,q as U,r as F,k as re,N as Me,O as ze,n as L,C,J as X,F as Oe}from"./index-df681c7c.js";import{g as je,a as Ve}from"./spread-8a54911c.js";import{p as Ee,M as Ue,T as Fe,S as V}from"./collect-stories-a6a786e2.js";import{B as R}from"./Block-f95db830.js";import{S as Q}from"./SiteHeader-66b6ab4e.js";import{H as ee}from"./Headline-250e8b82.js";import{G as te}from"./GraphicBlock-1af1d726.js";import{B as Qe}from"./Byline-14f2730d.js";import{P as Xe}from"./PaddingReset-6a0440e6.js";import{b as K,w as Je}from"./withParams-47e2ab71.js";import"./ReutersLogo-56e66cec.js";import"./each-e59479a4.js";import"./index-2224dbf5.js";import"./time-f9db70de.js";import"./_commonjsHelpers-de833af9.js";import"./marked.esm-76161808.js";import"./journalize-07958dc6.js";const Ye=`Reuters Graphics headline with a Hero media

\`\`\`svelte
<script>
  import { HeroHeadline } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths'; // 👈 If using in the Graphics Kit...
<\/script>

<HeroHeadline
  img="{\`\${assets}/images/myImage.jpg\`}"
  hed="{'Reuters Graphics Interactive'}"
  dek="{'The beginning of a beautiful page'}"
  section="{'World News'}"
  authors="{['Simon Scarr', 'Vijdan Mohammad Kawoosa']}"
  publishTime="{new Date('2022-03-04').toISOString()}"
/>
\`\`\`
`,Ze=`Reuters Graphics headline with ai2svelte graphic as background.

\`\`\`svelte
<script>
  import { HeroHeadline } from '@reuters-graphics/graphics-components';
  import QuakeMap from './ai2svelte/graphic.svelte';
  import { assets } from '$app/paths';
<\/script>

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
`,et=`Reuters Graphics headline followed by a graphic or any media block.

\`\`\`svelte
<script>
  import { HeroHeadline } from '@reuters-graphics/graphics-components';
  import Map from './ai2svelte/graphic.svelte';
  import { assets } from '$app/paths';
<\/script>

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
      role="figure"
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
`,tt=`Make the hero full bleed and under the header.

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
`,it=`Add a cover video and position the title with ease.

\`\`\`svelte
<script>
  import { HeroHeadline } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths';
<\/script>

<HeroHeadline
  class="custom-hero"
  hed="The conflict in Ethiopia"
  hedSize="bigger"
  hedWidth="wide"
  authors="{['Aditi Bhandari ', 'David Lewis']}"
  publishTime="{new Date('2020-12-18').toISOString()}"
>
  <div slot="background">
    <GraphicBlock
      width="widest"
      role="figure"
      class="my-0"
      textWidth="normal"
      notes="Drone footage from the Village 8 refugee camp in Sudan."
      ariaDescription="Aerial footage of people houses in refugee camp"
    >
      <!-- svelte-ignore a11y-media-has-caption -->
      <video
        autoplay
        muted
        playsinline
        loop
        preload="true"
        width="100%"
        poster="video-poster.png"
        src="{assets}/videos/intro.mp4"
      >
      </video>
    </GraphicBlock>
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
`,st=`Add a custom styled headline.

\`\`\`svelte
<script>
  import { HeroHeadline } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths'; // 👈 If using in the Graphics Kit...
<\/script>

<HeroHeadline
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
`,Le=""+new URL("polar-03b9c9c8.jpg",import.meta.url).href,at=""+new URL("eurovis-8a6cd683.jpeg",import.meta.url).href;const nt=n=>({}),xe=n=>({}),lt=n=>({}),_e=n=>({}),ot=n=>({}),be=n=>({}),rt=n=>({}),we=n=>({}),pt=n=>({}),$e=n=>({});function ke(n){let e,i;return e=new R({props:{width:"fluid",class:"hero-headline background-hero fmt-0",$$slots:{default:[ht]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment)},m(t,s){b(e,t,s),i=!0},p(t,s){const a={};s&182270&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){i||(u(e.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function dt(n){let e,i;return e=new ee({props:{class:n[5]+" !text-"+n[7],width:n[8],section:n[10],hedSize:n[6],hed:n[4],dek:n[9]}}),{c(){_(e.$$.fragment)},m(t,s){b(e,t,s),i=!0},p(t,s){const a={};s&160&&(a.class=t[5]+" !text-"+t[7]),s&256&&(a.width=t[8]),s&1024&&(a.section=t[10]),s&64&&(a.hedSize=t[6]),s&16&&(a.hed=t[4]),s&512&&(a.dek=t[9]),e.$set(a)},i(t){i||(u(e.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function ct(n){let e,i;return e=new ee({props:{class:n[5]+" !text-"+n[7],width:n[8],section:n[10],hedSize:n[6],hed:n[4],dek:n[9],$$slots:{hed:[gt]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment)},m(t,s){b(e,t,s),i=!0},p(t,s){const a={};s&160&&(a.class=t[5]+" !text-"+t[7]),s&256&&(a.width=t[8]),s&1024&&(a.section=t[10]),s&64&&(a.hedSize=t[6]),s&16&&(a.hed=t[4]),s&512&&(a.dek=t[9]),s&131072&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){i||(u(e.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function gt(n){let e,i;const t=n[16].hed,s=O(t,n,n[17],$e);return{c(){e=T("div"),s&&s.c(),h(e,"slot","hed")},m(a,l){v(a,e,l),s&&s.m(e,null),i=!0},p(a,l){s&&s.p&&(!i||l&131072)&&E(s,t,a,a[17],i?F(t,a[17],l,pt):U(a[17]),$e)},i(a){i||(u(s,a),i=!0)},o(a){m(s,a),i=!1},d(a){a&&y(e),s&&s.d(a)}}}function ut(n){let e,i;return e=new te({props:{width:n[14],role:"img",class:"my-0",textWidth:"normal",notes:n[3],ariaDescription:n[2],$$slots:{default:[mt]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment)},m(t,s){b(e,t,s),i=!0},p(t,s){const a={};s&16384&&(a.width=t[14]),s&8&&(a.notes=t[3]),s&4&&(a.ariaDescription=t[2]),s&131074&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){i||(u(e.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function ft(n){let e;const i=n[16].background,t=O(i,n,n[17],we);return{c(){t&&t.c()},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&131072)&&E(t,i,s,s[17],e?F(i,s[17],a,rt):U(s[17]),we)},i(s){e||(u(t,s),e=!0)},o(s){m(t,s),e=!1},d(s){t&&t.d(s)}}}function mt(n){let e;return{c(){e=T("div"),h(e,"class","background-image svelte-19575jj"),q(e,"background-image","url("+n[1]+")")},m(i,t){v(i,e,t)},p(i,t){t&2&&q(e,"background-image","url("+i[1]+")")},d(i){i&&y(e)}}}function ht(n){let e,i,t,s,a,l,o;const r=[ct,dt],p=[];function g(c,$){return c[15].hed?0:1}e=g(n),i=p[e]=r[e](n);const x=[ft,ut],f=[];function A(c,$){return c[15].background?0:1}return a=A(n),l=f[a]=x[a](n),{c(){i.c(),t=H(),s=T("div"),l.c(),h(s,"class","graphic-container")},m(c,$){p[e].m(c,$),v(c,t,$),v(c,s,$),f[a].m(s,null),o=!0},p(c,$){let P=e;e=g(c),e===P?p[e].p(c,$):(G(),m(p[P],1,1,()=>{p[P]=null}),D(),i=p[e],i?i.p(c,$):(i=p[e]=r[e](c),i.c()),u(i,1),i.m(t.parentNode,t));let I=a;a=A(c),a===I?f[a].p(c,$):(G(),m(f[I],1,1,()=>{f[I]=null}),D(),l=f[a],l?l.p(c,$):(l=f[a]=x[a](c),l.c()),u(l,1),l.m(s,null))},i(c){o||(u(i),u(l),o=!0)},o(c){m(i),m(l),o=!1},d(c){c&&(y(t),y(s)),p[e].d(c),f[a].d()}}}function Ae(n){let e,i;return e=new R({props:{width:"fluid",class:"hero-headline inline-hero",$$slots:{default:[bt]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment)},m(t,s){b(e,t,s),i=!0},p(t,s){const a={};s&165872&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){i||(u(e.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function vt(n){let e,i;return e=new ee({props:{class:n[5]+" !text-"+n[7],width:n[8],section:n[10],hedSize:n[6],hed:n[4],dek:n[9]}}),{c(){_(e.$$.fragment)},m(t,s){b(e,t,s),i=!0},p(t,s){const a={};s&160&&(a.class=t[5]+" !text-"+t[7]),s&256&&(a.width=t[8]),s&1024&&(a.section=t[10]),s&64&&(a.hedSize=t[6]),s&16&&(a.hed=t[4]),s&512&&(a.dek=t[9]),e.$set(a)},i(t){i||(u(e.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function yt(n){let e,i;return e=new ee({props:{class:n[5]+" !text-"+n[7],width:n[8],section:n[10],hedSize:n[6],hed:n[4],dek:n[9],$$slots:{hed:[xt]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment)},m(t,s){b(e,t,s),i=!0},p(t,s){const a={};s&160&&(a.class=t[5]+" !text-"+t[7]),s&256&&(a.width=t[8]),s&1024&&(a.section=t[10]),s&64&&(a.hedSize=t[6]),s&16&&(a.hed=t[4]),s&512&&(a.dek=t[9]),s&131072&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){i||(u(e.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function xt(n){let e,i;const t=n[16].hed,s=O(t,n,n[17],be);return{c(){e=T("div"),s&&s.c(),h(e,"slot","hed")},m(a,l){v(a,e,l),s&&s.m(e,null),i=!0},p(a,l){s&&s.p&&(!i||l&131072)&&E(s,t,a,a[17],i?F(t,a[17],l,ot):U(a[17]),be)},i(a){i||(u(s,a),i=!0)},o(a){m(s,a),i=!1},d(a){a&&y(e),s&&s.d(a)}}}function _t(n){let e,i,t,s;const a=[yt,vt],l=[];function o(r,p){return r[15].hed?0:1}return e=o(n),i=l[e]=a[e](n),{c(){i.c(),t=re()},m(r,p){l[e].m(r,p),v(r,t,p),s=!0},p(r,p){let g=e;e=o(r),e===g?l[e].p(r,p):(G(),m(l[g],1,1,()=>{l[g]=null}),D(),i=l[e],i?i.p(r,p):(i=l[e]=a[e](r),i.c()),u(i,1),i.m(t.parentNode,t))},i(r){s||(u(i),s=!0)},o(r){m(i),s=!1},d(r){r&&y(t),l[e].d(r)}}}function bt(n){let e,i,t,s;e=new Xe({props:{containerIsFluid:!0,$$slots:{default:[_t]},$$scope:{ctx:n}}});const a=n[16].inline,l=O(a,n,n[17],_e);return{c(){_(e.$$.fragment),i=H(),t=T("div"),l&&l.c(),h(t,"class","graphic-container")},m(o,r){b(e,o,r),v(o,i,r),v(o,t,r),l&&l.m(t,null),s=!0},p(o,r){const p={};r&165872&&(p.$$scope={dirty:r,ctx:o}),e.$set(p),l&&l.p&&(!s||r&131072)&&E(l,a,o,o[17],s?F(a,o[17],r,lt):U(o[17]),_e)},i(o){s||(u(e.$$.fragment,o),u(l,o),s=!0)},o(o){m(e.$$.fragment,o),m(l,o),s=!1},d(o){o&&(y(i),y(t)),w(e,o),l&&l.d(o)}}}function wt(n){let e,i;return e=new Qe({props:{authors:n[11],publishTime:n[12],updateTime:n[13],align:"left"}}),{c(){_(e.$$.fragment)},m(t,s){b(e,t,s),i=!0},p(t,s){const a={};s&2048&&(a.authors=t[11]),s&4096&&(a.publishTime=t[12]),s&8192&&(a.updateTime=t[13]),e.$set(a)},i(t){i||(u(e.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function $t(n){let e;const i=n[16].byline,t=O(i,n,n[17],xe);return{c(){t&&t.c()},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&131072)&&E(t,i,s,s[17],e?F(i,s[17],a,nt):U(s[17]),xe)},i(s){e||(u(t,s),e=!0)},o(s){m(t,s),e=!1},d(s){t&&t.d(s)}}}function kt(n){let e,i,t,s,a,l,o,r,p=(n[15].background||n[1])&&ke(n),g=n[15].inline&&Ae(n);const x=[$t,wt],f=[];function A(c,$){return c[15].byline?0:c[11].length>0||c[12]?1:-1}return~(l=A(n))&&(o=f[l]=x[l](n)),{c(){e=T("div"),i=T("div"),p&&p.c(),t=H(),g&&g.c(),s=H(),a=T("div"),o&&o.c(),h(i,"class","hero-wrapper fmb-6 svelte-19575jj"),ye(i,"embedded",n[0]),h(a,"class","hero-byline fmb-6 svelte-19575jj"),q(e,"--heroHeight",n[0]?"850px":"100svh"),q(e,"display","contents")},m(c,$){v(c,e,$),W(e,i),p&&p.m(i,null),W(i,t),g&&g.m(i,null),W(e,s),W(e,a),~l&&f[l].m(a,null),r=!0},p(c,[$]){c[15].background||c[1]?p?(p.p(c,$),$&32770&&u(p,1)):(p=ke(c),p.c(),u(p,1),p.m(i,t)):p&&(G(),m(p,1,1,()=>{p=null}),D()),c[15].inline?g?(g.p(c,$),$&32768&&u(g,1)):(g=Ae(c),g.c(),u(g,1),g.m(i,null)):g&&(G(),m(g,1,1,()=>{g=null}),D()),(!r||$&1)&&ye(i,"embedded",c[0]);let P=l;l=A(c),l===P?~l&&f[l].p(c,$):(o&&(G(),m(f[P],1,1,()=>{f[P]=null}),D()),~l?(o=f[l],o?o.p(c,$):(o=f[l]=x[l](c),o.c()),u(o,1),o.m(a,null)):o=null),(!r||$&1)&&q(e,"--heroHeight",c[0]?"850px":"100svh")},i(c){r||(u(p),u(g),u(o),r=!0)},o(c){m(p),m(g),m(o),r=!1},d(c){c&&y(e),p&&p.d(),g&&g.d(),~l&&f[l].d()}}}function At(n,e,i){let{$$slots:t={},$$scope:s}=e;const a=qe(t);let{embedded:l=!1}=e,{img:o=null}=e,{ariaDescription:r=null}=e,{notes:p=null}=e,{hed:g="Reuters Graphics Interactive"}=e,{class:x=""}=e,{hedSize:f="normal"}=e,{hedAlign:A="center"}=e,{hedWidth:c="normal"}=e,{dek:$=null}=e,{section:P=null}=e,{authors:I=[]}=e,{publishTime:z=""}=e,{updateTime:N=""}=e,{width:j="widest"}=e;return n.$$set=k=>{"embedded"in k&&i(0,l=k.embedded),"img"in k&&i(1,o=k.img),"ariaDescription"in k&&i(2,r=k.ariaDescription),"notes"in k&&i(3,p=k.notes),"hed"in k&&i(4,g=k.hed),"class"in k&&i(5,x=k.class),"hedSize"in k&&i(6,f=k.hedSize),"hedAlign"in k&&i(7,A=k.hedAlign),"hedWidth"in k&&i(8,c=k.hedWidth),"dek"in k&&i(9,$=k.dek),"section"in k&&i(10,P=k.section),"authors"in k&&i(11,I=k.authors),"publishTime"in k&&i(12,z=k.publishTime),"updateTime"in k&&i(13,N=k.updateTime),"width"in k&&i(14,j=k.width),"$$scope"in k&&i(17,s=k.$$scope)},n.$$.update=()=>{n.$$.dirty&64},[l,o,r,p,g,x,f,A,c,$,P,I,z,N,j,a,t,s]}class B extends J{constructor(e){super(),Y(this,e,At,kt,Z,{embedded:0,img:1,ariaDescription:2,notes:3,hed:4,class:5,hedSize:6,hedAlign:7,hedWidth:8,dek:9,section:10,authors:11,publishTime:12,updateTime:13,width:14})}}B.__docgen={version:3,name:"Hero.svelte",data:[{keywords:[],visibility:"public",description:"Set to true for embeddables.",name:"embedded",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Path to background image",name:"img",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"ARIA description, passed in as a markdown string.",name:"ariaDescription",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Notes to the graphic, passed in as a markdown string.",name:"notes",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Headline, parsed as an _inline_ markdown string in an `h1` element.",name:"hed",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Reuters Graphics Interactive"},{visibility:"public",description:"Add extra classes to the block tag to target it with custom CSS.",keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Headline size",name:"hedSize",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Headline horizontal alignment",name:"hedAlign",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"center"},{keywords:[],visibility:"public",description:"Width of the headline.",name:"hedWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Dek, parsed as a markdown string.",name:"dek",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Section title",name:"section",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[],visibility:"public",description:"Array of author names, which will be slugified to create links to Reuters author pages",name:"authors",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Publish time as a datetime string.",name:"publishTime",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Update time as a datetime string.",name:"updateTime",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Width of the Hero graphic.",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"widest"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"Headline named slot",name:"hed"},{keywords:[],visibility:"public",description:"Hero graphic named slot",name:"background"},{keywords:[],visibility:"public",description:"Hero named slot",name:"inline"},{keywords:[],visibility:"public",description:"Custom byline/dateline",name:"byline"}],refs:[]};const Tt=""+new URL("CRASH_1-xs-e3451831.jpeg",import.meta.url).href,St=""+new URL("CRASH_1-sm-c0ca5527.jpeg",import.meta.url).href,Ht=""+new URL("CRASH_1-md-0a9d34cc.jpeg",import.meta.url).href,Pt=""+new URL("CRASH_1-lg-8fffc63f.jpeg",import.meta.url).href,Wt=""+new URL("CRASH_1-xl-670d0ed4.jpeg",import.meta.url).href,It=""+new URL("CRASH_1-xl_copy-1fd396d3.jpeg",import.meta.url).href;function Te(n){let e;return{c(){e=T("div"),e.innerHTML=`<div style="padding: 0 0 93.0303% 0;"></div> <div id="g-CRASH_1-xs-img" class="g-aiImg svelte-12cxoa9" alt="" style="${`background-image: url(${Tt});`}"></div> <div id="g-ai0-1" class="g-xs-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:18.0723%;margin-top:-14.5px;left:7.0539%;width:76px;"><p class="g-pstyle0 svelte-12cxoa9">Cruising at</p> <p class="g-pstyle0 svelte-12cxoa9">29,100 feet</p></div> <div id="g-ai0-2" class="g-xs-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:20.271%;margin-top:-21.2px;left:26.8941%;width:103px;"><p class="g-pstyle1 svelte-12cxoa9">2.21 pm</p> <p class="g-pstyle0 svelte-12cxoa9">Steep drop from</p> <p class="g-pstyle0 svelte-12cxoa9">27,025 feet</p></div> <div id="g-ai0-3" class="g-xs-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:42.7133%;margin-top:-15.1px;right:3.3749%;width:96px;"><p class="g-pstyle2 svelte-12cxoa9">Typical path to</p> <p class="g-pstyle2 svelte-12cxoa9">Guangzhou</p></div> <div id="g-ai0-4" class="g-xs-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:70.482%;margin-top:-15.4px;right:2.4487%;width:79px;"><p class="g-pstyle2 svelte-12cxoa9">Last known</p> <p class="g-pstyle2 svelte-12cxoa9">location</p></div> <div id="g-ai0-5" class="g-xs-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:87.4202%;margin-top:-15.4px;right:16.3453%;width:50px;"><p class="g-pstyle2 svelte-12cxoa9">Crash</p> <p class="g-pstyle2 svelte-12cxoa9">site</p></div>`,h(e,"id","g-CRASH_1-xs"),h(e,"class","g-artboard svelte-12cxoa9"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function Se(n){let e;return{c(){e=T("div"),e.innerHTML=`<div style="padding: 0 0 77.8431% 0;"></div> <div id="g-CRASH_1-sm-img" class="g-aiImg svelte-12cxoa9" alt="" style="${`background-image: url(${St});`}"></div> <div id="g-ai1-1" class="g-sm-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:17.3436%;margin-top:-16.9px;left:16.4992%;width:86px;"><p class="g-pstyle0 svelte-12cxoa9">Cruising at</p> <p class="g-pstyle0 svelte-12cxoa9">29,100 feet</p></div> <div id="g-ai1-2" class="g-sm-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:20.87%;margin-top:-24.9px;left:32.8523%;width:117px;"><p class="g-pstyle1 svelte-12cxoa9">2.21 pm</p> <p class="g-pstyle0 svelte-12cxoa9">Steep drop from</p> <p class="g-pstyle0 svelte-12cxoa9">27,025 feet</p></div> <div id="g-ai1-3" class="g-sm-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:43.9824%;margin-top:-17.6px;right:4.7685%;width:108px;"><p class="g-pstyle2 svelte-12cxoa9">Typical path to</p> <p class="g-pstyle2 svelte-12cxoa9">Guangzhou</p></div> <div id="g-ai1-4" class="g-sm-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:71.9421%;margin-top:-17.6px;right:4.6892%;width:89px;"><p class="g-pstyle2 svelte-12cxoa9">Last known</p> <p class="g-pstyle2 svelte-12cxoa9">location</p></div> <div id="g-ai1-5" class="g-sm-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:87.0554%;margin-top:-17.6px;right:19.7924%;width:55px;"><p class="g-pstyle2 svelte-12cxoa9">Crash</p> <p class="g-pstyle2 svelte-12cxoa9">site</p></div>`,h(e,"id","g-CRASH_1-sm"),h(e,"class","g-artboard svelte-12cxoa9"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function He(n){let e;return{c(){e=T("div"),e.innerHTML=`<div style="padding: 0 0 68.7879% 0;"></div> <div id="g-CRASH_1-md-img" class="g-aiImg svelte-12cxoa9" alt="" style="${`background-image: url(${Ht});`}"></div> <div id="g-ai2-1" class="g-md-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:17.1581%;margin-top:-13.9px;left:3.6766%;width:76px;"><p class="g-pstyle0 svelte-12cxoa9">Cruising at</p> <p class="g-pstyle0 svelte-12cxoa9">29,100 feet</p></div> <div id="g-ai2-2" class="g-md-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:20.0216%;margin-top:-13.9px;left:19.6076%;width:92px;"><p class="g-pstyle1 svelte-12cxoa9">2.20 pm</p> <p class="g-pstyle0 svelte-12cxoa9">Slight descent</p></div> <div id="g-ai2-3" class="g-md-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:24.1477%;margin-top:-20.6px;left:34.5493%;width:102px;"><p class="g-pstyle1 svelte-12cxoa9">2.21 pm</p> <p class="g-pstyle0 svelte-12cxoa9">Steep drop from</p> <p class="g-pstyle0 svelte-12cxoa9">27,025 feet</p></div> <div id="g-ai2-4" class="g-md-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:46.8149%;margin-top:-14.5px;right:2.8165%;width:95px;"><p class="g-pstyle2 svelte-12cxoa9">Typical path to</p> <p class="g-pstyle2 svelte-12cxoa9">Guangzhou</p></div> <div id="g-ai2-5" class="g-md-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:80.0748%;margin-top:-14.5px;left:84.28%;width:79px;"><p class="g-pstyle0 svelte-12cxoa9">Last known</p> <p class="g-pstyle0 svelte-12cxoa9">location</p></div> <div id="g-ai2-6" class="g-md-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:87.5638%;margin-top:-14.5px;right:22.3457%;width:86px;"><p class="g-pstyle2 svelte-12cxoa9">Approximate</p> <p class="g-pstyle2 svelte-12cxoa9">crash site</p></div>`,h(e,"id","g-CRASH_1-md"),h(e,"class","g-artboard svelte-12cxoa9"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function Pe(n){let e;return{c(){e=T("div"),e.innerHTML=`<div style="padding: 0 0 61.3978% 0;"></div> <div id="g-CRASH_1-lg-img" class="g-aiImg svelte-12cxoa9" alt="" style="${`background-image: url(${Pt});`}"></div> <div id="g-ai3-1" class="g-lg-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:16.9729%;margin-top:-17.9px;left:4.0448%;width:90px;"><p class="g-pstyle0 svelte-12cxoa9">Cruising at</p> <p class="g-pstyle0 svelte-12cxoa9">29,100 feet</p></div> <div id="g-ai3-2" class="g-lg-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:20.3004%;margin-top:-17.9px;left:27.525%;width:111px;"><p class="g-pstyle1 svelte-12cxoa9">2.20 pm</p> <p class="g-pstyle2 svelte-12cxoa9">Slight descent</p></div> <div id="g-ai3-3" class="g-lg-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:24.5911%;margin-top:-26.4px;left:40.9124%;width:124px;"><p class="g-pstyle1 svelte-12cxoa9">2.21 pm</p> <p class="g-pstyle2 svelte-12cxoa9">Steep drop from</p> <p class="g-pstyle2 svelte-12cxoa9">27,025 feet</p></div> <div id="g-ai3-4" class="g-lg-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:47.2373%;margin-top:-18.7px;right:2.986%;width:114px;"><p class="g-pstyle3 svelte-12cxoa9">Typical path to</p> <p class="g-pstyle3 svelte-12cxoa9">Guangzhou</p></div> <div id="g-ai3-5" class="g-lg-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:80.6874%;margin-top:-18.7px;left:85.4704%;width:94px;"><p class="g-pstyle2 svelte-12cxoa9">Last known</p> <p class="g-pstyle2 svelte-12cxoa9">location</p></div> <div id="g-ai3-6" class="g-lg-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:88.0429%;margin-top:-18.7px;right:20.5522%;width:102px;"><p class="g-pstyle3 svelte-12cxoa9">Approximate</p> <p class="g-pstyle3 svelte-12cxoa9">crash site</p></div>`,h(e,"id","g-CRASH_1-lg"),h(e,"class","g-artboard svelte-12cxoa9"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function We(n){let e;return{c(){e=T("div"),e.innerHTML=`<div style="padding: 0 0 47% 0;"></div> <div id="g-CRASH_1-xl-img" class="g-aiImg svelte-12cxoa9" alt="" style="${`background-image: url(${Wt});`}"></div> <div id="g-ai4-1" class="g-xl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:16.4851%;margin-top:-19px;left:21.0319%;width:95px;"><p class="g-pstyle0 svelte-12cxoa9">Cruising at</p> <p class="g-pstyle0 svelte-12cxoa9">29,100 feet</p></div> <div id="g-ai4-2" class="g-xl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:20.1977%;margin-top:-17.9px;left:38.5203%;width:111px;"><p class="g-pstyle1 svelte-12cxoa9">2.20 pm</p> <p class="g-pstyle2 svelte-12cxoa9">Slight descent</p></div> <div id="g-ai4-3" class="g-xl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:24.5417%;margin-top:-26.4px;left:48.8956%;width:124px;"><p class="g-pstyle1 svelte-12cxoa9">2.21 pm</p> <p class="g-pstyle2 svelte-12cxoa9">Steep drop from</p> <p class="g-pstyle2 svelte-12cxoa9">27,025 feet</p></div> <div id="g-ai4-4" class="g-xl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:53.1427%;margin-top:-18.7px;right:2.0477%;width:114px;"><p class="g-pstyle3 svelte-12cxoa9">Typical path to</p> <p class="g-pstyle3 svelte-12cxoa9">Guangzhou</p></div> <div id="g-ai4-5" class="g-xl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:81.3342%;margin-top:-18.7px;left:83.4281%;width:94px;"><p class="g-pstyle2 svelte-12cxoa9">Last known</p> <p class="g-pstyle2 svelte-12cxoa9">location</p></div> <div id="g-ai4-6" class="g-xl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:88.781%;margin-top:-18.7px;right:21.2395%;width:102px;"><p class="g-pstyle3 svelte-12cxoa9">Approximate</p> <p class="g-pstyle3 svelte-12cxoa9">crash site</p></div>`,h(e,"id","g-CRASH_1-xl"),h(e,"class","g-artboard svelte-12cxoa9"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function Ie(n){let e;return{c(){e=T("div"),e.innerHTML=`<div style="padding: 0 0 46.8889% 0;"></div> <div id="g-CRASH_1-xl_copy-img" class="g-aiImg svelte-12cxoa9" alt="" style="${`background-image: url(${It});`}"></div> <div id="g-ai5-1" class="g-xxl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:13.5823%;margin-top:-19px;left:17.5449%;width:95px;"><p class="g-pstyle0 svelte-12cxoa9">Cruising at</p> <p class="g-pstyle0 svelte-12cxoa9">29,100 feet</p></div> <div id="g-ai5-2" class="g-xxl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:16.11%;margin-top:-19px;left:34.2801%;width:117px;"><p class="g-pstyle1 svelte-12cxoa9">2.20 pm</p> <p class="g-pstyle0 svelte-12cxoa9">Slight descent</p></div> <div id="g-ai5-3" class="g-xxl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:20.5333%;margin-top:-28px;left:45.3329%;width:130px;"><p class="g-pstyle1 svelte-12cxoa9">2.21 pm</p> <p class="g-pstyle0 svelte-12cxoa9">Steep drop from</p> <p class="g-pstyle0 svelte-12cxoa9">27,025 feet</p></div> <div id="g-ai5-4" class="g-xxl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:51.1596%;margin-top:-19.8px;right:2.3384%;width:121px;"><p class="g-pstyle2 svelte-12cxoa9">Typical path to</p> <p class="g-pstyle2 svelte-12cxoa9">Guangzhou</p></div> <div id="g-ai5-5" class="g-xxl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:81.3333%;margin-top:-19.8px;left:82.1208%;width:98px;"><p class="g-pstyle0 svelte-12cxoa9">Last known</p> <p class="g-pstyle0 svelte-12cxoa9">location</p></div> <div id="g-ai5-6" class="g-xxl-text g-aiAbs g-aiPointText svelte-12cxoa9" style="top:89.3902%;margin-top:-19.8px;right:22.7998%;width:108px;"><p class="g-pstyle2 svelte-12cxoa9">Approximate</p> <p class="g-pstyle2 svelte-12cxoa9">crash site</p></div>`,h(e,"id","g-CRASH_1-xl_copy"),h(e,"class","g-artboard svelte-12cxoa9"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function Gt(n){let e,i,t,s,a,l,o,r=n[0]&&n[0]>=0&&n[0]<510&&Te(),p=n[0]&&n[0]>=510&&n[0]<660&&Se(),g=n[0]&&n[0]>=660&&n[0]<930&&He(),x=n[0]&&n[0]>=930&&n[0]<1200&&Pe(),f=n[0]&&n[0]>=1200&&n[0]<1350&&We(),A=n[0]&&n[0]>=1350&&Ie();return{c(){e=T("div"),r&&r.c(),i=H(),p&&p.c(),t=H(),g&&g.c(),s=H(),x&&x.c(),a=H(),f&&f.c(),l=H(),A&&A.c(),h(e,"id","g-CRASH_1-box"),h(e,"class","svelte-12cxoa9"),Me(()=>n[2].call(e))},m(c,$){v(c,e,$),r&&r.m(e,null),W(e,i),p&&p.m(e,null),W(e,t),g&&g.m(e,null),W(e,s),x&&x.m(e,null),W(e,a),f&&f.m(e,null),W(e,l),A&&A.m(e,null),o=ze(e,n[2].bind(e))},p(c,[$]){c[0]&&c[0]>=0&&c[0]<510?r||(r=Te(),r.c(),r.m(e,i)):r&&(r.d(1),r=null),c[0]&&c[0]>=510&&c[0]<660?p||(p=Se(),p.c(),p.m(e,t)):p&&(p.d(1),p=null),c[0]&&c[0]>=660&&c[0]<930?g||(g=He(),g.c(),g.m(e,s)):g&&(g.d(1),g=null),c[0]&&c[0]>=930&&c[0]<1200?x||(x=Pe(),x.c(),x.m(e,a)):x&&(x.d(1),x=null),c[0]&&c[0]>=1200&&c[0]<1350?f||(f=We(),f.c(),f.m(e,l)):f&&(f.d(1),f=null),c[0]&&c[0]>=1350?A||(A=Ie(),A.c(),A.m(e,null)):A&&(A.d(1),A=null)},i:L,o:L,d(c){c&&y(e),r&&r.d(),p&&p.d(),g&&g.d(),x&&x.d(),f&&f.d(),A&&A.d(),o()}}}function Dt(n,e,i){let{assetsPath:t="./"}=e,s=null;function a(){s=this.clientWidth,i(0,s)}return n.$$set=l=>{"assetsPath"in l&&i(1,t=l.assetsPath)},[s,t,a]}class le extends J{constructor(e){super(),Y(this,e,Dt,Gt,Z,{assetsPath:1})}}le.__docgen={version:3,name:"crash.svelte",data:[{visibility:"public",description:null,keywords:[],name:"assetsPath",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"./"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Bt=""+new URL("quake-map-top-xs-bcd1bf0d.jpeg",import.meta.url).href,Ct=""+new URL("quake-map-top-sm-35f63447.jpeg",import.meta.url).href,Rt=""+new URL("quake-map-top-md-56188f42.jpeg",import.meta.url).href,Mt=""+new URL("quake-map-top-lg-eba813c5.jpeg",import.meta.url).href,zt=""+new URL("quake-map-top-xl-2adbd119.jpeg",import.meta.url).href;function Ge(n){let e;return{c(){e=T("div"),e.innerHTML=`<div style="padding: 0 0 117.5758% 0;"></div> <div id="g-quake-map-top-xs-img" class="g-aiImg svelte-11uc9ua" alt="" style="${`background-image: url(${Bt});`}"></div> <div id="g-ai0-1" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:-1.3529%;margin-top:-6.8px;left:33.0848%;width:46px;"><p class="g-pstyle0 svelte-11uc9ua">Kabul</p></div> <div id="g-ai0-2" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:4.3062%;margin-top:-7.7px;left:4.0902%;width:65px;"><p class="g-pstyle1 svelte-11uc9ua">Shaking</p></div> <div id="g-ai0-3" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:8.1722%;margin-top:-7.7px;left:4.0902%;width:78px;"><p class="g-pstyle2 svelte-11uc9ua">Very strong</p></div> <div id="g-ai0-4" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:19.5124%;margin-top:-7.7px;left:4.0902%;width:49px;"><p class="g-pstyle2 svelte-11uc9ua">Weak</p></div> <div id="g-ai0-5" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:22.4511%;margin-top:-5.1px;left:45.2353%;margin-left:-74px;width:148px;"><p class="g-pstyle3 svelte-11uc9ua">AFGHANISTAN</p></div> <div id="g-ai0-6" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:29.7371%;margin-top:-8.4px;left:34.8676%;width:56px;"><p class="g-pstyle4 svelte-11uc9ua">Gardez</p></div> <div id="g-ai0-7" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:39.2732%;margin-top:-8.4px;left:65.8508%;width:50px;"><p class="g-pstyle4 svelte-11uc9ua">Khost</p></div> <div id="g-ai0-8" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:45.9742%;margin-top:-8.4px;left:46.1799%;width:73px;"><p class="g-pstyle5 svelte-11uc9ua">Epicentre</p></div> <div id="g-ai0-9" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:49.8402%;margin-top:-8.4px;left:93.2747%;margin-left:-27px;width:54px;"><p class="g-pstyle6 svelte-11uc9ua">Bannu</p></div> <div id="g-ai0-10" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:63.4369%;margin-top:-5.1px;left:65.9996%;margin-left:-50px;width:100px;"><p class="g-pstyle7 svelte-11uc9ua">PAKISTAN</p></div>`,h(e,"id","g-quake-map-top-xs"),h(e,"class","g-artboard svelte-11uc9ua"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function De(n){let e;return{c(){e=T("div"),e.innerHTML=`<div style="padding: 0 0 83.5294% 0;"></div> <div id="g-quake-map-top-sm-img" class="g-aiImg svelte-11uc9ua" alt="" style="${`background-image: url(${Ct});`}"></div> <div id="g-ai1-1" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:5.3132%;margin-top:-8.6px;left:3.5997%;width:71px;"><p class="g-pstyle0 svelte-11uc9ua">Shaking</p></div> <div id="g-ai1-2" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:9.3038%;margin-top:-8.6px;left:3.5997%;width:86px;"><p class="g-pstyle1 svelte-11uc9ua">Very strong</p></div> <div id="g-ai1-3" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:18.8592%;margin-top:-5.3px;left:41.2699%;margin-left:-91.5px;width:183px;"><p class="g-pstyle2 svelte-11uc9ua">AFGHANISTAN</p></div> <div id="g-ai1-4" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:21.2757%;margin-top:-8.6px;left:3.5997%;width:53px;"><p class="g-pstyle1 svelte-11uc9ua">Weak</p></div> <div id="g-ai1-5" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:30.6101%;margin-top:-9.4px;left:40.186%;width:61px;"><p class="g-pstyle3 svelte-11uc9ua">Gardez</p></div> <div id="g-ai1-6" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:34.8355%;margin-top:-9.4px;left:9.9042%;width:60px;"><p class="g-pstyle3 svelte-11uc9ua">Ghazni</p></div> <div id="g-ai1-7" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:40.4693%;margin-top:-9.4px;left:63.0024%;width:54px;"><p class="g-pstyle3 svelte-11uc9ua">Khost</p></div> <div id="g-ai1-8" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:47.2768%;margin-top:-9.4px;left:48.5165%;width:80px;"><p class="g-pstyle4 svelte-11uc9ua">Epicentre</p></div> <div id="g-ai1-9" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:50.7979%;margin-top:-9.4px;left:82.1761%;margin-left:-29px;width:58px;"><p class="g-pstyle5 svelte-11uc9ua">Bannu</p></div> <div id="g-ai1-10" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:68.3897%;margin-top:-5.3px;left:73.6919%;margin-left:-67.5px;width:135px;"><p class="g-pstyle2 svelte-11uc9ua">PAKISTAN</p></div>`,h(e,"id","g-quake-map-top-sm"),h(e,"class","g-artboard svelte-11uc9ua"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function Be(n){let e;return{c(){e=T("div"),e.innerHTML=`<div style="padding: 0 0 91.8182% 0;"></div> <div id="g-quake-map-top-md-img" class="g-aiImg svelte-11uc9ua" alt="" style="${`background-image: url(${Rt});`}"></div> <div id="g-ai2-1" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:3.5477%;margin-top:-7.5px;left:2.6635%;width:62px;"><p class="g-pstyle0 svelte-11uc9ua">Shaking</p></div> <div id="g-ai2-2" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:6.188%;margin-top:-7.5px;left:2.6635%;width:74px;"><p class="g-pstyle1 svelte-11uc9ua">Very strong</p></div> <div id="g-ai2-3" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:7.0759%;margin-top:-6.9px;right:6.4574%;width:100px;"><p class="g-pstyle2 svelte-11uc9ua">Afghanistan</p></div> <div id="g-ai2-4" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:15.2639%;margin-top:-7.5px;left:2.6635%;width:47px;"><p class="g-pstyle1 svelte-11uc9ua">Weak</p></div> <div id="g-ai2-5" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:18.7377%;margin-top:-7.6px;left:38.071%;margin-left:-136.5px;width:273px;"><p class="g-pstyle3 svelte-11uc9ua">AFGHANISTAN</p></div> <div id="g-ai2-6" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:30.2476%;margin-top:-10.3px;left:38.0816%;width:63px;"><p class="g-pstyle4 svelte-11uc9ua">Gardez</p></div> <div id="g-ai2-7" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:33.8779%;margin-top:-10.3px;left:9.3056%;margin-left:-31px;width:62px;"><p class="g-pstyle5 svelte-11uc9ua">Ghazni</p></div> <div id="g-ai2-8" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:40.1486%;margin-top:-10.3px;left:63.0563%;width:55px;"><p class="g-pstyle4 svelte-11uc9ua">Khost</p></div> <div id="g-ai2-9" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:47.1569%;margin-top:-10.8px;left:47.4444%;width:86px;"><p class="g-pstyle6 svelte-11uc9ua">Epicentre</p></div> <div id="g-ai2-10" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:50.8746%;margin-top:-10.3px;left:84.5785%;margin-left:-30px;width:60px;"><p class="g-pstyle5 svelte-11uc9ua">Bannu</p></div> <div id="g-ai2-11" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:62.467%;margin-top:-7.6px;left:80.6735%;margin-left:-100px;width:200px;"><p class="g-pstyle3 svelte-11uc9ua">PAKISTAN</p></div>`,h(e,"id","g-quake-map-top-md"),h(e,"class","g-artboard svelte-11uc9ua"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function Ce(n){let e;return{c(){e=T("div"),e.innerHTML=`<div style="padding: 0 0 55.1667% 0;"></div> <div id="g-quake-map-top-lg-img" class="g-aiImg svelte-11uc9ua" alt="" style="${`background-image: url(${Mt});`}"></div> <div id="g-ai3-1" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:4.1944%;margin-top:-8.8px;left:1.7817%;width:67px;"><p class="g-pstyle0 svelte-11uc9ua">Shaking</p></div> <div id="g-ai3-2" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:6.9135%;margin-top:-8.8px;left:1.7817%;width:81px;"><p class="g-pstyle1 svelte-11uc9ua">Very strong</p></div> <div id="g-ai3-3" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:7.006%;margin-top:-7.4px;right:4.4122%;width:100px;"><p class="g-pstyle2 svelte-11uc9ua">Afghanistan</p></div> <div id="g-ai3-4" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:14.111%;margin-top:-8.4px;left:29.9587%;margin-left:-151px;width:302px;"><p class="g-pstyle3 svelte-11uc9ua">AFGHANISTAN</p></div> <div id="g-ai3-5" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:16.128%;margin-top:-8.8px;left:1.7818%;width:51px;"><p class="g-pstyle1 svelte-11uc9ua">Weak</p></div> <div id="g-ai3-6" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:28.2991%;margin-top:-11.3px;left:44.1554%;width:67px;"><p class="g-pstyle4 svelte-11uc9ua">Gardez</p></div> <div id="g-ai3-7" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:31.9244%;margin-top:-11.3px;left:26.4286%;margin-left:-33px;width:66px;"><p class="g-pstyle5 svelte-11uc9ua">Ghazni</p></div> <div id="g-ai3-8" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:37.676%;margin-top:-8.4px;left:85.4421%;margin-left:-110.5px;width:221px;"><p class="g-pstyle3 svelte-11uc9ua">PAKISTAN</p></div> <div id="g-ai3-9" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:38.42%;margin-top:-11.3px;left:59.5142%;width:59px;"><p class="g-pstyle4 svelte-11uc9ua">Khost</p></div> <div id="g-ai3-10" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:45.5991%;margin-top:-11.9px;left:49.9132%;width:94px;"><p class="g-pstyle6 svelte-11uc9ua">Epicentre</p></div> <div id="g-ai3-11" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:53.9788%;margin-top:-11.3px;left:72.7294%;margin-left:-32px;width:64px;"><p class="g-pstyle5 svelte-11uc9ua">Bannu</p></div>`,h(e,"id","g-quake-map-top-lg"),h(e,"class","g-artboard svelte-11uc9ua"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function Re(n){let e;return{c(){e=T("div"),e.innerHTML=`<div style="padding: 0 0 51.2308% 0;"></div> <div id="g-quake-map-top-xl-img" class="g-aiImg svelte-11uc9ua" alt="" style="${`background-image: url(${zt});`}"></div> <div id="g-ai4-1" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:3.8689%;margin-top:-8.8px;left:1.5293%;width:67px;"><p class="g-pstyle0 svelte-11uc9ua">Shaking</p></div> <div id="g-ai4-2" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:6.063%;margin-top:-7.4px;right:4.342%;width:100px;"><p class="g-pstyle1 svelte-11uc9ua">Afghanistan</p></div> <div id="g-ai4-3" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:6.5716%;margin-top:-8.8px;left:1.5293%;width:81px;"><p class="g-pstyle2 svelte-11uc9ua">Very strong</p></div> <div id="g-ai4-4" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:13.726%;margin-top:-8.4px;left:30.8465%;margin-left:-151px;width:302px;"><p class="g-pstyle3 svelte-11uc9ua">AFGHANISTAN</p></div> <div id="g-ai4-5" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:15.7308%;margin-top:-8.8px;left:1.5294%;width:51px;"><p class="g-pstyle2 svelte-11uc9ua">Weak</p></div> <div id="g-ai4-6" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:27.8288%;margin-top:-11.3px;left:43.9511%;width:67px;"><p class="g-pstyle4 svelte-11uc9ua">Gardez</p></div> <div id="g-ai4-7" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:31.4324%;margin-top:-11.3px;left:27.588%;margin-left:-33px;width:66px;"><p class="g-pstyle5 svelte-11uc9ua">Ghazni</p></div> <div id="g-ai4-8" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:37.1494%;margin-top:-8.4px;left:82.0619%;margin-left:-110.5px;width:221px;"><p class="g-pstyle3 svelte-11uc9ua">PAKISTAN</p></div> <div id="g-ai4-9" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:37.8889%;margin-top:-11.3px;left:58.1285%;width:59px;"><p class="g-pstyle4 svelte-11uc9ua">Khost</p></div> <div id="g-ai4-10" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:45.025%;margin-top:-11.9px;left:49.2661%;width:94px;"><p class="g-pstyle6 svelte-11uc9ua">Epicentre</p></div> <div id="g-ai4-11" class="g-tt g-aiAbs g-aiPointText svelte-11uc9ua" style="top:53.3543%;margin-top:-11.3px;left:70.3271%;margin-left:-32px;width:64px;"><p class="g-pstyle5 svelte-11uc9ua">Bannu</p></div>`,h(e,"id","g-quake-map-top-xl"),h(e,"class","g-artboard svelte-11uc9ua"),h(e,"style","")},m(i,t){v(i,e,t)},d(i){i&&y(e)}}}function jt(n){let e,i,t,s,a,l,o=n[0]&&n[0]>=0&&n[0]<510&&Ge(),r=n[0]&&n[0]>=510&&n[0]<660&&De(),p=n[0]&&n[0]>=660&&n[0]<1200&&Be(),g=n[0]&&n[0]>=1200&&n[0]<1300&&Ce(),x=n[0]&&n[0]>=1300&&Re();return{c(){e=T("div"),o&&o.c(),i=H(),r&&r.c(),t=H(),p&&p.c(),s=H(),g&&g.c(),a=H(),x&&x.c(),h(e,"id","g-quake-map-top-box"),h(e,"class","svelte-11uc9ua"),Me(()=>n[2].call(e))},m(f,A){v(f,e,A),o&&o.m(e,null),W(e,i),r&&r.m(e,null),W(e,t),p&&p.m(e,null),W(e,s),g&&g.m(e,null),W(e,a),x&&x.m(e,null),l=ze(e,n[2].bind(e))},p(f,[A]){f[0]&&f[0]>=0&&f[0]<510?o||(o=Ge(),o.c(),o.m(e,i)):o&&(o.d(1),o=null),f[0]&&f[0]>=510&&f[0]<660?r||(r=De(),r.c(),r.m(e,t)):r&&(r.d(1),r=null),f[0]&&f[0]>=660&&f[0]<1200?p||(p=Be(),p.c(),p.m(e,s)):p&&(p.d(1),p=null),f[0]&&f[0]>=1200&&f[0]<1300?g||(g=Ce(),g.c(),g.m(e,a)):g&&(g.d(1),g=null),f[0]&&f[0]>=1300?x||(x=Re(),x.c(),x.m(e,null)):x&&(x.d(1),x=null)},i:L,o:L,d(f){f&&y(e),o&&o.d(),r&&r.d(),p&&p.d(),g&&g.d(),x&&x.d(),l()}}}function Vt(n,e,i){let{assetsPath:t="./"}=e,s=null;function a(){s=this.clientWidth,i(0,s)}return n.$$set=l=>{"assetsPath"in l&&i(1,t=l.assetsPath)},[s,t,a]}class oe extends J{constructor(e){super(),Y(this,e,Vt,jt,Z,{assetsPath:1})}}oe.__docgen={version:3,name:"quakemap.svelte",data:[{visibility:"public",description:null,keywords:[],name:"assetsPath",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"./"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Lt(n){let e,i;return e=new Q({}),{c(){_(e.$$.fragment)},m(t,s){b(e,t,s),i=!0},i(t){i||(u(e.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function Nt(n){let e,i,t,s;e=new R({props:{width:"fluid",$$slots:{default:[Lt]},$$scope:{ctx:n}}});const a=[n[1]];let l={};for(let o=0;o<a.length;o+=1)l=C(l,a[o]);return t=new B({props:l}),{c(){_(e.$$.fragment),i=H(),_(t.$$.fragment)},m(o,r){b(e,o,r),v(o,i,r),b(t,o,r),s=!0},p(o,r){const p={};r&4&&(p.$$scope={dirty:r,ctx:o}),e.$set(p);const g=r&2?je(a,[Ve(o[1])]):{};t.$set(g)},i(o){s||(u(e.$$.fragment,o),u(t.$$.fragment,o),s=!0)},o(o){m(e.$$.fragment,o),m(t.$$.fragment,o),s=!1},d(o){o&&y(i),w(e,o),w(t,o)}}}function Kt(n){let e,i;return e=new Q({}),{c(){_(e.$$.fragment)},m(t,s){b(e,t,s),i=!0},i(t){i||(u(e.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function qt(n){let e,i,t,s,a;return i=new R({props:{width:"fluid",$$slots:{default:[Kt]},$$scope:{ctx:n}}}),s=new B({props:{section:"World News",hed:"Reuters Graphics Interactive",dek:"The beginning of a beautiful page",authors:["Simon Scarr","Vijdan Mohammad Kawoosa"],publishTime:new Date("2022-03-04").toISOString(),img:Le}}),{c(){e=T("div"),_(i.$$.fragment),t=H(),_(s.$$.fragment),h(e,"class","transparent-header svelte-u6gdb6")},m(l,o){v(l,e,o),b(i,e,null),W(e,t),b(s,e,null),a=!0},p(l,o){const r={};o&4&&(r.$$scope={dirty:o,ctx:l}),i.$set(r)},i(l){a||(u(i.$$.fragment,l),u(s.$$.fragment,l),a=!0)},o(l){m(i.$$.fragment,l),m(s.$$.fragment,l),a=!1},d(l){l&&y(e),w(i),w(s)}}}function Ot(n){let e,i;return e=new Q({}),{c(){_(e.$$.fragment)},m(t,s){b(e,t,s),i=!0},i(t){i||(u(e.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function Et(n){let e,i,t;var s=oe;function a(l,o){return{}}return s&&(e=X(s,a())),{c(){e&&_(e.$$.fragment),i=re()},m(l,o){e&&b(e,l,o),v(l,i,o),t=!0},p(l,o){if(s!==(s=oe)){if(e){G();const r=e;m(r.$$.fragment,1,0,()=>{w(r,1)}),D()}s?(e=X(s,a()),_(e.$$.fragment),u(e.$$.fragment,1),b(e,i.parentNode,i)):e=null}},i(l){t||(e&&u(e.$$.fragment,l),t=!0)},o(l){e&&m(e.$$.fragment,l),t=!1},d(l){l&&y(i),e&&w(e,l)}}}function Ut(n){let e,i,t;return i=new te({props:{width:"widest",role:"figure",class:"my-0",textWidth:"normal",notes:"",ariaDescription:"Earthquake impact map",$$slots:{default:[Et]},$$scope:{ctx:n}}}),{c(){e=T("div"),_(i.$$.fragment),h(e,"slot","background")},m(s,a){v(s,e,a),b(i,e,null),t=!0},p(s,a){const l={};a&4&&(l.$$scope={dirty:a,ctx:s}),i.$set(l)},i(s){t||(u(i.$$.fragment,s),t=!0)},o(s){m(i.$$.fragment,s),t=!1},d(s){s&&y(e),w(i)}}}function Ft(n){let e,i,t,s,a,l;return e=new R({props:{width:"fluid",$$slots:{default:[Ot]},$$scope:{ctx:n}}}),t=new B({props:{hed:"Earthquake devastates Afghanistan",hedSize:"big",hedWidth:"wide",class:"custom-hero mb-0",dek:"",authors:["Anand Katakam","Vijdan Mohammad Kawoosa","Adolfo Arranz","Wen Foo","Simon Scarr","Aman Bhargava","Jitesh Chowdhury","Manas Sharma","Aditi Bhandari"],publishTime:new Date("2022-06-24").toISOString(),$$slots:{background:[Ut]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment),i=H(),_(t.$$.fragment),s=H(),a=T("style"),a.textContent=`.hero-wrapper {
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
}`,h(a,"lang","scss")},m(o,r){b(e,o,r),v(o,i,r),b(t,o,r),v(o,s,r),v(o,a,r),l=!0},p(o,r){const p={};r&4&&(p.$$scope={dirty:r,ctx:o}),e.$set(p);const g={};r&4&&(g.$$scope={dirty:r,ctx:o}),t.$set(g)},i(o){l||(u(e.$$.fragment,o),u(t.$$.fragment,o),l=!0)},o(o){m(e.$$.fragment,o),m(t.$$.fragment,o),l=!1},d(o){o&&(y(i),y(s),y(a)),w(e,o),w(t,o)}}}function Qt(n){let e,i;return e=new Q({}),{c(){_(e.$$.fragment)},m(t,s){b(e,t,s),i=!0},i(t){i||(u(e.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function Xt(n){let e,i;return{c(){e=T("video"),e.innerHTML="",e.autoplay=!0,e.muted=!0,e.playsInline=!0,e.loop=!0,h(e,"preload","true"),h(e,"width","100%"),h(e,"poster","video-poster.png"),Oe(e.src,i="https://vm.reuters.tv/9c72e/titlef2ac(425954_R21MP41500).mp4")||h(e,"src",i)},m(t,s){v(t,e,s)},p:L,d(t){t&&y(e)}}}function Jt(n){let e,i,t;return i=new te({props:{width:"widest",role:"figure",class:"my-0",textWidth:"normal",notes:"Drone footage from the Village 8 refugee camp in Sudan.",ariaDescription:"Aerial footage of people houses in refugee camp",$$slots:{default:[Xt]},$$scope:{ctx:n}}}),{c(){e=T("div"),_(i.$$.fragment),h(e,"slot","background")},m(s,a){v(s,e,a),b(i,e,null),t=!0},p(s,a){const l={};a&4&&(l.$$scope={dirty:a,ctx:s}),i.$set(l)},i(s){t||(u(i.$$.fragment,s),t=!0)},o(s){m(i.$$.fragment,s),t=!1},d(s){s&&y(e),w(i)}}}function Yt(n){let e,i,t,s,a,l;return e=new R({props:{width:"fluid",$$slots:{default:[Qt]},$$scope:{ctx:n}}}),t=new B({props:{class:"video-hero",hed:"The conflict in Ethiopia",hedSize:"bigger",hedWidth:"wide",authors:["Aditi Bhandari ","David Lewis"],publishTime:new Date("2020-12-18").toISOString(),$$slots:{background:[Jt]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment),i=H(),_(t.$$.fragment),s=H(),a=T("style"),a.textContent=`.hero-wrapper {
  --heroHeight: calc(100svh - 60px);
}
.hero-wrapper .video-hero.headline header {
  top: calc(50svh - 250px);
}
.hero-wrapper .video-hero.headline h1 {
  color: #ffd430;
  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
}`,h(a,"lang","scss")},m(o,r){b(e,o,r),v(o,i,r),b(t,o,r),v(o,s,r),v(o,a,r),l=!0},p(o,r){const p={};r&4&&(p.$$scope={dirty:r,ctx:o}),e.$set(p);const g={};r&4&&(g.$$scope={dirty:r,ctx:o}),t.$set(g)},i(o){l||(u(e.$$.fragment,o),u(t.$$.fragment,o),l=!0)},o(o){m(e.$$.fragment,o),m(t.$$.fragment,o),l=!1},d(o){o&&(y(i),y(s),y(a)),w(e,o),w(t,o)}}}function Zt(n){let e,i;return e=new Q({}),{c(){_(e.$$.fragment)},m(t,s){b(e,t,s),i=!0},i(t){i||(u(e.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function ei(n){let e,i,t;var s=le;function a(l,o){return{}}return s&&(e=X(s,a())),{c(){e&&_(e.$$.fragment),i=re()},m(l,o){e&&b(e,l,o),v(l,i,o),t=!0},p(l,o){if(s!==(s=le)){if(e){G();const r=e;m(r.$$.fragment,1,0,()=>{w(r,1)}),D()}s?(e=X(s,a()),_(e.$$.fragment),u(e.$$.fragment,1),b(e,i.parentNode,i)):e=null}},i(l){t||(e&&u(e.$$.fragment,l),t=!0)},o(l){e&&m(e.$$.fragment,l),t=!1},d(l){l&&y(i),e&&w(e,l)}}}function ti(n){let e,i,t;return i=new te({props:{width:"widest",role:"figure",class:"my-0",textWidth:"normal",notes:"Source: Satellite image from Google, Maxar Technologies, CNES/Airbus, Landsat/Copernicus",ariaDescription:"Aerial map showing trajectory of crash",$$slots:{default:[ei]},$$scope:{ctx:n}}}),{c(){e=T("div"),_(i.$$.fragment),h(e,"slot","inline")},m(s,a){v(s,e,a),b(i,e,null),t=!0},p(s,a){const l={};a&4&&(l.$$scope={dirty:a,ctx:s}),i.$set(l)},i(s){t||(u(i.$$.fragment,s),t=!0)},o(s){m(i.$$.fragment,s),t=!1},d(s){s&&y(e),w(i)}}}function ii(n){let e,i,t,s;return e=new R({props:{width:"fluid",$$slots:{default:[Zt]},$$scope:{ctx:n}}}),t=new B({props:{hed:"The plunge from 29,000 feet",hedWidth:"wide",class:"mb-0",dek:"How China Eastern Airlines flight MU5735 went from an uneventful flight at cruising altitude to disaster in just minutes.",section:"Global news",authors:["Simon Scarr","Vijdan Mohammad Kawoosa"],publishTime:new Date("2020-01-01").toISOString(),$$slots:{inline:[ti]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment),i=H(),_(t.$$.fragment)},m(a,l){b(e,a,l),v(a,i,l),b(t,a,l),s=!0},p(a,l){const o={};l&4&&(o.$$scope={dirty:l,ctx:a}),e.$set(o);const r={};l&4&&(r.$$scope={dirty:l,ctx:a}),t.$set(r)},i(a){s||(u(e.$$.fragment,a),u(t.$$.fragment,a),s=!0)},o(a){m(e.$$.fragment,a),m(t.$$.fragment,a),s=!1},d(a){a&&y(i),w(e,a),w(t,a)}}}function si(n){let e;return{c(){e=T("h1"),e.innerHTML='<div class="body-note">A visual guide to</div> <div class="title text-6xl font-light tracking-widest">EUROVISION</div>',h(e,"slot","hed")},m(i,t){v(i,e,t)},p:L,d(i){i&&y(e)}}}function ai(n){let e,i,t,s;return e=new B({props:{class:"custom-hed",authors:["Prasanta Kumar Dutta","Dea Bankova","Aditi Bhandari","Anurag Rao"],publishTime:new Date("2023-05-11").toISOString(),img:at,$$slots:{hed:[si]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment),i=H(),t=T("style"),t.textContent=`.custom-hed h1 .body-note {
  color: #ffffff;
}
.custom-hed h1 .title {
  color: #ffffff;
  text-shadow: 1px 1px 8px #ff7c88;
  filter: drop-shadow(0px 0px 12px #ff7c88);
}`,h(t,"lang","scss")},m(a,l){b(e,a,l),v(a,i,l),v(a,t,l),s=!0},p(a,l){const o={};l&4&&(o.$$scope={dirty:l,ctx:a}),e.$set(o)},i(a){s||(u(e.$$.fragment,a),s=!0)},o(a){m(e.$$.fragment,a),s=!1},d(a){a&&(y(i),y(t)),w(e,a)}}}function ni(n){let e,i,t,s,a,l,o,r,p,g,x,f,A,c,$,P;const I=[{title:"Components/HeroHeadline"},{component:B},n[0]];let z={};for(let d=0;d<I.length;d+=1)z=C(z,I[d]);e=new Ue({props:z}),t=new Fe({props:{$$slots:{default:[Nt,({args:d})=>({1:d}),({args:d})=>d?2:0]},$$scope:{ctx:n}}}),a=new V({props:{name:"With backdrop photo",args:{section:"World News",hed:"Reuters Graphics Interactive",dek:"The beginning of a beautiful page",authors:["Simon Scarr","Vijdan Mohammad Kawoosa"],publishTime:new Date("2022-03-04").toISOString(),img:Le}}});const N=[{name:"With transparent header"},K(tt)];let j={$$slots:{default:[qt]},$$scope:{ctx:n}};for(let d=0;d<N.length;d+=1)j=C(j,N[d]);o=new V({props:j});const k=[{name:"With backdrop graphic"},K(Ze)];let ie={$$slots:{default:[Ft]},$$scope:{ctx:n}};for(let d=0;d<k.length;d+=1)ie=C(ie,k[d]);p=new V({props:ie});const pe=[{name:"With backdrop video"},K(it)];let se={$$slots:{default:[Yt]},$$scope:{ctx:n}};for(let d=0;d<pe.length;d+=1)se=C(se,pe[d]);x=new V({props:se});const de=[{name:"With inline graphic"},K(et)];let ae={$$slots:{default:[ii]},$$scope:{ctx:n}};for(let d=0;d<de.length;d+=1)ae=C(ae,de[d]);A=new V({props:ae});const ce=[{name:"With custom hed"},K(st)];let ne={$$slots:{default:[ai]},$$scope:{ctx:n}};for(let d=0;d<ce.length;d+=1)ne=C(ne,ce[d]);return $=new V({props:ne}),{c(){_(e.$$.fragment),i=H(),_(t.$$.fragment),s=H(),_(a.$$.fragment),l=H(),_(o.$$.fragment),r=H(),_(p.$$.fragment),g=H(),_(x.$$.fragment),f=H(),_(A.$$.fragment),c=H(),_($.$$.fragment)},m(d,S){b(e,d,S),v(d,i,S),b(t,d,S),v(d,s,S),b(a,d,S),v(d,l,S),b(o,d,S),v(d,r,S),b(p,d,S),v(d,g,S),b(x,d,S),v(d,f,S),b(A,d,S),v(d,c,S),b($,d,S),P=!0},p(d,[S]){const Ke=S&1?je(I,[I[0],I[1],Ve(d[0])]):{};e.$set(Ke);const ge={};S&6&&(ge.$$scope={dirty:S,ctx:d}),t.$set(ge);const ue={};S&4&&(ue.$$scope={dirty:S,ctx:d}),o.$set(ue);const fe={};S&4&&(fe.$$scope={dirty:S,ctx:d}),p.$set(fe);const me={};S&4&&(me.$$scope={dirty:S,ctx:d}),x.$set(me);const he={};S&4&&(he.$$scope={dirty:S,ctx:d}),A.$set(he);const ve={};S&4&&(ve.$$scope={dirty:S,ctx:d}),$.$set(ve)},i(d){P||(u(e.$$.fragment,d),u(t.$$.fragment,d),u(a.$$.fragment,d),u(o.$$.fragment,d),u(p.$$.fragment,d),u(x.$$.fragment,d),u(A.$$.fragment,d),u($.$$.fragment,d),P=!0)},o(d){m(e.$$.fragment,d),m(t.$$.fragment,d),m(a.$$.fragment,d),m(o.$$.fragment,d),m(p.$$.fragment,d),m(x.$$.fragment,d),m(A.$$.fragment,d),m($.$$.fragment,d),P=!1},d(d){d&&(y(i),y(s),y(l),y(r),y(g),y(f),y(c)),w(e,d),w(t,d),w(a,d),w(o,d),w(p,d),w(x,d),w(A,d),w($,d)}}}function li(n){return[{...Je(Ye),argTypes:{hedSize:{control:"select",options:["small","normal","big","bigger","biggest"]},hedWidth:{control:"select",options:["normal","wide","wider","widest"]},hedAlign:{control:"select",options:["left","center","right"]},width:{control:"select",options:["normal","wide","wider","widest"]}}}]}class Ne extends J{constructor(e){super(),Y(this,e,li,ni,Z,{})}}Ne.__docgen={version:3,name:"Hero.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const M=Ee(Ne,{meta:{title:"Components/HeroHeadline"},stories:{"tpl:default":{storyId:"components-heroheadline--default",name:"default",template:!0,source:`<Block width="fluid">
  <SiteHeader />
</Block>

<HeroHeadline {...args} />`,hasArgs:!0},WithBackdropPhoto:{storyId:"components-heroheadline--with-backdrop-photo",name:"With backdrop photo",template:!1,source:"",hasArgs:!1},WithTransparentHeader:{storyId:"components-heroheadline--with-transparent-header",name:"With transparent header",template:!1,source:`<div class="transparent-header">
  <Block width="fluid">
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
</div>`,hasArgs:!1},WithBackdropGraphic:{storyId:"components-heroheadline--with-backdrop-graphic",name:"With backdrop graphic",template:!1,source:`<Block width="fluid">
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
}</style>`,hasArgs:!1},WithBackdropVideo:{storyId:"components-heroheadline--with-backdrop-video",name:"With backdrop video",template:!1,source:`<Block width="fluid">
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
    <GraphicBlock
      width="widest"
      role="figure"
      class="my-0"
      textWidth="normal"
      notes="Drone footage from the Village 8 refugee camp in Sudan."
      ariaDescription="Aerial footage of people houses in refugee camp"
    >
      <!-- svelte-ignore a11y-media-has-caption -->
      <video
        autoplay
        muted
        playsinline
        loop
        preload="true"
        width="100%"
        poster="video-poster.png"
        src="https://vm.reuters.tv/9c72e/titlef2ac(425954_R21MP41500).mp4"
      >
      </video>
    </GraphicBlock>
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
}</style>`,hasArgs:!1},WithInlineGraphic:{storyId:"components-heroheadline--with-inline-graphic",name:"With inline graphic",template:!1,source:`<Block width="fluid">
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
      role="figure"
      class="my-0"
      textWidth="normal"
      notes="Source: Satellite image from Google, Maxar Technologies, CNES/Airbus, Landsat/Copernicus"
      ariaDescription="Aerial map showing trajectory of crash"
    >
      <svelte:component this="{CrashMap}" />
    </GraphicBlock>
  </div>
</HeroHeadline>`,hasArgs:!1},WithCustomHed:{storyId:"components-heroheadline--with-custom-hed",name:"With custom hed",template:!1,source:`<HeroHeadline
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
}</style>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","backgroundGraphicDocs","inlineGraphicDocs","transparentHeaderDocs","videoDocs","customHedDocs","polarImgSrc","eurovisImgSrc","Block","SiteHeader","HeroHeadline","GraphicBlock","CrashMap","QuakeMap","withComponentDocs","withStoryDocs"]}),ki=M.meta,Ai=["WithBackdropPhoto","WithTransparentHeader","WithBackdropGraphic","WithBackdropVideo","WithInlineGraphic","WithCustomHed"],Ti=M.stories.WithBackdropPhoto,Si=M.stories.WithTransparentHeader,Hi=M.stories.WithBackdropGraphic,Pi=M.stories.WithBackdropVideo,Wi=M.stories.WithInlineGraphic,Ii=M.stories.WithCustomHed;export{Hi as WithBackdropGraphic,Ti as WithBackdropPhoto,Pi as WithBackdropVideo,Ii as WithCustomHed,Wi as WithInlineGraphic,Si as WithTransparentHeader,Ai as __namedExportsOrder,ki as default};
//# sourceMappingURL=Hero.stories-aaaa5b90.js.map
