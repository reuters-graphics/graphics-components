import{S as te,i as ie,s as ne,o as T,g as R,b as h,c as le,d as V,m as q,t as p,h as b,f as z,j as D,y as se,z as C,e as H,w as A,x as I,l as G,u as M,p as j,q as N,k as re,A as ae,B as O}from"./index-85f88930.js";import{B as oe}from"./Block-d1b8152c.js";import{B as ce}from"./Byline-bc75d557.js";import{M as ee}from"./Markdown-e31fd5d7.js";const fe=s=>({}),Q=s=>({}),ue=s=>({}),X=s=>({}),de=s=>({}),Y=s=>({}),_e=s=>({}),Z=s=>({});function x(s){let t,l;const i=s[11].crown,e=G(i,s,s[12],Z);return{c(){t=T("div"),e&&e.c(),h(t,"class","crown-container")},m(n,r){V(n,t,r),e&&e.m(t,null),l=!0},p(n,r){e&&e.p&&(!l||r&4096)&&M(e,i,n,n[12],l?N(i,n[12],r,_e):j(n[12]),Z)},i(n){l||(p(e,n),l=!0)},o(n){b(e,n),l=!1},d(n){n&&z(t),e&&e.d(n)}}}function $(s){let t,l;return{c(){t=T("p"),l=re(s[3]),h(t,"class","section-title mb-0 font-subhed text-xs text-secondary font-bold uppercase whitespace-nowrap tracking-wider")},m(i,e){V(i,t,e),H(t,l)},p(i,e){e&8&&ae(l,i[3])},d(i){i&&z(t)}}}function me(s){let t,l,i,e;return l=new ee({props:{source:s[0],parseInline:!0}}),{c(){t=T("h1"),R(l.$$.fragment),h(t,"class",i=O(s[8])+" svelte-1xmn7bm")},m(n,r){V(n,t,r),q(l,t,null),e=!0},p(n,r){const y={};r&1&&(y.source=n[0]),l.$set(y),(!e||r&256&&i!==(i=O(n[8])+" svelte-1xmn7bm"))&&h(t,"class",i)},i(n){e||(p(l.$$.fragment,n),e=!0)},o(n){b(l.$$.fragment,n),e=!1},d(n){n&&z(t),D(l)}}}function pe(s){let t;const l=s[11].hed,i=G(l,s,s[12],Y);return{c(){i&&i.c()},m(e,n){i&&i.m(e,n),t=!0},p(e,n){i&&i.p&&(!t||n&4096)&&M(i,l,e,e[12],t?N(l,e[12],n,de):j(e[12]),Y)},i(e){t||(p(i,e),t=!0)},o(e){b(i,e),t=!1},d(e){i&&i.d(e)}}}function be(s){let t,l,i;return l=new ee({props:{source:s[2]}}),{c(){t=T("div"),R(l.$$.fragment),h(t,"class","dek fmx-auto fmb-6")},m(e,n){V(e,t,n),q(l,t,null),i=!0},p(e,n){const r={};n&4&&(r.source=e[2]),l.$set(r)},i(e){i||(p(l.$$.fragment,e),i=!0)},o(e){b(l.$$.fragment,e),i=!1},d(e){e&&z(t),D(l)}}}function ke(s){let t,l;const i=s[11].dek,e=G(i,s,s[12],X);return{c(){t=T("div"),e&&e.c(),h(t,"class","dek fmx-auto fmb-6")},m(n,r){V(n,t,r),e&&e.m(t,null),l=!0},p(n,r){e&&e.p&&(!l||r&4096)&&M(e,i,n,n[12],l?N(i,n[12],r,ue):j(n[12]),X)},i(n){l||(p(e,n),l=!0)},o(n){b(e,n),l=!1},d(n){n&&z(t),e&&e.d(n)}}}function ye(s){let t,l;return t=new ce({props:{class:"fmy-4",authors:s[4],publishTime:s[5],updateTime:s[6],align:"center"}}),{c(){R(t.$$.fragment)},m(i,e){q(t,i,e),l=!0},p(i,e){const n={};e&16&&(n.authors=i[4]),e&32&&(n.publishTime=i[5]),e&64&&(n.updateTime=i[6]),t.$set(n)},i(i){l||(p(t.$$.fragment,i),l=!0)},o(i){b(t.$$.fragment,i),l=!1},d(i){D(t,i)}}}function he(s){let t;const l=s[11].byline,i=G(l,s,s[12],Q);return{c(){i&&i.c()},m(e,n){i&&i.m(e,n),t=!0},p(e,n){i&&i.p&&(!t||n&4096)&&M(i,l,e,e[12],t?N(l,e[12],n,fe):j(e[12]),Q)},i(e){t||(p(i,e),t=!0)},o(e){b(i,e),t=!1},d(e){i&&i.d(e)}}}function ge(s){let t,l,i,e,n,r,y,u,_,B,d,m,S,c=s[9].crown&&x(s),f=s[3]&&$(s);const o=[pe,me],g=[];function E(a,k){return a[9].hed?0:1}n=E(s),r=g[n]=o[n](s);const F=[ke,be],w=[];function J(a,k){return a[9].dek?0:a[2]?1:-1}~(u=J(s))&&(_=w[u]=F[u](s));const K=[he,ye],v=[];function L(a,k){return a[9].byline?0:a[4].length>0||a[5]?1:-1}return~(d=L(s))&&(m=v[d]=K[d](s)),{c(){t=T("header"),c&&c.c(),l=C(),i=T("div"),f&&f.c(),e=C(),r.c(),y=C(),_&&_.c(),B=C(),m&&m.c(),h(i,"class","title"),h(t,"class","relative")},m(a,k){V(a,t,k),c&&c.m(t,null),H(t,l),H(t,i),f&&f.m(i,null),H(i,e),g[n].m(i,null),H(i,y),~u&&w[u].m(i,null),H(t,B),~d&&v[d].m(t,null),S=!0},p(a,k){a[9].crown?c?(c.p(a,k),k&512&&p(c,1)):(c=x(a),c.c(),p(c,1),c.m(t,l)):c&&(A(),b(c,1,1,()=>{c=null}),I()),a[3]?f?f.p(a,k):(f=$(a),f.c(),f.m(i,e)):f&&(f.d(1),f=null);let P=n;n=E(a),n===P?g[n].p(a,k):(A(),b(g[P],1,1,()=>{g[P]=null}),I(),r=g[n],r?r.p(a,k):(r=g[n]=o[n](a),r.c()),p(r,1),r.m(i,y));let U=u;u=J(a),u===U?~u&&w[u].p(a,k):(_&&(A(),b(w[U],1,1,()=>{w[U]=null}),I()),~u?(_=w[u],_?_.p(a,k):(_=w[u]=F[u](a),_.c()),p(_,1),_.m(i,null)):_=null);let W=d;d=L(a),d===W?~d&&v[d].p(a,k):(m&&(A(),b(v[W],1,1,()=>{v[W]=null}),I()),~d?(m=v[d],m?m.p(a,k):(m=v[d]=K[d](a),m.c()),p(m,1),m.m(t,null)):m=null)},i(a){S||(p(c),p(r),p(_),p(m),S=!0)},o(a){b(c),b(r),b(_),b(m),S=!1},d(a){a&&z(t),c&&c.d(),f&&f.d(),g[n].d(),~u&&w[u].d(),~d&&v[d].d()}}}function we(s){let t,l,i;return l=new oe({props:{width:s[7],class:"headline text-center fmt-7 fmb-6 "+s[1],$$slots:{default:[ge]},$$scope:{ctx:s}}}),{c(){t=T("div"),R(l.$$.fragment),h(t,"class","headline-wrapper svelte-1xmn7bm"),le(t,"display","contents")},m(e,n){V(e,t,n),q(l,t,null),i=!0},p(e,[n]){const r={};n&128&&(r.width=e[7]),n&2&&(r.class="headline text-center fmt-7 fmb-6 "+e[1]),n&4989&&(r.$$scope={dirty:n,ctx:e}),l.$set(r)},i(e){i||(p(l.$$.fragment,e),i=!0)},o(e){b(l.$$.fragment,e),i=!1},d(e){e&&z(t),D(l)}}}function ve(s,t,l){let{$$slots:i={},$$scope:e}=t;const n=se(i);let{hed:r="Reuters Graphics Interactive"}=t,{class:y=""}=t,{hedSize:u="normal"}=t,{dek:_=null}=t,{section:B=null}=t,{authors:d=[]}=t,{publishTime:m=""}=t,{updateTime:S=""}=t,{width:c="normal"}=t,f;return s.$$set=o=>{"hed"in o&&l(0,r=o.hed),"class"in o&&l(1,y=o.class),"hedSize"in o&&l(10,u=o.hedSize),"dek"in o&&l(2,_=o.dek),"section"in o&&l(3,B=o.section),"authors"in o&&l(4,d=o.authors),"publishTime"in o&&l(5,m=o.publishTime),"updateTime"in o&&l(6,S=o.updateTime),"width"in o&&l(7,c=o.width),"$$scope"in o&&l(12,e=o.$$scope)},s.$$.update=()=>{if(s.$$.dirty&1024)switch(u){case"biggest":l(8,f="text-6xl");break;case"bigger":l(8,f="text-5xl");break;case"big":l(8,f="text-4xl");break;case"small":l(8,f="text-2xl");break;default:l(8,f="text-3xl")}},[r,y,_,B,d,m,S,c,f,n,u,i,e]}class Te extends te{constructor(t){super(),ie(this,t,ve,we,ne,{hed:0,class:1,hedSize:10,dek:2,section:3,authors:4,publishTime:5,updateTime:6,width:7})}}Te.__docgen={version:3,name:"Headline.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Headline, parsed as an _inline_ markdown string in an `h1` element.",name:"hed",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Reuters Graphics Interactive"},{visibility:"public",description:"Add extra classes to the block tag to target it with custom CSS.",keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"cls",defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Headline size",name:"hedSize",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Dek, parsed as a markdown string.",name:"dek",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Section title",name:"section",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[],visibility:"public",description:"Array of author names, which will be slugified to create links to Reuters author pages",name:"authors",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Publish time as a datetime string.",name:"publishTime",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Update time as a datetime string.",name:"updateTime",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Width of the headline.",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"Crown named slot",name:"crown"},{keywords:[],visibility:"public",description:"Headline named slot",name:"hed"},{keywords:[],visibility:"public",description:"Dek named slot",name:"dek"},{keywords:[],visibility:"public",description:"Custom byline/dateline",name:"byline"}],refs:[]};export{Te as H};
//# sourceMappingURL=Headline-e184c42d.js.map