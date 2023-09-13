import{S as N,i as Q,s as V,g as u,m as p,t as f,h,j as $,y as v,d as b,f as _,o as T,b as y,n as B,z as K,e as w,C}from"./index-df681c7c.js";import{g as W,a as X}from"./spread-8a54911c.js";import{p as te,M as ne,T as se,S as A}from"./collect-stories-a6a786e2.js";import{A as oe}from"./Article-6674aca3.js";import{H as re}from"./Headline-5d5c3c16.js";import{B as R}from"./BodyText-21e82d91.js";import{G as ae}from"./GraphicBlock-6959cc3a.js";import{S as le}from"./SiteHeader-e29e06aa.js";import{T as S,t as x}from"./Theme-d3929ef9.js";import{b as L,w as me}from"./withParams-47e2ab71.js";import"./Block-2886d499.js";import"./Byline-c97b9578.js";import"./each-e59479a4.js";import"./_commonjsHelpers-de833af9.js";import"./journalize-07958dc6.js";import"./marked.esm-76161808.js";import"./PaddingReset-6a0440e6.js";import"./ReutersLogo-56e66cec.js";import"./index-2224dbf5.js";import"./time-f9db70de.js";import"./light-59dc4e88.js";const ie=`The \`Theme\` component wraps your page content and uses [CSS variables](../?path=/docs/scss-css-variables--page) to set major colour and typography styles for your page. All of the components in this library will use those CSS variables for styling by default.

Use our [theme builder](../?path=/docs/theming-theme-builder--docs) to customise your page's theme.

\`\`\`svelte
<script>
  import { Theme } from '@reuters-graphics/graphics-components';
<\/script>

<Theme base="light">
  <!-- ...page stuff, now styled according to your theme! -->
</Theme>
\`\`\`

> For Graphics Kit users, the \`Theme\` is set for you in your graphics homepage (\`pages/+page.svelte\`). You can customise it there for the whole page.
`,ce=`You can customise the theme of your page in two ways:

First, you can choose the \`base\` theme, either \`light\` or \`dark\`.

From there, you can pass a custom theme object to the \`theme\` prop. Any custom styles you pass to \`theme\` will override styles in the \`base\` theme.

Check out the "Control" column for \`theme\` in the properties table above to see what properties you can customise.

> **Pro tip:** The \`Theme\` component only styles child components or elements, so if you're changing the background colour of your page, it's still a good idea to set a \`background-color\` on your \`body\` element in global SCSS.
>
> \`\`\`scss
> // global.scss
> body {
>   background-color: #333;
> }
> \`\`\`

\`\`\`svelte
<Theme
  base="dark"
  theme="{{
    colour: { accent: 'yellow' },
    font: { family: { hed: 'freight-book' } },
  }}"
>
  <!-- Page content -->
</Theme>
\`\`\`
`,ue=`To use a background pattern or image, set the background colour property in your custom theme to \`transparent\`...

\`\`\`svelte
<Theme
  base="dark"
  theme="{{
    colour: { background: 'transparent' },
  }}"
>
  <!-- Page content -->
</Theme>
\`\`\`

... then set your background image in global SCSS:

\`\`\`scss
/* global.scss */
body {
  background-color: darkblue;
  background-image: url('$assets/images/my-pattern.png');
}
\`\`\`

You may also want to override the background on the header nav if it conflicts with your background, especially the dropdown menu:

\`\`\`scss
/* global.scss
Main nav container */
.nav-container .inner {
  background: darkblue !important;
  /* Dropdown menu */
  .dropdown {
    background: darkblue !important;
  }
}
/* Mobile nav overlay */
header + .overlay {
  background: darkblue !important;
}
\`\`\`
`,pe=`Styles that use \`Theme\`'s CSS variables will always use those set by the nearest parent \`Theme\`. That lets you change the theme for parts of your page by simply wrapping that bit in a _new_ \`Theme\` with different styles.

The demo below shows a more complex example of nesting themes, but more likely you'll so something like this:

\`\`\`svelte
<script>
  import { Theme } from '@reuters-graphics/graphics-components';
<\/script>

<Theme>
  <!-- Page content styled with the default light theme. -->
  <Theme theme="{{ colour: { background: 'lightgrey' } }}">
    <!-- A darker background for this section. -->
  </Theme>
  <!-- Back to normal here... -->
</Theme>
\`\`\`
`;function fe(m){let e;return{c(){e=T("span"),e.innerHTML="By <strong>Peppa Pig</strong>",y(e,"slot","byline")},m(n,t){b(n,e,t)},p:B,d(n){n&&_(e)}}}function he(m){let e,n,t,s;return{c(){e=T("span"),n=K("Published "),t=T("time"),s=K("Jan. 1, 2020"),y(t,"datetime",new Date("2020-01-01").toISOString()),y(e,"slot","dateline")},m(r,a){b(r,e,a),w(e,n),w(e,t),w(t,s)},p:B,d(r){r&&_(e)}}}function $e(m){let e;return{c(){e=T("div"),y(e,"class","fake-graphic svelte-ios2be")},m(n,t){b(n,e,t)},p:B,d(n){n&&_(e)}}}function de(m){let e,n,t,s,r,a,i,c;return e=new re({props:{hed:"Reuters Graphics Interactive",dek:"The beginning of a beautiful page",section:"Global news",$$slots:{dateline:[he],byline:[fe]},$$scope:{ctx:m}}}),t=new R({props:{text:`Bacon ipsum dolor amet cupim porchetta chuck buffalo sirloin beef. Biltong ham brisket tenderloin hamburger doner.

Prosciutto kevin brisket sirloin pork loin shoulder cupim sausage chicken jowl strip steak rump pork ball tip ham hock. Swine pork belly fatback alcatra jowl.

## Brisket sirloin

Shank strip steak turkey shoulder shankle leberkas pork chop, t-bone picanha buffalo ground round burgdoggen ribeye.   
  `}}),r=new ae({props:{title:"Steak tar-tar",description:"Andouille pork loin cow buffalo pork chop shoulder.",notes:"Source: U.S. FDA",$$slots:{default:[$e]},$$scope:{ctx:m}}}),i=new R({props:{text:"Bacon ipsum dolor amet cupim porchetta chuck buffalo sirloin beef. Biltong ham brisket tenderloin hamburger doner."}}),{c(){u(e.$$.fragment),n=v(),u(t.$$.fragment),s=v(),u(r.$$.fragment),a=v(),u(i.$$.fragment)},m(l,g){p(e,l,g),b(l,n,g),p(t,l,g),b(l,s,g),p(r,l,g),b(l,a,g),p(i,l,g),c=!0},p(l,g){const k={};g&1&&(k.$$scope={dirty:g,ctx:l}),e.$set(k);const D={};g&1&&(D.$$scope={dirty:g,ctx:l}),r.$set(D)},i(l){c||(f(e.$$.fragment,l),f(t.$$.fragment,l),f(r.$$.fragment,l),f(i.$$.fragment,l),c=!0)},o(l){h(e.$$.fragment,l),h(t.$$.fragment,l),h(r.$$.fragment,l),h(i.$$.fragment,l),c=!1},d(l){l&&(_(n),_(s),_(a)),$(e,l),$(t,l),$(r,l),$(i,l)}}}function ge(m){let e,n;return e=new oe({props:{$$slots:{default:[de]},$$scope:{ctx:m}}}),{c(){u(e.$$.fragment)},m(t,s){p(e,t,s),n=!0},p(t,[s]){const r={};s&1&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}class M extends N{constructor(e){super(),Q(this,e,null,ge,V,{})}}M.__docgen={version:3,name:"ThemedPage.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function be(m){let e,n;return e=new M({}),{c(){u(e.$$.fragment)},m(t,s){p(e,t,s),n=!0},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function _e(m){let e,n,t;const s=[m[1]];let r={$$slots:{default:[be]},$$scope:{ctx:m}};for(let a=0;a<s.length;a+=1)r=C(r,s[a]);return n=new S({props:r}),{c(){e=T("div"),u(n.$$.fragment),y(e,"class","reset-article")},m(a,i){b(a,e,i),p(n,e,null),t=!0},p(a,i){const c=i&2?W(s,[X(a[1])]):{};i&4&&(c.$$scope={dirty:i,ctx:a}),n.$set(c)},i(a){t||(f(n.$$.fragment,a),t=!0)},o(a){h(n.$$.fragment,a),t=!1},d(a){a&&_(e),$(n)}}}function ke(m){let e,n;return e=new M({}),{c(){u(e.$$.fragment)},m(t,s){p(e,t,s),n=!0},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function ye(m){let e,n;return e=new S({props:{base:"dark",theme:{colour:{accent:"yellow"},font:{family:{hed:"freight-book"}}},$$slots:{default:[ke]},$$scope:{ctx:m}}}),{c(){u(e.$$.fragment)},m(t,s){p(e,t,s),n=!0},p(t,s){const r={};s&4&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function ve(m){let e,n,t,s;return e=new le({}),t=new M({}),{c(){u(e.$$.fragment),n=v(),u(t.$$.fragment)},m(r,a){p(e,r,a),b(r,n,a),p(t,r,a),s=!0},i(r){s||(f(e.$$.fragment,r),f(t.$$.fragment,r),s=!0)},o(r){h(e.$$.fragment,r),h(t.$$.fragment,r),s=!1},d(r){r&&_(n),$(e,r),$(t,r)}}}function Te(m){let e,n,t;return n=new S({props:{base:"dark",theme:{colour:{background:"transparent"}},$$slots:{default:[ve]},$$scope:{ctx:m}}}),{c(){e=T("div"),u(n.$$.fragment),y(e,"id","pattern-bg"),y(e,"class","svelte-5t27eo")},m(s,r){b(s,e,r),p(n,e,null),t=!0},p(s,r){const a={};r&4&&(a.$$scope={dirty:r,ctx:s}),n.$set(a)},i(s){t||(f(n.$$.fragment,s),t=!0)},o(s){h(n.$$.fragment,s),t=!1},d(s){s&&_(e),$(n)}}}function we(m){let e;return{c(){e=T("div"),e.innerHTML='<p class="svelte-5t27eo">Sub-sub</p>',y(e,"class","themed svelte-5t27eo")},m(n,t){b(n,e,t)},p:B,d(n){n&&_(e)}}}function Se(m){let e;return{c(){e=T("div"),e.innerHTML='<p class="svelte-5t27eo">Sub-sub sibling</p>',y(e,"class","themed svelte-5t27eo")},m(n,t){b(n,e,t)},p:B,d(n){n&&_(e)}}}function De(m){let e,n,t,s,r,a,i;return s=new S({props:{theme:x.light,$$slots:{default:[we]},$$scope:{ctx:m}}}),a=new S({props:{theme:{colour:{background:"steelblue","text-primary":"#fff"},font:{family:{note:"freight-book"}}},base:"dark",$$slots:{default:[Se]},$$scope:{ctx:m}}}),{c(){e=T("div"),n=T("p"),n.textContent="Sub-theme",t=v(),u(s.$$.fragment),r=v(),u(a.$$.fragment),y(n,"class","svelte-5t27eo"),y(e,"class","themed svelte-5t27eo")},m(c,l){b(c,e,l),w(e,n),w(e,t),p(s,e,null),w(e,r),p(a,e,null),i=!0},p(c,l){const g={};l&4&&(g.$$scope={dirty:l,ctx:c}),s.$set(g);const k={};l&4&&(k.$$scope={dirty:l,ctx:c}),a.$set(k)},i(c){i||(f(s.$$.fragment,c),f(a.$$.fragment,c),i=!0)},o(c){h(s.$$.fragment,c),h(a.$$.fragment,c),i=!1},d(c){c&&_(e),$(s),$(a)}}}function Pe(m){let e,n,t,s,r;return s=new S({props:{theme:x.dark,$$slots:{default:[De]},$$scope:{ctx:m}}}),{c(){e=T("div"),n=T("p"),n.textContent="Theme",t=v(),u(s.$$.fragment),y(n,"class","svelte-5t27eo"),y(e,"class","themed svelte-5t27eo")},m(a,i){b(a,e,i),w(e,n),w(e,t),p(s,e,null),r=!0},p(a,i){const c={};i&4&&(c.$$scope={dirty:i,ctx:a}),s.$set(c)},i(a){r||(f(s.$$.fragment,a),r=!0)},o(a){h(s.$$.fragment,a),r=!1},d(a){a&&_(e),$(s)}}}function Ce(m){let e,n;return e=new S({props:{theme:x.light,$$slots:{default:[Pe]},$$scope:{ctx:m}}}),{c(){u(e.$$.fragment)},m(t,s){p(e,t,s),n=!0},p(t,s){const r={};s&4&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}function Be(m){let e,n,t,s,r,a,i,c,l,g,k,D;const P=[{title:"Theming/Theme"},{component:S},m[0]];let H={};for(let o=0;o<P.length;o+=1)H=C(H,P[o]);e=new ne({props:H}),t=new se({props:{$$slots:{default:[_e,({args:o})=>({1:o}),({args:o})=>o?2:0]},$$scope:{ctx:m}}}),r=new A({props:{name:"Default",args:{theme:x.light,base:"light"}}});const Y=[{name:"Custom theme"},L(ce)];let j={$$slots:{default:[ye]},$$scope:{ctx:m}};for(let o=0;o<Y.length;o+=1)j=C(j,Y[o]);i=new A({props:j});const O=[{name:"Background patterns"},L(ue)];let G={$$slots:{default:[Te]},$$scope:{ctx:m}};for(let o=0;o<O.length;o+=1)G=C(G,O[o]);l=new A({props:G});const U=[{name:"Inheritance"},L(pe)];let F={$$slots:{default:[Ce]},$$scope:{ctx:m}};for(let o=0;o<U.length;o+=1)F=C(F,U[o]);return k=new A({props:F}),{c(){u(e.$$.fragment),n=v(),u(t.$$.fragment),s=v(),u(r.$$.fragment),a=v(),u(i.$$.fragment),c=v(),u(l.$$.fragment),g=v(),u(k.$$.fragment)},m(o,d){p(e,o,d),b(o,n,d),p(t,o,d),b(o,s,d),p(r,o,d),b(o,a,d),p(i,o,d),b(o,c,d),p(l,o,d),b(o,g,d),p(k,o,d),D=!0},p(o,[d]){const ee=d&1?W(P,[P[0],P[1],X(o[0])]):{};e.$set(ee);const q={};d&6&&(q.$$scope={dirty:d,ctx:o}),t.$set(q);const z={};d&4&&(z.$$scope={dirty:d,ctx:o}),i.$set(z);const E={};d&4&&(E.$$scope={dirty:d,ctx:o}),l.$set(E);const J={};d&4&&(J.$$scope={dirty:d,ctx:o}),k.$set(J)},i(o){D||(f(e.$$.fragment,o),f(t.$$.fragment,o),f(r.$$.fragment,o),f(i.$$.fragment,o),f(l.$$.fragment,o),f(k.$$.fragment,o),D=!0)},o(o){h(e.$$.fragment,o),h(t.$$.fragment,o),h(r.$$.fragment,o),h(i.$$.fragment,o),h(l.$$.fragment,o),h(k.$$.fragment,o),D=!1},d(o){o&&(_(n),_(s),_(a),_(c),_(g)),$(e,o),$(t,o),$(r,o),$(i,o),$(l,o),$(k,o)}}}function Ie(m){return[{...me(ie),argTypes:{base:{control:"select",options:["light","dark"]},themes:{control:!1}}}]}class Z extends N{constructor(e){super(),Q(this,e,Ie,Be,V,{})}}Z.__docgen={version:3,name:"Theme.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const I=te(Z,{meta:{title:"Theming/Theme"},stories:{"tpl:default":{storyId:"theming-theme--default",name:"default",template:!0,source:`<div class="reset-article">
  <Theme {...args}>
    <ThemedPage />
  </Theme>
</div>`,hasArgs:!0},Default:{storyId:"theming-theme--default",name:"Default",template:!1,source:"",hasArgs:!1},CustomTheme:{storyId:"theming-theme--custom-theme",name:"Custom theme",template:!1,source:`<Theme
  base="dark"
  theme="{{
    colour: { accent: 'yellow' },
    font: { family: { hed: 'freight-book' } },
  }}"
>
  <ThemedPage />
</Theme>`,hasArgs:!1},BackgroundPatterns:{storyId:"theming-theme--background-patterns",name:"Background patterns",template:!1,source:`<div id="pattern-bg">
  <Theme
    base="dark"
    theme="{{
      colour: { background: 'transparent' },
    }}"
  >
    <SiteHeader />
    <ThemedPage />
  </Theme>
