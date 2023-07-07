import{S as X,i as Y,s as H,j as y,m as b,b as h,t as w,n as k,K as ae,o as ie,X as re,D as A,w as E,e as se,x as g,Q as M,C as G,a as D,z as ne,g as q,c as B,d as C,f as oe,q as J,u as Z,r as $,v as x,p as I,k as N,l as O,E as le}from"./index-25af778d.js";import{p as pe,M as ce,T as fe,S as U}from"./collect-stories-cce06d4a.js";import{G as de}from"./GraphicBlock-f4f94c1a.js";import{a as j,w as me}from"./withParams-90715500.js";import"./Block-9c89ee1a.js";import"./PaddingReset-d848e1b7.js";import"./marked.esm-76161808.js";const ue=`Easily add a responsive Datawrapper embed on your page.

\`\`\`html
<script>
  import { DatawrapperChart } from '@reuters-graphics/graphics-components';
<\/script>

<DatawrapperChart
  title="Global abortion access"
  ariaLabel="map"
  id="abortion-rights-map"
  src="https://graphics.reuters.com/USA-ABORTION/lgpdwggnwvo/media-embed.html"
/>
\`\`\`

##### Getting the chart URL for \`src\`

Copy the source url for the Datawrapper chart in the \`src\` prop.
You can get this from the published url on Reuters Graphics.

- Publish the chart on Datawrapper.
- Go to the **Datawrapper charts** Teams channel, wait for the graphic to finish publishing.
- Inside **Embed code (for developers only)**, find and copy the url inside the \`src\` prop. (It ends in \`media-embed.html\`.)

**Note:** There is no need to update the url if you update the chart inside Datawrapper. Any changes will be automatically reflected.
`,P=`By default, Datawrapper will export your chart with the chart chatter like title, description and notes.

At the moment, these don't _exactly_ match our styles and can't be made to fit into the article well.

Instead, it's often better to remove all the text from your Datawrapper chart before publishing it and add that text back via the component props.
`;const he=s=>({}),z=s=>({}),we=s=>({}),F=s=>({});function K(s){let t;const i=s[12].title,e=J(i,s,s[14],F);return{c(){e&&e.c()},m(a,r){e&&e.m(a,r),t=!0},p(a,r){e&&e.p&&(!t||r&16384)&&Z(e,i,a,a[14],t?x(i,a[14],r,we):$(a[14]),F)},i(a){t||(h(e,a),t=!0)},o(a){w(e,a),t=!1},d(a){e&&e.d(a)}}}function Q(s){let t;const i=s[12].notes,e=J(i,s,s[14],z);return{c(){e&&e.c()},m(a,r){e&&e.m(a,r),t=!0},p(a,r){e&&e.p&&(!t||r&16384)&&Z(e,i,a,a[14],t?x(i,a[14],r,he):$(a[14]),z)},i(a){t||(h(e,a),t=!0)},o(a){w(e,a),t=!1},d(a){e&&e.d(a)}}}function ge(s){let t,i,e,a,r,u,d,p=s[11].title&&K(s),c=s[11].notes&&Q(s);return{c(){p&&p.c(),t=A(),i=E("div"),e=E("iframe"),r=A(),c&&c.c(),u=se(),g(e,"title",s[2]),g(e,"aria-label",s[4]),g(e,"id",s[5]),M(e.src,a=s[6])||g(e,"src",a),g(e,"scrolling",s[7]),g(e,"frameborder","0"),G(e,"width","0"),G(e,"min-width","100%",1),G(e,"border","none"),g(i,"class","datawrapper-chart svelte-13ejpv3")},m(o,f){p&&p.m(o,f),D(o,t,f),D(o,i,f),ne(i,e),s[13](e),D(o,r,f),c&&c.m(o,f),D(o,u,f),d=!0},p(o,f){o[11].title?p?(p.p(o,f),f&2048&&h(p,1)):(p=K(o),p.c(),h(p,1),p.m(t.parentNode,t)):p&&(q(),w(p,1,1,()=>{p=null}),B()),(!d||f&4)&&g(e,"title",o[2]),(!d||f&16)&&g(e,"aria-label",o[4]),(!d||f&32)&&g(e,"id",o[5]),(!d||f&64&&!M(e.src,a=o[6]))&&g(e,"src",a),(!d||f&128)&&g(e,"scrolling",o[7]),o[11].notes?c?(c.p(o,f),f&2048&&h(c,1)):(c=Q(o),c.c(),h(c,1),c.m(u.parentNode,u)):c&&(q(),w(c,1,1,()=>{c=null}),B())},i(o){d||(h(p),h(c),d=!0)},o(o){w(p),w(c),d=!1},d(o){p&&p.d(o),o&&C(t),o&&C(i),s[13](null),o&&C(r),c&&c.d(o),o&&C(u)}}}function _e(s){let t,i;return t=new de({props:{width:s[8],textWidth:s[9],title:s[0],description:s[1],notes:s[3],$$slots:{default:[ge]},$$scope:{ctx:s}}}),{c(){y(t.$$.fragment)},m(e,a){b(t,e,a),i=!0},p(e,[a]){const r={};a&256&&(r.width=e[8]),a&512&&(r.textWidth=e[9]),a&1&&(r.title=e[0]),a&2&&(r.description=e[1]),a&8&&(r.notes=e[3]),a&19700&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){i||(h(t.$$.fragment,e),i=!0)},o(e){w(t.$$.fragment,e),i=!1},d(e){k(t,e)}}}function ye(s,t,i){let e,{$$slots:a={},$$scope:r}=t;const u=ae(a);let{title:d=null}=t,{description:p=null}=t,{frameTitle:c=""}=t,{notes:o=null}=t,{ariaLabel:f=""}=t,{id:v=""}=t,{src:n}=t,{scrolling:m="no"}=t,{width:S="normal"}=t,{textWidth:T=null}=t,_;ie(()=>{typeof window<"u"&&window.addEventListener("message",e)}),re(()=>{typeof window<"u"&&window.removeEventListener("message",e)});function ee(l){oe[l?"unshift":"push"](()=>{_=l,i(10,_)})}return s.$$set=l=>{"title"in l&&i(0,d=l.title),"description"in l&&i(1,p=l.description),"frameTitle"in l&&i(2,c=l.frameTitle),"notes"in l&&i(3,o=l.notes),"ariaLabel"in l&&i(4,f=l.ariaLabel),"id"in l&&i(5,v=l.id),"src"in l&&i(6,n=l.src),"scrolling"in l&&i(7,m=l.scrolling),"width"in l&&i(8,S=l.width),"textWidth"in l&&i(9,T=l.textWidth),"$$scope"in l&&i(14,r=l.$$scope)},s.$$.update=()=>{s.$$.dirty&1024&&(e=l=>{if(l.data["datawrapper-height"]!==void 0){const R=[_];for(const te in l.data["datawrapper-height"])for(let L=0;L<R.length;L++)R[L].contentWindow===l.source&&(R[L].style.height=l.data["datawrapper-height"][te]+"px")}})},[d,p,c,o,f,v,n,m,S,T,_,u,a,ee,r]}class W extends X{constructor(t){super(),Y(this,t,ye,_e,H,{title:0,description:1,frameTitle:2,notes:3,ariaLabel:4,id:5,src:6,scrolling:7,width:8,textWidth:9})}}W.__docgen={version:3,name:"DatawrapperChart.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Title of the graphic",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Description of the graphic, passed in as a markdown string.",name:"description",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"required",description:""}],visibility:"public",description:"iframe title",name:"frameTitle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Notes to the graphic, passed in as a markdown string.",name:"notes",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"required",description:""}],visibility:"public",description:"iframe aria label",name:"ariaLabel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"iframe id",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"required",description:""}],visibility:"public",description:"Datawrapper embed URL",name:"src",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[],visibility:"public",description:"iframe scrolling option",name:"scrolling",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"no"},{keywords:[],visibility:"public",description:"Width of the chart within the text well.",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:`Set a different width for the text within the text well, for example,
"normal" to keep the title, description and notes inline with the rest
of the text well. Can't ever be wider than \`width\`.`,name:"textWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"Custom headline and chatter slot",name:"title"},{keywords:[],visibility:"public",description:"Custom notes and source slot",name:"notes"}],refs:[]};function be(s){let t,i;const e=[s[1]];let a={};for(let r=0;r<e.length;r+=1)a=I(a,e[r]);return t=new W({props:a}),{c(){y(t.$$.fragment)},m(r,u){b(t,r,u),i=!0},p(r,u){const d=u&2?N(e,[O(r[1])]):{};t.$set(d)},i(r){i||(h(t.$$.fragment,r),i=!0)},o(r){w(t.$$.fragment,r),i=!1},d(r){k(t,r)}}}function ke(s){let t,i;return t=new W({props:{frameTitle:"Global abortion access",ariaLabel:"map",id:"abortion-rights-map",src:"https://graphics.reuters.com/USA-ABORTION/lgvdwemlbpo/media-embed.html",title:"Global abortion access",description:"A map of worldwide access to abortion.",notes:`Note: Different indicators and additional restrictions, including different gestational limits, apply in some countries. Refer to source for full classification. Current as of May 4, 2022.

Source: Center for Reproductive Rights`}}),{c(){y(t.$$.fragment)},m(e,a){b(t,e,a),i=!0},p:le,i(e){i||(h(t.$$.fragment,e),i=!0)},o(e){w(t.$$.fragment,e),i=!1},d(e){k(t,e)}}}function De(s){let t,i,e,a,r,u,d,p;const c=[{title:"Components/DatawrapperChart"},{component:W},s[0]];let o={};for(let n=0;n<c.length;n+=1)o=I(o,c[n]);t=new ce({props:o}),e=new fe({props:{$$slots:{default:[be,({args:n})=>({1:n}),({args:n})=>n?2:0]},$$scope:{ctx:s}}}),r=new U({props:{name:"Default",args:{src:"https://graphics.reuters.com/USA-ABORTION/lgpdwggnwvo/media-embed.html",id:"abortion-rights-map",ariaLabel:"map",frameTitle:"Global abortion access"}}});const f=[{name:"With chatter"},j(P)];let v={$$slots:{default:[ke]},$$scope:{ctx:s}};for(let n=0;n<f.length;n+=1)v=I(v,f[n]);return d=new U({props:v}),{c(){y(t.$$.fragment),i=A(),y(e.$$.fragment),a=A(),y(r.$$.fragment),u=A(),y(d.$$.fragment)},m(n,m){b(t,n,m),D(n,i,m),b(e,n,m),D(n,a,m),b(r,n,m),D(n,u,m),b(d,n,m),p=!0},p(n,[m]){const S=m&1?N(c,[c[0],m&0&&{component:W},m&1&&O(n[0])]):{};t.$set(S);const T={};m&6&&(T.$$scope={dirty:m,ctx:n}),e.$set(T);const _=m&0?N(f,[f[0],O(j(P))]):{};m&4&&(_.$$scope={dirty:m,ctx:n}),d.$set(_)},i(n){p||(h(t.$$.fragment,n),h(e.$$.fragment,n),h(r.$$.fragment,n),h(d.$$.fragment,n),p=!0)},o(n){w(t.$$.fragment,n),w(e.$$.fragment,n),w(r.$$.fragment,n),w(d.$$.fragment,n),p=!1},d(n){k(t,n),n&&C(i),k(e,n),n&&C(a),k(r,n),n&&C(u),k(d,n)}}}function Ce(s){return[{...me(ue),argTypes:{width:{control:"select",options:["normal","wide","wider","widest","fluid"]}}}]}class ve extends X{constructor(t){super(),Y(this,t,Ce,De,H,{})}}const V=pe(ve,{meta:{title:"Components/DatawrapperChart"},stories:{"tpl:default":{storyId:"components-datawrapperchart--default",name:"default",template:!0,source:"<DatawrapperChart {...args} />",hasArgs:!0},Default:{storyId:"components-datawrapperchart--default",name:"Default",template:!1,hasArgs:!1},WithChatter:{storyId:"components-datawrapperchart--with-chatter",name:"With chatter",template:!1,source:`<DatawrapperChart
  frameTitle="Global abortion access"
  ariaLabel="map"
  id="abortion-rights-map"
  src="https://graphics.reuters.com/USA-ABORTION/lgvdwemlbpo/media-embed.html"
  title="Global abortion access"
  description="A map of worldwide access to abortion."
  notes="{'Note: Different indicators and additional restrictions, including different gestational limits, apply in some countries. Refer to source for full classification. Current as of May 4, 2022.\\n\\nSource: Center for Reproductive Rights'}"
/>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","withChatterDocs","DatawrapperChart","withComponentDocs","withStoryDocs"]}),Ie=V.meta,Ne=["Default","WithChatter"],Oe=V.stories.Default,Ve=V.stories.WithChatter;export{Oe as Default,Ve as WithChatter,Ne as __namedExportsOrder,Ie as default};
//# sourceMappingURL=DatawrapperChart.stories-bdbe33f2.js.map