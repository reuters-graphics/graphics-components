import{S as P,i as R,s as E,C as D,g as l,y as T,m as c,d as _,t as f,h as u,f as g,j as d,o as q,b as M}from"./index-8e2228d6.js";import{g as A,a as I}from"./spread-8a54911c.js";import{p as G,M as K,T as N,S as k}from"./collect-stories-f2899c5f.js";import{S as C}from"./SiteHeader-f472de1d.js";import{T as O}from"./Theme-8aee239c.js";import{b as U,w as x}from"./withParams-47e2ab71.js";import"./ReutersLogo-7ebae912.js";import"./each-e59479a4.js";import"./index-2224dbf5.js";import"./time-f9db70de.js";import"./_commonjsHelpers-de833af9.js";import"./light-fcb352a5.js";const B=`Reuters dotcom site header, ported from [Raptor UI components](https://github.com/tr/rcom-arc_raptor-ui/tree/develop/packages/rcom-raptor-ui_common/src/components/site-header).

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
`;function J(p){let t,r,s;const n=[p[1]];let a={};for(let o=0;o<n.length;o+=1)a=D(a,n[o]);return r=new C({props:a}),{c(){t=q("div"),l(r.$$.fragment),M(t,"class","svelte-qq31zf")},m(o,i){_(o,t,i),c(r,t,null),s=!0},p(o,i){const $=i&2?A(n,[I(o[1])]):{};r.$set($)},i(o){s||(f(r.$$.fragment,o),s=!0)},o(o){u(r.$$.fragment,o),s=!1},d(o){o&&g(t),d(r)}}}function L(p){let t,r;return t=new C({}),{c(){l(t.$$.fragment)},m(s,n){c(t,s,n),r=!0},i(s){r||(f(t.$$.fragment,s),r=!0)},o(s){u(t.$$.fragment,s),r=!1},d(s){d(t,s)}}}function Q(p){let t,r,s;return r=new O({props:{base:"dark",$$slots:{default:[L]},$$scope:{ctx:p}}}),{c(){t=q("div"),l(r.$$.fragment),M(t,"class","svelte-qq31zf")},m(n,a){_(n,t,a),c(r,t,null),s=!0},p(n,a){const o={};a&4&&(o.$$scope={dirty:a,ctx:n}),r.$set(o)},i(n){s||(f(r.$$.fragment,n),s=!0)},o(n){u(r.$$.fragment,n),s=!1},d(n){n&&g(t),d(r)}}}function V(p){let t,r,s,n,a,o,i,$;const h=[{title:"Components/SiteHeader"},{component:C},p[0]];let v={};for(let e=0;e<h.length;e+=1)v=D(v,h[e]);t=new K({props:v}),s=new N({props:{$$slots:{default:[J,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:p}}}),a=new k({props:{name:"Default"}});const w=[{name:"Customised theme"},U(F)];let S={$$slots:{default:[Q]},$$scope:{ctx:p}};for(let e=0;e<w.length;e+=1)S=D(S,w[e]);return i=new k({props:S}),{c(){l(t.$$.fragment),r=T(),l(s.$$.fragment),n=T(),l(a.$$.fragment),o=T(),l(i.$$.fragment)},m(e,m){c(t,e,m),_(e,r,m),c(s,e,m),_(e,n,m),c(a,e,m),_(e,o,m),c(i,e,m),$=!0},p(e,[m]){const z=m&1?A(h,[h[0],h[1],I(e[0])]):{};t.$set(z);const y={};m&6&&(y.$$scope={dirty:m,ctx:e}),s.$set(y);const b={};m&4&&(b.$$scope={dirty:m,ctx:e}),i.$set(b)},i(e){$||(f(t.$$.fragment,e),f(s.$$.fragment,e),f(a.$$.fragment,e),f(i.$$.fragment,e),$=!0)},o(e){u(t.$$.fragment,e),u(s.$$.fragment,e),u(a.$$.fragment,e),u(i.$$.fragment,e),$=!1},d(e){e&&(g(r),g(n),g(o)),d(t,e),d(s,e),d(a,e),d(i,e)}}}function W(p){return[{...x(B),argsTypes:{themes:{control:{disable:!0}}}}]}class j extends P{constructor(t){super(),R(this,t,W,V,E,{})}}j.__docgen={version:3,name:"SiteHeader.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const H=G(j,{meta:{title:"Components/SiteHeader"},stories:{"tpl:default":{name:"default",template:!0,source:`<div>
  <SiteHeader {...args} />
</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},CustomisedTheme:{name:"Customised theme",template:!1,source:`<div>
  <Theme base="dark">
    <SiteHeader />
  </Theme>
</div>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","darkThemeDocs","SiteHeader","Theme","withComponentDocs","withStoryDocs"]}),pe=H.meta,le=["Default","CustomisedTheme"],ce=H.stories.Default,fe=H.stories.CustomisedTheme;export{fe as CustomisedTheme,ce as Default,le as __namedExportsOrder,pe as default};
//# sourceMappingURL=SiteHeader.stories-04194355.js.map
