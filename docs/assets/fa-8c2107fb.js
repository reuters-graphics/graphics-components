import{S as G,i as J,s as K,k as L,d as k,n as q,f as b,a as p,b as s,B as D,e as H}from"./index-df681c7c.js";const _=parseFloat;function g(t,e=";"){let l;if(Array.isArray(t))l=t.filter(a=>a);else{l=[];for(const a in t)t[a]&&l.push(`${a}:${t[a]}`)}return l.join(e)}function M(t,e,l,a){let f,o;const r="1em";let m,d,c,u="-.125em";const i="visible";return a&&(c="center",o="1.25em"),l&&(f=l),e&&(e=="lg"?(d="1.33333em",m=".75em",u="-.225em"):e=="xs"?d=".75em":e=="sm"?d=".875em":d=e.replace("x","em")),g([g({float:f,width:o,height:r,"line-height":m,"font-size":d,"text-align":c,"vertical-align":u,"transform-origin":"center",overflow:i}),t])}function P(t,e,l,a,f,o=1,r="",m=""){let d=1,c=1;return f&&(f=="horizontal"?d=-1:f=="vertical"?c=-1:d=c=-1),g([`translate(${_(e)*o}${r},${_(l)*o}${r})`,`scale(${d*_(t)},${c*_(t)})`,a&&`rotate(${a}${m})`]," ")}function I(t){let e,l,a,f,o,r,m;function d(i,y){return typeof i[7][4]=="string"?R:Q}let c=d(t),u=c(t);return{c(){e=p("svg"),l=p("g"),a=p("g"),u.c(),s(a,"transform",t[10]),s(l,"transform",f=`translate(${t[7][0]/2} ${t[7][1]/2})`),s(l,"transform-origin",o=`${t[7][0]/4} 0`),s(e,"id",t[0]),s(e,"class",r=D(t[8])+" svelte-1w3t65e"),s(e,"style",t[9]),s(e,"viewBox",m=`0 0 ${t[7][0]} ${t[7][1]}`),s(e,"aria-hidden","true"),s(e,"role","img"),s(e,"xmlns","http://www.w3.org/2000/svg")},m(i,y){k(i,e,y),H(e,l),H(l,a),u.m(a,null)},p(i,y){c===(c=d(i))&&u?u.p(i,y):(u.d(1),u=c(i),u&&(u.c(),u.m(a,null))),y&1024&&s(a,"transform",i[10]),y&128&&f!==(f=`translate(${i[7][0]/2} ${i[7][1]/2})`)&&s(l,"transform",f),y&128&&o!==(o=`${i[7][0]/4} 0`)&&s(l,"transform-origin",o),y&1&&s(e,"id",i[0]),y&256&&r!==(r=D(i[8])+" svelte-1w3t65e")&&s(e,"class",r),y&512&&s(e,"style",i[9]),y&128&&m!==(m=`0 0 ${i[7][0]} ${i[7][1]}`)&&s(e,"viewBox",m)},d(i){i&&b(e),u.d()}}}function Q(t){let e,l,a,f,o,r,m,d,c,u;return{c(){e=p("path"),r=p("path"),s(e,"d",l=t[7][4][0]),s(e,"fill",a=t[3]||t[1]||"currentColor"),s(e,"fill-opacity",f=t[6]!=!1?t[4]:t[5]),s(e,"transform",o=`translate(${t[7][0]/-2} ${t[7][1]/-2})`),s(r,"d",m=t[7][4][1]),s(r,"fill",d=t[2]||t[1]||"currentColor"),s(r,"fill-opacity",c=t[6]!=!1?t[5]:t[4]),s(r,"transform",u=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)},m(i,y){k(i,e,y),k(i,r,y)},p(i,y){y&128&&l!==(l=i[7][4][0])&&s(e,"d",l),y&10&&a!==(a=i[3]||i[1]||"currentColor")&&s(e,"fill",a),y&112&&f!==(f=i[6]!=!1?i[4]:i[5])&&s(e,"fill-opacity",f),y&128&&o!==(o=`translate(${i[7][0]/-2} ${i[7][1]/-2})`)&&s(e,"transform",o),y&128&&m!==(m=i[7][4][1])&&s(r,"d",m),y&6&&d!==(d=i[2]||i[1]||"currentColor")&&s(r,"fill",d),y&112&&c!==(c=i[6]!=!1?i[5]:i[4])&&s(r,"fill-opacity",c),y&128&&u!==(u=`translate(${i[7][0]/-2} ${i[7][1]/-2})`)&&s(r,"transform",u)},d(i){i&&(b(e),b(r))}}}function R(t){let e,l,a,f;return{c(){e=p("path"),s(e,"d",l=t[7][4]),s(e,"fill",a=t[1]||t[2]||"currentColor"),s(e,"transform",f=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)},m(o,r){k(o,e,r)},p(o,r){r&128&&l!==(l=o[7][4])&&s(e,"d",l),r&6&&a!==(a=o[1]||o[2]||"currentColor")&&s(e,"fill",a),r&128&&f!==(f=`translate(${o[7][0]/-2} ${o[7][1]/-2})`)&&s(e,"transform",f)},d(o){o&&b(e)}}}function T(t){let e,l=t[7][4]&&I(t);return{c(){l&&l.c(),e=L()},m(a,f){l&&l.m(a,f),k(a,e,f)},p(a,[f]){a[7][4]?l?l.p(a,f):(l=I(a),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:q,o:q,d(a){a&&b(e),l&&l.d(a)}}}function W(t,e,l){let{class:a=""}=e,{id:f=""}=e,{style:o=""}=e,{icon:r}=e,{size:m=""}=e,{color:d=""}=e,{fw:c=!1}=e,{pull:u=""}=e,{scale:i=1}=e,{translateX:y=0}=e,{translateY:w=0}=e,{rotate:v=""}=e,{flip:h=!1}=e,{spin:V=!1}=e,{pulse:C=!1}=e,{primaryColor:O=""}=e,{secondaryColor:z=""}=e,{primaryOpacity:X=1}=e,{secondaryOpacity:Y=.4}=e,{swapOpacity:A=!1}=e,B,F,S,N;return t.$$set=n=>{"class"in n&&l(11,a=n.class),"id"in n&&l(0,f=n.id),"style"in n&&l(12,o=n.style),"icon"in n&&l(13,r=n.icon),"size"in n&&l(14,m=n.size),"color"in n&&l(1,d=n.color),"fw"in n&&l(15,c=n.fw),"pull"in n&&l(16,u=n.pull),"scale"in n&&l(17,i=n.scale),"translateX"in n&&l(18,y=n.translateX),"translateY"in n&&l(19,w=n.translateY),"rotate"in n&&l(20,v=n.rotate),"flip"in n&&l(21,h=n.flip),"spin"in n&&l(22,V=n.spin),"pulse"in n&&l(23,C=n.pulse),"primaryColor"in n&&l(2,O=n.primaryColor),"secondaryColor"in n&&l(3,z=n.secondaryColor),"primaryOpacity"in n&&l(4,X=n.primaryOpacity),"secondaryOpacity"in n&&l(5,Y=n.secondaryOpacity),"swapOpacity"in n&&l(6,A=n.swapOpacity)},t.$$.update=()=>{t.$$.dirty&8192&&l(7,B=r&&r.icon||[0,0,"",[],""]),t.$$.dirty&12584960&&l(8,F=g([a,"svelte-fa",V&&"spin",C&&"pulse"]," ")),t.$$.dirty&118784&&l(9,S=M(o,m,u,c)),t.$$.dirty&4063232&&l(10,N=P(i,y,w,v,h,512))},[f,d,O,z,X,Y,A,B,F,S,N,a,o,r,m,c,u,i,y,w,v,h,V,C]}class E extends G{constructor(e){super(),J(this,e,W,T,K,{class:11,id:0,style:12,icon:13,size:14,color:1,fw:15,pull:16,scale:17,translateX:18,translateY:19,rotate:20,flip:21,spin:22,pulse:23,primaryColor:2,secondaryColor:3,primaryOpacity:4,secondaryOpacity:5,swapOpacity:6})}}const U=E;E.__docgen={version:3,name:"fa.svelte",data:[{visibility:"public",description:null,keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"clazz",defaultValue:""},{visibility:"public",description:null,keywords:[],name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"style",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"icon",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"fw",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"pull",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"scale",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{visibility:"public",description:null,keywords:[],name:"translateX",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"translateY",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{visibility:"public",description:null,keywords:[],name:"rotate",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"flip",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"spin",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"pulse",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"Duotone Icons",name:"primaryColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"secondaryColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"primaryOpacity",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{visibility:"public",description:null,keywords:[],name:"secondaryOpacity",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:.4},{visibility:"public",description:null,keywords:[],name:"swapOpacity",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};export{U as F};
//# sourceMappingURL=fa-8c2107fb.js.map