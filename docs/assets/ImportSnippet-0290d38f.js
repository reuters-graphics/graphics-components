import{R as e,r}from"./index-4b4bf420.js";import{S as n,p as u}from"./prism-7bdf0952.js";import{s as g}from"./scss-efc2351e.js";const d="_title_daft4_1",f="_table_daft4_20",_="_importsnippet_daft4_125",o={title:d,table:f,importsnippet:_};n.registerLanguage("scss",g);const p=t=>t.replace(/\/_/,"/").replace(/\.scss$/,""),E=t=>{const[s,c]=r.useState(!1);let a;r.useEffect(()=>{a&&clearTimeout(a),a=setTimeout(()=>{c(!1)},1500)},[s]);const i=async({partial:l})=>{const m=`@import "@reuters-graphics/graphics-components/scss/colours/${p(l)}";`;await navigator.clipboard.writeText(m),c(!0)};return e.createElement("button",{className:"copy-btn",onClick:()=>i(t)},e.createElement("span",{className:"material-symbols-outlined"},"content_copy"),s&&e.createElement("span",{className:"copy-tag"},"Copied"))},x=({included:t=!1,partial:s="thematic/_tr.scss"})=>t?e.createElement("div",{className:o.importsnippet},e.createElement("p",null,"Included")):e.createElement("div",{className:o.importsnippet},e.createElement(n,{language:"scss",style:u},`// global.scss 
@import "@reuters-graphics/graphics-components/scss/colours/${p(s)}";`),e.createElement(E,{partial:s}));export{x as I,o as c};
//# sourceMappingURL=ImportSnippet-0290d38f.js.map