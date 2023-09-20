import{S as X,i as Z,s as ee,g as u,m as p,t as h,h as $,j as d,v,d as g,f as b,o as k,b as w,n as I,C,e as F}from"./index-17b0726b.js";import{g as te,a as ne}from"./spread-8a54911c.js";import{p as ae,M as le,T as me,S as P}from"./collect-stories-4379b024.js";import{A as ie}from"./Article-9fdf57e0.js";import{H as se}from"./Headline-29632327.js";import{B as W}from"./BodyText-3a86741d.js";import{G as ce}from"./GraphicBlock-7797600a.js";import{S as fe}from"./SiteHeader-9a9ad325.js";import{T,t as x}from"./Theme-04e1d44b.js";import{b as A,w as ue}from"./withParams-47e2ab71.js";import"./Block-05b40915.js";import"./Byline-77d43bcd.js";import"./each-e59479a4.js";import"./_commonjsHelpers-de833af9.js";import"./journalize-07958dc6.js";import"./marked.esm-76161808.js";import"./PaddingReset-e7f108ee.js";import"./ReutersLogo-d0f7656b.js";import"./index-2224dbf5.js";import"./time-f9db70de.js";import"./light-fcb352a5.js";const pe=`The \`Theme\` component wraps your page content and uses [CSS variables](../?path=/docs/scss-css-variables--page) to set major colour and typography styles for your page. All of the components in this library will use those CSS variables for styling by default.

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
`,he=`You can customise the theme of your page in two ways:

First, you can choose the \`base\` theme, either \`light\` or \`dark\`.

From there, you can pass a custom theme object to the \`theme\` prop. Any custom styles you pass to \`theme\` will override styles in the \`base\` theme.

Check out the "Control" column for \`theme\` in the properties table above to see what properties you can customise.

> **Pro tip:** The \`Theme\` component only styles child components or elements, so if you're changing the background colour of your page, it's still a good idea to set a \`background-color\` on your \`body\` element in global SCSS.
>
> \`\`\`scss
> // global.scss
> body {
>   background-color: #2e3440;
> }
> \`\`\`

\`\`\`svelte
<Theme
  base="dark"
  theme="{{
    colour: { accent: 'var(--tr-light-orange)' },
    font: { family: { hed: 'FreightText, serif' } },
  }}"
>
  <!-- Page content -->
</Theme>
\`\`\`
`,$e=`For some projects, you may need to use typefaces other than the defaults provided by the GraphicsKit.

You will need to:

- Import the fonts in your code.
- Declare the \`font-family\` in the corresponding CSS variables in the Theme.

There are many ways to load fonts, but care should be taken that the font files load first before page render, to avoid layout shifts during font swapping after the font is downloaded. For this reason, we will use \`<link>\` method in the page \`head\` instead of CSS imports.

> ##### Importing custom fonts

> In this sample from [Google Fonts](https://fonts.google.com/specimen/Bebas+Neue), once we have selected the font family, copy the \`<link>\` code.

> \`\`\`html
> <link rel="preconnect" href="https://fonts.googleapis.com" />
> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
> <link
>   href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
>   rel="stylesheet"
> />
> \`\`\`

> In your project, navigate to \`src\` > \`template.html\` and add the copied code in \`head\` section :

> \`\`\`svelte
> <head>
>   <!-- HTML meta -->
>   <link rel="preconnect" href="https://fonts.googleapis.com" />
>   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
>   <link
>     href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
>     rel="stylesheet"
>   />
>
>   %sveltekit.head%
> </head>
> \`\`\`

> Similarly, you can add fonts from [Adobe Typekit](https://fonts.adobe.com/) or custom local fonts with the correct paths to the URL.

You can customise one or more of the pre-defined font families in the Theme. Do not directly apply the font family in your CSS. Always use the CSS variables defined in the Theme so that it configures and reflects across the page design.

\`\`\`svelte
<Theme
  base="light"
  theme="{{
    font: { family: { hed: 'Bebas Neue, sans-serif' } },
  }}"
>
  <!-- Page content -->
</Theme>
\`\`\`
`,de=`To use a background pattern or image, set the background colour property in your custom theme to \`transparent\`...

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
`,ge=`Styles that use \`Theme\`'s CSS variables will always use those set by the nearest parent \`Theme\`. That lets you change the theme for parts of your page by simply wrapping that bit in a _new_ \`Theme\` with different styles.

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
`;function be(m){let e;return{c(){e=k("div"),w(e,"class","fake-graphic svelte-49nwio")},m(n,t){g(n,e,t)},p:I,d(n){n&&b(e)}}}function _e(m){let e,n,t,s,r,a,i,c;return e=new se({props:{hed:"Reuters Graphics Interactive",dek:"The beginning of a beautiful page",section:"Global news",authors:["Jon McClure","Prasanta Kumar Dutta"],publishTime:new Date("2021-09-12").toISOString()}}),t=new W({props:{text:`Bacon ipsum dolor amet cupim porchetta chuck buffalo sirloin beef. Biltong ham brisket tenderloin hamburger doner.

Prosciutto kevin brisket sirloin pork loin shoulder cupim sausage chicken jowl strip steak rump pork ball tip ham hock. Swine pork belly fatback alcatra jowl.

## Brisket sirloin

Shank strip steak turkey shoulder shankle leberkas pork chop, t-bone picanha buffalo ground round burgdoggen ribeye.   
  `}}),r=new ce({props:{title:"Steak tar-tar",description:"Andouille pork loin cow buffalo pork chop shoulder.",notes:"Source: U.S. FDA",$$slots:{default:[be]},$$scope:{ctx:m}}}),i=new W({props:{text:"Bacon ipsum dolor amet cupim porchetta chuck buffalo sirloin beef. Biltong ham brisket tenderloin hamburger doner."}}),{c(){u(e.$$.fragment),n=v(),u(t.$$.fragment),s=v(),u(r.$$.fragment),a=v(),u(i.$$.fragment)},m(l,_){p(e,l,_),g(l,n,_),p(t,l,_),g(l,s,_),p(r,l,_),g(l,a,_),p(i,l,_),c=!0},p(l,_){const y={};_&1&&(y.$$scope={dirty:_,ctx:l}),r.$set(y)},i(l){c||(h(e.$$.fragment,l),h(t.$$.fragment,l),h(r.$$.fragment,l),h(i.$$.fragment,l),c=!0)},o(l){$(e.$$.fragment,l),$(t.$$.fragment,l),$(r.$$.fragment,l),$(i.$$.fragment,l),c=!1},d(l){l&&(b(n),b(s),b(a)),d(e,l),d(t,l),d(r,l),d(i,l)}}}function ye(m){let e,n;return e=new ie({props:{$$slots:{default:[_e]},$$scope:{ctx:m}}}),{c(){u(e.$$.fragment)},m(t,s){p(e,t,s),n=!0},p(t,[s]){const r={};s&1&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}class H extends X{constructor(e){super(),Z(this,e,null,ye,ee,{})}}H.__docgen={version:3,name:"ThemedPage.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function ve(m){let e,n;return e=new H({}),{c(){u(e.$$.fragment)},m(t,s){p(e,t,s),n=!0},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function we(m){let e,n,t;const s=[m[1]];let r={$$slots:{default:[ve]},$$scope:{ctx:m}};for(let a=0;a<s.length;a+=1)r=C(r,s[a]);return n=new T({props:r}),{c(){e=k("div"),u(n.$$.fragment),w(e,"class","reset-article")},m(a,i){g(a,e,i),p(n,e,null),t=!0},p(a,i){const c=i&2?te(s,[ne(a[1])]):{};i&4&&(c.$$scope={dirty:i,ctx:a}),n.$set(c)},i(a){t||(h(n.$$.fragment,a),t=!0)},o(a){$(n.$$.fragment,a),t=!1},d(a){a&&b(e),d(n)}}}function ke(m){let e,n;return e=new H({}),{c(){u(e.$$.fragment)},m(t,s){p(e,t,s),n=!0},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function Te(m){let e,n;return e=new T({props:{base:"dark",theme:{colour:{accent:"var(--tr-light-orange)"},font:{family:{hed:"FreightText, serif"}}},$$slots:{default:[ke]},$$scope:{ctx:m}}}),{c(){u(e.$$.fragment)},m(t,s){p(e,t,s),n=!0},p(t,s){const r={};s&4&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function Se(m){let e,n,t;return n=new se({props:{hed:"Reuters Graphics Interactive",dek:"The beginning of a beautiful page",section:"Global news"}}),{c(){e=k("div"),u(n.$$.fragment),w(e,"class","gfont")},m(s,r){g(s,e,r),p(n,e,null),t=!0},p:I,i(s){t||(h(n.$$.fragment,s),t=!0)},o(s){$(n.$$.fragment,s),t=!1},d(s){s&&b(e),d(n)}}}function Ce(m){let e,n;return e=new T({props:{base:"light",theme:{font:{family:{hed:"Bebas Neue, sans-serif"}}},$$slots:{default:[Se]},$$scope:{ctx:m}}}),{c(){u(e.$$.fragment)},m(t,s){p(e,t,s),n=!0},p(t,s){const r={};s&4&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function De(m){let e,n,t,s;return e=new fe({}),t=new H({}),{c(){u(e.$$.fragment),n=v(),u(t.$$.fragment)},m(r,a){p(e,r,a),g(r,n,a),p(t,r,a),s=!0},i(r){s||(h(e.$$.fragment,r),h(t.$$.fragment,r),s=!0)},o(r){$(e.$$.fragment,r),$(t.$$.fragment,r),s=!1},d(r){r&&b(n),d(e,r),d(t,r)}}}function Be(m){let e,n,t;return n=new T({props:{base:"dark",theme:{colour:{background:"transparent"}},$$slots:{default:[De]},$$scope:{ctx:m}}}),{c(){e=k("div"),u(n.$$.fragment),w(e,"id","pattern-bg"),w(e,"class","svelte-1w0we2f")},m(s,r){g(s,e,r),p(n,e,null),t=!0},p(s,r){const a={};r&4&&(a.$$scope={dirty:r,ctx:s}),n.$set(a)},i(s){t||(h(n.$$.fragment,s),t=!0)},o(s){$(n.$$.fragment,s),t=!1},d(s){s&&b(e),d(n)}}}function Pe(m){let e;return{c(){e=k("div"),e.innerHTML='<p class="svelte-1w0we2f">Sub-sub</p>',w(e,"class","themed svelte-1w0we2f")},m(n,t){g(n,e,t)},p:I,d(n){n&&b(e)}}}function Fe(m){let e;return{c(){e=k("div"),e.innerHTML='<p class="svelte-1w0we2f">Sub-sub sibling</p>',w(e,"class","themed svelte-1w0we2f")},m(n,t){g(n,e,t)},p:I,d(n){n&&b(e)}}}function Ge(m){let e,n,t,s,r,a,i;return s=new T({props:{theme:x.light,$$slots:{default:[Pe]},$$scope:{ctx:m}}}),a=new T({props:{theme:{colour:{background:"steelblue","text-primary":"#fff"},font:{family:{note:"FreightText, serif"}}},base:"dark",$$slots:{default:[Fe]},$$scope:{ctx:m}}}),{c(){e=k("div"),n=k("p"),n.textContent="Sub-theme",t=v(),u(s.$$.fragment),r=v(),u(a.$$.fragment),w(n,"class","svelte-1w0we2f"),w(e,"class","themed svelte-1w0we2f")},m(c,l){g(c,e,l),F(e,n),F(e,t),p(s,e,null),F(e,r),p(a,e,null),i=!0},p(c,l){const _={};l&4&&(_.$$scope={dirty:l,ctx:c}),s.$set(_);const y={};l&4&&(y.$$scope={dirty:l,ctx:c}),a.$set(y)},i(c){i||(h(s.$$.fragment,c),h(a.$$.fragment,c),i=!0)},o(c){$(s.$$.fragment,c),$(a.$$.fragment,c),i=!1},d(c){c&&b(e),d(s),d(a)}}}function Ae(m){let e,n,t,s,r;return s=new T({props:{theme:x.dark,$$slots:{default:[Ge]},$$scope:{ctx:m}}}),{c(){e=k("div"),n=k("p"),n.textContent="Theme",t=v(),u(s.$$.fragment),w(n,"class","svelte-1w0we2f"),w(e,"class","themed svelte-1w0we2f")},m(a,i){g(a,e,i),F(e,n),F(e,t),p(s,e,null),r=!0},p(a,i){const c={};i&4&&(c.$$scope={dirty:i,ctx:a}),s.$set(c)},i(a){r||(h(s.$$.fragment,a),r=!0)},o(a){$(s.$$.fragment,a),r=!1},d(a){a&&b(e),d(s)}}}function Ie(m){let e,n;return e=new T({props:{theme:x.light,$$slots:{default:[Ae]},$$scope:{ctx:m}}}),{c(){u(e.$$.fragment)},m(t,s){p(e,t,s),n=!0},p(t,s){const r={};s&4&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function xe(m){let e,n,t,s,r,a,i,c,l,_,y,M,S,G;const B=[{title:"Theming/Theme"},{component:T},m[0]];let j={};for(let o=0;o<B.length;o+=1)j=C(j,B[o]);e=new le({props:j}),t=new me({props:{$$slots:{default:[we,({args:o})=>({1:o}),({args:o})=>o?2:0]},$$scope:{ctx:m}}}),r=new P({props:{name:"Default",args:{theme:x.light,base:"light"}}});const K=[{name:"Custom theme"},A(he)];let N={$$slots:{default:[Te]},$$scope:{ctx:m}};for(let o=0;o<K.length;o+=1)N=C(N,K[o]);i=new P({props:N});const U=[{name:"Custom Google font"},A($e)];let Y={$$slots:{default:[Ce]},$$scope:{ctx:m}};for(let o=0;o<U.length;o+=1)Y=C(Y,U[o]);l=new P({props:Y});const O=[{name:"Background patterns"},A(de)];let L={$$slots:{default:[Be]},$$scope:{ctx:m}};for(let o=0;o<O.length;o+=1)L=C(L,O[o]);y=new P({props:L});const q=[{name:"Inheritance"},A(ge)];let R={$$slots:{default:[Ie]},$$scope:{ctx:m}};for(let o=0;o<q.length;o+=1)R=C(R,q[o]);return S=new P({props:R}),{c(){u(e.$$.fragment),n=v(),u(t.$$.fragment),s=v(),u(r.$$.fragment),a=v(),u(i.$$.fragment),c=v(),u(l.$$.fragment),_=v(),u(y.$$.fragment),M=v(),u(S.$$.fragment)},m(o,f){p(e,o,f),g(o,n,f),p(t,o,f),g(o,s,f),p(r,o,f),g(o,a,f),p(i,o,f),g(o,c,f),p(l,o,f),g(o,_,f),p(y,o,f),g(o,M,f),p(S,o,f),G=!0},p(o,[f]){const re=f&1?te(B,[B[0],B[1],ne(o[0])]):{};e.$set(re);const E={};f&6&&(E.$$scope={dirty:f,ctx:o}),t.$set(E);const J={};f&4&&(J.$$scope={dirty:f,ctx:o}),i.$set(J);const z={};f&4&&(z.$$scope={dirty:f,ctx:o}),l.$set(z);const Q={};f&4&&(Q.$$scope={dirty:f,ctx:o}),y.$set(Q);const V={};f&4&&(V.$$scope={dirty:f,ctx:o}),S.$set(V)},i(o){G||(h(e.$$.fragment,o),h(t.$$.fragment,o),h(r.$$.fragment,o),h(i.$$.fragment,o),h(l.$$.fragment,o),h(y.$$.fragment,o),h(S.$$.fragment,o),G=!0)},o(o){$(e.$$.fragment,o),$(t.$$.fragment,o),$(r.$$.fragment,o),$(i.$$.fragment,o),$(l.$$.fragment,o),$(y.$$.fragment,o),$(S.$$.fragment,o),G=!1},d(o){o&&(b(n),b(s),b(a),b(c),b(_),b(M)),d(e,o),d(t,o),d(r,o),d(i,o),d(l,o),d(y,o),d(S,o)}}}function He(m){return[{...ue(pe),argTypes:{base:{control:"select",options:["light","dark"]},themes:{control:!1}}}]}class oe extends X{constructor(e){super(),Z(this,e,He,xe,ee,{})}}oe.__docgen={version:3,name:"Theme.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const D=ae(oe,{meta:{title:"Theming/Theme"},stories:{"tpl:default":{name:"default",template:!0,source:`<div class="reset-article">
  <Theme {...args}>
    <ThemedPage />
  </Theme>
</div>`,hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},CustomTheme:{name:"Custom theme",template:!1,source:`<Theme
  base="dark"
  theme="{{
    colour: { accent: 'var(--tr-light-orange)' },
    font: { family: { hed: 'FreightText, serif' } },
  }}"
>
  <ThemedPage />
</Theme>`,hasArgs:!1},CustomGoogleFont:{name:"Custom Google font",template:!1,source:`<Theme
  base="light"
  theme="{{
    font: { family: { hed: 'Bebas Neue, sans-serif' } },
  }}"
