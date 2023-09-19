import{S as C,i as D,s as j,C as T,c,y as b,m,b as g,t as p,a as u,f as y,d}from"./index-22a9b7f9.js";import{g as q,a as A}from"./spread-8a54911c.js";import{p as M,M as F,T as V,S as w}from"./collect-stories-4618f393.js";import{B}from"./BodyText-8b28ee70.js";import{w as P}from"./withParams-47e2ab71.js";import"./marked.esm-76161808.js";import"./Block-98bec5bc.js";const E=`The \`BodyText\` creates the main text of your page. You can pass the \`text\` prop a [markdown-formatted](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) string, which will be parsed into paragraphs, headers, lists, blockquotes or whatever else you need.

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
`;function G(h){let o,n;const a=[h[0]];let i={};for(let t=0;t<a.length;t+=1)i=T(i,a[t]);return o=new B({props:i}),{c(){c(o.$$.fragment)},m(t,l){m(o,t,l),n=!0},p(t,l){const s=l&1?q(a,[A(t[0])]):{};o.$set(s)},i(t){n||(p(o.$$.fragment,t),n=!0)},o(t){u(o.$$.fragment,t),n=!1},d(t){d(o,t)}}}function J(h){let o,n,a,i,t,l,s,f;const _=[{title:"Components/BodyText"},{component:B},P(E)];let k={};for(let e=0;e<_.length;e+=1)k=T(k,_[e]);return o=new F({props:k}),a=new V({props:{$$slots:{default:[G,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:h}}}),t=new w({props:{name:"Default",args:{text:`Bacon ipsum **dolor amet** cow tongue tri-tip.
  
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
`}}}),{c(){c(o.$$.fragment),n=b(),c(a.$$.fragment),i=b(),c(t.$$.fragment),l=b(),c(s.$$.fragment)},m(e,r){m(o,e,r),g(e,n,r),m(a,e,r),g(e,i,r),m(t,e,r),g(e,l,r),m(s,e,r),f=!0},p(e,[r]){const S={};o.$set(S);const x={};r&3&&(x.$$scope={dirty:r,ctx:e}),a.$set(x)},i(e){f||(p(o.$$.fragment,e),p(a.$$.fragment,e),p(t.$$.fragment,e),p(s.$$.fragment,e),f=!0)},o(e){u(o.$$.fragment,e),u(a.$$.fragment,e),u(t.$$.fragment,e),u(s.$$.fragment,e),f=!1},d(e){e&&(y(n),y(i),y(l)),d(o,e),d(a,e),d(t,e),d(s,e)}}}class v extends C{constructor(o){super(),D(this,o,null,J,j,{})}}v.__docgen={version:3,name:"BodyText.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const $=M(v,{meta:{title:"Components/BodyText"},stories:{"tpl:default":{name:"default",template:!0,source:"<BodyText {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},TypographySample:{name:"Typography sample",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","BodyText","withComponentDocs"]}),U=$.meta,Y=["Default","TypographySample"],z=$.stories.Default,N=$.stories.TypographySample;export{z as Default,N as TypographySample,Y as __namedExportsOrder,U as default};
//# sourceMappingURL=BodyText.stories-c5b4399a.js.map
