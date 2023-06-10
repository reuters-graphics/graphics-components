import{S as N,i as b,s as v,j as p,m as c,b as f,t as u,n as d,e as S,a as $,d as _,W as F,p as C,D as y,k as I,l as M}from"./index-25af778d.js";import{p as q,M as B,T as E,S as J}from"./collect-stories-cce06d4a.js";import{m as k}from"./marked.esm-76161808.js";import{B as R}from"./Block-9c89ee1a.js";import{w}from"./withParams-90715500.js";const T=`Note text includes notes to the main article — usually things like sources, clarifiying notes and minor corrections at the end of a story.

Note text can be fed a markdown string, but text styling is intentionally restricted in this component. For example, all heading tags are forced to a single font size and weight.

\`\`\`html
<script>
  import { NoteText } from '@reuters-graphics/graphics-components';

  const markdownText = \`### Source

Reuters research.

### Credits

People.\`;
<\/script>

<NoteText text="{markdownText}" />
\`\`\`
`;function D(a){let e,n=k.parse(a[0])+"",t;return{c(){e=new F(!1),t=S(),e.a=t},m(o,r){e.m(n,o,r),$(o,t,r)},p(o,r){r&1&&n!==(n=k.parse(o[0])+"")&&e.p(n)},d(o){o&&_(t),o&&e.d()}}}function z(a){let e,n=a[0]&&D(a);return{c(){n&&n.c(),e=S()},m(t,o){n&&n.m(t,o),$(t,e,o)},p(t,o){t[0]?n?n.p(t,o):(n=D(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&_(e)}}}function H(a){let e,n;return e=new R({props:{cls:"notes mb-6",$$slots:{default:[z]},$$scope:{ctx:a}}}),{c(){p(e.$$.fragment)},m(t,o){c(e,t,o),n=!0},p(t,[o]){const r={};o&3&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function O(a,e,n){let{text:t}=e;return a.$$set=o=>{"text"in o&&n(0,t=o.text)},[t]}class g extends N{constructor(e){super(),b(this,e,O,H,v,{text:0})}}g.__docgen={version:3,name:"NoteText.svelte",data:[{keywords:[{name:"type",description:"{string}"},{name:"required",description:""}],visibility:"public",description:"A markdown text string.",name:"text",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function P(a){let e,n;const t=[a[0]];let o={};for(let r=0;r<t.length;r+=1)o=C(o,t[r]);return e=new g({props:o}),{c(){p(e.$$.fragment)},m(r,i){c(e,r,i),n=!0},p(r,i){const m=i&1?I(t,[M(r[0])]):{};e.$set(m)},i(r){n||(f(e.$$.fragment,r),n=!0)},o(r){u(e.$$.fragment,r),n=!1},d(r){d(e,r)}}}function W(a){let e,n,t,o,r,i;const m=[{title:"Components/NoteText"},{component:g},w(T)];let x={};for(let s=0;s<m.length;s+=1)x=C(x,m[s]);return e=new B({props:x}),t=new E({props:{$$slots:{default:[P,({args:s})=>({0:s}),({args:s})=>s?1:0]},$$scope:{ctx:a}}}),r=new J({props:{name:"Default",args:{text:`## Source

[European Forest Fire Information System](https://effis.jrc.ec.europa.eu/); Reuters research

#### Credits

Jane Doe & John Doe`}}}),{c(){p(e.$$.fragment),n=y(),p(t.$$.fragment),o=y(),p(r.$$.fragment)},m(s,l){c(e,s,l),$(s,n,l),c(t,s,l),$(s,o,l),c(r,s,l),i=!0},p(s,[l]){const A=l&0?I(m,[m[0],l&0&&{component:g},l&0&&M(w(T))]):{};e.$set(A);const h={};l&3&&(h.$$scope={dirty:l,ctx:s}),t.$set(h)},i(s){i||(f(e.$$.fragment,s),f(t.$$.fragment,s),f(r.$$.fragment,s),i=!0)},o(s){u(e.$$.fragment,s),u(t.$$.fragment,s),u(r.$$.fragment,s),i=!1},d(s){d(e,s),s&&_(n),d(t,s),s&&_(o),d(r,s)}}}class G extends N{constructor(e){super(),b(this,e,null,W,v,{})}}const j=q(G,{meta:{title:"Components/NoteText"},stories:{"tpl:default":{storyId:"components-notetext--default",name:"default",template:!0,source:"<NoteText {...args} />",hasArgs:!0},Default:{storyId:"components-notetext--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","NoteText","withComponentDocs"]}),X=j.meta,Y=["Default"],Z=j.stories.Default;export{Z as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=NoteText.stories-0f84acc8.js.map
