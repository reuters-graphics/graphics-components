import{S as $,i as x,s as ee,j as te,m as le,b as c,t as p,n as ie,K as ne,w as b,D as B,x as g,a as w,z as y,g as D,c as I,d as H,q as M,u as S,r as T,v as V,M as se,Y as oe,y as Y,E as C,e as re,W as ae}from"./index-25af778d.js";import{B as fe}from"./Block-9c89ee1a.js";import{m as G}from"./marked.esm-76161808.js";const ce=s=>({}),A=s=>({}),_e=s=>({}),F=s=>({}),de=s=>({}),J=s=>({}),ue=s=>({}),N=s=>({}),pe=s=>({}),O=s=>({});function P(s){let i,o;const t=s[4].crown,e=M(t,s,s[5],O);return{c(){i=b("div"),e&&e.c(),g(i,"class","crown-container svelte-r3fe5t")},m(l,n){w(l,i,n),e&&e.m(i,null),o=!0},p(l,n){e&&e.p&&(!o||n&32)&&S(e,t,l,l[5],o?V(t,l[5],n,pe):T(l[5]),O)},i(l){o||(c(e,l),o=!0)},o(l){p(e,l),o=!1},d(l){l&&H(i),e&&e.d(l)}}}function Q(s){let i,o;return{c(){i=b("p"),o=se(s[2]),g(i,"class","section-title")},m(t,e){w(t,i,e),y(i,o)},p(t,e){e&4&&oe(o,t[2])},d(t){t&&H(i)}}}function me(s){let i,o=G.parseInline(s[0])+"";return{c(){i=b("h1")},m(t,e){w(t,i,e),i.innerHTML=o},p(t,e){e&1&&o!==(o=G.parseInline(t[0])+"")&&(i.innerHTML=o)},i:C,o:C,d(t){t&&H(i)}}}function ke(s){let i;const o=s[4].hed,t=M(o,s,s[5],N);return{c(){t&&t.c()},m(e,l){t&&t.m(e,l),i=!0},p(e,l){t&&t.p&&(!i||l&32)&&S(t,o,e,e[5],i?V(o,e[5],l,ue):T(e[5]),N)},i(e){i||(c(t,e),i=!0)},o(e){p(t,e),i=!1},d(e){t&&t.d(e)}}}function be(s){let i,o=G(s[1])+"",t;return{c(){i=new ae(!1),t=re(),i.a=t},m(e,l){i.m(o,e,l),w(e,t,l)},p(e,l){l&2&&o!==(o=G(e[1])+"")&&i.p(o)},i:C,o:C,d(e){e&&H(t),e&&i.d()}}}function ye(s){let i;const o=s[4].dek,t=M(o,s,s[5],J);return{c(){t&&t.c()},m(e,l){t&&t.m(e,l),i=!0},p(e,l){t&&t.p&&(!i||l&32)&&S(t,o,e,e[5],i?V(o,e[5],l,de):T(e[5]),J)},i(e){i||(c(t,e),i=!0)},o(e){p(t,e),i=!1},d(e){t&&t.d(e)}}}function U(s){let i,o,t,e=s[3].byline&&X(s),l=s[3].dateline&&Z(s);return{c(){i=b("aside"),e&&e.c(),o=B(),l&&l.c(),g(i,"class","article-metadata svelte-r3fe5t"),Y(i,"pt-1",!s[1])},m(n,a){w(n,i,a),e&&e.m(i,null),y(i,o),l&&l.m(i,null),t=!0},p(n,a){n[3].byline?e?(e.p(n,a),a&8&&c(e,1)):(e=X(n),e.c(),c(e,1),e.m(i,o)):e&&(D(),p(e,1,1,()=>{e=null}),I()),n[3].dateline?l?(l.p(n,a),a&8&&c(l,1)):(l=Z(n),l.c(),c(l,1),l.m(i,null)):l&&(D(),p(l,1,1,()=>{l=null}),I()),(!t||a&2)&&Y(i,"pt-1",!n[1])},i(n){t||(c(e),c(l),t=!0)},o(n){p(e),p(l),t=!1},d(n){n&&H(i),e&&e.d(),l&&l.d()}}}function X(s){let i,o,t;const e=s[4].byline,l=M(e,s,s[5],F);return{c(){i=b("div"),o=b("div"),l&&l.c(),g(o,"class","byline svelte-r3fe5t"),g(i,"class","byline-container svelte-r3fe5t")},m(n,a){w(n,i,a),y(i,o),l&&l.m(o,null),t=!0},p(n,a){l&&l.p&&(!t||a&32)&&S(l,e,n,n[5],t?V(e,n[5],a,_e):T(n[5]),F)},i(n){t||(c(l,n),t=!0)},o(n){p(l,n),t=!1},d(n){n&&H(i),l&&l.d(n)}}}function Z(s){let i,o,t;const e=s[4].dateline,l=M(e,s,s[5],A);return{c(){i=b("div"),o=b("div"),l&&l.c(),g(o,"class","published"),g(i,"class","dateline-container svelte-r3fe5t")},m(n,a){w(n,i,a),y(i,o),l&&l.m(o,null),t=!0},p(n,a){l&&l.p&&(!t||a&32)&&S(l,e,n,n[5],t?V(e,n[5],a,ce):T(n[5]),A)},i(n){t||(c(l,n),t=!0)},o(n){p(l,n),t=!1},d(n){n&&H(i),l&&l.d(n)}}}function ge(s){let i,o,t,e,l,n,a,_,f,j,q,d=s[3].crown&&P(s),m=s[2]&&Q(s);const z=[ke,me],v=[];function E(r,k){return r[3].hed?0:1}l=E(s),n=v[l]=z[l](s);const K=[ye,be],h=[];function W(r,k){return r[3].dek?0:r[1]?1:-1}~(_=W(s))&&(f=h[_]=K[_](s));let u=(s[3].byline||s[3].dateline)&&U(s);return{c(){i=b("header"),d&&d.c(),o=B(),t=b("div"),m&&m.c(),e=B(),n.c(),a=B(),f&&f.c(),j=B(),u&&u.c(),g(t,"class","title"),g(i,"class","headline svelte-r3fe5t")},m(r,k){w(r,i,k),d&&d.m(i,null),y(i,o),y(i,t),m&&m.m(t,null),y(t,e),v[l].m(t,null),y(t,a),~_&&h[_].m(t,null),y(i,j),u&&u.m(i,null),q=!0},p(r,k){r[3].crown?d?(d.p(r,k),k&8&&c(d,1)):(d=P(r),d.c(),c(d,1),d.m(i,o)):d&&(D(),p(d,1,1,()=>{d=null}),I()),r[2]?m?m.p(r,k):(m=Q(r),m.c(),m.m(t,e)):m&&(m.d(1),m=null);let L=l;l=E(r),l===L?v[l].p(r,k):(D(),p(v[L],1,1,()=>{v[L]=null}),I(),n=v[l],n?n.p(r,k):(n=v[l]=z[l](r),n.c()),c(n,1),n.m(t,a));let R=_;_=W(r),_===R?~_&&h[_].p(r,k):(f&&(D(),p(h[R],1,1,()=>{h[R]=null}),I()),~_?(f=h[_],f?f.p(r,k):(f=h[_]=K[_](r),f.c()),c(f,1),f.m(t,null)):f=null),r[3].byline||r[3].dateline?u?(u.p(r,k),k&8&&c(u,1)):(u=U(r),u.c(),c(u,1),u.m(i,null)):u&&(D(),p(u,1,1,()=>{u=null}),I())},i(r){q||(c(d),c(n),c(f),c(u),q=!0)},o(r){p(d),p(n),p(f),p(u),q=!1},d(r){r&&H(i),d&&d.d(),m&&m.d(),v[l].d(),~_&&h[_].d(),u&&u.d()}}}function ve(s){let i,o;return i=new fe({props:{cls:"mb-1",$$slots:{default:[ge]},$$scope:{ctx:s}}}),{c(){te(i.$$.fragment)},m(t,e){le(i,t,e),o=!0},p(t,[e]){const l={};e&47&&(l.$$scope={dirty:e,ctx:t}),i.$set(l)},i(t){o||(c(i.$$.fragment,t),o=!0)},o(t){p(i.$$.fragment,t),o=!1},d(t){ie(i,t)}}}function he(s,i,o){let{$$slots:t={},$$scope:e}=i;const l=ne(t);let{hed:n="Reuters Graphics Interactive"}=i,{dek:a=null}=i,{section:_=null}=i;return s.$$set=f=>{"hed"in f&&o(0,n=f.hed),"dek"in f&&o(1,a=f.dek),"section"in f&&o(2,_=f.section),"$$scope"in f&&o(5,e=f.$$scope)},[n,a,_,l,t,e]}class we extends ${constructor(i){super(),x(this,i,he,ve,ee,{hed:0,dek:1,section:2})}}we.__docgen={version:3,name:"Headline.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Headline, parsed as an _inline_ markdown string in an `h1` element.",name:"hed",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Reuters Graphics Interactive"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Dek, parsed as a markdown string.",name:"dek",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Section title",name:"section",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"Crown named slot",name:"crown"},{keywords:[],visibility:"public",description:"Headline named slot",name:"hed"},{keywords:[],visibility:"public",description:"Dek named slot",name:"dek"},{keywords:[],visibility:"public",description:"Byline named slot",name:"byline"},{keywords:[],visibility:"public",description:"Dateline named slot",name:"dateline"}],refs:[]};export{we as H};
//# sourceMappingURL=Headline-3a2c7ebf.js.map