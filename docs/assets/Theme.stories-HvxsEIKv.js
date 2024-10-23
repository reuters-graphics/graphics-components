import{S as X,i as Z,s as ee,c as u,m as f,t as h,a as $,d,o as k,h as g,k as b,q as T,f as v,n as I,l as C,j as F}from"./index-C9aKRT5A.js";import{g as te,a as ne}from"./spread-CgU5AtxT.js";import{p as ae,M as le,T as ie,S as P,a as A,w as me}from"./collect-stories-ceFdpR5E.js";import{A as ce}from"./Article-5DKLq1Pp.js";import{H as se}from"./Headline-B2xktHpB.js";import{B as W}from"./BodyText-DOLlE-fm.js";import{G as pe}from"./GraphicBlock-Dy6mUqc4.js";import{S as ue}from"./SiteHeader-CT2FhxwH.js";import{T as w,t as x}from"./Theme-D2CRvq-y.js";import"./Block-C7biTRWl.js";import"./Byline-CgwnbxHA.js";import"./each-D6YF6ztN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./journalize-K6hK94UL.js";import"./Markdown-BNYiGaXJ.js";import"./PaddingReset-CiOBBFtT.js";import"./ReutersLogo-CDQ5t4Ty.js";import"./index-TQx7jkZs.js";import"./time-Dt9E6jI9.js";import"./advancedFormat-D5cdT3Ux.js";import"./dayjs.min-BIwLhz4I.js";import"./flatten-9xFT-BQ8.js";const fe=`The \`Theme\` component wraps your page content and uses [CSS variables](../?path=/docs/scss-css-variables--page) to set major colour and typography styles for your page. All of the components in this library will use those CSS variables for styling by default.

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
`;function be(i){let e;return{c(){e=T("div"),v(e,"class","fake-graphic svelte-a154z8")},m(n,t){g(n,e,t)},p:I,d(n){n&&b(e)}}}function ye(i){let e,n,t,s,r,a,m,c;return e=new se({props:{hed:"Reuters Graphics Interactive",dek:"The beginning of a beautiful page",section:"Global news",authors:["Jon McClure","Prasanta Kumar Dutta"],publishTime:new Date("2021-09-12").toISOString()}}),t=new W({props:{text:`Bacon ipsum dolor amet cupim porchetta chuck buffalo sirloin beef. Biltong ham brisket tenderloin hamburger doner.

Prosciutto kevin brisket sirloin pork loin shoulder cupim sausage chicken jowl strip steak rump pork ball tip ham hock. Swine pork belly fatback alcatra jowl.

## Brisket sirloin

Shank strip steak turkey shoulder shankle leberkas pork chop, t-bone picanha buffalo ground round burgdoggen ribeye.   
  `}}),r=new pe({props:{title:"Steak tar-tar",description:"Andouille pork loin cow buffalo pork chop shoulder.",notes:"Source: U.S. FDA",$$slots:{default:[be]},$$scope:{ctx:i}}}),m=new W({props:{text:"Bacon ipsum dolor amet cupim porchetta chuck buffalo sirloin beef. Biltong ham brisket tenderloin hamburger doner."}}),{c(){u(e.$$.fragment),n=k(),u(t.$$.fragment),s=k(),u(r.$$.fragment),a=k(),u(m.$$.fragment)},m(l,y){f(e,l,y),g(l,n,y),f(t,l,y),g(l,s,y),f(r,l,y),g(l,a,y),f(m,l,y),c=!0},p(l,y){const _={};y&1&&(_.$$scope={dirty:y,ctx:l}),r.$set(_)},i(l){c||(h(e.$$.fragment,l),h(t.$$.fragment,l),h(r.$$.fragment,l),h(m.$$.fragment,l),c=!0)},o(l){$(e.$$.fragment,l),$(t.$$.fragment,l),$(r.$$.fragment,l),$(m.$$.fragment,l),c=!1},d(l){l&&(b(n),b(s),b(a)),d(e,l),d(t,l),d(r,l),d(m,l)}}}function _e(i){let e,n;return e=new ce({props:{$$slots:{default:[ye]},$$scope:{ctx:i}}}),{c(){u(e.$$.fragment)},m(t,s){f(e,t,s),n=!0},p(t,[s]){const r={};s&1&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}class H extends X{constructor(e){super(),Z(this,e,null,_e,ee,{})}}H.__docgen={version:3,name:"ThemedPage.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function ke(i){let e,n;return e=new H({}),{c(){u(e.$$.fragment)},m(t,s){f(e,t,s),n=!0},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function ve(i){let e,n,t;const s=[i[1]];let r={$$slots:{default:[ke]},$$scope:{ctx:i}};for(let a=0;a<s.length;a+=1)r=C(r,s[a]);return n=new w({props:r}),{c(){e=T("div"),u(n.$$.fragment),v(e,"class","reset-article")},m(a,m){g(a,e,m),f(n,e,null),t=!0},p(a,m){const c=m&2?te(s,[ne(a[1])]):{};m&4&&(c.$$scope={dirty:m,ctx:a}),n.$set(c)},i(a){t||(h(n.$$.fragment,a),t=!0)},o(a){$(n.$$.fragment,a),t=!1},d(a){a&&b(e),d(n)}}}function Te(i){let e,n;return e=new H({}),{c(){u(e.$$.fragment)},m(t,s){f(e,t,s),n=!0},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function we(i){let e,n;return e=new w({props:{base:"dark",theme:{colour:{accent:"var(--tr-light-orange)"},font:{family:{hed:"FreightText, serif"}}},$$slots:{default:[Te]},$$scope:{ctx:i}}}),{c(){u(e.$$.fragment)},m(t,s){f(e,t,s),n=!0},p(t,s){const r={};s&4&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function Se(i){let e,n,t;return n=new se({props:{hed:"Reuters Graphics Interactive",dek:"The beginning of a beautiful page",section:"Global news"}}),{c(){e=T("div"),u(n.$$.fragment),v(e,"class","gfont")},m(s,r){g(s,e,r),f(n,e,null),t=!0},p:I,i(s){t||(h(n.$$.fragment,s),t=!0)},o(s){$(n.$$.fragment,s),t=!1},d(s){s&&b(e),d(n)}}}function Ce(i){let e,n;return e=new w({props:{base:"light",theme:{font:{family:{hed:"Bebas Neue, sans-serif"}}},$$slots:{default:[Se]},$$scope:{ctx:i}}}),{c(){u(e.$$.fragment)},m(t,s){f(e,t,s),n=!0},p(t,s){const r={};s&4&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function De(i){let e,n,t,s;return e=new ue({}),t=new H({}),{c(){u(e.$$.fragment),n=k(),u(t.$$.fragment)},m(r,a){f(e,r,a),g(r,n,a),f(t,r,a),s=!0},i(r){s||(h(e.$$.fragment,r),h(t.$$.fragment,r),s=!0)},o(r){$(e.$$.fragment,r),$(t.$$.fragment,r),s=!1},d(r){r&&b(n),d(e,r),d(t,r)}}}function Be(i){let e,n,t;return n=new w({props:{base:"dark",theme:{colour:{background:"transparent"}},$$slots:{default:[De]},$$scope:{ctx:i}}}),{c(){e=T("div"),u(n.$$.fragment),v(e,"id","pattern-bg"),v(e,"class","svelte-t2y6yp")},m(s,r){g(s,e,r),f(n,e,null),t=!0},p(s,r){const a={};r&4&&(a.$$scope={dirty:r,ctx:s}),n.$set(a)},i(s){t||(h(n.$$.fragment,s),t=!0)},o(s){$(n.$$.fragment,s),t=!1},d(s){s&&b(e),d(n)}}}function Pe(i){let e;return{c(){e=T("div"),e.innerHTML='<p class="svelte-t2y6yp">Sub-sub</p>',v(e,"class","themed svelte-t2y6yp")},m(n,t){g(n,e,t)},p:I,d(n){n&&b(e)}}}function Fe(i){let e;return{c(){e=T("div"),e.innerHTML='<p class="svelte-t2y6yp">Sub-sub sibling</p>',v(e,"class","themed svelte-t2y6yp")},m(n,t){g(n,e,t)},p:I,d(n){n&&b(e)}}}function Ge(i){let e,n,t,s,r,a,m;return s=new w({props:{theme:x.light,$$slots:{default:[Pe]},$$scope:{ctx:i}}}),a=new w({props:{theme:{colour:{background:"steelblue","text-primary":"#fff"},font:{family:{note:"FreightText, serif"}}},base:"dark",$$slots:{default:[Fe]},$$scope:{ctx:i}}}),{c(){e=T("div"),n=T("p"),n.textContent="Sub-theme",t=k(),u(s.$$.fragment),r=k(),u(a.$$.fragment),v(n,"class","svelte-t2y6yp"),v(e,"class","themed svelte-t2y6yp")},m(c,l){g(c,e,l),F(e,n),F(e,t),f(s,e,null),F(e,r),f(a,e,null),m=!0},p(c,l){const y={};l&4&&(y.$$scope={dirty:l,ctx:c}),s.$set(y);const _={};l&4&&(_.$$scope={dirty:l,ctx:c}),a.$set(_)},i(c){m||(h(s.$$.fragment,c),h(a.$$.fragment,c),m=!0)},o(c){$(s.$$.fragment,c),$(a.$$.fragment,c),m=!1},d(c){c&&b(e),d(s),d(a)}}}function Ae(i){let e,n,t,s,r;return s=new w({props:{theme:x.dark,$$slots:{default:[Ge]},$$scope:{ctx:i}}}),{c(){e=T("div"),n=T("p"),n.textContent="Theme",t=k(),u(s.$$.fragment),v(n,"class","svelte-t2y6yp"),v(e,"class","themed svelte-t2y6yp")},m(a,m){g(a,e,m),F(e,n),F(e,t),f(s,e,null),r=!0},p(a,m){const c={};m&4&&(c.$$scope={dirty:m,ctx:a}),s.$set(c)},i(a){r||(h(s.$$.fragment,a),r=!0)},o(a){$(s.$$.fragment,a),r=!1},d(a){a&&b(e),d(s)}}}function Ie(i){let e,n;return e=new w({props:{theme:x.light,$$slots:{default:[Ae]},$$scope:{ctx:i}}}),{c(){u(e.$$.fragment)},m(t,s){f(e,t,s),n=!0},p(t,s){const r={};s&4&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function xe(i){let e,n,t,s,r,a,m,c,l,y,_,M,S,G;const B=[{title:"Theming/Theme"},{component:w},i[0]];let j={};for(let o=0;o<B.length;o+=1)j=C(j,B[o]);e=new le({props:j}),t=new ie({props:{$$slots:{default:[ve,({args:o})=>({1:o}),({args:o})=>o?2:0]},$$scope:{ctx:i}}}),r=new P({props:{name:"Default",args:{theme:x.light,base:"light"}}});const K=[{name:"Custom theme"},A(he)];let N={$$slots:{default:[we]},$$scope:{ctx:i}};for(let o=0;o<K.length;o+=1)N=C(N,K[o]);m=new P({props:N});const U=[{name:"Custom Google font"},A($e)];let Y={$$slots:{default:[Ce]},$$scope:{ctx:i}};for(let o=0;o<U.length;o+=1)Y=C(Y,U[o]);l=new P({props:Y});const q=[{name:"Background patterns"},A(de)];let L={$$slots:{default:[Be]},$$scope:{ctx:i}};for(let o=0;o<q.length;o+=1)L=C(L,q[o]);_=new P({props:L});const O=[{name:"Inheritance"},A(ge)];let R={$$slots:{default:[Ie]},$$scope:{ctx:i}};for(let o=0;o<O.length;o+=1)R=C(R,O[o]);return S=new P({props:R}),{c(){u(e.$$.fragment),n=k(),u(t.$$.fragment),s=k(),u(r.$$.fragment),a=k(),u(m.$$.fragment),c=k(),u(l.$$.fragment),y=k(),u(_.$$.fragment),M=k(),u(S.$$.fragment)},m(o,p){f(e,o,p),g(o,n,p),f(t,o,p),g(o,s,p),f(r,o,p),g(o,a,p),f(m,o,p),g(o,c,p),f(l,o,p),g(o,y,p),f(_,o,p),g(o,M,p),f(S,o,p),G=!0},p(o,[p]){const re=p&1?te(B,[B[0],B[1],ne(o[0])]):{};e.$set(re);const z={};p&6&&(z.$$scope={dirty:p,ctx:o}),t.$set(z);const E={};p&4&&(E.$$scope={dirty:p,ctx:o}),m.$set(E);const J={};p&4&&(J.$$scope={dirty:p,ctx:o}),l.$set(J);const Q={};p&4&&(Q.$$scope={dirty:p,ctx:o}),_.$set(Q);const V={};p&4&&(V.$$scope={dirty:p,ctx:o}),S.$set(V)},i(o){G||(h(e.$$.fragment,o),h(t.$$.fragment,o),h(r.$$.fragment,o),h(m.$$.fragment,o),h(l.$$.fragment,o),h(_.$$.fragment,o),h(S.$$.fragment,o),G=!0)},o(o){$(e.$$.fragment,o),$(t.$$.fragment,o),$(r.$$.fragment,o),$(m.$$.fragment,o),$(l.$$.fragment,o),$(_.$$.fragment,o),$(S.$$.fragment,o),G=!1},d(o){o&&(b(n),b(s),b(a),b(c),b(y),b(M)),d(e,o),d(t,o),d(r,o),d(m,o),d(l,o),d(_,o),d(S,o)}}}function He(i){return[{...me(fe),argTypes:{base:{control:"select",options:["light","dark"]},themes:{control:!1}}}]}class oe extends X{constructor(e){super(),Z(this,e,He,xe,ee,{})}}oe.__docgen={version:3,name:"Theme.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const D=ae(oe,{meta:{title:"Theming/Theme"},stories:{"tpl:default":{name:"default",template:!0,source:`<div class="reset-article">
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
</Theme>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","customiseDocs","customiseFontDocs","patternDocs","inheritanceDocs","ThemedPage","SiteHeader","Theme","themes","Headline","withComponentDocs","withStoryDocs"]}),ot=D.meta,rt=["Default","CustomTheme","CustomGoogleFont","BackgroundPatterns","Inheritance"],at=D.stories.Default,lt=D.stories.CustomTheme,it=D.stories.CustomGoogleFont,mt=D.stories.BackgroundPatterns,ct=D.stories.Inheritance;export{mt as BackgroundPatterns,it as CustomGoogleFont,lt as CustomTheme,at as Default,ct as Inheritance,rt as __namedExportsOrder,ot as default};
