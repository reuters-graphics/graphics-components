import{S as J,i as P,s as R,D as W,C as A,g as f,z as h,m as d,d as p,t as $,h as y,f as u,j as v,o as S,n as U}from"./index-85f88930.js";import{g as F,a as K}from"./spread-8a54911c.js";import{p as z,M as H,T as Q,S as E}from"./collect-stories-fa95313f.js";import{w as V,b as L}from"./withParams-47e2ab71.js";const X=`Add Google and Chartbeat analytics to your page.

\`\`\`svelte
<script>
  import { Analytics } from '@reuters-graphics/graphics-components';

  const authors = [{ name: 'Jane Doe' }, { name: 'John Doe' }];
<\/script>

<Analytics authors="{authors}" />
\`\`\`
`,Y=`Generally, you only want to send page analytics in production environments.

In a SvelteKit context, you can use \`$app\` stores to restrict when you send analytics.

For example, the following excludes analytics from pages in development or hosted on our preview server:

\`\`\`svelte
<script>
  import { Analytics } from '@reuters-graphics/graphics-components';
  import { dev } from '$app/environment';
  import { page } from '$app/stores';
<\/script>

{#if !dev && $page.url?.hostname !== 'graphics.thomsonreuters.com'}
  <Analytics />
{/if}
\`\`\`
`,Z=`If you're using analytics to measure a multipage newsapp that uses [client-side routing](https://kit.svelte.dev/docs/glossary#routing), then you may need to trigger analytics after virtual page navigation.

This component also exports a function you can call to register pageviews.

For example, here's how you can use SvelteKit's [\`afterNavigate\`](https://kit.svelte.dev/docs/modules#$app-navigation-afternavigate) lifecycle to capture additional pageviews:

\`\`\`svelte
<script>
  import {
    Analytics,
    registerPageview,
  } from '@reuters-graphics/graphics-components';
  import { afterNavigate } from '$app/navigation';
  import { onMount } from 'svelte';

  let hasMounted = false;

  onMount(() => {
    hasMounted = true;
  });

  afterNavigate(() => {
    // We shouldn't fire on initial page load because the Analytics component
    // already registers a reader's first pageview. After this component
    // has mounted, we can be sure that further navigation is virtual and
    // register pageviews using this function.
    if (hasMounted) registerPageview();
  });
<\/script>

<Analytics />
\`\`\`
`,q="G-WBSR7WLTGD",B=`https://www.googletagmanager.com/gtag/js?id=${q}`,ee=()=>{if(document.querySelector(`script[src="${B}"]`))return;const a=document.createElement("script"),t=document.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.src=B,t.parentNode.insertBefore(a,t)},te=()=>{try{window.dataLayer=window.dataLayer||[],window.gtag||(ee(),window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",q,{send_page_view:!1}),ne())}catch(a){console.warn(`Error initialising Google Analytics: ${a}`)}},ne=()=>{typeof window>"u"||!window.gtag||window.gtag("event","page_view",{page_location:window.location.origin+window.location.pathname,page_title:document==null?void 0:document.title})},se=52639,I="//static.chartbeat.com/js/chartbeat.js",ae=()=>{if(document.querySelector(`script[src="${I}"]`))return;const a=document.createElement("script"),t=document.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.src=I,t.parentNode.insertBefore(a,t)},oe=a=>{window._sf_async_config={uid:se,domain:"reuters.com",flickerControl:!1,useCanonical:!0,useCanonicalDomain:!0,sections:"Graphics",authors:a.map(t=>(t==null?void 0:t.name)||"").join(","),...window._sf_async_config||{}};try{ae()}catch(t){console.warn(`Error initialising Chartbeat Analytics: ${t}`)}};function re(a,t,i){let{authors:s=[]}=t;return W(()=>{te(),oe(s)}),a.$$set=r=>{"authors"in r&&i(0,s=r.authors)},[s]}class w extends J{constructor(t){super(),P(this,t,re,null,R,{authors:0})}}w.__docgen={version:3,name:"Analytics.svelte",data:[{keywords:[],visibility:"public",description:"Used to associate a page with its author(s) in Chartbeat.",name:"authors",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[{keywords:[],visibility:"public",description:"Register virtual pageviews when using client-side routing in multipage applications.",name:"registerPageview",static:!0}],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function ie(a){let t,i,s,r;const n=[a[0]];let l={};for(let o=0;o<n.length;o+=1)l=A(l,n[o]);return t=new w({props:l}),{c(){f(t.$$.fragment),i=h(),s=S("div"),s.textContent="Nothing to see here"},m(o,m){d(t,o,m),p(o,i,m),p(o,s,m),r=!0},p(o,m){const g=m&1?F(n,[K(o[0])]):{};t.$set(g)},i(o){r||($(t.$$.fragment,o),r=!0)},o(o){y(t.$$.fragment,o),r=!1},d(o){o&&(u(i),u(s)),v(t,o)}}}function ce(a){let t,i,s,r;return t=new w({}),{c(){f(t.$$.fragment),i=h(),s=S("div"),s.textContent="Nothing to see here"},m(n,l){d(t,n,l),p(n,i,l),p(n,s,l),r=!0},p:U,i(n){r||($(t.$$.fragment,n),r=!0)},o(n){y(t.$$.fragment,n),r=!1},d(n){n&&(u(i),u(s)),v(t,n)}}}function le(a){let t,i,s,r;return t=new w({}),{c(){f(t.$$.fragment),i=h(),s=S("div"),s.textContent="Nothing to see here"},m(n,l){d(t,n,l),p(n,i,l),p(n,s,l),r=!0},p:U,i(n){r||($(t.$$.fragment,n),r=!0)},o(n){y(t.$$.fragment,n),r=!1},d(n){n&&(u(i),u(s)),v(t,n)}}}function pe(a){let t,i,s,r,n,l,o,m,g,_;const x=[{title:"Components/Analytics"},{component:w},V(X)];let M={};for(let e=0;e<x.length;e+=1)M=A(M,x[e]);t=new H({props:M}),s=new Q({props:{$$slots:{default:[ie,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:a}}}),n=new E({props:{name:"Default",args:{authors:[{name:"Jane Doe"},{name:"John Doe"}]}}});const N=[{name:"Environments"},L(Y)];let C={$$slots:{default:[ce]},$$scope:{ctx:a}};for(let e=0;e<N.length;e+=1)C=A(C,N[e]);o=new E({props:C});const j=[{name:"Multipage apps"},L(Z)];let b={$$slots:{default:[le]},$$scope:{ctx:a}};for(let e=0;e<j.length;e+=1)b=A(b,j[e]);return g=new E({props:b}),{c(){f(t.$$.fragment),i=h(),f(s.$$.fragment),r=h(),f(n.$$.fragment),l=h(),f(o.$$.fragment),m=h(),f(g.$$.fragment)},m(e,c){d(t,e,c),p(e,i,c),d(s,e,c),p(e,r,c),d(n,e,c),p(e,l,c),d(o,e,c),p(e,m,c),d(g,e,c),_=!0},p(e,[c]){const O={};t.$set(O);const G={};c&3&&(G.$$scope={dirty:c,ctx:e}),s.$set(G);const k={};c&2&&(k.$$scope={dirty:c,ctx:e}),o.$set(k);const T={};c&2&&(T.$$scope={dirty:c,ctx:e}),g.$set(T)},i(e){_||($(t.$$.fragment,e),$(s.$$.fragment,e),$(n.$$.fragment,e),$(o.$$.fragment,e),$(g.$$.fragment,e),_=!0)},o(e){y(t.$$.fragment,e),y(s.$$.fragment,e),y(n.$$.fragment,e),y(o.$$.fragment,e),y(g.$$.fragment,e),_=!1},d(e){e&&(u(i),u(r),u(l),u(m)),v(t,e),v(s,e),v(n,e),v(o,e),v(g,e)}}}class ue extends J{constructor(t){super(),P(this,t,null,pe,R,{})}}const D=z(ue,{meta:{title:"Components/Analytics"},stories:{"tpl:default":{name:"default",template:!0,source:`<Analytics {...args} />
<div>Nothing to see here</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},Environments:{name:"Environments",template:!1,source:`<Analytics />
<div>Nothing to see here</div>`,hasArgs:!1},MultipageApps:{name:"Multipage apps",template:!1,source:`<Analytics />
<div>Nothing to see here</div>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","environmentsDocs","multipageDocs","Analytics","withComponentDocs","withStoryDocs"]}),$e=D.meta,ye=["Default","Environments","MultipageApps"],ve=D.stories.Default,he=D.stories.Environments,we=D.stories.MultipageApps;export{ve as Default,he as Environments,we as MultipageApps,ye as __namedExportsOrder,$e as default};
//# sourceMappingURL=Analytics.stories-7d7cb26b.js.map
