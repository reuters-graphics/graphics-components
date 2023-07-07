import{S as F,i as K,s as W,o as H,p as N,j as g,D as v,m as d,a as p,k as b,l as C,b as $,t as y,n as w,d as m,w as G,E as Q}from"./index-25af778d.js";import{p as V,M as Y,T as Z,S as I}from"./collect-stories-cce06d4a.js";import{w as J,a as E}from"./withParams-90715500.js";const P=`Add Google and Chartbeat analytics to your page.

\`\`\`html
<script>
  import { Analytics } from '@reuters-graphics/graphics-components';

  const authors = [{ name: 'Jane Doe' }, { name: 'John Doe' }];
<\/script>

<Analytics authors="{authors}" />
\`\`\`
`,U=`Generally, you only want to send page analytics in production environments.

In a SvelteKit context, you can use \`$app\` stores to restrict when you send analytics.

For example, the following excludes analytics from pages in development or hosted on our preview server:

\`\`\`html
<script>
  import { Analytics } from '@reuters-graphics/graphics-components';
  import { dev } from '$app/environment';
  import { page } from '$app/stores';
<\/script>

{#if !dev && $page.url?.hostname !== 'graphics.thomsonreuters.com'}
<Analytics />
{/if}
\`\`\`
`,q=`If you're using analytics to measure a multipage newsapp that uses [client-side routing](https://kit.svelte.dev/docs/glossary#routing), then you may need to trigger analytics after virtual page navigation.

This component also exports a function you can call to register pageviews.

For example, here's how you can use SvelteKit's [\`afterNavigate\`](https://kit.svelte.dev/docs/modules#$app-navigation-afternavigate) lifecycle to capture additional pageviews:

\`\`\`html
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
`,X="G-W3Q2X6NTNM",O=`https://www.googletagmanager.com/gtag/js?id=${X}`,ee=()=>{if(document.querySelector(`script[src="${O}"]`))return;const a=document.createElement("script"),t=document.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.src=O,t.parentNode.insertBefore(a,t)},te=()=>{try{window.dataLayer=window.dataLayer||[],window.gtag||(ee(),window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",X,{send_page_view:!1}),ne())}catch(a){console.warn(`Error initialising Google Analytics: ${a}`)}},ne=()=>{typeof window>"u"||!window.gtag||window.gtag("event","page_view",{page_location:window.location.origin+window.location.pathname,page_title:document==null?void 0:document.title})},se=52639,R="//static.chartbeat.com/js/chartbeat.js",ae=()=>{if(document.querySelector(`script[src="${R}"]`))return;const a=document.createElement("script"),t=document.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.src=R,t.parentNode.insertBefore(a,t)},oe=a=>{window._sf_async_config={uid:se,domain:"reuters.com",flickerControl:!1,useCanonical:!0,useCanonicalDomain:!0,sections:"Graphics",authors:a.map(t=>(t==null?void 0:t.name)||"").join(","),...window._sf_async_config||{}};try{ae()}catch(t){console.warn(`Error initialising Chartbeat Analytics: ${t}`)}};function re(a,t,l){let{authors:s=[]}=t;return H(()=>{te(),oe(s)}),a.$$set=r=>{"authors"in r&&l(0,s=r.authors)},[s]}class h extends F{constructor(t){super(),K(this,t,re,null,W,{authors:0})}}h.__docgen={version:3,name:"Analytics.svelte",data:[{keywords:[],visibility:"public",description:"Used to associate a page with its author(s) in Chartbeat.",name:"authors",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[{keywords:[],visibility:"public",description:"Register virtual pageviews when using client-side routing in multipage applications.",name:"registerPageview",static:!0}],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function ie(a){let t,l,s,r;const n=[a[0]];let c={};for(let o=0;o<n.length;o+=1)c=N(c,n[o]);return t=new h({props:c}),{c(){g(t.$$.fragment),l=v(),s=G("div"),s.textContent="Nothing to see here"},m(o,u){d(t,o,u),p(o,l,u),p(o,s,u),r=!0},p(o,u){const f=u&1?b(n,[C(o[0])]):{};t.$set(f)},i(o){r||($(t.$$.fragment,o),r=!0)},o(o){y(t.$$.fragment,o),r=!1},d(o){w(t,o),o&&m(l),o&&m(s)}}}function le(a){let t,l,s,r;return t=new h({}),{c(){g(t.$$.fragment),l=v(),s=G("div"),s.textContent="Nothing to see here"},m(n,c){d(t,n,c),p(n,l,c),p(n,s,c),r=!0},p:Q,i(n){r||($(t.$$.fragment,n),r=!0)},o(n){y(t.$$.fragment,n),r=!1},d(n){w(t,n),n&&m(l),n&&m(s)}}}function ce(a){let t,l,s,r;return t=new h({}),{c(){g(t.$$.fragment),l=v(),s=G("div"),s.textContent="Nothing to see here"},m(n,c){d(t,n,c),p(n,l,c),p(n,s,c),r=!0},p:Q,i(n){r||($(t.$$.fragment,n),r=!0)},o(n){y(t.$$.fragment,n),r=!1},d(n){w(t,n),n&&m(l),n&&m(s)}}}function pe(a){let t,l,s,r,n,c,o,u,f,_;const A=[{title:"Components/Analytics"},{component:h},J(P)];let S={};for(let e=0;e<A.length;e+=1)S=N(S,A[e]);t=new Y({props:S}),s=new Z({props:{$$slots:{default:[ie,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:a}}}),n=new I({props:{name:"Default",args:{authors:[{name:"Jane Doe"},{name:"John Doe"}]}}});const D=[{name:"Environments"},E(U)];let j={$$slots:{default:[le]},$$scope:{ctx:a}};for(let e=0;e<D.length;e+=1)j=N(j,D[e]);o=new I({props:j});const M=[{name:"Multipage apps"},E(q)];let k={$$slots:{default:[ce]},$$scope:{ctx:a}};for(let e=0;e<M.length;e+=1)k=N(k,M[e]);return f=new I({props:k}),{c(){g(t.$$.fragment),l=v(),g(s.$$.fragment),r=v(),g(n.$$.fragment),c=v(),g(o.$$.fragment),u=v(),g(f.$$.fragment)},m(e,i){d(t,e,i),p(e,l,i),d(s,e,i),p(e,r,i),d(n,e,i),p(e,c,i),d(o,e,i),p(e,u,i),d(f,e,i),_=!0},p(e,[i]){const z=i&0?b(A,[A[0],i&0&&{component:h},i&0&&C(J(P))]):{};t.$set(z);const T={};i&3&&(T.$$scope={dirty:i,ctx:e}),s.$set(T);const L=i&0?b(D,[D[0],C(E(U))]):{};i&2&&(L.$$scope={dirty:i,ctx:e}),o.$set(L);const B=i&0?b(M,[M[0],C(E(q))]):{};i&2&&(B.$$scope={dirty:i,ctx:e}),f.$set(B)},i(e){_||($(t.$$.fragment,e),$(s.$$.fragment,e),$(n.$$.fragment,e),$(o.$$.fragment,e),$(f.$$.fragment,e),_=!0)},o(e){y(t.$$.fragment,e),y(s.$$.fragment,e),y(n.$$.fragment,e),y(o.$$.fragment,e),y(f.$$.fragment,e),_=!1},d(e){w(t,e),e&&m(l),w(s,e),e&&m(r),w(n,e),e&&m(c),w(o,e),e&&m(u),w(f,e)}}}class me extends F{constructor(t){super(),K(this,t,null,pe,W,{})}}const x=V(me,{meta:{title:"Components/Analytics"},stories:{"tpl:default":{storyId:"components-analytics--default",name:"default",template:!0,source:`<Analytics {...args} />
<div>Nothing to see here</div>`,hasArgs:!0},Default:{storyId:"components-analytics--default",name:"Default",template:!1,hasArgs:!1},Environments:{storyId:"components-analytics--environments",name:"Environments",template:!1,source:`<Analytics />
<div>Nothing to see here</div>`,hasArgs:!1},MultipageApps:{storyId:"components-analytics--multipage-apps",name:"Multipage apps",template:!1,source:`<Analytics />
<div>Nothing to see here</div>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","environmentsDocs","multipageDocs","Analytics","withComponentDocs","withStoryDocs"]}),de=x.meta,$e=["Default","Environments","MultipageApps"],ye=x.stories.Default,we=x.stories.Environments,ve=x.stories.MultipageApps;export{ye as Default,we as Environments,ve as MultipageApps,$e as __namedExportsOrder,de as default};
//# sourceMappingURL=Analytics.stories-b8768512.js.map
