import{S as V,i as P,s as G,a as Q,b as u,r as Z,d as $,e as f,n as U,f as M,o as p,z as T,k as B,A as H,F as le,l as Ge,u as Ze,p as Ie,q as We,w as K,h as C,x as J,t as q,a1 as ze,U as Oe,K as Ke,g as N,m as j,j as E,V as W,O as Je,M as F,N as Re,v as Ae,c as ne,H as Qe,$ as Xe,D as Ye}from"./index-85f88930.js";import{R as Ue}from"./ReutersLogo-e492d7cf.js";import{e as A}from"./each-e59479a4.js";import{n as z}from"./index-2224dbf5.js";import{g as se}from"./time-8562ae1b.js";import{w as xe}from"./collect-stories-fa95313f.js";function et(s){let e,l;return{c(){e=Q("svg"),l=Q("path"),u(l,"d","M10.413.587a.71.71 0 0 0-1.027 0L5.5 4.474 1.613.587a.71.71 0 0 0-1.027 0 .709.709 0 0 0 0 1.027l4.4 4.4c.147.147.367.22.513.22a.79.79 0 0 0 .513-.22l4.4-4.4a.71.71 0 0 0 0-1.027h.001Z"),u(e,"class","arrow svelte-xo1ee1"),u(e,"focusable","false"),u(e,"aria-hidden","true"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"viewBox","0 0 11 7"),Z(e,"rotated",s[0])},m(t,n){$(t,e,n),f(e,l)},p(t,[n]){n&1&&Z(e,"rotated",t[0])},i:U,o:U,d(t){t&&M(e)}}}function tt(s,e,l){let{rotate:t=!1}=e;return s.$$set=n=>{"rotate"in n&&l(0,t=n.rotate)},[t]}class Y extends V{constructor(e){super(),P(this,e,tt,et,G,{rotate:0})}}Y.__docgen={version:3,name:"DownArrow.svelte",data:[{visibility:"public",description:null,keywords:[],name:"rotate",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function ie(s){let e,l,t=s[0].primary_section.name+"",n,i;return{c(){e=p("a"),l=p("span"),n=B(t),u(l,"class","label svelte-1mu3a4n"),u(e,"href",i=z(s[0].primary_section.id)),u(e,"class","svelte-1mu3a4n")},m(r,a){$(r,e,a),f(e,l),f(l,n)},p(r,a){a&1&&t!==(t=r[0].primary_section.name+"")&&H(n,t),a&1&&i!==(i=z(r[0].primary_section.id))&&u(e,"href",i)},d(r){r&&M(e)}}}function re(s){let e,l=se(s[0].display_time)+"",t,n;return{c(){e=p("time"),t=B(l),u(e,"datetime",n=s[0].display_time),u(e,"class","svelte-1mu3a4n")},m(i,r){$(i,e,r),f(e,t)},p(i,r){r&1&&l!==(l=se(i[0].display_time)+"")&&H(t,l),r&1&&n!==(n=i[0].display_time)&&u(e,"datetime",n)},d(i){i&&M(e)}}}function ae(s){let e,l,t,n;return{c(){e=p("div"),l=p("img"),le(l.src,t=s[2].renditions.square["120w"])||u(l,"src",t),u(l,"alt",n=s[2].alt_text),u(l,"class","svelte-1mu3a4n"),u(e,"class","thumbnail svelte-1mu3a4n")},m(i,r){$(i,e,r),f(e,l)},p(i,r){r&4&&!le(l.src,t=i[2].renditions.square["120w"])&&u(l,"src",t),r&4&&n!==(n=i[2].alt_text)&&u(l,"alt",n)},d(i){i&&M(e)}}}function lt(s){let e,l,t,n,i,r=s[0].title+"",a,o,c,d,m=s[1]&&ie(s),k=!s[1]&&re(s),v=s[2]&&ae(s);return{c(){e=p("div"),l=p("a"),t=p("div"),m&&m.c(),n=T(),i=p("span"),a=B(r),o=T(),k&&k.c(),c=T(),v&&v.c(),u(i,"class","svelte-1mu3a4n"),u(t,"class","story-text svelte-1mu3a4n"),Z(t,"has-thumbnail",s[2]),u(l,"href",d=z(s[0].canonical_url)),u(l,"class","svelte-1mu3a4n"),u(e,"class","story-card svelte-1mu3a4n")},m(_,h){$(_,e,h),f(e,l),f(l,t),m&&m.m(t,null),f(t,n),f(t,i),f(i,a),f(t,o),k&&k.m(t,null),f(l,c),v&&v.m(l,null)},p(_,[h]){_[1]?m?m.p(_,h):(m=ie(_),m.c(),m.m(t,n)):m&&(m.d(1),m=null),h&1&&r!==(r=_[0].title+"")&&H(a,r),_[1]?k&&(k.d(1),k=null):k?k.p(_,h):(k=re(_),k.c(),k.m(t,null)),h&4&&Z(t,"has-thumbnail",_[2]),_[2]?v?v.p(_,h):(v=ae(_),v.c(),v.m(l,null)):v&&(v.d(1),v=null),h&1&&d!==(d=z(_[0].canonical_url))&&u(l,"href",d)},i:U,o:U,d(_){_&&M(e),m&&m.d(),k&&k.d(),v&&v.d()}}}function nt(s,e,l){let t,{story:n}=e,{withSection:i=!1}=e;return s.$$set=r=>{"story"in r&&l(0,n=r.story),"withSection"in r&&l(1,i=r.withSection)},s.$$.update=()=>{s.$$.dirty&1&&l(2,t=n.thumbnail)},[n,i,t]}class Be extends V{constructor(e){super(),P(this,e,nt,lt,G,{story:0,withSection:1})}}Be.__docgen={version:3,name:"index.svelte",data:[{visibility:"public",description:null,keywords:[],name:"story",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"withSection",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function st(s){let e;return{c(){e=p("div"),e.innerHTML='<div class="spinner-container svelte-11vhalg"><div class="spinner svelte-11vhalg"></div></div>'},m(l,t){$(l,e,t)},p:U,i:U,o:U,d(l){l&&M(e)}}}class Ne extends V{constructor(e){super(),P(this,e,null,st,G,{})}}Ne.__docgen={version:3,name:"index.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function oe(s,e,l){const t=s.slice();return t[7]=e[l],t}function it(s){let e,l,t;return l=new Ne({}),{c(){e=p("div"),N(l.$$.fragment),u(e,"class","spinner svelte-10rp5yh")},m(n,i){$(n,e,i),j(l,e,null),t=!0},p:U,i(n){t||(q(l.$$.fragment,n),t=!0)},o(n){C(l.$$.fragment,n),t=!1},d(n){n&&M(e),E(l)}}}function rt(s){let e,l,t,n,i,r=A(s[1]),a=[];for(let c=0;c<r.length;c+=1)a[c]=ue(oe(s,r,c));const o=c=>C(a[c],1,1,()=>{a[c]=null});return{c(){e=p("span"),l=B(s[0]),t=T(),n=p("ul");for(let c=0;c<a.length;c+=1)a[c].c();u(e,"class","latest svelte-10rp5yh"),u(n,"class","story-list svelte-10rp5yh")},m(c,d){$(c,e,d),f(e,l),$(c,t,d),$(c,n,d);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(n,null);i=!0},p(c,d){if((!i||d&1)&&H(l,c[0]),d&6){r=A(c[1]);let m;for(m=0;m<r.length;m+=1){const k=oe(c,r,m);a[m]?(a[m].p(k,d),q(a[m],1)):(a[m]=ue(k),a[m].c(),q(a[m],1),a[m].m(n,null))}for(K(),m=r.length;m<a.length;m+=1)o(m);J()}},i(c){if(!i){for(let d=0;d<r.length;d+=1)q(a[d]);i=!0}},o(c){a=a.filter(Boolean);for(let d=0;d<a.length;d+=1)C(a[d]);i=!1},d(c){c&&(M(e),M(t),M(n)),W(a,c)}}}function ue(s){let e,l,t,n;return l=new Be({props:{story:s[7],withSection:s[2]==="more"}}),{c(){e=p("li"),N(l.$$.fragment),t=T(),u(e,"class","story-item svelte-10rp5yh")},m(i,r){$(i,e,r),j(l,e,null),f(e,t),n=!0},p(i,r){const a={};r&2&&(a.story=i[7]),r&4&&(a.withSection=i[2]==="more"),l.$set(a)},i(i){n||(q(l.$$.fragment,i),n=!0)},o(i){C(l.$$.fragment,i),n=!1},d(i){i&&M(e),E(l)}}}function at(s){let e,l,t,n,i,r,a,o,c,d,m;const k=s[5].default,v=Ge(k,s,s[4],null),_=[rt,it],h=[];function g(b,w){return b[1].length>0?0:1}return c=g(s),d=h[c]=_[c](s),{c(){e=p("div"),l=p("div"),t=p("div"),n=p("div"),i=p("div"),v&&v.c(),r=T(),a=p("div"),o=p("div"),d.c(),u(i,"class","inner svelte-10rp5yh"),u(n,"class","submenu svelte-10rp5yh"),u(o,"class","inner svelte-10rp5yh"),u(a,"class","stories-container svelte-10rp5yh"),u(t,"class","inner svelte-10rp5yh"),u(l,"class","dropdown-container svelte-10rp5yh"),u(e,"class","dropdown svelte-10rp5yh")},m(b,w){$(b,e,w),f(e,l),f(l,t),f(t,n),f(n,i),v&&v.m(i,null),f(t,r),f(t,a),f(a,o),h[c].m(o,null),m=!0},p(b,[w]){v&&v.p&&(!m||w&16)&&Ze(v,k,b,b[4],m?We(k,b[4],w,null):Ie(b[4]),null);let y=c;c=g(b),c===y?h[c].p(b,w):(K(),C(h[y],1,1,()=>{h[y]=null}),J(),d=h[c],d?d.p(b,w):(d=h[c]=_[c](b),d.c()),q(d,1),d.m(o,null))},i(b){m||(q(v,b),q(d),m=!0)},o(b){C(v,b),C(d),m=!1},d(b){b&&M(e),v&&v.d(b),h[c].d()}}}function ot(s,e,l){let t,{$$slots:n={},$$scope:i}=e;const r=ze("nav-active-section");Oe(s,r,d=>l(2,t=d));let{headingText:a="Trending Stories"}=e,o=[],c=null;return Ke(async()=>{c!==t&&(t==="more"?await fetch("https://www.reuters.com/pf/api/v3/content/fetch/articles-by-trends-v1?"+new URLSearchParams({query:JSON.stringify({size:4,website:"reuters"})})).then(d=>d.json()).then(d=>{l(1,o=d.result.articles),c=t}):await fetch("https://www.reuters.com/pf/api/v3/content/fetch/recent-stories-by-sections-v1?"+new URLSearchParams({query:JSON.stringify({section_ids:t,size:4,website:"reuters"})})).then(d=>d.json()).then(d=>{l(1,o=d.result.articles),c=t}))}),s.$$set=d=>{"headingText"in d&&l(0,a=d.headingText),"$$scope"in d&&l(4,i=d.$$scope)},[a,o,t,r,i,n]}class x extends V{constructor(e){super(),P(this,e,ot,at,G,{headingText:0})}}x.__docgen={version:3,name:"index.svelte",data:[{visibility:"public",description:null,keywords:[],name:"headingText",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Trending Stories"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function ce(s,e,l){const t=s.slice();return t[3]=e[l],t}function de(s,e,l){const t=s.slice();return t[3]=e[l],t}function fe(s){let e,l=A(s[0].children.slice(0,s[2])),t=[];for(let n=0;n<l.length;n+=1)t[n]=me(de(s,l,n));return{c(){e=p("ul");for(let n=0;n<t.length;n+=1)t[n].c();u(e,"class","sections-group svelte-1i9um7z")},m(n,i){$(n,e,i);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null)},p(n,i){if(i&5){l=A(n[0].children.slice(0,n[2]));let r;for(r=0;r<l.length;r+=1){const a=de(n,l,r);t[r]?t[r].p(a,i):(t[r]=me(a),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(n){n&&M(e),W(t,n)}}}function me(s){let e,l,t=s[3].name+"",n,i,r;return{c(){e=p("li"),l=p("a"),n=B(t),r=T(),u(l,"class","subsection-link svelte-1i9um7z"),u(l,"href",i=z(s[3].url)),u(e,"class","svelte-1i9um7z")},m(a,o){$(a,e,o),f(e,l),f(l,n),f(e,r)},p(a,o){o&5&&t!==(t=a[3].name+"")&&H(n,t),o&5&&i!==(i=z(a[3].url))&&u(l,"href",i)},d(a){a&&M(e)}}}function he(s){let e,l,t=s[3].name+"",n,i,r;return{c(){e=p("li"),l=p("a"),n=B(t),r=T(),u(l,"class","subsection-link svelte-1i9um7z"),u(l,"href",i=z(s[3].url)),u(e,"class","svelte-1i9um7z")},m(a,o){$(a,e,o),f(e,l),f(l,n),f(e,r)},p(a,o){o&5&&t!==(t=a[3].name+"")&&H(n,t),o&5&&i!==(i=z(a[3].url))&&u(l,"href",i)},d(a){a&&M(e)}}}function ut(s){let e,l,t,n=s[0].name+"",i,r,a,o,c,d,m=s[2]>0&&fe(s),k=A(s[0].children.slice(s[2])),v=[];for(let _=0;_<k.length;_+=1)v[_]=he(ce(s,k,_));return{c(){e=p("a"),l=p("span"),t=B("Browse "),i=B(n),a=T(),o=p("div"),m&&m.c(),c=T(),d=p("ul");for(let _=0;_<v.length;_+=1)v[_].c();u(l,"class","heading svelte-1i9um7z"),u(e,"href",r=z(s[0].url)),u(e,"class","svelte-1i9um7z"),u(d,"class","sections-group svelte-1i9um7z"),u(o,"class","sections svelte-1i9um7z")},m(_,h){$(_,e,h),f(e,l),f(l,t),f(l,i),$(_,a,h),$(_,o,h),m&&m.m(o,null),f(o,c),f(o,d);for(let g=0;g<v.length;g+=1)v[g]&&v[g].m(d,null)},p(_,h){if(h&1&&n!==(n=_[0].name+"")&&H(i,n),h&1&&r!==(r=z(_[0].url))&&u(e,"href",r),_[2]>0?m?m.p(_,h):(m=fe(_),m.c(),m.m(o,c)):m&&(m.d(1),m=null),h&5){k=A(_[0].children.slice(_[2]));let g;for(g=0;g<k.length;g+=1){const b=ce(_,k,g);v[g]?v[g].p(b,h):(v[g]=he(b),v[g].c(),v[g].m(d,null))}for(;g<v.length;g+=1)v[g].d(1);v.length=k.length}},d(_){_&&(M(e),M(a),M(o)),m&&m.d(),W(v,_)}}}function ct(s){let e,l;return e=new x({props:{headingText:s[1],$$slots:{default:[ut]},$$scope:{ctx:s}}}),{c(){N(e.$$.fragment)},m(t,n){j(e,t,n),l=!0},p(t,[n]){const i={};n&2&&(i.headingText=t[1]),n&261&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function dt(s,e,l){let t,{section:n={}}=e,{headingText:i}=e;return s.$$set=r=>{"section"in r&&l(0,n=r.section),"headingText"in r&&l(1,i=r.headingText)},s.$$.update=()=>{s.$$.dirty&1&&l(2,t=n.children&&n.children.length>7?Math.ceil(n.children.length/2):0)},[n,i,t]}class je extends V{constructor(e){super(),P(this,e,dt,ct,G,{section:0,headingText:1})}}je.__docgen={version:3,name:"SectionDropdown.svelte",data:[{visibility:"public",description:null,keywords:[],name:"section",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"headingText",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function pe(s,e,l){const t=s.slice();return t[1]=e[l],t}function _e(s,e,l){const t=s.slice();return t[4]=e[l],t}function ve(s){let e,l=A(s[1].children),t=[];for(let n=0;n<l.length;n+=1)t[n]=ge(_e(s,l,n));return{c(){e=p("ul");for(let n=0;n<t.length;n+=1)t[n].c();u(e,"class","subsections svelte-1h19owc")},m(n,i){$(n,e,i);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null)},p(n,i){if(i&1){l=A(n[1].children);let r;for(r=0;r<l.length;r+=1){const a=_e(n,l,r);t[r]?t[r].p(a,i):(t[r]=ge(a),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(n){n&&M(e),W(t,n)}}}function ge(s){let e,l,t=s[4].name+"",n,i,r;return{c(){e=p("li"),l=p("a"),n=B(t),r=T(),u(l,"class","subsection-link svelte-1h19owc"),u(l,"href",i=z(s[4].url)),u(e,"class","svelte-1h19owc")},m(a,o){$(a,e,o),f(e,l),f(l,n),f(e,r)},p(a,o){o&1&&t!==(t=a[4].name+"")&&H(n,t),o&1&&i!==(i=z(a[4].url))&&u(l,"href",i)},d(a){a&&M(e)}}}function be(s){let e,l,t=s[1].name+"",n,i,r,a,o=s[1].children&&ve(s);return{c(){e=p("section"),l=p("a"),n=B(t),r=T(),o&&o.c(),a=T(),u(l,"href",i=z(s[1].url)),u(l,"class","section-link svelte-1h19owc"),u(e,"class","more-section-group svelte-1h19owc"),Z(e,"has-children",s[1].children)},m(c,d){$(c,e,d),f(e,l),f(l,n),f(e,r),o&&o.m(e,null),f(e,a)},p(c,d){d&1&&t!==(t=c[1].name+"")&&H(n,t),d&1&&i!==(i=z(c[1].url))&&u(l,"href",i),c[1].children?o?o.p(c,d):(o=ve(c),o.c(),o.m(e,a)):o&&(o.d(1),o=null),d&1&&Z(e,"has-children",c[1].children)},d(c){c&&M(e),o&&o.d()}}}function ft(s){let e,l,t=A(s[0]),n=[];for(let i=0;i<t.length;i+=1)n[i]=be(pe(s,t,i));return{c(){e=p("div"),l=p("div");for(let i=0;i<n.length;i+=1)n[i].c();u(l,"class","groupContainer"),u(e,"class","more-sections svelte-1h19owc")},m(i,r){$(i,e,r),f(e,l);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(l,null)},p(i,r){if(r&1){t=A(i[0]);let a;for(a=0;a<t.length;a+=1){const o=pe(i,t,a);n[a]?n[a].p(o,r):(n[a]=be(o),n[a].c(),n[a].m(l,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(i){i&&M(e),W(n,i)}}}function mt(s){let e,l;return e=new x({props:{$$slots:{default:[ft]},$$scope:{ctx:s}}}),{c(){N(e.$$.fragment)},m(t,n){j(e,t,n),l=!0},p(t,[n]){const i={};n&129&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function ht(s,e,l){let{sections:t=[]}=e;return s.$$set=n=>{"sections"in n&&l(0,t=n.sections)},[t]}class Ee extends V{constructor(e){super(),P(this,e,ht,mt,G,{sections:0})}}Ee.__docgen={version:3,name:"MoreDropdown.svelte",data:[{visibility:"public",description:null,keywords:[],name:"sections",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function ye(s,e,l){const t=s.slice();return t[20]=e[l],t}function pt(s){let e,l,t,n=s[20].name+"",i,r,a;return{c(){e=p("li"),l=p("div"),t=p("a"),i=B(n),a=T(),u(t,"href",r=z(s[20].url)),u(t,"class","svelte-lmqykt"),u(l,"class","nav-button link svelte-lmqykt"),u(e,"class","nav-item category link svelte-lmqykt")},m(o,c){$(o,e,c),f(e,l),f(l,t),f(t,i),f(e,a)},p(o,c){c&8&&n!==(n=o[20].name+"")&&H(i,n),c&8&&r!==(r=z(o[20].url))&&u(t,"href",r)},i:U,o:U,d(o){o&&M(e)}}}function _t(s){let e,l,t,n=s[20].name+"",i,r,a,o,c,d,m,k,v,_;c=new Y({props:{rotate:s[20].id===s[4]}});let h=s[4]===s[20].id&&ke(s);function g(){return s[10](s[20])}function b(){return s[11](s[20])}function w(){return s[14](s[20])}return{c(){e=p("li"),l=p("div"),t=p("a"),i=B(n),a=T(),o=p("button"),N(c.$$.fragment),d=T(),h&&h.c(),m=T(),u(t,"href",r=z(s[20].url)),u(t,"class","svelte-lmqykt"),u(o,"class","button svelte-lmqykt"),u(l,"class","nav-button link svelte-lmqykt"),Z(l,"open",s[20].id===s[4]),u(e,"class","nav-item category link svelte-lmqykt")},m(y,S){$(y,e,S),f(e,l),f(l,t),f(t,i),f(l,a),f(l,o),j(c,o,null),f(e,d),h&&h.m(e,null),f(e,m),k=!0,v||(_=[F(e,"mouseenter",g),F(e,"focus",b),F(e,"mouseleave",s[12]),F(e,"blur",s[13]),F(e,"click",w)],v=!0)},p(y,S){s=y,(!k||S&8)&&n!==(n=s[20].name+"")&&H(i,n),(!k||S&8&&r!==(r=z(s[20].url)))&&u(t,"href",r);const O={};S&24&&(O.rotate=s[20].id===s[4]),c.$set(O),(!k||S&24)&&Z(l,"open",s[20].id===s[4]),s[4]===s[20].id?h?(h.p(s,S),S&24&&q(h,1)):(h=ke(s),h.c(),q(h,1),h.m(e,m)):h&&(K(),C(h,1,1,()=>{h=null}),J())},i(y){k||(q(c.$$.fragment,y),q(h),k=!0)},o(y){C(c.$$.fragment,y),C(h),k=!1},d(y){y&&M(e),E(c),h&&h.d(),v=!1,Re(_)}}}function ke(s){let e,l;return e=new je({props:{section:s[20],headingText:`Latest in ${s[20].name}`}}),{c(){N(e.$$.fragment)},m(t,n){j(e,t,n),l=!0},p(t,n){const i={};n&8&&(i.section=t[20]),n&8&&(i.headingText=`Latest in ${t[20].name}`),e.$set(i)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function we(s){let e,l,t,n;const i=[_t,pt],r=[];function a(o,c){return o[20].children?0:1}return e=a(s),l=r[e]=i[e](s),{c(){l.c(),t=Ae()},m(o,c){r[e].m(o,c),$(o,t,c),n=!0},p(o,c){let d=e;e=a(o),e===d?r[e].p(o,c):(K(),C(r[d],1,1,()=>{r[d]=null}),J(),l=r[e],l?l.p(o,c):(l=r[e]=i[e](o),l.c()),q(l,1),l.m(t.parentNode,t))},i(o){n||(q(l),n=!0)},o(o){C(l),n=!1},d(o){o&&M(t),r[e].d(o)}}}function $e(s){let e,l;return e=new Ee({props:{sections:s[2]}}),{c(){N(e.$$.fragment)},m(t,n){j(e,t,n),l=!0},p(t,n){const i={};n&4&&(i.sections=t[2]),e.$set(i)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function vt(s){let e,l,t,n,i,r,a,o,c,d,m,k,v,_;Je(s[9]);let h=A(s[3]),g=[];for(let y=0;y<h.length;y+=1)g[y]=we(ye(s,h,y));const b=y=>C(g[y],1,1,()=>{g[y]=null});d=new Y({props:{rotate:s[4]==="more"}});let w=s[4]==="more"&&$e(s);return{c(){e=p("div"),l=p("nav"),t=p("ul");for(let y=0;y<g.length;y+=1)g[y].c();n=T(),i=p("li"),r=p("div"),a=p("button"),o=p("span"),c=B("More "),N(d.$$.fragment),m=T(),w&&w.c(),u(o,"class","svelte-lmqykt"),u(a,"class","button svelte-lmqykt"),u(r,"class","nav-button more link svelte-lmqykt"),Z(r,"open",s[4]==="more"),u(i,"class","nav-item svelte-lmqykt"),u(t,"class","nav-list svelte-lmqykt"),u(l,"aria-label","Main navigation"),u(e,"class","nav-bar svelte-lmqykt")},m(y,S){$(y,e,S),f(e,l),f(l,t);for(let O=0;O<g.length;O+=1)g[O]&&g[O].m(t,null);f(t,n),f(t,i),f(i,r),f(r,a),f(a,o),f(o,c),j(d,o,null),f(i,m),w&&w.m(i,null),k=!0,v||(_=[F(window,"resize",s[9]),F(i,"mouseenter",s[15]),F(i,"focus",s[16]),F(i,"mouseleave",s[17]),F(i,"blur",s[18]),F(i,"click",s[19])],v=!0)},p(y,[S]){if(S&58){h=A(y[3]);let L;for(L=0;L<h.length;L+=1){const R=ye(y,h,L);g[L]?(g[L].p(R,S),q(g[L],1)):(g[L]=we(R),g[L].c(),q(g[L],1),g[L].m(t,n))}for(K(),L=h.length;L<g.length;L+=1)b(L);J()}const O={};S&16&&(O.rotate=y[4]==="more"),d.$set(O),(!k||S&16)&&Z(r,"open",y[4]==="more"),y[4]==="more"?w?(w.p(y,S),S&16&&q(w,1)):(w=$e(y),w.c(),q(w,1),w.m(i,null)):w&&(K(),C(w,1,1,()=>{w=null}),J())},i(y){if(!k){for(let S=0;S<h.length;S+=1)q(g[S]);q(d.$$.fragment,y),q(w),k=!0}},o(y){g=g.filter(Boolean);for(let S=0;S<g.length;S+=1)C(g[S]);C(d.$$.fragment,y),C(w),k=!1},d(y){y&&M(e),W(g,y),E(d),w&&w.d(),v=!1,Re(_)}}}const Me=250;function gt(s,e,l){let t,n,i,r,a,{sections:o=[]}=e;const c=ze("nav-active-section");Oe(s,c,R=>l(4,a=R));let d=1200,m;function k(){l(0,d=window.innerWidth)}const v=R=>{l(1,m=setTimeout(()=>c.set(R.id),Me))},_=R=>c.set(R.id),h=()=>{clearTimeout(m),c.set(null)},g=()=>{clearTimeout(m),c.set(null)},b=R=>{a===R.id&&(clearTimeout(m),c.set(null))},w=()=>{l(1,m=setTimeout(()=>c.set("more"),Me))},y=()=>c.set("more"),S=()=>{clearTimeout(m),c.set(null)},O=()=>{clearTimeout(m),c.set(null)},L=()=>{a==="more"&&(clearTimeout(m),c.set(null))};return s.$$set=R=>{"sections"in R&&l(6,o=R.sections)},s.$$.update=()=>{s.$$.dirty&1&&l(8,t=()=>d>=1300?7:5),s.$$.dirty&256&&l(7,n=t()),s.$$.dirty&192&&l(3,i=o.slice(0,n)),s.$$.dirty&192&&l(2,r=o.slice(n))},[d,m,r,i,a,c,o,n,t,k,v,_,h,g,b,w,y,S,O,L]}class Fe extends V{constructor(e){super(),P(this,e,gt,vt,G,{sections:6})}}Fe.__docgen={version:3,name:"index.svelte",data:[{visibility:"public",description:null,keywords:[],name:"sections",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const bt=[{sections:[{id:"/world/",url:"/world/",name:"World",type:"section",children:[{id:"/world/africa/",url:"/world/africa/",name:"Africa"},{id:"/world/americas/",url:"/world/americas/",name:"Americas"},{id:"/world/asia-pacific/",url:"/world/asia-pacific/",name:"Asia Pacific"},{id:"/world/china/",url:"/world/china/",name:"China"},{id:"/world/europe/",url:"/world/europe/",name:"Europe"},{id:"/world/india/",url:"/world/india/",name:"India"},{id:"/world/middle-east/",url:"/world/middle-east/",name:"Middle East"},{id:"/world/uk/",url:"/world/uk/",name:"United Kingdom"},{id:"/world/us/",url:"/world/us/",name:"United States"},{id:"/world/the-great-reboot/",url:"/world/the-great-reboot/",name:"The Great Reboot"},{id:"/world/reuters-next/",url:"/world/reuters-next/",name:"Reuters Next"}]},{id:"/business/",url:"/business/",name:"Business",type:"section",children:[{id:"/business/aerospace-defense/",url:"/business/aerospace-defense/",name:"Aerospace & Defense"},{id:"/business/autos-transportation/",url:"/business/autos-transportation/",name:"Autos & Transportation"},{id:"/business/energy/",url:"/business/energy/",name:"Energy"},{id:"/business/environment/",url:"/business/environment/",name:"Environment"},{id:"/business/finance/",url:"/business/finance/",name:"Finance"},{id:"/business/healthcare-pharmaceuticals/",url:"/business/healthcare-pharmaceuticals/",name:"Healthcare & Pharmaceuticals"},{id:"/business/media-telecom/",url:"/business/media-telecom/",name:"Media & Telecom"},{id:"/business/retail-consumer/",url:"/business/retail-consumer/",name:"Retail & Consumer"},{id:"/business/sustainable-business/",url:"/business/sustainable-business/",name:"Sustainable Business"},{id:"/business/charged/",url:"/business/charged/",name:"Charged"},{id:"/business/future-of-health/",url:"/business/future-of-health/",name:"Future of Health"},{id:"/business/future-of-money/",url:"/business/future-of-money/",name:"Future of Money"},{id:"/business/take-five/",url:"/business/take-five/",name:"Take Five"},{id:"/business/reuters-impact/",url:"/business/reuters-impact/",name:"Reuters Impact"},{id:"/business/davos/",url:"/business/davos/",name:"Davos"}]},{id:"/legal/",url:"/legal/",name:"Legal",type:"section",children:[{id:"/legal/government/",url:"/legal/government/",name:"Government"},{id:"/legal/legalindustry/",url:"/legal/legalindustry/",name:"Legal Industry"},{id:"/legal/litigation/",url:"/legal/litigation/",name:"Litigation"},{id:"/legal/transactional/",url:"/legal/transactional/",name:"Transactional"}]},{id:"/markets/",url:"/markets/",name:"Markets",type:"section",children:[{id:"/markets/asia/",url:"/markets/asia/",name:"Asian Markets"},{id:"/markets/carbon/",url:"/markets/carbon/",name:"Carbon Markets"},{id:"/markets/commodities/",url:"/markets/commodities/",name:"Commodities"},{id:"/markets/currencies/",url:"/markets/currencies/",name:"Currencies"},{id:"/markets/deals/",url:"/markets/deals/",name:"Deals"},{id:"/markets/emerging/",url:"/markets/emerging/",name:"Emerging Markets"},{id:"/markets/europe/",url:"/markets/europe/",name:"European Markets"},{id:"/markets/funds/",url:"/markets/funds/",name:"Funds"},{id:"/markets/global-market-data/",url:"/markets/global-market-data/",name:"Global Market Data"},{id:"/markets/rates-bonds/",url:"/markets/rates-bonds/",name:"Rates & Bonds"},{id:"/markets/stocks/",url:"/markets/stocks/",name:"Stocks"},{id:"/markets/us/",url:"/markets/us/",name:"U.S. Markets"},{id:"/markets/wealth/",url:"/markets/wealth/",name:"Wealth"},{id:"/markets/macromatters/",url:"/markets/macromatters/",name:"Macro Matters"}]},{id:"/breakingviews/",url:"/breakingviews/",name:"Breakingviews",type:"section"},{id:"/technology/",url:"/technology/",name:"Technology",type:"section",children:[{id:"/technology/disrupted/",url:"/technology/disrupted/",name:"Disrupted"},{id:"/technology/reuters-momentum/",url:"/technology/reuters-momentum/",name:"Reuters Momentum"}]},{id:"/investigates/",url:"https://www.reuters.com/investigates/",name:"Investigations",type:"link"},{id:"/lifestyle/sports/",url:"/lifestyle/sports/",name:"Sports",type:"section",children:[{id:"/lifestyle/sports/athletics/",url:"/lifestyle/sports/athletics/",name:"Athletics"},{id:"/lifestyle/sports/cricket/",url:"/lifestyle/sports/cricket/",name:"Cricket"},{id:"/lifestyle/sports/cycling/",url:"/lifestyle/sports/cycling/",name:"Cycling"},{id:"/lifestyle/sports/golf/",url:"/lifestyle/sports/golf/",name:"Golf"},{id:"/lifestyle/sports/motor-sports/",url:"/lifestyle/sports/motor-sports/",name:"Motor Sports"},{id:"/lifestyle/sports/soccer/",url:"/lifestyle/sports/soccer/",name:"Soccer"},{id:"/lifestyle/sports/tennis/",url:"/lifestyle/sports/tennis/",name:"Tennis"}]},{id:"/lifestyle/",url:"/lifestyle/",name:"Lifestyle",type:"section",children:[{id:"/lifestyle/oddly-enough/",url:"/lifestyle/oddly-enough/",name:"Oddly Enough"},{id:"/lifestyle/science/",url:"/lifestyle/science/",name:"Science"}]},{id:"/graphics/",url:"https://graphics.reuters.com/",name:"Graphics",type:"link"},{id:"/pictures/",url:"/pictures/",name:"Pictures",type:"section"},{id:"/video/",url:"/video/",name:"Video",type:"section"}],home_url:"/",search_url:"/site-search/",sign_in_url:"/signin/",sign_up_url:"/signup/",subscribe_url:"",my_account_url:"/myaccount/",my_view_url:"/myview/all",following_url:"/myview/following-feed",saved_url:"/myview/saved"}];function yt(s){let e,l;return{c(){e=Q("svg"),l=Q("path"),u(l,"d","M14.8571429,9.524 C15.3142857,9.524 15.6188571,9.8285714 15.6188571,10.2857143 C15.6188571,10.7428571 15.3142857,11.0474286 14.8571429,11.0474286 L1.14285714,11.0474286 C0.68571429,11.0474286 0.38114286,10.7428571 0.38114286,10.2857143 C0.38114286,9.8285714 0.68571429,9.524 1.14285714,9.524 L14.8571429,9.524 Z M14.8571429,4.9525714 C15.3142857,4.9525714 15.6188571,5.2571429 15.6188571,5.7142857 C15.6188571,6.1714286 15.3142857,6.476 14.8571429,6.476 L1.14285714,6.476 C0.68571429,6.476 0.38114286,6.1714286 0.38114286,5.7142857 C0.38114286,5.2571429 0.68571429,4.9525714 1.14285714,4.9525714 L14.8571429,4.9525714 Z M14.8571429,0.38114286 C15.3142857,0.38114286 15.6188571,0.68571429 15.6188571,1.14285714 C15.6188571,1.6 15.3142857,1.90457143 14.8571429,1.90457143 L1.14285714,1.90457143 C0.68571429,1.90457143 0.38114286,1.6 0.38114286,1.14285714 C0.38114286,0.68571429 0.68571429,0.38114286 1.14285714,0.38114286 L14.8571429,0.38114286 Z"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"viewBox","0 0 16 12"),u(e,"aria-hidden","true"),u(e,"focusable","false"),ne(e,"width",s[0]+"px"),u(e,"class","svelte-5rkp8q")},m(t,n){$(t,e,n),f(e,l)},p(t,[n]){n&1&&ne(e,"width",t[0]+"px")},i:U,o:U,d(t){t&&M(e)}}}function kt(s,e,l){let{width:t=20}=e;return s.$$set=n=>{"width"in n&&l(0,t=n.width)},[t]}class He extends V{constructor(e){super(),P(this,e,kt,yt,G,{width:0})}}He.__docgen={version:3,name:"Menu.svelte",data:[{visibility:"public",description:null,keywords:[],name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:20}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function wt(s){let e,l;return{c(){e=Q("svg"),l=Q("path"),u(l,"d","M.322.313a1.056 1.056 0 0 1 1.5 0l5.679 5.53L13.18.313a1.056 1.056 0 0 1 1.5 0 .993.993 0 0 1-.001 1.461l-5.88 5.725 5.88 5.727c.397.388.426.956.085 1.369l-.086.092a1.056 1.056 0 0 1-1.5 0l-5.679-5.53-5.679 5.53a1.056 1.056 0 0 1-1.5 0 .993.993 0 0 1 .001-1.461L6.2 7.5.322 1.774C-.076 1.386-.105.818.236.405L.322.313Z"),u(l,"fill-rule","evenodd"),u(e,"aria-hidden","true"),u(e,"focusable","false"),u(e,"width","15"),u(e,"height","15"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"class","svelte-5rkp8q")},m(t,n){$(t,e,n),f(e,l)},p:U,i:U,o:U,d(t){t&&M(e)}}}class Ve extends V{constructor(e){super(),P(this,e,null,wt,G,{})}}Ve.__docgen={version:3,name:"Close.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function qe(s,e,l){const t=s.slice();return t[3]=e[l],t}function Se(s,e,l){const t=s.slice();return t[6]=e[l],t}function Ce(s){let e,l,t,n,i,r,a,o,c,d,m,k;n=new Ue({props:{logoColour:"var(--nav-accent)",textColour:"var(--nav-primary)"}}),o=new Ve({});let v=A(s[0].sections),_=[];for(let h=0;h<v.length;h+=1)_[h]=De(qe(s,v,h));return{c(){e=p("div"),l=p("header"),t=p("div"),N(n.$$.fragment),i=T(),r=p("button"),a=p("div"),N(o.$$.fragment),c=T();for(let h=0;h<_.length;h+=1)_[h].c();u(t,"class","logo svelte-4vtyuq"),u(a,"class","button-container svelte-4vtyuq"),u(r,"class","button close-button svelte-4vtyuq"),u(l,"class","header svelte-4vtyuq"),u(e,"class","overlay svelte-4vtyuq"),u(e,"aria-modal","true"),u(e,"style",`
      --nav-background: var(--theme-colour-background, #fff);
      --nav-primary: var(--theme-colour-text-primary, #404040);
      --nav-rules: var(--theme-colour-brand-rules, #d0d0d0);
      --nav-accent: var(--theme-colour-brand-logo, #fa6400);
      --nav-shadow: 0 1px 4px 2px var(--theme-colour-brand-shadow, rgba(64,64,64,.08));
    `)},m(h,g){$(h,e,g),f(e,l),f(l,t),j(n,t,null),f(l,i),f(l,r),f(r,a),j(o,a,null),f(e,c);for(let b=0;b<_.length;b+=1)_[b]&&_[b].m(e,null);d=!0,m||(k=F(r,"click",function(){Qe(s[2])&&s[2].apply(this,arguments)}),m=!0)},p(h,g){if(s=h,g&1){v=A(s[0].sections);let b;for(b=0;b<v.length;b+=1){const w=qe(s,v,b);_[b]?_[b].p(w,g):(_[b]=De(w),_[b].c(),_[b].m(e,null))}for(;b<_.length;b+=1)_[b].d(1);_.length=v.length}},i(h){d||(q(n.$$.fragment,h),q(o.$$.fragment,h),d=!0)},o(h){C(n.$$.fragment,h),C(o.$$.fragment,h),d=!1},d(h){h&&M(e),E(n),E(o),W(_,h),m=!1,k()}}}function Te(s){let e,l=A(s[3].children),t=[];for(let n=0;n<l.length;n+=1)t[n]=Le(Se(s,l,n));return{c(){e=p("ul");for(let n=0;n<t.length;n+=1)t[n].c();u(e,"class","subsections svelte-4vtyuq")},m(n,i){$(n,e,i);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null)},p(n,i){if(i&1){l=A(n[3].children);let r;for(r=0;r<l.length;r+=1){const a=Se(n,l,r);t[r]?t[r].p(a,i):(t[r]=Le(a),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(n){n&&M(e),W(t,n)}}}function Le(s){let e,l,t=s[6].name+"",n,i,r;return{c(){e=p("li"),l=p("a"),n=B(t),r=T(),u(l,"class","subsection-link svelte-4vtyuq"),u(l,"href",i=z(s[6].url)),u(e,"class","svelte-4vtyuq")},m(a,o){$(a,e,o),f(e,l),f(l,n),f(e,r)},p(a,o){o&1&&t!==(t=a[6].name+"")&&H(n,t),o&1&&i!==(i=z(a[6].url))&&u(l,"href",i)},d(a){a&&M(e)}}}function De(s){let e,l,t=s[3].name+"",n,i,r,a,o=s[3].children&&Te(s);return{c(){e=p("section"),l=p("a"),n=B(t),r=T(),o&&o.c(),a=T(),u(l,"class","section-link svelte-4vtyuq"),u(l,"href",i=z(s[3].url)),u(e,"class","section svelte-4vtyuq")},m(c,d){$(c,e,d),f(e,l),f(l,n),f(e,r),o&&o.m(e,null),f(e,a)},p(c,d){d&1&&t!==(t=c[3].name+"")&&H(n,t),d&1&&i!==(i=z(c[3].url))&&u(l,"href",i),c[3].children?o?o.p(c,d):(o=Te(c),o.c(),o.m(e,a)):o&&(o.d(1),o=null)},d(c){c&&M(e),o&&o.d()}}}function $t(s){let e,l,t=s[1]&&Ce(s);return{c(){t&&t.c(),e=Ae()},m(n,i){t&&t.m(n,i),$(n,e,i),l=!0},p(n,[i]){n[1]?t?(t.p(n,i),i&2&&q(t,1)):(t=Ce(n),t.c(),q(t,1),t.m(e.parentNode,e)):t&&(K(),C(t,1,1,()=>{t=null}),J())},i(n){l||(q(t),l=!0)},o(n){C(t),l=!1},d(n){n&&M(e),t&&t.d(n)}}}function Mt(s,e,l){let{data:t=[]}=e,{isMobileMenuOpen:n=!1}=e,{releaseMobileMenu:i=()=>{}}=e;return s.$$set=r=>{"data"in r&&l(0,t=r.data),"isMobileMenuOpen"in r&&l(1,n=r.isMobileMenuOpen),"releaseMobileMenu"in r&&l(2,i=r.releaseMobileMenu)},[t,n,i]}class Pe extends V{constructor(e){super(),P(this,e,Mt,$t,G,{data:0,isMobileMenuOpen:1,releaseMobileMenu:2})}}Pe.__docgen={version:3,name:"index.svelte",data:[{visibility:"public",description:null,keywords:[],name:"data",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"isMobileMenuOpen",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"releaseMobileMenu",kind:"let",static:!1,readonly:!1,type:{kind:"function",text:"function",type:"function"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function qt(s){let e,l,t,n,i,r,a,o,c,d,m,k,v,_,h,g,b,w,y,S,O,L,R,ee;return c=new Ue({props:{logoColour:"var(--nav-accent)",textColour:"var(--nav-primary)"}}),m=new Fe({props:{sections:s[2]}}),y=new He({}),O=new Pe({props:{isMobileMenuOpen:s[1],releaseMobileMenu:s[4],data:s[0][0]}}),{c(){e=p("header"),l=p("div"),t=p("div"),n=p("div"),i=p("div"),r=p("div"),a=p("div"),o=p("a"),N(c.$$.fragment),d=T(),N(m.$$.fragment),k=T(),v=p("div"),v.innerHTML='<div class="spacer svelte-idqhah"></div>',_=T(),h=p("div"),g=p("div"),b=p("button"),w=p("div"),N(y.$$.fragment),S=T(),N(O.$$.fragment),u(o,"href","https://www.reuters.com"),u(o,"class","svelte-idqhah"),u(a,"class","logo svelte-idqhah"),u(r,"class","logo-container svelte-idqhah"),u(v,"class","spacer-container svelte-idqhah"),u(w,"class","button-container svelte-idqhah"),u(b,"class","menu-button svelte-idqhah"),u(b,"aria-label","Menu"),u(b,"aria-haspopup","true"),u(b,"aria-expanded",s[1]),u(g,"class","mobile-menu svelte-idqhah"),u(h,"class","mobile-button-group svelte-idqhah"),u(i,"class","main-bar svelte-idqhah"),u(n,"class","inner svelte-idqhah"),u(t,"class","scroll-container svelte-idqhah"),u(l,"class","nav-container show-nav svelte-idqhah"),u(e,"style",`
    --nav-background: var(--theme-colour-background, #fff);
    --nav-primary: var(--theme-colour-text-primary, #404040);
    --nav-rules: var(--theme-colour-brand-rules, #d0d0d0);
    --nav-accent: var(--theme-colour-brand-logo, #fa6400);
    --nav-shadow: 0 1px 4px 2px var(--theme-colour-brand-shadow, rgb(255 255 255 / 10%));
    --theme-font-family-sans-serif: Knowledge, sans-serif;
  `)},m(D,I){$(D,e,I),f(e,l),f(l,t),f(t,n),f(n,i),f(i,r),f(r,a),f(a,o),j(c,o,null),f(i,d),j(m,i,null),f(i,k),f(i,v),f(i,_),f(i,h),f(h,g),f(g,b),f(b,w),j(y,w,null),$(D,S,I),j(O,D,I),L=!0,R||(ee=F(b,"click",s[3]),R=!0)},p(D,[I]){const te={};I&4&&(te.sections=D[2]),m.$set(te),(!L||I&2)&&u(b,"aria-expanded",D[1]);const X={};I&2&&(X.isMobileMenuOpen=D[1]),I&2&&(X.releaseMobileMenu=D[4]),I&1&&(X.data=D[0][0]),O.$set(X)},i(D){L||(q(c.$$.fragment,D),q(m.$$.fragment,D),q(y.$$.fragment,D),q(O.$$.fragment,D),L=!0)},o(D){C(c.$$.fragment,D),C(m.$$.fragment,D),C(y.$$.fragment,D),C(O.$$.fragment,D),L=!1},d(D){D&&(M(e),M(S)),E(c),E(m),E(y),E(O,D),R=!1,ee()}}}function St(s,e,l){let t;Xe("nav-active-section",xe(null));let n=bt,i=!1;Ye(async()=>{if(new URL(document.location.href).origin==="https://www.reuters.com")try{const c=await(await fetch("https://www.reuters.com/site-api/header/?"+new URLSearchParams({_website:"reuters",outputType:"json"}))).json();if(!c[0].sections)return;l(0,n=c)}catch{console.warn("Unable to fetch site header data")}});const r=()=>{l(1,i=!i)},a=()=>{l(1,i=!1)};return s.$$.update=()=>{s.$$.dirty&1&&l(2,t=n[0].sections)},[n,i,t,r,a]}class Rt extends V{constructor(e){super(),P(this,e,St,qt,G,{})}}export{Rt as S};
//# sourceMappingURL=SiteHeader-ccf6a500.js.map