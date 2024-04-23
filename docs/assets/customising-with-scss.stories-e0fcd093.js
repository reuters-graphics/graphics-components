import{M as a}from"./chunk-S4VUQJ4A-862256f8.js";import{p as o,j as e}from"./jsx-runtime-69d355e6.js";import{u as i}from"./index-457137cd.js";import"./iframe-8dc9b10b.js";import"../sb-preview/runtime.js";import"./index-cb68e540.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-e04ae519.js";import"./index-356e4a49.js";const c=""+new URL("scss-start-2a80c71b.png",import.meta.url).href,h=""+new URL("scss-highlight-be092e13.png",import.meta.url).href,l=""+new URL("scss-inspector-ad61f9f6.png",import.meta.url).href,d=""+new URL("scss-change-08eee85b.png",import.meta.url).href,p=""+new URL("scss-test-248bae69.png",import.meta.url).href,m=""+new URL("scss-winning-4f1df231.png",import.meta.url).href;function r(t){const s=Object.assign({p:"p",img:"img",h1:"h1",h2:"h2",code:"code",em:"em",pre:"pre",h4:"h4",strong:"strong"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Guides/Customising components with SCSS",parameters:{...o}}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg",alt:""})}),`
`,e.jsx(s.h1,{id:"customising-components-with-scss",children:"Customising components with SCSS"}),`
`,e.jsx(s.p,{children:"One of the most powerful ways to customise components isn't props or, even, Svelte."}),`
`,e.jsx("p",{class:"sbdocs-p",children:e.jsx("span",{class:"highlight bold",children:"It's SCSS and your web inspector!"})}),`
`,e.jsx(s.h2,{id:"hows-that",children:"How's that??"}),`
`,e.jsxs(s.p,{children:["Let's say you wanted to change our ",e.jsx(s.code,{children:"BeforeAfter"})," component. You want the text overlays to be at the bottom of the image instead of the top like this:"]}),`
`,e.jsx("img",{src:c,width:"600"}),`
`,e.jsxs(s.p,{children:["The first thing you should do is ",e.jsx("span",{class:"highlight",children:"check out the elements you want to change in your web inspector"})," and see if CSS can make the change you want."]}),`
`,e.jsx("img",{src:h,width:"300",style:{margin:"0 0 1rem"}}),`
`,e.jsx("img",{src:l,width:"100%"}),`
`,e.jsxs(s.p,{children:["In our case, we want to change the absolute position of those elements. To test that'll actually work, we can ",e.jsx("span",{class:"highlight",children:"try it directly in the inspector first!"})]}),`
`,e.jsx("img",{src:d,width:"500",style:{margin:"0 0 1rem"}}),`
`,e.jsx("img",{src:p,width:"600",style:{margin:"0 0 1rem"}}),`
`,e.jsxs(s.p,{children:["Now that we know we can change what we need through CSS it's time to write some SCSS, either in your ",e.jsx(s.code,{children:"global.scss"})," file or directly in a component like ",e.jsx(s.code,{children:"App.svelte"}),"."]}),`
`,e.jsx(s.p,{children:"First, let's look at the class of the style rule we changed in the inspector:"}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"figure.before-after-container.s-khJY-w4TYkp5 .overlay-container.before.s-khJY-w4TYkp5"})}),`
`,e.jsxs(s.p,{children:["One thing we always need to do is ",e.jsx("span",{class:"highlight",children:"strip out any Svelte class names"}),", i.e., those weird ",e.jsx(s.code,{children:".s-khJY-w4TYkp5"})," classes. Why? Those are random classes Svelte adds to CSS, and we can't guarantee they won't change."]}),`
`,e.jsx(s.p,{children:"That leaves us with:"}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"figure.before-after-container .overlay-container.before"})}),`
`,e.jsxs(s.p,{children:["But we need our style rule to ",e.jsx(s.em,{children:"beat"})," the original style in the CSS cascade, and right now, it's less specific without those class names we stripped."]}),`
`,e.jsxs(s.p,{children:["The easiest way to make sure your style rule wins out is to ",e.jsx("span",{class:"highlight",children:"add an ID either directly to the element or to a parent"}),". In our case, let's add an ID through the ",e.jsx(s.code,{children:"BeforeAfter"})," ",e.jsx(s.code,{children:"id"})," prop. Now we can use it! (For extra credit, though, we'll drop the ",e.jsx(s.code,{children:".before"})," so our new style rule applies to ",e.jsx(s.em,{children:"both"})," overlays.)"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-scss",children:`figure#my-before-after .overlay-container {
  bottom: 0;
}
`})}),`
`,e.jsx(s.p,{children:"Now our selector is more specific. We win!"}),`
`,e.jsxs(s.p,{children:["If you don't see a way to add an ID through a component's props, then just wrap the component in a ",e.jsx(s.code,{children:"div"})," in your code:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-svelte",children:`<div id="my-before-after">
  <BeforeAfter />
</div>
`})}),`
`,e.jsx(s.p,{children:"... and use that, instead!"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-scss",children:`div#my-before-after figure .overlay-container {
  bottom: 0;
}
`})}),`
`,e.jsxs(s.p,{children:["We can ",e.jsx("span",{class:"highlight",children:"confirm the new style rule is winning by looking at its order back in our web inspector!"})]}),`
`,e.jsx("img",{src:m,width:"500",style:{margin:"0 0 1rem"}}),`
`,e.jsx(s.p,{children:"Done!"}),`
`,e.jsxs(s.h4,{id:"can-i-just-important-it",children:["Can I just... ",e.jsx(s.code,{children:"important!"})," it?"]}),`
`,e.jsxs(s.p,{children:["Yep, as a last result. Just be sure your style rule is ",e.jsx(s.strong,{children:"very specific"})," and not something generic that might apply to other elements like ",e.jsx(s.code,{children:"div.container"}),"."]})]})}function g(t={}){const{wrapper:s}=Object.assign({},i(),t.components);return s?e.jsx(s,{...t,children:e.jsx(r,{...t})}):r(t)}const u=()=>{throw new Error("Docs-only story")};u.parameters={docsOnly:!0};const n={title:"Guides/Customising components with SCSS",parameters:{...o},tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:g};const I=["__page"];export{I as __namedExportsOrder,u as __page,n as default};
//# sourceMappingURL=customising-with-scss.stories-e0fcd093.js.map
