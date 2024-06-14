import{S as C,i as x,s as T,C as I,g as u,z as g,m as l,d,t as f,h as i,f as S,j as $}from"./index-85f88930.js";import{g as y,a as M}from"./spread-8a54911c.js";import{p as b,M as A,T as j,S as k}from"./collect-stories-fa95313f.js";import{S as D}from"./SearchInput-9e95f06d.js";import{w as q}from"./withParams-47e2ab71.js";const z=`Invite users to search for something.

\`\`\`svelte
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
`;function E(c){let s,a;const n=[c[0]];let p={};for(let t=0;t<n.length;t+=1)p=I(p,n[t]);return s=new D({props:p}),{c(){u(s.$$.fragment)},m(t,r){l(s,t,r),a=!0},p(t,r){const m=r&1?y(n,[M(t[0])]):{};s.$set(m)},i(t){a||(f(s.$$.fragment,t),a=!0)},o(t){i(s.$$.fragment,t),a=!1},d(t){$(s,t)}}}function H(c){let s,a,n,p,t,r;const m=[{title:"Components/SearchInput"},{component:D},q(z)];let h={};for(let e=0;e<m.length;e+=1)h=I(h,m[e]);return s=new A({props:h}),n=new j({props:{$$slots:{default:[E,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:c}}}),t=new k({props:{name:"Default",args:{}}}),{c(){u(s.$$.fragment),a=g(),u(n.$$.fragment),p=g(),u(t.$$.fragment)},m(e,o){l(s,e,o),d(e,a,o),l(n,e,o),d(e,p,o),l(t,e,o),r=!0},p(e,[o]){const w={};s.$set(w);const _={};o&3&&(_.$$scope={dirty:o,ctx:e}),n.$set(_)},i(e){r||(f(s.$$.fragment,e),f(n.$$.fragment,e),f(t.$$.fragment,e),r=!0)},o(e){i(s.$$.fragment,e),i(n.$$.fragment,e),i(t.$$.fragment,e),r=!1},d(e){e&&(S(a),S(p)),$(s,e),$(n,e),$(t,e)}}}class O extends C{constructor(s){super(),x(this,s,null,H,T,{})}}const v=b(O,{meta:{title:"Components/SearchInput"},stories:{"tpl:default":{name:"default",template:!0,source:"<SearchInput {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","SearchInput","withComponentDocs"]}),K=v.meta,L=["Default"],N=v.stories.Default;export{N as Default,L as __namedExportsOrder,K as default};
//# sourceMappingURL=SearchInput.stories-e293c649.js.map