</div>`,hasArgs:!1},Inheritance:{storyId:"theming-theme--inheritance",name:"Inheritance",template:!1,source:`<Theme theme="{themes.light}">
  <div class="themed">
    <p>Theme</p>
    <Theme theme="{themes.dark}">
      <div class="themed">
        <p>Sub-theme</p>
        <Theme theme="{themes.light}">
          <div class="themed">
            <p>Sub-sub</p>
          </div>
        </Theme>
        <Theme
          theme="{{
            colour: { background: 'steelblue', 'text-primary': '#fff' },
            font: { family: { note: 'freight-book' } },
          }}"
          base="dark"
        >
          <div class="themed">
            <p>Sub-sub sibling</p>
          </div>
        </Theme>
      </div>
    </Theme>
  </div>
</Theme>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","customiseDocs","patternDocs","inheritanceDocs","ThemedPage","SiteHeader","Theme","themes","withComponentDocs","withStoryDocs"]}),Xe=I.meta,Ze=["Default","CustomTheme","BackgroundPatterns","Inheritance"],et=I.stories.Default,tt=I.stories.CustomTheme,nt=I.stories.BackgroundPatterns,st=I.stories.Inheritance;export{nt as BackgroundPatterns,tt as CustomTheme,et as Default,st as Inheritance,Ze as __namedExportsOrder,Xe as default};
//# sourceMappingURL=Theme.stories-ef4f70d1.js.map
