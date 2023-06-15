import{S as Z,i as ee,s as te,j as p,m as f,b as h,t as $,n as g,D as T,a as b,d as _,w as v,x as y,E as A,M as N,z as S,p as C,k as B,l as I}from"./index-25af778d.js";import{p as oe,M as re,T as ae,S as F}from"./collect-stories-cce06d4a.js";import{A as le}from"./Article-06c782e7.js";import{H as me}from"./Headline-3a2c7ebf.js";import{B as Q}from"./BodyText-a712211f.js";import{G as ie}from"./GraphicBlock-f4f94c1a.js";import{S as ce}from"./SiteHeader-0cbb7ce2.js";import{T as w,t as L}from"./Theme-30eff4b8.js";import{a as P,w as ue}from"./withParams-90715500.js";import"./Block-9c89ee1a.js";import"./marked.esm-76161808.js";import"./PaddingReset-d848e1b7.js";import"./ReutersLogo-9287cf54.js";import"./index-2224dbf5.js";import"./time-cc3fd1f0.js";import"./_commonjsHelpers-725317a4.js";const pe=`The \`Theme\` component wraps your page content and uses [CSS variables](../?path=/docs/scss-css-variables--page) to set major colour and typography styles for your page. All of the components in this library will use those CSS variables for styling by default.

\`\`\`html
<script>
  import { Theme } from '@reuters-graphics/graphics-components';
<\/script>

<Theme base="light">
  <!-- ...page stuff, now styled according to your theme! -->
</Theme>
\`\`\`

> For Graphics Kit users, the \`Theme\` is set for you in your graphics homepage (\`pages/+page.svelte\`). You can customise it there for the whole page.
`,V=`You can customise the theme of your page in two ways:

First, you can choose the \`base\` theme, either \`light\` or \`dark\`.

From there, you can pass a custom theme object to the \`theme\` prop. Any custom styles you pass to \`theme\` will override styles in the \`base\` theme.

Check out the "Control" column for \`theme\` in the properties table above to see what properties you can customise.

> **Pro tip:** The \`Theme\` component only styles child components or elements, so if you're changing the background colour of your page, it's still a good idea to set a \`background-color\` on your \`body\` element in global SCSS.
>
> \`\`\`css
> // global.scss
> body {
>   background-color: #333;
> }
> \`\`\`

\`\`\`html
<Theme
  base="dark"
  theme="{{
    colour: { accent: 'yellow' },
    font: { 'family-hed': 'freight-book' },
  }}"
>
  <!-- Page content -->
</Theme>
\`\`\`
`,W=`To use a background pattern or image, set the background colour property in your custom theme to \`transparent\`...

\`\`\`html
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

\`\`\`css
/* global.scss */
body {
  background-color: darkblue;
  background-image: url('$assets/images/my-pattern.png');
}
\`\`\`

You may also want to override the background on the header nav if it conflicts with your background, especially the dropdown menu:

\`\`\`css
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
`,X=`Styles that use \`Theme\`'s CSS variables will always use those set by the nearest parent \`Theme\`. That lets you change the theme for parts of your page by simply wrapping that bit in a _new_ \`Theme\` with different styles.

The demo below shows a more complex example of nesting themes, but more likely you'll so something like this:

\`\`\`html
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
`;function fe(m){let e;return{c(){e=v("span"),e.innerHTML="By <strong>Peppa Pig</strong>",y(e,"slot","byline")},m(n,t){b(n,e,t)},p:A,d(n){n&&_(e)}}}function he(m){let e,n,t,s;return{c(){e=v("span"),n=N("Published "),t=v("time"),s=N("Jan. 1, 2020"),y(t,"datetime",new Date("2020-01-01").toISOString()),y(e,"slot","dateline")},m(r,a){b(r,e,a),S(e,n),S(e,t),S(t,s)},p:A,d(r){r&&_(e)}}}function $e(m){let e;return{c(){e=v("div"),y(e,"class","fake-graphic svelte-ios2be")},m(n,t){b(n,e,t)},p:A,d(n){n&&_(e)}}}function ge(m){let e,n,t,s,r,a,i,c;return e=new me({props:{hed:"Reuters Graphics Interactive",dek:"The beginning of a beautiful page",section:"Global news",$$slots:{dateline:[he],byline:[fe]},$$scope:{ctx:m}}}),t=new Q({props:{text:`Bacon ipsum dolor amet cupim porchetta chuck buffalo sirloin beef. Biltong ham brisket tenderloin hamburger doner.

Prosciutto kevin brisket sirloin pork loin shoulder cupim sausage chicken jowl strip steak rump pork ball tip ham hock. Swine pork belly fatback alcatra jowl.

## Brisket sirloin

Shank strip steak turkey shoulder shankle leberkas pork chop, t-bone picanha buffalo ground round burgdoggen ribeye.   
  `}}),r=new ie({props:{title:"Steak tar-tar",description:"Andouille pork loin cow buffalo pork chop shoulder.",notes:"Source: U.S. FDA",$$slots:{default:[$e]},$$scope:{ctx:m}}}),i=new Q({props:{text:"Bacon ipsum dolor amet cupim porchetta chuck buffalo sirloin beef. Biltong ham brisket tenderloin hamburger doner."}}),{c(){p(e.$$.fragment),n=T(),p(t.$$.fragment),s=T(),p(r.$$.fragment),a=T(),p(i.$$.fragment)},m(l,d){f(e,l,d),b(l,n,d),f(t,l,d),b(l,s,d),f(r,l,d),b(l,a,d),f(i,l,d),c=!0},p(l,d){const k={};d&1&&(k.$$scope={dirty:d,ctx:l}),e.$set(k);const D={};d&1&&(D.$$scope={dirty:d,ctx:l}),r.$set(D)},i(l){c||(h(e.$$.fragment,l),h(t.$$.fragment,l),h(r.$$.fragment,l),h(i.$$.fragment,l),c=!0)},o(l){$(e.$$.fragment,l),$(t.$$.fragment,l),$(r.$$.fragment,l),$(i.$$.fragment,l),c=!1},d(l){g(e,l),l&&_(n),g(t,l),l&&_(s),g(r,l),l&&_(a),g(i,l)}}}function de(m){let e,n;return e=new le({props:{$$slots:{default:[ge]},$$scope:{ctx:m}}}),{c(){p(e.$$.fragment)},m(t,s){f(e,t,s),n=!0},p(t,[s]){const r={};s&1&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}class Y extends Z{constructor(e){super(),ee(this,e,null,de,te,{})}}Y.__docgen={version:3,name:"ThemedPage.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function be(m){let e,n;return e=new Y({}),{c(){p(e.$$.fragment)},m(t,s){f(e,t,s),n=!0},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function _e(m){let e,n,t;const s=[m[1]];let r={$$slots:{default:[be]},$$scope:{ctx:m}};for(let a=0;a<s.length;a+=1)r=C(r,s[a]);return n=new w({props:r}),{c(){e=v("div"),p(n.$$.fragment),y(e,"class","reset-article")},m(a,i){b(a,e,i),f(n,e,null),t=!0},p(a,i){const c=i&2?B(s,[I(a[1])]):{};i&4&&(c.$$scope={dirty:i,ctx:a}),n.$set(c)},i(a){t||(h(n.$$.fragment,a),t=!0)},o(a){$(n.$$.fragment,a),t=!1},d(a){a&&_(e),g(n)}}}function ke(m){let e,n;return e=new Y({}),{c(){p(e.$$.fragment)},m(t,s){f(e,t,s),n=!0},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function ye(m){let e,n;return e=new w({props:{base:"dark",theme:{colour:{accent:"yellow"},font:{"family-hed":"freight-book"}},$$slots:{default:[ke]},$$scope:{ctx:m}}}),{c(){p(e.$$.fragment)},m(t,s){f(e,t,s),n=!0},p(t,s){const r={};s&4&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Te(m){let e,n,t,s;return e=new ce({}),t=new Y({}),{c(){p(e.$$.fragment),n=T(),p(t.$$.fragment)},m(r,a){f(e,r,a),b(r,n,a),f(t,r,a),s=!0},i(r){s||(h(e.$$.fragment,r),h(t.$$.fragment,r),s=!0)},o(r){$(e.$$.fragment,r),$(t.$$.fragment,r),s=!1},d(r){g(e,r),r&&_(n),g(t,r)}}}function ve(m){let e,n,t;return n=new w({props:{base:"dark",theme:{colour:{background:"transparent"}},$$slots:{default:[Te]},$$scope:{ctx:m}}}),{c(){e=v("div"),p(n.$$.fragment),y(e,"id","pattern-bg"),y(e,"class","svelte-5t27eo")},m(s,r){b(s,e,r),f(n,e,null),t=!0},p(s,r){const a={};r&4&&(a.$$scope={dirty:r,ctx:s}),n.$set(a)},i(s){t||(h(n.$$.fragment,s),t=!0)},o(s){$(n.$$.fragment,s),t=!1},d(s){s&&_(e),g(n)}}}function we(m){let e;return{c(){e=v("div"),e.innerHTML='<p class="svelte-5t27eo">Sub-sub</p>',y(e,"class","themed svelte-5t27eo")},m(n,t){b(n,e,t)},p:A,d(n){n&&_(e)}}}function Se(m){let e;return{c(){e=v("div"),e.innerHTML='<p class="svelte-5t27eo">Sub-sub sibling</p>',y(e,"class","themed svelte-5t27eo")},m(n,t){b(n,e,t)},p:A,d(n){n&&_(e)}}}function De(m){let e,n,t,s,r,a,i;return s=new w({props:{theme:L.light,$$slots:{default:[we]},$$scope:{ctx:m}}}),a=new w({props:{theme:{colour:{background:"steelblue","text-primary":"#fff"},font:{"family-note":"freight-book"}},base:"dark",$$slots:{default:[Se]},$$scope:{ctx:m}}}),{c(){e=v("div"),n=v("p"),n.textContent="Sub-theme",t=T(),p(s.$$.fragment),r=T(),p(a.$$.fragment),y(n,"class","svelte-5t27eo"),y(e,"class","themed svelte-5t27eo")},m(c,l){b(c,e,l),S(e,n),S(e,t),f(s,e,null),S(e,r),f(a,e,null),i=!0},p(c,l){const d={};l&4&&(d.$$scope={dirty:l,ctx:c}),s.$set(d);const k={};l&4&&(k.$$scope={dirty:l,ctx:c}),a.$set(k)},i(c){i||(h(s.$$.fragment,c),h(a.$$.fragment,c),i=!0)},o(c){$(s.$$.fragment,c),$(a.$$.fragment,c),i=!1},d(c){c&&_(e),g(s),g(a)}}}function Pe(m){let e,n,t,s,r;return s=new w({props:{theme:L.dark,$$slots:{default:[De]},$$scope:{ctx:m}}}),{c(){e=v("div"),n=v("p"),n.textContent="Theme",t=T(),p(s.$$.fragment),y(n,"class","svelte-5t27eo"),y(e,"class","themed svelte-5t27eo")},m(a,i){b(a,e,i),S(e,n),S(e,t),f(s,e,null),r=!0},p(a,i){const c={};i&4&&(c.$$scope={dirty:i,ctx:a}),s.$set(c)},i(a){r||(h(s.$$.fragment,a),r=!0)},o(a){$(s.$$.fragment,a),r=!1},d(a){a&&_(e),g(s)}}}function Ce(m){let e,n;return e=new w({props:{theme:L.light,$$slots:{default:[Pe]},$$scope:{ctx:m}}}),{c(){p(e.$$.fragment)},m(t,s){f(e,t,s),n=!0},p(t,s){const r={};s&4&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Be(m){let e,n,t,s,r,a,i,c,l,d,k,D;const M=[{title:"Theming/Theme"},{component:w},m[0]];let E={};for(let o=0;o<M.length;o+=1)E=C(E,M[o]);e=new re({props:E}),t=new ae({props:{$$slots:{default:[_e,({args:o})=>({1:o}),({args:o})=>o?2:0]},$$scope:{ctx:m}}}),r=new F({props:{name:"Default",args:{theme:L.light,base:"light"}}});const H=[{name:"Custom theme"},P(V)];let O={$$slots:{default:[ye]},$$scope:{ctx:m}};for(let o=0;o<H.length;o+=1)O=C(O,H[o]);i=new F({props:O});const j=[{name:"Background patterns"},P(W)];let q={$$slots:{default:[ve]},$$scope:{ctx:m}};for(let o=0;o<j.length;o+=1)q=C(q,j[o]);l=new F({props:q});const G=[{name:"Inheritance"},P(X)];let z={$$slots:{default:[Ce]},$$scope:{ctx:m}};for(let o=0;o<G.length;o+=1)z=C(z,G[o]);return k=new F({props:z}),{c(){p(e.$$.fragment),n=T(),p(t.$$.fragment),s=T(),p(r.$$.fragment),a=T(),p(i.$$.fragment),c=T(),p(l.$$.fragment),d=T(),p(k.$$.fragment)},m(o,u){f(e,o,u),b(o,n,u),f(t,o,u),b(o,s,u),f(r,o,u),b(o,a,u),f(i,o,u),b(o,c,u),f(l,o,u),b(o,d,u),f(k,o,u),D=!0},p(o,[u]){const se=u&1?B(M,[M[0],u&0&&{component:w},u&1&&I(o[0])]):{};e.$set(se);const J={};u&6&&(J.$$scope={dirty:u,ctx:o}),t.$set(J);const K=u&0?B(H,[H[0],I(P(V))]):{};u&4&&(K.$$scope={dirty:u,ctx:o}),i.$set(K);const R=u&0?B(j,[j[0],I(P(W))]):{};u&4&&(R.$$scope={dirty:u,ctx:o}),l.$set(R);const U=u&0?B(G,[G[0],I(P(X))]):{};u&4&&(U.$$scope={dirty:u,ctx:o}),k.$set(U)},i(o){D||(h(e.$$.fragment,o),h(t.$$.fragment,o),h(r.$$.fragment,o),h(i.$$.fragment,o),h(l.$$.fragment,o),h(k.$$.fragment,o),D=!0)},o(o){$(e.$$.fragment,o),$(t.$$.fragment,o),$(r.$$.fragment,o),$(i.$$.fragment,o),$(l.$$.fragment,o),$(k.$$.fragment,o),D=!1},d(o){g(e,o),o&&_(n),g(t,o),o&&_(s),g(r,o),o&&_(a),g(i,o),o&&_(c),g(l,o),o&&_(d),g(k,o)}}}function Ie(m){return[{...ue(pe),argTypes:{base:{control:"select",options:["light","dark"]},themes:{control:!1}}}]}class ne extends Z{constructor(e){super(),ee(this,e,Ie,Be,te,{})}}ne.__docgen={version:3,name:"Theme.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const x=oe(ne,{meta:{title:"Theming/Theme"},stories:{"tpl:default":{storyId:"theming-theme--default",name:"default",template:!0,source:`<div class="reset-article">
  <Theme {...args}>
    <ThemedPage />
  </Theme>
</div>`,hasArgs:!0},Default:{storyId:"theming-theme--default",name:"Default",template:!1,hasArgs:!1},CustomTheme:{storyId:"theming-theme--custom-theme",name:"Custom theme",template:!1,source:`<Theme
  base="dark"
  theme="{{
    colour: { accent: 'yellow' },
    font: { 'family-hed': 'freight-book' },
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
            font: { 'family-note': 'freight-book' },
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
</Theme>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","customiseDocs","patternDocs","inheritanceDocs","ThemedPage","SiteHeader","Theme","themes","withComponentDocs","withStoryDocs"]}),Ue=x.meta,Ne=["Default","CustomTheme","BackgroundPatterns","Inheritance"],Qe=x.stories.Default,Ve=x.stories.CustomTheme,We=x.stories.BackgroundPatterns,Xe=x.stories.Inheritance;export{We as BackgroundPatterns,Ve as CustomTheme,Qe as Default,Xe as Inheritance,Ne as __namedExportsOrder,Ue as default};
//# sourceMappingURL=Theme.stories-55b15d32.js.map
