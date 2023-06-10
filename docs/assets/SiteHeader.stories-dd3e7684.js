import{S as O,i as P,s as R,p as b,j as l,D as w,m as c,a as h,k as C,l as H,b as f,t as d,n as u,d as _,w as j,x as z}from"./index-25af778d.js";import{p as x,M as E,T as K,S as q}from"./collect-stories-cce06d4a.js";import{S}from"./SiteHeader-0cbb7ce2.js";import{T as U}from"./Theme-30eff4b8.js";import{a as M,w as B}from"./withParams-90715500.js";import"./ReutersLogo-9287cf54.js";import"./index-2224dbf5.js";import"./time-cc3fd1f0.js";import"./_commonjsHelpers-725317a4.js";const F=`Reuters dotcom site header, ported from [Raptor UI components](https://github.com/tr/rcom-arc_raptor-ui/tree/develop/packages/rcom-raptor-ui_common/src/components/site-header).

(Go to the "[Canvas](./?path=/story/components-siteheader--default)" tab to see this component better. It'll look a bit broken below... but it's NOT!)

> **Note:** In the Graphics Kit, you can find this component in \`pages/+page.svelte\`. Customise it there for the default page.

\`\`\`html
<script>
  import { SiteHeader } from '@reuters-graphics/graphics-components';
<\/script>

<SiteHeader />
\`\`\`
`,A=`Colours are customised by the [\`Theme\`](?path=/docs/theming-theme--default) component.

\`\`\`html
<script>
  import { SiteHeader, Theme } from '@reuters-graphics/graphics-components';
<\/script>

<Theme base="dark">
  <SiteHeader />
</Theme>
\`\`\`
`;function J(p){let t,o,s;const n=[p[1]];let m={};for(let r=0;r<n.length;r+=1)m=b(m,n[r]);return o=new S({props:m}),{c(){t=j("div"),l(o.$$.fragment),z(t,"class","svelte-qq31zf")},m(r,i){h(r,t,i),c(o,t,null),s=!0},p(r,i){const $=i&2?C(n,[H(r[1])]):{};o.$set($)},i(r){s||(f(o.$$.fragment,r),s=!0)},o(r){d(o.$$.fragment,r),s=!1},d(r){r&&_(t),u(o)}}}function L(p){let t,o;return t=new S({}),{c(){l(t.$$.fragment)},m(s,n){c(t,s,n),o=!0},i(s){o||(f(t.$$.fragment,s),o=!0)},o(s){d(t.$$.fragment,s),o=!1},d(s){u(t,s)}}}function Q(p){let t,o,s;return o=new U({props:{base:"dark",$$slots:{default:[L]},$$scope:{ctx:p}}}),{c(){t=j("div"),l(o.$$.fragment),z(t,"class","svelte-qq31zf")},m(n,m){h(n,t,m),c(o,t,null),s=!0},p(n,m){const r={};m&4&&(r.$$scope={dirty:m,ctx:n}),o.$set(r)},i(n){s||(f(o.$$.fragment,n),s=!0)},o(n){d(o.$$.fragment,n),s=!1},d(n){n&&_(t),u(o)}}}function V(p){let t,o,s,n,m,r,i,$;const g=[{title:"Components/SiteHeader"},{component:S},p[0]];let T={};for(let e=0;e<g.length;e+=1)T=b(T,g[e]);t=new E({props:T}),s=new K({props:{$$slots:{default:[J,({args:e})=>({1:e}),({args:e})=>e?2:0]},$$scope:{ctx:p}}}),m=new q({props:{name:"Default"}});const v=[{name:"Customised theme"},M(A)];let D={$$slots:{default:[Q]},$$scope:{ctx:p}};for(let e=0;e<v.length;e+=1)D=b(D,v[e]);return i=new q({props:D}),{c(){l(t.$$.fragment),o=w(),l(s.$$.fragment),n=w(),l(m.$$.fragment),r=w(),l(i.$$.fragment)},m(e,a){c(t,e,a),h(e,o,a),c(s,e,a),h(e,n,a),c(m,e,a),h(e,r,a),c(i,e,a),$=!0},p(e,[a]){const N=a&1?C(g,[g[0],a&0&&{component:S},a&1&&H(e[0])]):{};t.$set(N);const k={};a&6&&(k.$$scope={dirty:a,ctx:e}),s.$set(k);const I=a&0?C(v,[v[0],H(M(A))]):{};a&4&&(I.$$scope={dirty:a,ctx:e}),i.$set(I)},i(e){$||(f(t.$$.fragment,e),f(s.$$.fragment,e),f(m.$$.fragment,e),f(i.$$.fragment,e),$=!0)},o(e){d(t.$$.fragment,e),d(s.$$.fragment,e),d(m.$$.fragment,e),d(i.$$.fragment,e),$=!1},d(e){u(t,e),e&&_(o),u(s,e),e&&_(n),u(m,e),e&&_(r),u(i,e)}}}function W(p){return[{...B(F),argsTypes:{themes:{control:{disable:!0}}}}]}class G extends O{constructor(t){super(),P(this,t,W,V,R,{})}}G.__docgen={version:3,name:"SiteHeader.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const y=x(G,{meta:{title:"Components/SiteHeader"},stories:{"tpl:default":{storyId:"components-siteheader--default",name:"default",template:!0,source:`<div>
  <SiteHeader {...args} />
</div>`,hasArgs:!0},Default:{storyId:"components-siteheader--default",name:"Default",template:!1,hasArgs:!1},CustomisedTheme:{storyId:"components-siteheader--customised-theme",name:"Customised theme",template:!1,source:`<div>
  <Theme base="dark">
    <SiteHeader />
  </Theme>
</div>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","darkThemeDocs","SiteHeader","Theme","withComponentDocs","withStoryDocs"]}),ae=y.meta,me=["Default","CustomisedTheme"],ie=y.stories.Default,pe=y.stories.CustomisedTheme;export{pe as CustomisedTheme,ie as Default,me as __namedExportsOrder,ae as default};
//# sourceMappingURL=SiteHeader.stories-dd3e7684.js.map
