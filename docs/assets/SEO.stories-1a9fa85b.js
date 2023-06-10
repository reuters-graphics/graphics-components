import{S as Ae,i as ve,s as Te,e as Re,z as Pe,E as Ie,d as i,D as u,w,x as t,a as n,W as De,p as we,j as V,m as B,k as _e,l as he,b as H,t as W,n as Y}from"./index-25af778d.js";import{p as je,M as Le,T as Ne,S as Se}from"./collect-stories-cce06d4a.js";import{w as ge,a as de}from"./withParams-90715500.js";const ke=`The \`SEO\` component adds essential metadata to published pages.

\`\`\`html
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
`,Ue=`Add the \`SEO\` component to any page specified in the \`pages/\` directory of the Graphics Kit.

Most of the fields are filled in by other sources, like your Google Doc and package.json. (Usually, the fastest way is to copy the \`SEO\` component from one of the pages already in your project.)

> **IMPORTANT:** For _reasons_, we can't document the value of \`VITE_BASE_URL\` below. It's \`import\` + \`.meta.env.BASE_URL\` (concatenate all that) in the Graphics Kit and other Vite-based rigs.

\`\`\`html
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
`;function Oe(f){let r;return{c(){r=w("meta"),t(r,"name","twitter:image:alt"),t(r,"content",f[5])},m(l,m){n(l,r,m)},p(l,m){m&32&&t(r,"content",l[5])},d(l){l&&i(r)}}}function Ee(f){let r,l,m,_,h,y,a,b,T,d,I,S,o,c,g,k,U,P,p,j,O,ee,E,te,L,se,N,ie,G,ne,J,oe,A,re,v,le,R,me,C,ae,K,M,pe,z,fe,F,ue,Q,ce,Z,Ce=`<script type="application/ld+json">${JSON.stringify(f[9])}<\/script>`,X,q,x=`<script type="application/ld+json">${JSON.stringify(f[8])}<\/script>`,$;document.title=r=f[0];let D=f[5]&&Oe(f);return{c(){l=u(),m=w("meta"),_=u(),h=w("link"),y=u(),a=w("link"),b=u(),T=w("link"),d=u(),I=w("link"),S=u(),o=w("link"),c=u(),g=w("meta"),k=u(),U=w("meta"),P=u(),p=w("meta"),j=u(),O=w("meta"),ee=u(),E=w("meta"),te=u(),L=w("meta"),se=u(),N=w("meta"),ie=u(),G=w("meta"),ne=u(),J=w("meta"),oe=u(),A=w("meta"),re=u(),v=w("meta"),le=u(),R=w("meta"),me=u(),C=w("meta"),ae=u(),D&&D.c(),K=u(),M=w("meta"),pe=u(),z=w("meta"),fe=u(),F=w("meta"),ue=u(),Q=w("meta"),ce=u(),Z=new De(!1),X=u(),q=new De(!1),$=Re(),t(m,"name","description"),t(m,"content",f[1]),t(h,"rel","canonical"),t(h,"href",f[6]),t(a,"rel","shortcut icon"),t(a,"type","image/x-icon"),t(a,"href","https://s3.reutersmedia.net/resources_v2/images/favicon/favicon.ico"),t(T,"rel","icon"),t(T,"type","image/png"),t(T,"href","https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-16x16.png"),t(T,"sizes","16x16"),t(I,"rel","icon"),t(I,"type","image/png"),t(I,"href","https://s1.reutersmedia.net/resources_v2/images/favicon/favicon-32x32.png"),t(I,"sizes","32x32"),t(o,"rel","icon"),t(o,"type","image/png"),t(o,"href","https://s3.reutersmedia.net/resources_v2/images/favicon/favicon-96x96.png"),t(o,"sizes","96x96"),t(g,"property","og:url"),t(g,"content",f[6]),t(U,"property","og:type"),t(U,"content","article"),t(p,"property","og:title"),t(p,"content",f[2]),t(p,"itemprop","name"),t(O,"property","og:description"),t(O,"content",f[3]),t(O,"itemprop","description"),t(E,"property","og:image"),t(E,"content",f[4]),t(E,"itemprop","image"),t(L,"property","og:site_name"),t(L,"content","Reuters"),t(N,"name","twitter:card"),t(N,"content","summary_large_image"),t(G,"name","twitter:site"),t(G,"content","@ReutersGraphics"),t(J,"name","twitter:creator"),t(J,"content","@ReutersGraphics"),t(A,"name","twitter:domain"),t(A,"content",f[7]),t(v,"name","twitter:title"),t(v,"content",f[2]),t(R,"name","twitter:description"),t(R,"content",f[3]),t(C,"name","twitter:image"),t(C,"content",f[4]),t(M,"property","fb:app_id"),t(M,"content","319194411438328"),t(z,"property","fb:admins"),t(z,"content","616167736"),t(F,"property","fb:admins"),t(F,"content","625796953"),t(Q,"property","fb:admins"),t(Q,"content","571759798"),Z.a=X,q.a=$},m(e,s){n(e,l,s),n(e,m,s),n(e,_,s),n(e,h,s),n(e,y,s),n(e,a,s),n(e,b,s),n(e,T,s),n(e,d,s),n(e,I,s),n(e,S,s),n(e,o,s),n(e,c,s),n(e,g,s),n(e,k,s),n(e,U,s),n(e,P,s),n(e,p,s),n(e,j,s),n(e,O,s),n(e,ee,s),n(e,E,s),n(e,te,s),n(e,L,s),n(e,se,s),n(e,N,s),n(e,ie,s),n(e,G,s),n(e,ne,s),n(e,J,s),n(e,oe,s),n(e,A,s),n(e,re,s),n(e,v,s),n(e,le,s),n(e,R,s),n(e,me,s),n(e,C,s),n(e,ae,s),D&&D.m(e,s),n(e,K,s),n(e,M,s),n(e,pe,s),n(e,z,s),n(e,fe,s),n(e,F,s),n(e,ue,s),n(e,Q,s),n(e,ce,s),Z.m(Ce,e,s),n(e,X,s),q.m(x,e,s),n(e,$,s)},p(e,s){s&1&&r!==(r=e[0])&&(document.title=r),s&2&&t(m,"content",e[1]),s&64&&t(h,"href",e[6]),s&64&&t(g,"content",e[6]),s&4&&t(p,"content",e[2]),s&8&&t(O,"content",e[3]),s&16&&t(E,"content",e[4]),s&128&&t(A,"content",e[7]),s&4&&t(v,"content",e[2]),s&8&&t(R,"content",e[3]),s&16&&t(C,"content",e[4]),e[5]?D?D.p(e,s):(D=Oe(e),D.c(),D.m(K.parentNode,K)):D&&(D.d(1),D=null),s&256&&x!==(x=`<script type="application/ld+json">${JSON.stringify(e[8])}<\/script>`)&&q.p(x)},d(e){e&&i(l),e&&i(m),e&&i(_),e&&i(h),e&&i(y),e&&i(a),e&&i(b),e&&i(T),e&&i(d),e&&i(I),e&&i(S),e&&i(o),e&&i(c),e&&i(g),e&&i(k),e&&i(U),e&&i(P),e&&i(p),e&&i(j),e&&i(O),e&&i(ee),e&&i(E),e&&i(te),e&&i(L),e&&i(se),e&&i(N),e&&i(ie),e&&i(G),e&&i(ne),e&&i(J),e&&i(oe),e&&i(A),e&&i(re),e&&i(v),e&&i(le),e&&i(R),e&&i(me),e&&i(C),e&&i(ae),D&&D.d(e),e&&i(K),e&&i(M),e&&i(pe),e&&i(z),e&&i(fe),e&&i(F),e&&i(ue),e&&i(Q),e&&i(ce),e&&Z.d(),e&&i(X),e&&i($),e&&q.d()}}}function Ge(f){let r=f[6],l,m=Ee(f);return{c(){m.c(),l=Re()},m(_,h){m.m(document.head,null),Pe(document.head,l)},p(_,[h]){h&64&&Te(r,r=_[6])?(m.d(1),m=Ee(_),m.c(),m.m(l.parentNode,l)):m.p(_,h)},i:Ie,o:Ie,d(_){i(l),m.d(_)}}}function Je(f,r,l){let m,_,h,{baseUrl:y=""}=r,{pageUrl:a=null}=r,{seoTitle:b}=r,{seoDescription:T}=r,{shareTitle:d}=r,{shareDescription:I}=r,{shareImgPath:S}=r,{shareImgAlt:o=""}=r,{publishTime:c=""}=r,{updateTime:g=""}=r,{authors:k=[]}=r;const U=p=>{try{return new URL(p).origin}catch{return typeof window<"u"?U(window.location.href):""}},P={"@context":"http://schema.org","@type":"NewsMediaOrganization","@id":"https://www.reuters.com/#publisher",name:"Reuters",logo:{"@type":"ImageObject",url:"https://s3.reutersmedia.net/resources_v2/images/reuters_social_logo.png",width:"200",height:"200"},url:"https://www.reuters.com/"};return f.$$set=p=>{"baseUrl"in p&&l(10,y=p.baseUrl),"pageUrl"in p&&l(11,a=p.pageUrl),"seoTitle"in p&&l(0,b=p.seoTitle),"seoDescription"in p&&l(1,T=p.seoDescription),"shareTitle"in p&&l(2,d=p.shareTitle),"shareDescription"in p&&l(3,I=p.shareDescription),"shareImgPath"in p&&l(4,S=p.shareImgPath),"shareImgAlt"in p&&l(5,o=p.shareImgAlt),"publishTime"in p&&l(12,c=p.publishTime),"updateTime"in p&&l(13,g=p.updateTime),"authors"in p&&l(14,k=p.authors)},f.$$.update=()=>{f.$$.dirty&1024&&l(7,m=U(y)),f.$$.dirty&2176&&l(6,_=m+a.pathname),f.$$.dirty&28753&&l(8,h={"@context":"http://schema.org","@type":"NewsArticle",headline:b,url:_,mainEntityOfPage:{"@type":"WebPage","@id":_},thumbnailUrl:S,image:[{"@context":"http://schema.org","@type":"ImageObject",url:S}],publisher:{"@id":"https://www.reuters.com/#publisher"},copyrightHolder:{"@id":"https://www.reuters.com/#publisher"},sourceOrganization:{"@id":"https://www.reuters.com/#publisher"},copyrightYear:new Date().getFullYear(),dateCreated:c,datePublished:c,dateModified:g,author:k.map(({name:p,url:j})=>({"@type":"Person",name:p,url:j})),articleSection:"Graphics",isAccessibleForFree:!0,creator:["Reuters Graphics"],keywords:["Reuters graphics","Reuters","graphics","Interactives"]})},[b,T,d,I,S,o,_,m,h,P,y,a,c,g,k]}class be extends Ae{constructor(r){super(),ve(this,r,Je,Ge,Te,{baseUrl:10,pageUrl:11,seoTitle:0,seoDescription:1,shareTitle:2,shareDescription:3,shareImgPath:4,shareImgAlt:5,publishTime:12,updateTime:13,authors:14})}}function Ke(f){let r,l,m,_;const h=[f[0]];let y={};for(let a=0;a<h.length;a+=1)y=we(y,h[a]);return r=new be({props:y}),{c(){V(r.$$.fragment),l=u(),m=w("div"),m.textContent="Nothing to see here. 😎"},m(a,b){B(r,a,b),n(a,l,b),n(a,m,b),_=!0},p(a,b){const T=b&1?_e(h,[he(a[0])]):{};r.$set(T)},i(a){_||(H(r.$$.fragment,a),_=!0)},o(a){W(r.$$.fragment,a),_=!1},d(a){Y(r,a),a&&i(l),a&&i(m)}}}function Me(f){let r,l,m,_,h,y,a,b;const T=[{title:"Components/SEO"},{component:be},ge(ke)];let d={};for(let o=0;o<T.length;o+=1)d=we(d,T[o]);r=new Le({props:d}),m=new Ne({props:{$$slots:{default:[Ke,({args:o})=>({0:o}),({args:o})=>o?1:0]},$$scope:{ctx:f}}}),h=new Se({props:{name:"Default",args:{baseUrl:"https://graphics.reuters.com",pageUrl:new URL("https://graphics.reuters.com/hello-world/"),publishTime:new Date("2020-09-15").toISOString()}}});const I=[{name:"🚀 QUICKIT"},{args:{baseUrl:"https://graphics.reuters.com",pageUrl:new URL("https://graphics.reuters.com/hello-world/"),publishTime:new Date("2020-09-15").toISOString()}},de(Ue)];let S={};for(let o=0;o<I.length;o+=1)S=we(S,I[o]);return a=new Se({props:S}),{c(){V(r.$$.fragment),l=u(),V(m.$$.fragment),_=u(),V(h.$$.fragment),y=u(),V(a.$$.fragment)},m(o,c){B(r,o,c),n(o,l,c),B(m,o,c),n(o,_,c),B(h,o,c),n(o,y,c),B(a,o,c),b=!0},p(o,[c]){const g=c&0?_e(T,[T[0],c&0&&{component:be},c&0&&he(ge(ke))]):{};r.$set(g);const k={};c&3&&(k.$$scope={dirty:c,ctx:o}),m.$set(k);const U=c&0?_e(I,[I[0],c&0&&{args:{baseUrl:"https://graphics.reuters.com",pageUrl:new URL("https://graphics.reuters.com/hello-world/"),publishTime:new Date("2020-09-15").toISOString()}},c&0&&he(de(Ue))]):{};a.$set(U)},i(o){b||(H(r.$$.fragment,o),H(m.$$.fragment,o),H(h.$$.fragment,o),H(a.$$.fragment,o),b=!0)},o(o){W(r.$$.fragment,o),W(m.$$.fragment,o),W(h.$$.fragment,o),W(a.$$.fragment,o),b=!1},d(o){Y(r,o),o&&i(l),Y(m,o),o&&i(_),Y(h,o),o&&i(y),Y(a,o)}}}class ze extends Ae{constructor(r){super(),ve(this,r,null,Me,Te,{})}}const ye=je(ze,{meta:{title:"Components/SEO"},stories:{"tpl:default":{storyId:"components-seo--default",name:"default",template:!0,source:`<SEO {...args} />
<div>Nothing to see here. 😎</div>`,hasArgs:!0},Default:{storyId:"components-seo--default",name:"Default",template:!1,hasArgs:!1},QUICKIT:{storyId:"components-seo--quickit",name:"🚀 QUICKIT",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","quickitDocs","SEO","withComponentDocs","withStoryDocs"]}),Ve=ye.meta,Be=["Default","QUICKIT"],He=ye.stories.Default,We=ye.stories.QUICKIT;export{He as Default,We as QUICKIT,Be as __namedExportsOrder,Ve as default};
//# sourceMappingURL=SEO.stories-1a9fa85b.js.map
