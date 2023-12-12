import{S as x,i as C,s as M,g as p,m as u,t as d,h as _,j as $,k as S,d as f,f as m,V as I,o as w,y,b as D,C as H}from"./index-8e2228d6.js";import{g as j,a as q}from"./spread-8a54911c.js";import{p as B,M as F,T as P,S as O}from"./collect-stories-f2899c5f.js";import{e as N}from"./each-e59479a4.js";import{m as g}from"./marked.esm-76161808.js";import{B as V}from"./Block-9ace8085.js";import{w as z}from"./withParams-47e2ab71.js";const G=`End notes includes notes to the main article — usually things like sources, clarifiying notes and minor corrections at the end of a story.

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
`;function k(l,t,n){const e=l.slice();return e[1]=t[n],e}function T(l){let t,n=N(l[0]),e=[];for(let s=0;s<n.length;s+=1)e[s]=b(k(l,n,s));return{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=S()},m(s,r){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(s,r);f(s,t,r)},p(s,r){if(r&1){n=N(s[0]);let o;for(o=0;o<n.length;o+=1){const i=k(s,n,o);e[o]?e[o].p(i,r):(e[o]=b(i),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=n.length}},d(s){s&&m(t),I(e,s)}}}function b(l){let t,n=g.parse(l[1].title)+"",e,s,r=g.parse(l[1].text)+"";return{c(){t=w("div"),e=y(),s=w("div"),D(t,"class","note-title svelte-as9r96"),D(s,"class","note-content svelte-as9r96")},m(o,i){f(o,t,i),t.innerHTML=n,f(o,e,i),f(o,s,i),s.innerHTML=r},p(o,i){i&1&&n!==(n=g.parse(o[1].title)+"")&&(t.innerHTML=n),i&1&&r!==(r=g.parse(o[1].text)+"")&&(s.innerHTML=r)},d(o){o&&(m(t),m(e),m(s))}}}function J(l){let t,n=l[0]&&T(l);return{c(){n&&n.c(),t=S()},m(e,s){n&&n.m(e,s),f(e,t,s)},p(e,s){e[0]?n?n.p(e,s):(n=T(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){e&&m(t),n&&n.d(e)}}}function K(l){let t,n;return t=new V({props:{class:"notes fmt-6 fmb-8",$$slots:{default:[J]},$$scope:{ctx:l}}}),{c(){p(t.$$.fragment)},m(e,s){u(t,e,s),n=!0},p(e,[s]){const r={};s&17&&(r.$$scope={dirty:s,ctx:e}),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function Q(l,t,n){let{notes:e=[]}=t;return l.$$set=s=>{"notes"in s&&n(0,e=s.notes)},[e]}class v extends x{constructor(t){super(),C(this,t,Q,K,M,{notes:0})}}v.__docgen={version:3,name:"EndNotes.svelte",data:[{keywords:[{name:"required",description:""}],visibility:"public",description:"An array of endnote items.",name:"notes",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const R=l=>l.map(t=>({title:t.Title,text:t.Text}));function U(l){let t,n;const e=[l[1]];let s={};for(let r=0;r<e.length;r+=1)s=H(s,e[r]);return t=new v({props:s}),{c(){p(t.$$.fragment)},m(r,o){u(t,r,o),n=!0},p(r,o){const i=o&2?j(e,[q(r[1])]):{};t.$set(i)},i(r){n||(d(t.$$.fragment,r),n=!0)},o(r){_(t.$$.fragment,r),n=!1},d(r){$(t,r)}}}function W(l){let t,n,e,s,r,o;const i=[{title:"Components/EndNotes"},{component:v},z(G)];let h={};for(let a=0;a<i.length;a+=1)h=H(h,i[a]);return t=new F({props:h}),e=new P({props:{$$slots:{default:[U,({args:a})=>({1:a}),({args:a})=>a?2:0]},$$scope:{ctx:l}}}),r=new O({props:{name:"Default",args:{notes:R(l[0])}}}),{c(){p(t.$$.fragment),n=y(),p(e.$$.fragment),s=y(),p(r.$$.fragment)},m(a,c){u(t,a,c),f(a,n,c),u(e,a,c),f(a,s,c),u(r,a,c),o=!0},p(a,[c]){const A={};t.$set(A);const E={};c&6&&(E.$$scope={dirty:c,ctx:a}),e.$set(E)},i(a){o||(d(t.$$.fragment,a),d(e.$$.fragment,a),d(r.$$.fragment,a),o=!0)},o(a){_(t.$$.fragment,a),_(e.$$.fragment,a),_(r.$$.fragment,a),o=!1},d(a){a&&(m(n),m(s)),$(t,a),$(e,a),$(r,a)}}}function X(l){return[[{Title:"Note",Text:"Data is current as of today."},{Title:"Sources",Text:"Data, Inc."},{Title:"Edited by",Text:'<a href="https://www.reuters.com/graphics/">Editor</a>, Copyeditor'}]]}class Y extends x{constructor(t){super(),C(this,t,X,W,M,{})}}const L=B(Y,{meta:{title:"Components/EndNotes"},stories:{"tpl:default":{name:"default",template:!0,source:"<EndNotes {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","EndNotes","getEndNotesPropsFromDoc","withComponentDocs"]}),ae=L.meta,le=["Default"],ie=L.stories.Default;export{ie as Default,le as __namedExportsOrder,ae as default};
//# sourceMappingURL=EndNotes.stories-dd32cbf1.js.map
