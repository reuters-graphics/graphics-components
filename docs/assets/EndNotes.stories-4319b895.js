import{S as T,i as C,s as M,g as p,m as d,t as u,h as _,j as $,k as S,d as f,f as m,K as L,o as k,y,b as N,C as z}from"./index-df681c7c.js";import{g as A,a as j}from"./spread-8a54911c.js";import{p as q,M as B,T as F,S as K}from"./collect-stories-a6a786e2.js";import{e as b}from"./each-e59479a4.js";import{m as g}from"./marked.esm-76161808.js";import{B as O}from"./Block-f95db830.js";import{w as G}from"./withParams-47e2ab71.js";const J=`Note text includes notes to the main article — usually things like sources, clarifiying notes and minor corrections at the end of a story.

Note text can be fed a markdown string, but text styling is intentionally restricted in this component. For example, all heading tags are forced to a single font size and weight.

\`\`\`svelte
<script>
  import { NoteText } from '@reuters-graphics/graphics-components';

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

<NoteText notes="{notes}" />
\`\`\`
`;function x(i,t,s){const e=i.slice();return e[1]=t[s],e}function D(i){let t,s=b(i[0]),e=[];for(let n=0;n<s.length;n+=1)e[n]=E(x(i,s,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=S()},m(n,r){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,r);f(n,t,r)},p(n,r){if(r&1){s=b(n[0]);let o;for(o=0;o<s.length;o+=1){const l=x(n,s,o);e[o]?e[o].p(l,r):(e[o]=E(l),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=s.length}},d(n){n&&m(t),L(e,n)}}}function E(i){let t,s=g.parse(i[1].title)+"",e,n,r=g.parse(i[1].text)+"";return{c(){t=k("div"),e=y(),n=k("div"),N(t,"class","note-title svelte-zsnzox"),N(n,"class","note-content svelte-zsnzox")},m(o,l){f(o,t,l),t.innerHTML=s,f(o,e,l),f(o,n,l),n.innerHTML=r},p(o,l){l&1&&s!==(s=g.parse(o[1].title)+"")&&(t.innerHTML=s),l&1&&r!==(r=g.parse(o[1].text)+"")&&(n.innerHTML=r)},d(o){o&&(m(t),m(e),m(n))}}}function P(i){let t,s=i[0]&&D(i);return{c(){s&&s.c(),t=S()},m(e,n){s&&s.m(e,n),f(e,t,n)},p(e,n){e[0]?s?s.p(e,n):(s=D(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},d(e){e&&m(t),s&&s.d(e)}}}function Q(i){let t,s;return t=new O({props:{class:"notes fmt-6 fmb-8",$$slots:{default:[P]},$$scope:{ctx:i}}}),{c(){p(t.$$.fragment)},m(e,n){d(t,e,n),s=!0},p(e,[n]){const r={};n&17&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(u(t.$$.fragment,e),s=!0)},o(e){_(t.$$.fragment,e),s=!1},d(e){$(t,e)}}}function R(i,t,s){let{notes:e=[]}=t;return i.$$set=n=>{"notes"in n&&s(0,e=n.notes)},[e]}class w extends T{constructor(t){super(),C(this,t,R,Q,M,{notes:0})}}w.__docgen={version:3,name:"EndNotes.svelte",data:[{keywords:[{name:"required",description:""}],visibility:"public",description:"An array of endnote items.",name:"notes",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function U(i){let t,s;const e=[i[1]];let n={};for(let r=0;r<e.length;r+=1)n=z(n,e[r]);return t=new w({props:n}),{c(){p(t.$$.fragment)},m(r,o){d(t,r,o),s=!0},p(r,o){const l=o&2?A(e,[j(r[1])]):{};t.$set(l)},i(r){s||(u(t.$$.fragment,r),s=!0)},o(r){_(t.$$.fragment,r),s=!1},d(r){$(t,r)}}}function V(i){let t,s,e,n,r,o;const l=[{title:"Components/EndNotes"},{component:w},G(J)];let h={};for(let a=0;a<l.length;a+=1)h=z(h,l[a]);return t=new B({props:h}),e=new F({props:{$$slots:{default:[U,({args:a})=>({1:a}),({args:a})=>a?2:0]},$$scope:{ctx:i}}}),r=new K({props:{name:"Default",args:{notes:i[0]}}}),{c(){p(t.$$.fragment),s=y(),p(e.$$.fragment),n=y(),p(r.$$.fragment)},m(a,c){d(t,a,c),f(a,s,c),d(e,a,c),f(a,n,c),d(r,a,c),o=!0},p(a,[c]){const H={};t.$set(H);const v={};c&6&&(v.$$scope={dirty:c,ctx:a}),e.$set(v)},i(a){o||(u(t.$$.fragment,a),u(e.$$.fragment,a),u(r.$$.fragment,a),o=!0)},o(a){_(t.$$.fragment,a),_(e.$$.fragment,a),_(r.$$.fragment,a),o=!1},d(a){a&&(m(s),m(n)),$(t,a),$(e,a),$(r,a)}}}function W(i){return[[{title:"Note",text:"Data is current as of today."},{title:"Sources",text:"Data, Inc."},{title:"Edited by",text:'<a href="https://www.reuters.com/graphics/">Editor</a>, Copyeditor'}]]}class X extends T{constructor(t){super(),C(this,t,W,V,M,{})}}const I=q(X,{meta:{title:"Components/EndNotes"},stories:{"tpl:default":{storyId:"components-endnotes--default",name:"default",template:!0,source:"<EndNotes {...args} />",hasArgs:!0},Default:{storyId:"components-endnotes--default",name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","EndNotes","withComponentDocs"]}),re=I.meta,ae=["Default"],ie=I.stories.Default;export{ie as Default,ae as __namedExportsOrder,re as default};
//# sourceMappingURL=EndNotes.stories-4319b895.js.map
