import{S as O,i as j,s as q,g as $,m as C,t as _,h as k,j as T,o as y,b as p,c as M,d as b,v as R,w as D,f as w,V as E,a as F,y as S,z,e as v,A,k as X,n as H,H as Y,C as Z}from"./index-4f5e5369.js";import{g as W,a as G}from"./spread-8a54911c.js";import{p as ee,M as te,T as ne,S as se}from"./collect-stories-6e37d46b.js";import{e as U}from"./each-e59479a4.js";import{B as ie}from"./Block-67c7bec3.js";import{F as le}from"./fa-870bc0bd.js";import{c as ae}from"./index.es-a32769a3.js";import{m as P}from"./marked.esm-76161808.js";import{w as oe}from"./withParams-47e2ab71.js";const re=`A simple, clean text timeline.

\`\`\`svelte
<script>
  import { SimpleTimeline } from '@reuters-graphics/graphics-components';

  const dates = [
    {
      date: 'May 18',
      events: [
        {
          title: 'A title for the event',
          titleLink: 'https://...', // optional
          context: 'Lorem ipsum...', // optional
        },
        // More events...
      ],
    },
    // More dates...
  ];
<\/script>

<SimpleTimeline dates="{dates}" />
\`\`\`
`;function x(u,e,n){const t=u.slice();return t[5]=e[n],t}function B(u,e,n){const t=u.slice();return t[8]=e[n],t}function ce(u){let e,n=u[8].title+"",t;return{c(){e=y("div"),t=z(n),p(e,"class","title h3 svelte-5zvk3b")},m(s,l){b(s,e,l),v(e,t)},p(s,l){l&1&&n!==(n=s[8].title+"")&&A(t,n)},i:H,o:H,d(s){s&&w(e)}}}function ue(u){let e,n,t=u[8].title+"",s,l,a,r,o,i;return r=new le({props:{fw:!0,icon:ae}}),{c(){e=y("a"),n=y("div"),s=z(t),l=S(),a=y("span"),$(r.$$.fragment),p(a,"class","text-sm svelte-5zvk3b"),p(n,"class","title h3 svelte-5zvk3b"),p(e,"href",o=u[8].titleLink),p(e,"target","_blank"),p(e,"class","svelte-5zvk3b")},m(c,d){b(c,e,d),v(e,n),v(n,s),v(n,l),v(n,a),C(r,a,null),i=!0},p(c,d){(!i||d&1)&&t!==(t=c[8].title+"")&&A(s,t),(!i||d&1&&o!==(o=c[8].titleLink))&&p(e,"href",o)},i(c){i||(_(r.$$.fragment,c),i=!0)},o(c){k(r.$$.fragment,c),i=!1},d(c){c&&w(e),T(r)}}}function I(u){let e,n=P(u[8].context)+"",t;return{c(){e=new Y(!1),t=X(),e.a=t},m(s,l){e.m(n,s,l),b(s,t,l)},p(s,l){l&1&&n!==(n=P(s[8].context)+"")&&e.p(n)},d(s){s&&(w(t),e.d())}}}function K(u){let e,n,t,s,l;const a=[ue,ce],r=[];function o(c,d){return c[8].titleLink?0:1}n=o(u),t=r[n]=a[n](u);let i=u[8].context&&I(u);return{c(){e=y("div"),t.c(),s=S(),i&&i.c(),p(e,"class","event pb-2 svelte-5zvk3b")},m(c,d){b(c,e,d),r[n].m(e,null),v(e,s),i&&i.m(e,null),l=!0},p(c,d){let m=n;n=o(c),n===m?r[n].p(c,d):(R(),k(r[m],1,1,()=>{r[m]=null}),D(),t=r[n],t?t.p(c,d):(t=r[n]=a[n](c),t.c()),_(t,1),t.m(e,s)),c[8].context?i?i.p(c,d):(i=I(c),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},i(c){l||(_(t),l=!0)},o(c){k(t),l=!1},d(c){c&&w(e),r[n].d(),i&&i.d()}}}function N(u){let e,n,t,s,l,a=u[5].date+"",r,o,i,c,d=U(u[5].events),m=[];for(let f=0;f<d.length;f+=1)m[f]=K(B(u,d,f));const Q=f=>k(m[f],1,1,()=>{m[f]=null});return{c(){e=y("div"),n=F("svg"),t=F("circle"),s=S(),l=y("div"),r=z(a),o=S();for(let f=0;f<m.length;f+=1)m[f].c();i=S(),p(t,"cx","10"),p(t,"cy","12"),p(t,"r","5"),p(t,"stroke",u[1]),p(t,"stroke-width","2"),p(t,"fill","transparent"),p(n,"class","absolute bg svelte-5zvk3b"),p(n,"height","25"),p(n,"width","20"),p(l,"class","timeline-date font-note text-xs uppercase font-black tracking-wide fmb-0"),M(l,"color",u[2]),p(e,"class","date relative pt-0.5 pl-5 pb-4 svelte-5zvk3b")},m(f,h){b(f,e,h),v(e,n),v(n,t),v(e,s),v(e,l),v(l,r),v(e,o);for(let g=0;g<m.length;g+=1)m[g]&&m[g].m(e,null);v(e,i),c=!0},p(f,h){if((!c||h&2)&&p(t,"stroke",f[1]),(!c||h&1)&&a!==(a=f[5].date+"")&&A(r,a),h&4&&M(l,"color",f[2]),h&1){d=U(f[5].events);let g;for(g=0;g<d.length;g+=1){const V=B(f,d,g);m[g]?(m[g].p(V,h),_(m[g],1)):(m[g]=K(V),m[g].c(),_(m[g],1),m[g].m(e,i))}for(R(),g=d.length;g<m.length;g+=1)Q(g);D()}},i(f){if(!c){for(let h=0;h<d.length;h+=1)_(m[h]);c=!0}},o(f){m=m.filter(Boolean);for(let h=0;h<m.length;h+=1)k(m[h]);c=!1},d(f){f&&w(e),E(m,f)}}}function me(u){let e,n,t=U(u[0]),s=[];for(let a=0;a<t.length;a+=1)s[a]=N(x(u,t,a));const l=a=>k(s[a],1,1,()=>{s[a]=null});return{c(){e=y("div");for(let a=0;a<s.length;a+=1)s[a].c();p(e,"class","timeline pl-2 pr-3.5 svelte-5zvk3b"),M(e,"--symbol-colour",u[1])},m(a,r){b(a,e,r);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null);n=!0},p(a,r){if(r&7){t=U(a[0]);let o;for(o=0;o<t.length;o+=1){const i=x(a,t,o);s[o]?(s[o].p(i,r),_(s[o],1)):(s[o]=N(i),s[o].c(),_(s[o],1),s[o].m(e,null))}for(R(),o=t.length;o<s.length;o+=1)l(o);D()}(!n||r&2)&&M(e,"--symbol-colour",a[1])},i(a){if(!n){for(let r=0;r<t.length;r+=1)_(s[r]);n=!0}},o(a){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)k(s[r]);n=!1},d(a){a&&w(e),E(s,a)}}}function fe(u){let e,n;return e=new ie({props:{width:"normal",id:u[4],class:"simple-timeline-container fmy-6 "+u[3],$$slots:{default:[me]},$$scope:{ctx:u}}}),{c(){$(e.$$.fragment)},m(t,s){C(e,t,s),n=!0},p(t,[s]){const l={};s&16&&(l.id=t[4]),s&8&&(l.class="simple-timeline-container fmy-6 "+t[3]),s&2055&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function de(u,e,n){let{dates:t}=e,{symbolColour:s="var(--theme-colour-brand-rules)"}=e,{dateColour:l="var(--theme-colour-accent, red)"}=e,{class:a=""}=e,{id:r=""}=e;return u.$$set=o=>{"dates"in o&&n(0,t=o.dates),"symbolColour"in o&&n(1,s=o.symbolColour),"dateColour"in o&&n(2,l=o.dateColour),"class"in o&&n(3,a=o.class),"id"in o&&n(4,r=o.id)},[t,s,l,a,r]}class L extends O{constructor(e){super(),j(this,e,de,fe,q,{dates:0,symbolColour:1,dateColour:2,class:3,id:4})}}L.__docgen={version:3,name:"SimpleTimeline.svelte",data:[{keywords:[{name:"required",description:""}],visibility:"public",description:"An array of dates with events.",name:"dates",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Set a colour for the timeline bullet symbols and line.",name:"symbolColour",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"var(--theme-colour-brand-rules)"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Set a colour for the date headings in the timeline.",name:"dateColour",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"var(--theme-colour-accent, red)"},{visibility:"public",description:"Set a class to target with SCSS.",keywords:[{name:"type",description:"{string}"}],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Set an ID to target with SCSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function pe(u){let e,n;const t=[u[2]];let s={};for(let l=0;l<t.length;l+=1)s=Z(s,t[l]);return e=new L({props:s}),{c(){$(e.$$.fragment)},m(l,a){C(e,l,a),n=!0},p(l,a){const r=a&4?W(t,[G(l[2])]):{};e.$set(r)},i(l){n||(_(e.$$.fragment,l),n=!0)},o(l){k(e.$$.fragment,l),n=!1},d(l){T(e,l)}}}function ge(u){let e,n,t,s,l,a;const r=[{title:"Components/SimpleTimeline"},{component:L},u[0]];let o={};for(let i=0;i<r.length;i+=1)o=Z(o,r[i]);return e=new te({props:o}),t=new ne({props:{$$slots:{default:[pe,({args:i})=>({2:i}),({args:i})=>i?4:0]},$$scope:{ctx:u}}}),l=new se({props:{name:"Default",args:{dates:u[1]}}}),{c(){$(e.$$.fragment),n=S(),$(t.$$.fragment),s=S(),$(l.$$.fragment)},m(i,c){C(e,i,c),b(i,n,c),C(t,i,c),b(i,s,c),C(l,i,c),a=!0},p(i,[c]){const d=c&1?W(r,[r[0],r[1],G(i[0])]):{};e.$set(d);const m={};c&12&&(m.$$scope={dirty:c,ctx:i}),t.$set(m)},i(i){a||(_(e.$$.fragment,i),_(t.$$.fragment,i),_(l.$$.fragment,i),a=!0)},o(i){k(e.$$.fragment,i),k(t.$$.fragment,i),k(l.$$.fragment,i),a=!1},d(i){i&&(w(n),w(s)),T(e,i),T(t,i),T(l,i)}}}function he(u){return[{...oe(re),argTypes:{symbolColour:{control:"color"},dateColour:{control:"color"}}},[{date:"May 18",events:[{title:"Mariupol defenders surrender to Russia but their fate is uncertain",titleLink:"https://www.reuters.com/world/europe/ukrainian-troops-evacuate-mariupol-ceding-control-russia-2022-05-17/",context:"More than 250 Ukrainian fighters surrendered to Russian forces at the Azovstal steelworks in Mariupol after weeks of desperate resistance, bringing an end to the most devastating siege of Russia's war in Ukraine and allowing President Vladimir Putin to claim a rare victory in his faltering campaign."}]},{date:"May 10",events:[{title:"U.S. House passes $40 bln bill to bolster Ukraine against Russian invasion",context:"The U.S. House of Representatives approved more than $40 billion more aid for Ukraine on Tuesday, as Congress races to keep military aid flowing and boost the government in Kyiv as it grapples with the Russian invasion."}]},{date:"Mar. 3",events:[{title:`"We are being destroyed," city council of Ukraine's Mariupol says`,context:"Mariupol city council said Russian forces were constantly and deliberately shelling [vital civilian infrastructure](https://google.com) in the southeastern Ukrainian port, leaving it without water, heating or power and preventing bringing supplies or evacuating people."}]},{date:"Feb. 27",events:[{title:"Russians push into Kharkiv",titleLink:"https://www.reuters.com/world/europe/western-allies-expel-key-russian-banks-global-system-ukraine-fights-2022-02-27/"},{title:"Human rights groups and Ukrainian ambassador accuse Russia of using cluster and vacuum bombs"}]},{date:"Feb. 25",events:[{title:"NATO deploys more troops",context:"NATO leaders said on Friday they were deploying more troops to eastern Europe after Russia invaded Ukraine, saying that Moscow had lied about its intentions."},{title:"Invasion continues",context:`Missiles pounded the Ukrainian capital as Russian forces pressed their advance and Ukrainian President Volodymyr Zelenskiy pleaded with the international community to do more, saying sanctions announced so far were not enough.

Russian forces battered Ukrainian cities with artillery and cruise missiles but a defiant Zelenskiy said the capital Kyiv remained in Ukrainian hands.`}]},{date:"Feb. 24",events:[{title:"Russia invades Ukraine"}]}]]}class _e extends O{constructor(e){super(),j(this,e,he,ge,q,{})}}const J=ee(_e,{meta:{title:"Components/SimpleTimeline"},stories:{"tpl:default":{name:"default",template:!0,source:"<SimpleTimeline {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","SimpleTimeline","withComponentDocs"]}),Me=J.meta,Ue=["Default"],Re=J.stories.Default;export{Re as Default,Ue as __namedExportsOrder,Me as default};
//# sourceMappingURL=SimpleTimeline.stories-30aeca45.js.map