import{S as C,i as W,s as q,P as ce,l as Ce,o as k,y as S,a8 as te,b as m,k as P,N as ft,u as We,p as qe,q as De,t as h,a as y,f as b,D as Tt,E as ne,e as D,v as H,w as R,V as ye,J as x,c as M,h as p,r as Y,m as L,d as A,C as O,n as B,H as St,R as me,T as be,z as He,A as Mt,Q as ke}from"./index-9d4f07d0.js";import{g as F,a as z}from"./spread-8a54911c.js";import{p as Lt,M as At,T as Pt,S as ae}from"./collect-stories-4874c973.js";import{g as $t}from"./globals-7f7f1b26.js";import{e as se}from"./each-e59479a4.js";import{m as V}from"./marked.esm-76161808.js";import{B as oe}from"./Block-70634aae.js";import{b as _e,w as Bt}from"./withParams-47e2ab71.js";const It=`The \`Scroller\` component helps you quickly create basic scrollytelling graphics with several layout options.

Check out the "Canvas" tab to play with the layout options available on this component.

> This component is designed to handle most common layouts for scrollytelling. If you need something more complex, though, you should probably use [svelte-scroller](https://github.com/sveltejs/svelte-scroller), which is a lower level component you can more easily customize.

\`\`\`svelte
<script>
  import { Scroller } from '@reuters-graphics/graphics-components';

  import MyColourBackground from './MyColourBackground.svelte';

  const steps = [
    {
      background: MyColourBackground,
      backgroundProps: { colour: 'red' },
      foreground: '#### Step 1\\n\\nLorem ipsum red',
      altText: 'Red background',
    },
    {
      background: MyColourBackground,
      backgroundProps: { colour: 'blue' },
      foreground: '#### Step 2\\n\\nLorem ipsum blue',
      altText: 'Blue background',
    },
    {
      background: MyColourBackground,
      backgroundProps: { colour: 'green' },
      foreground: '#### Step 3\\n\\nLorem ipsum green',
      altText: 'Green background',
    },
  ];
<\/script>

<Scroller
  steps="{steps}"
  backgroundWidth="fluid"
  foregroundPosition="middle"
  embedded="{false}"
/>
\`\`\`
`,Ct=`Instead of just text, you can use any component in the foreground, too, and pass whatever props you need to it.

If you're making your own custom foreground component, remember to add alt text describing the background graphic.

\`\`\`svelte
<script>
  // ...
  import MyCounter from './MyCounter.svelte';

  const steps = [
    {
      background: MyColourBackground,
      backgroundProps: { colour: 'red' },
      foreground: MyCounter,
    },
    {
      background: MyColourBackground,
      backgroundProps: { colour: 'blue' },
      foreground: '#### Step 2\\n\\nLorem ipsum blue',
    },
    {
      background: MyColourBackground,
      backgroundProps: { colour: 'green' },
      foreground: MyCounter,
      foregroundProps: { count: 100 },
    },
  ];
<\/script>

<Scroller
  steps="{steps}"
  backgroundWidth="fluid"
  foregroundPosition="middle"
  embedded="{false}"
/>
\`\`\`
`,Wt=`A more detailed example of using \`Scroller\` with graphics created by [ai2svelte](https://github.com/reuters-graphics/ai2svelte).

\`\`\`svelte
<script>
  import { Scroller } from '@reuters-graphics/graphics-components';

  import MyAiMap1 from './ai2svelte/my-map-step-1.svelte';
  import MyAiMap2 from './ai2svelte/my-map-step-2.svelte';
  import MyAiMap3 from './ai2svelte/my-map-step-3.svelte';

  import { assets } from '$app/paths'; // If using with the Graphics Kit

  const steps = [
    {
      background: MyAiMap1,
      backgroundProps: { assetsPath: assets },
      foreground: '#### Step 1\\n\\nLorem ipsum',
      altText: 'A map showing TKTK',
    },
    {
      background: MyAiMap2,
      backgroundProps: { assetsPath: assets },
      foreground: '#### Step 2\\n\\nLorem ipsum',
      altText: 'The same map now highlights something interesting.',
    },
    {
      background: MyAiMap3,
      backgroundProps: { assetsPath: assets },
      foreground: '#### Step 3\\n\\nLorem ipsum',
      altText: 'The same map now shows something else that is interesting.',
    },
  ];
<\/script>

<Scroller
  steps="{steps}"
  backgroundWidth="fluid"
  foregroundPosition="middle"
  stackBackground="{true}"
  embedded="{false}"
/>
\`\`\`

When working with a Google doc, here's an example of how you can tie your text into your steps.

\`\`\`yaml
# Google doc block
Type: scroller
ID: map-scrolly
Step1Text: #### Step 1

Lorem Ipsum
:end
AltText1: A map showing the Upper West side in New York City.
:end

Step2Text: #### Step 2

Lorem Ipsum
:end
AltText2: The same map now highlights 98th Street.
:end

Step3Text: #### Step 3

Lorem Ipsum
:end
AltText3: The same map now highlights three locations near 98th Street where something particulary important happened.
:end
\`\`\`

\`\`\`svelte
<!-- App.svelte -->
<script>
  // Previos imports and stuff...

  // This should be already imported for you.
  import content from '$locales/en/content.json';

  // Get the data for the block in content by its ID
  const scrollerBlock = content.blocks.find(
    (block) => block.ID === 'map-scrolly'
  );

  // Now plug your text into your step foregrounds
  const steps = [
    {
      background: MyAiMap1,
      backgroundProps: { basePath: assets },
      foreground: scrollerBlock.Step1Text,
      altText: scrollerBlock.AltText1,
    },
    {
      background: MyAiMap2,
      backgroundProps: { basePath: assets },
      foreground: scrollerBlock.Step2Text,
      altText: scrollerBlock.AltText2,
    },
    {
      background: MyAiMap3,
      backgroundProps: { basePath: assets },
      foreground: scrollerBlock.Step3Text,
      altText: scrollerBlock.AltText3,
    },
  ];
<\/script>

{#each content.blocks as block}
  {#if block.Type === 'text'}
    <!-- ... other blocks -->

    <!-- Copy/paste into your blocks loop! -->
  {:else if block.Type === 'scroller' && block.ID === 'map-scrolly'}
    <Scroller
      steps="{steps}"
      backgroundWidth="fluid"
      foregroundPosition="middle"
      stackBackground="{true}"
      embedded="{false}"
    />
    <!-- END copy/paste -->
  {/if}
{/each}
\`\`\`
`,qt=`For Graphics Kit users, the \`Scroller\` component is built-in for scrollytelling with [ai2svelte](https://github.com/reuters-graphics/ai2svelte) graphics and text.

First, import your ai2svelte graphics in \`App.svelte\` and add them to the \`aiCharts\` object;

\`\`\`svelte
<!-- App.svelte -->
<script>
  // Other stuff...

  import AiMap1 from './ai2svelte/my-map-1.svelte';
  import AiMap2 from './ai2svelte/my-map-2.svelte';
  import AiMap3 from './ai2svelte/my-map-3.svelte';

  const aiCharts = {
    // Other charts...
    AiMap1,
    AiMap2,
    AiMap3,
  };
<\/script>
\`\`\`

Then add the following structure to your Google Doc, taking care that the names of your charts in the \`aiCharts\` object match the names of your step backgrounds:

\`\`\`yaml
# Google doc block
Type: ai-scroller
ID: my-map-scroller
Width: normal
ForegroundPosition: middle
StackBackground: true
[.Steps]
  Background: AiMap1
  Text: #### Step 1

  Lorem ipsum
  :end
  AltText: A map showing the Upper West side in New York City.

  Can add paragraphs of alt text if you want to break up sentences.
  :end

  Background: AiMap2
  Text: #### Step 2

  Lorem ipsum
  :end
  AltText: The same map now highlights 98th Street.
  :end

  Background: AiMap3
  Text: #### Step 3

  Lorem ipsum
  :end
  AltText: The same map now highlights three locations near 98th Street where something particulary important happened.
  :end
[]

\`\`\`
`;const{window:pt}=$t,Dt=l=>({}),Re=l=>({}),Ht=l=>({}),Ve=l=>({});function Rt(l){let e,t,n,s,r,i,a,o,d;ce(l[21]);const c=l[20].background,u=Ce(c,l,l[19],Ve),f=l[20].foreground,v=Ce(f,l,l[19],Re);return{c(){e=k("svelte-scroller-outer"),t=k("svelte-scroller-background-container"),n=k("svelte-scroller-background"),u&&u.c(),r=S(),i=k("svelte-scroller-foreground"),v&&v.c(),te(n,"class","svelte-1yjh2jm"),te(t,"class","background-container svelte-1yjh2jm"),te(t,"style",s=""+(l[5]+l[4])),te(i,"class","svelte-1yjh2jm"),te(e,"class","svelte-1yjh2jm")},m(T,$){m(T,e,$),P(e,t),P(t,n),u&&u.m(n,null),l[22](n),P(e,r),P(e,i),v&&v.m(i,null),l[23](i),l[24](e),a=!0,o||(d=ft(pt,"resize",l[21]),o=!0)},p(T,$){u&&u.p&&(!a||$[0]&524288)&&We(u,c,T,T[19],a?De(c,T[19],$,Ht):qe(T[19]),Ve),(!a||$[0]&48&&s!==(s=""+(T[5]+T[4])))&&te(t,"style",s),v&&v.p&&(!a||$[0]&524288)&&We(v,f,T,T[19],a?De(f,T[19],$,Dt):qe(T[19]),Re)},i(T){a||(h(u,T),h(v,T),a=!0)},o(T){y(u,T),y(v,T),a=!1},d(T){T&&b(e),u&&u.d(T),l[22](null),v&&v.d(T),l[23](null),l[24](null),o=!1,d()}}}const E=[];let de;if(typeof window<"u"){const l=()=>E.forEach(e=>e());window.addEventListener("scroll",l),window.addEventListener("resize",l)}if(typeof IntersectionObserver<"u"){const l=new Map,e=new IntersectionObserver((t,n)=>{t.forEach(s=>{const r=l.get(s.target),i=E.indexOf(r);s.isIntersecting?i===-1&&E.push(r):(r(),i!==-1&&E.splice(i,1))})},{rootMargin:"400px 0px"});de={add:({outer:t,update:n})=>{const{top:s,bottom:r}=t.getBoundingClientRect();s<window.innerHeight&&r>0&&E.push(n),l.set(t,n),e.observe(t)},remove:({outer:t,update:n})=>{const s=E.indexOf(n);s!==-1&&E.splice(s,1),l.delete(t),e.unobserve(t)}}}else de={add:({update:l})=>{E.push(l)},remove:({update:l})=>{const e=E.indexOf(l);e!==-1&&E.splice(e,1)}};function Vt(l,e,t){let n,s,r,i,a,{$$slots:o={},$$scope:d}=e,{top:c=0}=e,{bottom:u=1}=e,{threshold:f=.5}=e,{query:v="section"}=e,{parallax:T=!1}=e,{index:$=0}=e,{count:j=0}=e,{offset:N=0}=e,{progress:I=0}=e,{visible:K=!1}=e,U,g,_,re,G,Q=0,X,J=0,ue=1;Tt(()=>{G=g.querySelectorAll(v),t(7,j=G.length),fe();const w={outer:U,update:fe};return de.add(w),()=>de.remove(w)});function fe(){if(!g)return;const w=U.getBoundingClientRect();re=w.left,t(18,ue=w.right-re);const ee=g.getBoundingClientRect(),Ae=_.getBoundingClientRect();t(10,K=ee.top<Q&&ee.bottom>0);const pe=ee.bottom-ee.top,Pe=Ae.bottom-Ae.top,ge=s-n;t(9,I=(n-ee.top)/(pe-ge)),I<=0?(t(17,J=0),t(16,X=!1)):I>=1?(t(17,J=T?pe-Pe:pe-ge),t(16,X=!1)):(t(17,J=T?Math.round(n-I*(Pe-ge)):n),t(16,X=!0));for(let le=0;le<G.length;le++){const wt=G[le],{top:$e}=wt.getBoundingClientRect(),Be=G[le+1],Ie=Be?Be.getBoundingClientRect().top:ee.bottom;if(t(8,N=(r-$e)/(Ie-$e)),Ie>=r){t(6,$=le);break}}}function ht(){t(0,Q=pt.innerHeight)}function yt(w){ne[w?"unshift":"push"](()=>{_=w,t(3,_)})}function kt(w){ne[w?"unshift":"push"](()=>{g=w,t(2,g)})}function vt(w){ne[w?"unshift":"push"](()=>{U=w,t(1,U)})}return l.$$set=w=>{"top"in w&&t(11,c=w.top),"bottom"in w&&t(12,u=w.bottom),"threshold"in w&&t(13,f=w.threshold),"query"in w&&t(14,v=w.query),"parallax"in w&&t(15,T=w.parallax),"index"in w&&t(6,$=w.index),"count"in w&&t(7,j=w.count),"offset"in w&&t(8,N=w.offset),"progress"in w&&t(9,I=w.progress),"visible"in w&&t(10,K=w.visible),"$$scope"in w&&t(19,d=w.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&2049&&(n=Math.round(c*Q)),l.$$.dirty[0]&4097&&(s=Math.round(u*Q)),l.$$.dirty[0]&8193&&(r=Math.round(f*Q)),l.$$.dirty[0]&47104&&fe(),l.$$.dirty[0]&196608&&t(5,i=`
		position: ${X?"fixed":"absolute"};
		top: 0;
		transform: translate(0, ${J}px);
		z-index: 1;
	`),l.$$.dirty[0]&327680&&t(4,a=X?`width:${ue}px;`:"")},[Q,U,g,_,a,i,$,j,N,I,K,c,u,f,v,T,X,J,ue,d,o,ht,yt,kt,vt]}let gt=class extends C{constructor(e){super(),W(this,e,Vt,Rt,q,{top:11,bottom:12,threshold:13,query:14,parallax:15,index:6,count:7,offset:8,progress:9,visible:10},null,[-1,-1])}};gt.__docgen={version:3,name:"Scroller.svelte",data:[{keywords:[],visibility:"public",description:"config",name:"top",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"bottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{visibility:"public",description:null,keywords:[],name:"threshold",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:.5},{visibility:"public",description:null,keywords:[],name:"query",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"section"},{visibility:"public",description:null,keywords:[],name:"parallax",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"bindings",name:"index",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"count",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"offset",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"progress",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"visible",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"background"},{keywords:[],visibility:"public",description:"",name:"foreground"}],refs:[]};function je(l,e,t){const n=l.slice();return n[4]=e[t],n[6]=t,n}function Ue(l){let e,t,n,s;const r=[l[4].backgroundProps||{}];var i=l[4].background;function a(o,d){let c={};if(d!==void 0&&d&2)c=F(r,[z(o[4].backgroundProps||{})]);else for(let u=0;u<r.length;u+=1)c=O(c,r[u]);return{props:c}}return i&&(t=x(i,a(l))),{c(){e=k("div"),t&&M(t.$$.fragment),n=S(),p(e,"class","step-background step-"+(l[6]+1)+" w-full absolute svelte-10kimsz"),Y(e,"visible",l[3]?l[6]<=l[0]:l[6]===l[0]),Y(e,"hidden",l[3]?l[6]>l[0]:l[6]!==l[0])},m(o,d){m(o,e,d),t&&L(t,e,null),P(e,n),s=!0},p(o,d){if(d&2&&i!==(i=o[4].background)){if(t){H();const c=t;y(c.$$.fragment,1,0,()=>{A(c,1)}),R()}i?(t=x(i,a(o,d)),M(t.$$.fragment),h(t.$$.fragment,1),L(t,e,n)):t=null}else if(i){const c=d&2?F(r,[z(o[4].backgroundProps||{})]):{};t.$set(c)}(!s||d&9)&&Y(e,"visible",o[3]?o[6]<=o[0]:o[6]===o[0]),(!s||d&9)&&Y(e,"hidden",o[3]?o[6]>o[0]:o[6]!==o[0])},i(o){s||(t&&h(t.$$.fragment,o),s=!0)},o(o){t&&y(t.$$.fragment,o),s=!1},d(o){o&&b(e),t&&A(t)}}}function Fe(l){let e,t,n=(l[2]===0||l[6]>=(l[3]?0:l[0]-l[2])&&l[6]<=l[0]+l[2])&&Ue(l);return{c(){n&&n.c(),e=D()},m(s,r){n&&n.m(s,r),m(s,e,r),t=!0},p(s,r){s[2]===0||s[6]>=(s[3]?0:s[0]-s[2])&&s[6]<=s[0]+s[2]?n?(n.p(s,r),r&13&&h(n,1)):(n=Ue(s),n.c(),h(n,1),n.m(e.parentNode,e)):n&&(H(),y(n,1,1,()=>{n=null}),R())},i(s){t||(h(n),t=!0)},o(s){y(n),t=!1},d(s){s&&b(e),n&&n.d(s)}}}function jt(l){let e,t,n=se(l[1]),s=[];for(let i=0;i<n.length;i+=1)s[i]=Fe(je(l,n,i));const r=i=>y(s[i],1,1,()=>{s[i]=null});return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=D()},m(i,a){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,a);m(i,e,a),t=!0},p(i,[a]){if(a&15){n=se(i[1]);let o;for(o=0;o<n.length;o+=1){const d=je(i,n,o);s[o]?(s[o].p(d,a),h(s[o],1)):(s[o]=Fe(d),s[o].c(),h(s[o],1),s[o].m(e.parentNode,e))}for(H(),o=n.length;o<s.length;o+=1)r(o);R()}},i(i){if(!t){for(let a=0;a<n.length;a+=1)h(s[a]);t=!0}},o(i){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)y(s[a]);t=!1},d(i){i&&b(e),ye(s,i)}}}function Ut(l,e,t){let{index:n}=e,{steps:s=[]}=e,{preload:r=1}=e,{stackBackground:i=!0}=e;return l.$$set=a=>{"index"in a&&t(0,n=a.index),"steps"in a&&t(1,s=a.steps),"preload"in a&&t(2,r=a.preload),"stackBackground"in a&&t(3,i=a.stackBackground)},[n,s,r,i]}let mt=class extends C{constructor(e){super(),W(this,e,Ut,jt,q,{index:0,steps:1,preload:2,stackBackground:3})}};mt.__docgen={version:3,name:"Background.svelte",data:[{visibility:"public",description:null,keywords:[],name:"index",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"steps",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"preload",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{visibility:"public",description:null,keywords:[],name:"stackBackground",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Ne(l,e,t){const n=l.slice();return n[1]=e[t],n[3]=t,n}function Ft(l){let e,t,n,s,r,i;const a=[zt,Et],o=[];function d(u,f){return typeof u[1].foreground=="string"?0:1}t=d(l),n=o[t]=a[t](l);let c=typeof l[1].altText=="string"&&Ee(l);return{c(){e=k("div"),n.c(),s=S(),c&&c.c(),r=D(),p(e,"class","step-foreground w-full svelte-1u397b3")},m(u,f){m(u,e,f),o[t].m(e,null),m(u,s,f),c&&c.m(u,f),m(u,r,f),i=!0},p(u,f){let v=t;t=d(u),t===v?o[t].p(u,f):(H(),y(o[v],1,1,()=>{o[v]=null}),R(),n=o[t],n?n.p(u,f):(n=o[t]=a[t](u),n.c()),h(n,1),n.m(e,null)),typeof u[1].altText=="string"?c?c.p(u,f):(c=Ee(u),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},i(u){i||(h(n),i=!0)},o(u){y(n),i=!1},d(u){u&&(b(e),b(s),b(r)),o[t].d(),c&&c.d(u)}}}function Nt(l){let e,t,n,s=typeof l[1].altText=="string"&&ze(l);return{c(){e=k("div"),t=S(),s&&s.c(),n=D(),p(e,"class","empty-step-foreground")},m(r,i){m(r,e,i),m(r,t,i),s&&s.m(r,i),m(r,n,i)},p(r,i){typeof r[1].altText=="string"?s?s.p(r,i):(s=ze(r),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},i:B,o:B,d(r){r&&(b(e),b(t),b(n)),s&&s.d(r)}}}function Et(l){let e,t,n;const s=[l[1].foregroundProps||{}];var r=l[1].foreground;function i(a,o){let d={};if(o!==void 0&&o&1)d=F(s,[z(a[1].foregroundProps||{})]);else for(let c=0;c<s.length;c+=1)d=O(d,s[c]);return{props:d}}return r&&(e=x(r,i(l))),{c(){e&&M(e.$$.fragment),t=D()},m(a,o){e&&L(e,a,o),m(a,t,o),n=!0},p(a,o){if(o&1&&r!==(r=a[1].foreground)){if(e){H();const d=e;y(d.$$.fragment,1,0,()=>{A(d,1)}),R()}r?(e=x(r,i(a,o)),M(e.$$.fragment),h(e.$$.fragment,1),L(e,t.parentNode,t)):e=null}else if(r){const d=o&1?F(s,[z(a[1].foregroundProps||{})]):{};e.$set(d)}},i(a){n||(e&&h(e.$$.fragment,a),n=!0)},o(a){e&&y(e.$$.fragment,a),n=!1},d(a){a&&b(t),e&&A(e,a)}}}function zt(l){let e,t=V.parse(l[1].foreground)+"",n;return{c(){e=new St(!1),n=D(),e.a=n},m(s,r){e.m(t,s,r),m(s,n,r)},p(s,r){r&1&&t!==(t=V.parse(s[1].foreground)+"")&&e.p(t)},i:B,o:B,d(s){s&&(b(n),e.d())}}}function Ee(l){let e,t=V.parse(l[1].altText)+"";return{c(){e=k("div"),p(e,"class","background-alt-text visually-hidden")},m(n,s){m(n,e,s),e.innerHTML=t},p(n,s){s&1&&t!==(t=V.parse(n[1].altText)+"")&&(e.innerHTML=t)},d(n){n&&b(e)}}}function ze(l){let e,t=V.parse(l[1].altText)+"";return{c(){e=k("div"),p(e,"class","background-alt-text visually-hidden")},m(n,s){m(n,e,s),e.innerHTML=t},p(n,s){s&1&&t!==(t=V.parse(n[1].altText)+"")&&(e.innerHTML=t)},d(n){n&&b(e)}}}function Oe(l){let e,t,n,s,r;const i=[Nt,Ft],a=[];function o(d,c){return d[1].foreground===""||!d[1].foreground?0:1}return t=o(l),n=a[t]=i[t](l),{c(){e=k("div"),n.c(),s=S(),p(e,"class","step-foreground-container step-"+(l[3]+1)+" mb-20 h-screen flex items-center justify-center svelte-1u397b3")},m(d,c){m(d,e,c),a[t].m(e,null),P(e,s),r=!0},p(d,c){let u=t;t=o(d),t===u?a[t].p(d,c):(H(),y(a[u],1,1,()=>{a[u]=null}),R(),n=a[t],n?n.p(d,c):(n=a[t]=i[t](d),n.c()),h(n,1),n.m(e,s))},i(d){r||(h(n),r=!0)},o(d){y(n),r=!1},d(d){d&&b(e),a[t].d()}}}function Ot(l){let e,t,n=se(l[0]),s=[];for(let i=0;i<n.length;i+=1)s[i]=Oe(Ne(l,n,i));const r=i=>y(s[i],1,1,()=>{s[i]=null});return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=D()},m(i,a){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,a);m(i,e,a),t=!0},p(i,[a]){if(a&1){n=se(i[0]);let o;for(o=0;o<n.length;o+=1){const d=Ne(i,n,o);s[o]?(s[o].p(d,a),h(s[o],1)):(s[o]=Oe(d),s[o].c(),h(s[o],1),s[o].m(e.parentNode,e))}for(H(),o=n.length;o<s.length;o+=1)r(o);R()}},i(i){if(!t){for(let a=0;a<n.length;a+=1)h(s[a]);t=!0}},o(i){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)y(s[a]);t=!1},d(i){i&&b(e),ye(s,i)}}}function Kt(l,e,t){let{steps:n=[]}=e;return l.$$set=s=>{"steps"in s&&t(0,n=s.steps)},[n]}let bt=class extends C{constructor(e){super(),W(this,e,Kt,Ot,q,{steps:0})}};bt.__docgen={version:3,name:"Foreground.svelte",data:[{visibility:"public",description:null,keywords:[],name:"steps",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Gt(l){let e,t,n,s;const r=[l[0].backgroundProps||{}];var i=l[0].background;function a(o,d){let c={};if(d!==void 0&&d&1)c=F(r,[z(o[0].backgroundProps||{})]);else for(let u=0;u<r.length;u+=1)c=O(c,r[u]);return{props:c}}return i&&(t=x(i,a(l))),{c(){e=k("div"),t&&M(t.$$.fragment),p(e,"class",n="embedded-background step-"+(l[2]+1)),p(e,"aria-hidden","true")},m(o,d){m(o,e,d),t&&L(t,e,null),s=!0},p(o,d){if(d&1&&i!==(i=o[0].background)){if(t){H();const c=t;y(c.$$.fragment,1,0,()=>{A(c,1)}),R()}i?(t=x(i,a(o,d)),M(t.$$.fragment),h(t.$$.fragment,1),L(t,e,null)):t=null}else if(i){const c=d&1?F(r,[z(o[0].backgroundProps||{})]):{};t.$set(c)}(!s||d&4&&n!==(n="embedded-background step-"+(o[2]+1)))&&p(e,"class",n)},i(o){s||(t&&h(t.$$.fragment,o),s=!0)},o(o){t&&y(t.$$.fragment,o),s=!1},d(o){o&&b(e),t&&A(t)}}}function Qt(l){let e,t;return e=new oe({props:{width:l[1],class:"background-container step-"+(l[2]+1),$$slots:{default:[Gt]},$$scope:{ctx:l}}}),{c(){M(e.$$.fragment)},m(n,s){L(e,n,s),t=!0},p(n,[s]){const r={};s&2&&(r.width=n[1]),s&4&&(r.class="background-container step-"+(n[2]+1)),s&13&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Xt(l,e,t){let{step:n}=e,{backgroundWidth:s}=e,{index:r}=e;return l.$$set=i=>{"step"in i&&t(0,n=i.step),"backgroundWidth"in i&&t(1,s=i.backgroundWidth),"index"in i&&t(2,r=i.index)},[n,s,r]}class ve extends C{constructor(e){super(),W(this,e,Xt,Qt,q,{step:0,backgroundWidth:1,index:2})}}ve.__docgen={version:3,name:"Background.svelte",data:[{visibility:"public",description:null,keywords:[],name:"step",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"backgroundWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"index",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Yt(l){let e,t,n,s;const r=[l[0].foregroundProps||{}];var i=l[0].foreground;function a(o,d){let c={};if(d!==void 0&&d&1)c=F(r,[z(o[0].foregroundProps||{})]);else for(let u=0;u<r.length;u+=1)c=O(c,r[u]);return{props:c}}return i&&(t=x(i,a(l))),{c(){e=k("div"),t&&M(t.$$.fragment),p(e,"class",n="embedded-foreground step-"+(l[1]+1)+" svelte-kywsd6")},m(o,d){m(o,e,d),t&&L(t,e,null),s=!0},p(o,d){if(d&1&&i!==(i=o[0].foreground)){if(t){H();const c=t;y(c.$$.fragment,1,0,()=>{A(c,1)}),R()}i?(t=x(i,a(o,d)),M(t.$$.fragment),h(t.$$.fragment,1),L(t,e,null)):t=null}else if(i){const c=d&1?F(r,[z(o[0].foregroundProps||{})]):{};t.$set(c)}(!s||d&2&&n!==(n="embedded-foreground step-"+(o[1]+1)+" svelte-kywsd6"))&&p(e,"class",n)},i(o){s||(t&&h(t.$$.fragment,o),s=!0)},o(o){t&&y(t.$$.fragment,o),s=!1},d(o){o&&b(e),t&&A(t)}}}function xt(l){let e,t;return e=new oe({props:{class:"body-text step-"+(l[1]+1),$$slots:{default:[Zt]},$$scope:{ctx:l}}}),{c(){M(e.$$.fragment)},m(n,s){L(e,n,s),t=!0},p(n,s){const r={};s&2&&(r.class="body-text step-"+(n[1]+1)),s&7&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Jt(l){let e,t,n,s,r=typeof l[0].altText=="string"&&Ge(l);return{c(){e=k("div"),n=S(),r&&r.c(),s=D(),p(e,"class",t="empty-step-foreground step-"+(l[1]+1)+" svelte-kywsd6")},m(i,a){m(i,e,a),m(i,n,a),r&&r.m(i,a),m(i,s,a)},p(i,a){a&2&&t!==(t="empty-step-foreground step-"+(i[1]+1)+" svelte-kywsd6")&&p(e,"class",t),typeof i[0].altText=="string"?r?r.p(i,a):(r=Ge(i),r.c(),r.m(s.parentNode,s)):r&&(r.d(1),r=null)},i:B,o:B,d(i){i&&(b(e),b(n),b(s)),r&&r.d(i)}}}function Ke(l){let e,t=V.parse(l[0].altText)+"";return{c(){e=k("div"),p(e,"class","background-alt-text visually-hidden")},m(n,s){m(n,e,s),e.innerHTML=t},p(n,s){s&1&&t!==(t=V.parse(n[0].altText)+"")&&(e.innerHTML=t)},d(n){n&&b(e)}}}function Zt(l){let e,t=V.parse(l[0].foreground)+"",n,s,r,i=typeof l[0].altText=="string"&&Ke(l);return{c(){e=k("div"),s=S(),i&&i.c(),r=D(),p(e,"class",n="embedded-foreground step-"+(l[1]+1)+" svelte-kywsd6")},m(a,o){m(a,e,o),e.innerHTML=t,m(a,s,o),i&&i.m(a,o),m(a,r,o)},p(a,o){o&1&&t!==(t=V.parse(a[0].foreground)+"")&&(e.innerHTML=t),o&2&&n!==(n="embedded-foreground step-"+(a[1]+1)+" svelte-kywsd6")&&p(e,"class",n),typeof a[0].altText=="string"?i?i.p(a,o):(i=Ke(a),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},d(a){a&&(b(e),b(s),b(r)),i&&i.d(a)}}}function Ge(l){let e,t=V.parse(l[0].altText)+"";return{c(){e=k("div"),p(e,"class","background-alt-text visually-hidden")},m(n,s){m(n,e,s),e.innerHTML=t},p(n,s){s&1&&t!==(t=V.parse(n[0].altText)+"")&&(e.innerHTML=t)},d(n){n&&b(e)}}}function en(l){let e,t,n,s;const r=[Jt,xt,Yt],i=[];function a(o,d){return o[0].foreground===""||!o[0].foreground?0:typeof o[0].foreground=="string"?1:2}return e=a(l),t=i[e]=r[e](l),{c(){t.c(),n=D()},m(o,d){i[e].m(o,d),m(o,n,d),s=!0},p(o,[d]){let c=e;e=a(o),e===c?i[e].p(o,d):(H(),y(i[c],1,1,()=>{i[c]=null}),R(),t=i[e],t?t.p(o,d):(t=i[e]=r[e](o),t.c()),h(t,1),t.m(n.parentNode,n))},i(o){s||(h(t),s=!0)},o(o){y(t),s=!1},d(o){o&&b(n),i[e].d(o)}}}function tn(l,e,t){let{step:n}=e,{index:s}=e;return l.$$set=r=>{"step"in r&&t(0,n=r.step),"index"in r&&t(1,s=r.index)},[n,s]}class we extends C{constructor(e){super(),W(this,e,tn,en,q,{step:0,index:1})}}we.__docgen={version:3,name:"Foreground.svelte",data:[{visibility:"public",description:null,keywords:[],name:"step",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"index",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Qe(l,e,t){const n=l.slice();return n[3]=e[t],n[5]=t,n}function nn(l){let e,t,n,s;return e=new we({props:{step:l[3],index:l[5]}}),n=new ve({props:{step:l[3],index:l[5],backgroundWidth:l[2]}}),{c(){M(e.$$.fragment),t=S(),M(n.$$.fragment)},m(r,i){L(e,r,i),m(r,t,i),L(n,r,i),s=!0},p(r,i){const a={};i&1&&(a.step=r[3]),e.$set(a);const o={};i&1&&(o.step=r[3]),i&4&&(o.backgroundWidth=r[2]),n.$set(o)},i(r){s||(h(e.$$.fragment,r),h(n.$$.fragment,r),s=!0)},o(r){y(e.$$.fragment,r),y(n.$$.fragment,r),s=!1},d(r){r&&b(t),A(e,r),A(n,r)}}}function sn(l){let e,t,n,s,r;return e=new ve({props:{step:l[3],index:l[5],backgroundWidth:l[2]}}),n=new we({props:{step:l[3],index:l[5]}}),{c(){M(e.$$.fragment),t=S(),M(n.$$.fragment),s=S()},m(i,a){L(e,i,a),m(i,t,a),L(n,i,a),m(i,s,a),r=!0},p(i,a){const o={};a&1&&(o.step=i[3]),a&4&&(o.backgroundWidth=i[2]),e.$set(o);const d={};a&1&&(d.step=i[3]),n.$set(d)},i(i){r||(h(e.$$.fragment,i),h(n.$$.fragment,i),r=!0)},o(i){y(e.$$.fragment,i),y(n.$$.fragment,i),r=!1},d(i){i&&(b(t),b(s)),A(e,i),A(n,i)}}}function Xe(l){let e,t,n,s;const r=[sn,nn],i=[];function a(o,d){return o[1]==="bf"?0:1}return e=a(l),t=i[e]=r[e](l),{c(){t.c(),n=D()},m(o,d){i[e].m(o,d),m(o,n,d),s=!0},p(o,d){let c=e;e=a(o),e===c?i[e].p(o,d):(H(),y(i[c],1,1,()=>{i[c]=null}),R(),t=i[e],t?t.p(o,d):(t=i[e]=r[e](o),t.c()),h(t,1),t.m(n.parentNode,n))},i(o){s||(h(t),s=!0)},o(o){y(t),s=!1},d(o){o&&b(n),i[e].d(o)}}}function ln(l){let e,t,n=se(l[0]),s=[];for(let i=0;i<n.length;i+=1)s[i]=Xe(Qe(l,n,i));const r=i=>y(s[i],1,1,()=>{s[i]=null});return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=D()},m(i,a){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,a);m(i,e,a),t=!0},p(i,[a]){if(a&7){n=se(i[0]);let o;for(o=0;o<n.length;o+=1){const d=Qe(i,n,o);s[o]?(s[o].p(d,a),h(s[o],1)):(s[o]=Xe(d),s[o].c(),h(s[o],1),s[o].m(e.parentNode,e))}for(H(),o=n.length;o<s.length;o+=1)r(o);R()}},i(i){if(!t){for(let a=0;a<n.length;a+=1)h(s[a]);t=!0}},o(i){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)y(s[a]);t=!1},d(i){i&&b(e),ye(s,i)}}}function on(l,e,t){let{steps:n=[]}=e,{embeddedLayout:s="fb"}=e,{backgroundWidth:r="fluid"}=e;return l.$$set=i=>{"steps"in i&&t(0,n=i.steps),"embeddedLayout"in i&&t(1,s=i.embeddedLayout),"backgroundWidth"in i&&t(2,r=i.backgroundWidth)},[n,s,r]}class _t extends C{constructor(e){super(),W(this,e,on,ln,q,{steps:0,embeddedLayout:1,backgroundWidth:2})}}_t.__docgen={version:3,name:"index.svelte",data:[{visibility:"public",description:null,keywords:[],name:"steps",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"embeddedLayout",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"fb"},{visibility:"public",description:null,keywords:[],name:"backgroundWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"fluid"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function rn(l){let e,t;return e=new oe({props:{width:"widest",class:"scroller-container embedded",id:l[0],$$slots:{default:[dn]},$$scope:{ctx:l}}}),{c(){M(e.$$.fragment)},m(n,s){L(e,n,s),t=!0},p(n,s){const r={};s&1&&(r.id=n[0]),s&524422&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function an(l){let e,t;return e=new oe({props:{width:"fluid",class:"scroller-container fmy-6 "+l[12],id:l[0],$$slots:{default:[pn]},$$scope:{ctx:l}}}),{c(){M(e.$$.fragment)},m(n,s){L(e,n,s),t=!0},p(n,s){const r={};s&4096&&(r.class="scroller-container fmy-6 "+n[12]),s&1&&(r.id=n[0]),s&585534&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function dn(l){let e,t;return e=new _t({props:{steps:l[1],embeddedLayout:l[7],backgroundWidth:l[2]}}),{c(){M(e.$$.fragment)},m(n,s){L(e,n,s),t=!0},p(n,s){const r={};s&2&&(r.steps=n[1]),s&128&&(r.embeddedLayout=n[7]),s&4&&(r.backgroundWidth=n[2]),e.$set(r)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function cn(l){let e,t;return e=new mt({props:{index:l[13],steps:l[1],preload:l[5],stackBackground:l[4]}}),{c(){M(e.$$.fragment)},m(n,s){L(e,n,s),t=!0},p(n,s){const r={};s&8192&&(r.index=n[13]),s&2&&(r.steps=n[1]),s&32&&(r.preload=n[5]),s&16&&(r.stackBackground=n[4]),e.$set(r)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function un(l){let e,t,n,s;return n=new oe({props:{width:l[2],class:"background-container step-"+(l[13]+1)+" my-0 min-h-screen flex justify-center items-center relative",$$slots:{default:[cn]},$$scope:{ctx:l}}}),{c(){e=k("div"),t=k("div"),M(n.$$.fragment),p(t,"class","scroller-graphic-well w-full svelte-1osiuv5"),p(e,"slot","background"),p(e,"class","background min-h-screen relative p-0 flex justify-center svelte-1osiuv5"),p(e,"aria-hidden","true"),Y(e,"right",l[3]==="left opposite"),Y(e,"left",l[3]==="right opposite")},m(r,i){m(r,e,i),P(e,t),L(n,t,null),s=!0},p(r,i){const a={};i&4&&(a.width=r[2]),i&8192&&(a.class="background-container step-"+(r[13]+1)+" my-0 min-h-screen flex justify-center items-center relative"),i&532530&&(a.$$scope={dirty:i,ctx:r}),n.$set(a),(!s||i&8)&&Y(e,"right",r[3]==="left opposite"),(!s||i&8)&&Y(e,"left",r[3]==="right opposite")},i(r){s||(h(n.$$.fragment,r),s=!0)},o(r){y(n.$$.fragment,r),s=!1},d(r){r&&b(e),A(n)}}}function fn(l){let e,t,n,s;return t=new bt({props:{steps:l[1]}}),{c(){e=k("div"),M(t.$$.fragment),p(e,"slot","foreground"),p(e,"class",n="foreground "+l[3]+" w-full svelte-1osiuv5")},m(r,i){m(r,e,i),L(t,e,null),s=!0},p(r,i){const a={};i&2&&(a.steps=r[1]),t.$set(a),(!s||i&8&&n!==(n="foreground "+r[3]+" w-full svelte-1osiuv5"))&&p(e,"class",n)},i(r){s||(h(t.$$.fragment,r),s=!0)},o(r){y(t.$$.fragment,r),s=!1},d(r){r&&b(e),A(t)}}}function pn(l){let e,t,n,s,r;function i(c){l[16](c)}function a(c){l[17](c)}function o(c){l[18](c)}let d={threshold:l[8],top:l[9],bottom:l[10],parallax:l[11],query:"div.step-foreground-container",$$slots:{foreground:[fn],background:[un]},$$scope:{ctx:l}};return l[13]!==void 0&&(d.index=l[13]),l[14]!==void 0&&(d.offset=l[14]),l[15]!==void 0&&(d.progress=l[15]),e=new gt({props:d}),ne.push(()=>me(e,"index",i)),ne.push(()=>me(e,"offset",a)),ne.push(()=>me(e,"progress",o)),{c(){M(e.$$.fragment)},m(c,u){L(e,c,u),r=!0},p(c,u){const f={};u&256&&(f.threshold=c[8]),u&512&&(f.top=c[9]),u&1024&&(f.bottom=c[10]),u&2048&&(f.parallax=c[11]),u&532542&&(f.$$scope={dirty:u,ctx:c}),!t&&u&8192&&(t=!0,f.index=c[13],be(()=>t=!1)),!n&&u&16384&&(n=!0,f.offset=c[14],be(()=>n=!1)),!s&&u&32768&&(s=!0,f.progress=c[15],be(()=>s=!1)),e.$set(f)},i(c){r||(h(e.$$.fragment,c),r=!0)},o(c){y(e.$$.fragment,c),r=!1},d(c){A(e,c)}}}function gn(l){let e,t,n,s;const r=[an,rn],i=[];function a(o,d){return o[6]?1:0}return e=a(l),t=i[e]=r[e](l),{c(){t.c(),n=D()},m(o,d){i[e].m(o,d),m(o,n,d),s=!0},p(o,[d]){let c=e;e=a(o),e===c?i[e].p(o,d):(H(),y(i[c],1,1,()=>{i[c]=null}),R(),t=i[e],t?t.p(o,d):(t=i[e]=r[e](o),t.c()),h(t,1),t.m(n.parentNode,n))},i(o){s||(h(t),s=!0)},o(o){y(t),s=!1},d(o){o&&b(n),i[e].d(o)}}}function mn(l,e,t){let{id:n=""}=e,{steps:s=[]}=e,{backgroundWidth:r="fluid"}=e,{foregroundPosition:i="middle"}=e,{stackBackground:a=!0}=e,{preload:o=1}=e,{embedded:d=!1}=e,{embeddedLayout:c="fb"}=e,{threshold:u=.5}=e,{top:f=0}=e,{bottom:v=1}=e,{parallax:T=!1}=e,{class:$=""}=e,j=0,N,I;function K(_){j=_,t(13,j)}function U(_){N=_,t(14,N)}function g(_){I=_,t(15,I)}return l.$$set=_=>{"id"in _&&t(0,n=_.id),"steps"in _&&t(1,s=_.steps),"backgroundWidth"in _&&t(2,r=_.backgroundWidth),"foregroundPosition"in _&&t(3,i=_.foregroundPosition),"stackBackground"in _&&t(4,a=_.stackBackground),"preload"in _&&t(5,o=_.preload),"embedded"in _&&t(6,d=_.embedded),"embeddedLayout"in _&&t(7,c=_.embeddedLayout),"threshold"in _&&t(8,u=_.threshold),"top"in _&&t(9,f=_.top),"bottom"in _&&t(10,v=_.bottom),"parallax"in _&&t(11,T=_.parallax),"class"in _&&t(12,$=_.class)},[n,s,r,i,a,o,d,c,u,f,v,T,$,j,N,I,K,U,g]}class Te extends C{constructor(e){super(),W(this,e,mn,gn,q,{id:0,steps:1,backgroundWidth:2,foregroundPosition:3,stackBackground:4,preload:5,embedded:6,embeddedLayout:7,threshold:8,top:9,bottom:10,parallax:11,class:12})}}Te.__docgen={version:3,name:"Scroller.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"ID of the scroller container",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"required",description:""}],visibility:"public",description:"An array of step objects that define the steps in your scroller.\n\nEach step object in the array can have:\n\n- `background` A background component. **REQUIRED**\n- `backgroundProps` An object of props given to the background component\n- `foreground` Either a markdown-formatted string or a foreground component **REQUIRED**\n- `altText` A string describing the background graphic, which is read aloud after the foreground blurb. You can add it to each step or, if you want to add just one alt text to describe all graphics in the scroll section, add it to just the first step. **RECOMMENDED**\n- `foregroundProps` An object of props given to the foreground component",name:"steps",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[],visibility:"public",description:"Width of the background",name:"backgroundWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"fluid"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:`Position of the foreground. One of: middle, left, right, left opposite or right opposite.

"opposite" options push the background to the other side on larger viewports.`,name:"foregroundPosition",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"middle"},{keywords:[],visibility:"public",description:"Whether previous background steps should stack below the current one.\n\n- `true` _default_ Background graphics from previous steps will remain visible below the active one, allowing you to stack graphics with transparent backgrounds.\n- `false` Only the background graphic from the current step will show and backgrounds from previous steps are hidden.",name:"stackBackground",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{keywords:[],visibility:"public",description:"How many background steps to load before and after the currently active one, effectively lazy-loading them.\n\nSetting to `0` disables lazy-loading and loads all backgrounds at once.",name:"preload",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{keywords:[],visibility:"public",description:"Setting to `true` will unroll the scroll experience into a flat layout.",name:"embedded",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Layout order when `embedded` is `true`.\n\n- `fb` _default_ Foreground then background\n- `bf` Background then foreground",name:"embeddedLayout",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"fb"},{keywords:[],visibility:"public",description:"Threshold prop passed to [svelte-scroller](https://github.com/sveltejs/svelte-scroller#parameters)",name:"threshold",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:.5},{keywords:[],visibility:"public",description:"Top prop passed to [svelte-scroller](https://github.com/sveltejs/svelte-scroller#parameters)",name:"top",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[],visibility:"public",description:"Bottom prop passed to [svelte-scroller](https://github.com/sveltejs/svelte-scroller#parameters)",name:"bottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{keywords:[],visibility:"public",description:"Parallax prop passed to [svelte-scroller](https://github.com/sveltejs/svelte-scroller#parameters)",name:"parallax",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:"Set a class to target with SCSS.",keywords:[{name:"type",description:"{string}"}],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function bn(l){let e,t;return{c(){e=k("div"),p(e,"class","step svelte-13llgxe"),p(e,"style",t=`background: ${l[0]};`)},m(n,s){m(n,e,s)},p(n,[s]){s&1&&t!==(t=`background: ${n[0]};`)&&p(e,"style",t)},i:B,o:B,d(n){n&&b(e)}}}function _n(l,e,t){let{colour:n="lightblue"}=e;return l.$$set=s=>{"colour"in s&&t(0,n=s.colour)},[n]}class Z extends C{constructor(e){super(),W(this,e,_n,bn,q,{colour:0})}}Z.__docgen={version:3,name:"Step.svelte",data:[{visibility:"public",description:null,keywords:[],name:"colour",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"lightblue"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function hn(l){let e,t,n,s,r,i,a,o,d;return{c(){e=k("h4"),e.textContent="Interactive step",t=S(),n=k("p"),s=He("The count is "),r=He(l[0]),i=S(),a=k("button"),a.textContent="Click Me"},m(c,u){m(c,e,u),m(c,t,u),m(c,n,u),P(n,s),P(n,r),m(c,i,u),m(c,a,u),o||(d=ft(a,"click",l[1]),o=!0)},p(c,[u]){u&1&&Mt(r,c[0])},i:B,o:B,d(c){c&&(b(e),b(t),b(n),b(i),b(a)),o=!1,d()}}}function yn(l,e,t){let{count:n=0}=e;const s=()=>{t(0,n+=1)};return l.$$set=r=>{"count"in r&&t(0,n=r.count)},[n,s]}class he extends C{constructor(e){super(),W(this,e,yn,hn,q,{count:0})}}he.__docgen={version:3,name:"InteractiveForeground.svelte",data:[{visibility:"public",description:null,keywords:[],name:"count",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const kn=""+new URL("step-1-xl-9e8e4a9f.png",import.meta.url).href,vn=""+new URL("step-1-lg-a4a93d00.png",import.meta.url).href,wn=""+new URL("step-1-md-3e07fd88.png",import.meta.url).href,Tn=""+new URL("step-1-sm-5699114a.png",import.meta.url).href,Sn=""+new URL("step-1-xs-fafe3058.png",import.meta.url).href;function Ye(l){let e;return{c(){e=k("div"),e.innerHTML=`<div style="padding: 0 0 50% 0;"></div> <div id="g-step-1-xl-img" class="g-aiImg svelte-16iuhg" alt="" style="background-image: url(${kn});"></div>`,p(e,"id","g-step-1-xl"),p(e,"class","g-artboard svelte-16iuhg"),p(e,"style","")},m(t,n){m(t,e,n)},d(t){t&&b(e)}}}function xe(l){let e;return{c(){e=k("div"),e.innerHTML=`<div style="padding: 0 0 55.3763% 0;"></div> <div id="g-step-1-lg-img" class="g-aiImg svelte-16iuhg" alt="" style="background-image: url(${vn});"></div>`,p(e,"id","g-step-1-lg"),p(e,"class","g-artboard svelte-16iuhg"),p(e,"style","")},m(t,n){m(t,e,n)},d(t){t&&b(e)}}}function Je(l){let e;return{c(){e=k("div"),e.innerHTML=`<div style="padding: 0 0 55.7576% 0;"></div> <div id="g-step-1-md-img" class="g-aiImg svelte-16iuhg" alt="" style="background-image: url(${wn});"></div>`,p(e,"id","g-step-1-md"),p(e,"class","g-artboard svelte-16iuhg"),p(e,"style","")},m(t,n){m(t,e,n)},d(t){t&&b(e)}}}function Ze(l){let e;return{c(){e=k("div"),e.innerHTML=`<div style="padding: 0 0 49.6078% 0;"></div> <div id="g-step-1-sm-img" class="g-aiImg svelte-16iuhg" alt="" style="background-image: url(${Tn});"></div>`,p(e,"id","g-step-1-sm"),p(e,"class","g-artboard svelte-16iuhg"),p(e,"style","")},m(t,n){m(t,e,n)},d(t){t&&b(e)}}}function et(l){let e;return{c(){e=k("div"),e.innerHTML=`<div style="padding: 0 0 55.4545% 0;"></div> <div id="g-step-1-xs-img" class="g-aiImg svelte-16iuhg" alt="" style="background-image: url(${Sn});"></div>`,p(e,"id","g-step-1-xs"),p(e,"class","g-artboard svelte-16iuhg"),p(e,"style","")},m(t,n){m(t,e,n)},d(t){t&&b(e)}}}function Mn(l){let e,t,n,s,r,i,a=l[0]&&l[0]>=1200&&Ye(),o=l[0]&&l[0]>=930&&l[0]<1200&&xe(),d=l[0]&&l[0]>=660&&l[0]<930&&Je(),c=l[0]&&l[0]>=510&&l[0]<660&&Ze(),u=l[0]&&l[0]>=0&&l[0]<510&&et();return{c(){e=k("div"),a&&a.c(),t=S(),o&&o.c(),n=S(),d&&d.c(),s=S(),c&&c.c(),r=S(),u&&u.c(),p(e,"id","g-step-1-box"),p(e,"class","svelte-16iuhg"),ce(()=>l[1].call(e))},m(f,v){m(f,e,v),a&&a.m(e,null),P(e,t),o&&o.m(e,null),P(e,n),d&&d.m(e,null),P(e,s),c&&c.m(e,null),P(e,r),u&&u.m(e,null),i=ke(e,l[1].bind(e))},p(f,[v]){f[0]&&f[0]>=1200?a||(a=Ye(),a.c(),a.m(e,t)):a&&(a.d(1),a=null),f[0]&&f[0]>=930&&f[0]<1200?o||(o=xe(),o.c(),o.m(e,n)):o&&(o.d(1),o=null),f[0]&&f[0]>=660&&f[0]<930?d||(d=Je(),d.c(),d.m(e,s)):d&&(d.d(1),d=null),f[0]&&f[0]>=510&&f[0]<660?c||(c=Ze(),c.c(),c.m(e,r)):c&&(c.d(1),c=null),f[0]&&f[0]>=0&&f[0]<510?u||(u=et(),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i:B,o:B,d(f){f&&b(e),a&&a.d(),o&&o.d(),d&&d.d(),c&&c.d(),u&&u.d(),i()}}}function Ln(l,e,t){let n;function s(){n=this.clientWidth,t(0,n)}return[n,s]}class Se extends C{constructor(e){super(),W(this,e,Ln,Mn,q,{})}}Se.__docgen={version:3,name:"ai-scroller-1.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const An=""+new URL("step-2-xl-b45d096c.png",import.meta.url).href,Pn=""+new URL("step-2-lg-30b1e0ad.png",import.meta.url).href,$n=""+new URL("step-2-md-d6773993.png",import.meta.url).href,Bn=""+new URL("step-2-sm-3eafa6a0.png",import.meta.url).href,In=""+new URL("step-2-xs-f1632acb.png",import.meta.url).href;function tt(l){let e;return{c(){e=k("div"),e.innerHTML=`<div style="padding: 0 0 50% 0;"></div> <div id="g-step-2-xl-img" class="g-aiImg svelte-17g09mo" alt="" style="background-image: url(${An});"></div> <div id="g-ai0-1" class="g-annotation g-aiAbs g-aiPointText svelte-17g09mo" style="top:26.183%;margin-top:-21.1px;left:55.6774%;width:180px;"><p class="g-pstyle0 svelte-17g09mo">This thing here is</p> <p class="g-pstyle0 svelte-17g09mo">particularly important</p></div>`,p(e,"id","g-step-2-xl"),p(e,"class","g-artboard svelte-17g09mo"),p(e,"style","")},m(t,n){m(t,e,n)},d(t){t&&b(e)}}}function nt(l){let e;return{c(){e=k("div"),e.innerHTML=`<div style="padding: 0 0 55.3763% 0;"></div> <div id="g-step-2-lg-img" class="g-aiImg svelte-17g09mo" alt="" style="background-image: url(${Pn});"></div> <div id="g-ai1-1" class="g-annotation g-aiAbs g-aiPointText svelte-17g09mo" style="top:25.8206%;margin-top:-21px;left:56.2692%;width:162px;"><p class="g-pstyle0 svelte-17g09mo">This thing here is</p> <p class="g-pstyle0 svelte-17g09mo">particularly important</p></div>`,p(e,"id","g-step-2-lg"),p(e,"class","g-artboard svelte-17g09mo"),p(e,"style","")},m(t,n){m(t,e,n)},d(t){t&&b(e)}}}function st(l){let e;return{c(){e=k("div"),e.innerHTML=`<div style="padding: 0 0 55.7576% 0;"></div> <div id="g-step-2-md-img" class="g-aiImg svelte-17g09mo" alt="" style="background-image: url(${$n});"></div> <div id="g-ai2-1" class="g-annotation g-aiAbs g-aiPointText svelte-17g09mo" style="top:47.5478%;margin-top:-21px;left:32.4915%;width:162px;"><p class="g-pstyle0 svelte-17g09mo">This thing here is</p> <p class="g-pstyle0 svelte-17g09mo">particularly important</p></div>`,p(e,"id","g-step-2-md"),p(e,"class","g-artboard svelte-17g09mo"),p(e,"style","")},m(t,n){m(t,e,n)},d(t){t&&b(e)}}}function lt(l){let e;return{c(){e=k("div"),e.innerHTML=`<div style="padding: 0 0 49.6078% 0;"></div> <div id="g-step-2-sm-img" class="g-aiImg svelte-17g09mo" alt="" style="background-image: url(${Bn});"></div> <div id="g-ai3-1" class="g-annotation g-aiAbs g-aiPointText svelte-17g09mo" style="top:55.3265%;margin-top:-21px;left:30.7585%;width:162px;"><p class="g-pstyle0 svelte-17g09mo">This thing here is</p> <p class="g-pstyle0 svelte-17g09mo">particularly important</p></div>`,p(e,"id","g-step-2-sm"),p(e,"class","g-artboard svelte-17g09mo"),p(e,"style","")},m(t,n){m(t,e,n)},d(t){t&&b(e)}}}function ot(l){let e;return{c(){e=k("div"),e.innerHTML=`<div style="padding: 0 0 55.4545% 0;"></div> <div id="g-step-2-xs-img" class="g-aiImg svelte-17g09mo" alt="" style="background-image: url(${In});"></div> <div id="g-ai4-1" class="g-annotation g-aiAbs g-aiPointText svelte-17g09mo" style="top:22.3913%;margin-top:-21px;left:52.5519%;width:162px;"><p class="g-pstyle0 svelte-17g09mo">This thing here is</p> <p class="g-pstyle0 svelte-17g09mo">particularly important</p></div>`,p(e,"id","g-step-2-xs"),p(e,"class","g-artboard svelte-17g09mo"),p(e,"style","")},m(t,n){m(t,e,n)},d(t){t&&b(e)}}}function Cn(l){let e,t,n,s,r,i,a=l[0]&&l[0]>=1200&&tt(),o=l[0]&&l[0]>=930&&l[0]<1200&&nt(),d=l[0]&&l[0]>=660&&l[0]<930&&st(),c=l[0]&&l[0]>=510&&l[0]<660&&lt(),u=l[0]&&l[0]>=0&&l[0]<510&&ot();return{c(){e=k("div"),a&&a.c(),t=S(),o&&o.c(),n=S(),d&&d.c(),s=S(),c&&c.c(),r=S(),u&&u.c(),p(e,"id","g-step-2-box"),p(e,"class","svelte-17g09mo"),ce(()=>l[1].call(e))},m(f,v){m(f,e,v),a&&a.m(e,null),P(e,t),o&&o.m(e,null),P(e,n),d&&d.m(e,null),P(e,s),c&&c.m(e,null),P(e,r),u&&u.m(e,null),i=ke(e,l[1].bind(e))},p(f,[v]){f[0]&&f[0]>=1200?a||(a=tt(),a.c(),a.m(e,t)):a&&(a.d(1),a=null),f[0]&&f[0]>=930&&f[0]<1200?o||(o=nt(),o.c(),o.m(e,n)):o&&(o.d(1),o=null),f[0]&&f[0]>=660&&f[0]<930?d||(d=st(),d.c(),d.m(e,s)):d&&(d.d(1),d=null),f[0]&&f[0]>=510&&f[0]<660?c||(c=lt(),c.c(),c.m(e,r)):c&&(c.d(1),c=null),f[0]&&f[0]>=0&&f[0]<510?u||(u=ot(),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i:B,o:B,d(f){f&&b(e),a&&a.d(),o&&o.d(),d&&d.d(),c&&c.d(),u&&u.d(),i()}}}function Wn(l,e,t){let n=null;function s(){n=this.clientWidth,t(0,n)}return[n,s]}class Me extends C{constructor(e){super(),W(this,e,Wn,Cn,q,{})}}Me.__docgen={version:3,name:"ai-scroller-2.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const qn=""+new URL("step-3-xl-3bb2d2b2.png",import.meta.url).href,Dn=""+new URL("step-3-lg-2dc740ea.png",import.meta.url).href,Hn=""+new URL("step-3-md-58a32062.png",import.meta.url).href,Rn=""+new URL("step-3-sm-7a5146ca.png",import.meta.url).href,Vn=""+new URL("step-3-xs-c074a791.png",import.meta.url).href;function it(l){let e;return{c(){e=k("div"),e.innerHTML=`<div style="padding: 0 0 50% 0;"></div> <div id="g-step-3-xl-img" class="g-aiImg svelte-qh37gt" alt="" style="background-image: url(${qn});"></div> <div id="g-ai0-1" class="g-step-3 g-aiAbs g-aiPointText svelte-qh37gt" style="top:19.683%;margin-top:-21.1px;left:54.3441%;width:130px;"><p class="g-pstyle0 svelte-qh37gt">Something</p> <p class="g-pstyle0 svelte-qh37gt">happened here</p></div>`,p(e,"id","g-step-3-xl"),p(e,"class","g-artboard svelte-qh37gt"),p(e,"style","")},m(t,n){m(t,e,n)},d(t){t&&b(e)}}}function rt(l){let e;return{c(){e=k("div"),e.innerHTML=`<div style="padding: 0 0 55.3763% 0;"></div> <div id="g-step-3-lg-img" class="g-aiImg svelte-qh37gt" alt="" style="background-image: url(${Dn});"></div> <div id="g-ai1-1" class="g-step-3 g-aiAbs g-aiPointText svelte-qh37gt" style="top:27.5682%;margin-top:-21px;left:54.9127%;width:118px;"><p class="g-pstyle0 svelte-qh37gt">Something</p> <p class="g-pstyle0 svelte-qh37gt">happened here</p></div>`,p(e,"id","g-step-3-lg"),p(e,"class","g-artboard svelte-qh37gt"),p(e,"style","")},m(t,n){m(t,e,n)},d(t){t&&b(e)}}}function at(l){let e;return{c(){e=k("div"),e.innerHTML=`<div style="padding: 0 0 55.7576% 0;"></div> <div id="g-step-3-md-img" class="g-aiImg svelte-qh37gt" alt="" style="background-image: url(${Hn});"></div> <div id="g-ai2-1" class="g-step-3 g-aiAbs g-aiPointText svelte-qh37gt" style="top:23.3631%;margin-top:-21px;left:50.4963%;width:118px;"><p class="g-pstyle0 svelte-qh37gt">Something</p> <p class="g-pstyle0 svelte-qh37gt">happened here</p></div>`,p(e,"id","g-step-3-md"),p(e,"class","g-artboard svelte-qh37gt"),p(e,"style","")},m(t,n){m(t,e,n)},d(t){t&&b(e)}}}function dt(l){let e;return{c(){e=k("div"),e.innerHTML=`<div style="padding: 0 0 49.6078% 0;"></div> <div id="g-step-3-sm-img" class="g-aiImg svelte-qh37gt" alt="" style="background-image: url(${Rn});"></div> <div id="g-ai3-1" class="g-step-3 g-aiAbs g-aiPointText svelte-qh37gt" style="top:20.1486%;margin-top:-21px;left:55.7925%;width:118px;"><p class="g-pstyle0 svelte-qh37gt">Something</p> <p class="g-pstyle0 svelte-qh37gt">happened here</p></div>`,p(e,"id","g-step-3-sm"),p(e,"class","g-artboard svelte-qh37gt"),p(e,"style","")},m(t,n){m(t,e,n)},d(t){t&&b(e)}}}function ct(l){let e;return{c(){e=k("div"),e.innerHTML=`<div style="padding: 0 0 55.4545% 0;"></div> <div id="g-step-3-xs-img" class="g-aiImg svelte-qh37gt" alt="" style="background-image: url(${Vn});"></div> <div id="g-ai4-1" class="g-step-3 g-aiAbs g-aiPointText svelte-qh37gt" style="top:42.0634%;margin-top:-21px;left:27.3523%;width:118px;"><p class="g-pstyle0 svelte-qh37gt">Something</p> <p class="g-pstyle0 svelte-qh37gt">happened here</p></div>`,p(e,"id","g-step-3-xs"),p(e,"class","g-artboard svelte-qh37gt"),p(e,"style","")},m(t,n){m(t,e,n)},d(t){t&&b(e)}}}function jn(l){let e,t,n,s,r,i,a=l[0]&&l[0]>=1200&&it(),o=l[0]&&l[0]>=930&&l[0]<1200&&rt(),d=l[0]&&l[0]>=660&&l[0]<930&&at(),c=l[0]&&l[0]>=510&&l[0]<660&&dt(),u=l[0]&&l[0]>=0&&l[0]<510&&ct();return{c(){e=k("div"),a&&a.c(),t=S(),o&&o.c(),n=S(),d&&d.c(),s=S(),c&&c.c(),r=S(),u&&u.c(),p(e,"id","g-step-3-box"),p(e,"class","svelte-qh37gt"),ce(()=>l[1].call(e))},m(f,v){m(f,e,v),a&&a.m(e,null),P(e,t),o&&o.m(e,null),P(e,n),d&&d.m(e,null),P(e,s),c&&c.m(e,null),P(e,r),u&&u.m(e,null),i=ke(e,l[1].bind(e))},p(f,[v]){f[0]&&f[0]>=1200?a||(a=it(),a.c(),a.m(e,t)):a&&(a.d(1),a=null),f[0]&&f[0]>=930&&f[0]<1200?o||(o=rt(),o.c(),o.m(e,n)):o&&(o.d(1),o=null),f[0]&&f[0]>=660&&f[0]<930?d||(d=at(),d.c(),d.m(e,s)):d&&(d.d(1),d=null),f[0]&&f[0]>=510&&f[0]<660?c||(c=dt(),c.c(),c.m(e,r)):c&&(c.d(1),c=null),f[0]&&f[0]>=0&&f[0]<510?u||(u=ct(),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i:B,o:B,d(f){f&&b(e),a&&a.d(),o&&o.d(),d&&d.d(),c&&c.d(),u&&u.d(),i()}}}function Un(l,e,t){let n=null;function s(){n=this.clientWidth,t(0,n)}return[n,s]}class Le extends C{constructor(e){super(),W(this,e,Un,jn,q,{})}}Le.__docgen={version:3,name:"ai-scroller-3.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ut=(l,e,t="")=>({id:l.ID,backgroundWidth:l.Width,foregroundPosition:l.ForegroundPosition,stackBackground:l.StackBackground==="true"||!l.StackBackground,embeddedLayout:l.EmbeddedLayout,preload:l.Preload&&parseInt(l.Preload)||1,steps:l.Steps.map(n=>({background:e[n.Background],backgroundProps:{assetsPath:t},foreground:n.Text,altText:n.AltText}))});function Fn(l){let e,t;const n=[l[3]];let s={};for(let r=0;r<n.length;r+=1)s=O(s,n[r]);return e=new Te({props:s}),{c(){M(e.$$.fragment)},m(r,i){L(e,r,i),t=!0},p(r,i){const a=i&8?F(n,[z(r[3])]):{};e.$set(a)},i(r){t||(h(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){A(e,r)}}}function Nn(l){let e,t,n,s,r,i,a,o,d,c,u,f;const v=[{title:"Components/Scroller"},{component:Te},l[2]];let T={};for(let g=0;g<v.length;g+=1)T=O(T,v[g]);e=new At({props:T}),n=new Pt({props:{$$slots:{default:[Fn,({args:g})=>({3:g}),({args:g})=>g?8:0]},$$scope:{ctx:l}}}),r=new ae({props:{name:"Default",args:{steps:[{background:Z,backgroundProps:{colour:"red"},foreground:`#### Step 1

Lorem ipsum red`,altText:"Red background"},{background:Z,backgroundProps:{colour:"blue"},foreground:`#### Step 2

Lorem ipsum blue`,altText:"Blue background"},{background:Z,backgroundProps:{colour:"green"},foreground:`#### Step 3

Lorem ipsum green`,altText:"Green background"}],foregroundPosition:"middle",backgroundWidth:"fluid",embeddedLayout:"fb",embedded:!1}}});const $=[{name:"🚀 QUICKIT"},{args:ut(l[1],l[0])},_e(qt)];let j={};for(let g=0;g<$.length;g+=1)j=O(j,$[g]);a=new ae({props:j});const N=[{name:"Foreground components"},{args:{steps:[{background:Z,backgroundProps:{colour:"red"},foreground:he},{background:Z,backgroundProps:{colour:"blue"},foreground:`#### Step 2

Lorem ipsum blue`},{background:Z,backgroundProps:{colour:"green"},foreground:he,foregroundProps:{count:100}}],foregroundPosition:"middle",backgroundWidth:"fluid",embeddedLayout:"fb",embedded:!1}},_e(Ct)];let I={};for(let g=0;g<N.length;g+=1)I=O(I,N[g]);d=new ae({props:I});const K=[{name:"Ai2svelte"},{args:{steps:[{background:Se,backgroundProps:{colour:"red"},foreground:`#### Step 1

Lorem ipsum`,altText:"A map showing the Upper West side in New York City."},{background:Me,backgroundProps:{colour:"blue"},foreground:`#### Step 2

Lorem ipsum`,altText:"The same map now highlights 98th Street where something interesting happened."},{background:Le,backgroundProps:{colour:"green"},foreground:`#### Step 3

Lorem ipsum`,altText:"The same map now highlights three locations near 98th Street where something particulary important happened."}],foregroundPosition:"middle",backgroundWidth:"fluid",embeddedLayout:"fb",embedded:!1}},_e(Wt)];let U={};for(let g=0;g<K.length;g+=1)U=O(U,K[g]);return u=new ae({props:U}),{c(){M(e.$$.fragment),t=S(),M(n.$$.fragment),s=S(),M(r.$$.fragment),i=S(),M(a.$$.fragment),o=S(),M(d.$$.fragment),c=S(),M(u.$$.fragment)},m(g,_){L(e,g,_),m(g,t,_),L(n,g,_),m(g,s,_),L(r,g,_),m(g,i,_),L(a,g,_),m(g,o,_),L(d,g,_),m(g,c,_),L(u,g,_),f=!0},p(g,[_]){const re=_&4?F(v,[v[0],v[1],z(g[2])]):{};e.$set(re);const G={};_&24&&(G.$$scope={dirty:_,ctx:g}),n.$set(G);const Q=_&3?F($,[$[0],{args:ut(g[1],g[0])},$[2]]):{};a.$set(Q);const X={};d.$set(X);const J={};u.$set(J)},i(g){f||(h(e.$$.fragment,g),h(n.$$.fragment,g),h(r.$$.fragment,g),h(a.$$.fragment,g),h(d.$$.fragment,g),h(u.$$.fragment,g),f=!0)},o(g){y(e.$$.fragment,g),y(n.$$.fragment,g),y(r.$$.fragment,g),y(a.$$.fragment,g),y(d.$$.fragment,g),y(u.$$.fragment,g),f=!1},d(g){g&&(b(t),b(s),b(i),b(o),b(c)),A(e,g),A(n,g),A(r,g),A(a,g),A(d,g),A(u,g)}}}function En(l){const e={AiMap1:Se,AiMap2:Me,AiMap3:Le},t={Type:"scroller",Width:"fluid",ForegroundPosition:"middle",ID:"my-scroller",StackBackground:"true",Steps:[{Background:"AiMap1",Text:`#### Step 1

Lorem ipsum`,AltText:"A map showing the Upper West side in New York City."},{Background:"AiMap2",Text:`#### Step 2

Lorem ipsum`,AltText:"The same map now highlights 98th Street."},{Background:"AiMap3",Text:`#### Step 3

Lorem ipsum`,AltText:"The same map now highlights three locations near 98th Street where something particulary important happened."}]},n={...Bt(It),argTypes:{steps:{control:!1},backgroundWidth:{control:"select",options:["normal","wide","wider","widest","fluid"]},foregroundPosition:{control:"select",options:["middle","left","right","left opposite","right opposite"]},embeddedLayout:{control:"select",options:["fb","bf"]}}};return[e,t,n]}class zn extends C{constructor(e){super(),W(this,e,En,Nn,q,{})}}const ie=Lt(zn,{meta:{title:"Components/Scroller"},stories:{"tpl:default":{name:"default",template:!0,source:"<Scroller {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},QUICKIT:{name:"🚀 QUICKIT",template:!1,source:"",hasArgs:!1},ForegroundComponents:{name:"Foreground components",template:!1,source:"",hasArgs:!1},Ai2svelte:{name:"Ai2svelte",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","interactiveDocs","ai2svelteDocs","quickitDocs","Scroller","BasicStep","InteractiveForeground","AiMap1","AiMap2","AiMap3","withComponentDocs","withStoryDocs","getScrollerPropsFromDoc"]}),ns=ie.meta,ss=["Default","QUICKIT","ForegroundComponents","Ai2svelte"],ls=ie.stories.Default,os=ie.stories.QUICKIT,is=ie.stories.ForegroundComponents,rs=ie.stories.Ai2svelte;export{rs as Ai2svelte,ls as Default,is as ForegroundComponents,os as QUICKIT,ss as __namedExportsOrder,ns as default};
//# sourceMappingURL=Scroller.stories-3b6d5b82.js.map
