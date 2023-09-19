import{U as pe,M as fe}from"./chunk-S4VUQJ4A-79fea7c5.js";import{p as Q,j as h}from"./jsx-runtime-fcf8cdde.js";import{R as i,r as O}from"./index-4b4bf420.js";import{c as de,O as ge,n as he}from"./index-5bfbb728.js";import{a as be,c as F}from"./_baseSet-db0c20a6.js";import{l as I,d as Y}from"./light-59dc4e88.js";import{S as j,p as V}from"./prism-7bdf0952.js";import{s as ve}from"./scss-efc2351e.js";import{s as ye}from"./svelte-highlighting-a9ef3a25.js";import{u as G}from"./index-2350147b.js";import"./iframe-2954aaea.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-e04ae519.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./_getTag-edecb89a.js";import"./isSymbol-50749e90.js";import"./isObject-32699ff3.js";import"./toString-25ea340b.js";function _e(a,o,u){return a==null?a:be(a,o,u)}const xe="_customiser_1k8ya_1",Ee="_colourpicker_1k8ya_63",Z={customiser:xe,colourpicker:Ee};var P={},N={px:{px:1,cm:96/2.54,mm:96/25.4,in:96,pt:96/72,pc:16},cm:{px:2.54/96,cm:1,mm:.1,in:2.54,pt:2.54/72,pc:2.54/6},mm:{px:25.4/96,cm:10,mm:1,in:25.4,pt:25.4/72,pc:25.4/6},in:{px:1/96,cm:1/2.54,mm:1/25.4,in:1,pt:1/72,pc:1/6},pt:{px:.75,cm:72/2.54,mm:72/25.4,in:72,pt:1,pc:12},pc:{px:6/96,cm:6/2.54,mm:6/25.4,in:6,pt:6/72,pc:1},deg:{deg:1,grad:.9,rad:180/Math.PI,turn:360},grad:{deg:400/360,grad:1,rad:200/Math.PI,turn:400},rad:{deg:Math.PI/180,grad:Math.PI/200,rad:1,turn:Math.PI*2},turn:{deg:1/360,grad:1/400,rad:.5/Math.PI,turn:1},s:{s:1,ms:1/1e3},ms:{s:1e3,ms:1},Hz:{Hz:1,kHz:1e3},kHz:{Hz:1/1e3,kHz:1},dpi:{dpi:1,dpcm:1/2.54,dppx:1/96},dpcm:{dpi:2.54,dpcm:1,dppx:2.54/96},dppx:{dpi:96,dpcm:96/2.54,dppx:1}},Se=function(a,o,u,m){if(!N.hasOwnProperty(u))throw new Error("Cannot convert to "+u);if(!N[u].hasOwnProperty(o))throw new Error("Cannot convert from "+o+" to "+u);var f=N[u][o]*a;return m!==!1?(m=Math.pow(10,parseInt(m)||5),Math.round(f*m)/m):f};(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.fromRgba=k,a.fromRgb=C,a.fromHsla=T,a.fromHsl=K,a.fromString=U,a.default=void 0;var o=m(de),u=m(Se);function m(e){return e&&e.__esModule?e:{default:e}}function f(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function b(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,n,t){return n&&b(e.prototype,n),t&&b(e,t),e}function d(e,n){return re(e)||M(e,n)||S(e,n)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(e,n){if(e){if(typeof e=="string")return _(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(e,n)}}function _(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function M(e,n){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var t=[],r=!0,c=!1,l=void 0;try{for(var s=e[Symbol.iterator](),p;!(r=(p=s.next()).done)&&(t.push(p.value),!(n&&t.length===n));r=!0);}catch(g){c=!0,l=g}finally{try{!r&&s.return!=null&&s.return()}finally{if(c)throw l}}return t}}function re(e){if(Array.isArray(e))return e}var z=/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})?$/,L=/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])?$/,X=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/,q=/^rgba?\(\s*(\d+)\s+(\d+)\s+(\d+)(?:\s*\/\s*(0|1|0?\.\d+|\d+%))?\s*\)$/,W=/^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/,B=/^rgba?\(\s*(\d+%)\s+(\d+%)\s+(\d+%)(?:\s*\/\s*(0|1|0?\.\d+|\d+%))?\s*\)$/,J=/^hsla?\(\s*(\d+)(deg|rad|grad|turn)?\s*,\s*(\d+)%\s*,\s*(\d+)%(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/;function w(e,n){return e.indexOf(n)>-1}function ae(e,n,t){var r=e/255,c=n/255,l=t/255,s=Math.max(r,c,l),p=Math.min(r,c,l),g=s-p,x=(s+p)/2;if(g===0)return[0,0,x*100];var E=g/(1-Math.abs(2*x-1)),H=function(){switch(s){case r:return(c-l)/g%6;case c:return(l-r)/g+2;default:return(r-c)/g+4}}();return[H*60,E*100,x*100]}function ne(e,n,t){var r=e/60,c=n/100,l=t/100,s=(1-Math.abs(2*l-1))*c,p=s*(1-Math.abs(r%2-1)),g=l-s/2,x=function(){return r<1?[s,p,0]:r<2?[p,s,0]:r<3?[0,s,p]:r<4?[0,p,s]:r<5?[p,0,s]:[s,0,p]}(),E=d(x,3),H=E[0],me=E[1],ue=E[2];return[(H+g)*255,(me+g)*255,(ue+g)*255]}var se=function(){function e(n){var t=d(n,4),r=t[0],c=t[1],l=t[2],s=t[3];f(this,e),this.values=[Math.max(Math.min(parseInt(r,10),255),0),Math.max(Math.min(parseInt(c,10),255),0),Math.max(Math.min(parseInt(l,10),255),0),s==null?1:Math.max(Math.min(parseFloat(s),255),0)]}return v(e,[{key:"toRgbString",value:function(){var t=d(this.values,4),r=t[0],c=t[1],l=t[2],s=t[3];return s===1?"rgb(".concat(r,", ").concat(c,", ").concat(l,")"):"rgba(".concat(r,", ").concat(c,", ").concat(l,", ").concat(s,")")}},{key:"toHslString",value:function(){var t=this.toHslaArray(),r=d(t,4),c=r[0],l=r[1],s=r[2],p=r[3];return p===1?"hsl(".concat(c,", ").concat(l,"%, ").concat(s,"%)"):"hsla(".concat(c,", ").concat(l,"%, ").concat(s,"%, ").concat(p,")")}},{key:"toHexString",value:function(){var t=d(this.values,4),r=t[0],c=t[1],l=t[2],s=t[3];return r=Number(r).toString(16).padStart(2,"0"),c=Number(c).toString(16).padStart(2,"0"),l=Number(l).toString(16).padStart(2,"0"),s=s<1?parseInt(s*255,10).toString(16).padStart(2,"0"):"","#".concat(r).concat(c).concat(l).concat(s)}},{key:"toRgbaArray",value:function(){return this.values}},{key:"toHslaArray",value:function(){var t=d(this.values,4),r=t[0],c=t[1],l=t[2],s=t[3],p=ae(r,c,l),g=d(p,3),x=g[0],E=g[1],H=g[2];return[x,E,H,s]}}]),e}();function k(e){var n=d(e,4),t=n[0],r=n[1],c=n[2],l=n[3];return new se([t,r,c,l])}function C(e){var n=d(e,3),t=n[0],r=n[1],c=n[2];return k([t,r,c,1])}function T(e){var n=d(e,4),t=n[0],r=n[1],c=n[2],l=n[3],s=ne(t,r,c),p=d(s,3),g=p[0],x=p[1],E=p[2];return k([g,x,E,l])}function K(e){var n=d(e,3),t=n[0],r=n[1],c=n[2];return T([t,r,c,1])}function oe(e){var n=z.exec(e)||L.exec(e),t=d(n,5),r=t[1],c=t[2],l=t[3],s=t[4];return r=parseInt(r.length<2?r.repeat(2):r,16),c=parseInt(c.length<2?c.repeat(2):c,16),l=parseInt(l.length<2?l.repeat(2):l,16),s=s&&(parseInt(s.length<2?s.repeat(2):s,16)/255).toPrecision(1)||1,k([r,c,l,s])}function ce(e){var n=X.exec(e)||W.exec(e)||q.exec(e)||B.exec(e),t=d(n,5),r=t[1],c=t[2],l=t[3],s=t[4];return r=w(r,"%")?parseInt(r,10)*255/100:parseInt(r,10),c=w(c,"%")?parseInt(c,10)*255/100:parseInt(c,10),l=w(l,"%")>0?parseInt(l,10)*255/100:parseInt(l,10),s=s===void 0?1:parseFloat(s)/(w(s,"%")?100:1),k([r,c,l,s])}function le(e){var n=J.exec(e),t=d(n,6),r=t[1],c=t[2],l=t[3],s=t[4],p=t[5];return c=c||"deg",r=(0,u.default)(parseFloat(r),c,"deg"),l=parseFloat(l),s=parseFloat(s),p=p===void 0?1:parseFloat(p)/(w(p,"%")?100:1),T([r,l,s,p])}function U(e){return o.default[e]?C(o.default[e]):z.test(e)||L.test(e)?oe(e):X.test(e)||W.test(e)||q.test(e)||B.test(e)?ce(e):J.test(e)?le(e):null}var ie={fromString:U,fromRgb:C,fromRgba:k,fromHsl:K,fromHsla:T};a.default=ie})(P);const ke=({colour:a,onChange:o})=>i.createElement("div",{className:Z.colourpicker},i.createElement(ge,{color:P.fromString(a.trim()).toHexString(),onChange:o,alpha:!0,prefixed:!0}),i.createElement(he,{color:P.fromString(a.trim()).toHexString(),onChange:o})),we=({value:a,onChange:o})=>!/var\(.*\)/i.test(a)&&CSS.supports("color",a)?i.createElement(ke,{colour:a,onChange:o}):i.createElement("input",{type:"text",value:a,onChange:u=>o(u.target.value)}),He=({value:a,name:o,map:u,themeName:m,theme:f,setTheme:b})=>{const[v,d]=O.useState(!1),y=_=>{const M=F(f);_e(M,u,_),b(M)},S=!/var\(.*\)/i.test(a)&&CSS.supports("color",a);return i.createElement("div",{className:"value"},i.createElement("label",null,i.createElement("div",null,i.createElement("button",{className:v?"open":"",onClick:()=>d(_=>!_)},i.createElement("div",null,i.createElement("span",{className:"material-symbols-outlined"},v?"expand_less":"expand_more"))," ",S&&i.createElement("div",{style:{background:a}})," ",o))),v&&i.createElement("div",{className:"input-container"},i.createElement(we,{value:a,key:m+u,onChange:y})))},ee=({value:a,name:o,map:u,themeName:m,setTheme:f,theme:b})=>{const[v,d]=O.useState(!1);return i.createElement("div",{className:"key"},i.createElement("button",{className:v?"open":"",onClick:()=>d(y=>!y)},i.createElement("div",null,i.createElement("span",{className:"material-symbols-outlined"},v?"expand_less":"expand_more"))," ",o),Object.entries(a).map(([y,S])=>{const _={theme:b,setTheme:f,name:y,themeName:m,map:u+"."+y,value:S,key:m+u+y};return v?typeof S=="object"?i.createElement(ee,{..._}):i.createElement(He,{..._}):null}))},Oe=({theme:a,themeName:o,setTheme:u})=>i.createElement("div",{className:Z.customiser},i.createElement("p",null,"Pick parts of the theme to customise:"),Object.entries(a).map(([m,f])=>{const b={theme:a,setTheme:u,themeName:o,name:m,map:m,value:f,key:o+m};return i.createElement(ee,{...b})})),Me="_newtheme_1x4js_1",Te={newtheme:Me},$=a=>a instanceof Date,Ie=a=>Object.keys(a).length===0,D=a=>a!=null&&typeof a=="object",je=(a,...o)=>Object.prototype.hasOwnProperty.call(a,...o),R=a=>D(a)&&Ie(a),Ae=()=>Object.create(null),te=(a,o)=>a===o?{}:!D(a)||!D(o)?o:$(a)||$(o)?a.valueOf()==o.valueOf()?{}:o:Object.keys(o).reduce((u,m)=>{if(je(a,m)){const f=te(a[m],o[m]);return R(f)&&!$(f)&&(R(a[m])||!R(o[m]))||(u[m]=f),u}return u},Ae());j.registerLanguage("svelte",ye);j.registerLanguage("scss",ve);const Ce=({theme:a,themeName:o})=>{const m=te(o==="light"?I:Y,a),f=a.colour.background!==I.colour.background;return i.createElement("div",{className:Te.newtheme},i.createElement("p",null,"Use the code below to adapt the ",i.createElement("code",null,"Theme")," component for your new design:"),i.createElement(j,{language:"svelte",style:V},`<Theme
  base="${o}"
  theme={${JSON.stringify(m,null,2).replaceAll('"',"'")}}
>
  <!-- ... -->
</Theme>
      `),f&&i.createElement(j,{language:"scss",style:V,customStyle:{maxHeight:"140px"}},`// global.scss
body {
  background-color: ${a.colour.background};
}`))},Ne={switch:"_switch_xd6eq_1"},$e=({themeName:a,setThemeName:o})=>i.createElement("div",{className:Ne.switch},i.createElement("p",null,"Choose a base theme:"),i.createElement("div",{className:"container"},i.createElement("button",{className:a==="light"?"active":"",onClick:()=>o("light")},i.createElement("span",{className:"material-symbols-outlined"},"light_mode")),i.createElement("button",{className:a==="dark"?"active":"",onClick:()=>o("dark")},i.createElement("span",{className:"material-symbols-outlined"},"dark_mode")))),Re="_themebuilder_13kn1_1",Fe={themebuilder:Re},Pe=a=>{const[o,u]=O.useState("light"),[m,f]=O.useState(F(I));return O.useEffect(()=>{f(F(o==="light"?I:Y))},[o]),i.createElement(pe,null,i.createElement("div",{className:Fe.themebuilder},i.createElement("div",{className:"column"},i.createElement($e,{setThemeName:u,themeName:o}),i.createElement(Oe,{theme:m,setTheme:f,themeName:o,key:o})),i.createElement("div",{className:"column"},i.createElement(Ce,{theme:m,themeName:o}))))};function De(a={}){const{wrapper:o}=Object.assign({},G(),a.components);return o?h.jsx(o,{...a,children:h.jsx(u,{})}):u();function u(){const m=Object.assign({p:"p",img:"img",h1:"h1",code:"code"},G(),a.components);return h.jsxs(h.Fragment,{children:[h.jsx(fe,{title:"Theming/Theme builder",parameters:{...Q}}),`
`,h.jsx(m.p,{children:h.jsx(m.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,h.jsx(m.h1,{id:"theme-builder",children:"Theme builder"}),`
`,h.jsxs(m.p,{children:["Use this tool to create a custom theme for your page then update the ",h.jsx(m.code,{children:"Theme"})," component in your project."]}),`
`,h.jsx(Pe,{})]})}}const ze=()=>{throw new Error("Docs-only story")};ze.parameters={docsOnly:!0};const A={title:"Theming/Theme builder",parameters:{...Q},tags:["stories-mdx"],includeStories:["__page"]};A.parameters=A.parameters||{};A.parameters.docs={...A.parameters.docs||{},page:De};const ct=["__page"];export{ct as __namedExportsOrder,ze as __page,A as default};
//# sourceMappingURL=theme-builder.stories-e090819c.js.map