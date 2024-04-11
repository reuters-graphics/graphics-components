import{S as B,i as z,s as K,g as h,m as g,t as y,h as b,j as k,l as T,y as U,b as m,d as _,e as w,f as S,z as D,A as H,C as P,n as V}from"./index-99a30af8.js";import{g as Q,a as q}from"./spread-8a54911c.js";import{w as O,b as R}from"./withParams-47e2ab71.js";import{B as Z}from"./Block-a09d61d3.js";import{B as j}from"./Byline-1358d74f.js";import{p as M,T as N,S as A}from"./collect-stories-1e0d20c7.js";import"./each-e59479a4.js";import"./_commonjsHelpers-de833af9.js";import"./journalize-07958dc6.js";const $=`A simplified Reuters Graphics headline, loosely modelled off our dotcom site.

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
`;function C(r){let e;function n(i,o){return i[2]?F:E}let t=n(r),a=t(r);return{c(){e=T("p"),a.c(),m(e,"class","section-title mb-0 font-subhed text-xs text-secondary font-bold uppercase whitespace-nowrap tracking-wider")},m(i,o){_(i,e,o),a.m(e,null)},p(i,o){t===(t=n(i))&&a?a.p(i,o):(a.d(1),a=t(i),a&&(a.c(),a.m(e,null)))},d(i){i&&S(e),a.d()}}}function E(r){let e;return{c(){e=D(r[1])},m(n,t){_(n,e,t)},p(n,t){t&2&&H(e,n[1])},d(n){n&&S(e)}}}function F(r){let e,n;return{c(){e=T("a"),n=D(r[1]),m(e,"class","no-underline !text-secondary"),m(e,"href",r[2])},m(t,a){_(t,e,a),w(e,n)},p(t,a){a&2&&H(n,t[1]),a&4&&m(e,"href",t[2])},d(t){t&&S(e)}}}function G(r){let e,n,t;return{c(){e=T("h1"),n=D(r[0]),m(e,"class",t="fmt-1 fmb-3 "+r[8])},m(a,i){_(a,e,i),w(e,n)},p(a,i){i&1&&H(n,a[0]),i&256&&t!==(t="fmt-1 fmb-3 "+a[8])&&m(e,"class",t)},d(a){a&&S(e)}}}function J(r){let e,n,t,a,i,o,l=r[1]&&C(r),c=r[0]&&G(r);return i=new j({props:{authors:r[3],publishTime:r[4],updateTime:r[5]}}),{c(){e=T("header"),n=T("div"),l&&l.c(),t=U(),c&&c.c(),a=U(),h(i.$$.fragment),m(n,"class","title"),m(e,"class","headline")},m(s,u){_(s,e,u),w(e,n),l&&l.m(n,null),w(n,t),c&&c.m(n,null),w(e,a),g(i,e,null),o=!0},p(s,u){s[1]?l?l.p(s,u):(l=C(s),l.c(),l.m(n,t)):l&&(l.d(1),l=null),s[0]?c?c.p(s,u):(c=G(s),c.c(),c.m(n,null)):c&&(c.d(1),c=null);const f={};u&8&&(f.authors=s[3]),u&16&&(f.publishTime=s[4]),u&32&&(f.updateTime=s[5]),i.$set(f)},i(s){o||(y(i.$$.fragment,s),o=!0)},o(s){b(i.$$.fragment,s),o=!1},d(s){s&&S(e),l&&l.d(),c&&c.d(),k(i)}}}function L(r){let e,n;return e=new Z({props:{id:r[6],class:"headline-container fmt-7 fmb-6 "+r[7],width:"normal",$$slots:{default:[J]},$$scope:{ctx:r}}}),{c(){h(e.$$.fragment)},m(t,a){g(e,t,a),n=!0},p(t,[a]){const i={};a&64&&(i.id=t[6]),a&128&&(i.class="headline-container fmt-7 fmb-6 "+t[7]),a&1343&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function W(r,e,n){let{hed:t="Reuters Graphics Interactive"}=e,{hedSize:a="normal"}=e,{section:i="Graphics"}=e,{sectionUrl:o="https://graphics.reuters.com"}=e,{authors:l=[]}=e,{publishTime:c=""}=e,{updateTime:s=""}=e,{id:u=""}=e,{class:f=""}=e,p;return r.$$set=d=>{"hed"in d&&n(0,t=d.hed),"hedSize"in d&&n(9,a=d.hedSize),"section"in d&&n(1,i=d.section),"sectionUrl"in d&&n(2,o=d.sectionUrl),"authors"in d&&n(3,l=d.authors),"publishTime"in d&&n(4,c=d.publishTime),"updateTime"in d&&n(5,s=d.updateTime),"id"in d&&n(6,u=d.id),"class"in d&&n(7,f=d.class)},r.$$.update=()=>{if(r.$$.dirty&512)switch(a){case"big":n(8,p="text-4xl");break;case"small":n(8,p="text-2xl");break;default:n(8,p="text-3xl")}},[t,i,o,l,c,s,u,f,p,a]}class v extends B{constructor(e){super(),z(this,e,W,L,K,{hed:0,hedSize:9,section:1,sectionUrl:2,authors:3,publishTime:4,updateTime:5,id:6,class:7})}}v.__docgen={version:3,name:"SiteHeadline.svelte",data:[{keywords:[{name:"type",description:"{string}"},{name:"required",description:""}],visibility:"public",description:"Headline",name:"hed",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Reuters Graphics Interactive"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Headline size",name:"hedSize",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Section title.",name:"section",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Graphics"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Section url, parsed as a string. Set to blank to remove link.",name:"sectionUrl",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"https://graphics.reuters.com"},{keywords:[],visibility:"public",description:"Array of author names, which will be slugified to create links to Reuters author pages",name:"authors",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Publish time as a datetime string.",name:"publishTime",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Update time as a datetime string.",name:"updateTime",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Add an id to to target with custom CSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:"Add extra classes to target with custom CSS.",keywords:[{name:"type",description:"{string}"}],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const X=`Setup your Google Doc to work with the \`SiteHeadline\` component.

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
`;function Y(r){let e,n;const t=[r[1]];let a={};for(let i=0;i<t.length;i+=1)a=P(a,t[i]);return e=new v({props:a}),{c(){h(e.$$.fragment)},m(i,o){g(e,i,o),n=!0},p(i,o){const l=o&2?Q(t,[q(i[1])]):{};e.$set(l)},i(i){n||(y(e.$$.fragment,i),n=!0)},o(i){b(e.$$.fragment,i),n=!1},d(i){k(e,i)}}}function x(r){let e,n;return e=new v({props:{hed:r[0].Hed,section:r[0].Section,sectionUrl:r[0].SectionUrl,authors:r[0].Authors.split(","),publishTime:r[0].Published}}),{c(){h(e.$$.fragment)},m(t,a){g(e,t,a),n=!0},p:V,i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function ee(r){let e,n,t,a,i,o;e=new N({props:{$$slots:{default:[Y,({args:s})=>({1:s}),({args:s})=>s?2:0]},$$scope:{ctx:r}}}),t=new A({props:{name:"Default",args:{section:"Graphics",sectionUrl:"https://graphics.reuters.com",hed:"Ukraine makes surprising gains in counteroffensive",authors:["Dea Bankova","Michael Ovaska","Samuel Granados","Prasanta Kumar Dutta"],publishTime:new Date("2021-09-12").toISOString(),updateTime:new Date("2021-09-12T13:57:00").toISOString()}}});const l=[{name:"🚀 QUICKIT"},R(X)];let c={$$slots:{default:[x]},$$scope:{ctx:r}};for(let s=0;s<l.length;s+=1)c=P(c,l[s]);return i=new A({props:c}),{c(){h(e.$$.fragment),n=U(),h(t.$$.fragment),a=U(),h(i.$$.fragment)},m(s,u){g(e,s,u),_(s,n,u),g(t,s,u),_(s,a,u),g(i,s,u),o=!0},p(s,[u]){const f={};u&6&&(f.$$scope={dirty:u,ctx:s}),e.$set(f);const p={};u&4&&(p.$$scope={dirty:u,ctx:s}),i.$set(p)},i(s){o||(y(e.$$.fragment,s),y(t.$$.fragment,s),y(i.$$.fragment,s),o=!0)},o(s){b(e.$$.fragment,s),b(t.$$.fragment,s),b(i.$$.fragment,s),o=!1},d(s){s&&(S(n),S(a)),k(e,s),k(t,s),k(i,s)}}}const te={title:"Components/SiteHeadline",component:v,...O($),argTypes:{hedSize:{control:"select",options:["small","normal","big"]}}};function ne(r){return[{Section:"Global News",SectionUrl:"",Hed:"A beautiful page",Authors:"Samuel Granados, Dea Bankova",Published:"2022-09-12T08:30:00.000Z",Updated:""}]}class ie extends B{constructor(e){super(),z(this,e,ne,ee,K,{})}}const I=M(ie,{meta:{title:"Components/SiteHeadline"},stories:{"tpl:default":{name:"default",template:!0,source:"<SiteHeadline {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},QUICKIT:{name:"🚀 QUICKIT",template:!1,source:`<SiteHeadline
  hed="{content.Hed}"
  section="{content.Section}"
  sectionUrl="{content.SectionUrl}"
  authors="{content.Authors.split(',')}"
  publishTime="{content.Published}"
/>`,hasArgs:!1}},allocatedIds:["default","Template","Story","quickitDocs","withStoryDocs"]},te),me=I.meta,pe=["Default","QUICKIT"],he=I.stories.Default,ge=I.stories.QUICKIT;export{he as Default,ge as QUICKIT,pe as __namedExportsOrder,me as default};
//# sourceMappingURL=SiteHeadline.stories-97be4733.js.map
