import{S as C,i as S,s as j,p as w,j as c,D as k,m as i,a as x,k as T,l as B,b as u,t as d,n as f,d as y}from"./index-25af778d.js";import{p as M,M as F,T as I,S as q}from"./collect-stories-cce06d4a.js";import{B as g}from"./BodyText-a712211f.js";import{w as _}from"./withParams-90715500.js";import"./marked.esm-76161808.js";import"./Block-9c89ee1a.js";const b=`The \`BodyText\` creates the main text of your page. You can pass the \`text\` prop a [markdown-formatted](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) string, which will be parsed into paragraphs, headers, lists, blockquotes or whatever else you need.

Use it like this:

\`\`\`html
<script>
  import { BodyText } from '@reuters-graphics/graphics-components';

  const markdownText = \`Bacon ipsum **dolor amet** cow tongue tri-tip.
  
  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.
  
  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.\`;
<\/script>

<BodyText text="{markdownText}" />
\`\`\`

... or more commonly, you'll use it with a Google doc in the Graphics Kit like this:

\`\`\`html
<script>
  import { BodyText } from '@reuters-graphics/graphics-components';

  import content from '$locales/en/content.json';
<\/script>

{#each content.blocks as block} {#if block.Type === 'text'}
<BodyText text="{block.Text}" />
{/if} {/each}
\`\`\`
`;function A(l){let o,a;const n=[l[0]];let m={};for(let e=0;e<n.length;e+=1)m=w(m,n[e]);return o=new g({props:m}),{c(){c(o.$$.fragment)},m(e,r){i(o,e,r),a=!0},p(e,r){const p=r&1?T(n,[B(e[0])]):{};o.$set(p)},i(e){a||(u(o.$$.fragment,e),a=!0)},o(e){d(o.$$.fragment,e),a=!1},d(e){f(o,e)}}}function G(l){let o,a,n,m,e,r;const p=[{title:"Components/BodyText"},{component:g},_(b)];let h={};for(let t=0;t<p.length;t+=1)h=w(h,p[t]);return o=new F({props:h}),n=new I({props:{$$slots:{default:[A,({args:t})=>({0:t}),({args:t})=>t?1:0]},$$scope:{ctx:l}}}),e=new q({props:{name:"Default",args:{text:`Bacon ipsum **dolor amet** cow tongue tri-tip.
  
  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.

  - Steak
  - [Pork chop](https://www.google.com)
  - Fillet
  
  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.`}}}),{c(){c(o.$$.fragment),a=k(),c(n.$$.fragment),m=k(),c(e.$$.fragment)},m(t,s){i(o,t,s),x(t,a,s),i(n,t,s),x(t,m,s),i(e,t,s),r=!0},p(t,[s]){const v=s&0?T(p,[p[0],s&0&&{component:g},s&0&&B(_(b))]):{};o.$set(v);const $={};s&3&&($.$$scope={dirty:s,ctx:t}),n.$set($)},i(t){r||(u(o.$$.fragment,t),u(n.$$.fragment,t),u(e.$$.fragment,t),r=!0)},o(t){d(o.$$.fragment,t),d(n.$$.fragment,t),d(e.$$.fragment,t),r=!1},d(t){f(o,t),t&&y(a),f(n,t),t&&y(m),f(e,t)}}}class V extends C{constructor(o){super(),S(this,o,null,G,j,{})}}const D=M(V,{meta:{title:"Components/BodyText"},stories:{"tpl:default":{storyId:"components-bodytext--default",name:"default",template:!0,source:"<BodyText {...args} />",hasArgs:!0},Default:{storyId:"components-bodytext--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","BodyText","withComponentDocs"]}),z=D.meta,H=["Default"],J=D.stories.Default;export{J as Default,H as __namedExportsOrder,z as default};
//# sourceMappingURL=BodyText.stories-bcc1a2cb.js.map
