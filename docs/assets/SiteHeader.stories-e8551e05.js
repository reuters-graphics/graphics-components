import{S as G,i as N,s as O,C as y,g as l,y as T,m as c,d as _,t as f,h as d,f as g,j as u,o as I,b as q}from"./index-df681c7c.js";import{g as M,a as A}from"./spread-8a54911c.js";import{p as P,M as R,T as E,S as k}from"./collect-stories-a6a786e2.js";import{S as b}from"./SiteHeader-e29e06aa.js";import{T as K}from"./Theme-d3929ef9.js";import{b as U,w as x}from"./withParams-47e2ab71.js";import"./ReutersLogo-56e66cec.js";import"./each-e59479a4.js";import"./index-2224dbf5.js";import"./time-f9db70de.js";import"./_commonjsHelpers-de833af9.js";import"./light-59dc4e88.js";const B=`Reuters dotcom site header, ported from [Raptor UI components](https://github.com/tr/rcom-arc_raptor-ui/tree/develop/packages/rcom-raptor-ui_common/src/components/site-header).

(Go to the "[Canvas](./?path=/story/components-siteheader--default)" tab to see this component better. It'll look a bit broken below... but it's NOT!)

> **Note:** In the Graphics Kit, you can find this component in \`pages/+page.svelte\`. Customise it there for the default page.

\`\`\`svelte
<script>
  import { SiteHeader } from '@reuters-graphics/graphics-components';
<\/script>

<SiteHeader />
\`\`\`
`,F=`Colours are customised by the [\`Theme\`](?path=/docs/theming-theme--default) component.

\`\`\`svelte
<script>
  import { SiteHeader, Theme } from '@reuters-graphics/graphics-components';
<\/script>

<Theme base="dark">
  <SiteHeader />
</Theme>
\`\`\`
`;function J(p){let t,r,s;const n=[p[1]];let a={};for(let o=0;o<n.length;o+=1)a=y(a,n[o]);return r=new b({props:a}),{c(){t=I("div"),l(r.$$.fragment),q(t,"class","svelte-qq31zf")},m(o,i){_(o,t,i),c(r,t,null),s=!0},p(o,i){const $=i&2?M(n,[A(o[1])]):{};r.$set($)},i(o){s||(f(r.$$.fragment,o),s=!0)},o(o){d(r.$$.fragment,o),s=!1},d(o){o&&g(t),u(r)}}}function L(p){let t,r;return t=new b({}),{c(){l(t.$$.fragment)},m(s,n){c(t,s,n),r=!0},i(s){r||(f(t.$$.fragment,s),r=!0)},o(s){d(t.$$.fragment,s),r=!1},d(s){u(t,s)}}}function Q(p){let t,r,s;return r=new K({props:{base:"dark",$$slots:{default:[L]},$$scope:{ctx:p}}}),{c(){t=I("div"),l(r.$$.fragment),q(t,"class","svelte-qq31zf")},m(n,a){_(n,t,a),c(r,t,null),s=!0},p(n,a){const o={};a&4&&(o.$$scope={dirty:a,ctx:n}),r.$set(o)},i(n){s||(f(r.$$.fragment,n),s=!0)},o(n){d(r.$$.fragment,n),s=!1},d(n){n&&g(t),u(r)}}}function V(p){let t,r,s,n,a,o,i,$;const h=[{title:"Components/SiteHeader"},{component:b},p[0]];let v={};for(let e=0;e<h.length;e+=1)v=y(v,h[e]);t=new R({props:v}),s=new E({props:{$$slots:{default:[J,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:p}}}),a=new k({props:{name:"Default"}});const D=[{name:"Customised theme"},U(F)];let S={$$slots:{default:[Q]},$$scope:{ctx:p}};for(let e=0;e<D.length;e+=1)S=y(S,D[e]);return i=new k({props:S}),{c(){l(t.$$.fragment),r=T(),l(s.$$.fragment),n=T(),l(a.$$.fragment),o=T(),l(i.$$.fragment)},m(e,m){c(t,e,m),_(e,r,m),c(s,e,m),_(e,n,m),c(a,e,m),_(e,o,m),c(i,e,m),$=!0},p(e,[m]){const z=m&1?M(h,[h[0],h[1],A(e[0])]):{};t.$set(z);const w={};m&6&&(w.$$scope={dirty:m,ctx:e}),s.$set(w);const H={};m&4&&(H.$$scope={dirty:m,ctx:e}),i.$set(H)},i(e){$||(f(t.$$.fragment,e),f(s.$$.fragment,e),f(a.$$.fragment,e),f(i.$$.fragment,e),$=!0)},o(e){d(t.$$.fragment,e),d(s.$$.fragment,e),d(a.$$.fragment,e),d(i.$$.fragment,e),$=!1},d(e){e&&(g(r),g(n),g(o)),u(t,e),u(s,e),u(a,e),u(i,e)}}}function W(p){return[{...x(B),argsTypes:{themes:{control:{disable:!0}}}}]}class j extends G{constructor(t){super(),N(this,t,W,V,O,{})}}j.__docgen={version:3,name:"SiteHeader.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const C=P(j,{meta:{title:"Components/SiteHeader"},stories:{"tpl:default":{storyId:"components-siteheader--default",name:"default",template:!0,source:`<div>
  <SiteHeader {...args} />
</div>`,hasArgs:!0},Default:{storyId:"components-siteheader--default",name:"Default",template:!1,source:"",hasArgs:!1},CustomisedTheme:{storyId:"components-siteheader--customised-theme",name:"Customised theme",template:!1,source:`<div>
  <Theme base="dark">
    <SiteHeader />
  </Theme>
</div>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","darkThemeDocs","SiteHeader","Theme","withComponentDocs","withStoryDocs"]}),pe=C.meta,le=["Default","CustomisedTheme"],ce=C.stories.Default,fe=C.stories.CustomisedTheme;export{fe as CustomisedTheme,ce as Default,le as __namedExportsOrder,pe as default};
//# sourceMappingURL=SiteHeader.stories-e8551e05.js.map
