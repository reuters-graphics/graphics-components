import{S as F,i as I,s as J,D as O,C as A,g as f,z as w,m as d,d as p,t as $,h as y,f as m,j as v,o as x,n as R}from"./index-85f88930.js";import{g as W,a as K}from"./spread-8a54911c.js";import{p as z,M as H,T as Q,S}from"./collect-stories-fa95313f.js";import{w as V,b as L}from"./withParams-47e2ab71.js";const X=`Add Google and Chartbeat analytics to your page.

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
`,U="G-WBSR7WLTGD",P=`https://www.googletagmanager.com/gtag/js?id=${U}`,ee=()=>{if(document.querySelector(`script[src="${P}"]`))return;const a=document.createElement("script"),t=document.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.src=P,t.parentNode.insertBefore(a,t)},te=()=>{try{window.dataLayer=window.dataLayer||[],window.gtag||(ee(),window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",U,{send_page_view:!1}),ne())}catch(a){console.warn(`Error initialising Google Analytics: ${a}`)}},ne=()=>{typeof window>"u"||!window.gtag||window.gtag("event","page_view",{page_location:window.location.origin+window.location.pathname,page_title:document==null?void 0:document.title})},se=52639,B="//static.chartbeat.com/js/chartbeat.js",ae=()=>{if(document.querySelector(`script[src="${B}"]`))return;const a=document.createElement("script"),t=document.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.src=B,t.parentNode.insertBefore(a,t)},oe=a=>{window._sf_async_config={uid:se,domain:"reuters.com",flickerControl:!1,useCanonical:!0,useCanonicalDomain:!0,sections:"Graphics",authors:a.map(t=>(t==null?void 0:t.name)||"").join(","),...window._sf_async_config||{}};try{ae()}catch(t){console.warn(`Error initialising Chartbeat Analytics: ${t}`)}};function ie(a,t,r){let{authors:s=[]}=t;return O(()=>{te(),oe(s)}),a.$$set=i=>{"authors"in i&&r(0,s=i.authors)},[s]}class h extends F{constructor(t){super(),I(this,t,ie,null,J,{authors:0})}}h.__docgen={version:3,name:"Analytics.svelte",data:[{keywords:[],visibility:"public",description:"Used to associate a page with its author(s) in Chartbeat.",name:"authors",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[{keywords:[],visibility:"public",description:"Register virtual pageviews when using client-side routing in multipage applications.",name:"registerPageview",static:!0}],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function re(a){let t,r,s,i;const n=[a[0]];let l={};for(let o=0;o<n.length;o+=1)l=A(l,n[o]);return t=new h({props:l}),{c(){f(t.$$.fragment),r=w(),s=x("div"),s.textContent="Nothing to see here"},m(o,u){d(t,o,u),p(o,r,u),p(o,s,u),i=!0},p(o,u){const g=u&1?W(n,[K(o[0])]):{};t.$set(g)},i(o){i||($(t.$$.fragment,o),i=!0)},o(o){y(t.$$.fragment,o),i=!1},d(o){o&&(m(r),m(s)),v(t,o)}}}function ce(a){let t,r,s,i;return t=new h({}),{c(){f(t.$$.fragment),r=w(),s=x("div"),s.textContent="Nothing to see here"},m(n,l){d(t,n,l),p(n,r,l),p(n,s,l),i=!0},p:R,i(n){i||($(t.$$.fragment,n),i=!0)},o(n){y(t.$$.fragment,n),i=!1},d(n){n&&(m(r),m(s)),v(t,n)}}}function le(a){let t,r,s,i;return t=new h({}),{c(){f(t.$$.fragment),r=w(),s=x("div"),s.textContent="Nothing to see here"},m(n,l){d(t,n,l),p(n,r,l),p(n,s,l),i=!0},p:R,i(n){i||($(t.$$.fragment,n),i=!0)},o(n){y(t.$$.fragment,n),i=!1},d(n){n&&(m(r),m(s)),v(t,n)}}}function pe(a){let t,r,s,i,n,l,o,u,g,_;const N=[{title:"Components/Analytics"},{component:h},V(X)];let C={};for(let e=0;e<N.length;e+=1)C=A(C,N[e]);t=new H({props:C}),s=new Q({props:{$$slots:{default:[re,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:a}}}),n=new S({props:{name:"Default",args:{authors:[{name:"Jane Doe"},{name:"John Doe"}]}}});const M=[{name:"Environments"},L(Y)];let b={$$slots:{default:[ce]},$$scope:{ctx:a}};for(let e=0;e<M.length;e+=1)b=A(b,M[e]);o=new S({props:b});const j=[{name:"Multipage apps"},L(Z)];let E={$$slots:{default:[le]},$$scope:{ctx:a}};for(let e=0;e<j.length;e+=1)E=A(E,j[e]);return g=new S({props:E}),{c(){f(t.$$.fragment),r=w(),f(s.$$.fragment),i=w(),f(n.$$.fragment),l=w(),f(o.$$.fragment),u=w(),f(g.$$.fragment)},m(e,c){d(t,e,c),p(e,r,c),d(s,e,c),p(e,i,c),d(n,e,c),p(e,l,c),d(o,e,c),p(e,u,c),d(g,e,c),_=!0},p(e,[c]){const q={};t.$set(q);const G={};c&3&&(G.$$scope={dirty:c,ctx:e}),s.$set(G);const k={};c&2&&(k.$$scope={dirty:c,ctx:e}),o.$set(k);const T={};c&2&&(T.$$scope={dirty:c,ctx:e}),g.$set(T)},i(e){_||($(t.$$.fragment,e),$(s.$$.fragment,e),$(n.$$.fragment,e),$(o.$$.fragment,e),$(g.$$.fragment,e),_=!0)},o(e){y(t.$$.fragment,e),y(s.$$.fragment,e),y(n.$$.fragment,e),y(o.$$.fragment,e),y(g.$$.fragment,e),_=!1},d(e){e&&(m(r),m(i),m(l),m(u)),v(t,e),v(s,e),v(n,e),v(o,e),v(g,e)}}}class me extends F{constructor(t){super(),I(this,t,null,pe,J,{})}}const D=z(me,{meta:{title:"Components/Analytics"},stories:{"tpl:default":{name:"default",template:!0,source:`<Analytics {...args} />
<div>Nothing to see here</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},Environments:{name:"Environments",template:!1,source:`<Analytics />
<div>Nothing to see here</div>`,hasArgs:!1},MultipageApps:{name:"Multipage apps",template:!1,source:`<Analytics />
<div>Nothing to see here</div>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","environmentsDocs","multipageDocs","Analytics","withComponentDocs","withStoryDocs"]}),$e=D.meta,ye=["Default","Environments","MultipageApps"],ve=D.stories.Default,we=D.stories.Environments,he=D.stories.MultipageApps;export{ve as Default,we as Environments,he as MultipageApps,ye as __namedExportsOrder,$e as default};
//# sourceMappingURL=Analytics.stories-9286c9af.js.map
