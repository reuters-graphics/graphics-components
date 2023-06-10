import{S as C,i as W,s as q,R as be,q as Ce,w as b,D as y,aa as ne,a as _,z as m,N as mt,u as We,r as qe,v as De,b as v,t as T,d as k,o as Mt,P as Pt,f as le,e as D,g as j,c as R,a5 as Te,h as Z,j as A,x as c,y as J,m as B,k as K,l as G,n as I,p as Q,E as P,W as At,a3 as ve,a4 as we,M as je,Y as Bt,T as Se,C as h}from"./index-25af778d.js";import{p as It,M as $t,T as Ct,S as ue}from"./collect-stories-cce06d4a.js";import{m as F}from"./marked.esm-76161808.js";import{B as ie}from"./Block-9c89ee1a.js";import{a as se,w as Wt}from"./withParams-90715500.js";const qt=`The \`Scroller\` component helps you quickly create basic scrollytelling graphics with several layout options.

Check out the "Canvas" tab to play with the layout options available on this component.

> This component is designed to handle most common layouts for scrollytelling. If you need something more complex, though, you should probably use [svelte-scroller](https://github.com/sveltejs/svelte-scroller), which is a lower level component you can more easily customize.

\`\`\`html
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
`,Re=`Instead of just text, you can use any component in the foreground, too, and pass whatever props you need to it.

If you're making your own custom foreground component, remember to add alt text describing the background graphic.

\`\`\`html
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
`,Ue=`A more detailed example of using \`Scroller\` with graphics created by [ai2svelte](https://github.com/reuters-graphics/ai2svelte).

\`\`\`html
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

\`\`\`html
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

{#each content.blocks as block} {#if block.Type === 'text'}
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
{/if} {/each}
\`\`\`
`,Ve=`For Graphics Kit users, the \`Scroller\` component is built-in for scrollytelling with [ai2svelte](https://github.com/reuters-graphics/ai2svelte) graphics and text.

First, import your ai2svelte graphics in \`App.svelte\` and add them to the \`aiCharts\` object;

\`\`\`html
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
`;const{window:bt}=Pt,Dt=o=>({}),Fe=o=>({}),jt=o=>({}),He=o=>({});function Rt(o){let e,t,s,n,r,l,a,i,d;be(o[21]);const u=o[20].background,f=Ce(u,o,o[19],He),p=o[20].foreground,w=Ce(p,o,o[19],Fe);return{c(){e=b("svelte-scroller-outer"),t=b("svelte-scroller-background-container"),s=b("svelte-scroller-background"),f&&f.c(),r=y(),l=b("svelte-scroller-foreground"),w&&w.c(),ne(s,"class","svelte-1yjh2jm"),ne(t,"class","background-container svelte-1yjh2jm"),ne(t,"style",n=""+(o[5]+o[4])),ne(l,"class","svelte-1yjh2jm"),ne(e,"class","svelte-1yjh2jm")},m(L,$){_(L,e,$),m(e,t),m(t,s),f&&f.m(s,null),o[22](s),m(e,r),m(e,l),w&&w.m(l,null),o[23](l),o[24](e),a=!0,i||(d=mt(bt,"resize",o[21]),i=!0)},p(L,$){f&&f.p&&(!a||$[0]&524288)&&We(f,u,L,L[19],a?De(u,L[19],$,jt):qe(L[19]),He),(!a||$[0]&48&&n!==(n=""+(L[5]+L[4])))&&ne(t,"style",n),w&&w.p&&(!a||$[0]&524288)&&We(w,p,L,L[19],a?De(p,L[19],$,Dt):qe(L[19]),Fe)},i(L){a||(v(f,L),v(w,L),a=!0)},o(L){T(f,L),T(w,L),a=!1},d(L){L&&k(e),f&&f.d(L),o[22](null),w&&w.d(L),o[23](null),o[24](null),i=!1,d()}}}const z=[];let ce;if(typeof window<"u"){const o=()=>z.forEach(e=>e());window.addEventListener("scroll",o),window.addEventListener("resize",o)}if(typeof IntersectionObserver<"u"){const o=new Map,e=new IntersectionObserver((t,s)=>{t.forEach(n=>{const r=o.get(n.target),l=z.indexOf(r);n.isIntersecting?l===-1&&z.push(r):(r(),l!==-1&&z.splice(l,1))})},{rootMargin:"400px 0px"});ce={add:({outer:t,update:s})=>{const{top:n,bottom:r}=t.getBoundingClientRect();n<window.innerHeight&&r>0&&z.push(s),o.set(t,s),e.observe(t)},remove:({outer:t,update:s})=>{const n=z.indexOf(s);n!==-1&&z.splice(n,1),o.delete(t),e.unobserve(t)}}}else ce={add:({update:o})=>{z.push(o)},remove:({update:o})=>{const e=z.indexOf(o);e!==-1&&z.splice(e,1)}};function Ut(o,e,t){let s,n,r,l,a,{$$slots:i={},$$scope:d}=e,{top:u=0}=e,{bottom:f=1}=e,{threshold:p=.5}=e,{query:w="section"}=e,{parallax:L=!1}=e,{index:$=0}=e,{count:H=0}=e,{offset:U=0}=e,{progress:V=0}=e,{visible:E=!1}=e,N,g,M,de,Y,X=0,x,ee=0,he=1;Mt(()=>{Y=g.querySelectorAll(w),t(7,H=Y.length),_e();const S={outer:N,update:_e};return ce.add(S),()=>ce.remove(S)});function _e(){if(!g)return;const S=N.getBoundingClientRect();de=S.left,t(18,he=S.right-de);const te=g.getBoundingClientRect(),Pe=M.getBoundingClientRect();t(10,E=te.top<X&&te.bottom>0);const ke=te.bottom-te.top,Ae=Pe.bottom-Pe.top,ye=n-s;t(9,V=(s-te.top)/(ke-ye)),V<=0?(t(17,ee=0),t(16,x=!1)):V>=1?(t(17,ee=L?ke-Ae:ke-ye),t(16,x=!1)):(t(17,ee=L?Math.round(s-V*(Ae-ye)):s),t(16,x=!0));for(let oe=0;oe<Y.length;oe++){const Lt=Y[oe],{top:Be}=Lt.getBoundingClientRect(),Ie=Y[oe+1],$e=Ie?Ie.getBoundingClientRect().top:te.bottom;if(t(8,U=(r-Be)/($e-Be)),$e>=r){t(6,$=oe);break}}}function vt(){t(0,X=bt.innerHeight)}function wt(S){le[S?"unshift":"push"](()=>{M=S,t(3,M)})}function Tt(S){le[S?"unshift":"push"](()=>{g=S,t(2,g)})}function St(S){le[S?"unshift":"push"](()=>{N=S,t(1,N)})}return o.$$set=S=>{"top"in S&&t(11,u=S.top),"bottom"in S&&t(12,f=S.bottom),"threshold"in S&&t(13,p=S.threshold),"query"in S&&t(14,w=S.query),"parallax"in S&&t(15,L=S.parallax),"index"in S&&t(6,$=S.index),"count"in S&&t(7,H=S.count),"offset"in S&&t(8,U=S.offset),"progress"in S&&t(9,V=S.progress),"visible"in S&&t(10,E=S.visible),"$$scope"in S&&t(19,d=S.$$scope)},o.$$.update=()=>{o.$$.dirty[0]&2049&&(s=Math.round(u*X)),o.$$.dirty[0]&4097&&(n=Math.round(f*X)),o.$$.dirty[0]&8193&&(r=Math.round(p*X)),o.$$.dirty[0]&47104&&_e(),o.$$.dirty[0]&196608&&t(5,l=`
		position: ${x?"fixed":"absolute"};
		top: 0;
		transform: translate(0, ${ee}px);
		z-index: 1;
	`),o.$$.dirty[0]&327680&&t(4,a=x?`width:${he}px;`:"")},[X,N,g,M,a,l,$,H,U,V,E,u,f,p,w,L,x,ee,he,d,i,vt,wt,Tt,St]}let ht=class extends C{constructor(e){super(),W(this,e,Ut,Rt,q,{top:11,bottom:12,threshold:13,query:14,parallax:15,index:6,count:7,offset:8,progress:9,visible:10},null,[-1,-1])}};ht.__docgen={version:3,name:"Scroller.svelte",data:[{keywords:[],visibility:"public",description:"config",name:"top",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"bottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{visibility:"public",description:null,keywords:[],name:"threshold",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:.5},{visibility:"public",description:null,keywords:[],name:"query",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"section"},{visibility:"public",description:null,keywords:[],name:"parallax",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"bindings",name:"index",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"count",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"offset",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"progress",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"visible",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"background"},{keywords:[],visibility:"public",description:"",name:"foreground"}],refs:[]};function Ne(o,e,t){const s=o.slice();return s[4]=e[t],s[6]=t,s}function Ee(o){let e,t,s,n;const r=[o[4].backgroundProps||{}];var l=o[4].background;function a(i){let d={};for(let u=0;u<r.length;u+=1)d=Q(d,r[u]);return{props:d}}return l&&(t=Z(l,a())),{c(){e=b("div"),t&&A(t.$$.fragment),s=y(),c(e,"class","step-background step-"+(o[6]+1)+" svelte-va4hxg"),J(e,"visible",o[3]?o[6]<=o[0]:o[6]===o[0]),J(e,"hidden",o[3]?o[6]>o[0]:o[6]!==o[0])},m(i,d){_(i,e,d),t&&B(t,e,null),m(e,s),n=!0},p(i,d){const u=d&2?K(r,[G(i[4].backgroundProps||{})]):{};if(d&2&&l!==(l=i[4].background)){if(t){j();const f=t;T(f.$$.fragment,1,0,()=>{I(f,1)}),R()}l?(t=Z(l,a()),A(t.$$.fragment),v(t.$$.fragment,1),B(t,e,s)):t=null}else l&&t.$set(u);(!n||d&9)&&J(e,"visible",i[3]?i[6]<=i[0]:i[6]===i[0]),(!n||d&9)&&J(e,"hidden",i[3]?i[6]>i[0]:i[6]!==i[0])},i(i){n||(t&&v(t.$$.fragment,i),n=!0)},o(i){t&&T(t.$$.fragment,i),n=!1},d(i){i&&k(e),t&&I(t)}}}function ze(o){let e,t,s=(o[2]===0||o[6]>=(o[3]?0:o[0]-o[2])&&o[6]<=o[0]+o[2])&&Ee(o);return{c(){s&&s.c(),e=D()},m(n,r){s&&s.m(n,r),_(n,e,r),t=!0},p(n,r){n[2]===0||n[6]>=(n[3]?0:n[0]-n[2])&&n[6]<=n[0]+n[2]?s?(s.p(n,r),r&13&&v(s,1)):(s=Ee(n),s.c(),v(s,1),s.m(e.parentNode,e)):s&&(j(),T(s,1,1,()=>{s=null}),R())},i(n){t||(v(s),t=!0)},o(n){T(s),t=!1},d(n){s&&s.d(n),n&&k(e)}}}function Vt(o){let e,t,s=o[1],n=[];for(let l=0;l<s.length;l+=1)n[l]=ze(Ne(o,s,l));const r=l=>T(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=D()},m(l,a){for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(l,a);_(l,e,a),t=!0},p(l,[a]){if(a&15){s=l[1];let i;for(i=0;i<s.length;i+=1){const d=Ne(l,s,i);n[i]?(n[i].p(d,a),v(n[i],1)):(n[i]=ze(d),n[i].c(),v(n[i],1),n[i].m(e.parentNode,e))}for(j(),i=s.length;i<n.length;i+=1)r(i);R()}},i(l){if(!t){for(let a=0;a<s.length;a+=1)v(n[a]);t=!0}},o(l){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)T(n[a]);t=!1},d(l){Te(n,l),l&&k(e)}}}function Ft(o,e,t){let{index:s}=e,{steps:n=[]}=e,{preload:r=1}=e,{stackBackground:l=!0}=e;return o.$$set=a=>{"index"in a&&t(0,s=a.index),"steps"in a&&t(1,n=a.steps),"preload"in a&&t(2,r=a.preload),"stackBackground"in a&&t(3,l=a.stackBackground)},[s,n,r,l]}let _t=class extends C{constructor(e){super(),W(this,e,Ft,Vt,q,{index:0,steps:1,preload:2,stackBackground:3})}};_t.__docgen={version:3,name:"Background.svelte",data:[{visibility:"public",description:null,keywords:[],name:"index",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"steps",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"preload",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{visibility:"public",description:null,keywords:[],name:"stackBackground",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Oe(o,e,t){const s=o.slice();return s[1]=e[t],s[3]=t,s}function Ht(o){let e,t,s,n,r,l;const a=[zt,Et],i=[];function d(f,p){return typeof f[1].foreground=="string"?0:1}t=d(o),s=i[t]=a[t](o);let u=typeof o[1].altText=="string"&&Ke(o);return{c(){e=b("div"),s.c(),n=y(),u&&u.c(),r=D(),c(e,"class","step-foreground svelte-182b3uj")},m(f,p){_(f,e,p),i[t].m(e,null),_(f,n,p),u&&u.m(f,p),_(f,r,p),l=!0},p(f,p){let w=t;t=d(f),t===w?i[t].p(f,p):(j(),T(i[w],1,1,()=>{i[w]=null}),R(),s=i[t],s?s.p(f,p):(s=i[t]=a[t](f),s.c()),v(s,1),s.m(e,null)),typeof f[1].altText=="string"?u?u.p(f,p):(u=Ke(f),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null)},i(f){l||(v(s),l=!0)},o(f){T(s),l=!1},d(f){f&&k(e),i[t].d(),f&&k(n),u&&u.d(f),f&&k(r)}}}function Nt(o){let e,t,s,n=typeof o[1].altText=="string"&&Ge(o);return{c(){e=b("div"),t=y(),n&&n.c(),s=D(),c(e,"class","empty-step-foreground")},m(r,l){_(r,e,l),_(r,t,l),n&&n.m(r,l),_(r,s,l)},p(r,l){typeof r[1].altText=="string"?n?n.p(r,l):(n=Ge(r),n.c(),n.m(s.parentNode,s)):n&&(n.d(1),n=null)},i:P,o:P,d(r){r&&k(e),r&&k(t),n&&n.d(r),r&&k(s)}}}function Et(o){let e,t,s;const n=[o[1].foregroundProps||{}];var r=o[1].foreground;function l(a){let i={};for(let d=0;d<n.length;d+=1)i=Q(i,n[d]);return{props:i}}return r&&(e=Z(r,l())),{c(){e&&A(e.$$.fragment),t=D()},m(a,i){e&&B(e,a,i),_(a,t,i),s=!0},p(a,i){const d=i&1?K(n,[G(a[1].foregroundProps||{})]):{};if(i&1&&r!==(r=a[1].foreground)){if(e){j();const u=e;T(u.$$.fragment,1,0,()=>{I(u,1)}),R()}r?(e=Z(r,l()),A(e.$$.fragment),v(e.$$.fragment,1),B(e,t.parentNode,t)):e=null}else r&&e.$set(d)},i(a){s||(e&&v(e.$$.fragment,a),s=!0)},o(a){e&&T(e.$$.fragment,a),s=!1},d(a){a&&k(t),e&&I(e,a)}}}function zt(o){let e,t=F.parse(o[1].foreground)+"",s;return{c(){e=new At(!1),s=D(),e.a=s},m(n,r){e.m(t,n,r),_(n,s,r)},p(n,r){r&1&&t!==(t=F.parse(n[1].foreground)+"")&&e.p(t)},i:P,o:P,d(n){n&&k(s),n&&e.d()}}}function Ke(o){let e,t=F.parse(o[1].altText)+"";return{c(){e=b("div"),c(e,"class","background-alt-text visually-hidden svelte-182b3uj")},m(s,n){_(s,e,n),e.innerHTML=t},p(s,n){n&1&&t!==(t=F.parse(s[1].altText)+"")&&(e.innerHTML=t)},d(s){s&&k(e)}}}function Ge(o){let e,t=F.parse(o[1].altText)+"";return{c(){e=b("div"),c(e,"class","background-alt-text visually-hidden svelte-182b3uj")},m(s,n){_(s,e,n),e.innerHTML=t},p(s,n){n&1&&t!==(t=F.parse(s[1].altText)+"")&&(e.innerHTML=t)},d(s){s&&k(e)}}}function Qe(o){let e,t,s,n,r;const l=[Nt,Ht],a=[];function i(d,u){return d[1].foreground===""||!d[1].foreground?0:1}return t=i(o),s=a[t]=l[t](o),{c(){e=b("div"),s.c(),n=y(),c(e,"class","step-foreground-container step-"+(o[3]+1)+" svelte-182b3uj")},m(d,u){_(d,e,u),a[t].m(e,null),m(e,n),r=!0},p(d,u){let f=t;t=i(d),t===f?a[t].p(d,u):(j(),T(a[f],1,1,()=>{a[f]=null}),R(),s=a[t],s?s.p(d,u):(s=a[t]=l[t](d),s.c()),v(s,1),s.m(e,n))},i(d){r||(v(s),r=!0)},o(d){T(s),r=!1},d(d){d&&k(e),a[t].d()}}}function Ot(o){let e,t,s=o[0],n=[];for(let l=0;l<s.length;l+=1)n[l]=Qe(Oe(o,s,l));const r=l=>T(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=D()},m(l,a){for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(l,a);_(l,e,a),t=!0},p(l,[a]){if(a&1){s=l[0];let i;for(i=0;i<s.length;i+=1){const d=Oe(l,s,i);n[i]?(n[i].p(d,a),v(n[i],1)):(n[i]=Qe(d),n[i].c(),v(n[i],1),n[i].m(e.parentNode,e))}for(j(),i=s.length;i<n.length;i+=1)r(i);R()}},i(l){if(!t){for(let a=0;a<s.length;a+=1)v(n[a]);t=!0}},o(l){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)T(n[a]);t=!1},d(l){Te(n,l),l&&k(e)}}}function Kt(o,e,t){let{steps:s=[]}=e;return o.$$set=n=>{"steps"in n&&t(0,s=n.steps)},[s]}let kt=class extends C{constructor(e){super(),W(this,e,Kt,Ot,q,{steps:0})}};kt.__docgen={version:3,name:"Foreground.svelte",data:[{visibility:"public",description:null,keywords:[],name:"steps",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Gt(o){let e,t,s,n;const r=[o[0].backgroundProps||{}];var l=o[0].background;function a(i){let d={};for(let u=0;u<r.length;u+=1)d=Q(d,r[u]);return{props:d}}return l&&(t=Z(l,a())),{c(){e=b("div"),t&&A(t.$$.fragment),c(e,"class",s="embedded-background step-"+(o[2]+1)),c(e,"aria-hidden","true")},m(i,d){_(i,e,d),t&&B(t,e,null),n=!0},p(i,d){const u=d&1?K(r,[G(i[0].backgroundProps||{})]):{};if(d&1&&l!==(l=i[0].background)){if(t){j();const f=t;T(f.$$.fragment,1,0,()=>{I(f,1)}),R()}l?(t=Z(l,a()),A(t.$$.fragment),v(t.$$.fragment,1),B(t,e,null)):t=null}else l&&t.$set(u);(!n||d&4&&s!==(s="embedded-background step-"+(i[2]+1)))&&c(e,"class",s)},i(i){n||(t&&v(t.$$.fragment,i),n=!0)},o(i){t&&T(t.$$.fragment,i),n=!1},d(i){i&&k(e),t&&I(t)}}}function Qt(o){let e,t;return e=new ie({props:{width:o[1],cls:"background-container step-"+(o[2]+1),$$slots:{default:[Gt]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment)},m(s,n){B(e,s,n),t=!0},p(s,[n]){const r={};n&2&&(r.width=s[1]),n&4&&(r.cls="background-container step-"+(s[2]+1)),n&13&&(r.$$scope={dirty:n,ctx:s}),e.$set(r)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){I(e,s)}}}function Yt(o,e,t){let{step:s}=e,{backgroundWidth:n}=e,{index:r}=e;return o.$$set=l=>{"step"in l&&t(0,s=l.step),"backgroundWidth"in l&&t(1,n=l.backgroundWidth),"index"in l&&t(2,r=l.index)},[s,n,r]}class Le extends C{constructor(e){super(),W(this,e,Yt,Qt,q,{step:0,backgroundWidth:1,index:2})}}Le.__docgen={version:3,name:"Background.svelte",data:[{visibility:"public",description:null,keywords:[],name:"step",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"backgroundWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"index",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Xt(o){let e,t,s,n;const r=[o[0].foregroundProps||{}];var l=o[0].foreground;function a(i){let d={};for(let u=0;u<r.length;u+=1)d=Q(d,r[u]);return{props:d}}return l&&(t=Z(l,a())),{c(){e=b("div"),t&&A(t.$$.fragment),c(e,"class",s="embedded-foreground step-"+(o[1]+1)+" svelte-1se6s6g")},m(i,d){_(i,e,d),t&&B(t,e,null),n=!0},p(i,d){const u=d&1?K(r,[G(i[0].foregroundProps||{})]):{};if(d&1&&l!==(l=i[0].foreground)){if(t){j();const f=t;T(f.$$.fragment,1,0,()=>{I(f,1)}),R()}l?(t=Z(l,a()),A(t.$$.fragment),v(t.$$.fragment,1),B(t,e,null)):t=null}else l&&t.$set(u);(!n||d&2&&s!==(s="embedded-foreground step-"+(i[1]+1)+" svelte-1se6s6g"))&&c(e,"class",s)},i(i){n||(t&&v(t.$$.fragment,i),n=!0)},o(i){t&&T(t.$$.fragment,i),n=!1},d(i){i&&k(e),t&&I(t)}}}function xt(o){let e,t;return e=new ie({props:{cls:"body-text step-"+(o[1]+1),$$slots:{default:[Zt]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment)},m(s,n){B(e,s,n),t=!0},p(s,n){const r={};n&2&&(r.cls="body-text step-"+(s[1]+1)),n&7&&(r.$$scope={dirty:n,ctx:s}),e.$set(r)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){I(e,s)}}}function Jt(o){let e,t,s,n,r=typeof o[0].altText=="string"&&Xe(o);return{c(){e=b("div"),s=y(),r&&r.c(),n=D(),c(e,"class",t="empty-step-foreground step-"+(o[1]+1)+" svelte-1se6s6g")},m(l,a){_(l,e,a),_(l,s,a),r&&r.m(l,a),_(l,n,a)},p(l,a){a&2&&t!==(t="empty-step-foreground step-"+(l[1]+1)+" svelte-1se6s6g")&&c(e,"class",t),typeof l[0].altText=="string"?r?r.p(l,a):(r=Xe(l),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i:P,o:P,d(l){l&&k(e),l&&k(s),r&&r.d(l),l&&k(n)}}}function Ye(o){let e,t=F.parse(o[0].altText)+"";return{c(){e=b("div"),c(e,"class","background-alt-text visually-hidden svelte-1se6s6g")},m(s,n){_(s,e,n),e.innerHTML=t},p(s,n){n&1&&t!==(t=F.parse(s[0].altText)+"")&&(e.innerHTML=t)},d(s){s&&k(e)}}}function Zt(o){let e,t=F.parse(o[0].foreground)+"",s,n,r,l=typeof o[0].altText=="string"&&Ye(o);return{c(){e=b("div"),n=y(),l&&l.c(),r=D(),c(e,"class",s="embedded-foreground step-"+(o[1]+1)+" svelte-1se6s6g")},m(a,i){_(a,e,i),e.innerHTML=t,_(a,n,i),l&&l.m(a,i),_(a,r,i)},p(a,i){i&1&&t!==(t=F.parse(a[0].foreground)+"")&&(e.innerHTML=t),i&2&&s!==(s="embedded-foreground step-"+(a[1]+1)+" svelte-1se6s6g")&&c(e,"class",s),typeof a[0].altText=="string"?l?l.p(a,i):(l=Ye(a),l.c(),l.m(r.parentNode,r)):l&&(l.d(1),l=null)},d(a){a&&k(e),a&&k(n),l&&l.d(a),a&&k(r)}}}function Xe(o){let e,t=F.parse(o[0].altText)+"";return{c(){e=b("div"),c(e,"class","background-alt-text visually-hidden svelte-1se6s6g")},m(s,n){_(s,e,n),e.innerHTML=t},p(s,n){n&1&&t!==(t=F.parse(s[0].altText)+"")&&(e.innerHTML=t)},d(s){s&&k(e)}}}function en(o){let e,t,s,n;const r=[Jt,xt,Xt],l=[];function a(i,d){return i[0].foreground===""||!i[0].foreground?0:typeof i[0].foreground=="string"?1:2}return e=a(o),t=l[e]=r[e](o),{c(){t.c(),s=D()},m(i,d){l[e].m(i,d),_(i,s,d),n=!0},p(i,[d]){let u=e;e=a(i),e===u?l[e].p(i,d):(j(),T(l[u],1,1,()=>{l[u]=null}),R(),t=l[e],t?t.p(i,d):(t=l[e]=r[e](i),t.c()),v(t,1),t.m(s.parentNode,s))},i(i){n||(v(t),n=!0)},o(i){T(t),n=!1},d(i){l[e].d(i),i&&k(s)}}}function tn(o,e,t){let{step:s}=e,{index:n}=e;return o.$$set=r=>{"step"in r&&t(0,s=r.step),"index"in r&&t(1,n=r.index)},[s,n]}class Me extends C{constructor(e){super(),W(this,e,tn,en,q,{step:0,index:1})}}Me.__docgen={version:3,name:"Foreground.svelte",data:[{visibility:"public",description:null,keywords:[],name:"step",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"index",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function xe(o,e,t){const s=o.slice();return s[3]=e[t],s[5]=t,s}function nn(o){let e,t,s,n;return e=new Me({props:{step:o[3],index:o[5]}}),s=new Le({props:{step:o[3],index:o[5],backgroundWidth:o[2]}}),{c(){A(e.$$.fragment),t=y(),A(s.$$.fragment)},m(r,l){B(e,r,l),_(r,t,l),B(s,r,l),n=!0},p(r,l){const a={};l&1&&(a.step=r[3]),e.$set(a);const i={};l&1&&(i.step=r[3]),l&4&&(i.backgroundWidth=r[2]),s.$set(i)},i(r){n||(v(e.$$.fragment,r),v(s.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),T(s.$$.fragment,r),n=!1},d(r){I(e,r),r&&k(t),I(s,r)}}}function sn(o){let e,t,s,n,r;return e=new Le({props:{step:o[3],index:o[5],backgroundWidth:o[2]}}),s=new Me({props:{step:o[3],index:o[5]}}),{c(){A(e.$$.fragment),t=y(),A(s.$$.fragment),n=y()},m(l,a){B(e,l,a),_(l,t,a),B(s,l,a),_(l,n,a),r=!0},p(l,a){const i={};a&1&&(i.step=l[3]),a&4&&(i.backgroundWidth=l[2]),e.$set(i);const d={};a&1&&(d.step=l[3]),s.$set(d)},i(l){r||(v(e.$$.fragment,l),v(s.$$.fragment,l),r=!0)},o(l){T(e.$$.fragment,l),T(s.$$.fragment,l),r=!1},d(l){I(e,l),l&&k(t),I(s,l),l&&k(n)}}}function Je(o){let e,t,s,n;const r=[sn,nn],l=[];function a(i,d){return i[1]==="bf"?0:1}return e=a(o),t=l[e]=r[e](o),{c(){t.c(),s=D()},m(i,d){l[e].m(i,d),_(i,s,d),n=!0},p(i,d){let u=e;e=a(i),e===u?l[e].p(i,d):(j(),T(l[u],1,1,()=>{l[u]=null}),R(),t=l[e],t?t.p(i,d):(t=l[e]=r[e](i),t.c()),v(t,1),t.m(s.parentNode,s))},i(i){n||(v(t),n=!0)},o(i){T(t),n=!1},d(i){l[e].d(i),i&&k(s)}}}function ln(o){let e,t,s=o[0],n=[];for(let l=0;l<s.length;l+=1)n[l]=Je(xe(o,s,l));const r=l=>T(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=D()},m(l,a){for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(l,a);_(l,e,a),t=!0},p(l,[a]){if(a&7){s=l[0];let i;for(i=0;i<s.length;i+=1){const d=xe(l,s,i);n[i]?(n[i].p(d,a),v(n[i],1)):(n[i]=Je(d),n[i].c(),v(n[i],1),n[i].m(e.parentNode,e))}for(j(),i=s.length;i<n.length;i+=1)r(i);R()}},i(l){if(!t){for(let a=0;a<s.length;a+=1)v(n[a]);t=!0}},o(l){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)T(n[a]);t=!1},d(l){Te(n,l),l&&k(e)}}}function on(o,e,t){let{steps:s=[]}=e,{embeddedLayout:n="fb"}=e,{backgroundWidth:r="fluid"}=e;return o.$$set=l=>{"steps"in l&&t(0,s=l.steps),"embeddedLayout"in l&&t(1,n=l.embeddedLayout),"backgroundWidth"in l&&t(2,r=l.backgroundWidth)},[s,n,r]}class yt extends C{constructor(e){super(),W(this,e,on,ln,q,{steps:0,embeddedLayout:1,backgroundWidth:2})}}yt.__docgen={version:3,name:"index.svelte",data:[{visibility:"public",description:null,keywords:[],name:"steps",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"embeddedLayout",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"fb"},{visibility:"public",description:null,keywords:[],name:"backgroundWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"fluid"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function rn(o){let e,t;return e=new ie({props:{width:"widest",cls:"scroller-container embedded",id:o[0],$$slots:{default:[dn]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment)},m(s,n){B(e,s,n),t=!0},p(s,n){const r={};n&1&&(r.id=s[0]),n&262278&&(r.$$scope={dirty:n,ctx:s}),e.$set(r)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){I(e,s)}}}function an(o){let e,t;return e=new ie({props:{width:"fluid",cls:"scroller-container",id:o[0],$$slots:{default:[pn]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment)},m(s,n){B(e,s,n),t=!0},p(s,n){const r={};n&1&&(r.id=s[0]),n&294718&&(r.$$scope={dirty:n,ctx:s}),e.$set(r)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){I(e,s)}}}function dn(o){let e,t;return e=new yt({props:{steps:o[1],embeddedLayout:o[7],backgroundWidth:o[2]}}),{c(){A(e.$$.fragment)},m(s,n){B(e,s,n),t=!0},p(s,n){const r={};n&2&&(r.steps=s[1]),n&128&&(r.embeddedLayout=s[7]),n&4&&(r.backgroundWidth=s[2]),e.$set(r)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){I(e,s)}}}function un(o){let e,t;return e=new _t({props:{index:o[12],steps:o[1],preload:o[5],stackBackground:o[4]}}),{c(){A(e.$$.fragment)},m(s,n){B(e,s,n),t=!0},p(s,n){const r={};n&4096&&(r.index=s[12]),n&2&&(r.steps=s[1]),n&32&&(r.preload=s[5]),n&16&&(r.stackBackground=s[4]),e.$set(r)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){I(e,s)}}}function cn(o){let e,t,s,n;return s=new ie({props:{width:o[2],cls:"background-container step-"+(o[12]+1),$$slots:{default:[un]},$$scope:{ctx:o}}}),{c(){e=b("div"),t=b("div"),A(s.$$.fragment),c(t,"class","scroller-graphic-well svelte-1qaluug"),c(e,"slot","background"),c(e,"class","background svelte-1qaluug"),c(e,"aria-hidden","true"),J(e,"right",o[3]==="left opposite"),J(e,"left",o[3]==="right opposite")},m(r,l){_(r,e,l),m(e,t),B(s,t,null),n=!0},p(r,l){const a={};l&4&&(a.width=r[2]),l&4096&&(a.cls="background-container step-"+(r[12]+1)),l&266290&&(a.$$scope={dirty:l,ctx:r}),s.$set(a),(!n||l&8)&&J(e,"right",r[3]==="left opposite"),(!n||l&8)&&J(e,"left",r[3]==="right opposite")},i(r){n||(v(s.$$.fragment,r),n=!0)},o(r){T(s.$$.fragment,r),n=!1},d(r){r&&k(e),I(s)}}}function fn(o){let e,t,s,n;return t=new kt({props:{steps:o[1]}}),{c(){e=b("div"),A(t.$$.fragment),c(e,"slot","foreground"),c(e,"class",s="foreground "+o[3]+" svelte-1qaluug")},m(r,l){_(r,e,l),B(t,e,null),n=!0},p(r,l){const a={};l&2&&(a.steps=r[1]),t.$set(a),(!n||l&8&&s!==(s="foreground "+r[3]+" svelte-1qaluug"))&&c(e,"class",s)},i(r){n||(v(t.$$.fragment,r),n=!0)},o(r){T(t.$$.fragment,r),n=!1},d(r){r&&k(e),I(t)}}}function pn(o){let e,t,s,n,r;function l(u){o[15](u)}function a(u){o[16](u)}function i(u){o[17](u)}let d={threshold:o[8],top:o[9],bottom:o[10],parallax:o[11],query:"div.step-foreground-container",$$slots:{foreground:[fn],background:[cn]},$$scope:{ctx:o}};return o[12]!==void 0&&(d.index=o[12]),o[13]!==void 0&&(d.offset=o[13]),o[14]!==void 0&&(d.progress=o[14]),e=new ht({props:d}),le.push(()=>ve(e,"index",l)),le.push(()=>ve(e,"offset",a)),le.push(()=>ve(e,"progress",i)),{c(){A(e.$$.fragment)},m(u,f){B(e,u,f),r=!0},p(u,f){const p={};f&256&&(p.threshold=u[8]),f&512&&(p.top=u[9]),f&1024&&(p.bottom=u[10]),f&2048&&(p.parallax=u[11]),f&266302&&(p.$$scope={dirty:f,ctx:u}),!t&&f&4096&&(t=!0,p.index=u[12],we(()=>t=!1)),!s&&f&8192&&(s=!0,p.offset=u[13],we(()=>s=!1)),!n&&f&16384&&(n=!0,p.progress=u[14],we(()=>n=!1)),e.$set(p)},i(u){r||(v(e.$$.fragment,u),r=!0)},o(u){T(e.$$.fragment,u),r=!1},d(u){I(e,u)}}}function gn(o){let e,t,s,n;const r=[an,rn],l=[];function a(i,d){return i[6]?1:0}return e=a(o),t=l[e]=r[e](o),{c(){t.c(),s=D()},m(i,d){l[e].m(i,d),_(i,s,d),n=!0},p(i,[d]){let u=e;e=a(i),e===u?l[e].p(i,d):(j(),T(l[u],1,1,()=>{l[u]=null}),R(),t=l[e],t?t.p(i,d):(t=l[e]=r[e](i),t.c()),v(t,1),t.m(s.parentNode,s))},i(i){n||(v(t),n=!0)},o(i){T(t),n=!1},d(i){l[e].d(i),i&&k(s)}}}function mn(o,e,t){let{id:s=""}=e,{steps:n=[]}=e,{backgroundWidth:r="fluid"}=e,{foregroundPosition:l="middle"}=e,{stackBackground:a=!0}=e,{preload:i=1}=e,{embedded:d=!1}=e,{embeddedLayout:u="fb"}=e,{threshold:f=.5}=e,{top:p=0}=e,{bottom:w=1}=e,{parallax:L=!1}=e,$=0,H,U;function V(g){$=g,t(12,$)}function E(g){H=g,t(13,H)}function N(g){U=g,t(14,U)}return o.$$set=g=>{"id"in g&&t(0,s=g.id),"steps"in g&&t(1,n=g.steps),"backgroundWidth"in g&&t(2,r=g.backgroundWidth),"foregroundPosition"in g&&t(3,l=g.foregroundPosition),"stackBackground"in g&&t(4,a=g.stackBackground),"preload"in g&&t(5,i=g.preload),"embedded"in g&&t(6,d=g.embedded),"embeddedLayout"in g&&t(7,u=g.embeddedLayout),"threshold"in g&&t(8,f=g.threshold),"top"in g&&t(9,p=g.top),"bottom"in g&&t(10,w=g.bottom),"parallax"in g&&t(11,L=g.parallax)},[s,n,r,l,a,i,d,u,f,p,w,L,$,H,U,V,E,N]}class fe extends C{constructor(e){super(),W(this,e,mn,gn,q,{id:0,steps:1,backgroundWidth:2,foregroundPosition:3,stackBackground:4,preload:5,embedded:6,embeddedLayout:7,threshold:8,top:9,bottom:10,parallax:11})}}fe.__docgen={version:3,name:"Scroller.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"ID of the scroller container",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"required",description:""}],visibility:"public",description:"An array of step objects that define the steps in your scroller.\n\nEach step object in the array can have:\n\n- `background` A background component. **REQUIRED**\n- `backgroundProps` An object of props given to the background component\n- `foreground` Either a markdown-formatted string or a foreground component **REQUIRED**\n- `altText` A string describing the background graphic, which is read aloud after the foreground blurb. You can add it to each step or, if you want to add just one alt text to describe all graphics in the scroll section, add it to just the first step. **RECOMMENDED**\n- `foregroundProps` An object of props given to the foreground component",name:"steps",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[],visibility:"public",description:"Width of the background",name:"backgroundWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"fluid"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:`Position of the foreground. One of: middle, left, right, left opposite or right opposite.

"opposite" options push the background to the other side on larger viewports.`,name:"foregroundPosition",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"middle"},{keywords:[],visibility:"public",description:"Whether previous background steps should stack below the current one.\n\n- `true` _default_ Background graphics from previous steps will remain visible below the active one, allowing you to stack graphics with transparent backgrounds.\n- `false` Only the background graphic from the current step will show and backgrounds from previous steps are hidden.",name:"stackBackground",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{keywords:[],visibility:"public",description:"How many background steps to load before and after the currently active one, effectively lazy-loading them.\n\nSetting to `0` disables lazy-loading and loads all backgrounds at once.",name:"preload",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{keywords:[],visibility:"public",description:"Setting to `true` will unroll the scroll experience into a flat layout.",name:"embedded",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Layout order when `embedded` is `true`.\n\n- `fb` _default_ Foreground then background\n- `bf` Background then foreground",name:"embeddedLayout",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"fb"},{keywords:[],visibility:"public",description:"Threshold prop passed to [svelte-scroller](https://github.com/sveltejs/svelte-scroller#parameters)",name:"threshold",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:.5},{keywords:[],visibility:"public",description:"Top prop passed to [svelte-scroller](https://github.com/sveltejs/svelte-scroller#parameters)",name:"top",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[],visibility:"public",description:"Bottom prop passed to [svelte-scroller](https://github.com/sveltejs/svelte-scroller#parameters)",name:"bottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{keywords:[],visibility:"public",description:"Parallax prop passed to [svelte-scroller](https://github.com/sveltejs/svelte-scroller#parameters)",name:"parallax",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function bn(o){let e,t;return{c(){e=b("div"),c(e,"class","step svelte-13llgxe"),c(e,"style",t=`background: ${o[0]};`)},m(s,n){_(s,e,n)},p(s,[n]){n&1&&t!==(t=`background: ${s[0]};`)&&c(e,"style",t)},i:P,o:P,d(s){s&&k(e)}}}function hn(o,e,t){let{colour:s="lightblue"}=e;return o.$$set=n=>{"colour"in n&&t(0,s=n.colour)},[s]}class O extends C{constructor(e){super(),W(this,e,hn,bn,q,{colour:0})}}O.__docgen={version:3,name:"Step.svelte",data:[{visibility:"public",description:null,keywords:[],name:"colour",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"lightblue"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function _n(o){let e,t,s,n,r,l,a,i,d;return{c(){e=b("h4"),e.textContent="Interactive step",t=y(),s=b("p"),n=je("The count is "),r=je(o[0]),l=y(),a=b("button"),a.textContent="Click Me"},m(u,f){_(u,e,f),_(u,t,f),_(u,s,f),m(s,n),m(s,r),_(u,l,f),_(u,a,f),i||(d=mt(a,"click",o[1]),i=!0)},p(u,[f]){f&1&&Bt(r,u[0])},i:P,o:P,d(u){u&&k(e),u&&k(t),u&&k(s),u&&k(l),u&&k(a),i=!1,d()}}}function kn(o,e,t){let{count:s=0}=e;const n=()=>{t(0,s+=1)};return o.$$set=r=>{"count"in r&&t(0,s=r.count)},[s,n]}class re extends C{constructor(e){super(),W(this,e,kn,_n,q,{count:0})}}re.__docgen={version:3,name:"InteractiveForeground.svelte",data:[{visibility:"public",description:null,keywords:[],name:"count",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const yn=""+new URL("step-1-xl-9e8e4a9f.png",import.meta.url).href,vn=""+new URL("step-1-lg-a4a93d00.png",import.meta.url).href,wn=""+new URL("step-1-md-3e07fd88.png",import.meta.url).href,Tn=""+new URL("step-1-sm-5699114a.png",import.meta.url).href,Sn=""+new URL("step-1-xs-fafe3058.png",import.meta.url).href;function Ze(o){let e,t,s,n;return{c(){e=b("div"),t=b("div"),s=y(),n=b("div"),h(t,"padding","0 0 50% 0"),c(n,"id","g-step-1-xl-img"),c(n,"class","g-aiImg svelte-16iuhg"),c(n,"alt",""),h(n,"background-image","url("+yn+")"),c(e,"id","g-step-1-xl"),c(e,"class","g-artboard svelte-16iuhg"),c(e,"style","")},m(r,l){_(r,e,l),m(e,t),m(e,s),m(e,n)},p:P,d(r){r&&k(e)}}}function et(o){let e,t,s,n;return{c(){e=b("div"),t=b("div"),s=y(),n=b("div"),h(t,"padding","0 0 55.3763% 0"),c(n,"id","g-step-1-lg-img"),c(n,"class","g-aiImg svelte-16iuhg"),c(n,"alt",""),h(n,"background-image","url("+vn+")"),c(e,"id","g-step-1-lg"),c(e,"class","g-artboard svelte-16iuhg"),c(e,"style","")},m(r,l){_(r,e,l),m(e,t),m(e,s),m(e,n)},p:P,d(r){r&&k(e)}}}function tt(o){let e,t,s,n;return{c(){e=b("div"),t=b("div"),s=y(),n=b("div"),h(t,"padding","0 0 55.7576% 0"),c(n,"id","g-step-1-md-img"),c(n,"class","g-aiImg svelte-16iuhg"),c(n,"alt",""),h(n,"background-image","url("+wn+")"),c(e,"id","g-step-1-md"),c(e,"class","g-artboard svelte-16iuhg"),c(e,"style","")},m(r,l){_(r,e,l),m(e,t),m(e,s),m(e,n)},p:P,d(r){r&&k(e)}}}function nt(o){let e,t,s,n;return{c(){e=b("div"),t=b("div"),s=y(),n=b("div"),h(t,"padding","0 0 49.6078% 0"),c(n,"id","g-step-1-sm-img"),c(n,"class","g-aiImg svelte-16iuhg"),c(n,"alt",""),h(n,"background-image","url("+Tn+")"),c(e,"id","g-step-1-sm"),c(e,"class","g-artboard svelte-16iuhg"),c(e,"style","")},m(r,l){_(r,e,l),m(e,t),m(e,s),m(e,n)},p:P,d(r){r&&k(e)}}}function st(o){let e,t,s,n;return{c(){e=b("div"),t=b("div"),s=y(),n=b("div"),h(t,"padding","0 0 55.4545% 0"),c(n,"id","g-step-1-xs-img"),c(n,"class","g-aiImg svelte-16iuhg"),c(n,"alt",""),h(n,"background-image","url("+Sn+")"),c(e,"id","g-step-1-xs"),c(e,"class","g-artboard svelte-16iuhg"),c(e,"style","")},m(r,l){_(r,e,l),m(e,t),m(e,s),m(e,n)},p:P,d(r){r&&k(e)}}}function Ln(o){let e,t,s,n,r,l,a=o[0]&&o[0]>=1200&&Ze(),i=o[0]&&o[0]>=930&&o[0]<1200&&et(),d=o[0]&&o[0]>=660&&o[0]<930&&tt(),u=o[0]&&o[0]>=510&&o[0]<660&&nt(),f=o[0]&&o[0]>=0&&o[0]<510&&st();return{c(){e=b("div"),a&&a.c(),t=y(),i&&i.c(),s=y(),d&&d.c(),n=y(),u&&u.c(),r=y(),f&&f.c(),c(e,"id","g-step-1-box"),c(e,"class","svelte-16iuhg"),be(()=>o[1].call(e))},m(p,w){_(p,e,w),a&&a.m(e,null),m(e,t),i&&i.m(e,null),m(e,s),d&&d.m(e,null),m(e,n),u&&u.m(e,null),m(e,r),f&&f.m(e,null),l=Se(e,o[1].bind(e))},p(p,[w]){p[0]&&p[0]>=1200?a?a.p(p,w):(a=Ze(),a.c(),a.m(e,t)):a&&(a.d(1),a=null),p[0]&&p[0]>=930&&p[0]<1200?i?i.p(p,w):(i=et(),i.c(),i.m(e,s)):i&&(i.d(1),i=null),p[0]&&p[0]>=660&&p[0]<930?d?d.p(p,w):(d=tt(),d.c(),d.m(e,n)):d&&(d.d(1),d=null),p[0]&&p[0]>=510&&p[0]<660?u?u.p(p,w):(u=nt(),u.c(),u.m(e,r)):u&&(u.d(1),u=null),p[0]&&p[0]>=0&&p[0]<510?f?f.p(p,w):(f=st(),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},i:P,o:P,d(p){p&&k(e),a&&a.d(),i&&i.d(),d&&d.d(),u&&u.d(),f&&f.d(),l()}}}function Mn(o,e,t){let s;function n(){s=this.clientWidth,t(0,s)}return[s,n]}class pe extends C{constructor(e){super(),W(this,e,Mn,Ln,q,{})}}pe.__docgen={version:3,name:"ai-scroller-1.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Pn=""+new URL("step-2-xl-b45d096c.png",import.meta.url).href,An=""+new URL("step-2-lg-30b1e0ad.png",import.meta.url).href,Bn=""+new URL("step-2-md-d6773993.png",import.meta.url).href,In=""+new URL("step-2-sm-3eafa6a0.png",import.meta.url).href,$n=""+new URL("step-2-xs-f1632acb.png",import.meta.url).href;function lt(o){let e,t,s,n,r,l;return{c(){e=b("div"),t=b("div"),s=y(),n=b("div"),r=y(),l=b("div"),l.innerHTML=`<p class="g-pstyle0 svelte-17g09mo">This thing here is</p> 
        <p class="g-pstyle0 svelte-17g09mo">particularly important</p>`,h(t,"padding","0 0 50% 0"),c(n,"id","g-step-2-xl-img"),c(n,"class","g-aiImg svelte-17g09mo"),c(n,"alt",""),h(n,"background-image","url("+Pn+")"),c(l,"id","g-ai0-1"),c(l,"class","g-annotation g-aiAbs g-aiPointText svelte-17g09mo"),h(l,"top","26.183%"),h(l,"margin-top","-21.1px"),h(l,"left","55.6774%"),h(l,"width","180px"),c(e,"id","g-step-2-xl"),c(e,"class","g-artboard svelte-17g09mo"),c(e,"style","")},m(a,i){_(a,e,i),m(e,t),m(e,s),m(e,n),m(e,r),m(e,l)},p:P,d(a){a&&k(e)}}}function ot(o){let e,t,s,n,r,l;return{c(){e=b("div"),t=b("div"),s=y(),n=b("div"),r=y(),l=b("div"),l.innerHTML=`<p class="g-pstyle0 svelte-17g09mo">This thing here is</p> 
        <p class="g-pstyle0 svelte-17g09mo">particularly important</p>`,h(t,"padding","0 0 55.3763% 0"),c(n,"id","g-step-2-lg-img"),c(n,"class","g-aiImg svelte-17g09mo"),c(n,"alt",""),h(n,"background-image","url("+An+")"),c(l,"id","g-ai1-1"),c(l,"class","g-annotation g-aiAbs g-aiPointText svelte-17g09mo"),h(l,"top","25.8206%"),h(l,"margin-top","-21px"),h(l,"left","56.2692%"),h(l,"width","162px"),c(e,"id","g-step-2-lg"),c(e,"class","g-artboard svelte-17g09mo"),c(e,"style","")},m(a,i){_(a,e,i),m(e,t),m(e,s),m(e,n),m(e,r),m(e,l)},p:P,d(a){a&&k(e)}}}function rt(o){let e,t,s,n,r,l;return{c(){e=b("div"),t=b("div"),s=y(),n=b("div"),r=y(),l=b("div"),l.innerHTML=`<p class="g-pstyle0 svelte-17g09mo">This thing here is</p> 
        <p class="g-pstyle0 svelte-17g09mo">particularly important</p>`,h(t,"padding","0 0 55.7576% 0"),c(n,"id","g-step-2-md-img"),c(n,"class","g-aiImg svelte-17g09mo"),c(n,"alt",""),h(n,"background-image","url("+Bn+")"),c(l,"id","g-ai2-1"),c(l,"class","g-annotation g-aiAbs g-aiPointText svelte-17g09mo"),h(l,"top","47.5478%"),h(l,"margin-top","-21px"),h(l,"left","32.4915%"),h(l,"width","162px"),c(e,"id","g-step-2-md"),c(e,"class","g-artboard svelte-17g09mo"),c(e,"style","")},m(a,i){_(a,e,i),m(e,t),m(e,s),m(e,n),m(e,r),m(e,l)},p:P,d(a){a&&k(e)}}}function it(o){let e,t,s,n,r,l;return{c(){e=b("div"),t=b("div"),s=y(),n=b("div"),r=y(),l=b("div"),l.innerHTML=`<p class="g-pstyle0 svelte-17g09mo">This thing here is</p> 
        <p class="g-pstyle0 svelte-17g09mo">particularly important</p>`,h(t,"padding","0 0 49.6078% 0"),c(n,"id","g-step-2-sm-img"),c(n,"class","g-aiImg svelte-17g09mo"),c(n,"alt",""),h(n,"background-image","url("+In+")"),c(l,"id","g-ai3-1"),c(l,"class","g-annotation g-aiAbs g-aiPointText svelte-17g09mo"),h(l,"top","55.3265%"),h(l,"margin-top","-21px"),h(l,"left","30.7585%"),h(l,"width","162px"),c(e,"id","g-step-2-sm"),c(e,"class","g-artboard svelte-17g09mo"),c(e,"style","")},m(a,i){_(a,e,i),m(e,t),m(e,s),m(e,n),m(e,r),m(e,l)},p:P,d(a){a&&k(e)}}}function at(o){let e,t,s,n,r,l;return{c(){e=b("div"),t=b("div"),s=y(),n=b("div"),r=y(),l=b("div"),l.innerHTML=`<p class="g-pstyle0 svelte-17g09mo">This thing here is</p> 
        <p class="g-pstyle0 svelte-17g09mo">particularly important</p>`,h(t,"padding","0 0 55.4545% 0"),c(n,"id","g-step-2-xs-img"),c(n,"class","g-aiImg svelte-17g09mo"),c(n,"alt",""),h(n,"background-image","url("+$n+")"),c(l,"id","g-ai4-1"),c(l,"class","g-annotation g-aiAbs g-aiPointText svelte-17g09mo"),h(l,"top","22.3913%"),h(l,"margin-top","-21px"),h(l,"left","52.5519%"),h(l,"width","162px"),c(e,"id","g-step-2-xs"),c(e,"class","g-artboard svelte-17g09mo"),c(e,"style","")},m(a,i){_(a,e,i),m(e,t),m(e,s),m(e,n),m(e,r),m(e,l)},p:P,d(a){a&&k(e)}}}function Cn(o){let e,t,s,n,r,l,a=o[0]&&o[0]>=1200&&lt(),i=o[0]&&o[0]>=930&&o[0]<1200&&ot(),d=o[0]&&o[0]>=660&&o[0]<930&&rt(),u=o[0]&&o[0]>=510&&o[0]<660&&it(),f=o[0]&&o[0]>=0&&o[0]<510&&at();return{c(){e=b("div"),a&&a.c(),t=y(),i&&i.c(),s=y(),d&&d.c(),n=y(),u&&u.c(),r=y(),f&&f.c(),c(e,"id","g-step-2-box"),c(e,"class","svelte-17g09mo"),be(()=>o[1].call(e))},m(p,w){_(p,e,w),a&&a.m(e,null),m(e,t),i&&i.m(e,null),m(e,s),d&&d.m(e,null),m(e,n),u&&u.m(e,null),m(e,r),f&&f.m(e,null),l=Se(e,o[1].bind(e))},p(p,[w]){p[0]&&p[0]>=1200?a?a.p(p,w):(a=lt(),a.c(),a.m(e,t)):a&&(a.d(1),a=null),p[0]&&p[0]>=930&&p[0]<1200?i?i.p(p,w):(i=ot(),i.c(),i.m(e,s)):i&&(i.d(1),i=null),p[0]&&p[0]>=660&&p[0]<930?d?d.p(p,w):(d=rt(),d.c(),d.m(e,n)):d&&(d.d(1),d=null),p[0]&&p[0]>=510&&p[0]<660?u?u.p(p,w):(u=it(),u.c(),u.m(e,r)):u&&(u.d(1),u=null),p[0]&&p[0]>=0&&p[0]<510?f?f.p(p,w):(f=at(),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},i:P,o:P,d(p){p&&k(e),a&&a.d(),i&&i.d(),d&&d.d(),u&&u.d(),f&&f.d(),l()}}}function Wn(o,e,t){let s=null;function n(){s=this.clientWidth,t(0,s)}return[s,n]}class ge extends C{constructor(e){super(),W(this,e,Wn,Cn,q,{})}}ge.__docgen={version:3,name:"ai-scroller-2.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const qn=""+new URL("step-3-xl-3bb2d2b2.png",import.meta.url).href,Dn=""+new URL("step-3-lg-2dc740ea.png",import.meta.url).href,jn=""+new URL("step-3-md-58a32062.png",import.meta.url).href,Rn=""+new URL("step-3-sm-7a5146ca.png",import.meta.url).href,Un=""+new URL("step-3-xs-c074a791.png",import.meta.url).href;function dt(o){let e,t,s,n,r,l;return{c(){e=b("div"),t=b("div"),s=y(),n=b("div"),r=y(),l=b("div"),l.innerHTML=`<p class="g-pstyle0 svelte-qh37gt">Something</p> 
        <p class="g-pstyle0 svelte-qh37gt">happened here</p>`,h(t,"padding","0 0 50% 0"),c(n,"id","g-step-3-xl-img"),c(n,"class","g-aiImg svelte-qh37gt"),c(n,"alt",""),h(n,"background-image","url("+qn+")"),c(l,"id","g-ai0-1"),c(l,"class","g-step-3 g-aiAbs g-aiPointText svelte-qh37gt"),h(l,"top","19.683%"),h(l,"margin-top","-21.1px"),h(l,"left","54.3441%"),h(l,"width","130px"),c(e,"id","g-step-3-xl"),c(e,"class","g-artboard svelte-qh37gt"),c(e,"style","")},m(a,i){_(a,e,i),m(e,t),m(e,s),m(e,n),m(e,r),m(e,l)},p:P,d(a){a&&k(e)}}}function ut(o){let e,t,s,n,r,l;return{c(){e=b("div"),t=b("div"),s=y(),n=b("div"),r=y(),l=b("div"),l.innerHTML=`<p class="g-pstyle0 svelte-qh37gt">Something</p> 
        <p class="g-pstyle0 svelte-qh37gt">happened here</p>`,h(t,"padding","0 0 55.3763% 0"),c(n,"id","g-step-3-lg-img"),c(n,"class","g-aiImg svelte-qh37gt"),c(n,"alt",""),h(n,"background-image","url("+Dn+")"),c(l,"id","g-ai1-1"),c(l,"class","g-step-3 g-aiAbs g-aiPointText svelte-qh37gt"),h(l,"top","27.5682%"),h(l,"margin-top","-21px"),h(l,"left","54.9127%"),h(l,"width","118px"),c(e,"id","g-step-3-lg"),c(e,"class","g-artboard svelte-qh37gt"),c(e,"style","")},m(a,i){_(a,e,i),m(e,t),m(e,s),m(e,n),m(e,r),m(e,l)},p:P,d(a){a&&k(e)}}}function ct(o){let e,t,s,n,r,l;return{c(){e=b("div"),t=b("div"),s=y(),n=b("div"),r=y(),l=b("div"),l.innerHTML=`<p class="g-pstyle0 svelte-qh37gt">Something</p> 
        <p class="g-pstyle0 svelte-qh37gt">happened here</p>`,h(t,"padding","0 0 55.7576% 0"),c(n,"id","g-step-3-md-img"),c(n,"class","g-aiImg svelte-qh37gt"),c(n,"alt",""),h(n,"background-image","url("+jn+")"),c(l,"id","g-ai2-1"),c(l,"class","g-step-3 g-aiAbs g-aiPointText svelte-qh37gt"),h(l,"top","23.3631%"),h(l,"margin-top","-21px"),h(l,"left","50.4963%"),h(l,"width","118px"),c(e,"id","g-step-3-md"),c(e,"class","g-artboard svelte-qh37gt"),c(e,"style","")},m(a,i){_(a,e,i),m(e,t),m(e,s),m(e,n),m(e,r),m(e,l)},p:P,d(a){a&&k(e)}}}function ft(o){let e,t,s,n,r,l;return{c(){e=b("div"),t=b("div"),s=y(),n=b("div"),r=y(),l=b("div"),l.innerHTML=`<p class="g-pstyle0 svelte-qh37gt">Something</p> 
        <p class="g-pstyle0 svelte-qh37gt">happened here</p>`,h(t,"padding","0 0 49.6078% 0"),c(n,"id","g-step-3-sm-img"),c(n,"class","g-aiImg svelte-qh37gt"),c(n,"alt",""),h(n,"background-image","url("+Rn+")"),c(l,"id","g-ai3-1"),c(l,"class","g-step-3 g-aiAbs g-aiPointText svelte-qh37gt"),h(l,"top","20.1486%"),h(l,"margin-top","-21px"),h(l,"left","55.7925%"),h(l,"width","118px"),c(e,"id","g-step-3-sm"),c(e,"class","g-artboard svelte-qh37gt"),c(e,"style","")},m(a,i){_(a,e,i),m(e,t),m(e,s),m(e,n),m(e,r),m(e,l)},p:P,d(a){a&&k(e)}}}function pt(o){let e,t,s,n,r,l;return{c(){e=b("div"),t=b("div"),s=y(),n=b("div"),r=y(),l=b("div"),l.innerHTML=`<p class="g-pstyle0 svelte-qh37gt">Something</p> 
        <p class="g-pstyle0 svelte-qh37gt">happened here</p>`,h(t,"padding","0 0 55.4545% 0"),c(n,"id","g-step-3-xs-img"),c(n,"class","g-aiImg svelte-qh37gt"),c(n,"alt",""),h(n,"background-image","url("+Un+")"),c(l,"id","g-ai4-1"),c(l,"class","g-step-3 g-aiAbs g-aiPointText svelte-qh37gt"),h(l,"top","42.0634%"),h(l,"margin-top","-21px"),h(l,"left","27.3523%"),h(l,"width","118px"),c(e,"id","g-step-3-xs"),c(e,"class","g-artboard svelte-qh37gt"),c(e,"style","")},m(a,i){_(a,e,i),m(e,t),m(e,s),m(e,n),m(e,r),m(e,l)},p:P,d(a){a&&k(e)}}}function Vn(o){let e,t,s,n,r,l,a=o[0]&&o[0]>=1200&&dt(),i=o[0]&&o[0]>=930&&o[0]<1200&&ut(),d=o[0]&&o[0]>=660&&o[0]<930&&ct(),u=o[0]&&o[0]>=510&&o[0]<660&&ft(),f=o[0]&&o[0]>=0&&o[0]<510&&pt();return{c(){e=b("div"),a&&a.c(),t=y(),i&&i.c(),s=y(),d&&d.c(),n=y(),u&&u.c(),r=y(),f&&f.c(),c(e,"id","g-step-3-box"),c(e,"class","svelte-qh37gt"),be(()=>o[1].call(e))},m(p,w){_(p,e,w),a&&a.m(e,null),m(e,t),i&&i.m(e,null),m(e,s),d&&d.m(e,null),m(e,n),u&&u.m(e,null),m(e,r),f&&f.m(e,null),l=Se(e,o[1].bind(e))},p(p,[w]){p[0]&&p[0]>=1200?a?a.p(p,w):(a=dt(),a.c(),a.m(e,t)):a&&(a.d(1),a=null),p[0]&&p[0]>=930&&p[0]<1200?i?i.p(p,w):(i=ut(),i.c(),i.m(e,s)):i&&(i.d(1),i=null),p[0]&&p[0]>=660&&p[0]<930?d?d.p(p,w):(d=ct(),d.c(),d.m(e,n)):d&&(d.d(1),d=null),p[0]&&p[0]>=510&&p[0]<660?u?u.p(p,w):(u=ft(),u.c(),u.m(e,r)):u&&(u.d(1),u=null),p[0]&&p[0]>=0&&p[0]<510?f?f.p(p,w):(f=pt(),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},i:P,o:P,d(p){p&&k(e),a&&a.d(),i&&i.d(),d&&d.d(),u&&u.d(),f&&f.d(),l()}}}function Fn(o,e,t){let s=null;function n(){s=this.clientWidth,t(0,s)}return[s,n]}class me extends C{constructor(e){super(),W(this,e,Fn,Vn,q,{})}}me.__docgen={version:3,name:"ai-scroller-3.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const gt=(o,e,t="")=>({id:o.ID,backgroundWidth:o.Width,foregroundPosition:o.ForegroundPosition,stackBackground:o.StackBackground==="true"||!o.StackBackground,embeddedLayout:o.EmbeddedLayout,steps:o.Steps.map(s=>({background:e[s.Background],backgroundProps:{assetsPath:t},foreground:s.Text,altText:s.AltText}))});function Hn(o){let e,t;const s=[o[3]];let n={};for(let r=0;r<s.length;r+=1)n=Q(n,s[r]);return e=new fe({props:n}),{c(){A(e.$$.fragment)},m(r,l){B(e,r,l),t=!0},p(r,l){const a=l&8?K(s,[G(r[3])]):{};e.$set(a)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){T(e.$$.fragment,r),t=!1},d(r){I(e,r)}}}function Nn(o){let e,t,s,n,r,l,a,i,d,u,f,p;const w=[{title:"Components/Scroller"},{component:fe},o[2]];let L={};for(let g=0;g<w.length;g+=1)L=Q(L,w[g]);e=new $t({props:L}),s=new Ct({props:{$$slots:{default:[Hn,({args:g})=>({3:g}),({args:g})=>g?8:0]},$$scope:{ctx:o}}}),r=new ue({props:{name:"Default",args:{steps:[{background:O,backgroundProps:{colour:"red"},foreground:`#### Step 1

Lorem ipsum red`,altText:"Red background"},{background:O,backgroundProps:{colour:"blue"},foreground:`#### Step 2

Lorem ipsum blue`,altText:"Blue background"},{background:O,backgroundProps:{colour:"green"},foreground:`#### Step 3

Lorem ipsum green`,altText:"Green background"}],foregroundPosition:"middle",backgroundWidth:"fluid",embeddedLayout:"fb",embedded:!1}}});const $=[{name:"🚀 QUICKIT"},{args:gt(o[1],o[0])},se(Ve)];let H={};for(let g=0;g<$.length;g+=1)H=Q(H,$[g]);a=new ue({props:H});const U=[{name:"Foreground components"},{args:{steps:[{background:O,backgroundProps:{colour:"red"},foreground:re},{background:O,backgroundProps:{colour:"blue"},foreground:`#### Step 2

Lorem ipsum blue`},{background:O,backgroundProps:{colour:"green"},foreground:re,foregroundProps:{count:100}}],foregroundPosition:"middle",backgroundWidth:"fluid",embeddedLayout:"fb",embedded:!1}},se(Re)];let V={};for(let g=0;g<U.length;g+=1)V=Q(V,U[g]);d=new ue({props:V});const E=[{name:"Ai2svelte"},{args:{steps:[{background:pe,backgroundProps:{colour:"red"},foreground:`#### Step 1

Lorem ipsum`,altText:"A map showing the Upper West side in New York City."},{background:ge,backgroundProps:{colour:"blue"},foreground:`#### Step 2

Lorem ipsum`,altText:"The same map now highlights 98th Street where something interesting happened."},{background:me,backgroundProps:{colour:"green"},foreground:`#### Step 3

Lorem ipsum`,altText:"The same map now highlights three locations near 98th Street where something particulary important happened."}],foregroundPosition:"middle",backgroundWidth:"fluid",embeddedLayout:"fb",embedded:!1}},se(Ue)];let N={};for(let g=0;g<E.length;g+=1)N=Q(N,E[g]);return f=new ue({props:N}),{c(){A(e.$$.fragment),t=y(),A(s.$$.fragment),n=y(),A(r.$$.fragment),l=y(),A(a.$$.fragment),i=y(),A(d.$$.fragment),u=y(),A(f.$$.fragment)},m(g,M){B(e,g,M),_(g,t,M),B(s,g,M),_(g,n,M),B(r,g,M),_(g,l,M),B(a,g,M),_(g,i,M),B(d,g,M),_(g,u,M),B(f,g,M),p=!0},p(g,[M]){const de=M&4?K(w,[w[0],M&0&&{component:fe},M&4&&G(g[2])]):{};e.$set(de);const Y={};M&24&&(Y.$$scope={dirty:M,ctx:g}),s.$set(Y);const X=M&3?K($,[$[0],M&3&&{args:gt(g[1],g[0])},M&0&&G(se(Ve))]):{};a.$set(X);const x=M&0?K(U,[U[0],M&0&&{args:{steps:[{background:O,backgroundProps:{colour:"red"},foreground:re},{background:O,backgroundProps:{colour:"blue"},foreground:`#### Step 2

Lorem ipsum blue`},{background:O,backgroundProps:{colour:"green"},foreground:re,foregroundProps:{count:100}}],foregroundPosition:"middle",backgroundWidth:"fluid",embeddedLayout:"fb",embedded:!1}},M&0&&G(se(Re))]):{};d.$set(x);const ee=M&0?K(E,[E[0],M&0&&{args:{steps:[{background:pe,backgroundProps:{colour:"red"},foreground:`#### Step 1

Lorem ipsum`,altText:"A map showing the Upper West side in New York City."},{background:ge,backgroundProps:{colour:"blue"},foreground:`#### Step 2

Lorem ipsum`,altText:"The same map now highlights 98th Street where something interesting happened."},{background:me,backgroundProps:{colour:"green"},foreground:`#### Step 3

Lorem ipsum`,altText:"The same map now highlights three locations near 98th Street where something particulary important happened."}],foregroundPosition:"middle",backgroundWidth:"fluid",embeddedLayout:"fb",embedded:!1}},M&0&&G(se(Ue))]):{};f.$set(ee)},i(g){p||(v(e.$$.fragment,g),v(s.$$.fragment,g),v(r.$$.fragment,g),v(a.$$.fragment,g),v(d.$$.fragment,g),v(f.$$.fragment,g),p=!0)},o(g){T(e.$$.fragment,g),T(s.$$.fragment,g),T(r.$$.fragment,g),T(a.$$.fragment,g),T(d.$$.fragment,g),T(f.$$.fragment,g),p=!1},d(g){I(e,g),g&&k(t),I(s,g),g&&k(n),I(r,g),g&&k(l),I(a,g),g&&k(i),I(d,g),g&&k(u),I(f,g)}}}function En(o){const e={AiMap1:pe,AiMap2:ge,AiMap3:me},t={Type:"scroller",Width:"fluid",ForegroundPosition:"middle",ID:"my-scroller",StackBackground:"true",Steps:[{Background:"AiMap1",Text:`#### Step 1

Lorem ipsum`,AltText:"A map showing the Upper West side in New York City."},{Background:"AiMap2",Text:`#### Step 2

Lorem ipsum`,AltText:"The same map now highlights 98th Street."},{Background:"AiMap3",Text:`#### Step 3

Lorem ipsum`,AltText:"The same map now highlights three locations near 98th Street where something particulary important happened."}]},s={...Wt(qt),argTypes:{steps:{control:!1},backgroundWidth:{control:"select",options:["normal","wide","wider","widest","fluid"]},foregroundPosition:{control:"select",options:["middle","left","right","left opposite","right opposite"]},embeddedLayout:{control:"select",options:["fb","bf"]}}};return[e,t,s]}class zn extends C{constructor(e){super(),W(this,e,En,Nn,q,{})}}const ae=It(zn,{meta:{title:"Components/Scroller"},stories:{"tpl:default":{storyId:"components-scroller--default",name:"default",template:!0,source:"<Scroller {...args} />",hasArgs:!0},Default:{storyId:"components-scroller--default",name:"Default",template:!1,hasArgs:!1},QUICKIT:{storyId:"components-scroller--quickit",name:"🚀 QUICKIT",template:!1,hasArgs:!1},ForegroundComponents:{storyId:"components-scroller--foreground-components",name:"Foreground components",template:!1,hasArgs:!1},Ai2svelte:{storyId:"components-scroller--ai-2-svelte",name:"Ai2svelte",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","interactiveDocs","ai2svelteDocs","quickitDocs","Scroller","BasicStep","InteractiveForeground","AiMap1","AiMap2","AiMap3","withComponentDocs","withStoryDocs","getScrollerPropsFromDoc"]}),Zn=ae.meta,es=["Default","QUICKIT","ForegroundComponents","Ai2svelte"],ts=ae.stories.Default,ns=ae.stories.QUICKIT,ss=ae.stories.ForegroundComponents,ls=ae.stories.Ai2svelte;export{ls as Ai2svelte,ts as Default,ss as ForegroundComponents,ns as QUICKIT,es as __namedExportsOrder,Zn as default};
//# sourceMappingURL=Scroller.stories-5041dfc5.js.map
