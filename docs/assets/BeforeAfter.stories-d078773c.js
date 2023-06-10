import{S as Re,i as Be,s as De,e as Ce,a as k,N as R,b as g,g as x,t as w,c as ee,d as A,O as je,K as Ee,o as Ge,P as Qe,j as W,m as z,n as q,w as v,D as B,Q as Y,x as c,C as T,R as Je,z as O,T as Pe,U as be,V as ge,f as he,q as le,u as oe,r as fe,v as ce,p as te,k as ne,l as re,E as de,M as Ye}from"./index-25af778d.js";import{p as Ze,M as xe,T as et,S as se}from"./collect-stories-cce06d4a.js";import{B as tt}from"./Block-9c89ee1a.js";import{P as nt}from"./PaddingReset-d848e1b7.js";import{t as rt}from"./throttle-1cd3618f.js";import{a as Z,w as at}from"./withParams-90715500.js";const it=`A before and after image comparison component.

\`\`\`html
<script>
  import { BeforeAfter } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths'; // If using in the Graphics Kit
<\/script>

<BeforeAfter
  beforeSrc="{\`\${assets}/images/before-after/myrne-before.jpg\`}"
  beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
  afterSrc="{\`\${assets}/images/before-after/myrne-after.jpg\`}"
  afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
/>
\`\`\`
`,_e=`Add overlays with the \`beforeOverlay\` and \`afterOverlay\` slots and a caption to the \`caption\` slot, then style these elements to match your page design as below.

\`\`\`html
<BeforeAfter
  beforeSrc="{\`\${assets}/images/before-after/myrne-before.jpg\`}"
  beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
  afterSrc="{\`\${assets}/images/before-after/myrne-after.jpg\`}"
  afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
>
  <div slot="beforeOverlay" class="overlay before">
    <h6>July 7, 2020</h6>
    <p>Initially, this site was far smaller.</p>
  </div>
  <div slot="afterOverlay" class="overlay after">
    <h6>Oct. 20, 2020</h6>
    <p>But then forces built up.</p>
  </div>
</BeforeAfter>

<style lang="scss">
  .overlay {
    color: white;
    padding: 15px;
    background: rgba(0, 0, 0, 0.2);
    h6,
    p {
      color: white;
      margin: 0;
    }
    &.after {
      text-align: right;
    }
  }
</style>
\`\`\`
`,ve=`Use text elements in your overlays as [ARIA descriptions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) for your images by setting an ID on text elements within each overly with the \`description\` [slot prop](https://svelte.dev/tutorial/slot-props).

> **💡 TIP:** You must always use the \`beforeAlt\` / \`afterAlt\` props to label your image for visually impaired readers, but you can use these descriptions to provide more information or context that the reader might also need.

\`\`\`html
<BeforeAfter
  beforeSrc="{\`\${assets}/images/before-after/myrne-before.jpg\`}"
  beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
  afterSrc="{\`\${assets}/images/before-after/myrne-after.jpg\`}"
  afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
>
  <!-- 👇 Define the prop on each slot... -->
  <div let:description="{id}" slot="beforeOverlay">
    <p id="{id}">
      On July 7, 2020, the base contained only a few transport vehicles.
    </p>
  </div>
  <div let:description="{id}" slot="afterOverlay">
    <!-- 👇 id can also be used on an element containing multiple text elements -->
    <div id="{id}">
      <p>But by October, tanks and artillery could be seen.</p>
      <p>
        In total, over 50 pieces of heavy machinery and 200 personnel are now
        based here.
      </p>
    </div>
  </div>
</BeforeAfter>
\`\`\`
`;const{window:H}=Qe,st=r=>({}),we=r=>({}),lt=r=>({description:r[0]&256}),ke=r=>({description:`${r[8]}-after-description`}),ot=r=>({description:r[0]&256}),Ae=r=>({description:`${r[8]}-before-description`});function Oe(r){let e,n;return e=new tt({props:{width:r[1],id:r[8],cls:"photo before-after",$$slots:{default:[ct]},$$scope:{ctx:r}}}),{c(){W(e.$$.fragment)},m(a,s){z(e,a,s),n=!0},p(a,s){const t={};s[0]&2&&(t.width=a[1]),s[0]&256&&(t.id=a[8]),s[0]&67371007|s[1]&512&&(t.$$scope={dirty:s,ctx:a}),e.$set(t)},i(a){n||(g(e.$$.fragment,a),n=!0)},o(a){w(e.$$.fragment,a),n=!1},d(a){q(e,a)}}}function Se(r){let e,n,a;const s=r[33].beforeOverlay,t=le(s,r,r[40],Ae);return{c(){e=v("div"),t&&t.c(),c(e,"id","image-before-label"),c(e,"class","overlay-container before svelte-35dp01"),T(e,"clip-path","inset(0 "+r[15]+"px 0 0)"),Je(()=>r[37].call(e))},m(i,o){k(i,e,o),t&&t.m(e,null),n=Pe(e,r[37].bind(e)),a=!0},p(i,o){t&&t.p&&(!a||o[0]&256|o[1]&512)&&oe(t,s,i,i[40],a?ce(s,i[40],o,ot):fe(i[40]),Ae),(!a||o[0]&32768)&&T(e,"clip-path","inset(0 "+i[15]+"px 0 0)")},i(i){a||(g(t,i),a=!0)},o(i){w(t,i),a=!1},d(i){i&&A(e),t&&t.d(i),n()}}}function Ie(r){let e,n;const a=r[33].afterOverlay,s=le(a,r,r[40],ke);return{c(){e=v("div"),s&&s.c(),c(e,"id","image-after-label"),c(e,"class","overlay-container after svelte-35dp01")},m(t,i){k(t,e,i),s&&s.m(e,null),n=!0},p(t,i){s&&s.p&&(!n||i[0]&256|i[1]&512)&&oe(s,a,t,t[40],n?ce(a,t[40],i,lt):fe(t[40]),ke)},i(t){n||(g(s,t),n=!0)},o(t){w(s,t),n=!1},d(t){t&&A(e),s&&s.d(t)}}}function Me(r){let e,n;return e=new nt({props:{containerIsFluid:r[1]==="fluid",$$slots:{default:[ft]},$$scope:{ctx:r}}}),{c(){W(e.$$.fragment)},m(a,s){z(e,a,s),n=!0},p(a,s){const t={};s[0]&2&&(t.containerIsFluid=a[1]==="fluid"),s[0]&256|s[1]&512&&(t.$$scope={dirty:s,ctx:a}),e.$set(t)},i(a){n||(g(e.$$.fragment,a),n=!0)},o(a){w(e.$$.fragment,a),n=!1},d(a){q(e,a)}}}function ft(r){let e,n,a;const s=r[33].caption,t=le(s,r,r[40],we);return{c(){e=v("aside"),t&&t.c(),c(e,"class","before-after-caption svelte-35dp01"),c(e,"id",n=`${r[8]}-caption`)},m(i,o){k(i,e,o),t&&t.m(e,null),a=!0},p(i,o){t&&t.p&&(!a||o[1]&512)&&oe(t,s,i,i[40],a?ce(s,i[40],o,st):fe(i[40]),we),(!a||o[0]&256&&n!==(n=`${i[8]}-caption`))&&c(e,"id",n)},i(i){a||(g(t,i),a=!0)},o(i){w(t,i),a=!1},d(i){i&&A(e),t&&t.d(i)}}}function ct(r){let e,n,a,s,t,i,o,I,M,D,L,P,C,h,j,V,l,u,F,U,S,b,J,K,_=r[26].beforeOverlay&&Se(r),y=r[26].afterOverlay&&Ie(r),m=r[26].caption&&Me(r);return{c(){e=v("div"),n=v("figure"),a=v("img"),i=B(),o=v("img"),L=B(),_&&_.c(),P=B(),y&&y.c(),C=B(),h=v("div"),j=v("div"),V=B(),l=v("div"),U=B(),m&&m.c(),S=Ce(),Y(a.src,s=r[4])||c(a,"src",s),c(a,"alt",r[5]),c(a,"style",r[16]),c(a,"class","after svelte-35dp01"),c(a,"aria-describedby",t=r[26].beforeOverlay&&`${r[8]}-before`),Y(o.src,I=r[2])||c(o,"src",I),c(o,"alt",r[3]),c(o,"style",M="clip: rect(0 "+r[11]+"px "+r[12]+"px 0);"+r[16]),c(o,"class","before svelte-35dp01"),c(o,"aria-describedby",D=r[26].afterOverlay&&`${r[8]}-after`),c(j,"class","arrow-left svelte-35dp01"),c(l,"class","arrow-right svelte-35dp01"),c(h,"tabindex","0"),c(h,"class","handle svelte-35dp01"),T(h,"left","calc("+r[0]*100+"% - 20px)"),T(h,"--before-after-handle-colour",r[6]),T(h,"--before-after-handle-inactive-opacity",r[7]),c(n,"style",r[17]),c(n,"class","before-after-container svelte-35dp01"),c(n,"aria-labelledby",u=r[26].caption&&`${r[8]}-caption`),T(e,"height",r[12]+"px"),Je(()=>r[39].call(e))},m(d,p){k(d,e,p),O(e,n),O(n,a),r[36](a),O(n,i),O(n,o),O(n,L),_&&_.m(n,null),O(n,P),y&&y.m(n,null),O(n,C),O(n,h),O(h,j),O(h,V),O(h,l),r[38](n),F=Pe(e,r[39].bind(e)),k(d,U,p),m&&m.m(d,p),k(d,S,p),b=!0,J||(K=[R(a,"load",r[22]),R(a,"mousedown",be(r[35])),R(o,"mousedown",be(r[34])),R(h,"focus",r[18]),R(h,"blur",r[19]),R(n,"touchstart",r[24]),R(n,"mousedown",r[24])],J=!0)},p(d,p){(!b||p[0]&16&&!Y(a.src,s=d[4]))&&c(a,"src",s),(!b||p[0]&32)&&c(a,"alt",d[5]),(!b||p[0]&65536)&&c(a,"style",d[16]),(!b||p[0]&67109120&&t!==(t=d[26].beforeOverlay&&`${d[8]}-before`))&&c(a,"aria-describedby",t),(!b||p[0]&4&&!Y(o.src,I=d[2]))&&c(o,"src",I),(!b||p[0]&8)&&c(o,"alt",d[3]),(!b||p[0]&71680&&M!==(M="clip: rect(0 "+d[11]+"px "+d[12]+"px 0);"+d[16]))&&c(o,"style",M),(!b||p[0]&67109120&&D!==(D=d[26].afterOverlay&&`${d[8]}-after`))&&c(o,"aria-describedby",D),d[26].beforeOverlay?_?(_.p(d,p),p[0]&67108864&&g(_,1)):(_=Se(d),_.c(),g(_,1),_.m(n,P)):_&&(x(),w(_,1,1,()=>{_=null}),ee()),d[26].afterOverlay?y?(y.p(d,p),p[0]&67108864&&g(y,1)):(y=Ie(d),y.c(),g(y,1),y.m(n,C)):y&&(x(),w(y,1,1,()=>{y=null}),ee()),(!b||p[0]&1)&&T(h,"left","calc("+d[0]*100+"% - 20px)"),(!b||p[0]&64)&&T(h,"--before-after-handle-colour",d[6]),(!b||p[0]&128)&&T(h,"--before-after-handle-inactive-opacity",d[7]),(!b||p[0]&131072)&&c(n,"style",d[17]),(!b||p[0]&67109120&&u!==(u=d[26].caption&&`${d[8]}-caption`))&&c(n,"aria-labelledby",u),(!b||p[0]&4096)&&T(e,"height",d[12]+"px"),d[26].caption?m?(m.p(d,p),p[0]&67108864&&g(m,1)):(m=Me(d),m.c(),g(m,1),m.m(S.parentNode,S)):m&&(x(),w(m,1,1,()=>{m=null}),ee())},i(d){b||(g(_),g(y),g(m),b=!0)},o(d){w(_),w(y),w(m),b=!1},d(d){d&&A(e),r[36](null),_&&_.d(),y&&y.d(),r[38](null),F(),d&&A(U),m&&m.d(d),d&&A(S),J=!1,je(K)}}}function dt(r){let e,n,a,s,t=r[2]&&r[3]&&r[4]&&r[5]&&Oe(r);return{c(){t&&t.c(),e=Ce()},m(i,o){t&&t.m(i,o),k(i,e,o),n=!0,a||(s=[R(H,"touchmove",r[23]),R(H,"touchend",r[25]),R(H,"mousemove",r[23]),R(H,"mouseup",r[25]),R(H,"resize",rt(r[21],100)),R(H,"keydown",r[20])],a=!0)},p(i,o){i[2]&&i[3]&&i[4]&&i[5]?t?(t.p(i,o),o[0]&60&&g(t,1)):(t=Oe(i),t.c(),g(t,1),t.m(e.parentNode,e)):t&&(x(),w(t,1,1,()=>{t=null}),ee())},i(i){n||(g(t),n=!0)},o(i){w(t),n=!1},d(i){t&&t.d(i),i&&A(e),a=!1,je(s)}}}function pt(r,e,n){let a,s,t,i,o,I,{$$slots:M={},$$scope:D}=e;const L=Ee(M);let{width:P="normal"}=e,{height:C=600}=e,{heightRatio:h=null}=e,{beforeSrc:j=null}=e,{beforeAlt:V=null}=e,{afterSrc:l=null}=e,{afterAlt:u=null}=e,{handleColour:F="white"}=e,{handleInactiveOpacity:U=.6}=e,{handleMargin:S=20}=e,{keyPressStep:b=.05}=e,{offset:J=.5}=e;const K=()=>Math.floor((1+Math.random())*65536).toString(16).substring(1);let{id:_="before-after-"+K()+K()}=e,y,m=null,d=!1,p,N=0,ie=!1,X;const Ve=()=>ie=!0,Te=()=>ie=!1,We=f=>{if(!ie)return;const{keyCode:G}=f,Q=S/s;G===39?n(0,J=Math.min(1-Q,J+b)):G===37&&n(0,J=Math.max(0+Q,J-b))},me=()=>{y&&y.complete&&n(31,m=y.getBoundingClientRect())},ze=()=>{me()},qe=f=>{f.type==="load"&&n(31,m=f.target.getBoundingClientRect())},ye=f=>{if(d&&m){const G=f.touches?f.touches[0]:f,Q=p?parseInt(window.getComputedStyle(p).marginLeft.slice(0,-2)):0;let E=G.pageX-Q-m.left;E=E<S?S:E>s-S?s-S:E,n(0,J=E/s)}},Le=f=>{d=!0,ye(f)},Ue=()=>{d=!1};j&&V&&l&&u||console.warn("Missing required src or alt props for BeforeAfter component"),Ge(()=>{const f=setInterval(()=>{m&&clearInterval(f),y&&y.complete&&!m&&me()},50)});function Fe(f){ge.call(this,r,f)}function He(f){ge.call(this,r,f)}function $e(f){he[f?"unshift":"push"](()=>{y=f,n(13,y)})}function Ke(){N=this.clientWidth,n(9,N)}function Ne(f){he[f?"unshift":"push"](()=>{p=f,n(14,p)})}function Xe(){X=this.clientWidth,n(10,X)}return r.$$set=f=>{"width"in f&&n(1,P=f.width),"height"in f&&n(27,C=f.height),"heightRatio"in f&&n(28,h=f.heightRatio),"beforeSrc"in f&&n(2,j=f.beforeSrc),"beforeAlt"in f&&n(3,V=f.beforeAlt),"afterSrc"in f&&n(4,l=f.afterSrc),"afterAlt"in f&&n(5,u=f.afterAlt),"handleColour"in f&&n(6,F=f.handleColour),"handleInactiveOpacity"in f&&n(7,U=f.handleInactiveOpacity),"handleMargin"in f&&n(29,S=f.handleMargin),"keyPressStep"in f&&n(30,b=f.keyPressStep),"offset"in f&&n(0,J=f.offset),"id"in f&&n(8,_=f.id),"$$scope"in f&&n(40,D=f.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&402654208&&n(12,a=X&&h?X*h:C),r.$$.dirty[1]&1&&n(32,s=m&&m.width||0),r.$$.dirty[0]&1|r.$$.dirty[1]&2&&n(11,t=s*J),r.$$.dirty[0]&4096&&n(17,i=`width:100%;height:${a}px;`),r.$$.dirty[0]&2560&&n(15,I=t<N?Math.abs(t-N):0)},n(16,o="width:100%;height:100%;"),[J,P,j,V,l,u,F,U,_,N,X,t,a,y,p,I,o,i,Ve,Te,We,ze,qe,ye,Le,Ue,L,C,h,S,b,m,s,M,Fe,He,$e,Ke,Ne,Xe,D]}class $ extends Re{constructor(e){super(),Be(this,e,pt,dt,De,{width:1,height:27,heightRatio:28,beforeSrc:2,beforeAlt:3,afterSrc:4,afterAlt:5,handleColour:6,handleInactiveOpacity:7,handleMargin:29,keyPressStep:30,offset:0,id:8},null,[-1,-1])}}$.__docgen={version:3,name:"BeforeAfter.svelte",data:[{keywords:[],visibility:"public",description:"Width of the chart within the text well.",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[],visibility:"public",description:"Height of the component",name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:600},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"If set, makes the height a ratio of the component's width.",name:"heightRatio",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:null},{keywords:[{name:"required",description:""}],visibility:"public",description:"Before image src",name:"beforeSrc",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"required",description:""}],visibility:"public",description:"Before image altText",name:"beforeAlt",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"required",description:""}],visibility:"public",description:"After image src",name:"afterSrc",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"required",description:""}],visibility:"public",description:"After image altText",name:"afterAlt",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[],visibility:"public",description:"Drag handle colour",name:"handleColour",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"white"},{keywords:[],visibility:"public",description:"Drag handle opacity",name:"handleInactiveOpacity",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:.6},{keywords:[],visibility:"public",description:"Margin at the edge of the image to stop dragging",name:"handleMargin",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:20},{keywords:[],visibility:"public",description:"Percentage of the component width the handle will travel ona key press",name:"keyPressStep",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:.05},{keywords:[],visibility:"public",description:"Initial offset of the handle, between 0 and 1.",name:"offset",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:.5},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Add an ID to target with SCSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"",name:"mousedown",parent:"img",modificators:["preventDefault"],locations:null}],slots:[{keywords:[],visibility:"public",description:"Overlay for before image",name:"beforeOverlay",params:[{name:"description",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"description",type:{kind:"type",text:"*",type:"any"}}]},{keywords:[],visibility:"public",description:"Overlay for after image",name:"afterOverlay",params:[{name:"description",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"description",type:{kind:"type",text:"*",type:"any"}}]},{keywords:[],visibility:"public",description:"Caption for image credits",name:"caption"}],refs:[]};const pe=""+new URL("myrne-before-4b82484d.jpg",import.meta.url).href,ue=""+new URL("myrne-after-55164c0d.jpg",import.meta.url).href;function ut(r){let e,n;const a=[r[2]];let s={};for(let t=0;t<a.length;t+=1)s=te(s,a[t]);return e=new $({props:s}),{c(){W(e.$$.fragment)},m(t,i){z(e,t,i),n=!0},p(t,i){const o=i&4?ne(a,[re(t[2])]):{};e.$set(o)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function mt(r){let e;return{c(){e=v("div"),e.innerHTML=`<h6>July 7, 2020</h6> 
      <p>Initially, this site was far smaller.</p>`,c(e,"slot","beforeOverlay"),c(e,"class","overlay before")},m(n,a){k(n,e,a)},p:de,d(n){n&&A(e)}}}function yt(r){let e;return{c(){e=v("div"),e.innerHTML=`<h6>Oct. 20, 2020</h6> 
      <p>But then forces built up.</p>`,c(e,"slot","afterOverlay"),c(e,"class","overlay after")},m(n,a){k(n,e,a)},p:de,d(n){n&&A(e)}}}function bt(r){let e;return{c(){e=v("p"),e.textContent="Photos by MAXAR Technologies, 2021.",c(e,"slot","caption")},m(n,a){k(n,e,a)},p:de,d(n){n&&A(e)}}}function gt(r){let e,n,a,s;return e=new $({props:{beforeSrc:pe,beforeAlt:"Satellite image of Russian base at Myrne taken on July 7, 2020.",afterSrc:ue,afterAlt:"Satellite image of Russian base at Myrne taken on Oct. 20, 2020.",$$slots:{caption:[bt],afterOverlay:[yt],beforeOverlay:[mt]},$$scope:{ctx:r}}}),{c(){W(e.$$.fragment),n=B(),a=v("style"),a.textContent=`.overlay {
  color: white;
  padding: 15px;
  background: rgba(0, 0, 0, 0.2);
}
.overlay.after {
  text-align: right;
}
.overlay h6,
.overlay p {
  color: white;
}`,c(a,"lang","scss")},m(t,i){z(e,t,i),k(t,n,i),k(t,a,i),s=!0},p(t,i){const o={};i&8&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){q(e,t),t&&A(n),t&&A(a)}}}function ht(r){let e,n,a,s;return{c(){e=v("div"),n=v("p"),a=Ye("On July 7, 2020, the base contained only a few transport vehicles."),c(n,"id",s=r[1]),c(e,"slot","beforeOverlay"),c(e,"class","overlay")},m(t,i){k(t,e,i),O(e,n),O(n,a)},p(t,i){i&2&&s!==(s=t[1])&&c(n,"id",s)},d(t){t&&A(e)}}}function _t(r){let e,n,a,s,t,i;return{c(){e=v("div"),n=v("div"),a=v("p"),a.textContent="But by October, tanks and artillery could be seen.",s=B(),t=v("p"),t.textContent=`In total, over 50 pieces of heavy machinery and 200 personnel are now
          based here.`,c(n,"id",i=r[1]),c(e,"slot","afterOverlay"),c(e,"class","overlay")},m(o,I){k(o,e,I),O(e,n),O(n,a),O(n,s),O(n,t)},p(o,I){I&2&&i!==(i=o[1])&&c(n,"id",i)},d(o){o&&A(e)}}}function vt(r){let e,n,a,s;return e=new $({props:{beforeSrc:pe,beforeAlt:"Satellite image of Russian base at Myrne taken on July 7, 2020.",afterSrc:ue,afterAlt:"Satellite image of Russian base at Myrne taken on Oct. 20, 2020.",$$slots:{afterOverlay:[_t,({description:t})=>({1:t}),({description:t})=>t?2:0],beforeOverlay:[ht,({description:t})=>({1:t}),({description:t})=>t?2:0]},$$scope:{ctx:r}}}),{c(){W(e.$$.fragment),n=B(),a=v("style"),a.textContent=`div.overlay {
  color: white;
  padding: 15px;
  max-width: 250px;
  background: rgba(0, 0, 0, 0.2);
}

p {
  color: white;
}`,c(a,"lang","scss")},m(t,i){z(e,t,i),k(t,n,i),k(t,a,i),s=!0},p(t,i){const o={};i&10&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){q(e,t),t&&A(n),t&&A(a)}}}function wt(r){let e,n,a,s,t,i,o,I,M,D;const L=[{title:"Components/BeforeAfter"},{component:$},r[0]];let P={};for(let l=0;l<L.length;l+=1)P=te(P,L[l]);e=new xe({props:P}),a=new et({props:{$$slots:{default:[ut,({args:l})=>({2:l}),({args:l})=>l?4:0]},$$scope:{ctx:r}}}),t=new se({props:{name:"Default",args:{beforeSrc:pe,beforeAlt:"Satellite image of Russian base at Myrne taken on July 7, 2020.",afterSrc:ue,afterAlt:"Satellite image of Russian base at Myrne taken on Oct. 20, 2020."}}});const C=[{name:"With overlays"},Z(_e)];let h={$$slots:{default:[gt]},$$scope:{ctx:r}};for(let l=0;l<C.length;l+=1)h=te(h,C[l]);o=new se({props:h});const j=[{name:"ARIA descriptions"},Z(ve)];let V={$$slots:{default:[vt]},$$scope:{ctx:r}};for(let l=0;l<j.length;l+=1)V=te(V,j[l]);return M=new se({props:V}),{c(){W(e.$$.fragment),n=B(),W(a.$$.fragment),s=B(),W(t.$$.fragment),i=B(),W(o.$$.fragment),I=B(),W(M.$$.fragment)},m(l,u){z(e,l,u),k(l,n,u),z(a,l,u),k(l,s,u),z(t,l,u),k(l,i,u),z(o,l,u),k(l,I,u),z(M,l,u),D=!0},p(l,[u]){const F=u&1?ne(L,[L[0],u&0&&{component:$},u&1&&re(l[0])]):{};e.$set(F);const U={};u&12&&(U.$$scope={dirty:u,ctx:l}),a.$set(U);const S=u&0?ne(C,[C[0],re(Z(_e))]):{};u&8&&(S.$$scope={dirty:u,ctx:l}),o.$set(S);const b=u&0?ne(j,[j[0],re(Z(ve))]):{};u&8&&(b.$$scope={dirty:u,ctx:l}),M.$set(b)},i(l){D||(g(e.$$.fragment,l),g(a.$$.fragment,l),g(t.$$.fragment,l),g(o.$$.fragment,l),g(M.$$.fragment,l),D=!0)},o(l){w(e.$$.fragment,l),w(a.$$.fragment,l),w(t.$$.fragment,l),w(o.$$.fragment,l),w(M.$$.fragment,l),D=!1},d(l){q(e,l),l&&A(n),q(a,l),l&&A(s),q(t,l),l&&A(i),q(o,l),l&&A(I),q(M,l)}}}function kt(r){return[{...at(it),argTypes:{handleColour:{control:"color"},width:{control:"select",options:["normal","wide","wider","widest","fluid"]}}}]}class At extends Re{constructor(e){super(),Be(this,e,kt,wt,De,{})}}const ae=Ze(At,{meta:{title:"Components/BeforeAfter"},stories:{"tpl:default":{storyId:"components-beforeafter--default",name:"default",template:!0,source:"<BeforeAfter {...args} />",hasArgs:!0},Default:{storyId:"components-beforeafter--default",name:"Default",template:!1,hasArgs:!1},WithOverlays:{storyId:"components-beforeafter--with-overlays",name:"With overlays",template:!1,source:`  <BeforeAfter
    beforeSrc="{beforeImg}"
    beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
    afterSrc="{afterImg}"
    afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
  >
    <div slot="beforeOverlay" class="overlay before">
      <h6>July 7, 2020</h6>
      <p>Initially, this site was far smaller.</p>
    </div>
    <div slot="afterOverlay" class="overlay after">
      <h6>Oct. 20, 2020</h6>
      <p>But then forces built up.</p>
    </div>
    <p slot="caption">Photos by MAXAR Technologies, 2021.</p>
  </BeforeAfter>

  <style lang="scss">.overlay {
  color: white;
  padding: 15px;
  background: rgba(0, 0, 0, 0.2);
}
.overlay.after {
  text-align: right;
}
.overlay h6,
.overlay p {
  color: white;
}</style>`,hasArgs:!1},ARIADescriptions:{storyId:"components-beforeafter--aria-descriptions",name:"ARIA descriptions",template:!1,source:`  <BeforeAfter
    beforeSrc="{beforeImg}"
    beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
    afterSrc="{afterImg}"
    afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
  >
    <div let:description="{id}" slot="beforeOverlay" class="overlay">
      <p id="{id}">
        On July 7, 2020, the base contained only a few transport vehicles.
      </p>
    </div>
    <div let:description="{id}" slot="afterOverlay" class="overlay">
      <!-- 👇 id can also be used on an element containing multiple text elements -->
      <div id="{id}">
        <p>But by October, tanks and artillery could be seen.</p>
        <p>
          In total, over 50 pieces of heavy machinery and 200 personnel are now
          based here.
        </p>
      </div>
    </div>
  </BeforeAfter>
  <style lang="scss">div.overlay {
  color: white;
  padding: 15px;
  max-width: 250px;
  background: rgba(0, 0, 0, 0.2);
}

p {
  color: white;
}</style>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","withOverlaysDocs","ariaDescriptionsDocs","BeforeAfter","beforeImg","afterImg","withComponentDocs","withStoryDocs"]}),Dt=ae.meta,Ct=["Default","WithOverlays","ARIADescriptions"],jt=ae.stories.Default,Jt=ae.stories.WithOverlays,Pt=ae.stories.ARIADescriptions;export{Pt as ARIADescriptions,jt as Default,Jt as WithOverlays,Ct as __namedExportsOrder,Dt as default};
//# sourceMappingURL=BeforeAfter.stories-d078773c.js.map
