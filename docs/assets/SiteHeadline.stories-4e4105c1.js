import{S as K,i as V,s as q,g as h,m as g,t as y,h as b,j as _,o as D,y as T,b as k,d as S,e as U,f as w,z as I,A,C as H,n as R}from"./index-df681c7c.js";import{g as M,a as Q}from"./spread-8a54911c.js";import{p as Z,M as j,T as N,S as P}from"./collect-stories-a6a786e2.js";import{B as E}from"./Block-2886d499.js";import{B as F}from"./Byline-c97b9578.js";import{b as J,w as L}from"./withParams-47e2ab71.js";import"./each-e59479a4.js";import"./_commonjsHelpers-de833af9.js";import"./journalize-07958dc6.js";const W=`A simplified Reuters Graphics headline, loosely modelled off our dotcom site.

Styles for this headline are intentionally restricted. It is meant to serve as a unifying style for quick-turnaround, usually shorter breaking news pages.

\`\`\`svelte
<script>
  import { SiteHeadline } from '@reuters-graphics/graphics-components';
<\/script>

<SiteHeadline
  hed="Ukraine makes suprising gains in swift counteroffensive"
  authors="{[
    'Dea Bankova',
    'Michael Ovaska',
    'Samuel Granados',
    'Prasanta Kumar Dutta',
  ]}"
  publishTime="2021-09-12T00:00:00.000Z"
  updateTime="2021-09-12T12:57:00.000Z"
/>
\`\`\`
`,X=`Setup your Google Doc to work with the \`SiteHeadline\` component.

\`\`\`yaml
# Beginning of your Google doc
Section: Global News
SectionUrl:
Hed: A beautiful page
Authors: Samuel Granados, Dea Bankova
Published: 2022-09-12T08:30:00.000Z
Updated:
\`\`\`

\`\`\`svelte
<!-- App.svelte -->
<script>
  import { SiteHeadline } from '@reuters-graphics/graphics-components';

  // These should be already imported for you.
  import content from '$locales/en/content.json';
<\/script>

<SiteHeadline
  section="{content.Section}"
  sectionUrl="{content.SectionUrl}"
  hed="{content.Hed}"
  authors="{content.Authors.split(',')}"
  publishTime="{content.Published}"
  updateTime="{content.Updated}"
/>
\`\`\`
`;function $(r){let e;function t(s,u){return s[2]?x:Y}let n=t(r),a=n(r);return{c(){e=D("p"),a.c(),k(e,"class","section-title mb-0 font-subhed text-xs text-secondary font-bold uppercase whitespace-nowrap tracking-wider")},m(s,u){S(s,e,u),a.m(e,null)},p(s,u){n===(n=t(s))&&a?a.p(s,u):(a.d(1),a=n(s),a&&(a.c(),a.m(e,null)))},d(s){s&&w(e),a.d()}}}function Y(r){let e;return{c(){e=I(r[1])},m(t,n){S(t,e,n)},p(t,n){n&2&&A(e,t[1])},d(t){t&&w(e)}}}function x(r){let e,t;return{c(){e=D("a"),t=I(r[1]),k(e,"class","no-underline !text-secondary"),k(e,"href",r[2])},m(n,a){S(n,e,a),U(e,t)},p(n,a){a&2&&A(t,n[1]),a&4&&k(e,"href",n[2])},d(n){n&&w(e)}}}function z(r){let e,t,n;return{c(){e=D("h1"),t=I(r[0]),k(e,"class",n="fmt-1 fmb-3 "+r[8])},m(a,s){S(a,e,s),U(e,t)},p(a,s){s&1&&A(t,a[0]),s&256&&n!==(n="fmt-1 fmb-3 "+a[8])&&k(e,"class",n)},d(a){a&&w(e)}}}function ee(r){let e,t,n,a,s,u,l=r[1]&&$(r),c=r[0]&&z(r);return s=new F({props:{authors:r[3],publishTime:r[4],updateTime:r[5]}}),{c(){e=D("header"),t=D("div"),l&&l.c(),n=T(),c&&c.c(),a=T(),h(s.$$.fragment),k(t,"class","title"),k(e,"class","headline")},m(o,d){S(o,e,d),U(e,t),l&&l.m(t,null),U(t,n),c&&c.m(t,null),U(e,a),g(s,e,null),u=!0},p(o,d){o[1]?l?l.p(o,d):(l=$(o),l.c(),l.m(t,n)):l&&(l.d(1),l=null),o[0]?c?c.p(o,d):(c=z(o),c.c(),c.m(t,null)):c&&(c.d(1),c=null);const m={};d&8&&(m.authors=o[3]),d&16&&(m.publishTime=o[4]),d&32&&(m.updateTime=o[5]),s.$set(m)},i(o){u||(y(s.$$.fragment,o),u=!0)},o(o){b(s.$$.fragment,o),u=!1},d(o){o&&w(e),l&&l.d(),c&&c.d(),_(s)}}}function te(r){let e,t;return e=new E({props:{id:r[6],class:"headline-container fmt-7 fmb-6 "+r[7],width:"normal",$$slots:{default:[ee]},$$scope:{ctx:r}}}),{c(){h(e.$$.fragment)},m(n,a){g(e,n,a),t=!0},p(n,[a]){const s={};a&64&&(s.id=n[6]),a&128&&(s.class="headline-container fmt-7 fmb-6 "+n[7]),a&1343&&(s.$$scope={dirty:a,ctx:n}),e.$set(s)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){_(e,n)}}}function ne(r,e,t){let{hed:n="Reuters Graphics Interactive"}=e,{hedSize:a="normal"}=e,{section:s="Graphics"}=e,{sectionUrl:u="https://graphics.reuters.com"}=e,{authors:l=[]}=e,{publishTime:c=""}=e,{updateTime:o=""}=e,{id:d=""}=e,{class:m=""}=e,p;return r.$$set=i=>{"hed"in i&&t(0,n=i.hed),"hedSize"in i&&t(9,a=i.hedSize),"section"in i&&t(1,s=i.section),"sectionUrl"in i&&t(2,u=i.sectionUrl),"authors"in i&&t(3,l=i.authors),"publishTime"in i&&t(4,c=i.publishTime),"updateTime"in i&&t(5,o=i.updateTime),"id"in i&&t(6,d=i.id),"class"in i&&t(7,m=i.class)},r.$$.update=()=>{if(r.$$.dirty&512)switch(a){case"big":t(8,p="text-4xl");break;case"small":t(8,p="text-2xl");break;default:t(8,p="text-3xl")}},[n,s,u,l,c,o,d,m,p,a]}class v extends K{constructor(e){super(),V(this,e,ne,te,q,{hed:0,hedSize:9,section:1,sectionUrl:2,authors:3,publishTime:4,updateTime:5,id:6,class:7})}}v.__docgen={version:3,name:"SiteHeadline.svelte",data:[{keywords:[{name:"type",description:"{string}"},{name:"required",description:""}],visibility:"public",description:"Headline",name:"hed",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Reuters Graphics Interactive"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Headline size",name:"hedSize",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Section title.",name:"section",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Graphics"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Section url, parsed as a string. Set to blank to remove link.",name:"sectionUrl",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"https://graphics.reuters.com"},{keywords:[],visibility:"public",description:"Array of author names, which will be slugified to create links to Reuters author pages",name:"authors",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Publish time as a datetime string.",name:"publishTime",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Update time as a datetime string.",name:"updateTime",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Add an id to to target with custom CSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:"Add extra classes to target with custom CSS.",keywords:[{name:"type",description:"{string}"}],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function ie(r){let e,t;const n=[r[2]];let a={};for(let s=0;s<n.length;s+=1)a=H(a,n[s]);return e=new v({props:a}),{c(){h(e.$$.fragment)},m(s,u){g(e,s,u),t=!0},p(s,u){const l=u&4?M(n,[Q(s[2])]):{};e.$set(l)},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){b(e.$$.fragment,s),t=!1},d(s){_(e,s)}}}function se(r){let e,t;return e=new v({props:{hed:r[0].Hed,section:r[0].Section,sectionUrl:r[0].SectionUrl,authors:r[0].Authors.split(","),publishTime:r[0].Published}}),{c(){h(e.$$.fragment)},m(n,a){g(e,n,a),t=!0},p:R,i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){_(e,n)}}}function ae(r){let e,t,n,a,s,u,l,c;const o=[{title:"Components/SiteHeadline"},{component:v},r[1]];let d={};for(let i=0;i<o.length;i+=1)d=H(d,o[i]);e=new j({props:d}),n=new N({props:{$$slots:{default:[ie,({args:i})=>({2:i}),({args:i})=>i?4:0]},$$scope:{ctx:r}}}),s=new P({props:{name:"Default",args:{section:"Graphics",sectionUrl:"https://graphics.reuters.com",hed:"Ukraine makes surprising gains in counteroffensive",authors:["Dea Bankova","Michael Ovaska","Samuel Granados","Prasanta Kumar Dutta"],publishTime:new Date("2021-09-12").toISOString(),updateTime:new Date("2021-09-12T13:57:00").toISOString()}}});const m=[{name:"🚀 QUICKIT"},J(X)];let p={$$slots:{default:[se]},$$scope:{ctx:r}};for(let i=0;i<m.length;i+=1)p=H(p,m[i]);return l=new P({props:p}),{c(){h(e.$$.fragment),t=T(),h(n.$$.fragment),a=T(),h(s.$$.fragment),u=T(),h(l.$$.fragment)},m(i,f){g(e,i,f),S(i,t,f),g(n,i,f),S(i,a,f),g(s,i,f),S(i,u,f),g(l,i,f),c=!0},p(i,[f]){const O=f&2?M(o,[o[0],o[1],Q(i[1])]):{};e.$set(O);const G={};f&12&&(G.$$scope={dirty:f,ctx:i}),n.$set(G);const B={};f&8&&(B.$$scope={dirty:f,ctx:i}),l.$set(B)},i(i){c||(y(e.$$.fragment,i),y(n.$$.fragment,i),y(s.$$.fragment,i),y(l.$$.fragment,i),c=!0)},o(i){b(e.$$.fragment,i),b(n.$$.fragment,i),b(s.$$.fragment,i),b(l.$$.fragment,i),c=!1},d(i){i&&(w(t),w(a),w(u)),_(e,i),_(n,i),_(s,i),_(l,i)}}}function re(r){const e={Section:"Global News",SectionUrl:"",Hed:"A beautiful page",Authors:"Samuel Granados, Dea Bankova",Published:"2022-09-12T08:30:00.000Z",Updated:""},t={...L(W),argTypes:{hedSize:{control:"select",options:["small","normal","big"]}}};return[e,t]}class le extends K{constructor(e){super(),V(this,e,re,ae,q,{})}}const C=Z(le,{meta:{title:"Components/SiteHeadline"},stories:{"tpl:default":{storyId:"components-siteheadline--default",name:"default",template:!0,source:"<SiteHeadline {...args} />",hasArgs:!0},Default:{storyId:"components-siteheadline--default",name:"Default",template:!1,source:"",hasArgs:!1},QUICKIT:{storyId:"components-siteheadline--quickit",name:"🚀 QUICKIT",template:!1,source:`<SiteHeadline
  hed="{content.Hed}"
  section="{content.Section}"
  sectionUrl="{content.SectionUrl}"
  authors="{content.Authors.split(',')}"
  publishTime="{content.Published}"
/>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","quickitDocs","SiteHeadline","withComponentDocs","withStoryDocs"]}),ye=C.meta,be=["Default","QUICKIT"],_e=C.stories.Default,ke=C.stories.QUICKIT;export{_e as Default,ke as QUICKIT,be as __namedExportsOrder,ye as default};
//# sourceMappingURL=SiteHeadline.stories-4e4105c1.js.map
