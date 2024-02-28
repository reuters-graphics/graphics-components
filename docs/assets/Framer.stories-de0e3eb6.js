import{S as ee,i as te,s as le,P as at,o as z,z as ne,y as T,g as B,b as c,c as Q,d as U,e as W,m as H,N as L,A as De,t as O,h as V,f as j,j as R,O as oe,a3 as We,E as $,l as Me,C as X,a4 as be,X as he,Y as rt,u as Le,p as ze,q as Ee,a2 as se,K as Ie,D as Oe,L as ue,a1 as Ve,Z as P,R as pe,r as Z,T as _e,v as Te,w as Ce,x as ot,k as Ne,V as ut,M as ft,H as dt}from"./index-43e9a565.js";import{g as fe,a as qe}from"./spread-8a54911c.js";import{w as ct,p as mt,M as bt,T as ht,S as pt}from"./collect-stories-23d08061.js";import{F as ae}from"./fa-3f189960.js";import{e as _t,g as Ue,c as gt}from"./index.es-a32769a3.js";import{p as yt}from"./pym.v1-7344f633.js";import{u as kt}from"./index-b62d9356.js";import{e as ge}from"./each-e59479a4.js";import{w as vt}from"./withParams-47e2ab71.js";import"./_commonjsHelpers-de833af9.js";const wt=`An embed tool for development in the Graphics Kit.

\`\`\`svelte
<script>
  import { Framer } from '@reuters-graphics/graphics-components';

  const embeds = ['/embeds/my-chart/index.html'];
<\/script>

<Framer embeds="{embeds}" />
\`\`\`
`,K=ct(660);function Ft(e){let t,l,a,s=(e[7]||e[3])+"",n,i,f,d,u,h,F,y,w,_,p,S,g,k,A,E,v,D,o;return at(e[21]),h=new ae({props:{icon:_t,fw:!0}}),A=new ae({props:{icon:Ue,fw:!0}}),{c(){t=z("div"),l=z("div"),a=z("div"),n=ne(s),i=ne("px"),d=T(),u=z("button"),B(h.$$.fragment),y=T(),w=z("div"),_=z("div"),p=T(),S=z("div"),g=T(),k=z("button"),B(A.$$.fragment),c(a,"class","label svelte-g53f92"),c(a,"style",f=`opacity: ${e[5]||e[6]?1:0};`),c(u,"class","icon left svelte-g53f92"),u.disabled=F=e[3]===e[1],c(_,"class","track svelte-g53f92"),c(S,"class","handle svelte-g53f92"),c(S,"tabindex","0"),c(S,"role","button"),Q(S,"left","calc("+e[8]*100+"% - 5px)"),c(w,"class","slider-container svelte-g53f92"),c(k,"class","icon right svelte-g53f92"),k.disabled=E=e[3]===e[2],c(l,"class","slider svelte-g53f92"),c(t,"id","resizer"),c(t,"class","svelte-g53f92")},m(m,M){U(m,t,M),W(t,l),W(l,a),W(a,n),W(a,i),W(l,d),W(l,u),H(h,u,null),W(l,y),W(l,w),W(w,_),W(w,p),W(w,S),e[22](w),W(l,g),W(l,k),H(A,k,null),v=!0,D||(o=[L(window,"mousemove",e[9]),L(window,"mouseup",e[12]),L(window,"keydown",e[10]),L(window,"resize",e[21]),L(u,"click",e[16]),L(u,"focus",e[13]),L(u,"mouseover",e[13]),L(u,"mouseleave",e[14]),L(S,"mousedown",e[11]),L(S,"focus",e[13]),L(S,"blur",e[14]),L(k,"click",e[15]),L(k,"focus",e[13]),L(k,"mouseover",e[13]),L(k,"mouseleave",e[14])],D=!0)},p(m,[M]){(!v||M&136)&&s!==(s=(m[7]||m[3])+"")&&De(n,s),(!v||M&96&&f!==(f=`opacity: ${m[5]||m[6]?1:0};`))&&c(a,"style",f),(!v||M&10&&F!==(F=m[3]===m[1]))&&(u.disabled=F),(!v||M&256)&&Q(S,"left","calc("+m[8]*100+"% - 5px)"),(!v||M&12&&E!==(E=m[3]===m[2]))&&(k.disabled=E)},i(m){v||(O(h.$$.fragment,m),O(A.$$.fragment,m),v=!0)},o(m){V(h.$$.fragment,m),V(A.$$.fragment,m),v=!1},d(m){m&&j(t),R(h),e[22](null),R(A),D=!1,oe(o)}}}const x=90;function St(e,t,l){let a,s,n,i,f;We(e,K,b=>l(3,f=b));let{breakpoints:d=[330,510,660,930,1200]}=t,{maxFrameWidth:u=1200}=t,{minFrameWidth:h=320}=t,F,y=1200,w=!1,_=!1;const p=b=>Math.ceil(b/5)*5,S=()=>Math.round(n*i+a);let g=null;const k=b=>{if(!w||!F)return;const{left:N}=F.getBoundingClientRect();l(8,i=Math.min(Math.max(0,b.pageX-N),x)/x),l(7,g=p(S()))},A=b=>{if(!_)return;const{keyCode:N}=b,Y=x/n;N===39?l(8,i=Math.min(1,i+Y/x)):N===37&&l(8,i=Math.max(0,i-Y/x)),K.set(S())},E=b=>{l(5,w=!0),k(b)},v=()=>{l(5,w=!1),l(7,g=null),K.set(p(S()))},D=()=>{l(6,_=!0)},o=()=>{l(6,_=!1)},m=()=>{const b=d.filter(N=>N<=s).filter(N=>N>f);b.length===0?K.set(s):K.set(b[0])},M=()=>{const b=d.filter(N=>N<f);b.length===0?K.set(a):K.set(b.slice(-1)[0])};function C(){l(0,y=window.innerWidth)}function q(b){$[b?"unshift":"push"](()=>{F=b,l(4,F)})}return e.$$set=b=>{"breakpoints"in b&&l(17,d=b.breakpoints),"maxFrameWidth"in b&&l(18,u=b.maxFrameWidth),"minFrameWidth"in b&&l(19,h=b.minFrameWidth)},e.$$.update=()=>{e.$$.dirty&524288&&l(1,a=h),e.$$.dirty&262145&&l(2,s=Math.min(y-70,u)),e.$$.dirty&6&&l(20,n=s-a),e.$$.dirty&12&&f>s&&K.set(s),e.$$.dirty&1048586&&l(8,i=(f-a)/n)},[y,a,s,f,F,w,_,g,i,k,A,E,v,D,o,m,M,d,u,h,n,C,q]}class je extends ee{constructor(t){super(),te(this,t,St,Ft,le,{breakpoints:17,maxFrameWidth:18,minFrameWidth:19})}}je.__docgen={version:3,name:"index.svelte",data:[{visibility:"public",description:null,keywords:[],name:"breakpoints",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"maxFrameWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1200},{visibility:"public",description:null,keywords:[],name:"minFrameWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:320}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const At=e=>{const t=e.map(n=>n.replace(/\?.+$/,"")).map(n=>n.replace(/index\.html$/,"")).map(n=>n.replace(/^http[s]*:\/\/[\w.]+\.com/,""));if(t.length===1)return[t[0].split("/").filter(n=>n).slice(-1)[0]];const l=t[0];let a=0;for(const n in l.split("/")){const i=l.split("/")[n];if(t.every(d=>d.split("/")[n]===i))a+=1;else break}if(a===l.split("/").length)return t;let s=0;for(const n in l.split("/").reverse()){const i=l.split("/").reverse()[n];if(t.every(d=>d.split("/").reverse()[n]===i))s+=1;else break}return t.map(n=>s>0?n.split("/").slice(a,s*-1).join("/"):n.split("/").slice(a).join("/"))},J={};J.simpleFilter=function(e,t){return t.filter(function(l){return J.test(e,l)})};J.test=function(e,t){return J.match(e,t)!==null};J.match=function(e,t,l){l=l||{};let a=0;const s=[],n=t.length;let i=0,f=0;const d=l.pre||"",u=l.post||"",h=l.caseSensitive&&t||t.toLowerCase();let F;e=l.caseSensitive&&e||e.toLowerCase();for(let y=0;y<n;y++)F=t[y],h[y]===e[a]?(F=d+F+u,a+=1,f+=1+f):f=0,i+=f,s[s.length]=F;return a===e.length?(i=h===e?1/0:i,{rendered:s.join(""),score:i}):null};J.filter=function(e,t,l){return!t||t.length===0?[]:typeof e!="string"?t:(l=l||{},t.reduce(function(a,s,n,i){let f=s;l.extract&&(f=l.extract(s));const d=J.match(e,f,l);return d!=null&&(a[a.length]={string:d.rendered,score:d.score,index:n,original:s}),a},[]).sort(function(a,s){const n=s.score-a.score;return n||a.index-s.index}))};const Dt=e=>({}),ye=e=>({});function Wt(e){let t;return{c(){t=ne(e[2])},m(l,a){U(l,t,a)},p(l,a){a&4&&De(t,l[2])},d(l){l&&j(t)}}}function Mt(e){let t,l,a,s,n,i,f,d,u,h,F;const y=e[10].label,w=Me(y,e,e[9],ye),_=w||Wt(e);let p=[{name:"search"},{type:"search"},{placeholder:"Search..."},{autocomplete:"off"},{spellcheck:"false"},e[6],{id:e[4]}],S={};for(let g=0;g<p.length;g+=1)S=X(S,p[g]);return{c(){t=z("form"),l=z("label"),_&&_.c(),n=T(),i=z("input"),c(l,"id",a=e[4]+"-label"),c(l,"for",e[4]),c(l,"style",s=e[3]&&"position: absolute;height: 1px;width: 1px;overflow: hidden;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);white-space: nowrap;"),be(i,S),c(t,"data-svelte-search",""),c(t,"role",f=e[5]?null:"search"),c(t,"aria-labelledby",d=e[5]?null:e[4])},m(g,k){U(g,t,k),W(t,l),_&&_.m(l,null),W(t,n),W(t,i),i.autofocus&&i.focus(),e[17](i),he(i,e[0]),u=!0,h||(F=[L(i,"input",e[18]),L(i,"input",e[12]),L(i,"change",e[13]),L(i,"focus",e[14]),L(i,"blur",e[15]),L(i,"keydown",e[16]),L(t,"submit",rt(e[11]))],h=!0)},p(g,[k]){w?w.p&&(!u||k&512)&&Le(w,y,g,g[9],u?Ee(y,g[9],k,Dt):ze(g[9]),ye):_&&_.p&&(!u||k&4)&&_.p(g,u?k:-1),(!u||k&16&&a!==(a=g[4]+"-label"))&&c(l,"id",a),(!u||k&16)&&c(l,"for",g[4]),(!u||k&8&&s!==(s=g[3]&&"position: absolute;height: 1px;width: 1px;overflow: hidden;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);white-space: nowrap;"))&&c(l,"style",s),be(i,S=fe(p,[{name:"search"},{type:"search"},{placeholder:"Search..."},{autocomplete:"off"},{spellcheck:"false"},k&64&&g[6],(!u||k&16)&&{id:g[4]}])),k&1&&i.value!==g[0]&&he(i,g[0]),(!u||k&32&&f!==(f=g[5]?null:"search"))&&c(t,"role",f),(!u||k&48&&d!==(d=g[5]?null:g[4]))&&c(t,"aria-labelledby",d)},i(g){u||(O(_,g),u=!0)},o(g){V(_,g),u=!1},d(g){g&&j(t),_&&_.d(g),e[17](null),h=!1,oe(F)}}}function Lt(e,t,l){const a=["value","autofocus","debounce","label","hideLabel","id","ref","removeFormAriaAttributes"];let s=se(t,a),{$$slots:n={},$$scope:i}=t,{value:f=""}=t,{autofocus:d=!1}=t,{debounce:u=0}=t,{label:h="Label"}=t,{hideLabel:F=!1}=t,{id:y="search"+Math.random().toString(36)}=t,{ref:w=null}=t,{removeFormAriaAttributes:_=!1}=t;const p=Ie();let S=f,g,k=!1;function A(b){k||(k=!0,g=setTimeout(()=>{b(),k=!1},u))}Oe(()=>(d&&window.requestAnimationFrame(()=>w.focus()),()=>clearTimeout(g))),ue(()=>{f.length>0&&f!==S&&(u>0?A(()=>p("type",f)):p("type",f)),f.length===0&&S.length>0&&p("clear"),S=f});function E(b){P.call(this,e,b)}function v(b){P.call(this,e,b)}function D(b){P.call(this,e,b)}function o(b){P.call(this,e,b)}function m(b){P.call(this,e,b)}function M(b){P.call(this,e,b)}function C(b){$[b?"unshift":"push"](()=>{w=b,l(1,w)})}function q(){f=this.value,l(0,f)}return e.$$set=b=>{t=X(X({},t),Ve(b)),l(6,s=se(t,a)),"value"in b&&l(0,f=b.value),"autofocus"in b&&l(7,d=b.autofocus),"debounce"in b&&l(8,u=b.debounce),"label"in b&&l(2,h=b.label),"hideLabel"in b&&l(3,F=b.hideLabel),"id"in b&&l(4,y=b.id),"ref"in b&&l(1,w=b.ref),"removeFormAriaAttributes"in b&&l(5,_=b.removeFormAriaAttributes),"$$scope"in b&&l(9,i=b.$$scope)},[f,w,h,F,y,_,s,d,u,i,n,E,v,D,o,m,M,C,q]}class Pe extends ee{constructor(t){super(),te(this,t,Lt,Mt,le,{value:0,autofocus:7,debounce:8,label:2,hideLabel:3,id:4,ref:1,removeFormAriaAttributes:5})}}const zt=Pe;Pe.__docgen={version:3,name:"Search.svelte",data:[{keywords:[],visibility:"public",description:"Specify the input value",name:"value",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"",bind:[{source:"input",property:"value"}]},{keywords:[],visibility:"public",description:"Set to `true` to auto focus the input on mount",name:"autofocus",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"Specify the debounce value in milliseconds (ms)",name:"debounce",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[],visibility:"public",description:"Specify the input label text",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Label"},{keywords:[],visibility:"public",description:"Set to `true` to visually hide the label",name:"hideLabel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"Specify an `id` for the `input`",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[{name:"type",description:"{HTMLInputElement}"}],visibility:"public",description:"Obtain a reference to the `input` element",name:"ref",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"HTMLInputElement",type:"HTMLInputElement"},defaultValue:null},{keywords:[],visibility:"public",description:'Set to `true` to omit the form `role="search"` attribute',name:"removeFormAriaAttributes",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"type"},{visibility:"public",description:null,keywords:[],name:"clear"},{keywords:[],visibility:"public",description:"",name:"submit",parent:"form",modificators:["preventDefault"],locations:null},{keywords:[],visibility:"public",description:"",name:"input",parent:"input",modificators:[],locations:null},{keywords:[],visibility:"public",description:"",name:"change",parent:"input",modificators:[],locations:null},{keywords:[],visibility:"public",description:"",name:"focus",parent:"input",modificators:[],locations:null},{keywords:[],visibility:"public",description:"",name:"blur",parent:"input",modificators:[],locations:null},{keywords:[],visibility:"public",description:"",name:"keydown",parent:"input",modificators:[],locations:null}],slots:[{keywords:[],visibility:"public",description:"",name:"label"}],refs:[]};function ke(e,t,l){const a=e.slice();return a[47]=t[l],a[49]=l,a}const Et=e=>({result:e[0]&2,value:e[0]&1}),ve=e=>({result:e[47],index:e[49],value:e[0]});function we(e){let t,l,a=ge(e[1]),s=[];for(let i=0;i<a.length;i+=1)s[i]=Fe(ke(e,a,i));const n=i=>V(s[i],1,1,()=>{s[i]=null});return{c(){for(let i=0;i<s.length;i+=1)s[i].c();t=Ne()},m(i,f){for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(i,f);U(i,t,f),l=!0},p(i,f){if(f[0]&16778759){a=ge(i[1]);let d;for(d=0;d<a.length;d+=1){const u=ke(i,a,d);s[d]?(s[d].p(u,f),O(s[d],1)):(s[d]=Fe(u),s[d].c(),O(s[d],1),s[d].m(t.parentNode,t))}for(Te(),d=a.length;d<s.length;d+=1)n(d);Ce()}},i(i){if(!l){for(let f=0;f<a.length;f+=1)O(s[f]);l=!0}},o(i){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)V(s[f]);l=!1},d(i){i&&j(t),ut(s,i)}}}function It(e){let t,l=e[47].string+"",a;return{c(){t=new dt(!1),a=Ne(),t.a=a},m(s,n){t.m(l,s,n),U(s,a,n)},p(s,n){n[0]&2&&l!==(l=s[47].string+"")&&t.p(l)},d(s){s&&(j(a),t.d())}}}function Fe(e){let t,l,a,s,n,i,f;const d=e[25].default,u=Me(d,e,e[24],ve),h=u||It(e);function F(){return e[38](e[47],e[49])}function y(..._){return e[39](e[47],e[49],..._)}function w(){return e[40](e[47],e[49])}return{c(){t=z("li"),h&&h.c(),l=T(),c(t,"role","option"),c(t,"id",a=e[2]+"-result-"+e[49]),c(t,"aria-selected",s=e[9]===e[49]),c(t,"class","svelte-fbh1wz"),Z(t,"selected",e[9]===e[49]),Z(t,"disabled",e[47].disabled)},m(_,p){U(_,t,p),h&&h.m(t,null),W(t,l),n=!0,i||(f=[L(t,"click",F),L(t,"keyup",y),L(t,"mouseenter",w)],i=!0)},p(_,p){e=_,u?u.p&&(!n||p[0]&16777219)&&Le(u,d,e,e[24],n?Ee(d,e[24],p,Et):ze(e[24]),ve):h&&h.p&&(!n||p[0]&2)&&h.p(e,n?p:[-1,-1]),(!n||p[0]&4&&a!==(a=e[2]+"-result-"+e[49]))&&c(t,"id",a),(!n||p[0]&512&&s!==(s=e[9]===e[49]))&&c(t,"aria-selected",s),(!n||p[0]&512)&&Z(t,"selected",e[9]===e[49]),(!n||p[0]&2)&&Z(t,"disabled",e[47].disabled)},i(_){n||(O(h,_),n=!0)},o(_){V(h,_),n=!1},d(_){_&&j(t),h&&h.d(_),i=!1,oe(f)}}}function Se(e){let t;return{c(){t=z("li"),t.textContent="No embeds found...",c(t,"class","no-results disabled svelte-fbh1wz")},m(l,a){U(l,t,a)},d(l){l&&j(t)}}}function Ot(e){let t,l,a,s,n,i,f,d,u,h,F,y,w,_,p,S;const g=[{id:e[2]},{removeFormAriaAttributes:!0},e[14],{"aria-autocomplete":"list"},{"aria-controls":e[2]+"-listbox"},{"aria-labelledby":e[2]+"-label"},{"aria-activedescendant":e[9]>=0&&!e[4]&&e[1].length>0?`${e[2]}-result-${e[9]}`:null}];function k(o){e[27](o)}function A(o){e[28](o)}let E={};for(let o=0;o<g.length;o+=1)E=X(E,g[o]);e[8]!==void 0&&(E.ref=e[8]),e[0]!==void 0&&(E.value=e[0]),l=new zt({props:E}),$.push(()=>pe(l,"ref",k)),$.push(()=>pe(l,"value",A)),l.$on("type",e[29]),l.$on("input",e[30]),l.$on("change",e[31]),l.$on("focus",e[32]),l.$on("focus",e[33]),l.$on("clear",e[34]),l.$on("clear",e[12]),l.$on("blur",e[35]),l.$on("keydown",e[36]),l.$on("keydown",e[37]);let v=e[6]&&we(e),D=e[0].length>0&&e[1].length===0&&Se();return{c(){t=z("div"),B(l.$$.fragment),n=T(),i=z("ul"),v&&v.c(),f=T(),D&&D.c(),c(i,"role","listbox"),c(i,"aria-labelledby",d=e[2]+"-label"),c(i,"id",u=e[2]+"-listbox"),c(i,"class","svelte-fbh1wz"),Z(i,"svelte-typeahead-list",!0),c(t,"data-svelte-typeahead",""),c(t,"role","combobox"),c(t,"aria-haspopup","listbox"),c(t,"aria-owns",h=e[2]+"-listbox"),c(t,"aria-controls",F=e[2]+"-listbox"),c(t,"aria-expanded",y=e[6]||e[5]&&e[0].length>0&&e[1].length===0),c(t,"id",w=e[2]+"-typeahead"),c(t,"class","svelte-fbh1wz"),Z(t,"dropdown",e[1].length>0)},m(o,m){U(o,t,m),H(l,t,null),W(t,n),W(t,i),v&&v.m(i,null),W(i,f),D&&D.m(i,null),e[41](t),_=!0,p||(S=L(window,"click",e[26]),p=!0)},p(o,m){const M=m[0]&16918?fe(g,[m[0]&4&&{id:o[2]},g[1],m[0]&16384&&qe(o[14]),g[3],m[0]&4&&{"aria-controls":o[2]+"-listbox"},m[0]&4&&{"aria-labelledby":o[2]+"-label"},m[0]&534&&{"aria-activedescendant":o[9]>=0&&!o[4]&&o[1].length>0?`${o[2]}-result-${o[9]}`:null}]):{};!a&&m[0]&256&&(a=!0,M.ref=o[8],_e(()=>a=!1)),!s&&m[0]&1&&(s=!0,M.value=o[0],_e(()=>s=!1)),l.$set(M),o[6]?v?(v.p(o,m),m[0]&64&&O(v,1)):(v=we(o),v.c(),O(v,1),v.m(i,f)):v&&(Te(),V(v,1,1,()=>{v=null}),Ce()),o[0].length>0&&o[1].length===0?D||(D=Se(),D.c(),D.m(i,null)):D&&(D.d(1),D=null),(!_||m[0]&4&&d!==(d=o[2]+"-label"))&&c(i,"aria-labelledby",d),(!_||m[0]&4&&u!==(u=o[2]+"-listbox"))&&c(i,"id",u),(!_||m[0]&4&&h!==(h=o[2]+"-listbox"))&&c(t,"aria-owns",h),(!_||m[0]&4&&F!==(F=o[2]+"-listbox"))&&c(t,"aria-controls",F),(!_||m[0]&99&&y!==(y=o[6]||o[5]&&o[0].length>0&&o[1].length===0))&&c(t,"aria-expanded",y),(!_||m[0]&4&&w!==(w=o[2]+"-typeahead"))&&c(t,"id",w),(!_||m[0]&2)&&Z(t,"dropdown",o[1].length>0)},i(o){_||(O(l.$$.fragment,o),O(v),_=!0)},o(o){V(l.$$.fragment,o),V(v),_=!1},d(o){o&&j(t),R(l),v&&v.d(),D&&D.d(),e[41](null),p=!1,S()}}}function Vt(e,t,l){let a,s,n;const i=["id","value","data","extract","disable","filter","autoselect","inputAfterSelect","results","focusAfterSelect","showDropdownOnFocus","limit"];let f=se(t,i),{$$slots:d={},$$scope:u}=t;const h=ot(d);let{id:F="typeahead-"+Math.random().toString(36)}=t,{value:y=""}=t,{data:w=[]}=t,{extract:_=r=>r}=t,{disable:p=r=>!1}=t,{filter:S=r=>!1}=t,{autoselect:g=!0}=t,{inputAfterSelect:k="update"}=t,{results:A=[]}=t,{focusAfterSelect:E=!1}=t,{showDropdownOnFocus:v=!1}=t,{limit:D=1/0}=t;const o=Ie();let m=null,M=null,C=!1,q=-1,b="",N=!1;ue(()=>{b!==s&&g&&l(9,q=He()),b!==s&&!h["no-results"]&&l(4,C=A.length===0),b=s});async function Y(){const r=A[q];if(r.disabled)return;const I=_(r.original),G=y;k==="clear"&&l(0,y=""),k==="update"&&l(0,y=I),o("select",{selectedIndex:q,searched:G,selected:I,original:r.original,originalIndex:r.index}),await ft(),E&&M.focus(),ie()}function He(){var G,me;let r=0,I=((G=A[r])==null?void 0:G.disabled)??!1;for(;I;)r===A.length?r=0:r+=1,I=((me=A[r])==null?void 0:me.disabled)??!1;return r}function re(r){let I=r===1&&q===A.length-1?0:q+r;I<0&&(I=A.length-1);let G=A[I].disabled;for(;G;)I===A.length?I=0:I+=r,G=A[I].disabled;l(9,q=I)}const ce=()=>l(4,C=!1),ie=()=>l(4,C=!0),Re=({target:r})=>{!C&&!(m!=null&&m.contains(r))&&ie()};function Ge(r){M=r,l(8,M)}function Ke(r){y=r,l(0,y)}function Xe(r){P.call(this,e,r)}function Je(r){P.call(this,e,r)}function Ye(r){P.call(this,e,r)}function Ze(r){P.call(this,e,r)}const Qe=()=>{ce(),v&&(l(6,n=!0),l(5,N=!0))};function xe(r){P.call(this,e,r)}function $e(r){P.call(this,e,r)}function et(r){P.call(this,e,r)}const tt=r=>{if(A.length!==0)switch(r.key){case"Enter":Y();break;case"ArrowDown":r.preventDefault(),re(1);break;case"ArrowUp":r.preventDefault(),re(-1);break;case"Escape":r.preventDefault(),l(0,y=""),M==null||M.focus(),ie();break}},lt=(r,I)=>{r.disabled||(l(9,q=I),Y())},it=(r,I,G)=>{G.key==="Enter"&&(r.disabled||(l(9,q=I),Y()))},nt=(r,I)=>{r.disabled||l(9,q=I)};function st(r){$[r?"unshift":"push"](()=>{m=r,l(7,m)})}return e.$$set=r=>{t=X(X({},t),Ve(r)),l(14,f=se(t,i)),"id"in r&&l(2,F=r.id),"value"in r&&l(0,y=r.value),"data"in r&&l(15,w=r.data),"extract"in r&&l(16,_=r.extract),"disable"in r&&l(17,p=r.disable),"filter"in r&&l(18,S=r.filter),"autoselect"in r&&l(19,g=r.autoselect),"inputAfterSelect"in r&&l(20,k=r.inputAfterSelect),"results"in r&&l(1,A=r.results),"focusAfterSelect"in r&&l(21,E=r.focusAfterSelect),"showDropdownOnFocus"in r&&l(3,v=r.showDropdownOnFocus),"limit"in r&&l(22,D=r.limit),"$$scope"in r&&l(24,u=r.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&65536&&l(23,a={pre:"<mark>",post:"</mark>",extract:_}),e.$$.dirty[0]&13074433&&l(1,A=y!==""?J.filter(y,w,a).filter(({score:r})=>r>0).slice(0,D).filter(r=>!S(r.original)).map(r=>({...r,disabled:p(r.original)})):w.map(r=>({string:_(r),original:r}))),e.$$.dirty[0]&65538&&(s=A.map(r=>_(r.original)).join("")),e.$$.dirty[0]&50&&l(6,n=!C&&A.length>0&&N),e.$$.dirty[0]&104&&v&&l(6,n=n&&N)},[y,A,F,v,C,N,n,m,M,q,Y,re,ce,ie,f,w,_,p,S,g,k,E,D,a,u,d,Re,Ge,Ke,Xe,Je,Ye,Ze,Qe,xe,$e,et,tt,lt,it,nt,st]}class Tt extends ee{constructor(t){super(),te(this,t,Vt,Ot,le,{id:2,value:0,data:15,extract:16,disable:17,filter:18,autoselect:19,inputAfterSelect:20,results:1,focusAfterSelect:21,showDropdownOnFocus:3,limit:22},null,[-1,-1])}}function Ct(e){let t,l,a,s,n,i,f,d,u,h,F,y,w,_,p,S,g,k,A,E,v,D;return d=new ae({props:{icon:gt}}),h=new Tt({props:{label:"Select an embed",value:e[6][e[0].indexOf(e[4])]||e[6][e[5]]||e[6][0],extract:e[8],data:e[0].map(Ae),placeholder:"Search",showDropdownOnFocus:!0}}),h.$on("select",e[9]),A=new ae({props:{icon:Ue}}),v=new je({props:{breakpoints:e[1],minFrameWidth:e[2],maxFrameWidth:e[3]}}),{c(){t=z("div"),l=z("header"),l.innerHTML='<img src="https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg" alt=""/>',a=T(),s=z("div"),n=z("div"),i=z("a"),f=ne("Live link "),B(d.$$.fragment),u=T(),B(h.$$.fragment),F=T(),y=z("div"),w=z("p"),w.textContent="Preview",_=T(),p=z("div"),S=T(),g=z("div"),k=z("a"),B(A.$$.fragment),E=T(),B(v.$$.fragment),c(l,"class","svelte-6lwy9l"),c(i,"rel","external"),c(i,"target","_blank"),c(i,"href",e[4]),c(i,"title",e[4]),c(i,"class","svelte-6lwy9l"),c(n,"class","embed-link svelte-6lwy9l"),c(s,"id","typeahead-container"),c(s,"class","svelte-6lwy9l"),c(w,"class","svelte-6lwy9l"),c(y,"id","preview-label"),Q(y,"width",e[7]+"px"),c(y,"class","svelte-6lwy9l"),c(p,"id","frame-parent"),Q(p,"width",e[7]+"px"),c(p,"class","svelte-6lwy9l"),c(t,"class","container"),c(k,"rel","external"),c(k,"href","./../"),c(k,"class","svelte-6lwy9l"),c(g,"id","home-link"),c(g,"class","svelte-6lwy9l")},m(o,m){U(o,t,m),W(t,l),W(t,a),W(t,s),W(s,n),W(n,i),W(i,f),H(d,i,null),W(s,u),H(h,s,null),W(t,F),W(t,y),W(y,w),W(t,_),W(t,p),U(o,S,m),U(o,g,m),W(g,k),H(A,k,null),U(o,E,m),H(v,o,m),D=!0},p(o,[m]){(!D||m&16)&&c(i,"href",o[4]),(!D||m&16)&&c(i,"title",o[4]);const M={};m&113&&(M.value=o[6][o[0].indexOf(o[4])]||o[6][o[5]]||o[6][0]),m&64&&(M.extract=o[8]),m&1&&(M.data=o[0].map(Ae)),h.$set(M),(!D||m&128)&&Q(y,"width",o[7]+"px"),(!D||m&128)&&Q(p,"width",o[7]+"px");const C={};m&2&&(C.breakpoints=o[1]),m&4&&(C.minFrameWidth=o[2]),m&8&&(C.maxFrameWidth=o[3]),v.$set(C)},i(o){D||(O(d.$$.fragment,o),O(h.$$.fragment,o),O(A.$$.fragment,o),O(v.$$.fragment,o),D=!0)},o(o){V(d.$$.fragment,o),V(h.$$.fragment,o),V(A.$$.fragment,o),V(v.$$.fragment,o),D=!1},d(o){o&&(j(t),j(S),j(g),j(E)),R(d),R(h),R(A),R(v,o)}}}const Ae=(e,t)=>({index:t,embed:e});function Nt(e,t,l){let a,s;We(e,K,p=>l(7,s=p));let{embeds:n}=t,{breakpoints:i=[330,510,660,930,1200]}=t,{minFrameWidth:f=320}=t,{maxFrameWidth:d=1200}=t,h=(()=>{if(typeof window>"u")return n[0];const p=window.localStorage.getItem("framer-active-embed");return p&&n.indexOf(p)>-1?p:n[0]})(),F=n.indexOf(h);const y=p=>{const S=n.indexOf(p)>-1?p:n[F]||n[0];new yt.Parent("frame-parent",/^http/.test(S)?S:kt(window.location.origin,S,{trailingSlash:!0}))};Oe(()=>{y(h)}),ue(()=>{y(h)});const w=p=>a[p.index],_=({detail:p})=>{typeof window<"u"&&window.localStorage.setItem("framer-active-embed",p.original.embed),l(4,h=p.original.embed),l(5,F=p.original.index)};return e.$$set=p=>{"embeds"in p&&l(0,n=p.embeds),"breakpoints"in p&&l(1,i=p.breakpoints),"minFrameWidth"in p&&l(2,f=p.minFrameWidth),"maxFrameWidth"in p&&l(3,d=p.maxFrameWidth)},e.$$.update=()=>{e.$$.dirty&1&&l(6,a=At(n))},[n,i,f,d,h,F,a,s,w,_]}class de extends ee{constructor(t){super(),te(this,t,Nt,Ct,le,{embeds:0,breakpoints:1,minFrameWidth:2,maxFrameWidth:3})}}de.__docgen={version:3,name:"Framer.svelte",data:[{visibility:"public",description:null,keywords:[],name:"embeds",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"breakpoints",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"minFrameWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:320},{visibility:"public",description:null,keywords:[],name:"maxFrameWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1200}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function qt(e){let t,l;const a=[e[0]];let s={};for(let n=0;n<a.length;n+=1)s=X(s,a[n]);return t=new de({props:s}),{c(){B(t.$$.fragment)},m(n,i){H(t,n,i),l=!0},p(n,i){const f=i&1?fe(a,[qe(n[0])]):{};t.$set(f)},i(n){l||(O(t.$$.fragment,n),l=!0)},o(n){V(t.$$.fragment,n),l=!1},d(n){R(t,n)}}}function Ut(e){let t,l,a,s,n,i;const f=[{title:"Components/Framer"},{component:de},vt(wt)];let d={};for(let u=0;u<f.length;u+=1)d=X(d,f[u]);return t=new bt({props:d}),a=new ht({props:{$$slots:{default:[qt,({args:u})=>({0:u}),({args:u})=>u?1:0]},$$scope:{ctx:e}}}),n=new pt({props:{name:"Default",args:{embeds:["https://graphics.reuters.com/USA-CONGRESS/FUNDRAISING/zjvqkawjlvx/embeds/en/embed/?zzz"]}}}),{c(){B(t.$$.fragment),l=T(),B(a.$$.fragment),s=T(),B(n.$$.fragment)},m(u,h){H(t,u,h),U(u,l,h),H(a,u,h),U(u,s,h),H(n,u,h),i=!0},p(u,[h]){const F={};t.$set(F);const y={};h&3&&(y.$$scope={dirty:h,ctx:u}),a.$set(y)},i(u){i||(O(t.$$.fragment,u),O(a.$$.fragment,u),O(n.$$.fragment,u),i=!0)},o(u){V(t.$$.fragment,u),V(a.$$.fragment,u),V(n.$$.fragment,u),i=!1},d(u){u&&(j(l),j(s)),R(t,u),R(a,u),R(n,u)}}}class jt extends ee{constructor(t){super(),te(this,t,null,Ut,le,{})}}const Be=mt(jt,{meta:{title:"Components/Framer"},stories:{"tpl:default":{name:"default",template:!0,source:"<Framer {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Framer","withComponentDocs"]}),Qt=Be.meta,xt=["Default"],$t=Be.stories.Default;export{$t as Default,xt as __namedExportsOrder,Qt as default};
//# sourceMappingURL=Framer.stories-de0e3eb6.js.map