>
  <div class="gfont">
    <Headline
      hed="{'Reuters Graphics Interactive'}"
      dek="{'The beginning of a beautiful page'}"
      section="{'Global news'}"
    />
  </div>
</Theme>`,hasArgs:!1},BackgroundPatterns:{name:"Background patterns",template:!1,source:`<div id="pattern-bg">
  <Theme
    base="dark"
    theme="{{
      colour: { background: 'transparent' },
    }}"
  >
    <SiteHeader />
    <ThemedPage />
  </Theme>
</div>`,hasArgs:!1},Inheritance:{name:"Inheritance",template:!1,source:`<Theme theme="{themes.light}">
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
            font: { family: { note: 'FreightText, serif' } },
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
</Theme>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","customiseDocs","customiseFontDocs","patternDocs","inheritanceDocs","ThemedPage","SiteHeader","Theme","themes","Headline","withComponentDocs","withStoryDocs"]}),st=D.meta,ot=["Default","CustomTheme","CustomGoogleFont","BackgroundPatterns","Inheritance"],rt=D.stories.Default,at=D.stories.CustomTheme,lt=D.stories.CustomGoogleFont,mt=D.stories.BackgroundPatterns,it=D.stories.Inheritance;export{mt as BackgroundPatterns,lt as CustomGoogleFont,at as CustomTheme,rt as Default,it as Inheritance,ot as __namedExportsOrder,st as default};
//# sourceMappingURL=Theme.stories-5ec08cf1.js.map
