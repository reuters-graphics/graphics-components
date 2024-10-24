import{S as I,i as B,s as F,p as Y,l as A,c as f,o as v,m as d,h as p,t as y,a as $,k as u,d as w,q as x,n as q}from"./index-C9aKRT5A.js";import{g as O,a as W}from"./spread-CgU5AtxT.js";import{p as K,w as V,M as z,T as H,S as C,a as G}from"./collect-stories-ceFdpR5E.js";const Q=`Add Google and Chartbeat analytics to your page.

\`\`\`svelte
<script>
  import { Analytics } from '@reuters-graphics/graphics-components';

  const authors = [{ name: 'Jane Doe' }, { name: 'John Doe' }];
<\/script>

<Analytics authors="{authors}" />
\`\`\`
`,X=`Generally, you only want to send page analytics in production environments.

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
`,ee="reuters.com",te=()=>{const s=document.body,e=document.createElement("script");e.id="parsely-cfg",e.src=`//cdn.parsely.com/keys/${ee}/p.js`,e.setAttribute("async",""),e.setAttribute("defer",""),s.appendChild(e)},ne=()=>{window.PARSELY=window.PARSELY||{autotrack:!1,onReady(){window.PARSELY.updateDefaults({data:{is_logged_in:!1}}),window.PARSELY.beacon.trackPageView()}},te()},J="G-WBSR7WLTGD",R=`https://www.googletagmanager.com/gtag/js?id=${J}`,se=()=>{if(document.querySelector(`script[src="${R}"]`))return;const s=document.createElement("script"),e=document.getElementsByTagName("script")[0];s.type="text/javascript",s.async=!0,s.src=R,e.parentNode.insertBefore(s,e)},ae=()=>{try{window.dataLayer=window.dataLayer||[],window.gtag||(se(),window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",J,{send_page_view:!1}),oe())}catch(s){console.warn(`Error initialising Google Analytics: ${s}`)}},oe=()=>{typeof window>"u"||!window.gtag||window.gtag("event","page_view",{page_location:window.location.origin+window.location.pathname,page_title:document==null?void 0:document.title})},ie=52639,T="//static.chartbeat.com/js/chartbeat.js",re=()=>{if(document.querySelector(`script[src="${T}"]`))return;const s=document.createElement("script"),e=document.getElementsByTagName("script")[0];s.type="text/javascript",s.async=!0,s.src=T,e.parentNode.insertBefore(s,e)},ce=s=>{window._sf_async_config={uid:ie,domain:"reuters.com",flickerControl:!1,useCanonical:!0,useCanonicalDomain:!0,sections:"Graphics",authors:s.map(e=>(e==null?void 0:e.name)||"").join(","),...window._sf_async_config||{}};try{re()}catch(e){console.warn(`Error initialising Chartbeat Analytics: ${e}`)}};function le(s,e,r){let{authors:a=[]}=e;return Y(()=>{ae(),ce(a),ne()}),s.$$set=i=>{"authors"in i&&r(0,a=i.authors)},[a]}class h extends I{constructor(e){super(),B(this,e,le,null,F,{authors:0})}}h.__docgen={version:3,name:"Analytics.svelte",data:[{keywords:[],visibility:"public",description:"Used to associate a page with its author(s) in Chartbeat.",name:"authors",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[{keywords:[],visibility:"public",description:"Register virtual pageviews when using client-side routing in multipage applications.",name:"registerPageview",static:!0}],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function pe(s){let e,r,a,i;const n=[s[0]];let l={};for(let o=0;o<n.length;o+=1)l=A(l,n[o]);return e=new h({props:l}),{c(){f(e.$$.fragment),r=v(),a=x("div"),a.textContent="Nothing to see here"},m(o,m){d(e,o,m),p(o,r,m),p(o,a,m),i=!0},p(o,m){const g=m&1?O(n,[W(o[0])]):{};e.$set(g)},i(o){i||(y(e.$$.fragment,o),i=!0)},o(o){$(e.$$.fragment,o),i=!1},d(o){o&&(u(r),u(a)),w(e,o)}}}function ue(s){let e,r,a,i;return e=new h({}),{c(){f(e.$$.fragment),r=v(),a=x("div"),a.textContent="Nothing to see here"},m(n,l){d(e,n,l),p(n,r,l),p(n,a,l),i=!0},p:q,i(n){i||(y(e.$$.fragment,n),i=!0)},o(n){$(e.$$.fragment,n),i=!1},d(n){n&&(u(r),u(a)),w(e,n)}}}function me(s){let e,r,a,i;return e=new h({}),{c(){f(e.$$.fragment),r=v(),a=x("div"),a.textContent="Nothing to see here"},m(n,l){d(e,n,l),p(n,r,l),p(n,a,l),i=!0},p:q,i(n){i||(y(e.$$.fragment,n),i=!0)},o(n){$(e.$$.fragment,n),i=!1},d(n){n&&(u(r),u(a)),w(e,n)}}}function ge(s){let e,r,a,i,n,l,o,m,g,_;const N=[{title:"Components/Analytics"},{component:h},V(Q)];let E={};for(let t=0;t<N.length;t+=1)E=A(E,N[t]);e=new z({props:E}),a=new H({props:{$$slots:{default:[pe,({args:t})=>({0:t}),({args:t})=>t?1:0]},$$scope:{ctx:s}}}),n=new C({props:{name:"Default",args:{authors:[{name:"Jane Doe"},{name:"John Doe"}]}}});const k=[{name:"Environments"},G(X)];let S={$$slots:{default:[ue]},$$scope:{ctx:s}};for(let t=0;t<k.length;t+=1)S=A(S,k[t]);o=new C({props:S});const P=[{name:"Multipage apps"},G(Z)];let b={$$slots:{default:[me]},$$scope:{ctx:s}};for(let t=0;t<P.length;t+=1)b=A(b,P[t]);return g=new C({props:b}),{c(){f(e.$$.fragment),r=v(),f(a.$$.fragment),i=v(),f(n.$$.fragment),l=v(),f(o.$$.fragment),m=v(),f(g.$$.fragment)},m(t,c){d(e,t,c),p(t,r,c),d(a,t,c),p(t,i,c),d(n,t,c),p(t,l,c),d(o,t,c),p(t,m,c),d(g,t,c),_=!0},p(t,[c]){const U={};e.$set(U);const L={};c&3&&(L.$$scope={dirty:c,ctx:t}),a.$set(L);const M={};c&2&&(M.$$scope={dirty:c,ctx:t}),o.$set(M);const j={};c&2&&(j.$$scope={dirty:c,ctx:t}),g.$set(j)},i(t){_||(y(e.$$.fragment,t),y(a.$$.fragment,t),y(n.$$.fragment,t),y(o.$$.fragment,t),y(g.$$.fragment,t),_=!0)},o(t){$(e.$$.fragment,t),$(a.$$.fragment,t),$(n.$$.fragment,t),$(o.$$.fragment,t),$(g.$$.fragment,t),_=!1},d(t){t&&(u(r),u(i),u(l),u(m)),w(e,t),w(a,t),w(n,t),w(o,t),w(g,t)}}}class fe extends I{constructor(e){super(),B(this,e,null,ge,F,{})}}const D=K(fe,{meta:{title:"Components/Analytics"},stories:{"tpl:default":{name:"default",template:!0,source:`<Analytics {...args} />
<div>Nothing to see here</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},Environments:{name:"Environments",template:!1,source:`<Analytics />
<div>Nothing to see here</div>`,hasArgs:!1},MultipageApps:{name:"Multipage apps",template:!1,source:`<Analytics />
<div>Nothing to see here</div>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","environmentsDocs","multipageDocs","Analytics","withComponentDocs","withStoryDocs"]}),we=D.meta,ve=["Default","Environments","MultipageApps"],he=D.stories.Default,_e=D.stories.Environments,Ae=D.stories.MultipageApps;export{he as Default,_e as Environments,Ae as MultipageApps,ve as __namedExportsOrder,we as default};
