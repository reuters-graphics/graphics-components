import{S as F,i as I,s as q,p as O,l as A,c as f,o as w,m as d,h as p,t as $,a as y,k as u,d as v,q as x,n as J}from"./index-C9aKRT5A.js";import{g as W,a as K}from"./spread-CgU5AtxT.js";import{p as z,w as H,M as Q,T as V,S as b,a as L}from"./collect-stories-ceFdpR5E.js";const X=`Add Google and Chartbeat analytics to your page.

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

  let isFirstPageview = true;

  afterNavigate(() => {
    // We shouldn't fire on initial page load because the Analytics component
    // already registers a reader's first pageview. After this component
    // has initially mounted, we can be sure that further navigation is virtual
    // and register pageviews using this function.
    if (!isFirstPageview) {
      registerPageview();
    } else {
      isFirstPageview = false;
    }
  });
<\/script>

<Analytics />
\`\`\`
`,R="G-WBSR7WLTGD",P=`https://www.googletagmanager.com/gtag/js?id=${R}`,ee=()=>{if(document.querySelector(`script[src="${P}"]`))return;const a=document.createElement("script"),t=document.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.src=P,t.parentNode.insertBefore(a,t)},te=()=>{try{window.dataLayer=window.dataLayer||[],window.gtag||(ee(),window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",R,{send_page_view:!1}),ne())}catch(a){console.warn(`Error initialising Google Analytics: ${a}`)}},ne=()=>{typeof window>"u"||!window.gtag||window.gtag("event","page_view",{page_location:window.location.origin+window.location.pathname,page_title:document==null?void 0:document.title})},se=52639,B="//static.chartbeat.com/js/chartbeat.js",ae=()=>{if(document.querySelector(`script[src="${B}"]`))return;const a=document.createElement("script"),t=document.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.src=B,t.parentNode.insertBefore(a,t)},oe=a=>{window._sf_async_config={uid:se,domain:"reuters.com",flickerControl:!1,useCanonical:!0,useCanonicalDomain:!0,sections:"Graphics",authors:a.map(t=>(t==null?void 0:t.name)||"").join(","),...window._sf_async_config||{}};try{ae()}catch(t){console.warn(`Error initialising Chartbeat Analytics: ${t}`)}};function ie(a,t,r){let{authors:s=[]}=t;return O(()=>{te(),oe(s)}),a.$$set=i=>{"authors"in i&&r(0,s=i.authors)},[s]}class h extends F{constructor(t){super(),I(this,t,ie,null,q,{authors:0})}}h.__docgen={version:3,name:"Analytics.svelte",data:[{keywords:[],visibility:"public",description:"Used to associate a page with its author(s) in Chartbeat.",name:"authors",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[{keywords:[],visibility:"public",description:"Register virtual pageviews when using client-side routing in multipage applications.",name:"registerPageview",static:!0}],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function re(a){let t,r,s,i;const n=[a[0]];let l={};for(let o=0;o<n.length;o+=1)l=A(l,n[o]);return t=new h({props:l}),{c(){f(t.$$.fragment),r=w(),s=x("div"),s.textContent="Nothing to see here"},m(o,m){d(t,o,m),p(o,r,m),p(o,s,m),i=!0},p(o,m){const g=m&1?W(n,[K(o[0])]):{};t.$set(g)},i(o){i||($(t.$$.fragment,o),i=!0)},o(o){y(t.$$.fragment,o),i=!1},d(o){o&&(u(r),u(s)),v(t,o)}}}function ce(a){let t,r,s,i;return t=new h({}),{c(){f(t.$$.fragment),r=w(),s=x("div"),s.textContent="Nothing to see here"},m(n,l){d(t,n,l),p(n,r,l),p(n,s,l),i=!0},p:J,i(n){i||($(t.$$.fragment,n),i=!0)},o(n){y(t.$$.fragment,n),i=!1},d(n){n&&(u(r),u(s)),v(t,n)}}}function le(a){let t,r,s,i;return t=new h({}),{c(){f(t.$$.fragment),r=w(),s=x("div"),s.textContent="Nothing to see here"},m(n,l){d(t,n,l),p(n,r,l),p(n,s,l),i=!0},p:J,i(n){i||($(t.$$.fragment,n),i=!0)},o(n){y(t.$$.fragment,n),i=!1},d(n){n&&(u(r),u(s)),v(t,n)}}}function pe(a){let t,r,s,i,n,l,o,m,g,_;const N=[{title:"Components/Analytics"},{component:h},H(X)];let C={};for(let e=0;e<N.length;e+=1)C=A(C,N[e]);t=new Q({props:C}),s=new V({props:{$$slots:{default:[re,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:a}}}),n=new b({props:{name:"Default",args:{authors:[{name:"Jane Doe"},{name:"John Doe"}]}}});const M=[{name:"Environments"},L(Y)];let E={$$slots:{default:[ce]},$$scope:{ctx:a}};for(let e=0;e<M.length;e+=1)E=A(E,M[e]);o=new b({props:E});const k=[{name:"Multipage apps"},L(Z)];let S={$$slots:{default:[le]},$$scope:{ctx:a}};for(let e=0;e<k.length;e+=1)S=A(S,k[e]);return g=new b({props:S}),{c(){f(t.$$.fragment),r=w(),f(s.$$.fragment),i=w(),f(n.$$.fragment),l=w(),f(o.$$.fragment),m=w(),f(g.$$.fragment)},m(e,c){d(t,e,c),p(e,r,c),d(s,e,c),p(e,i,c),d(n,e,c),p(e,l,c),d(o,e,c),p(e,m,c),d(g,e,c),_=!0},p(e,[c]){const U={};t.$set(U);const G={};c&3&&(G.$$scope={dirty:c,ctx:e}),s.$set(G);const j={};c&2&&(j.$$scope={dirty:c,ctx:e}),o.$set(j);const T={};c&2&&(T.$$scope={dirty:c,ctx:e}),g.$set(T)},i(e){_||($(t.$$.fragment,e),$(s.$$.fragment,e),$(n.$$.fragment,e),$(o.$$.fragment,e),$(g.$$.fragment,e),_=!0)},o(e){y(t.$$.fragment,e),y(s.$$.fragment,e),y(n.$$.fragment,e),y(o.$$.fragment,e),y(g.$$.fragment,e),_=!1},d(e){e&&(u(r),u(i),u(l),u(m)),v(t,e),v(s,e),v(n,e),v(o,e),v(g,e)}}}class ue extends F{constructor(t){super(),I(this,t,null,pe,q,{})}}const D=z(ue,{meta:{title:"Components/Analytics"},stories:{"tpl:default":{name:"default",template:!0,source:`<Analytics {...args} />
<div>Nothing to see here</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},Environments:{name:"Environments",template:!1,source:`<Analytics />
<div>Nothing to see here</div>`,hasArgs:!1},MultipageApps:{name:"Multipage apps",template:!1,source:`<Analytics />
<div>Nothing to see here</div>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","environmentsDocs","multipageDocs","Analytics","withComponentDocs","withStoryDocs"]}),de=D.meta,$e=["Default","Environments","MultipageApps"],ye=D.stories.Default,ve=D.stories.Environments,we=D.stories.MultipageApps;export{ye as Default,ve as Environments,we as MultipageApps,$e as __namedExportsOrder,de as default};
