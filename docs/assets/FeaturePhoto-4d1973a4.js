import{S as B,i as j,s as D,g as S,m as A,t as g,h as p,j as O,D as E,o as b,v as V,b as d,d as h,e as z,w as H,x as N,f as _,E as R,F,y as G,z as J}from"./index-17b0726b.js";import{B as M}from"./Block-05b40915.js";import{P as K}from"./PaddingReset-e7f108ee.js";function L(s){let e,i;return{c(){e=b("div"),d(e,"class","placeholder w-full svelte-g9m2b0"),d(e,"style",i=`height: ${s[5]}px;`)},m(t,n){h(t,e,n)},p(t,n){n&32&&i!==(i=`height: ${t[5]}px;`)&&d(e,"style",i)},d(t){t&&_(e)}}}function Q(s){let e,i;return{c(){e=b("img"),d(e,"class","w-full my-0"),F(e.src,i=s[0])||d(e,"src",i),d(e,"alt",s[1])},m(t,n){h(t,e,n)},p(t,n){n&1&&!F(e.src,i=t[0])&&d(e,"src",i),n&2&&d(e,"alt",t[1])},d(t){t&&_(e)}}}function T(s){let e,i;return e=new K({props:{containerIsFluid:s[6]==="fluid",$$slots:{default:[Y]},$$scope:{ctx:s}}}),{c(){S(e.$$.fragment)},m(t,n){A(e,t,n),i=!0},p(t,n){const a={};n&64&&(a.containerIsFluid=t[6]==="fluid"),n&131216&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),i=!1},d(t){O(e,t)}}}function X(s){let e,i;return{c(){e=b("figcaption"),i=G(s[4])},m(t,n){h(t,e,n),z(e,i)},p(t,n){n&16&&J(i,t[4])},d(t){t&&_(e)}}}function Y(s){let e,i;return e=new M({props:{width:s[7],class:"notes w-full fmy-0",$$slots:{default:[X]},$$scope:{ctx:s}}}),{c(){S(e.$$.fragment)},m(t,n){A(e,t,n),i=!0},p(t,n){const a={};n&128&&(a.width=t[7]),n&131088&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),i=!1},d(t){O(e,t)}}}function C(s){let e;return{c(){e=b("div"),e.textContent="altText",d(e,"class","alt-warning absolute text-xxs py-1 px-2 svelte-g9m2b0")},m(i,t){h(i,e,t)},d(i){i&&_(e)}}}function Z(s){let e,i,t,n;function a(o,u){return!o[8]||o[11]&&o[9]?Q:L}let m=a(s),f=m(s),r=s[4]&&T(s),c=!s[1]&&C();return{c(){e=b("figure"),f.c(),i=V(),r&&r.c(),t=V(),c&&c.c(),d(e,"aria-label","media"),d(e,"class","w-full flex flex-col relative")},m(o,u){h(o,e,u),f.m(e,null),z(e,i),r&&r.m(e,null),z(e,t),c&&c.m(e,null),s[16](e),n=!0},p(o,u){m===(m=a(o))&&f?f.p(o,u):(f.d(1),f=m(o),f&&(f.c(),f.m(e,i))),o[4]?r?(r.p(o,u),u&16&&g(r,1)):(r=T(o),r.c(),g(r,1),r.m(e,t)):r&&(H(),p(r,1,1,()=>{r=null}),N()),o[1]?c&&(c.d(1),c=null):c||(c=C(),c.c(),c.m(e,null))},i(o){n||(g(r),n=!0)},o(o){p(r),n=!1},d(o){o&&_(e),f.d(),r&&r.d(),c&&c.d(),s[16](null)}}}function $(s){let e,i;return e=new M({props:{width:s[6],class:"photo fmy-6 "+s[3],id:s[2],$$slots:{default:[Z]},$$scope:{ctx:s}}}),{c(){S(e.$$.fragment)},m(t,n){A(e,t,n),i=!0},p(t,[n]){const a={};n&64&&(a.width=t[6]),n&8&&(a.class="photo fmy-6 "+t[3]),n&4&&(a.id=t[2]),n&133107&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),i=!1},d(t){O(e,t)}}}function ee(s,e,i){let{src:t}=e,{altText:n}=e,{id:a=""}=e,{class:m=""}=e,{caption:f}=e,{height:r=100}=e,{width:c="normal"}=e,{textWidth:o="normal"}=e,{lazy:u=!1}=e,{top:k=0}=e,{bottom:w=0}=e,{left:v=0}=e,{right:I=0}=e,x=!1,y;const W=typeof IntersectionObserver<"u";E(()=>{if(u&&W){const l=`${w}px ${v}px ${k}px ${I}px`,P=new IntersectionObserver(q=>{i(9,x=q[0].isIntersecting),x&&P.unobserve(y)},{rootMargin:l});return P.observe(y),()=>P.unobserve(y)}});function U(l){R[l?"unshift":"push"](()=>{y=l,i(10,y)})}return s.$$set=l=>{"src"in l&&i(0,t=l.src),"altText"in l&&i(1,n=l.altText),"id"in l&&i(2,a=l.id),"class"in l&&i(3,m=l.class),"caption"in l&&i(4,f=l.caption),"height"in l&&i(5,r=l.height),"width"in l&&i(6,c=l.width),"textWidth"in l&&i(7,o=l.textWidth),"lazy"in l&&i(8,u=l.lazy),"top"in l&&i(12,k=l.top),"bottom"in l&&i(13,w=l.bottom),"left"in l&&i(14,v=l.left),"right"in l&&i(15,I=l.right)},[t,n,a,m,f,r,c,o,u,x,y,W,k,w,v,I,U]}class te extends B{constructor(e){super(),j(this,e,ee,$,D,{src:0,altText:1,id:2,class:3,caption:4,height:5,width:6,textWidth:7,lazy:8,top:12,bottom:13,left:14,right:15})}}te.__docgen={version:3,name:"FeaturePhoto.svelte",data:[{keywords:[{name:"type",description:"{string}"},{name:"required",description:""}],visibility:"public",description:"Photo src",name:"src",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"},{name:"required",description:""}],visibility:"public",description:"Photo altText",name:"altText",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Add an id to target with custom CSS.",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:"Add extra classes to target with custom CSS.",keywords:[{name:"type",description:"{string}"}],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Caption below the photo",name:"caption",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[],visibility:"public",description:"Height of the photo placeholder when lazy-loading",name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:100},{keywords:[],visibility:"public",description:"Width of the container, one of: normal, wide, wider, widest or fluid",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:`Set a different width for the text within the text well, for example,
"normal" to keep the title, description and notes inline with the rest
of the text well. Can't ever be wider than \`width\`.`,name:"textWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[],visibility:"public",description:"Whether to lazy load the photo using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)",name:"lazy",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `top` when lazy loading.",name:"top",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[],visibility:"public",description:"Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `bottom` when lazy loading.",name:"bottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[],visibility:"public",description:"Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `left` when lazy loading.",name:"left",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[],visibility:"public",description:"Set Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin) `right` when lazy loading.",name:"right",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};export{te as F};
//# sourceMappingURL=FeaturePhoto-4d1973a4.js.map