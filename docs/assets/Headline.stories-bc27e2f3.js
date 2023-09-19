import{S as at,i as nt,s as pt,o as T,y as $,h as p,P as vt,b as m,k as U,Q as ct,n as P,f,C as I,c as u,m as y,t as w,a as A,d as b,F as mt}from"./index-22a9b7f9.js";import{g as gt,a as ot}from"./spread-8a54911c.js";import{p as ft,M as ht,T as xt,S as N}from"./collect-stories-4618f393.js";import{H as S}from"./Headline-fc1d181c.js";import{b as H,w as ut}from"./withParams-47e2ab71.js";import"./Block-98bec5bc.js";import"./Byline-0539bfbd.js";import"./each-e59479a4.js";import"./_commonjsHelpers-de833af9.js";import"./journalize-07958dc6.js";import"./marked.esm-76161808.js";const yt=`Reuters Graphics headline

\`\`\`svelte
<script>
  import { Headline } from '@reuters-graphics/graphics-components';
<\/script>

<Headline
  hed="{'Reuters Graphics Interactive'}"
  dek="{'The beginning of a beautiful page'}"
  section="{'World News'}"
/>
\`\`\`
`,wt=`\`\`\`svelte
<script>
  import { Headline } from '@reuters-graphics/graphics-components';
<\/script>

<Headline
  hed="{'Reuters Graphics Interactive'}"
  dek="{'The beginning of a beautiful page'}"
  section="{'Global news'}"
  authors="{['Dea Bankova', 'Aditi Bhandari']}"
  publishTime="{new Date('2020-01-01').toISOString()}"
/>
\`\`\`
`,At=`\`\`\`svelte
<script>
  import { Headline } from '@reuters-graphics/graphics-components';
<\/script>

<Headline
  hed="{'Reuters Graphics Interactive'}"
  dek="{'The beginning of a beautiful page'}"
  section="{'Global news'}"
/>
\`\`\`
`,bt=`Use the \`hed\` and/or \`dek\` named slots to override those elements with completely custom markup.

\`\`\`svelte
<script>
  import { Headline } from '@reuters-graphics/graphics-components';
<\/script>

<Headline width="wide">
  <h1 class="custom-hed" slot="hed">
    <span class="small block text-base">The secret to</span>
    “The Nutcracker's”
    <span class="small block text-base fpt-1">success</span>
  </h1>
  <p class="custom-dek !fmt-3" slot="dek">
    How “The Nutcracker” ballet became an<span
      class="font-medium mx-1 px-1.5 py-1">American holday staple</span
    >and a financial pillar of ballet companies across the country
  </p>
</Headline>

<style lang="scss">
  .custom-hed {
    line-height: 0.9;
  }
  .custom-dek {
    span {
      background-color: #fde68a;
    }
  }
</style>
\`\`\`
`,$t=`Add a crown image in the \`crown\` named slot and override the headline in the \`hed\` named slot.

\`\`\`svelte
<script>
  import { Headline } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths';
<\/script>

<Headline class="!fmt-3" publishTime="{new Date('2020-01-01').toISOString()}">
  <!-- Add a crown -->
  <img
    slot="crown"
    src="{crownImgSrc}"
    width="100"
    class="mx-auto mb-0"
    alt="Illustration of Europe"
  />
  <!-- Override the hed with a named slot -->
  <h1 slot="hed" class="!font-serif !tracking-wide">Europa</h1>
</Headline>
\`\`\`
`,Tt=`Add a full graphic or any other component in the crown.

\`\`\`svelte
<script>
  import { Headline } from '@reuters-graphics/graphics-components';
  import Map from './ai2svelte/graphic.svelte';
  import { assets } from '$app/paths';
<\/script>

<Headline
  width="wider"
  class="!fmt-1"
  hed="{'Unfriendly skies'}"
  dek="{'How Russia’s invasion of Ukraine is redrawing air routes'}"
  section="{'Ukraine Crisis'}"
  authors="{['Simon Scarr', 'Vijdan Mohammad Kawoosa']}"
  publishTime="{new Date('2022-03-04').toISOString()}"
>
  <!-- Add a crown graphic -->
  <div slot="crown">
    <Map assetsPath="{assets}" />
  </div>
</Headline>
\`\`\`
`,_t=""+new URL("crown-7a9383fa.png",import.meta.url).href,Pt=""+new URL("graphic-xs-b07c53cf.png",import.meta.url).href,kt=""+new URL("graphic-sm-19647dd1.png",import.meta.url).href,It=""+new URL("graphic-md-1e528782.png",import.meta.url).href,St=""+new URL("graphic-lg-0ed4d71f.png",import.meta.url).href,Dt=""+new URL("graphic-xl-777033e5.png",import.meta.url).href;function tt(l){let t;return{c(){t=T("div"),t.innerHTML=`<div style="padding: 0 0 156.6667% 0;"></div> <div id="g-graphic-xs-img" class="g-aiImg svelte-16vt91t" alt="" style="${`background-image: url(${Pt});`}"></div> <div id="g-ai0-3" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:55.3926%;margin-top:-9.4px;left:46.8034%;margin-left:-41px;width:82px;"><p class="g-pstyle1 svelte-16vt91t">GREENLAND</p></div> <div id="g-ai0-4" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:58.4874%;margin-top:-9.4px;right:1.3922%;width:65px;"><p class="g-pstyle2 svelte-16vt91t">UKRAINE</p></div> <div id="g-ai0-5" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:59.2611%;margin-top:-9.4px;left:74.2151%;margin-left:-28.5px;width:57px;"><p class="g-pstyle1 svelte-16vt91t">RUSSIA</p></div> <div id="g-ai0-6" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:64.2901%;margin-top:-9.4px;left:75.4898%;margin-left:-31.5px;width:63px;"><p class="g-pstyle3 svelte-16vt91t">Moscow</p></div> <div id="g-ai0-7" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:69.8994%;margin-top:-9.4px;left:24.0115%;margin-left:-31px;width:62px;"><p class="g-pstyle1 svelte-16vt91t">CANADA</p></div> <div id="g-ai0-8" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:70.1563%;margin-top:-8.7px;left:10.3976%;margin-left:-20.5px;width:41px;"><p class="g-pstyle1 svelte-16vt91t">U.S.</p></div> <div id="g-ai0-9" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:71.8336%;margin-top:-9.4px;left:46.9832%;margin-left:-33.5px;width:67px;"><p class="g-pstyle1 svelte-16vt91t">BELARUS</p></div> <div id="g-ai0-10" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:80.7311%;margin-top:-9.4px;left:54.3834%;margin-left:-25.5px;width:51px;"><p class="g-pstyle1 svelte-16vt91t">SPAIN</p></div>`,p(t,"id","g-graphic-xs"),p(t,"class","g-artboard svelte-16vt91t"),p(t,"style","")},m(s,e){m(s,t,e)},d(s){s&&f(t)}}}function et(l){let t;return{c(){t=T("div"),t.innerHTML=`<div style="padding: 0 0 54.1176% 0;"></div> <div id="g-graphic-sm-img" class="g-aiImg svelte-16vt91t" alt="" style="${`background-image: url(${kt});`}"></div> <div id="g-ai1-1" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:14.6304%;margin-top:-9.4px;left:41.7507%;width:82px;"><p class="g-pstyle0 svelte-16vt91t">GREENLAND</p></div> <div id="g-ai1-2" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:25.8623%;margin-top:-9.4px;left:62.7041%;margin-left:-32.5px;width:65px;"><p class="g-pstyle1 svelte-16vt91t">FINLAND</p></div> <div id="g-ai1-3" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:26.9492%;margin-top:-9.4px;left:72.6333%;margin-left:-28.5px;width:57px;"><p class="g-pstyle1 svelte-16vt91t">RUSSIA</p></div> <div id="g-ai1-4" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:37.4565%;margin-top:-9.4px;right:39.632%;width:64px;"><p class="g-pstyle2 svelte-16vt91t">NORWAY</p></div> <div id="g-ai1-5" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:38.5434%;margin-top:-9.4px;left:73.7517%;margin-left:-31.5px;width:63px;"><p class="g-pstyle3 svelte-16vt91t">Moscow</p></div> <div id="g-ai1-6" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:44.7029%;margin-top:-9.4px;left:73.385%;width:67px;"><p class="g-pstyle0 svelte-16vt91t">BELARUS</p></div> <div id="g-ai1-7" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:46.8768%;margin-top:-9.4px;left:51.9252%;margin-left:-32px;width:64px;"><p class="g-pstyle1 svelte-16vt91t">ICELAND</p></div> <div id="g-ai1-8" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:53.3985%;margin-top:-17.4px;left:14.7718%;margin-left:-29.5px;width:59px;"><p class="g-pstyle1 svelte-16vt91t">UNITED</p> <p class="g-pstyle1 svelte-16vt91t">STATES</p></div> <div id="g-ai1-9" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:50.8623%;margin-top:-9.4px;left:61.4922%;margin-left:-18px;width:36px;"><p class="g-pstyle1 svelte-16vt91t">UK</p></div> <div id="g-ai1-10" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:51.2246%;margin-top:-9.4px;left:75.5452%;margin-left:-32.5px;width:65px;"><p class="g-pstyle1 svelte-16vt91t">UKRAINE</p></div> <div id="g-ai1-11" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:51.5869%;margin-top:-9.4px;left:27.6044%;margin-left:-31px;width:62px;"><p class="g-pstyle1 svelte-16vt91t">CANADA</p></div> <div id="g-ai1-12" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:57.7463%;margin-top:-9.4px;right:43.8463%;width:64px;"><p class="g-pstyle2 svelte-16vt91t">IRELAND</p></div> <div id="g-ai1-13" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:59.5579%;margin-top:-9.4px;left:86.9951%;width:45px;"><p class="g-pstyle0 svelte-16vt91t">IRAN</p></div> <div id="g-ai1-14" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:67.5289%;margin-top:-9.4px;left:57.414%;margin-left:-30.5px;width:61px;"><p class="g-pstyle1 svelte-16vt91t">FRANCE</p></div> <div id="g-ai1-15" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:75.5%;margin-top:-9.4px;left:75.0057%;width:47px;"><p class="g-pstyle0 svelte-16vt91t">ITALY</p></div> <div id="g-ai1-16" class="g-sm g-aiAbs g-aiPointText svelte-16vt91t" style="top:77.6739%;margin-top:-9.4px;left:56.0011%;margin-left:-25.5px;width:51px;"><p class="g-pstyle1 svelte-16vt91t">SPAIN</p></div>`,p(t,"id","g-graphic-sm"),p(t,"class","g-artboard svelte-16vt91t"),p(t,"style","")},m(s,e){m(s,t,e)},d(s){s&&f(t)}}}function st(l){let t;return{c(){t=T("div"),t.innerHTML=`<div style="padding: 0 0 53.0303% 0;"></div> <div id="g-graphic-md-img" class="g-aiImg svelte-16vt91t" alt="" style="${`background-image: url(${It});`}"></div> <div id="g-ai2-2" class="g-md g-aiAbs g-aiPointText svelte-16vt91t" style="top:13.2514%;margin-top:-9.4px;left:43.1404%;width:82px;"><p class="g-pstyle0 svelte-16vt91t">GREENLAND</p></div> <div id="g-ai2-3" class="g-md g-aiAbs g-aiPointText svelte-16vt91t" style="top:23.5371%;margin-top:-9.4px;left:62.9528%;margin-left:-32.5px;width:65px;"><p class="g-pstyle1 svelte-16vt91t">FINLAND</p></div> <div id="g-ai2-4" class="g-md g-aiAbs g-aiPointText svelte-16vt91t" style="top:25.5371%;margin-top:-9.4px;left:72.5549%;margin-left:-28.5px;width:57px;"><p class="g-pstyle1 svelte-16vt91t">RUSSIA</p></div> <div id="g-ai2-5" class="g-md g-aiAbs g-aiPointText svelte-16vt91t" style="top:36.9657%;margin-top:-9.4px;right:39.2195%;width:64px;"><p class="g-pstyle2 svelte-16vt91t">NORWAY</p></div> <div id="g-ai2-6" class="g-md g-aiAbs g-aiPointText svelte-16vt91t" style="top:37.2514%;margin-top:-9.4px;left:73.679%;margin-left:-31.5px;width:63px;"><p class="g-pstyle3 svelte-16vt91t">Moscow</p></div> <div id="g-ai2-7" class="g-md g-aiAbs g-aiPointText svelte-16vt91t" style="top:42.68%;margin-top:-9.4px;left:73.3033%;width:67px;"><p class="g-pstyle0 svelte-16vt91t">BELARUS</p></div> <div id="g-ai2-8" class="g-md g-aiAbs g-aiPointText svelte-16vt91t" style="top:44.9657%;margin-top:-9.4px;left:51.859%;margin-left:-32px;width:64px;"><p class="g-pstyle1 svelte-16vt91t">ICELAND</p></div> <div id="g-ai2-9" class="g-md g-aiAbs g-aiPointText svelte-16vt91t" style="top:48.68%;margin-top:-9.4px;left:29.292%;margin-left:-31px;width:62px;"><p class="g-pstyle1 svelte-16vt91t">CANADA</p></div> <div id="g-ai2-10" class="g-md g-aiAbs g-aiPointText svelte-16vt91t" style="top:51.8228%;margin-top:-17.4px;left:14.7246%;margin-left:-29.5px;width:59px;"><p class="g-pstyle1 svelte-16vt91t">UNITED</p> <p class="g-pstyle1 svelte-16vt91t">STATES</p></div> <div id="g-ai2-11" class="g-md g-aiAbs g-aiPointText svelte-16vt91t" style="top:49.8228%;margin-top:-9.4px;left:61.2229%;margin-left:-18px;width:36px;"><p class="g-pstyle1 svelte-16vt91t">UK</p></div> <div id="g-ai2-12" class="g-md g-aiAbs g-aiPointText svelte-16vt91t" style="top:50.1085%;margin-top:-9.4px;left:75.469%;margin-left:-32.5px;width:65px;"><p class="g-pstyle1 svelte-16vt91t">UKRAINE</p></div> <div id="g-ai2-13" class="g-md g-aiAbs g-aiPointText svelte-16vt91t" style="top:56.3943%;margin-top:-9.4px;right:43.9222%;width:64px;"><p class="g-pstyle2 svelte-16vt91t">IRELAND</p></div> <div id="g-ai2-14" class="g-md g-aiAbs g-aiPointText svelte-16vt91t" style="top:57.2514%;margin-top:-9.4px;left:87.1782%;width:45px;"><p class="g-pstyle0 svelte-16vt91t">IRAN</p></div> <div id="g-ai2-15" class="g-md g-aiAbs g-aiPointText svelte-16vt91t" style="top:66.3943%;margin-top:-9.4px;left:59.2927%;margin-left:-30.5px;width:61px;"><p class="g-pstyle1 svelte-16vt91t">FRANCE</p></div> <div id="g-ai2-16" class="g-md g-aiAbs g-aiPointText svelte-16vt91t" style="top:75.2514%;margin-top:-17.4px;left:90.7521%;margin-left:-28.5px;width:57px;"><p class="g-pstyle1 svelte-16vt91t">SAUDI</p> <p class="g-pstyle1 svelte-16vt91t">ARABIA</p></div> <div id="g-ai2-17" class="g-md g-aiAbs g-aiPointText svelte-16vt91t" style="top:76.1085%;margin-top:-9.4px;left:76.2209%;margin-left:-23.5px;width:47px;"><p class="g-pstyle1 svelte-16vt91t">ITALY</p></div> <div id="g-ai2-18" class="g-md g-aiAbs g-aiPointText svelte-16vt91t" style="top:78.3943%;margin-top:-9.4px;left:56.2528%;margin-left:-25.5px;width:51px;"><p class="g-pstyle1 svelte-16vt91t">SPAIN</p></div>`,p(t,"id","g-graphic-md"),p(t,"class","g-artboard svelte-16vt91t"),p(t,"style","")},m(s,e){m(s,t,e)},d(s){s&&f(t)}}}function it(l){let t;return{c(){t=T("div"),t.innerHTML=`<div style="padding: 0 0 51.0753% 0;"></div> <div id="g-graphic-lg-img" class="g-aiImg svelte-16vt91t" alt="" style="${`background-image: url(${St});`}"></div> <div id="g-ai3-1" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:26.6548%;margin-top:-10.6px;left:62.9209%;margin-left:-36px;width:72px;"><p class="g-pstyle0 svelte-16vt91t">FINLAND</p></div> <div id="g-ai3-2" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:28.5495%;margin-top:-10.6px;left:72.3568%;margin-left:-31.5px;width:63px;"><p class="g-pstyle0 svelte-16vt91t">RUSSIA</p></div> <div id="g-ai3-3" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:31.9179%;margin-top:-10.6px;left:46.515%;margin-left:-46px;width:92px;"><p class="g-pstyle0 svelte-16vt91t">GREENLAND</p></div> <div id="g-ai3-4" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:31.9179%;margin-top:-10.6px;left:79.29%;width:98px;"><p class="g-pstyle1 svelte-16vt91t">KAZAKHSTAN</p></div> <div id="g-ai3-5" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:40.5495%;margin-top:-10.6px;right:39.4047%;width:71px;"><p class="g-pstyle2 svelte-16vt91t">NORWAY</p></div> <div id="g-ai3-6" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:40.76%;margin-top:-10.6px;left:74.0694%;margin-left:-35px;width:70px;"><p class="g-pstyle3 svelte-16vt91t">Moscow</p></div> <div id="g-ai3-7" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:46.2337%;margin-top:-10.6px;left:73.2012%;width:74px;"><p class="g-pstyle1 svelte-16vt91t">BELARUS</p></div> <div id="g-ai3-8" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:48.5495%;margin-top:-10.6px;left:51.6769%;margin-left:-35.5px;width:71px;"><p class="g-pstyle0 svelte-16vt91t">ICELAND</p></div> <div id="g-ai3-9" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:52.339%;margin-top:-10.6px;left:29.15%;margin-left:-34.5px;width:69px;"><p class="g-pstyle0 svelte-16vt91t">CANADA</p></div> <div id="g-ai3-10" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:55.2863%;margin-top:-19.6px;left:14.6303%;margin-left:-33px;width:66px;"><p class="g-pstyle0 svelte-16vt91t">UNITED</p> <p class="g-pstyle0 svelte-16vt91t">STATES</p></div> <div id="g-ai3-11" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:53.3916%;margin-top:-10.6px;left:61.0447%;margin-left:-19.5px;width:39px;"><p class="g-pstyle0 svelte-16vt91t">UK</p></div> <div id="g-ai3-12" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:53.6021%;margin-top:-10.6px;left:75.4186%;margin-left:-36.5px;width:73px;"><p class="g-pstyle0 svelte-16vt91t">UKRAINE</p></div> <div id="g-ai3-13" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:60.5495%;margin-top:-10.6px;right:44.1135%;width:71px;"><p class="g-pstyle2 svelte-16vt91t">IRELAND</p></div> <div id="g-ai3-14" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:61.3916%;margin-top:-10.6px;left:87.5589%;width:49px;"><p class="g-pstyle1 svelte-16vt91t">IRAN</p></div> <div id="g-ai3-15" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:70.6548%;margin-top:-10.6px;left:59.2197%;margin-left:-33.5px;width:67px;"><p class="g-pstyle0 svelte-16vt91t">FRANCE</p></div> <div id="g-ai3-16" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:76.5495%;margin-top:-10.6px;left:62.7536%;margin-left:-27.5px;width:55px;"><p class="g-pstyle0 svelte-16vt91t">SPAIN</p></div> <div id="g-ai3-17" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:78.8653%;margin-top:-19.6px;left:89.7929%;margin-left:-31.5px;width:63px;"><p class="g-pstyle0 svelte-16vt91t">SAUDI</p> <p class="g-pstyle0 svelte-16vt91t">ARABIA</p></div> <div id="g-ai3-18" class="g-lg g-aiAbs g-aiPointText svelte-16vt91t" style="top:80.76%;margin-top:-10.6px;left:75.992%;margin-left:-25.5px;width:51px;"><p class="g-pstyle0 svelte-16vt91t">ITALY</p></div>`,p(t,"id","g-graphic-lg"),p(t,"class","g-artboard svelte-16vt91t"),p(t,"style","")},m(s,e){m(s,t,e)},d(s){s&&f(t)}}}function lt(l){let t;return{c(){t=T("div"),t.innerHTML=`<div style="padding: 0 0 50.75% 0;"></div> <div id="g-graphic-xl-img" class="g-aiImg svelte-16vt91t" alt="" style="${`background-image: url(${Dt});`}"></div> <div id="g-ai4-1" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:27.1938%;margin-top:-10.6px;left:63.4365%;margin-left:-36px;width:72px;"><p class="g-pstyle0 svelte-16vt91t">FINLAND</p></div> <div id="g-ai4-2" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:28.5074%;margin-top:-10.6px;left:72.4779%;margin-left:-31.5px;width:63px;"><p class="g-pstyle0 svelte-16vt91t">RUSSIA</p></div> <div id="g-ai4-3" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:29.821%;margin-top:-10.6px;left:46.6513%;margin-left:-46px;width:92px;"><p class="g-pstyle0 svelte-16vt91t">GREENLAND</p></div> <div id="g-ai4-4" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:31.6273%;margin-top:-10.6px;left:79.93%;width:98px;"><p class="g-pstyle1 svelte-16vt91t">KAZAKHSTAN</p></div> <div id="g-ai4-5" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:40.6585%;margin-top:-10.6px;right:39.3056%;width:71px;"><p class="g-pstyle2 svelte-16vt91t">NORWAY</p></div> <div id="g-ai4-6" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:40.8227%;margin-top:-10.6px;left:73.6128%;margin-left:-35px;width:70px;"><p class="g-pstyle3 svelte-16vt91t">Moscow</p></div> <div id="g-ai4-7" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:47.8834%;margin-top:-10.6px;left:71.2465%;width:74px;"><p class="g-pstyle1 svelte-16vt91t">BELARUS</p></div> <div id="g-ai4-8" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:48.376%;margin-top:-10.6px;left:51.7432%;margin-left:-35.5px;width:71px;"><p class="g-pstyle0 svelte-16vt91t">ICELAND</p></div> <div id="g-ai4-9" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:52.6453%;margin-top:-10.6px;left:29.1449%;margin-left:-34.5px;width:69px;"><p class="g-pstyle0 svelte-16vt91t">CANADA</p></div> <div id="g-ai4-10" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:53.6306%;margin-top:-10.6px;left:75.5426%;margin-left:-36.5px;width:73px;"><p class="g-pstyle0 svelte-16vt91t">UKRAINE</p></div> <div id="g-ai4-11" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:53.7947%;margin-top:-10.6px;left:60.8327%;margin-left:-19.5px;width:39px;"><p class="g-pstyle0 svelte-16vt91t">UK</p></div> <div id="g-ai4-12" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:55.2726%;margin-top:-19.6px;left:14.5826%;margin-left:-33px;width:66px;"><p class="g-pstyle0 svelte-16vt91t">UNITED</p> <p class="g-pstyle0 svelte-16vt91t">STATES</p></div> <div id="g-ai4-13" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:54.1231%;margin-top:-10.6px;left:69.7159%;margin-left:-35px;width:70px;"><p class="g-pstyle0 svelte-16vt91t">POLAND</p></div> <div id="g-ai4-14" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:57.8998%;margin-top:-10.6px;left:67.4399%;margin-left:-38.5px;width:77px;"><p class="g-pstyle0 svelte-16vt91t">GERMANY</p></div> <div id="g-ai4-15" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:60.8556%;margin-top:-10.6px;right:44.0157%;width:71px;"><p class="g-pstyle2 svelte-16vt91t">IRELAND</p></div> <div id="g-ai4-16" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:61.6766%;margin-top:-10.6px;left:76.0595%;margin-left:-37.5px;width:75px;"><p class="g-pstyle0 svelte-16vt91t">ROMANIA</p></div> <div id="g-ai4-17" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:61.8407%;margin-top:-10.6px;left:87.7238%;width:49px;"><p class="g-pstyle1 svelte-16vt91t">IRAN</p></div> <div id="g-ai4-18" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:66.7668%;margin-top:-10.6px;left:64.1171%;margin-left:-33.5px;width:67px;"><p class="g-pstyle0 svelte-16vt91t">FRANCE</p></div> <div id="g-ai4-19" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:68.4089%;margin-top:-10.6px;left:68.6444%;margin-left:-25.5px;width:51px;"><p class="g-pstyle0 svelte-16vt91t">ITALY</p></div> <div id="g-ai4-20" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:78.0969%;margin-top:-19.6px;left:89.3184%;margin-left:-31.5px;width:63px;"><p class="g-pstyle0 svelte-16vt91t">SAUDI</p> <p class="g-pstyle0 svelte-16vt91t">ARABIA</p></div> <div id="g-ai4-21" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:78.7537%;margin-top:-10.6px;left:62.5553%;margin-left:-27.5px;width:55px;"><p class="g-pstyle0 svelte-16vt91t">SPAIN</p></div> <div id="g-ai4-22" class="g-xl g-aiAbs g-aiPointText svelte-16vt91t" style="top:79.0822%;margin-top:-10.6px;left:79.6558%;margin-left:-33.5px;width:67px;"><p class="g-pstyle0 svelte-16vt91t">GREECE</p></div>`,p(t,"id","g-graphic-xl"),p(t,"class","g-artboard svelte-16vt91t"),p(t,"style","")},m(s,e){m(s,t,e)},d(s){s&&f(t)}}}function Nt(l){let t,s,e,n,a,c,o=l[0]&&l[0]>=0&&l[0]<510&&tt(),h=l[0]&&l[0]>=510&&l[0]<660&&et(),d=l[0]&&l[0]>=660&&l[0]<930&&st(),x=l[0]&&l[0]>=930&&l[0]<1200&&it(),v=l[0]&&l[0]>=1200&&lt();return{c(){t=T("div"),o&&o.c(),s=$(),h&&h.c(),e=$(),d&&d.c(),n=$(),x&&x.c(),a=$(),v&&v.c(),p(t,"id","g-graphic-box"),p(t,"class","svelte-16vt91t"),vt(()=>l[2].call(t))},m(r,_){m(r,t,_),o&&o.m(t,null),U(t,s),h&&h.m(t,null),U(t,e),d&&d.m(t,null),U(t,n),x&&x.m(t,null),U(t,a),v&&v.m(t,null),c=ct(t,l[2].bind(t))},p(r,[_]){r[0]&&r[0]>=0&&r[0]<510?o||(o=tt(),o.c(),o.m(t,s)):o&&(o.d(1),o=null),r[0]&&r[0]>=510&&r[0]<660?h||(h=et(),h.c(),h.m(t,e)):h&&(h.d(1),h=null),r[0]&&r[0]>=660&&r[0]<930?d||(d=st(),d.c(),d.m(t,n)):d&&(d.d(1),d=null),r[0]&&r[0]>=930&&r[0]<1200?x||(x=it(),x.c(),x.m(t,a)):x&&(x.d(1),x=null),r[0]&&r[0]>=1200?v||(v=lt(),v.c(),v.m(t,null)):v&&(v.d(1),v=null)},i:P,o:P,d(r){r&&f(t),o&&o.d(),h&&h.d(),d&&d.d(),x&&x.d(),v&&v.d(),c()}}}function Rt(l,t,s){let{assetsPath:e="./"}=t,n=null;function a(){n=this.clientWidth,s(0,n)}return l.$$set=c=>{"assetsPath"in c&&s(1,e=c.assetsPath)},[n,e,a]}class rt extends at{constructor(t){super(),nt(this,t,Rt,Nt,pt,{assetsPath:1})}}rt.__docgen={version:3,name:"graphic.svelte",data:[{visibility:"public",description:null,keywords:[],name:"assetsPath",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"./"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Ht(l){let t,s;const e=[l[1]];let n={};for(let a=0;a<e.length;a+=1)n=I(n,e[a]);return t=new S({props:n}),{c(){u(t.$$.fragment)},m(a,c){y(t,a,c),s=!0},p(a,c){const o=c&2?gt(e,[ot(a[1])]):{};t.$set(o)},i(a){s||(w(t.$$.fragment,a),s=!0)},o(a){A(t.$$.fragment,a),s=!1},d(a){b(t,a)}}}function Et(l){let t,s;return t=new S({props:{hed:"Reuters Graphics Interactive",dek:"The beginning of a beautiful page",section:"Global news"}}),{c(){u(t.$$.fragment)},m(e,n){y(t,e,n),s=!0},p:P,i(e){s||(w(t.$$.fragment,e),s=!0)},o(e){A(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function Ut(l){let t,s;return t=new S({props:{hed:"Reuters Graphics Interactive",dek:"The beginning of a beautiful page",section:"Global news",authors:["Dea Bankova","Aditi Bhandari"],publishTime:new Date("2020-01-01").toISOString()}}),{c(){u(t.$$.fragment)},m(e,n){y(t,e,n),s=!0},p:P,i(e){s||(w(t.$$.fragment,e),s=!0)},o(e){A(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function Ct(l){let t;return{c(){t=T("h1"),t.innerHTML=`<span class="small block text-base">The secret to</span>
      “The Nutcracker&#39;s”
      <span class="small block text-base fpt-1">success</span>`,p(t,"class","custom-hed"),p(t,"slot","hed")},m(s,e){m(s,t,e)},p:P,d(s){s&&f(t)}}}function Lt(l){let t;return{c(){t=T("p"),t.innerHTML='How “The Nutcracker” ballet became an<span class="font-medium mx-1 px-1.5 py-1">American holday staple</span>and a financial pillar of ballet companies across the country',p(t,"class","custom-dek !fmt-3"),p(t,"slot","dek")},m(s,e){m(s,t,e)},p:P,d(s){s&&f(t)}}}function Wt(l){let t,s,e,n;return t=new S({props:{width:"wide",$$slots:{dek:[Lt],hed:[Ct]},$$scope:{ctx:l}}}),{c(){u(t.$$.fragment),s=$(),e=T("style"),e.textContent=`.custom-hed {
  line-height: 0.9;
}

.custom-dek span {
  background-color: #fde68a;
}`,p(e,"lang","scss")},m(a,c){y(t,a,c),m(a,s,c),m(a,e,c),n=!0},p(a,c){const o={};c&4&&(o.$$scope={dirty:c,ctx:a}),t.$set(o)},i(a){n||(w(t.$$.fragment,a),n=!0)},o(a){A(t.$$.fragment,a),n=!1},d(a){a&&(f(s),f(e)),b(t,a)}}}function Gt(l){let t,s;return{c(){t=T("img"),p(t,"slot","crown"),mt(t.src,s=_t)||p(t,"src",s),p(t,"width","100"),p(t,"class","mx-auto mb-0"),p(t,"alt","Illustration of Europe")},m(e,n){m(e,t,n)},p:P,d(e){e&&f(t)}}}function Mt(l){let t;return{c(){t=T("h1"),t.textContent="Europa",p(t,"slot","hed"),p(t,"class","!font-serif !tracking-wide")},m(s,e){m(s,t,e)},p:P,d(s){s&&f(t)}}}function Bt(l){let t,s;return t=new S({props:{class:"!fmt-3",publishTime:new Date("2020-01-01").toISOString(),$$slots:{hed:[Mt],crown:[Gt]},$$scope:{ctx:l}}}),{c(){u(t.$$.fragment)},m(e,n){y(t,e,n),s=!0},p(e,n){const a={};n&4&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){s||(w(t.$$.fragment,e),s=!0)},o(e){A(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function Ot(l){let t,s,e;return s=new rt({}),{c(){t=T("div"),u(s.$$.fragment),p(t,"slot","crown")},m(n,a){m(n,t,a),y(s,t,null),e=!0},p:P,i(n){e||(w(s.$$.fragment,n),e=!0)},o(n){A(s.$$.fragment,n),e=!1},d(n){n&&f(t),b(s)}}}function Kt(l){let t,s;return t=new S({props:{width:"wider",class:"!fmt-1",hed:"Unfriendly skies",dek:"How Russia’s invasion of Ukraine is redrawing air routes",section:"Ukraine Crisis",authors:["Simon Scarr","Vijdan Mohammad Kawoosa"],publishTime:new Date("2022-03-04").toISOString(),$$slots:{crown:[Ot]},$$scope:{ctx:l}}}),{c(){u(t.$$.fragment)},m(e,n){y(t,e,n),s=!0},p(e,n){const a={};n&4&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){s||(w(t.$$.fragment,e),s=!0)},o(e){A(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function Ft(l){let t,s,e,n,a,c,o,h,d,x,v,r,_,C,k,E;const R=[{title:"Components/Headline"},{component:S},l[0]];let L={};for(let i=0;i<R.length;i+=1)L=I(L,R[i]);t=new ht({props:L}),e=new xt({props:{$$slots:{default:[Ht,({args:i})=>({1:i}),({args:i})=>i?2:0]},$$scope:{ctx:l}}}),a=new N({props:{name:"Default",args:{section:"World News",hed:"Reuters Graphics interactive",hedSize:"normal",dek:"",authors:[]}}});const K=[{name:"With dek"},H(At)];let W={$$slots:{default:[Et]},$$scope:{ctx:l}};for(let i=0;i<K.length;i+=1)W=I(W,K[i]);o=new N({props:W});const F=[{name:"With byline"},H(wt)];let G={$$slots:{default:[Ut]},$$scope:{ctx:l}};for(let i=0;i<F.length;i+=1)G=I(G,F[i]);d=new N({props:G});const Y=[{name:"With custom hed"},H(bt)];let M={$$slots:{default:[Wt]},$$scope:{ctx:l}};for(let i=0;i<Y.length;i+=1)M=I(M,Y[i]);v=new N({props:M});const z=[{name:"With crown image"},H($t)];let B={$$slots:{default:[Bt]},$$scope:{ctx:l}};for(let i=0;i<z.length;i+=1)B=I(B,z[i]);_=new N({props:B});const j=[{name:"With crown graphic"},H(Tt)];let O={$$slots:{default:[Kt]},$$scope:{ctx:l}};for(let i=0;i<j.length;i+=1)O=I(O,j[i]);return k=new N({props:O}),{c(){u(t.$$.fragment),s=$(),u(e.$$.fragment),n=$(),u(a.$$.fragment),c=$(),u(o.$$.fragment),h=$(),u(d.$$.fragment),x=$(),u(v.$$.fragment),r=$(),u(_.$$.fragment),C=$(),u(k.$$.fragment)},m(i,g){y(t,i,g),m(i,s,g),y(e,i,g),m(i,n,g),y(a,i,g),m(i,c,g),y(o,i,g),m(i,h,g),y(d,i,g),m(i,x,g),y(v,i,g),m(i,r,g),y(_,i,g),m(i,C,g),y(k,i,g),E=!0},p(i,[g]){const dt=g&1?gt(R,[R[0],R[1],ot(i[0])]):{};t.$set(dt);const V={};g&6&&(V.$$scope={dirty:g,ctx:i}),e.$set(V);const q={};g&4&&(q.$$scope={dirty:g,ctx:i}),o.$set(q);const X={};g&4&&(X.$$scope={dirty:g,ctx:i}),d.$set(X);const Z={};g&4&&(Z.$$scope={dirty:g,ctx:i}),v.$set(Z);const Q={};g&4&&(Q.$$scope={dirty:g,ctx:i}),_.$set(Q);const J={};g&4&&(J.$$scope={dirty:g,ctx:i}),k.$set(J)},i(i){E||(w(t.$$.fragment,i),w(e.$$.fragment,i),w(a.$$.fragment,i),w(o.$$.fragment,i),w(d.$$.fragment,i),w(v.$$.fragment,i),w(_.$$.fragment,i),w(k.$$.fragment,i),E=!0)},o(i){A(t.$$.fragment,i),A(e.$$.fragment,i),A(a.$$.fragment,i),A(o.$$.fragment,i),A(d.$$.fragment,i),A(v.$$.fragment,i),A(_.$$.fragment,i),A(k.$$.fragment,i),E=!1},d(i){i&&(f(s),f(n),f(c),f(h),f(x),f(r),f(C)),b(t,i),b(e,i),b(a,i),b(o,i),b(d,i),b(v,i),b(_,i),b(k,i)}}}function Yt(l){return[{...ut(yt),argTypes:{hedSize:{control:"select",options:["small","normal","big","bigger","biggest"]},width:{control:"select",options:["normal","wide","wider","widest"]}}}]}class zt extends at{constructor(t){super(),nt(this,t,Yt,Ft,pt,{})}}const D=ft(zt,{meta:{title:"Components/Headline"},stories:{"tpl:default":{name:"default",template:!0,source:"<Headline {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},WithDek:{name:"With dek",template:!1,source:`<Headline
  hed="{'Reuters Graphics Interactive'}"
  dek="{'The beginning of a beautiful page'}"
  section="{'Global news'}"
/>`,hasArgs:!1},WithByline:{name:"With byline",template:!1,source:`<Headline
  hed="{'Reuters Graphics Interactive'}"
  dek="{'The beginning of a beautiful page'}"
  section="{'Global news'}"
  authors="{['Dea Bankova', 'Aditi Bhandari']}"
  publishTime="{new Date('2020-01-01').toISOString()}"
/>`,hasArgs:!1},WithCustomHed:{name:"With custom hed",template:!1,source:`<Headline width="wide">
  <h1 class="custom-hed" slot="hed">
    <span class="small block text-base">The secret to</span>
    “The Nutcracker's”
    <span class="small block text-base fpt-1">success</span>
  </h1>
  <p class="custom-dek !fmt-3" slot="dek">
    How “The Nutcracker” ballet became an<span
      class="font-medium mx-1 px-1.5 py-1">American holday staple</span
    >and a financial pillar of ballet companies across the country
  </p>
</Headline>
<style lang="scss">.custom-hed {
line-height: 0.9;
}

.custom-dek span {
background-color: #fde68a;
}</style>`,hasArgs:!1},WithCrownImage:{name:"With crown image",template:!1,source:`<Headline class="!fmt-3" publishTime="{new Date('2020-01-01').toISOString()}">
  <!-- Add a crown -->
  <img
    slot="crown"
    src="{crownImgSrc}"
    width="100"
    class="mx-auto mb-0"
    alt="Illustration of Europe"
  />
  <!-- Override the hed with a named slot -->
  <h1 slot="hed" class="!font-serif !tracking-wide">Europa</h1>
</Headline>`,hasArgs:!1},WithCrownGraphic:{name:"With crown graphic",template:!1,source:`<Headline
  width="wider"
  class="!fmt-1"
  hed="{'Unfriendly skies'}"
  dek="{'How Russia’s invasion of Ukraine is redrawing air routes'}"
  section="{'Ukraine Crisis'}"
  authors="{['Simon Scarr', 'Vijdan Mohammad Kawoosa']}"
  publishTime="{new Date('2022-03-04').toISOString()}"
>
  <!-- Add a crown graphic -->
  <div slot="crown">
    <Map />
  </div>
</Headline>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","withBylineDocs","withDekDocs","customHedDocs","withCrownImgDocs","withCrownGraphicDocs","crownImgSrc","Map","Headline","withComponentDocs","withStoryDocs"]}),le=D.meta,ae=["Default","WithDek","WithByline","WithCustomHed","WithCrownImage","WithCrownGraphic"],ne=D.stories.Default,pe=D.stories.WithDek,ge=D.stories.WithByline,oe=D.stories.WithCustomHed,re=D.stories.WithCrownImage,de=D.stories.WithCrownGraphic;export{ne as Default,ge as WithByline,de as WithCrownGraphic,re as WithCrownImage,oe as WithCustomHed,pe as WithDek,ae as __namedExportsOrder,le as default};
//# sourceMappingURL=Headline.stories-bc27e2f3.js.map
