import{S as F,i as G,s as P,Z as K,x as u,y as V,a as $,z as p,E as B,d as M,w as _,D as T,M as A,Y as z,Q as te,q as Pe,u as Ve,r as Ze,v as Ie,g as W,t as C,c as J,b as S,G as je,L as qe,a2 as We,j as U,m as E,n as N,a5 as I,R as Je,N as H,O as Oe,e as Re,C as le,B as Ke,H as Qe,o as Ye}from"./index-25af778d.js";import{R as Be}from"./ReutersLogo-9287cf54.js";import{n as q}from"./index-2224dbf5.js";import{g as ne}from"./time-cc3fd1f0.js";import{w as Xe}from"./collect-stories-cce06d4a.js";function xe(s){let e,l;return{c(){e=K("svg"),l=K("path"),u(l,"d","M10.413.587a.71.71 0 0 0-1.027 0L5.5 4.474 1.613.587a.71.71 0 0 0-1.027 0 .709.709 0 0 0 0 1.027l4.4 4.4c.147.147.367.22.513.22a.79.79 0 0 0 .513-.22l4.4-4.4a.71.71 0 0 0 0-1.027h.001Z"),u(e,"class","arrow svelte-l3oc9t"),u(e,"focusable","false"),u(e,"aria-hidden","true"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"viewBox","0 0 11 7"),V(e,"rotated",s[0])},m(t,n){$(t,e,n),p(e,l)},p(t,[n]){n&1&&V(e,"rotated",t[0])},i:B,o:B,d(t){t&&M(e)}}}function et(s,e,l){let{rotate:t=!1}=e;return s.$$set=n=>{"rotate"in n&&l(0,t=n.rotate)},[t]}class Y extends F{constructor(e){super(),G(this,e,et,xe,P,{rotate:0})}}Y.__docgen={version:3,name:"DownArrow.svelte",data:[{visibility:"public",description:null,keywords:[],name:"rotate",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function se(s){let e,l,t=s[0].primary_section.name+"",n,i;return{c(){e=_("a"),l=_("span"),n=A(t),u(l,"class","label svelte-1daidbx"),u(e,"href",i=q(s[0].primary_section.id)),u(e,"class","svelte-1daidbx")},m(r,a){$(r,e,a),p(e,l),p(l,n)},p(r,a){a&1&&t!==(t=r[0].primary_section.name+"")&&z(n,t),a&1&&i!==(i=q(r[0].primary_section.id))&&u(e,"href",i)},d(r){r&&M(e)}}}function ie(s){let e,l=ne(s[0].display_time)+"",t,n;return{c(){e=_("time"),t=A(l),u(e,"datetime",n=s[0].display_time),u(e,"class","svelte-1daidbx")},m(i,r){$(i,e,r),p(e,t)},p(i,r){r&1&&l!==(l=ne(i[0].display_time)+"")&&z(t,l),r&1&&n!==(n=i[0].display_time)&&u(e,"datetime",n)},d(i){i&&M(e)}}}function re(s){let e,l,t,n;return{c(){e=_("div"),l=_("img"),te(l.src,t=s[2].renditions.square["120w"])||u(l,"src",t),u(l,"alt",n=s[2].alt_text),u(l,"class","svelte-1daidbx"),u(e,"class","thumbnail svelte-1daidbx")},m(i,r){$(i,e,r),p(e,l)},p(i,r){r&4&&!te(l.src,t=i[2].renditions.square["120w"])&&u(l,"src",t),r&4&&n!==(n=i[2].alt_text)&&u(l,"alt",n)},d(i){i&&M(e)}}}function tt(s){let e,l,t,n,i,r=s[0].title+"",a,o,c,d,f=s[1]&&se(s),k=!s[1]&&ie(s),v=s[2]&&re(s);return{c(){e=_("div"),l=_("a"),t=_("div"),f&&f.c(),n=T(),i=_("span"),a=A(r),o=T(),k&&k.c(),c=T(),v&&v.c(),u(i,"class","svelte-1daidbx"),u(t,"class","story-text svelte-1daidbx"),V(t,"has-thumbnail",s[2]),u(l,"href",d=q(s[0].canonical_url)),u(l,"class","svelte-1daidbx"),u(e,"class","story-card svelte-1daidbx")},m(m,h){$(m,e,h),p(e,l),p(l,t),f&&f.m(t,null),p(t,n),p(t,i),p(i,a),p(t,o),k&&k.m(t,null),p(l,c),v&&v.m(l,null)},p(m,[h]){m[1]?f?f.p(m,h):(f=se(m),f.c(),f.m(t,n)):f&&(f.d(1),f=null),h&1&&r!==(r=m[0].title+"")&&z(a,r),m[1]?k&&(k.d(1),k=null):k?k.p(m,h):(k=ie(m),k.c(),k.m(t,null)),h&4&&V(t,"has-thumbnail",m[2]),m[2]?v?v.p(m,h):(v=re(m),v.c(),v.m(l,null)):v&&(v.d(1),v=null),h&1&&d!==(d=q(m[0].canonical_url))&&u(l,"href",d)},i:B,o:B,d(m){m&&M(e),f&&f.d(),k&&k.d(),v&&v.d()}}}function lt(s,e,l){let t,{story:n}=e,{withSection:i=!1}=e;return s.$$set=r=>{"story"in r&&l(0,n=r.story),"withSection"in r&&l(1,i=r.withSection)},s.$$.update=()=>{s.$$.dirty&1&&l(2,t=n.thumbnail)},[n,i,t]}class Ae extends F{constructor(e){super(),G(this,e,lt,tt,P,{story:0,withSection:1})}}Ae.__docgen={version:3,name:"index.svelte",data:[{visibility:"public",description:null,keywords:[],name:"story",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"withSection",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function nt(s){let e;return{c(){e=_("div"),e.innerHTML='<div class="spinner-container svelte-1rjmwt8"><div class="spinner svelte-1rjmwt8"></div></div>'},m(l,t){$(l,e,t)},p:B,i:B,o:B,d(l){l&&M(e)}}}class Ue extends F{constructor(e){super(),G(this,e,null,nt,P,{})}}Ue.__docgen={version:3,name:"index.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function ae(s,e,l){const t=s.slice();return t[7]=e[l],t}function st(s){let e,l,t;return l=new Ue({}),{c(){e=_("div"),U(l.$$.fragment),u(e,"class","spinner svelte-t8r4r3")},m(n,i){$(n,e,i),E(l,e,null),t=!0},p:B,i(n){t||(S(l.$$.fragment,n),t=!0)},o(n){C(l.$$.fragment,n),t=!1},d(n){n&&M(e),N(l)}}}function it(s){let e,l,t,n,i,r=s[1],a=[];for(let c=0;c<r.length;c+=1)a[c]=oe(ae(s,r,c));const o=c=>C(a[c],1,1,()=>{a[c]=null});return{c(){e=_("span"),l=A(s[0]),t=T(),n=_("ul");for(let c=0;c<a.length;c+=1)a[c].c();u(e,"class","latest svelte-t8r4r3"),u(n,"class","story-list svelte-t8r4r3")},m(c,d){$(c,e,d),p(e,l),$(c,t,d),$(c,n,d);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(n,null);i=!0},p(c,d){if((!i||d&1)&&z(l,c[0]),d&6){r=c[1];let f;for(f=0;f<r.length;f+=1){const k=ae(c,r,f);a[f]?(a[f].p(k,d),S(a[f],1)):(a[f]=oe(k),a[f].c(),S(a[f],1),a[f].m(n,null))}for(W(),f=r.length;f<a.length;f+=1)o(f);J()}},i(c){if(!i){for(let d=0;d<r.length;d+=1)S(a[d]);i=!0}},o(c){a=a.filter(Boolean);for(let d=0;d<a.length;d+=1)C(a[d]);i=!1},d(c){c&&M(e),c&&M(t),c&&M(n),I(a,c)}}}function oe(s){let e,l,t,n;return l=new Ae({props:{story:s[7],withSection:s[2]==="more"}}),{c(){e=_("li"),U(l.$$.fragment),t=T(),u(e,"class","story-item svelte-t8r4r3")},m(i,r){$(i,e,r),E(l,e,null),p(e,t),n=!0},p(i,r){const a={};r&2&&(a.story=i[7]),r&4&&(a.withSection=i[2]==="more"),l.$set(a)},i(i){n||(S(l.$$.fragment,i),n=!0)},o(i){C(l.$$.fragment,i),n=!1},d(i){i&&M(e),N(l)}}}function rt(s){let e,l,t,n,i,r,a,o,c,d,f;const k=s[5].default,v=Pe(k,s,s[4],null),m=[it,st],h=[];function g(b,w){return b[1].length>0?0:1}return c=g(s),d=h[c]=m[c](s),{c(){e=_("div"),l=_("div"),t=_("div"),n=_("div"),i=_("div"),v&&v.c(),r=T(),a=_("div"),o=_("div"),d.c(),u(i,"class","inner svelte-t8r4r3"),u(n,"class","submenu svelte-t8r4r3"),u(o,"class","inner svelte-t8r4r3"),u(a,"class","stories-container svelte-t8r4r3"),u(t,"class","inner svelte-t8r4r3"),u(l,"class","dropdown-container svelte-t8r4r3"),u(e,"class","dropdown svelte-t8r4r3")},m(b,w){$(b,e,w),p(e,l),p(l,t),p(t,n),p(n,i),v&&v.m(i,null),p(t,r),p(t,a),p(a,o),h[c].m(o,null),f=!0},p(b,[w]){v&&v.p&&(!f||w&16)&&Ve(v,k,b,b[4],f?Ie(k,b[4],w,null):Ze(b[4]),null);let y=c;c=g(b),c===y?h[c].p(b,w):(W(),C(h[y],1,1,()=>{h[y]=null}),J(),d=h[c],d?d.p(b,w):(d=h[c]=m[c](b),d.c()),S(d,1),d.m(o,null))},i(b){f||(S(v,b),S(d),f=!0)},o(b){C(v,b),C(d),f=!1},d(b){b&&M(e),v&&v.d(b),h[c].d()}}}function at(s,e,l){let t,{$$slots:n={},$$scope:i}=e;const r=je("nav-active-section");qe(s,r,d=>l(2,t=d));let{headingText:a="Trending Stories"}=e,o=[],c=null;return We(async()=>{c!==t&&(t==="more"?await fetch("https://www.reuters.com/pf/api/v3/content/fetch/articles-by-trends-v1?"+new URLSearchParams({query:JSON.stringify({size:4,website:"reuters"})})).then(d=>d.json()).then(d=>{l(1,o=d.result.articles),c=t}):await fetch("https://www.reuters.com/pf/api/v3/content/fetch/recent-stories-by-sections-v1?"+new URLSearchParams({query:JSON.stringify({section_ids:t,size:4,website:"reuters"})})).then(d=>d.json()).then(d=>{l(1,o=d.result.articles),c=t}))}),s.$$set=d=>{"headingText"in d&&l(0,a=d.headingText),"$$scope"in d&&l(4,i=d.$$scope)},[a,o,t,r,i,n]}class X extends F{constructor(e){super(),G(this,e,at,rt,P,{headingText:0})}}X.__docgen={version:3,name:"index.svelte",data:[{visibility:"public",description:null,keywords:[],name:"headingText",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Trending Stories"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function ue(s,e,l){const t=s.slice();return t[3]=e[l],t}function ce(s,e,l){const t=s.slice();return t[3]=e[l],t}function de(s){let e,l=s[0].children.slice(0,s[2]),t=[];for(let n=0;n<l.length;n+=1)t[n]=fe(ce(s,l,n));return{c(){e=_("ul");for(let n=0;n<t.length;n+=1)t[n].c();u(e,"class","sections-group svelte-wq50ja")},m(n,i){$(n,e,i);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null)},p(n,i){if(i&5){l=n[0].children.slice(0,n[2]);let r;for(r=0;r<l.length;r+=1){const a=ce(n,l,r);t[r]?t[r].p(a,i):(t[r]=fe(a),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(n){n&&M(e),I(t,n)}}}function fe(s){let e,l,t=s[3].name+"",n,i,r;return{c(){e=_("li"),l=_("a"),n=A(t),r=T(),u(l,"class","subsection-link svelte-wq50ja"),u(l,"href",i=q(s[3].url)),u(e,"class","svelte-wq50ja")},m(a,o){$(a,e,o),p(e,l),p(l,n),p(e,r)},p(a,o){o&5&&t!==(t=a[3].name+"")&&z(n,t),o&5&&i!==(i=q(a[3].url))&&u(l,"href",i)},d(a){a&&M(e)}}}function me(s){let e,l,t=s[3].name+"",n,i,r;return{c(){e=_("li"),l=_("a"),n=A(t),r=T(),u(l,"class","subsection-link svelte-wq50ja"),u(l,"href",i=q(s[3].url)),u(e,"class","svelte-wq50ja")},m(a,o){$(a,e,o),p(e,l),p(l,n),p(e,r)},p(a,o){o&5&&t!==(t=a[3].name+"")&&z(n,t),o&5&&i!==(i=q(a[3].url))&&u(l,"href",i)},d(a){a&&M(e)}}}function ot(s){let e,l,t,n=s[0].name+"",i,r,a,o,c,d,f=s[2]>0&&de(s),k=s[0].children.slice(s[2]),v=[];for(let m=0;m<k.length;m+=1)v[m]=me(ue(s,k,m));return{c(){e=_("a"),l=_("span"),t=A("Browse "),i=A(n),a=T(),o=_("div"),f&&f.c(),c=T(),d=_("ul");for(let m=0;m<v.length;m+=1)v[m].c();u(l,"class","heading svelte-wq50ja"),u(e,"href",r=q(s[0].url)),u(e,"class","svelte-wq50ja"),u(d,"class","sections-group svelte-wq50ja"),u(o,"class","sections svelte-wq50ja")},m(m,h){$(m,e,h),p(e,l),p(l,t),p(l,i),$(m,a,h),$(m,o,h),f&&f.m(o,null),p(o,c),p(o,d);for(let g=0;g<v.length;g+=1)v[g]&&v[g].m(d,null)},p(m,h){if(h&1&&n!==(n=m[0].name+"")&&z(i,n),h&1&&r!==(r=q(m[0].url))&&u(e,"href",r),m[2]>0?f?f.p(m,h):(f=de(m),f.c(),f.m(o,c)):f&&(f.d(1),f=null),h&5){k=m[0].children.slice(m[2]);let g;for(g=0;g<k.length;g+=1){const b=ue(m,k,g);v[g]?v[g].p(b,h):(v[g]=me(b),v[g].c(),v[g].m(d,null))}for(;g<v.length;g+=1)v[g].d(1);v.length=k.length}},d(m){m&&M(e),m&&M(a),m&&M(o),f&&f.d(),I(v,m)}}}function ut(s){let e,l;return e=new X({props:{headingText:s[1],$$slots:{default:[ot]},$$scope:{ctx:s}}}),{c(){U(e.$$.fragment)},m(t,n){E(e,t,n),l=!0},p(t,[n]){const i={};n&2&&(i.headingText=t[1]),n&261&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){N(e,t)}}}function ct(s,e,l){let t,{section:n={}}=e,{headingText:i}=e;return s.$$set=r=>{"section"in r&&l(0,n=r.section),"headingText"in r&&l(1,i=r.headingText)},s.$$.update=()=>{s.$$.dirty&1&&l(2,t=n.children&&n.children.length>7?Math.ceil(n.children.length/2):0)},[n,i,t]}class Ee extends F{constructor(e){super(),G(this,e,ct,ut,P,{section:0,headingText:1})}}Ee.__docgen={version:3,name:"SectionDropdown.svelte",data:[{visibility:"public",description:null,keywords:[],name:"section",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"headingText",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function pe(s,e,l){const t=s.slice();return t[1]=e[l],t}function _e(s,e,l){const t=s.slice();return t[4]=e[l],t}function he(s){let e,l=s[1].children,t=[];for(let n=0;n<l.length;n+=1)t[n]=ve(_e(s,l,n));return{c(){e=_("ul");for(let n=0;n<t.length;n+=1)t[n].c();u(e,"class","subsections svelte-lida60")},m(n,i){$(n,e,i);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null)},p(n,i){if(i&1){l=n[1].children;let r;for(r=0;r<l.length;r+=1){const a=_e(n,l,r);t[r]?t[r].p(a,i):(t[r]=ve(a),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(n){n&&M(e),I(t,n)}}}function ve(s){let e,l,t=s[4].name+"",n,i,r;return{c(){e=_("li"),l=_("a"),n=A(t),r=T(),u(l,"class","subsection-link svelte-lida60"),u(l,"href",i=q(s[4].url))},m(a,o){$(a,e,o),p(e,l),p(l,n),p(e,r)},p(a,o){o&1&&t!==(t=a[4].name+"")&&z(n,t),o&1&&i!==(i=q(a[4].url))&&u(l,"href",i)},d(a){a&&M(e)}}}function ge(s){let e,l,t=s[1].name+"",n,i,r,a,o=s[1].children&&he(s);return{c(){e=_("section"),l=_("a"),n=A(t),r=T(),o&&o.c(),a=T(),u(l,"href",i=q(s[1].url)),u(l,"class","section-link svelte-lida60"),u(e,"class","more-section-group svelte-lida60"),V(e,"has-children",s[1].children)},m(c,d){$(c,e,d),p(e,l),p(l,n),p(e,r),o&&o.m(e,null),p(e,a)},p(c,d){d&1&&t!==(t=c[1].name+"")&&z(n,t),d&1&&i!==(i=q(c[1].url))&&u(l,"href",i),c[1].children?o?o.p(c,d):(o=he(c),o.c(),o.m(e,a)):o&&(o.d(1),o=null),d&1&&V(e,"has-children",c[1].children)},d(c){c&&M(e),o&&o.d()}}}function dt(s){let e,l,t=s[0],n=[];for(let i=0;i<t.length;i+=1)n[i]=ge(pe(s,t,i));return{c(){e=_("div"),l=_("div");for(let i=0;i<n.length;i+=1)n[i].c();u(l,"class","groupContainer"),u(e,"class","more-sections svelte-lida60")},m(i,r){$(i,e,r),p(e,l);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(l,null)},p(i,r){if(r&1){t=i[0];let a;for(a=0;a<t.length;a+=1){const o=pe(i,t,a);n[a]?n[a].p(o,r):(n[a]=ge(o),n[a].c(),n[a].m(l,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(i){i&&M(e),I(n,i)}}}function ft(s){let e,l;return e=new X({props:{$$slots:{default:[dt]},$$scope:{ctx:s}}}),{c(){U(e.$$.fragment)},m(t,n){E(e,t,n),l=!0},p(t,[n]){const i={};n&129&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){N(e,t)}}}function mt(s,e,l){let{sections:t=[]}=e;return s.$$set=n=>{"sections"in n&&l(0,t=n.sections)},[t]}class Ne extends F{constructor(e){super(),G(this,e,mt,ft,P,{sections:0})}}Ne.__docgen={version:3,name:"MoreDropdown.svelte",data:[{visibility:"public",description:null,keywords:[],name:"sections",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function be(s,e,l){const t=s.slice();return t[20]=e[l],t}function pt(s){let e,l,t,n=s[20].name+"",i,r;return{c(){e=_("li"),l=_("div"),t=_("a"),i=A(n),u(t,"href",r=q(s[20].url)),u(t,"class","svelte-guda3t"),u(l,"class","nav-button link svelte-guda3t"),u(e,"class","nav-item category link svelte-guda3t")},m(a,o){$(a,e,o),p(e,l),p(l,t),p(t,i)},p(a,o){o&8&&n!==(n=a[20].name+"")&&z(i,n),o&8&&r!==(r=q(a[20].url))&&u(t,"href",r)},i:B,o:B,d(a){a&&M(e)}}}function _t(s){let e,l,t,n=s[20].name+"",i,r,a,o,c,d,f,k,v;c=new Y({props:{rotate:s[20].id===s[4]}});let m=s[4]===s[20].id&&ye(s);function h(){return s[10](s[20])}function g(){return s[11](s[20])}function b(){return s[14](s[20])}return{c(){e=_("li"),l=_("div"),t=_("a"),i=A(n),a=T(),o=_("button"),U(c.$$.fragment),d=T(),m&&m.c(),u(t,"href",r=q(s[20].url)),u(t,"class","svelte-guda3t"),u(o,"class","button svelte-guda3t"),u(l,"class","nav-button link svelte-guda3t"),V(l,"open",s[20].id===s[4]),u(e,"class","nav-item category link svelte-guda3t")},m(w,y){$(w,e,y),p(e,l),p(l,t),p(t,i),p(l,a),p(l,o),E(c,o,null),p(e,d),m&&m.m(e,null),f=!0,k||(v=[H(e,"mouseenter",h),H(e,"focus",g),H(e,"mouseleave",s[12]),H(e,"blur",s[13]),H(e,"click",b)],k=!0)},p(w,y){s=w,(!f||y&8)&&n!==(n=s[20].name+"")&&z(i,n),(!f||y&8&&r!==(r=q(s[20].url)))&&u(t,"href",r);const L={};y&24&&(L.rotate=s[20].id===s[4]),c.$set(L),(!f||y&24)&&V(l,"open",s[20].id===s[4]),s[4]===s[20].id?m?(m.p(s,y),y&24&&S(m,1)):(m=ye(s),m.c(),S(m,1),m.m(e,null)):m&&(W(),C(m,1,1,()=>{m=null}),J())},i(w){f||(S(c.$$.fragment,w),S(m),f=!0)},o(w){C(c.$$.fragment,w),C(m),f=!1},d(w){w&&M(e),N(c),m&&m.d(),k=!1,Oe(v)}}}function ye(s){let e,l;return e=new Ee({props:{section:s[20],headingText:`Latest in ${s[20].name}`}}),{c(){U(e.$$.fragment)},m(t,n){E(e,t,n),l=!0},p(t,n){const i={};n&8&&(i.section=t[20]),n&8&&(i.headingText=`Latest in ${t[20].name}`),e.$set(i)},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){N(e,t)}}}function ke(s){let e,l,t,n;const i=[_t,pt],r=[];function a(o,c){return o[20].children?0:1}return e=a(s),l=r[e]=i[e](s),{c(){l.c(),t=Re()},m(o,c){r[e].m(o,c),$(o,t,c),n=!0},p(o,c){let d=e;e=a(o),e===d?r[e].p(o,c):(W(),C(r[d],1,1,()=>{r[d]=null}),J(),l=r[e],l?l.p(o,c):(l=r[e]=i[e](o),l.c()),S(l,1),l.m(t.parentNode,t))},i(o){n||(S(l),n=!0)},o(o){C(l),n=!1},d(o){r[e].d(o),o&&M(t)}}}function we(s){let e,l;return e=new Ne({props:{sections:s[2]}}),{c(){U(e.$$.fragment)},m(t,n){E(e,t,n),l=!0},p(t,n){const i={};n&4&&(i.sections=t[2]),e.$set(i)},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){N(e,t)}}}function ht(s){let e,l,t,n,i,r,a,o,c,d,f,k,v,m;Je(s[9]);let h=s[3],g=[];for(let y=0;y<h.length;y+=1)g[y]=ke(be(s,h,y));const b=y=>C(g[y],1,1,()=>{g[y]=null});d=new Y({props:{rotate:s[4]==="more"}});let w=s[4]==="more"&&we(s);return{c(){e=_("div"),l=_("nav"),t=_("ul");for(let y=0;y<g.length;y+=1)g[y].c();n=T(),i=_("li"),r=_("div"),a=_("button"),o=_("span"),c=A("More "),U(d.$$.fragment),f=T(),w&&w.c(),u(o,"class","svelte-guda3t"),u(a,"class","button svelte-guda3t"),u(r,"class","nav-button more link svelte-guda3t"),V(r,"open",s[4]==="more"),u(i,"class","nav-item svelte-guda3t"),u(t,"class","nav-list svelte-guda3t"),u(l,"aria-label","Main navigation"),u(e,"class","nav-bar svelte-guda3t")},m(y,L){$(y,e,L),p(e,l),p(l,t);for(let O=0;O<g.length;O+=1)g[O]&&g[O].m(t,null);p(t,n),p(t,i),p(i,r),p(r,a),p(a,o),p(o,c),E(d,o,null),p(i,f),w&&w.m(i,null),k=!0,v||(m=[H(window,"resize",s[9]),H(i,"mouseenter",s[15]),H(i,"focus",s[16]),H(i,"mouseleave",s[17]),H(i,"blur",s[18]),H(i,"click",s[19])],v=!0)},p(y,[L]){if(L&58){h=y[3];let D;for(D=0;D<h.length;D+=1){const R=be(y,h,D);g[D]?(g[D].p(R,L),S(g[D],1)):(g[D]=ke(R),g[D].c(),S(g[D],1),g[D].m(t,n))}for(W(),D=h.length;D<g.length;D+=1)b(D);J()}const O={};L&16&&(O.rotate=y[4]==="more"),d.$set(O),(!k||L&16)&&V(r,"open",y[4]==="more"),y[4]==="more"?w?(w.p(y,L),L&16&&S(w,1)):(w=we(y),w.c(),S(w,1),w.m(i,null)):w&&(W(),C(w,1,1,()=>{w=null}),J())},i(y){if(!k){for(let L=0;L<h.length;L+=1)S(g[L]);S(d.$$.fragment,y),S(w),k=!0}},o(y){g=g.filter(Boolean);for(let L=0;L<g.length;L+=1)C(g[L]);C(d.$$.fragment,y),C(w),k=!1},d(y){y&&M(e),I(g,y),N(d),w&&w.d(),v=!1,Oe(m)}}}const $e=250;function vt(s,e,l){let t,n,i,r,a,{sections:o=[]}=e;const c=je("nav-active-section");qe(s,c,R=>l(4,a=R));let d=1200,f;function k(){l(0,d=window.innerWidth)}const v=R=>{l(1,f=setTimeout(()=>c.set(R.id),$e))},m=R=>c.set(R.id),h=()=>{clearTimeout(f),c.set(null)},g=()=>{clearTimeout(f),c.set(null)},b=R=>{a===R.id&&(clearTimeout(f),c.set(null))},w=()=>{l(1,f=setTimeout(()=>c.set("more"),$e))},y=()=>c.set("more"),L=()=>{clearTimeout(f),c.set(null)},O=()=>{clearTimeout(f),c.set(null)},D=()=>{a==="more"&&(clearTimeout(f),c.set(null))};return s.$$set=R=>{"sections"in R&&l(6,o=R.sections)},s.$$.update=()=>{s.$$.dirty&1&&l(8,t=()=>d>=1300?7:5),s.$$.dirty&256&&l(7,n=t()),s.$$.dirty&192&&l(3,i=o.slice(0,n)),s.$$.dirty&192&&l(2,r=o.slice(n))},[d,f,r,i,a,c,o,n,t,k,v,m,h,g,b,w,y,L,O,D]}class He extends F{constructor(e){super(),G(this,e,vt,ht,P,{sections:6})}}He.__docgen={version:3,name:"index.svelte",data:[{visibility:"public",description:null,keywords:[],name:"sections",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const gt=[{sections:[{id:"/world/",url:"/world/",name:"World",type:"section",children:[{id:"/world/africa/",url:"/world/africa/",name:"Africa"},{id:"/world/americas/",url:"/world/americas/",name:"Americas"},{id:"/world/asia-pacific/",url:"/world/asia-pacific/",name:"Asia Pacific"},{id:"/world/china/",url:"/world/china/",name:"China"},{id:"/world/europe/",url:"/world/europe/",name:"Europe"},{id:"/world/india/",url:"/world/india/",name:"India"},{id:"/world/middle-east/",url:"/world/middle-east/",name:"Middle East"},{id:"/world/uk/",url:"/world/uk/",name:"United Kingdom"},{id:"/world/us/",url:"/world/us/",name:"United States"},{id:"/world/the-great-reboot/",url:"/world/the-great-reboot/",name:"The Great Reboot"},{id:"/world/reuters-next/",url:"/world/reuters-next/",name:"Reuters Next"}]},{id:"/business/",url:"/business/",name:"Business",type:"section",children:[{id:"/business/aerospace-defense/",url:"/business/aerospace-defense/",name:"Aerospace & Defense"},{id:"/business/autos-transportation/",url:"/business/autos-transportation/",name:"Autos & Transportation"},{id:"/business/energy/",url:"/business/energy/",name:"Energy"},{id:"/business/environment/",url:"/business/environment/",name:"Environment"},{id:"/business/finance/",url:"/business/finance/",name:"Finance"},{id:"/business/healthcare-pharmaceuticals/",url:"/business/healthcare-pharmaceuticals/",name:"Healthcare & Pharmaceuticals"},{id:"/business/media-telecom/",url:"/business/media-telecom/",name:"Media & Telecom"},{id:"/business/retail-consumer/",url:"/business/retail-consumer/",name:"Retail & Consumer"},{id:"/business/sustainable-business/",url:"/business/sustainable-business/",name:"Sustainable Business"},{id:"/business/charged/",url:"/business/charged/",name:"Charged"},{id:"/business/future-of-health/",url:"/business/future-of-health/",name:"Future of Health"},{id:"/business/future-of-money/",url:"/business/future-of-money/",name:"Future of Money"},{id:"/business/take-five/",url:"/business/take-five/",name:"Take Five"},{id:"/business/reuters-impact/",url:"/business/reuters-impact/",name:"Reuters Impact"},{id:"/business/davos/",url:"/business/davos/",name:"Davos"}]},{id:"/legal/",url:"/legal/",name:"Legal",type:"section",children:[{id:"/legal/government/",url:"/legal/government/",name:"Government"},{id:"/legal/legalindustry/",url:"/legal/legalindustry/",name:"Legal Industry"},{id:"/legal/litigation/",url:"/legal/litigation/",name:"Litigation"},{id:"/legal/transactional/",url:"/legal/transactional/",name:"Transactional"}]},{id:"/markets/",url:"/markets/",name:"Markets",type:"section",children:[{id:"/markets/asia/",url:"/markets/asia/",name:"Asian Markets"},{id:"/markets/carbon/",url:"/markets/carbon/",name:"Carbon Markets"},{id:"/markets/commodities/",url:"/markets/commodities/",name:"Commodities"},{id:"/markets/currencies/",url:"/markets/currencies/",name:"Currencies"},{id:"/markets/deals/",url:"/markets/deals/",name:"Deals"},{id:"/markets/emerging/",url:"/markets/emerging/",name:"Emerging Markets"},{id:"/markets/europe/",url:"/markets/europe/",name:"European Markets"},{id:"/markets/funds/",url:"/markets/funds/",name:"Funds"},{id:"/markets/global-market-data/",url:"/markets/global-market-data/",name:"Global Market Data"},{id:"/markets/rates-bonds/",url:"/markets/rates-bonds/",name:"Rates & Bonds"},{id:"/markets/stocks/",url:"/markets/stocks/",name:"Stocks"},{id:"/markets/us/",url:"/markets/us/",name:"U.S. Markets"},{id:"/markets/wealth/",url:"/markets/wealth/",name:"Wealth"},{id:"/markets/macromatters/",url:"/markets/macromatters/",name:"Macro Matters"}]},{id:"/breakingviews/",url:"/breakingviews/",name:"Breakingviews",type:"section"},{id:"/technology/",url:"/technology/",name:"Technology",type:"section",children:[{id:"/technology/disrupted/",url:"/technology/disrupted/",name:"Disrupted"},{id:"/technology/reuters-momentum/",url:"/technology/reuters-momentum/",name:"Reuters Momentum"}]},{id:"/investigates/",url:"https://www.reuters.com/investigates/",name:"Investigations",type:"link"},{id:"/lifestyle/sports/",url:"/lifestyle/sports/",name:"Sports",type:"section",children:[{id:"/lifestyle/sports/athletics/",url:"/lifestyle/sports/athletics/",name:"Athletics"},{id:"/lifestyle/sports/cricket/",url:"/lifestyle/sports/cricket/",name:"Cricket"},{id:"/lifestyle/sports/cycling/",url:"/lifestyle/sports/cycling/",name:"Cycling"},{id:"/lifestyle/sports/golf/",url:"/lifestyle/sports/golf/",name:"Golf"},{id:"/lifestyle/sports/motor-sports/",url:"/lifestyle/sports/motor-sports/",name:"Motor Sports"},{id:"/lifestyle/sports/soccer/",url:"/lifestyle/sports/soccer/",name:"Soccer"},{id:"/lifestyle/sports/tennis/",url:"/lifestyle/sports/tennis/",name:"Tennis"}]},{id:"/lifestyle/",url:"/lifestyle/",name:"Lifestyle",type:"section",children:[{id:"/lifestyle/oddly-enough/",url:"/lifestyle/oddly-enough/",name:"Oddly Enough"},{id:"/lifestyle/science/",url:"/lifestyle/science/",name:"Science"}]},{id:"/graphics/",url:"https://graphics.reuters.com/",name:"Graphics",type:"link"},{id:"/pictures/",url:"/pictures/",name:"Pictures",type:"section"},{id:"/video/",url:"/video/",name:"Video",type:"section"}],home_url:"/",search_url:"/site-search/",sign_in_url:"/signin/",sign_up_url:"/signup/",subscribe_url:"",my_account_url:"/myaccount/",my_view_url:"/myview/all",following_url:"/myview/following-feed",saved_url:"/myview/saved"}];function bt(s){let e,l;return{c(){e=K("svg"),l=K("path"),u(l,"d","M14.8571429,9.524 C15.3142857,9.524 15.6188571,9.8285714 15.6188571,10.2857143 C15.6188571,10.7428571 15.3142857,11.0474286 14.8571429,11.0474286 L1.14285714,11.0474286 C0.68571429,11.0474286 0.38114286,10.7428571 0.38114286,10.2857143 C0.38114286,9.8285714 0.68571429,9.524 1.14285714,9.524 L14.8571429,9.524 Z M14.8571429,4.9525714 C15.3142857,4.9525714 15.6188571,5.2571429 15.6188571,5.7142857 C15.6188571,6.1714286 15.3142857,6.476 14.8571429,6.476 L1.14285714,6.476 C0.68571429,6.476 0.38114286,6.1714286 0.38114286,5.7142857 C0.38114286,5.2571429 0.68571429,4.9525714 1.14285714,4.9525714 L14.8571429,4.9525714 Z M14.8571429,0.38114286 C15.3142857,0.38114286 15.6188571,0.68571429 15.6188571,1.14285714 C15.6188571,1.6 15.3142857,1.90457143 14.8571429,1.90457143 L1.14285714,1.90457143 C0.68571429,1.90457143 0.38114286,1.6 0.38114286,1.14285714 C0.38114286,0.68571429 0.68571429,0.38114286 1.14285714,0.38114286 L14.8571429,0.38114286 Z"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"viewBox","0 0 16 12"),u(e,"aria-hidden","true"),u(e,"focusable","false"),le(e,"width",s[0]+"px"),u(e,"class","svelte-17648ki")},m(t,n){$(t,e,n),p(e,l)},p(t,[n]){n&1&&le(e,"width",t[0]+"px")},i:B,o:B,d(t){t&&M(e)}}}function yt(s,e,l){let{width:t=20}=e;return s.$$set=n=>{"width"in n&&l(0,t=n.width)},[t]}class ze extends F{constructor(e){super(),G(this,e,yt,bt,P,{width:0})}}ze.__docgen={version:3,name:"Menu.svelte",data:[{visibility:"public",description:null,keywords:[],name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:20}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function kt(s){let e,l;return{c(){e=K("svg"),l=K("path"),u(l,"d","M.322.313a1.056 1.056 0 0 1 1.5 0l5.679 5.53L13.18.313a1.056 1.056 0 0 1 1.5 0 .993.993 0 0 1-.001 1.461l-5.88 5.725 5.88 5.727c.397.388.426.956.085 1.369l-.086.092a1.056 1.056 0 0 1-1.5 0l-5.679-5.53-5.679 5.53a1.056 1.056 0 0 1-1.5 0 .993.993 0 0 1 .001-1.461L6.2 7.5.322 1.774C-.076 1.386-.105.818.236.405L.322.313Z"),u(l,"fill-rule","evenodd"),u(e,"aria-hidden","true"),u(e,"focusable","false"),u(e,"width","15"),u(e,"height","15"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"class","svelte-17648ki")},m(t,n){$(t,e,n),p(e,l)},p:B,i:B,o:B,d(t){t&&M(e)}}}class Fe extends F{constructor(e){super(),G(this,e,null,kt,P,{})}}Fe.__docgen={version:3,name:"Close.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Me(s,e,l){const t=s.slice();return t[3]=e[l],t}function Se(s,e,l){const t=s.slice();return t[6]=e[l],t}function Ce(s){let e,l,t,n,i,r,a,o,c,d,f,k;n=new Be({props:{logoColour:"var(--nav-accent)",textColour:"var(--nav-primary)"}}),o=new Fe({});let v=s[0].sections,m=[];for(let h=0;h<v.length;h+=1)m[h]=De(Me(s,v,h));return{c(){e=_("div"),l=_("header"),t=_("div"),U(n.$$.fragment),i=T(),r=_("button"),a=_("div"),U(o.$$.fragment),c=T();for(let h=0;h<m.length;h+=1)m[h].c();u(t,"class","logo svelte-62myl1"),u(a,"class","button-container svelte-62myl1"),u(r,"class","button close-button svelte-62myl1"),u(l,"class","header svelte-62myl1"),u(e,"class","overlay svelte-62myl1"),u(e,"aria-modal","true"),u(e,"style",`
      --nav-background: var(--theme-colour-background, #fff);
      --nav-primary: var(--theme-colour-text-primary, #404040);
      --nav-rules: var(--theme-colour-brand-rules, #d0d0d0);
      --nav-accent: var(--theme-colour-brand-logo, #fa6400);
      --nav-shadow: 0 1px 4px 2px var(--theme-colour-brand-shadow, rgb(255 255 255 / 10%));
    `)},m(h,g){$(h,e,g),p(e,l),p(l,t),E(n,t,null),p(l,i),p(l,r),p(r,a),E(o,a,null),p(e,c);for(let b=0;b<m.length;b+=1)m[b]&&m[b].m(e,null);d=!0,f||(k=H(r,"click",function(){Ke(s[2])&&s[2].apply(this,arguments)}),f=!0)},p(h,g){if(s=h,g&1){v=s[0].sections;let b;for(b=0;b<v.length;b+=1){const w=Me(s,v,b);m[b]?m[b].p(w,g):(m[b]=De(w),m[b].c(),m[b].m(e,null))}for(;b<m.length;b+=1)m[b].d(1);m.length=v.length}},i(h){d||(S(n.$$.fragment,h),S(o.$$.fragment,h),d=!0)},o(h){C(n.$$.fragment,h),C(o.$$.fragment,h),d=!1},d(h){h&&M(e),N(n),N(o),I(m,h),f=!1,k()}}}function Te(s){let e,l=s[3].children,t=[];for(let n=0;n<l.length;n+=1)t[n]=Le(Se(s,l,n));return{c(){e=_("ul");for(let n=0;n<t.length;n+=1)t[n].c();u(e,"class","subsections svelte-62myl1")},m(n,i){$(n,e,i);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null)},p(n,i){if(i&1){l=n[3].children;let r;for(r=0;r<l.length;r+=1){const a=Se(n,l,r);t[r]?t[r].p(a,i):(t[r]=Le(a),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(n){n&&M(e),I(t,n)}}}function Le(s){let e,l,t=s[6].name+"",n,i,r;return{c(){e=_("li"),l=_("a"),n=A(t),r=T(),u(l,"class","subsection-link svelte-62myl1"),u(l,"href",i=q(s[6].url))},m(a,o){$(a,e,o),p(e,l),p(l,n),p(e,r)},p(a,o){o&1&&t!==(t=a[6].name+"")&&z(n,t),o&1&&i!==(i=q(a[6].url))&&u(l,"href",i)},d(a){a&&M(e)}}}function De(s){let e,l,t=s[3].name+"",n,i,r,a,o=s[3].children&&Te(s);return{c(){e=_("section"),l=_("a"),n=A(t),r=T(),o&&o.c(),a=T(),u(l,"class","section-link svelte-62myl1"),u(l,"href",i=q(s[3].url)),u(e,"class","section svelte-62myl1")},m(c,d){$(c,e,d),p(e,l),p(l,n),p(e,r),o&&o.m(e,null),p(e,a)},p(c,d){d&1&&t!==(t=c[3].name+"")&&z(n,t),d&1&&i!==(i=q(c[3].url))&&u(l,"href",i),c[3].children?o?o.p(c,d):(o=Te(c),o.c(),o.m(e,a)):o&&(o.d(1),o=null)},d(c){c&&M(e),o&&o.d()}}}function wt(s){let e,l,t=s[1]&&Ce(s);return{c(){t&&t.c(),e=Re()},m(n,i){t&&t.m(n,i),$(n,e,i),l=!0},p(n,[i]){n[1]?t?(t.p(n,i),i&2&&S(t,1)):(t=Ce(n),t.c(),S(t,1),t.m(e.parentNode,e)):t&&(W(),C(t,1,1,()=>{t=null}),J())},i(n){l||(S(t),l=!0)},o(n){C(t),l=!1},d(n){t&&t.d(n),n&&M(e)}}}function $t(s,e,l){let{data:t=[]}=e,{isMobileMenuOpen:n=!1}=e,{releaseMobileMenu:i=()=>{}}=e;return s.$$set=r=>{"data"in r&&l(0,t=r.data),"isMobileMenuOpen"in r&&l(1,n=r.isMobileMenuOpen),"releaseMobileMenu"in r&&l(2,i=r.releaseMobileMenu)},[t,n,i]}class Ge extends F{constructor(e){super(),G(this,e,$t,wt,P,{data:0,isMobileMenuOpen:1,releaseMobileMenu:2})}}Ge.__docgen={version:3,name:"index.svelte",data:[{visibility:"public",description:null,keywords:[],name:"data",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"isMobileMenuOpen",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"releaseMobileMenu",kind:"let",static:!1,readonly:!1,type:{kind:"function",text:"function",type:"function"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Mt(s){let e,l,t,n,i,r,a,o,c,d,f,k,v,m,h,g,b,w,y,L,O,D,R,x;return c=new Be({props:{logoColour:"var(--nav-accent)",textColour:"var(--nav-primary)"}}),f=new He({props:{sections:s[2]}}),y=new ze({}),O=new Ge({props:{isMobileMenuOpen:s[1],releaseMobileMenu:s[4],data:s[0][0]}}),{c(){e=_("header"),l=_("div"),t=_("div"),n=_("div"),i=_("div"),r=_("div"),a=_("div"),o=_("a"),U(c.$$.fragment),d=T(),U(f.$$.fragment),k=T(),v=_("div"),v.innerHTML='<div class="spacer svelte-41yk2n"></div>',m=T(),h=_("div"),g=_("div"),b=_("button"),w=_("div"),U(y.$$.fragment),L=T(),U(O.$$.fragment),u(o,"href","https://www.reuters.com"),u(o,"class","svelte-41yk2n"),u(a,"class","logo svelte-41yk2n"),u(r,"class","logo-container svelte-41yk2n"),u(v,"class","spacer-container svelte-41yk2n"),u(w,"class","button-container svelte-41yk2n"),u(b,"class","menu-button svelte-41yk2n"),u(b,"aria-label","Menu"),u(b,"aria-haspopup","true"),u(b,"aria-expanded",s[1]),u(g,"class","mobile-menu svelte-41yk2n"),u(h,"class","mobile-button-group svelte-41yk2n"),u(i,"class","main-bar svelte-41yk2n"),u(n,"class","inner svelte-41yk2n"),u(t,"class","scroll-container svelte-41yk2n"),u(l,"class","nav-container show-nav svelte-41yk2n"),u(e,"style",`
    --nav-background: var(--theme-colour-background, #fff);
    --nav-primary: var(--theme-colour-text-primary, #404040);
    --nav-rules: var(--theme-colour-brand-rules, #d0d0d0);
    --nav-accent: var(--theme-colour-brand-logo, #fa6400);
    --nav-shadow: 0 1px 4px 2px var(--theme-colour-brand-shadow, rgb(255 255 255 / 10%));
  `)},m(j,Z){$(j,e,Z),p(e,l),p(l,t),p(t,n),p(n,i),p(i,r),p(r,a),p(a,o),E(c,o,null),p(i,d),E(f,i,null),p(i,k),p(i,v),p(i,m),p(i,h),p(h,g),p(g,b),p(b,w),E(y,w,null),$(j,L,Z),E(O,j,Z),D=!0,R||(x=H(b,"click",s[3]),R=!0)},p(j,[Z]){const ee={};Z&4&&(ee.sections=j[2]),f.$set(ee),(!D||Z&2)&&u(b,"aria-expanded",j[1]);const Q={};Z&2&&(Q.isMobileMenuOpen=j[1]),Z&2&&(Q.releaseMobileMenu=j[4]),Z&1&&(Q.data=j[0][0]),O.$set(Q)},i(j){D||(S(c.$$.fragment,j),S(f.$$.fragment,j),S(y.$$.fragment,j),S(O.$$.fragment,j),D=!0)},o(j){C(c.$$.fragment,j),C(f.$$.fragment,j),C(y.$$.fragment,j),C(O.$$.fragment,j),D=!1},d(j){j&&M(e),N(c),N(f),N(y),j&&M(L),N(O,j),R=!1,x()}}}function St(s,e,l){let t;Qe("nav-active-section",Xe(null));let n=gt,i=!1;Ye(async()=>{try{const c=await(await fetch("https://www.reuters.com/site-api/header/?"+new URLSearchParams({_website:"reuters",outputType:"json"}))).json();if(!c[0].sections)return;l(0,n=c)}catch{console.warn("Unable to fetch site header data")}});const r=()=>{l(1,i=!i)},a=()=>{l(1,i=!1)};return s.$$.update=()=>{s.$$.dirty&1&&l(2,t=n[0].sections)},[n,i,t,r,a]}class qt extends F{constructor(e){super(),G(this,e,St,Mt,P,{})}}export{qt as S};
//# sourceMappingURL=SiteHeader-0cbb7ce2.js.map