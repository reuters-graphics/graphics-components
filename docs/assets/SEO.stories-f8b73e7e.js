import{S as Se,i as De,s as ge,k as Ie,e as Ee,n as _e,f as n,y as u,o as f,b as t,d as i,H as we,C as he,g as q,m as B,t as H,h as Y,j as Z}from"./index-4f5e5369.js";import{g as Ue,a as Ae}from"./spread-8a54911c.js";import{p as ve,M as Re,T as Ce,S as be}from"./collect-stories-6e37d46b.js";import{w as Pe,b as je}from"./withParams-47e2ab71.js";const Le=`The \`SEO\` component adds essential metadata to published pages.

\`\`\`svelte
<script>
  import { SEO } from '@reuters-graphics/graphics-components';
<\/script>

<SEO
  baseUrl="https://graphics.reuters.com"
  pageUrl="{new URL(
    'https://graphics.reuters.com/world-coronavirus-tracker-and-maps/'
  )}"
  seoTitle="A title for Google"
  seoDescription="A description for Google"
  shareTitle="A title for Twitter/Facebook"
  shareDecription="A description for Twitter/Facebook"
  shareImgPath="https://graphics.reuters.com/world-coronavirus-tracker-and-maps/assets/images/share.jpg"
  shareImgAlt="An image showing global COVID infection rates"
  publishTime="2020-09-15T00:00:00.000Z"
  updateTime="2021-01-10T12:30:00.000Z"
  authors="{[
    { name: 'Jane Doe', url: 'https://twitter.com/JaneDoe' },
    { name: 'John Doe', url: 'https://twitter.com/JohnDoe' },
  ]}"
/>
\`\`\`
`,Ne=`Add the \`SEO\` component to any page specified in the \`pages/\` directory of the Graphics Kit.

Most of the fields are filled in by other sources, like your Google Doc and package.json. (Usually, the fastest way is to copy the \`SEO\` component from one of the pages already in your project.)

> **IMPORTANT:** For _reasons_, we can't document the value of \`VITE_BASE_URL\` below. It's \`import\` + \`.meta.env.BASE_URL\` (concatenate all that) in the Graphics Kit and other Vite-based rigs.

\`\`\`svelte
<script>
  import { SEO } from '@reuters-graphics/graphics-components';
  import pkg from '$pkg';
  import content from '$locales/en/content.json';
  import { assets } from '$app/paths';
  import { page } from '$app/stores';
<\/script>

<SEO
  baseUrl="{VITE_BASE_URL}"
  pageUrl="{$page.url}"
  seoTitle="{content.SEOTitle}"
  seoDescription="{content.SEODescription}"
  shareTitle="{content.ShareTitle}"
  shareDescription="{content.ShareDescription}"
  shareImgPath="{\`\${assets}/\${content.ShareImgPath}\`}"
  shareImgAlt="{content.ShareImgAlt}"
  publishTime="{pkg?.reuters?.graphic?.published}"
  updateTime="{pkg?.reuters?.graphic?.updated}"
  authors="{pkg?.reuters?.graphic?.authors}"
/>
\`\`\`
`;function Te(c){let r;return{c(){r=f("meta"),t(r,"name","twitter:image:alt"),t(r,"content",c[5])},m(l,a){i(l,r,a)},p(l,a){a&32&&t(r,"content",l[5])},d(l){l&&n(r)}}}function ye(c){let r,l,a,h,g,b,m,_,T,I,w,S,o,d,D,U,k,P,p,j,O,ee,E,te,L,se,N,ne,G,ie,J,oe,A,re,v,le,R,ae,C,me,K,M,pe,F,ce,Q,ue,z,fe,W,Oe=`<script type="application/ld+json">${JSON.stringify(c[9])}<\/script>`,X,V,x=`<script type="application/ld+json">${JSON.stringify(c[8])}<\/script>`,$;document.title=r=c[0];let y=c[5]&&Te(c);return{c(){l=u(),a=f("meta"),h=u(),g=f("link"),b=u(),m=f("link"),_=u(),T=f("link"),I=u(),w=f("link"),S=u(),o=f("link"),d=u(),D=f("meta"),U=u(),k=f("meta"),P=u(),p=f("meta"),j=u(),O=f("meta"),ee=u(),E=f("meta"),te=u(),L=f("meta"),se=u(),N=f("meta"),ne=u(),G=f("meta"),ie=u(),J=f("meta"),oe=u(),A=f("meta"),re=u(),v=f("meta"),le=u(),R=f("meta"),ae=u(),C=f("meta"),me=u(),y&&y.c(),K=u(),M=f("meta"),pe=u(),F=f("meta"),ce=u(),Q=f("meta"),ue=u(),z=f("meta"),fe=u(),W=new we(!1),X=u(),V=new we(!1),$=Ie(),t(a,"name","description"),t(a,"content",c[1]),t(g,"rel","canonical"),t(g,"href",c[6]),t(m,"rel","shortcut icon"),t(m,"type","image/x-icon"),t(m,"href","https://s3.reutersmedia.net/resources_v2/images/favicon/favicon.ico"),t(T,"rel","icon"),t(T,"type","image/png"),t(T,"href","https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-16x16.png"),t(T,"sizes","16x16"),t(w,"rel","icon"),t(w,"type","image/png"),t(w,"href","https://s1.reutersmedia.net/resources_v2/images/favicon/favicon-32x32.png"),t(w,"sizes","32x32"),t(o,"rel","icon"),t(o,"type","image/png"),t(o,"href","https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-96x96.png"),t(o,"sizes","96x96"),t(D,"property","og:url"),t(D,"content",c[6]),t(k,"property","og:type"),t(k,"content","article"),t(p,"property","og:title"),t(p,"content",c[2]),t(p,"itemprop","name"),t(O,"property","og:description"),t(O,"content",c[3]),t(O,"itemprop","description"),t(E,"property","og:image"),t(E,"content",c[4]),t(E,"itemprop","image"),t(L,"property","og:site_name"),t(L,"content","Reuters"),t(N,"name","twitter:card"),t(N,"content","summary_large_image"),t(G,"name","twitter:site"),t(G,"content","@ReutersGraphics"),t(J,"name","twitter:creator"),t(J,"content","@ReutersGraphics"),t(A,"name","twitter:domain"),t(A,"content",c[7]),t(v,"name","twitter:title"),t(v,"content",c[2]),t(R,"name","twitter:description"),t(R,"content",c[3]),t(C,"name","twitter:image"),t(C,"content",c[4]),t(M,"property","fb:app_id"),t(M,"content","319194411438328"),t(F,"property","fb:admins"),t(F,"content","616167736"),t(Q,"property","fb:admins"),t(Q,"content","625796953"),t(z,"property","fb:admins"),t(z,"content","571759798"),W.a=X,V.a=$},m(e,s){i(e,l,s),i(e,a,s),i(e,h,s),i(e,g,s),i(e,b,s),i(e,m,s),i(e,_,s),i(e,T,s),i(e,I,s),i(e,w,s),i(e,S,s),i(e,o,s),i(e,d,s),i(e,D,s),i(e,U,s),i(e,k,s),i(e,P,s),i(e,p,s),i(e,j,s),i(e,O,s),i(e,ee,s),i(e,E,s),i(e,te,s),i(e,L,s),i(e,se,s),i(e,N,s),i(e,ne,s),i(e,G,s),i(e,ie,s),i(e,J,s),i(e,oe,s),i(e,A,s),i(e,re,s),i(e,v,s),i(e,le,s),i(e,R,s),i(e,ae,s),i(e,C,s),i(e,me,s),y&&y.m(e,s),i(e,K,s),i(e,M,s),i(e,pe,s),i(e,F,s),i(e,ce,s),i(e,Q,s),i(e,ue,s),i(e,z,s),i(e,fe,s),W.m(Oe,e,s),i(e,X,s),V.m(x,e,s),i(e,$,s)},p(e,s){s&1&&r!==(r=e[0])&&(document.title=r),s&2&&t(a,"content",e[1]),s&64&&t(g,"href",e[6]),s&64&&t(D,"content",e[6]),s&4&&t(p,"content",e[2]),s&8&&t(O,"content",e[3]),s&16&&t(E,"content",e[4]),s&128&&t(A,"content",e[7]),s&4&&t(v,"content",e[2]),s&8&&t(R,"content",e[3]),s&16&&t(C,"content",e[4]),e[5]?y?y.p(e,s):(y=Te(e),y.c(),y.m(K.parentNode,K)):y&&(y.d(1),y=null),s&256&&x!==(x=`<script type="application/ld+json">${JSON.stringify(e[8])}<\/script>`)&&V.p(x)},d(e){e&&(n(l),n(a),n(h),n(g),n(b),n(m),n(_),n(T),n(I),n(w),n(S),n(o),n(d),n(D),n(U),n(k),n(P),n(p),n(j),n(O),n(ee),n(E),n(te),n(L),n(se),n(N),n(ne),n(G),n(ie),n(J),n(oe),n(A),n(re),n(v),n(le),n(R),n(ae),n(C),n(me),n(K),n(M),n(pe),n(F),n(ce),n(Q),n(ue),n(z),n(fe),W.d(),n(X),n($),V.d()),y&&y.d(e)}}}function Ge(c){let r=c[6],l,a=ye(c);return{c(){a.c(),l=Ie()},m(h,g){a.m(document.head,null),Ee(document.head,l)},p(h,[g]){g&64&&ge(r,r=h[6])?(a.d(1),a=ye(h),a.c(),a.m(l.parentNode,l)):a.p(h,g)},i:_e,o:_e,d(h){n(l),a.d(h)}}}function Je(c,r,l){let a,h,g,{baseUrl:b=""}=r,{pageUrl:m=null}=r,{seoTitle:_}=r,{seoDescription:T}=r,{shareTitle:I}=r,{shareDescription:w}=r,{shareImgPath:S}=r,{shareImgAlt:o=""}=r,{publishTime:d=""}=r,{updateTime:D=""}=r,{authors:U=[]}=r;const k=p=>{try{return new URL(p).origin}catch{return typeof window<"u"?k(window.location.href):""}},P={"@context":"http://schema.org","@type":"NewsMediaOrganization","@id":"https://www.reuters.com/#publisher",name:"Reuters",logo:{"@type":"ImageObject",url:"https://s3.reutersmedia.net/resources_v2/images/reuters_social_logo.png",width:"200",height:"200"},url:"https://www.reuters.com/"};return c.$$set=p=>{"baseUrl"in p&&l(10,b=p.baseUrl),"pageUrl"in p&&l(11,m=p.pageUrl),"seoTitle"in p&&l(0,_=p.seoTitle),"seoDescription"in p&&l(1,T=p.seoDescription),"shareTitle"in p&&l(2,I=p.shareTitle),"shareDescription"in p&&l(3,w=p.shareDescription),"shareImgPath"in p&&l(4,S=p.shareImgPath),"shareImgAlt"in p&&l(5,o=p.shareImgAlt),"publishTime"in p&&l(12,d=p.publishTime),"updateTime"in p&&l(13,D=p.updateTime),"authors"in p&&l(14,U=p.authors)},c.$$.update=()=>{c.$$.dirty&1024&&l(7,a=k(b)),c.$$.dirty&2176&&l(6,h=(a+m.pathname).replace(/index\.html\/$/,"")),c.$$.dirty&28753&&l(8,g={"@context":"http://schema.org","@type":"NewsArticle",headline:_,url:h,mainEntityOfPage:{"@type":"WebPage","@id":h},thumbnailUrl:S,image:[{"@context":"http://schema.org","@type":"ImageObject",url:S}],publisher:{"@id":"https://www.reuters.com/#publisher"},copyrightHolder:{"@id":"https://www.reuters.com/#publisher"},sourceOrganization:{"@id":"https://www.reuters.com/#publisher"},copyrightYear:new Date().getFullYear(),dateCreated:d,datePublished:d,dateModified:D,author:U.map(({name:p,url:j})=>({"@type":"Person",name:p,url:j})),articleSection:"Graphics",isAccessibleForFree:!0,creator:["Reuters Graphics"],keywords:["Reuters graphics","Reuters","graphics","Interactives"]})},[_,T,I,w,S,o,h,a,g,P,b,m,d,D,U]}class ke extends Se{constructor(r){super(),De(this,r,Je,Ge,ge,{baseUrl:10,pageUrl:11,seoTitle:0,seoDescription:1,shareTitle:2,shareDescription:3,shareImgPath:4,shareImgAlt:5,publishTime:12,updateTime:13,authors:14})}}function Ke(c){let r,l,a,h;const g=[c[0]];let b={};for(let m=0;m<g.length;m+=1)b=he(b,g[m]);return r=new ke({props:b}),{c(){q(r.$$.fragment),l=u(),a=f("div"),a.textContent="Nothing to see here. 😎"},m(m,_){B(r,m,_),i(m,l,_),i(m,a,_),h=!0},p(m,_){const T=_&1?Ue(g,[Ae(m[0])]):{};r.$set(T)},i(m){h||(H(r.$$.fragment,m),h=!0)},o(m){Y(r.$$.fragment,m),h=!1},d(m){m&&(n(l),n(a)),Z(r,m)}}}function Me(c){let r,l,a,h,g,b,m,_;const T=[{title:"Components/SEO"},{component:ke},Pe(Le)];let I={};for(let o=0;o<T.length;o+=1)I=he(I,T[o]);r=new Re({props:I}),a=new Ce({props:{$$slots:{default:[Ke,({args:o})=>({0:o}),({args:o})=>o?1:0]},$$scope:{ctx:c}}}),g=new be({props:{name:"Default",args:{baseUrl:"https://graphics.reuters.com",pageUrl:new URL("https://graphics.reuters.com/hello-world/"),publishTime:new Date("2020-09-15").toISOString()}}});const w=[{name:"🚀 QUICKIT"},{args:{baseUrl:"https://graphics.reuters.com",pageUrl:new URL("https://graphics.reuters.com/hello-world/"),publishTime:new Date("2020-09-15").toISOString()}},je(Ne)];let S={};for(let o=0;o<w.length;o+=1)S=he(S,w[o]);return m=new be({props:S}),{c(){q(r.$$.fragment),l=u(),q(a.$$.fragment),h=u(),q(g.$$.fragment),b=u(),q(m.$$.fragment)},m(o,d){B(r,o,d),i(o,l,d),B(a,o,d),i(o,h,d),B(g,o,d),i(o,b,d),B(m,o,d),_=!0},p(o,[d]){const D={};r.$set(D);const U={};d&3&&(U.$$scope={dirty:d,ctx:o}),a.$set(U);const k=d&0?Ue(w,[w[0],{args:{baseUrl:"https://graphics.reuters.com",pageUrl:new URL("https://graphics.reuters.com/hello-world/"),publishTime:new Date("2020-09-15").toISOString()}},w[2]]):{};m.$set(k)},i(o){_||(H(r.$$.fragment,o),H(a.$$.fragment,o),H(g.$$.fragment,o),H(m.$$.fragment,o),_=!0)},o(o){Y(r.$$.fragment,o),Y(a.$$.fragment,o),Y(g.$$.fragment,o),Y(m.$$.fragment,o),_=!1},d(o){o&&(n(l),n(h),n(b)),Z(r,o),Z(a,o),Z(g,o),Z(m,o)}}}class Fe extends Se{constructor(r){super(),De(this,r,null,Me,ge,{})}}const de=ve(Fe,{meta:{title:"Components/SEO"},stories:{"tpl:default":{name:"default",template:!0,source:`<SEO {...args} />
<div>Nothing to see here. 😎</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},QUICKIT:{name:"🚀 QUICKIT",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","quickitDocs","SEO","withComponentDocs","withStoryDocs"]}),Be=de.meta,He=["Default","QUICKIT"],Ye=de.stories.Default,Ze=de.stories.QUICKIT;export{Ye as Default,Ze as QUICKIT,He as __namedExportsOrder,Be as default};
//# sourceMappingURL=SEO.stories-f8b73e7e.js.map
