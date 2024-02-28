import{S as Se,i as Ie,s as Me,k as Re,d as k,N as R,t as g,v as x,h as w,w as ee,f as A,O as Be,x as Ke,D as Ye,g as z,m as q,j as X,o as v,y as B,F as $,b as f,c as W,P as De,e as O,Q as Ce,Y as me,Z as ye,E as be,l as re,u as oe,p as ie,q as fe,C as te,n as ne,z as Ge}from"./index-43e9a565.js";import{g as Pe,a as je}from"./spread-8a54911c.js";import{p as Qe,M as Ze,T as $e,S as se}from"./collect-stories-23d08061.js";import{g as xe}from"./globals-7f7f1b26.js";import{B as et}from"./Block-db774151.js";import{P as tt}from"./PaddingReset-ccf66d5c.js";import{t as nt}from"./throttle-dfed7c30.js";import{b as ge,w as at}from"./withParams-47e2ab71.js";import"./isObject-32699ff3.js";import"./now-bd49f550.js";import"./isSymbol-50749e90.js";const lt=`A before and after image comparison component.

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
`,st=`Add overlays with the \`beforeOverlay\` and \`afterOverlay\` slots and a caption to the \`caption\` slot, then style these elements to match your page design as below.

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
</BeforeAfter>
\`\`\`
`;const{window:N}=xe,ot=a=>({}),he=a=>({}),it=a=>({description:a[0]&512}),ve=a=>({description:`${a[9]}-after-description`}),ft=a=>({description:a[0]&512}),_e=a=>({description:`${a[9]}-before-description`});function we(a){let e,n;return e=new et({props:{width:a[1],id:a[9],class:"photo before-after fmy-6 "+a[6],$$slots:{default:[pt]},$$scope:{ctx:a}}}),{c(){z(e.$$.fragment)},m(l,r){q(e,l,r),n=!0},p(l,r){const t={};r[0]&2&&(t.width=l[1]),r[0]&512&&(t.id=l[9]),r[0]&64&&(t.class="photo before-after fmy-6 "+l[6]),r[0]&134741951|r[1]&1024&&(t.$$scope={dirty:r,ctx:l}),e.$set(t)},i(l){n||(g(e.$$.fragment,l),n=!0)},o(l){w(e.$$.fragment,l),n=!1},d(l){X(e,l)}}}function ke(a){let e,n,l;const r=a[34].beforeOverlay,t=re(r,a,a[41],_e);return{c(){e=v("div"),t&&t.c(),f(e,"id","image-before-label"),f(e,"class","overlay-container before absolute svelte-ira01o"),W(e,"clip-path","inset(0 "+a[16]+"px 0 0)"),De(()=>a[38].call(e))},m(s,o){k(s,e,o),t&&t.m(e,null),n=Ce(e,a[38].bind(e)),l=!0},p(s,o){t&&t.p&&(!l||o[0]&512|o[1]&1024)&&oe(t,r,s,s[41],l?fe(r,s[41],o,ft):ie(s[41]),_e),(!l||o[0]&65536)&&W(e,"clip-path","inset(0 "+s[16]+"px 0 0)")},i(s){l||(g(t,s),l=!0)},o(s){w(t,s),l=!1},d(s){s&&A(e),t&&t.d(s),n()}}}function Ae(a){let e,n;const l=a[34].afterOverlay,r=re(l,a,a[41],ve);return{c(){e=v("div"),r&&r.c(),f(e,"id","image-after-label"),f(e,"class","overlay-container after absolute svelte-ira01o")},m(t,s){k(t,e,s),r&&r.m(e,null),n=!0},p(t,s){r&&r.p&&(!n||s[0]&512|s[1]&1024)&&oe(r,l,t,t[41],n?fe(l,t[41],s,it):ie(t[41]),ve)},i(t){n||(g(r,t),n=!0)},o(t){w(r,t),n=!1},d(t){t&&A(e),r&&r.d(t)}}}function Oe(a){let e,n;return e=new tt({props:{containerIsFluid:a[1]==="fluid",$$slots:{default:[ct]},$$scope:{ctx:a}}}),{c(){z(e.$$.fragment)},m(l,r){q(e,l,r),n=!0},p(l,r){const t={};r[0]&2&&(t.containerIsFluid=l[1]==="fluid"),r[0]&512|r[1]&1024&&(t.$$scope={dirty:r,ctx:l}),e.$set(t)},i(l){n||(g(e.$$.fragment,l),n=!0)},o(l){w(e.$$.fragment,l),n=!1},d(l){X(e,l)}}}function ct(a){let e,n,l;const r=a[34].caption,t=re(r,a,a[41],he);return{c(){e=v("aside"),t&&t.c(),f(e,"class","before-after-caption mx-auto svelte-ira01o"),f(e,"id",n=`${a[9]}-caption`)},m(s,o){k(s,e,o),t&&t.m(e,null),l=!0},p(s,o){t&&t.p&&(!l||o[1]&1024)&&oe(t,r,s,s[41],l?fe(r,s[41],o,ot):ie(s[41]),he),(!l||o[0]&512&&n!==(n=`${s[9]}-caption`))&&f(e,"id",n)},i(s){l||(g(t,s),l=!0)},o(s){w(t,s),l=!1},d(s){s&&A(e),t&&t.d(s)}}}function pt(a){let e,n,l,r,t,s,o,I,M,D,P,j,T,m,J,V,i,b,L,H,F,S,h,C,U,_=a[27].beforeOverlay&&ke(a),y=a[27].afterOverlay&&Ae(a),u=a[27].caption&&Oe(a);return{c(){e=v("div"),n=v("figure"),l=v("img"),s=B(),o=v("img"),P=B(),_&&_.c(),j=B(),y&&y.c(),T=B(),m=v("div"),J=v("div"),V=B(),i=v("div"),F=B(),u&&u.c(),S=Re(),$(l.src,r=a[4])||f(l,"src",r),f(l,"alt",a[5]),f(l,"style",a[17]),f(l,"class","after absolute block m-0 max-w-full object-cover svelte-ira01o"),f(l,"aria-describedby",t=a[27].beforeOverlay&&`${a[9]}-before`),$(o.src,I=a[2])||f(o,"src",I),f(o,"alt",a[3]),f(o,"style",M="clip: rect(0 "+a[12]+"px "+a[13]+"px 0);"+a[17]),f(o,"class","before absolute block m-0 max-w-full object-cover svelte-ira01o"),f(o,"aria-describedby",D=a[27].afterOverlay&&`${a[9]}-after`),f(J,"class","arrow-left svelte-ira01o"),f(i,"class","arrow-right svelte-ira01o"),f(m,"tabindex","0"),f(m,"role","slider"),f(m,"aria-valuenow",b=Math.round(a[0]*100)),f(m,"class","handle svelte-ira01o"),W(m,"left","calc("+a[0]*100+"% - 20px)"),W(m,"--before-after-handle-colour",a[7]),W(m,"--before-after-handle-inactive-opacity",a[8]),f(n,"style",a[18]),f(n,"class","before-after-container relative overflow-hidden my-0 mx-auto svelte-ira01o"),f(n,"aria-labelledby",L=a[27].caption&&`${a[9]}-caption`),W(e,"height",a[13]+"px"),De(()=>a[40].call(e))},m(p,d){k(p,e,d),O(e,n),O(n,l),a[37](l),O(n,s),O(n,o),O(n,P),_&&_.m(n,null),O(n,j),y&&y.m(n,null),O(n,T),O(n,m),O(m,J),O(m,V),O(m,i),a[39](n),H=Ce(e,a[40].bind(e)),k(p,F,d),u&&u.m(p,d),k(p,S,d),h=!0,C||(U=[R(l,"load",a[23]),R(l,"mousedown",me(a[36])),R(o,"mousedown",me(a[35])),R(m,"focus",a[19]),R(m,"blur",a[20]),R(n,"touchstart",a[25]),R(n,"mousedown",a[25])],C=!0)},p(p,d){(!h||d[0]&16&&!$(l.src,r=p[4]))&&f(l,"src",r),(!h||d[0]&32)&&f(l,"alt",p[5]),(!h||d[0]&131072)&&f(l,"style",p[17]),(!h||d[0]&134218240&&t!==(t=p[27].beforeOverlay&&`${p[9]}-before`))&&f(l,"aria-describedby",t),(!h||d[0]&4&&!$(o.src,I=p[2]))&&f(o,"src",I),(!h||d[0]&8)&&f(o,"alt",p[3]),(!h||d[0]&143360&&M!==(M="clip: rect(0 "+p[12]+"px "+p[13]+"px 0);"+p[17]))&&f(o,"style",M),(!h||d[0]&134218240&&D!==(D=p[27].afterOverlay&&`${p[9]}-after`))&&f(o,"aria-describedby",D),p[27].beforeOverlay?_?(_.p(p,d),d[0]&134217728&&g(_,1)):(_=ke(p),_.c(),g(_,1),_.m(n,j)):_&&(x(),w(_,1,1,()=>{_=null}),ee()),p[27].afterOverlay?y?(y.p(p,d),d[0]&134217728&&g(y,1)):(y=Ae(p),y.c(),g(y,1),y.m(n,T)):y&&(x(),w(y,1,1,()=>{y=null}),ee()),(!h||d[0]&1&&b!==(b=Math.round(p[0]*100)))&&f(m,"aria-valuenow",b),(!h||d[0]&1)&&W(m,"left","calc("+p[0]*100+"% - 20px)"),(!h||d[0]&128)&&W(m,"--before-after-handle-colour",p[7]),(!h||d[0]&256)&&W(m,"--before-after-handle-inactive-opacity",p[8]),(!h||d[0]&262144)&&f(n,"style",p[18]),(!h||d[0]&134218240&&L!==(L=p[27].caption&&`${p[9]}-caption`))&&f(n,"aria-labelledby",L),(!h||d[0]&8192)&&W(e,"height",p[13]+"px"),p[27].caption?u?(u.p(p,d),d[0]&134217728&&g(u,1)):(u=Oe(p),u.c(),g(u,1),u.m(S.parentNode,S)):u&&(x(),w(u,1,1,()=>{u=null}),ee())},i(p){h||(g(_),g(y),g(u),h=!0)},o(p){w(_),w(y),w(u),h=!1},d(p){p&&(A(e),A(F),A(S)),a[37](null),_&&_.d(),y&&y.d(),a[39](null),H(),u&&u.d(p),C=!1,Be(U)}}}function dt(a){let e,n,l,r,t=a[2]&&a[3]&&a[4]&&a[5]&&we(a);return{c(){t&&t.c(),e=Re()},m(s,o){t&&t.m(s,o),k(s,e,o),n=!0,l||(r=[R(N,"touchmove",a[24]),R(N,"touchend",a[26]),R(N,"mousemove",a[24]),R(N,"mouseup",a[26]),R(N,"resize",nt(a[22],100)),R(N,"keydown",a[21])],l=!0)},p(s,o){s[2]&&s[3]&&s[4]&&s[5]?t?(t.p(s,o),o[0]&60&&g(t,1)):(t=we(s),t.c(),g(t,1),t.m(e.parentNode,e)):t&&(x(),w(t,1,1,()=>{t=null}),ee())},i(s){n||(g(t),n=!0)},o(s){w(t),n=!1},d(s){s&&A(e),t&&t.d(s),l=!1,Be(r)}}}function ut(a,e,n){let l,r,t,s,o,I,{$$slots:M={},$$scope:D}=e;const P=Ke(M);let{width:j="normal"}=e,{height:T=600}=e,{heightRatio:m=null}=e,{beforeSrc:J=null}=e,{beforeAlt:V=null}=e,{afterSrc:i=null}=e,{afterAlt:b=null}=e,{class:L=""}=e,{handleColour:H="white"}=e,{handleInactiveOpacity:F=.9}=e,{handleMargin:S=20}=e,{keyPressStep:h=.05}=e,{offset:C=.5}=e;const U=()=>Math.floor((1+Math.random())*65536).toString(16).substring(1);let{id:_="before-after-"+U()+U()}=e,y,u=null,p=!1,d,E=0,le=!1,K;const Te=()=>le=!0,Je=()=>le=!1,Ve=c=>{if(!le)return;const{keyCode:Q}=c,Z=S/r;Q===39?n(0,C=Math.min(1-Z,C+h)):Q===37&&n(0,C=Math.max(0+Z,C-h))},de=()=>{y&&y.complete&&n(32,u=y.getBoundingClientRect())},We=()=>{de()},ze=c=>{c.type==="load"&&n(32,u=c.target.getBoundingClientRect())},ue=c=>{if(p&&u){const Q=c.touches?c.touches[0]:c,Z=d?parseInt(window.getComputedStyle(d).marginLeft.slice(0,-2)):0;let Y=Q.pageX-Z-u.left;Y=Y<S?S:Y>r-S?r-S:Y,n(0,C=Y/r)}},qe=c=>{p=!0,ue(c)},Xe=()=>{p=!1};J&&V&&i&&b||console.warn("Missing required src or alt props for BeforeAfter component"),Ye(()=>{const c=setInterval(()=>{u&&clearInterval(c),y&&y.complete&&!u&&de()},50)});function Le(c){ye.call(this,a,c)}function Fe(c){ye.call(this,a,c)}function He(c){be[c?"unshift":"push"](()=>{y=c,n(14,y)})}function Ne(){E=this.clientWidth,n(10,E)}function Ue(c){be[c?"unshift":"push"](()=>{d=c,n(15,d)})}function Ee(){K=this.clientWidth,n(11,K)}return a.$$set=c=>{"width"in c&&n(1,j=c.width),"height"in c&&n(28,T=c.height),"heightRatio"in c&&n(29,m=c.heightRatio),"beforeSrc"in c&&n(2,J=c.beforeSrc),"beforeAlt"in c&&n(3,V=c.beforeAlt),"afterSrc"in c&&n(4,i=c.afterSrc),"afterAlt"in c&&n(5,b=c.afterAlt),"class"in c&&n(6,L=c.class),"handleColour"in c&&n(7,H=c.handleColour),"handleInactiveOpacity"in c&&n(8,F=c.handleInactiveOpacity),"handleMargin"in c&&n(30,S=c.handleMargin),"keyPressStep"in c&&n(31,h=c.keyPressStep),"offset"in c&&n(0,C=c.offset),"id"in c&&n(9,_=c.id),"$$scope"in c&&n(41,D=c.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&805308416&&n(13,l=K&&m?K*m:T),a.$$.dirty[1]&2&&n(33,r=u&&u.width||0),a.$$.dirty[0]&1|a.$$.dirty[1]&4&&n(12,t=r*C),a.$$.dirty[0]&8192&&n(18,s=`width:100%;height:${l}px;`),a.$$.dirty[0]&5120&&n(16,I=t<E?Math.abs(t-E):0)},n(17,o="width:100%;height:100%;"),[C,j,J,V,i,b,L,H,F,_,E,K,t,l,y,d,I,o,s,Te,Je,Ve,We,ze,ue,qe,Xe,P,T,m,S,h,u,r,M,Le,Fe,He,Ne,Ue,Ee,D]}class G extends Se{constructor(e){super(),Ie(this,e,ut,dt,Me,{width:1,height:28,heightRatio:29,beforeSrc:2,beforeAlt:3,afterSrc:4,afterAlt:5,class:6,handleColour:7,handleInactiveOpacity:8,handleMargin:30,keyPressStep:31,offset:0,id:9},null,[-1,-1])}}G.__docgen={version:3,name:"BeforeAfter.svelte",data:[{keywords:[],visibility:"public",description:"Width of the chart within the text well.",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[],visibility:"public",description:"Height of the component",name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:600},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"If set, makes the height a ratio of the component's width.",name:"heightRatio",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:null},{keywords:[{name:"required",description:""}],visibility:"public",description:"Before image src",name:"beforeSrc",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"required",description:""}],visibility:"public",description:"Before image altText",name:"beforeAlt",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"required",description:""}],visibility:"public",description:"After image src",name:"afterSrc",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"required",description:""}],visibility:"public",description:"After image altText",name:"afterAlt",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{visibility:"public",description:"Set a class to target with SCSS.",keywords:[{name:"type",description:"{string}"}],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""},{keywords:[],visibility:"public",description:"Drag handle colour",name:"handleColour",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"white"},{keywords:[],visibility:"public",description:"Drag handle opacity",name:"handleInactiveOpacity",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:.9},{keywords:[],visibility:"public",description:"Margin at the edge of the image to stop dragging",name:"handleMargin",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:20},{keywords:[],visibility:"public",description:"Percentage of the component width the handle will travel ona key press",name:"keyPressStep",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:.05},{keywords:[],visibility:"public",description:"Initial offset of the handle, between 0 and 1.",name:"offset",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:.5},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Add an ID to target with SCSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"svelte-ignore a11y-no-noninteractive-element-interactions",name:"mousedown",parent:"img",modificators:["preventDefault"],locations:null}],slots:[{keywords:[],visibility:"public",description:"Overlay for before image",name:"beforeOverlay",params:[{name:"description",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"description",type:{kind:"type",text:"*",type:"any"}}]},{keywords:[],visibility:"public",description:"Overlay for after image",name:"afterOverlay",params:[{name:"description",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"description",type:{kind:"type",text:"*",type:"any"}}]},{keywords:[],visibility:"public",description:"Caption for image credits",name:"caption"}],refs:[]};const ce=""+new URL("myrne-before-4b82484d.jpg",import.meta.url).href,pe=""+new URL("myrne-after-55164c0d.jpg",import.meta.url).href;function mt(a){let e,n;const l=[a[2]];let r={};for(let t=0;t<l.length;t+=1)r=te(r,l[t]);return e=new G({props:r}),{c(){z(e.$$.fragment)},m(t,s){q(e,t,s),n=!0},p(t,s){const o=s&4?Pe(l,[je(t[2])]):{};e.$set(o)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function yt(a){let e;return{c(){e=v("div"),e.innerHTML='<p class="h4 font-bold">July 7, 2020</p> <p class="body-note">Initially, this site was far smaller.</p>',f(e,"slot","beforeOverlay"),f(e,"class","overlay p-3 before")},m(n,l){k(n,e,l)},p:ne,d(n){n&&A(e)}}}function bt(a){let e;return{c(){e=v("div"),e.innerHTML='<p class="h4 font-bold">Oct. 20, 2020</p> <p class="body-note">But then forces built up.</p>',f(e,"slot","afterOverlay"),f(e,"class","overlay p-3 after")},m(n,l){k(n,e,l)},p:ne,d(n){n&&A(e)}}}function gt(a){let e;return{c(){e=v("p"),e.textContent="Photos by MAXAR Technologies, 2021.",f(e,"slot","caption")},m(n,l){k(n,e,l)},p:ne,d(n){n&&A(e)}}}function ht(a){let e,n,l,r;return e=new G({props:{beforeSrc:ce,beforeAlt:"Satellite image of Russian base at Myrne taken on July 7, 2020.",afterSrc:pe,afterAlt:"Satellite image of Russian base at Myrne taken on Oct. 20, 2020.",$$slots:{caption:[gt],afterOverlay:[bt],beforeOverlay:[yt]},$$scope:{ctx:a}}}),{c(){z(e.$$.fragment),n=B(),l=v("style"),l.textContent=`.overlay {
  background: rgba(0, 0, 0, 0.45);
  max-width: 350px;
}
.overlay.after {
  text-align: right;
}
.overlay p {
  color: #ffffff;
}`,f(l,"lang","scss")},m(t,s){q(e,t,s),k(t,n,s),k(t,l,s),r=!0},p(t,s){const o={};s&8&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){t&&(A(n),A(l)),X(e,t)}}}function vt(a){let e,n,l,r;return{c(){e=v("div"),n=v("p"),l=Ge("On July 7, 2020, the base contained only a few transport vehicles."),f(n,"class","body-caption"),f(n,"id",r=a[1]),f(e,"slot","beforeOverlay"),f(e,"class","overlay p-3")},m(t,s){k(t,e,s),O(e,n),O(n,l)},p(t,s){s&2&&r!==(r=t[1])&&f(n,"id",r)},d(t){t&&A(e)}}}function _t(a){let e,n,l,r,t,s;return{c(){e=v("div"),n=v("div"),l=v("p"),l.textContent="But by October, tanks and artillery could be seen.",r=B(),t=v("p"),t.textContent=`In total, over 50 pieces of heavy machinery and 200 personnel are now
          based here.`,f(l,"class","body-caption"),f(t,"class","body-caption"),f(n,"id",s=a[1]),f(e,"slot","afterOverlay"),f(e,"class","overlay p-3")},m(o,I){k(o,e,I),O(e,n),O(n,l),O(n,r),O(n,t)},p(o,I){I&2&&s!==(s=o[1])&&f(n,"id",s)},d(o){o&&A(e)}}}function wt(a){let e;return{c(){e=v("p"),e.textContent="Photos by MAXAR Technologies, 2021.",f(e,"slot","caption")},m(n,l){k(n,e,l)},p:ne,d(n){n&&A(e)}}}function kt(a){let e,n,l,r;return e=new G({props:{beforeSrc:ce,beforeAlt:"Satellite image of Russian base at Myrne taken on July 7, 2020.",afterSrc:pe,afterAlt:"Satellite image of Russian base at Myrne taken on Oct. 20, 2020.",$$slots:{caption:[wt],afterOverlay:[_t,({description:t})=>({1:t}),({description:t})=>t?2:0],beforeOverlay:[vt,({description:t})=>({1:t}),({description:t})=>t?2:0]},$$scope:{ctx:a}}}),{c(){z(e.$$.fragment),n=B(),l=v("style"),l.textContent=`div.overlay {
  max-width: 250px;
  background: rgba(0, 0, 0, 0.45);
}
div.overlay p {
  color: #ffffff;
}`,f(l,"lang","scss")},m(t,s){q(e,t,s),k(t,n,s),k(t,l,s),r=!0},p(t,s){const o={};s&10&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){t&&(A(n),A(l)),X(e,t)}}}function At(a){let e,n,l,r,t,s,o,I,M,D;const P=[{title:"Components/BeforeAfter"},{component:G},a[0]];let j={};for(let i=0;i<P.length;i+=1)j=te(j,P[i]);e=new Ze({props:j}),l=new $e({props:{$$slots:{default:[mt,({args:i})=>({2:i}),({args:i})=>i?4:0]},$$scope:{ctx:a}}}),t=new se({props:{name:"Default",args:{beforeSrc:ce,beforeAlt:"Satellite image of Russian base at Myrne taken on July 7, 2020.",afterSrc:pe,afterAlt:"Satellite image of Russian base at Myrne taken on Oct. 20, 2020."}}});const T=[{name:"With overlays"},ge(st)];let m={$$slots:{default:[ht]},$$scope:{ctx:a}};for(let i=0;i<T.length;i+=1)m=te(m,T[i]);o=new se({props:m});const J=[{name:"ARIA descriptions"},ge(rt)];let V={$$slots:{default:[kt]},$$scope:{ctx:a}};for(let i=0;i<J.length;i+=1)V=te(V,J[i]);return M=new se({props:V}),{c(){z(e.$$.fragment),n=B(),z(l.$$.fragment),r=B(),z(t.$$.fragment),s=B(),z(o.$$.fragment),I=B(),z(M.$$.fragment)},m(i,b){q(e,i,b),k(i,n,b),q(l,i,b),k(i,r,b),q(t,i,b),k(i,s,b),q(o,i,b),k(i,I,b),q(M,i,b),D=!0},p(i,[b]){const L=b&1?Pe(P,[P[0],P[1],je(i[0])]):{};e.$set(L);const H={};b&12&&(H.$$scope={dirty:b,ctx:i}),l.$set(H);const F={};b&8&&(F.$$scope={dirty:b,ctx:i}),o.$set(F);const S={};b&8&&(S.$$scope={dirty:b,ctx:i}),M.$set(S)},i(i){D||(g(e.$$.fragment,i),g(l.$$.fragment,i),g(t.$$.fragment,i),g(o.$$.fragment,i),g(M.$$.fragment,i),D=!0)},o(i){w(e.$$.fragment,i),w(l.$$.fragment,i),w(t.$$.fragment,i),w(o.$$.fragment,i),w(M.$$.fragment,i),D=!1},d(i){i&&(A(n),A(r),A(s),A(I)),X(e,i),X(l,i),X(t,i),X(o,i),X(M,i)}}}function Ot(a){return[{...at(lt),argTypes:{handleColour:{control:"color"},width:{control:"select",options:["normal","wide","wider","widest","fluid"]}}}]}class St extends Se{constructor(e){super(),Ie(this,e,Ot,At,Me,{})}}const ae=Qe(St,{meta:{title:"Components/BeforeAfter"},stories:{"tpl:default":{name:"default",template:!0,source:"<BeforeAfter {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},WithOverlays:{name:"With overlays",template:!1,source:`<BeforeAfter
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
    <p class="body-caption" id="{id}">
      On July 7, 2020, the base contained only a few transport vehicles.
    </p>
  </div>
  <div let:description="{id}" slot="afterOverlay" class="overlay p-3">
    <!-- 👇 id can also be used on an element containing multiple text elements -->
    <div id="{id}">
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
}</style>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","withOverlaysDocs","ariaDescriptionsDocs","BeforeAfter","beforeImg","afterImg","withComponentDocs","withStoryDocs"]}),Wt=ae.meta,zt=["Default","WithOverlays","ARIADescriptions"],qt=ae.stories.Default,Xt=ae.stories.WithOverlays,Lt=ae.stories.ARIADescriptions;export{Lt as ARIADescriptions,qt as Default,Xt as WithOverlays,zt as __namedExportsOrder,Wt as default};
//# sourceMappingURL=BeforeAfter.stories-dda8e8ab.js.map
