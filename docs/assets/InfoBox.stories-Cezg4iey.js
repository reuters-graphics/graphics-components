import{S as K,i as Q,s as X,q as T,c as b,f as I,h as _,m as w,t as c,a as m,k as y,d as k,E as oe,o as B,D as ne,r as R,u as V,y as M,z as E,A as L,B as W,l as Y,n as Z}from"./index-C9aKRT5A.js";import{g as ee,a as te}from"./spread-CgU5AtxT.js";import{p as se,M as re,T as ie,S as O,w as ae}from"./collect-stories-ceFdpR5E.js";import{B as le}from"./Block-C7biTRWl.js";import{M as U}from"./Markdown-BNYiGaXJ.js";import{B as P}from"./BodyText-DOLlE-fm.js";const fe=`InfoBox is used to provide additional information that needs to be visually set aside from the main content flow. e.g. Methodology, Detailed notes about data, Extra context as text stories.

Switch the theme prop to \`dark\` for a dark page infobox.

Use the slots to customize the content as needed, e.g. adding icons and thumbnail images etc.

\`\`\`svelte
<script>
  import { InfoBox } from '@reuters-graphics/graphics-components';
<\/script>

<InfoBox
  title="About this data"
  text="{'Reuters is collecting daily COVID-19 infections and deaths data for 240 countries and territories around the world, updated regularly throughout each day. \\n\\n Every country reports those figures a little differently and, inevitably, misses undiagnosed infections and deaths. With this project we are focusing on the trends within countries as they try to contain the virus’ spread, whether they are approaching or past peak infection rates, or if they are seeing a resurgence of infections or deaths.'}"
  notes="{'[Read more about our methodology](https://www.reuters.com/world-coronavirus-tracker-and-maps/en/methodology/)'}"
/>
\`\`\`
`,de=a=>({}),G=a=>({}),ue=a=>({}),H=a=>({}),ce=a=>({}),J=a=>({});function me(a){let t,n,s;return n=new U({props:{source:a[0]}}),{c(){t=T("div"),b(n.$$.fragment),I(t,"class","header fmb-2")},m(o,e){_(o,t,e),w(n,t,null),s=!0},p(o,e){const r={};e&1&&(r.source=o[0]),n.$set(r)},i(o){s||(c(n.$$.fragment,o),s=!0)},o(o){m(n.$$.fragment,o),s=!1},d(o){o&&y(t),k(n)}}}function pe(a){let t,n;const s=a[8].header,o=M(s,a,a[9],J);return{c(){t=T("div"),o&&o.c(),I(t,"class","header fmb-2")},m(e,r){_(e,t,r),o&&o.m(t,null),n=!0},p(e,r){o&&o.p&&(!n||r&512)&&E(o,s,e,e[9],n?W(s,e[9],r,ce):L(e[9]),J)},i(e){n||(c(o,e),n=!0)},o(e){m(o,e),n=!1},d(e){e&&y(t),o&&o.d(e)}}}function he(a){let t,n,s;return n=new U({props:{source:a[1]}}),{c(){t=T("div"),b(n.$$.fragment),I(t,"class","body")},m(o,e){_(o,t,e),w(n,t,null),s=!0},p(o,e){const r={};e&2&&(r.source=o[1]),n.$set(r)},i(o){s||(c(n.$$.fragment,o),s=!0)},o(o){m(n.$$.fragment,o),s=!1},d(o){o&&y(t),k(n)}}}function _e(a){let t,n;const s=a[8].body,o=M(s,a,a[9],H);return{c(){t=T("div"),o&&o.c(),I(t,"class","body")},m(e,r){_(e,t,r),o&&o.m(t,null),n=!0},p(e,r){o&&o.p&&(!n||r&512)&&E(o,s,e,e[9],n?W(s,e[9],r,ue):L(e[9]),H)},i(e){n||(c(o,e),n=!0)},o(e){m(o,e),n=!1},d(e){e&&y(t),o&&o.d(e)}}}function ye(a){let t,n,s;return n=new U({props:{source:a[2]}}),{c(){t=T("div"),b(n.$$.fragment),I(t,"class","footer fmt-2")},m(o,e){_(o,t,e),w(n,t,null),s=!0},p(o,e){const r={};e&4&&(r.source=o[2]),n.$set(r)},i(o){s||(c(n.$$.fragment,o),s=!0)},o(o){m(n.$$.fragment,o),s=!1},d(o){o&&y(t),k(n)}}}function ge(a){let t,n;const s=a[8].footer,o=M(s,a,a[9],G);return{c(){t=T("div"),o&&o.c(),I(t,"class","footer fmt-2")},m(e,r){_(e,t,r),o&&o.m(t,null),n=!0},p(e,r){o&&o.p&&(!n||r&512)&&E(o,s,e,e[9],n?W(s,e[9],r,de):L(e[9]),G)},i(e){n||(c(o,e),n=!0)},o(e){m(o,e),n=!1},d(e){e&&y(t),o&&o.d(e)}}}function be(a){let t,n,s,o,e,r,i,d,g,$;const l=[pe,me],u=[];function p(f,h){return f[7].header?0:f[0]?1:-1}~(t=p(a))&&(n=u[t]=l[t](a));const C=[_e,he],v=[];function D(f,h){return f[7].body?0:1}o=D(a),e=v[o]=C[o](a);const z=[ge,ye],x=[];function F(f,h){return f[7].footer?0:f[2]?1:-1}return~(i=F(a))&&(d=x[i]=z[i](a)),{c(){n&&n.c(),s=B(),e.c(),r=B(),d&&d.c(),g=ne()},m(f,h){~t&&u[t].m(f,h),_(f,s,h),v[o].m(f,h),_(f,r,h),~i&&x[i].m(f,h),_(f,g,h),$=!0},p(f,h){let A=t;t=p(f),t===A?~t&&u[t].p(f,h):(n&&(R(),m(u[A],1,1,()=>{u[A]=null}),V()),~t?(n=u[t],n?n.p(f,h):(n=u[t]=l[t](f),n.c()),c(n,1),n.m(s.parentNode,s)):n=null);let S=o;o=D(f),o===S?v[o].p(f,h):(R(),m(v[S],1,1,()=>{v[S]=null}),V(),e=v[o],e?e.p(f,h):(e=v[o]=C[o](f),e.c()),c(e,1),e.m(r.parentNode,r));let N=i;i=F(f),i===N?~i&&x[i].p(f,h):(d&&(R(),m(x[N],1,1,()=>{x[N]=null}),V()),~i?(d=x[i],d?d.p(f,h):(d=x[i]=z[i](f),d.c()),c(d,1),d.m(g.parentNode,g)):d=null)},i(f){$||(c(n),c(e),c(d),$=!0)},o(f){m(n),m(e),m(d),$=!1},d(f){f&&(y(s),y(r),y(g)),~t&&u[t].d(f),v[o].d(f),~i&&x[i].d(f)}}}function we(a){let t,n,s,o;return n=new le({props:{width:a[3],id:a[5],class:a[4]+" fmy-6 fpx-6 fpy-5 border border-solid rounded",$$slots:{default:[be]},$$scope:{ctx:a}}}),{c(){t=T("aside"),b(n.$$.fragment),I(t,"class",s="infobox "+a[6]+" svelte-13irrjh")},m(e,r){_(e,t,r),w(n,t,null),o=!0},p(e,[r]){const i={};r&8&&(i.width=e[3]),r&32&&(i.id=e[5]),r&16&&(i.class=e[4]+" fmy-6 fpx-6 fpy-5 border border-solid rounded"),r&647&&(i.$$scope={dirty:r,ctx:e}),n.$set(i),(!o||r&64&&s!==(s="infobox "+e[6]+" svelte-13irrjh"))&&I(t,"class",s)},i(e){o||(c(n.$$.fragment,e),o=!0)},o(e){m(n.$$.fragment,e),o=!1},d(e){e&&y(t),k(n)}}}function ke(a,t,n){let{$$slots:s={},$$scope:o}=t;const e=oe(s);let{title:r=null}=t,{text:i=""}=t,{notes:d=null}=t,{width:g="normal"}=t,{class:$=""}=t,{id:l=""}=t,{theme:u="light"}=t;return a.$$set=p=>{"title"in p&&n(0,r=p.title),"text"in p&&n(1,i=p.text),"notes"in p&&n(2,d=p.notes),"width"in p&&n(3,g=p.width),"class"in p&&n(4,$=p.class),"id"in p&&n(5,l=p.id),"theme"in p&&n(6,u=p.theme),"$$scope"in p&&n(9,o=p.$$scope)},[r,i,d,g,$,l,u,e,s,o]}class j extends K{constructor(t){super(),Q(this,t,ke,we,X,{title:0,text:1,notes:2,width:3,class:4,id:5,theme:6})}}j.__docgen={version:3,name:"InfoBox.svelte",data:[{keywords:[],visibility:"public",description:"Title of the box",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[],visibility:"public",description:"Contents of the note as a markdown string",name:"text",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Additional footnotes",name:"notes",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Width of the component within the text well.",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{visibility:"public",description:"Add extra classes to the block tag to target it with custom CSS.",keywords:[{name:"type",description:"{string}"}],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Add an id to the block tag to target it with custom CSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Page theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"light"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"Custom title content",name:"header"},{keywords:[],visibility:"public",description:"Custom content",name:"body"},{keywords:[],visibility:"public",description:"Custom footer content",name:"footer"}],refs:[]};function $e(a){let t,n;const s=[a[1]];let o={};for(let e=0;e<s.length;e+=1)o=Y(o,s[e]);return t=new j({props:o}),{c(){b(t.$$.fragment)},m(e,r){w(t,e,r),n=!0},p(e,r){const i=r&2?ee(s,[te(e[1])]):{};t.$set(i)},i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function ve(a){let t,n,s,o,e,r;return t=new P({props:{text:"If you haven't seen Game of Thrones, go watch it right now. If you have then you'll totally get why this Hodor themed lorem ipsum generator is just brilliant."}}),s=new j({props:{title:"About this data",text:`Reuters is collecting daily COVID-19 infections and deaths data for 240 countries and territories around the world, updated regularly throughout each day. 

 Every country reports those figures a little differently and, inevitably, misses undiagnosed infections and deaths. With this project we are focusing on the trends within countries as they try to contain the virus’ spread, whether they are approaching or past peak infection rates, or if they are seeing a resurgence of infections or deaths.`,notes:"[Read more about our methodology](https://www.reuters.com/world-coronavirus-tracker-and-maps/en/methodology/)"}}),e=new P({props:{text:"In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size."}}),{c(){b(t.$$.fragment),n=B(),b(s.$$.fragment),o=B(),b(e.$$.fragment)},m(i,d){w(t,i,d),_(i,n,d),w(s,i,d),_(i,o,d),w(e,i,d),r=!0},p:Z,i(i){r||(c(t.$$.fragment,i),c(s.$$.fragment,i),c(e.$$.fragment,i),r=!0)},o(i){m(t.$$.fragment,i),m(s.$$.fragment,i),m(e.$$.fragment,i),r=!1},d(i){i&&(y(n),y(o)),k(t,i),k(s,i),k(e,i)}}}function xe(a){let t,n;return t=new j({props:{title:"What you need to know about the war",text:`- **Food crisis**: [Russia's invasion of Ukraine](#) in late February dramatically worsened the outlook for already inflated global food prices. 
- **Under fire**: Civillian homes destroyed in the conflict and Russia accused of war crimes. 
- **Nordstream sabotage**: A series of clandestine bombings and subsequent underwater gas leaks occurred on the Nord Stream 1 and Nord Stream 2 natural gas pipelines. `}}),{c(){b(t.$$.fragment)},m(s,o){w(t,s,o),n=!0},p:Z,i(s){n||(c(t.$$.fragment,s),n=!0)},o(s){m(t.$$.fragment,s),n=!1},d(s){k(t,s)}}}function Ie(a){let t,n,s,o,e,r,i,d;const g=[{title:"Components/InfoBox"},{component:j},a[0]];let $={};for(let l=0;l<g.length;l+=1)$=Y($,g[l]);return t=new re({props:$}),s=new ie({props:{$$slots:{default:[$e,({args:l})=>({1:l}),({args:l})=>l?2:0]},$$scope:{ctx:a}}}),e=new O({props:{name:"Default",$$slots:{default:[ve]},$$scope:{ctx:a}}}),i=new O({props:{name:"List",$$slots:{default:[xe]},$$scope:{ctx:a}}}),{c(){b(t.$$.fragment),n=B(),b(s.$$.fragment),o=B(),b(e.$$.fragment),r=B(),b(i.$$.fragment)},m(l,u){w(t,l,u),_(l,n,u),w(s,l,u),_(l,o,u),w(e,l,u),_(l,r,u),w(i,l,u),d=!0},p(l,[u]){const p=u&1?ee(g,[g[0],g[1],te(l[0])]):{};t.$set(p);const C={};u&6&&(C.$$scope={dirty:u,ctx:l}),s.$set(C);const v={};u&4&&(v.$$scope={dirty:u,ctx:l}),e.$set(v);const D={};u&4&&(D.$$scope={dirty:u,ctx:l}),i.$set(D)},i(l){d||(c(t.$$.fragment,l),c(s.$$.fragment,l),c(e.$$.fragment,l),c(i.$$.fragment,l),d=!0)},o(l){m(t.$$.fragment,l),m(s.$$.fragment,l),m(e.$$.fragment,l),m(i.$$.fragment,l),d=!1},d(l){l&&(y(n),y(o),y(r)),k(t,l),k(s,l),k(e,l),k(i,l)}}}function Be(a){return[{...ae(fe),argTypes:{theme:{control:"select",options:["light","dark"]},width:{control:"select",options:["normal","wide","wider","widest","fluid"]}}}]}class Te extends K{constructor(t){super(),Q(this,t,Be,Ie,X,{})}}const q=se(Te,{meta:{title:"Components/InfoBox"},stories:{"tpl:default":{name:"default",template:!0,source:"<InfoBox {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:`<BodyText
  text="If you haven't seen Game of Thrones, go watch it right now. If you have then you'll totally get why this Hodor themed lorem ipsum generator is just brilliant."
/>
<InfoBox
  title="About this data"
  text="{'Reuters is collecting daily COVID-19 infections and deaths data for 240 countries and territories around the world, updated regularly throughout each day. 

 Every country reports those figures a little differently and, inevitably, misses undiagnosed infections and deaths. With this project we are focusing on the trends within countries as they try to contain the virus’ spread, whether they are approaching or past peak infection rates, or if they are seeing a resurgence of infections or deaths.'}"
  notes="{'[Read more about our methodology](https://www.reuters.com/world-coronavirus-tracker-and-maps/en/methodology/)'}"
/>
<BodyText
  text="In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size."
/>`,hasArgs:!1},List:{name:"List",template:!1,source:`<InfoBox
  title="What you need to know about the war"
  text="{"- **Food crisis**: [Russia's invasion of Ukraine](#) in late February dramatically worsened the outlook for already inflated global food prices. 
- **Under fire**: Civillian homes destroyed in the conflict and Russia accused of war crimes. 
- **Nordstream sabotage**: A series of clandestine bombings and subsequent underwater gas leaks occurred on the Nord Stream 1 and Nord Stream 2 natural gas pipelines. "}"
/>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","InfoBox","BodyText","withComponentDocs"]}),Re=q.meta,Ve=["Default","List"],Me=q.stories.Default,Ee=q.stories.List;export{Me as Default,Ee as List,Ve as __namedExportsOrder,Re as default};