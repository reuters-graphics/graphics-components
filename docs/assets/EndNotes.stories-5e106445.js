import{S as C,i as S,s as M,g as p,m as d,t as f,h as u,j as $,r as A,d as _,v as B,w as I,f as g,V as F,l as E,y as w,b as v,e as P,C as j}from"./index-99a30af8.js";import{g as O,a as V}from"./spread-8a54911c.js";import{p as z,M as G,T as H,S as J}from"./collect-stories-1e0d20c7.js";import{e as D}from"./each-e59479a4.js";import{B as K}from"./Block-a09d61d3.js";import{M as N}from"./Markdown-2a6fc77f.js";import{w as L}from"./withParams-47e2ab71.js";const Q=`End notes includes notes to the main article — usually things like sources, clarifiying notes and minor corrections at the end of a story.

\`\`\`svelte
<script>
  import { EndNotes } from '@reuters-graphics/graphics-components';

  const notes = [
    {
      title: 'Note',
      text: 'Data is current as of today.',
    },
    {
      title: 'Sources',
      text: 'Data, Inc.',
    },
    {
      title: 'Edited by',
      text: '<a href="https://www.reuters.com/graphics/">Editor</a>, Copyeditor',
    },
  ];
<\/script>

<EndNotes notes="{notes}" />
\`\`\`
`;function b(i,n,a){const e=i.slice();return e[1]=n[a],e}function T(i){let n,a,e=D(i[0]),t=[];for(let l=0;l<e.length;l+=1)t[l]=x(b(i,e,l));const s=l=>u(t[l],1,1,()=>{t[l]=null});return{c(){for(let l=0;l<t.length;l+=1)t[l].c();n=A()},m(l,c){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(l,c);_(l,n,c),a=!0},p(l,c){if(c&1){e=D(l[0]);let o;for(o=0;o<e.length;o+=1){const r=b(l,e,o);t[o]?(t[o].p(r,c),f(t[o],1)):(t[o]=x(r),t[o].c(),f(t[o],1),t[o].m(n.parentNode,n))}for(B(),o=e.length;o<t.length;o+=1)s(o);I()}},i(l){if(!a){for(let c=0;c<e.length;c+=1)f(t[c]);a=!0}},o(l){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)u(t[c]);a=!1},d(l){l&&g(n),F(t,l)}}}function x(i){let n,a,e,t,s,l,c;return a=new N({props:{source:i[1].title}}),s=new N({props:{source:i[1].text}}),{c(){n=E("div"),p(a.$$.fragment),e=w(),t=E("div"),p(s.$$.fragment),l=w(),v(n,"class","note-title svelte-as9r96"),v(t,"class","note-content svelte-as9r96")},m(o,r){_(o,n,r),d(a,n,null),_(o,e,r),_(o,t,r),d(s,t,null),P(t,l),c=!0},p(o,r){const m={};r&1&&(m.source=o[1].title),a.$set(m);const h={};r&1&&(h.source=o[1].text),s.$set(h)},i(o){c||(f(a.$$.fragment,o),f(s.$$.fragment,o),c=!0)},o(o){u(a.$$.fragment,o),u(s.$$.fragment,o),c=!1},d(o){o&&(g(n),g(e),g(t)),$(a),$(s)}}}function R(i){let n,a,e=i[0]&&T(i);return{c(){e&&e.c(),n=A()},m(t,s){e&&e.m(t,s),_(t,n,s),a=!0},p(t,s){t[0]?e?(e.p(t,s),s&1&&f(e,1)):(e=T(t),e.c(),f(e,1),e.m(n.parentNode,n)):e&&(B(),u(e,1,1,()=>{e=null}),I())},i(t){a||(f(e),a=!0)},o(t){u(e),a=!1},d(t){t&&g(n),e&&e.d(t)}}}function U(i){let n,a;return n=new K({props:{class:"notes fmt-6 fmb-8",$$slots:{default:[R]},$$scope:{ctx:i}}}),{c(){p(n.$$.fragment)},m(e,t){d(n,e,t),a=!0},p(e,[t]){const s={};t&17&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){a||(f(n.$$.fragment,e),a=!0)},o(e){u(n.$$.fragment,e),a=!1},d(e){$(n,e)}}}function W(i,n,a){let{notes:e=[]}=n;return i.$$set=t=>{"notes"in t&&a(0,e=t.notes)},[e]}class y extends C{constructor(n){super(),S(this,n,W,U,M,{notes:0})}}y.__docgen={version:3,name:"EndNotes.svelte",data:[{keywords:[{name:"required",description:""}],visibility:"public",description:"An array of endnote items.",name:"notes",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const X=i=>i.map(n=>({title:n.Title,text:n.Text}));function Y(i){let n,a;const e=[i[1]];let t={};for(let s=0;s<e.length;s+=1)t=j(t,e[s]);return n=new y({props:t}),{c(){p(n.$$.fragment)},m(s,l){d(n,s,l),a=!0},p(s,l){const c=l&2?O(e,[V(s[1])]):{};n.$set(c)},i(s){a||(f(n.$$.fragment,s),a=!0)},o(s){u(n.$$.fragment,s),a=!1},d(s){$(n,s)}}}function Z(i){let n,a,e,t,s,l;const c=[{title:"Components/EndNotes"},{component:y},L(Q)];let o={};for(let r=0;r<c.length;r+=1)o=j(o,c[r]);return n=new G({props:o}),e=new H({props:{$$slots:{default:[Y,({args:r})=>({1:r}),({args:r})=>r?2:0]},$$scope:{ctx:i}}}),s=new J({props:{name:"Default",args:{notes:X(i[0])}}}),{c(){p(n.$$.fragment),a=w(),p(e.$$.fragment),t=w(),p(s.$$.fragment)},m(r,m){d(n,r,m),_(r,a,m),d(e,r,m),_(r,t,m),d(s,r,m),l=!0},p(r,[m]){const h={};n.$set(h);const k={};m&6&&(k.$$scope={dirty:m,ctx:r}),e.$set(k)},i(r){l||(f(n.$$.fragment,r),f(e.$$.fragment,r),f(s.$$.fragment,r),l=!0)},o(r){u(n.$$.fragment,r),u(e.$$.fragment,r),u(s.$$.fragment,r),l=!1},d(r){r&&(g(a),g(t)),$(n,r),$(e,r),$(s,r)}}}function ee(i){return[[{Title:"Note",Text:"Data is current as of today."},{Title:"Sources",Text:"Data, Inc."},{Title:"Edited by",Text:'<a href="https://www.reuters.com/graphics/">Editor</a>, Copyeditor'}]]}class te extends C{constructor(n){super(),S(this,n,ee,Z,M,{})}}const q=z(te,{meta:{title:"Components/EndNotes"},stories:{"tpl:default":{name:"default",template:!0,source:"<EndNotes {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","EndNotes","getEndNotesPropsFromDoc","withComponentDocs"]}),ce=q.meta,fe=["Default"],me=q.stories.Default;export{me as Default,fe as __namedExportsOrder,ce as default};
//# sourceMappingURL=EndNotes.stories-5e106445.js.map
