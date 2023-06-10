import{S as M,i as y,s as A,p as w,j as u,D as g,m as l,a as S,k as x,l as C,b as f,t as i,n as $,d as I}from"./index-25af778d.js";import{p as j,M as k,T as q,S as E}from"./collect-stories-cce06d4a.js";import{S as _}from"./SearchInput-197a58d9.js";import{w as D}from"./withParams-90715500.js";const v=`Invite users to search for something.

\`\`\`html
<script>
  import { SearchInput } from '@reuters-graphics/graphics-components';

  function handleSearchInput(event) {
    const searchText = event.detail.value;
    // Here's where you might update a variable,
    // filter a dataset or make an API call
    // based on the user's input.
    console.log(\`Search for \${searchText}\`);
  }
<\/script>

<SearchInput on:search="{handleSearchInput}" />
\`\`\`
`;function H(m){let n,r;const s=[m[0]];let p={};for(let t=0;t<s.length;t+=1)p=w(p,s[t]);return n=new _({props:p}),{c(){u(n.$$.fragment)},m(t,o){l(n,t,o),r=!0},p(t,o){const c=o&1?x(s,[C(t[0])]):{};n.$set(c)},i(t){r||(f(n.$$.fragment,t),r=!0)},o(t){i(n.$$.fragment,t),r=!1},d(t){$(n,t)}}}function O(m){let n,r,s,p,t,o;const c=[{title:"Components/SearchInput"},{component:_},D(v)];let h={};for(let e=0;e<c.length;e+=1)h=w(h,c[e]);return n=new k({props:h}),s=new q({props:{$$slots:{default:[H,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:m}}}),t=new E({props:{name:"Default",args:{}}}),{c(){u(n.$$.fragment),r=g(),u(s.$$.fragment),p=g(),u(t.$$.fragment)},m(e,a){l(n,e,a),S(e,r,a),l(s,e,a),S(e,p,a),l(t,e,a),o=!0},p(e,[a]){const b=a&0?x(c,[c[0],a&0&&{component:_},a&0&&C(D(v))]):{};n.$set(b);const d={};a&3&&(d.$$scope={dirty:a,ctx:e}),s.$set(d)},i(e){o||(f(n.$$.fragment,e),f(s.$$.fragment,e),f(t.$$.fragment,e),o=!0)},o(e){i(n.$$.fragment,e),i(s.$$.fragment,e),i(t.$$.fragment,e),o=!1},d(e){$(n,e),e&&I(r),$(s,e),e&&I(p),$(t,e)}}}class P extends M{constructor(n){super(),y(this,n,null,O,A,{})}}const T=j(P,{meta:{title:"Components/SearchInput"},stories:{"tpl:default":{storyId:"components-searchinput--default",name:"default",template:!0,source:"<SearchInput {...args} />",hasArgs:!0},Default:{storyId:"components-searchinput--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","SearchInput","withComponentDocs"]}),J=T.meta,K=["Default"],L=T.stories.Default;export{L as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=SearchInput.stories-828897b5.js.map
