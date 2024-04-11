import{S,i as T,s as j,C as _,g as c,y as h,m,d as w,t as d,h as u,f as k,j as f}from"./index-99a30af8.js";import{g as y,a as v}from"./spread-8a54911c.js";import{p as C,M as B,T as x,S as L}from"./collect-stories-1e0d20c7.js";import{M}from"./Markdown-2a6fc77f.js";import{w as A}from"./withParams-47e2ab71.js";import{B as q}from"./Block-a09d61d3.js";const H=`The Markdown component renders markdown into HTML. That's it!

---

\`\`\`svelte
<script>
  import { Markdown } from '@reuters-graphics/graphics-components';
<\/script>

<Markdown source="{'My markdown **string**!'}" />
\`\`\`

... well, almost.

Owing to a weird quirk of Svelte's [\`@html\`](https://svelte.dev/docs/special-tags#html) directive (see [this issue](https://github.com/reuters-graphics/graphics-components/issues/148)), if you want your resulting HTML to be dynamic — e.g., update after a SvelteKit app [hydrates](https://kit.svelte.dev/docs/glossary#hydration) — then you may need to set the included \`$staticMarkdown\` store to \`false\` in the browser.

For example, if you're refreshing some data with markdown strings in a SvelteKit project using a [load function](https://kit.svelte.dev/docs/load), set the store to reflect the [\`building\`](https://kit.svelte.dev/docs/modules#$app-environment-building) variable, which will correctly [prerender](https://kit.svelte.dev/docs/glossary#prerendering) your markdown content AND update it after fresh data is fetched in the browser.

\`\`\`javascript
// +layout.js
import { staticMarkdown } from '@reuters-graphics/graphics-components';
import { building } from '$app/environment';

/** @type {import('./$types').LayoutLoad} */
export const load = async () => {
  // Set the staticMarkdown store with the value of building.
  staticMarkdown.set(building);

  // Now this content will correctly refresh when a reader loads your page.
  const resp = await fetch(
    'https://graphics.thomsonreuters.com/data/my-page-content.json'
  );
  const content = await resp.json();

  return { content };
};
\`\`\`

If you're not updating your markdown content as above, you can safely leave the \`$staticMarkdown\` store alone and your page will do the right thing.
`;function I(i){let t,o;const s=[i[1]];let r={};for(let n=0;n<s.length;n+=1)r=_(r,s[n]);return t=new M({props:r}),{c(){c(t.$$.fragment)},m(n,p){m(t,n,p),o=!0},p(n,p){const l=p&2?y(s,[v(n[1])]):{};t.$set(l)},i(n){o||(d(t.$$.fragment,n),o=!0)},o(n){u(t.$$.fragment,n),o=!1},d(n){f(t,n)}}}function K(i){let t,o;return t=new q({props:{$$slots:{default:[I]},$$scope:{ctx:i}}}),{c(){c(t.$$.fragment)},m(s,r){m(t,s,r),o=!0},p(s,r){const n={};r&6&&(n.$$scope={dirty:r,ctx:s}),t.$set(n)},i(s){o||(d(t.$$.fragment,s),o=!0)},o(s){u(t.$$.fragment,s),o=!1},d(s){f(t,s)}}}function N(i){let t,o,s,r,n,p;const l=[{title:"Components/Markdown"},{component:M},i[0]];let g={};for(let e=0;e<l.length;e+=1)g=_(g,l[e]);return t=new B({props:g}),s=new x({props:{$$slots:{default:[K,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:i}}}),n=new L({props:{name:"Default",args:{source:"This is *some* text in **markdown**."}}}),{c(){c(t.$$.fragment),o=h(),c(s.$$.fragment),r=h(),c(n.$$.fragment)},m(e,a){m(t,e,a),w(e,o,a),m(s,e,a),w(e,r,a),m(n,e,a),p=!0},p(e,[a]){const D=a&1?y(l,[l[0],l[1],v(e[0])]):{};t.$set(D);const $={};a&6&&($.$$scope={dirty:a,ctx:e}),s.$set($)},i(e){p||(d(t.$$.fragment,e),d(s.$$.fragment,e),d(n.$$.fragment,e),p=!0)},o(e){u(t.$$.fragment,e),u(s.$$.fragment,e),u(n.$$.fragment,e),p=!1},d(e){e&&(k(o),k(r)),f(t,e),f(s,e),f(n,e)}}}function O(i){return[{...A(H)}]}class P extends S{constructor(t){super(),T(this,t,O,N,j,{})}}const b=C(P,{meta:{title:"Components/Markdown"},stories:{"tpl:default":{name:"default",template:!0,source:`<Block>
  <Markdown {...args} />
</Block>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Markdown","withComponentDocs","Block"]}),R=b.meta,U=["Default"],V=b.stories.Default;export{V as Default,U as __namedExportsOrder,R as default};
//# sourceMappingURL=Markdown.stories-97ec3159.js.map
