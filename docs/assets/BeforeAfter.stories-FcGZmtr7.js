import{S as Se,i as Ie,s as Me,D as Re,h as k,O as R,t as g,r as x,a as w,u as ee,k as A,P as Be,E as Ye,p as Ke,c as q,m as z,d as X,q as v,o as B,w as $,f,g as W,Q as De,j as O,R as Ce,Y as me,Z as ye,v as be,y as re,z as oe,A as ie,B as fe,l as te,n as ne,e as Ge}from"./index-C9aKRT5A.js";import{g as Pe,a as je}from"./spread-CgU5AtxT.js";import{p as Qe,M as Ze,T as $e,S as le,a as ge,w as xe}from"./collect-stories-ceFdpR5E.js";import{g as et}from"./globals-D0QH3NT1.js";import{B as tt}from"./Block-C7biTRWl.js";import{P as nt}from"./PaddingReset-CiOBBFtT.js";import{t as at}from"./throttle-cOUaFLOV.js";import"./isObject-C3e4t58V.js";import"./isSymbol-Br3Fhm6g.js";import"./toNumber-BrygkUtK.js";const st=`A before and after image comparison component.

\`\`\`svelte
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
`,lt=`Add overlays with the \`beforeOverlay\` and \`afterOverlay\` slots and a caption to the \`caption\` slot, then style these elements to match your page design as below.

\`\`\`svelte
<BeforeAfter
  beforeSrc="{beforeImg}"
  beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
  afterSrc="{afterImg}"
  afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
>
  <div slot="beforeOverlay" class="overlay p-3 before">
    <p class="h4 font-bold">July 7, 2020</p>
    <p class="body-note">Initially, this site was far smaller.</p>
  </div>
  <div slot="afterOverlay" class="overlay p-3 after">
    <p class="h4 font-bold">Oct. 20, 2020</p>
    <p class="body-note">But then forces built up.</p>
  </div>
  <p slot="caption">Photos by MAXAR Technologies, 2021.</p>
</BeforeAfter>

<style lang="scss">
  .overlay {
    background: rgba(0, 0, 0, 0.45);
    max-width: 350px;
    &.after {
      text-align: right;
    }
    p {
      color: #ffffff;
    }
  }
</style>
\`\`\`
`,rt=`Use text elements in your overlays as [ARIA descriptions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) for your images by setting an ID on text elements within each overlay with the \`description\` [slot prop](https://svelte.dev/tutorial/slot-props).

> **💡 TIP:** You must always use the \`beforeAlt\` / \`afterAlt\` props to label your image for visually impaired readers, but you can use these descriptions to provide more information or context that the reader might also need.

\`\`\`svelte
  <BeforeAfter
    beforeSrc="{beforeImg}"
    beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
    afterSrc="{afterImg}"
    afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
  >
    <div slot="beforeOverlay" class="overlay p-3 before">
      <p class="h4 font-bold">July 7, 2020</p>
      <p class="body-note">Initially, this site was far smaller.</p>
    </div>
    <div slot="afterOverlay" class="overlay p-3 after">
      <p class="h4 font-bold">Oct. 20, 2020</p>
      <p class="body-note">But then forces built up.</p>
    </div>
    <p slot="caption">Photos by MAXAR Technologies, 2021.</p>
  </BeforeAfter>

  <style lang="scss">
    .overlay {
      background: rgba(0, 0, 0, 0.45);
      max-width: 350px;
      &.after {
        text-align: right;
      }
      p {
        color: #ffffff;
      }
    }
  </style>
\`\`\`
`,{window:U}=et,ot=a=>({}),he=a=>({}),it=a=>({description:a[0]&512}),ve=a=>({description:`${a[9]}-after-description`}),ft=a=>({description:a[0]&512}),_e=a=>({description:`${a[9]}-before-description`});function we(a){let e,n;return e=new tt({props:{width:a[1],id:a[9],class:"photo before-after fmy-6 "+a[6],$$slots:{default:[dt]},$$scope:{ctx:a}}}),{c(){q(e.$$.fragment)},m(s,r){z(e,s,r),n=!0},p(s,r){const t={};r[0]&2&&(t.width=s[1]),r[0]&512&&(t.id=s[9]),r[0]&64&&(t.class="photo before-after fmy-6 "+s[6]),r[0]&134741951|r[1]&1024&&(t.$$scope={dirty:r,ctx:s}),e.$set(t)},i(s){n||(g(e.$$.fragment,s),n=!0)},o(s){w(e.$$.fragment,s),n=!1},d(s){X(e,s)}}}function ke(a){let e,n,s;const r=a[34].beforeOverlay,t=re(r,a,a[41],_e);return{c(){e=v("div"),t&&t.c(),f(e,"id","image-before-label"),f(e,"class","overlay-container before absolute svelte-1aeavb4"),W(e,"clip-path","inset(0 "+a[16]+"px 0 0)"),De(()=>a[38].call(e))},m(l,o){k(l,e,o),t&&t.m(e,null),n=Ce(e,a[38].bind(e)),s=!0},p(l,o){t&&t.p&&(!s||o[0]&512|o[1]&1024)&&oe(t,r,l,l[41],s?fe(r,l[41],o,ft):ie(l[41]),_e),(!s||o[0]&65536)&&W(e,"clip-path","inset(0 "+l[16]+"px 0 0)")},i(l){s||(g(t,l),s=!0)},o(l){w(t,l),s=!1},d(l){l&&A(e),t&&t.d(l),n()}}}function Ae(a){let e,n;const s=a[34].afterOverlay,r=re(s,a,a[41],ve);return{c(){e=v("div"),r&&r.c(),f(e,"id","image-after-label"),f(e,"class","overlay-container after absolute svelte-1aeavb4")},m(t,l){k(t,e,l),r&&r.m(e,null),n=!0},p(t,l){r&&r.p&&(!n||l[0]&512|l[1]&1024)&&oe(r,s,t,t[41],n?fe(s,t[41],l,it):ie(t[41]),ve)},i(t){n||(g(r,t),n=!0)},o(t){w(r,t),n=!1},d(t){t&&A(e),r&&r.d(t)}}}function Oe(a){let e,n;return e=new nt({props:{containerIsFluid:a[1]==="fluid",$$slots:{default:[ct]},$$scope:{ctx:a}}}),{c(){q(e.$$.fragment)},m(s,r){z(e,s,r),n=!0},p(s,r){const t={};r[0]&2&&(t.containerIsFluid=s[1]==="fluid"),r[0]&512|r[1]&1024&&(t.$$scope={dirty:r,ctx:s}),e.$set(t)},i(s){n||(g(e.$$.fragment,s),n=!0)},o(s){w(e.$$.fragment,s),n=!1},d(s){X(e,s)}}}function ct(a){let e,n,s;const r=a[34].caption,t=re(r,a,a[41],he);return{c(){e=v("aside"),t&&t.c(),f(e,"class","before-after-caption mx-auto svelte-1aeavb4"),f(e,"id",n=`${a[9]}-caption`)},m(l,o){k(l,e,o),t&&t.m(e,null),s=!0},p(l,o){t&&t.p&&(!s||o[1]&1024)&&oe(t,r,l,l[41],s?fe(r,l[41],o,ot):ie(l[41]),he),(!s||o[0]&512&&n!==(n=`${l[9]}-caption`))&&f(e,"id",n)},i(l){s||(g(t,l),s=!0)},o(l){w(t,l),s=!1},d(l){l&&A(e),t&&t.d(l)}}}function dt(a){let e,n,s,r,t,l,o,I,M,D,P,j,T,m,J,V,i,b,L,F,H,S,h,C,E,_=a[27].beforeOverlay&&ke(a),y=a[27].afterOverlay&&Ae(a),u=a[27].caption&&Oe(a);return{c(){e=v("div"),n=v("figure"),s=v("img"),l=B(),o=v("img"),P=B(),_&&_.c(),j=B(),y&&y.c(),T=B(),m=v("div"),J=v("div"),V=B(),i=v("div"),H=B(),u&&u.c(),S=Re(),$(s.src,r=a[4])||f(s,"src",r),f(s,"alt",a[5]),f(s,"style",a[17]),f(s,"class","after absolute block m-0 max-w-full object-cover svelte-1aeavb4"),f(s,"aria-describedby",t=a[27].beforeOverlay&&`${a[9]}-before`||void 0),$(o.src,I=a[2])||f(o,"src",I),f(o,"alt",a[3]),f(o,"style",M="clip: rect(0 "+a[12]+"px "+a[13]+"px 0);"+a[17]),f(o,"class","before absolute block m-0 max-w-full object-cover svelte-1aeavb4"),f(o,"aria-describedby",D=a[27].afterOverlay&&`${a[9]}-after`||void 0),f(J,"class","arrow-left svelte-1aeavb4"),f(i,"class","arrow-right svelte-1aeavb4"),f(m,"tabindex","0"),f(m,"role","slider"),f(m,"aria-valuenow",b=Math.round(a[0]*100)),f(m,"class","handle svelte-1aeavb4"),W(m,"left","calc("+a[0]*100+"% - 20px)"),W(m,"--before-after-handle-colour",a[7]),W(m,"--before-after-handle-inactive-opacity",a[8]),f(n,"style",a[18]),f(n,"class","before-after-container relative overflow-hidden my-0 mx-auto svelte-1aeavb4"),f(n,"aria-labelledby",L=a[27].caption&&`${a[9]}-caption`||void 0),W(e,"height",a[13]+"px"),De(()=>a[40].call(e))},m(d,p){k(d,e,p),O(e,n),O(n,s),a[37](s),O(n,l),O(n,o),O(n,P),_&&_.m(n,null),O(n,j),y&&y.m(n,null),O(n,T),O(n,m),O(m,J),O(m,V),O(m,i),a[39](n),F=Ce(e,a[40].bind(e)),k(d,H,p),u&&u.m(d,p),k(d,S,p),h=!0,C||(E=[R(s,"load",a[23]),R(s,"mousedown",me(a[36])),R(o,"mousedown",me(a[35])),R(m,"focus",a[19]),R(m,"blur",a[20]),R(n,"touchstart",a[25]),R(n,"mousedown",a[25])],C=!0)},p(d,p){(!h||p[0]&16&&!$(s.src,r=d[4]))&&f(s,"src",r),(!h||p[0]&32)&&f(s,"alt",d[5]),(!h||p[0]&131072)&&f(s,"style",d[17]),(!h||p[0]&134218240&&t!==(t=d[27].beforeOverlay&&`${d[9]}-before`||void 0))&&f(s,"aria-describedby",t),(!h||p[0]&4&&!$(o.src,I=d[2]))&&f(o,"src",I),(!h||p[0]&8)&&f(o,"alt",d[3]),(!h||p[0]&143360&&M!==(M="clip: rect(0 "+d[12]+"px "+d[13]+"px 0);"+d[17]))&&f(o,"style",M),(!h||p[0]&134218240&&D!==(D=d[27].afterOverlay&&`${d[9]}-after`||void 0))&&f(o,"aria-describedby",D),d[27].beforeOverlay?_?(_.p(d,p),p[0]&134217728&&g(_,1)):(_=ke(d),_.c(),g(_,1),_.m(n,j)):_&&(x(),w(_,1,1,()=>{_=null}),ee()),d[27].afterOverlay?y?(y.p(d,p),p[0]&134217728&&g(y,1)):(y=Ae(d),y.c(),g(y,1),y.m(n,T)):y&&(x(),w(y,1,1,()=>{y=null}),ee()),(!h||p[0]&1&&b!==(b=Math.round(d[0]*100)))&&f(m,"aria-valuenow",b),(!h||p[0]&1)&&W(m,"left","calc("+d[0]*100+"% - 20px)"),(!h||p[0]&128)&&W(m,"--before-after-handle-colour",d[7]),(!h||p[0]&256)&&W(m,"--before-after-handle-inactive-opacity",d[8]),(!h||p[0]&262144)&&f(n,"style",d[18]),(!h||p[0]&134218240&&L!==(L=d[27].caption&&`${d[9]}-caption`||void 0))&&f(n,"aria-labelledby",L),(!h||p[0]&8192)&&W(e,"height",d[13]+"px"),d[27].caption?u?(u.p(d,p),p[0]&134217728&&g(u,1)):(u=Oe(d),u.c(),g(u,1),u.m(S.parentNode,S)):u&&(x(),w(u,1,1,()=>{u=null}),ee())},i(d){h||(g(_),g(y),g(u),h=!0)},o(d){w(_),w(y),w(u),h=!1},d(d){d&&(A(e),A(H),A(S)),a[37](null),_&&_.d(),y&&y.d(),a[39](null),F(),u&&u.d(d),C=!1,Be(E)}}}function pt(a){let e,n,s,r,t=a[2]&&a[3]&&a[4]&&a[5]&&we(a);return{c(){t&&t.c(),e=Re()},m(l,o){t&&t.m(l,o),k(l,e,o),n=!0,s||(r=[R(U,"touchmove",a[24]),R(U,"touchend",a[26]),R(U,"mousemove",a[24]),R(U,"mouseup",a[26]),R(U,"resize",at(a[22],100)),R(U,"keydown",a[21])],s=!0)},p(l,o){l[2]&&l[3]&&l[4]&&l[5]?t?(t.p(l,o),o[0]&60&&g(t,1)):(t=we(l),t.c(),g(t,1),t.m(e.parentNode,e)):t&&(x(),w(t,1,1,()=>{t=null}),ee())},i(l){n||(g(t),n=!0)},o(l){w(t),n=!1},d(l){l&&A(e),t&&t.d(l),s=!1,Be(r)}}}function ut(a,e,n){let s,r,t,l,o,I,{$$slots:M={},$$scope:D}=e;const P=Ye(M);let{width:j="normal"}=e,{height:T=600}=e,{heightRatio:m=null}=e,{beforeSrc:J=null}=e,{beforeAlt:V=null}=e,{afterSrc:i=null}=e,{afterAlt:b=null}=e,{class:L=""}=e,{handleColour:F="white"}=e,{handleInactiveOpacity:H=.9}=e,{handleMargin:S=20}=e,{keyPressStep:h=.05}=e,{offset:C=.5}=e;const E=()=>Math.floor((1+Math.random())*65536).toString(16).substring(1);let{id:_="before-after-"+E()+E()}=e,y,u=null,d=!1,p,N=0,se=!1,Y;const Te=()=>se=!0,Je=()=>se=!1,Ve=c=>{if(!se)return;const{keyCode:Q}=c,Z=S/r;Q===39?n(0,C=Math.min(1-Z,C+h)):Q===37&&n(0,C=Math.max(0+Z,C-h))},pe=()=>{y&&y.complete&&n(32,u=y.getBoundingClientRect())},We=()=>{pe()},qe=c=>{c.type==="load"&&n(32,u=c.target.getBoundingClientRect())},ue=c=>{if(d&&u){const Q=c instanceof TouchEvent&&c.touches?c.touches[0]:c,Z=p?parseInt(window.getComputedStyle(p).marginLeft.slice(0,-2)):0;let K=Q.pageX-Z-u.left;K=K<S?S:K>r-S?r-S:K,n(0,C=K/r)}},ze=c=>{d=!0,ue(c)},Xe=()=>{d=!1};J&&V&&i&&b||console.warn("Missing required src or alt props for BeforeAfter component"),Ke(()=>{const c=setInterval(()=>{u&&clearInterval(c),y&&y.complete&&!u&&pe()},50)});function Le(c){ye.call(this,a,c)}function He(c){ye.call(this,a,c)}function Fe(c){be[c?"unshift":"push"](()=>{y=c,n(14,y)})}function Ue(){N=this.clientWidth,n(10,N)}function Ee(c){be[c?"unshift":"push"](()=>{p=c,n(15,p)})}function Ne(){Y=this.clientWidth,n(11,Y)}return a.$$set=c=>{"width"in c&&n(1,j=c.width),"height"in c&&n(28,T=c.height),"heightRatio"in c&&n(29,m=c.heightRatio),"beforeSrc"in c&&n(2,J=c.beforeSrc),"beforeAlt"in c&&n(3,V=c.beforeAlt),"afterSrc"in c&&n(4,i=c.afterSrc),"afterAlt"in c&&n(5,b=c.afterAlt),"class"in c&&n(6,L=c.class),"handleColour"in c&&n(7,F=c.handleColour),"handleInactiveOpacity"in c&&n(8,H=c.handleInactiveOpacity),"handleMargin"in c&&n(30,S=c.handleMargin),"keyPressStep"in c&&n(31,h=c.keyPressStep),"offset"in c&&n(0,C=c.offset),"id"in c&&n(9,_=c.id),"$$scope"in c&&n(41,D=c.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&805308416&&n(13,s=Y&&m?Y*m:T),a.$$.dirty[1]&2&&n(33,r=u&&u.width||0),a.$$.dirty[0]&1|a.$$.dirty[1]&4&&n(12,t=r*C),a.$$.dirty[0]&8192&&n(18,l=`width:100%;height:${s}px;`),a.$$.dirty[0]&5120&&n(16,I=t<N?Math.abs(t-N):0)},n(17,o="width:100%;height:100%;"),[C,j,J,V,i,b,L,F,H,_,N,Y,t,s,y,p,I,o,l,Te,Je,Ve,We,qe,ue,ze,Xe,P,T,m,S,h,u,r,M,Le,He,Fe,Ue,Ee,Ne,D]}class G extends Se{constructor(e){super(),Ie(this,e,ut,pt,Me,{width:1,height:28,heightRatio:29,beforeSrc:2,beforeAlt:3,afterSrc:4,afterAlt:5,class:6,handleColour:7,handleInactiveOpacity:8,handleMargin:30,keyPressStep:31,offset:0,id:9},null,[-1,-1])}}G.__docgen={version:3,name:"BeforeAfter.svelte",data:[{keywords:[],visibility:"public",description:"Width of the chart within the text well.",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[],visibility:"public",description:"Height of the component",name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:600},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"If set, makes the height a ratio of the component's width.",name:"heightRatio",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:null},{keywords:[{name:"required",description:""}],visibility:"public",description:"Before image src",name:"beforeSrc",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"required",description:""}],visibility:"public",description:"Before image altText",name:"beforeAlt",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"required",description:""}],visibility:"public",description:"After image src",name:"afterSrc",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"required",description:""}],visibility:"public",description:"After image altText",name:"afterAlt",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{visibility:"public",description:"Set a class to target with SCSS.",keywords:[{name:"type",description:"{string}"}],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""},{keywords:[],visibility:"public",description:"Drag handle colour",name:"handleColour",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"white"},{keywords:[],visibility:"public",description:"Drag handle opacity",name:"handleInactiveOpacity",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:.9},{keywords:[],visibility:"public",description:"Margin at the edge of the image to stop dragging",name:"handleMargin",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:20},{keywords:[],visibility:"public",description:"Percentage of the component width the handle will travel ona key press",name:"keyPressStep",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:.05},{keywords:[],visibility:"public",description:"Initial offset of the handle, between 0 and 1.",name:"offset",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:.5},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Add an ID to target with SCSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"svelte-ignore a11y-no-noninteractive-element-interactions",name:"mousedown",parent:"img",modificators:["preventDefault"],locations:null}],slots:[{keywords:[],visibility:"public",description:"Overlay for before image",name:"beforeOverlay",params:[{name:"description",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"description",type:{kind:"type",text:"*",type:"any"}}]},{keywords:[],visibility:"public",description:"Overlay for after image",name:"afterOverlay",params:[{name:"description",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"description",type:{kind:"type",text:"*",type:"any"}}]},{keywords:[],visibility:"public",description:"Caption for image credits",name:"caption"}],refs:[]};const ce=""+new URL("myrne-before-BoXh17ax.jpg",import.meta.url).href,de=""+new URL("myrne-after-DBHdY7qj.jpg",import.meta.url).href;function mt(a){let e,n;const s=[a[2]];let r={};for(let t=0;t<s.length;t+=1)r=te(r,s[t]);return e=new G({props:r}),{c(){q(e.$$.fragment)},m(t,l){z(e,t,l),n=!0},p(t,l){const o=l&4?Pe(s,[je(t[2])]):{};e.$set(o)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function yt(a){let e;return{c(){e=v("div"),e.innerHTML='<p class="h4 font-bold">July 7, 2020</p> <p class="body-note">Initially, this site was far smaller.</p>',f(e,"slot","beforeOverlay"),f(e,"class","overlay p-3 before")},m(n,s){k(n,e,s)},p:ne,d(n){n&&A(e)}}}function bt(a){let e;return{c(){e=v("div"),e.innerHTML='<p class="h4 font-bold">Oct. 20, 2020</p> <p class="body-note">But then forces built up.</p>',f(e,"slot","afterOverlay"),f(e,"class","overlay p-3 after")},m(n,s){k(n,e,s)},p:ne,d(n){n&&A(e)}}}function gt(a){let e;return{c(){e=v("p"),e.textContent="Photos by MAXAR Technologies, 2021.",f(e,"slot","caption")},m(n,s){k(n,e,s)},p:ne,d(n){n&&A(e)}}}function ht(a){let e,n,s,r;return e=new G({props:{beforeSrc:ce,beforeAlt:"Satellite image of Russian base at Myrne taken on July 7, 2020.",afterSrc:de,afterAlt:"Satellite image of Russian base at Myrne taken on Oct. 20, 2020.",$$slots:{caption:[gt],afterOverlay:[bt],beforeOverlay:[yt]},$$scope:{ctx:a}}}),{c(){q(e.$$.fragment),n=B(),s=v("style"),s.textContent=`.overlay {
  background: rgba(0, 0, 0, 0.45);
  max-width: 350px;
}
.overlay.after {
  text-align: right;
}
.overlay p {
  color: #ffffff;
}`,f(s,"lang","scss")},m(t,l){z(e,t,l),k(t,n,l),k(t,s,l),r=!0},p(t,l){const o={};l&8&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){t&&(A(n),A(s)),X(e,t)}}}function vt(a){let e,n,s,r;return{c(){e=v("div"),n=v("p"),s=Ge("On July 7, 2020, the base contained only a few transport vehicles."),f(n,"class","body-caption"),f(n,"id",r=a[1]),f(e,"slot","beforeOverlay"),f(e,"class","overlay p-3")},m(t,l){k(t,e,l),O(e,n),O(n,s)},p(t,l){l&2&&r!==(r=t[1])&&f(n,"id",r)},d(t){t&&A(e)}}}function _t(a){let e,n,s,r,t,l;return{c(){e=v("div"),n=v("div"),s=v("p"),s.textContent="But by October, tanks and artillery could be seen.",r=B(),t=v("p"),t.textContent=`In total, over 50 pieces of heavy machinery and 200 personnel are now
          based here.`,f(s,"class","body-caption"),f(t,"class","body-caption"),f(n,"id",l=a[1]),f(e,"slot","afterOverlay"),f(e,"class","overlay p-3")},m(o,I){k(o,e,I),O(e,n),O(n,s),O(n,r),O(n,t)},p(o,I){I&2&&l!==(l=o[1])&&f(n,"id",l)},d(o){o&&A(e)}}}function wt(a){let e;return{c(){e=v("p"),e.textContent="Photos by MAXAR Technologies, 2021.",f(e,"slot","caption")},m(n,s){k(n,e,s)},p:ne,d(n){n&&A(e)}}}function kt(a){let e,n,s,r;return e=new G({props:{beforeSrc:ce,beforeAlt:"Satellite image of Russian base at Myrne taken on July 7, 2020.",afterSrc:de,afterAlt:"Satellite image of Russian base at Myrne taken on Oct. 20, 2020.",$$slots:{caption:[wt],afterOverlay:[_t,({description:t})=>({1:t}),({description:t})=>t?2:0],beforeOverlay:[vt,({description:t})=>({1:t}),({description:t})=>t?2:0]},$$scope:{ctx:a}}}),{c(){q(e.$$.fragment),n=B(),s=v("style"),s.textContent=`div.overlay {
  max-width: 250px;
  background: rgba(0, 0, 0, 0.45);
}
div.overlay p {
  color: #ffffff;
}`,f(s,"lang","scss")},m(t,l){z(e,t,l),k(t,n,l),k(t,s,l),r=!0},p(t,l){const o={};l&10&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){t&&(A(n),A(s)),X(e,t)}}}function At(a){let e,n,s,r,t,l,o,I,M,D;const P=[{title:"Components/BeforeAfter"},{component:G},a[0]];let j={};for(let i=0;i<P.length;i+=1)j=te(j,P[i]);e=new Ze({props:j}),s=new $e({props:{$$slots:{default:[mt,({args:i})=>({2:i}),({args:i})=>i?4:0]},$$scope:{ctx:a}}}),t=new le({props:{name:"Default",args:{beforeSrc:ce,beforeAlt:"Satellite image of Russian base at Myrne taken on July 7, 2020.",afterSrc:de,afterAlt:"Satellite image of Russian base at Myrne taken on Oct. 20, 2020."}}});const T=[{name:"With overlays"},ge(lt)];let m={$$slots:{default:[ht]},$$scope:{ctx:a}};for(let i=0;i<T.length;i+=1)m=te(m,T[i]);o=new le({props:m});const J=[{name:"ARIA descriptions"},ge(rt)];let V={$$slots:{default:[kt]},$$scope:{ctx:a}};for(let i=0;i<J.length;i+=1)V=te(V,J[i]);return M=new le({props:V}),{c(){q(e.$$.fragment),n=B(),q(s.$$.fragment),r=B(),q(t.$$.fragment),l=B(),q(o.$$.fragment),I=B(),q(M.$$.fragment)},m(i,b){z(e,i,b),k(i,n,b),z(s,i,b),k(i,r,b),z(t,i,b),k(i,l,b),z(o,i,b),k(i,I,b),z(M,i,b),D=!0},p(i,[b]){const L=b&1?Pe(P,[P[0],P[1],je(i[0])]):{};e.$set(L);const F={};b&12&&(F.$$scope={dirty:b,ctx:i}),s.$set(F);const H={};b&8&&(H.$$scope={dirty:b,ctx:i}),o.$set(H);const S={};b&8&&(S.$$scope={dirty:b,ctx:i}),M.$set(S)},i(i){D||(g(e.$$.fragment,i),g(s.$$.fragment,i),g(t.$$.fragment,i),g(o.$$.fragment,i),g(M.$$.fragment,i),D=!0)},o(i){w(e.$$.fragment,i),w(s.$$.fragment,i),w(t.$$.fragment,i),w(o.$$.fragment,i),w(M.$$.fragment,i),D=!1},d(i){i&&(A(n),A(r),A(l),A(I)),X(e,i),X(s,i),X(t,i),X(o,i),X(M,i)}}}function Ot(a){return[{...xe(st),argTypes:{handleColour:{control:"color"},width:{control:"select",options:["normal","wide","wider","widest","fluid"]}}}]}class St extends Se{constructor(e){super(),Ie(this,e,Ot,At,Me,{})}}const ae=Qe(St,{meta:{title:"Components/BeforeAfter"},stories:{"tpl:default":{name:"default",template:!0,source:"<BeforeAfter {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},WithOverlays:{name:"With overlays",template:!1,source:`<BeforeAfter
  beforeSrc="{beforeImg}"
  beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
  afterSrc="{afterImg}"
  afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
>
  <div slot="beforeOverlay" class="overlay p-3 before">
    <p class="h4 font-bold">July 7, 2020</p>
    <p class="body-note">Initially, this site was far smaller.</p>
  </div>
  <div slot="afterOverlay" class="overlay p-3 after">
    <p class="h4 font-bold">Oct. 20, 2020</p>
    <p class="body-note">But then forces built up.</p>
  </div>
  <p slot="caption">Photos by MAXAR Technologies, 2021.</p>
</BeforeAfter>

<style lang="scss">.overlay {
background: rgba(0, 0, 0, 0.45);
max-width: 350px;
}
.overlay.after {
text-align: right;
}
.overlay p {
color: #ffffff;
}</style>`,hasArgs:!1},ARIADescriptions:{name:"ARIA descriptions",template:!1,source:`<BeforeAfter
  beforeSrc="{beforeImg}"
  beforeAlt="Satellite image of Russian base at Myrne taken on July 7, 2020."
  afterSrc="{afterImg}"
  afterAlt="Satellite image of Russian base at Myrne taken on Oct. 20, 2020."
>
  <div let:description="{id}" slot="beforeOverlay" class="overlay p-3">
    <p class="body-caption" {id}>
      On July 7, 2020, the base contained only a few transport vehicles.
    </p>
  </div>
  <div let:description="{id}" slot="afterOverlay" class="overlay p-3">
    <!-- 👇 id can also be used on an element containing multiple text elements -->
    <div {id}>
      <p class="body-caption">
        But by October, tanks and artillery could be seen.
      </p>
      <p class="body-caption">
        In total, over 50 pieces of heavy machinery and 200 personnel are now
        based here.
      </p>
    </div>
  </div>
  <p slot="caption">Photos by MAXAR Technologies, 2021.</p>
</BeforeAfter>
<style lang="scss">div.overlay {
max-width: 250px;
background: rgba(0, 0, 0, 0.45);
}
div.overlay p {
color: #ffffff;
}</style>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","withOverlaysDocs","ariaDescriptionsDocs","BeforeAfter","beforeImg","afterImg","withComponentDocs","withStoryDocs"]}),Vt=ae.meta,Wt=["Default","WithOverlays","ARIADescriptions"],qt=ae.stories.Default,zt=ae.stories.WithOverlays,Xt=ae.stories.ARIADescriptions;export{Xt as ARIADescriptions,qt as Default,zt as WithOverlays,Wt as __namedExportsOrder,Vt as default};
