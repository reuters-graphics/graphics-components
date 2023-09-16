import{S as C,i as D,s as j,C as T,c,p as k,m as p,b as g,t as m,a as u,f as y,d}from"./index-2c1648fc.js";import{g as q,a as A}from"./spread-8a54911c.js";import{p as M,M as F,T as V,S as w}from"./collect-stories-640c7888.js";import{B}from"./BodyText-80591e5d.js";import{w as I}from"./withParams-47e2ab71.js";import"./marked.esm-76161808.js";import"./Block-d69850f9.js";const P=`The \`BodyText\` creates the main text of your page. You can pass the \`text\` prop a [markdown-formatted](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) string, which will be parsed into paragraphs, headers, lists, blockquotes or whatever else you need.

Use it like this:

\`\`\`svelte
<script>
  import { BodyText } from '@reuters-graphics/graphics-components';

  const markdownText = \`Bacon ipsum **dolor amet** cow tongue tri-tip.
  
  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.
  
  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.\`;
<\/script>

<BodyText text="{markdownText}" />
\`\`\`

... or more commonly, you'll use it with a Google doc in the Graphics Kit like this:

\`\`\`svelte
<script>
  import { BodyText } from '@reuters-graphics/graphics-components';

  import content from '$locales/en/content.json';
<\/script>

{#each content.blocks as block}
  {#if block.Type === 'text'}
    <BodyText text="{block.Text}" />
  {/if}
{/each}
\`\`\`
`;function E(h){let o,n;const a=[h[0]];let l={};for(let t=0;t<a.length;t+=1)l=T(l,a[t]);return o=new B({props:l}),{c(){c(o.$$.fragment)},m(t,i){p(o,t,i),n=!0},p(t,i){const s=i&1?q(a,[A(t[0])]):{};o.$set(s)},i(t){n||(m(o.$$.fragment,t),n=!0)},o(t){u(o.$$.fragment,t),n=!1},d(t){d(o,t)}}}function G(h){let o,n,a,l,t,i,s,f;const x=[{title:"Components/BodyText"},{component:B},I(P)];let b={};for(let e=0;e<x.length;e+=1)b=T(b,x[e]);return o=new F({props:b}),a=new V({props:{$$slots:{default:[E,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:h}}}),t=new w({props:{name:"Default",args:{text:`Bacon ipsum **dolor amet** cow tongue tri-tip.
  
  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.

  - Steak
  - [Pork chop](https://www.google.com)
  - Fillet
  
  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.`}}}),s=new w({props:{name:"Typography sample",args:{class:"body-text-typography-example-story",text:`<span class='drop-cap'>R</span>eprehenderit hamburger pork bresaola, dolore chuck sirloin landjaeger ham hock [tempor meatball](https://baconipsum.com/) alcatra nostrud pork belly. Culpa pork belly doner ea jowl, elit deserunt leberkas cow shoulder ham hock dolore.

## Biltong turducken ground round kevin

Pig est irure buffalo ullamco. Sunt beef ribs tri-tip, chislic officia sint dolor. Spare ribs drumstick ground round, irure duis cillum id chicken est ipsum ut. 

Qui cupidatat chislic buffalo consequat deserunt. 

Andouille sint shankle quis velit nostrud chislic meatloaf culpa labore corned beef chuck spare ribs. Filet mignon eu shankle in, meatloaf ut dolor ham hock ut.

### Venison shoulder ham hock ham leberkas flank beef ribs fatback, jerky meatball ham hock
  
Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig. Veniam laboris sunt chislic. Aute doner porchetta nulla, tongue venison ad ex in do.

- Steak
    - Capicola 
- [Pork chop](https://www.google.com)
- Fillet landjaeger commodo

Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.

Minim id buffalo dolore ad, **boudin chicken laboris** excepteur qui eiusmod. 

#### Jerky prosciutto burgdoggen

Sirloin beef flank labore cillum venison pariatur cow nulla ut irure in consequat proident velit. Jerky meatball pig nulla irure laboris fatback et rump ut dolore.

Biltong enim consequat pork chop, flank ea.

> Officia ball tip sed tenderloin dolore. Est magna enim, turkey in turducken flank jowl ad lorem buffalo ground
> > Ronald McDonald

Flank bacon sint dolore porchetta strip steak. Tail capicola flank nostrud meatball consequat pastrami lorem cupidatat chuck drumstick ham hock bresaola sint.

##### Venison pork chop

Alcatra bacon mollit boudin. Capicola ut tongue biltong, cow cillum pariatur sausage.

1. Minim ribeye
2. Prosciutto laborum
3. Salami doner irure

Consectetur ribeye consequat pork capicola. T-bone ad laborum beef ribs picanha.

###### Alcatra bacon mollit boudin

Tempor tail doner chicken incididunt beef ribs. Ad ullamco in cupim venison. Leberkas rump ullamco adipisicing, laboris excepteur voluptate.

Ham hock id porchetta elit. Sint spare ribs aute buffalo.

<p class='body-correction'>Correction: Lorem ispsum dolor sit amet ameno dorime.</p>
`}}}),{c(){c(o.$$.fragment),n=k(),c(a.$$.fragment),l=k(),c(t.$$.fragment),i=k(),c(s.$$.fragment)},m(e,r){p(o,e,r),g(e,n,r),p(a,e,r),g(e,l,r),p(t,e,r),g(e,i,r),p(s,e,r),f=!0},p(e,[r]){const S={};o.$set(S);const _={};r&3&&(_.$$scope={dirty:r,ctx:e}),a.$set(_)},i(e){f||(m(o.$$.fragment,e),m(a.$$.fragment,e),m(t.$$.fragment,e),m(s.$$.fragment,e),f=!0)},o(e){u(o.$$.fragment,e),u(a.$$.fragment,e),u(t.$$.fragment,e),u(s.$$.fragment,e),f=!1},d(e){e&&(y(n),y(l),y(i)),d(o,e),d(a,e),d(t,e),d(s,e)}}}class v extends C{constructor(o){super(),D(this,o,null,G,j,{})}}v.__docgen={version:3,name:"BodyText.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const $=M(v,{meta:{title:"Components/BodyText"},stories:{"tpl:default":{storyId:"components-bodytext--default",name:"default",template:!0,source:"<BodyText {...args} />",hasArgs:!0},Default:{storyId:"components-bodytext--default",name:"Default",template:!1,source:"",hasArgs:!1},TypographySample:{storyId:"components-bodytext--typography-sample",name:"Typography sample",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","BodyText","withComponentDocs"]}),U=$.meta,Y=["Default","TypographySample"],z=$.stories.Default,N=$.stories.TypographySample;export{z as Default,N as TypographySample,Y as __namedExportsOrder,U as default};
//# sourceMappingURL=BodyText.stories-1c39ca41.js.map
