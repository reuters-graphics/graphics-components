import{S as he,i as Ae,s as ue,w as r,D as g,x as s,R as be,a as q,z as a,T as we,E as V,d as Y,C as t,p as te,j as Z,m as H,k as se,l as ae,b as Q,t as L,n as D,Q as fe}from"./index-25af778d.js";import{p as xe,M as Te,T as $e,S as ne}from"./collect-stories-cce06d4a.js";import{G as ee}from"./GraphicBlock-f4f94c1a.js";import{a as F,w as Ce}from"./withParams-90715500.js";import"./Block-9c89ee1a.js";import"./PaddingReset-d848e1b7.js";import"./marked.esm-76161808.js";const Ge=`The \`GraphicBlock\` component is a special derivative of the [\`Block\`](./?path=/docs/layout-block) component that also handles text elements around a graphic.

Many other components use this one to wrap graphics with styled text. When you use it, you'll also wrap your chart elements or component with it like this:

---

\`\`\`html
<script>
  import { GraphicBlock } from '@reuters-graphics/graphics-components';
<\/script>

<GraphicBlock
  width="normal"
  title="Title for my chart"
  description="Pork loin t-bone jowl prosciutto, short loin flank kevin tri-tip cupim pig pork. Meatloaf tri-tip frankfurter short ribs, cupim brisket bresaola chislic tail jerky burgdoggen pancetta."
  notes="Note: Data current as of Aug. 2, 2022.\\n\\nSource: [Google research](https://google.com)"
>
  <div id="my-chart"></div>
</GraphicBlock>
\`\`\`
`,re=`For Graphics Kit users, the \`GraphicBlock\` component is built-in to handle [ai2svelte](https://github.com/reuters-graphics/ai2svelte) graphics.

First, import your ai2svelte graphic in \`App.svelte\` and add it to the \`aiCharts\` object;

\`\`\`html
<!-- App.svelte -->
<script>
  // Other stuff...

  import AiMap from './ai2svelte/my-map.svelte';

  const aiCharts = {
    // Other charts...
    AiMap,
  };
<\/script>
\`\`\`

Then add the following structure to your Google Doc, taking care that the name of your chart in the \`aiCharts\` object matches the name of your \`Chart\`:

\`\`\`yaml
# Google doc block
Type: ai-graphic
Chart: AiMap
Width: normal
TextWidth: normal
Title: Earthquake in Haiti
Description: The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021.
Notes: \\Note: A shakemap represents the ground shaking produced by an earthquake.

\\Source: USGIS
:end
Aria: A map that shows the shake intensity of the earthquake, which was worst in central Haiti.
:end
\`\`\`
`,oe=`You can override the markup used to generate the chart text elements by using the \`title\` and/or \`notes\` named slots like this:

\`\`\`html
<GraphicBlock
  width="normal"
  notes={"Note: Data current as of Aug. 2, 2022.\\n\\nSource: [Google research](https://google.com)"}
>
  <h5 slot="title">My smaller title</h5>
  <div id="my-chart" />
  <aside slot="notes">
    <p><strong>Note:</strong> Data current as of Aug. 2, 2022.</p>
  </aside>
</GraphicBlock>
\`\`\`
`,ge=`A more detailed example of using \`GraphicBlock\` with components created by [ai2svelte](https://github.com/reuters-graphics/ai2svelte).

\`\`\`html
<script>
  import { GraphicBlock } from '@reuters-graphics/graphics-components';
  import MyAiMap from './ai2svelte/my-map.svelte';
  import { assets } from '$app/paths'; // If using with the Graphics Kit
<\/script>

<GraphicBlock
  width="normal"
  title="Earthquake in Haiti"
  description="The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021."
  notes="Note: A shakemap represents the ground shaking produced by an earthquake."
  ariaDescription="A map showing shake intensity of the quake."
>
  <MyAiMap assetsPath="{assets}" />
</GraphicBlock>
\`\`\`
`,me=`If your chart isn't easily read by screen readers — for example, it has annotations that when read without the visual won't make sense — you should add an \`ariaDescription\` that better describes the chart.

The \`ariaDescription\` string will be processed as markdown, so you can add multiple paragraphs, links, headers or whatever else you need in markdown.

> **Note:** When you set an \`ariaDescription\`, your graphic will be automatically wrapped in a div that tells screen readers not to read the text in the graphic, but instead read the hidden ARIA description.

\`\`\`html
<GraphicBlock
  width="normal"
  title="Earthquake in Haiti"
  description="The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021."
  notes="Note: A shakemap represents the ground shaking produced by an earthquake."
  ariaDescription="A map showing the shake intensity produced by the earthquake."
>
  <MyAiMap assetsPath="{assets}" />
</GraphicBlock>
\`\`\`

Sometimes, instead of a simple ARIA description for graphics, we want to also provide a data table or something else that requires more complex markup.

You can add custom markup for screen readers only by using the \`aria\` named slot.

> **Note:** The \`aria\` slot will override the \`ariaDescription\` and will also hide the text in your graphic from screen readers.

\`\`\`html
<GraphicBlock
  width="normal"
  title="Earthquake in Haiti"
  description="The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021."
  notes="Note: A shakemap represents the ground shaking produced by an earthquake."
>
  <MyAiMap basePath="{assets}" />
  <div slot="aria">
    <p>
      A shakemap shows the intensity of the 7.2-magnitude earthquake that struck
      Haiti at 8:29 a.m. EST, Aug. 14, 2021.
    </p>
    <table>
      <tr>
        <th>City</th>
        <th>Felt shake strength</th>
      </tr>
      <tr>
        <td>Les Cayes</td>
        <td>Very strong</td>
      </tr>
      <tr>
        <td>Jeremie</td>
        <td>Strong</td>
      </tr>
    </table>
  </div>
</GraphicBlock>
\`\`\`

[Read this](https://accessibility.psu.edu/images/charts/) for more information on using screen reader data tables for charts.
`,_e=""+new URL("ai-chart-xs-654013d2.png",import.meta.url).href,Be=""+new URL("ai-chart-sm-6753fbf9.png",import.meta.url).href,Ie=""+new URL("ai-chart-md-2f173a38.png",import.meta.url).href;function ce(v){let e,l,i,p,o,c,A,d,I,y,M,k,P,u,E,b,S,w,K,h,N,x,O,f,n,m,j,$,R,T,U,C,X,G,J,_,W,B;return{c(){e=r("div"),l=r("div"),i=g(),p=r("div"),o=g(),c=r("div"),c.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Shake intensity</p>',A=g(),d=r("div"),d.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Light</p>',I=g(),y=r("div"),y.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Moderate</p>',M=g(),k=r("div"),k.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Cap-Haitien</p>',P=g(),u=r("div"),u.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Strong</p>',E=g(),b=r("div"),b.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Very strong</p>',S=g(),w=r("div"),w.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Gonaïves</p>',K=g(),h=r("div"),h.innerHTML=`<p class="g-pstyle1 svelte-v5mpys">Caribbean</p> 
        <p class="g-pstyle1 svelte-v5mpys">Sea</p>`,N=g(),x=r("div"),x.innerHTML='<p class="g-pstyle2 svelte-v5mpys">HAITI</p>',O=g(),f=r("div"),f.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Jeremie</p>',n=g(),m=r("div"),m.innerHTML='<p class="g-pstyle3 svelte-v5mpys">Port-au-Prince</p>',j=g(),$=r("div"),$.innerHTML='<p class="g-pstyle3 svelte-v5mpys">Epicenter</p>',R=g(),T=r("div"),T.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Jacmel</p>',U=g(),C=r("div"),C.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Les Cayes</p>',X=g(),G=r("div"),G.innerHTML='<p class="g-pstyle0 svelte-v5mpys">50 mi</p>',J=g(),_=r("div"),_.innerHTML=`<p class="g-pstyle4 svelte-v5mpys">Dominican</p> 
        <p class="g-pstyle4 svelte-v5mpys">Republic</p>`,W=g(),B=r("div"),B.innerHTML='<p class="g-pstyle0 svelte-v5mpys">50 km</p>',t(l,"padding","0 0 91.7004% 0"),s(p,"id","g-_ai-chart-xs-img"),s(p,"class","g-aiImg svelte-v5mpys"),s(p,"alt",""),s(p,"style",`background-image: url(${_e});`),s(c,"id","g-ai0-1"),s(c,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(c,"top","3.216%"),t(c,"margin-top","-7.7px"),t(c,"left","0.5952%"),t(c,"width","99px"),s(d,"id","g-ai0-2"),s(d,"class","g-legend g-aiAbs g-aiPointText svelte-v5mpys"),t(d,"top","9.8251%"),t(d,"margin-top","-7.7px"),t(d,"left","4.9821%"),t(d,"width","47px"),s(y,"id","g-ai0-3"),s(y,"class","g-legend g-aiAbs g-aiPointText svelte-v5mpys"),t(y,"top","15.7733%"),t(y,"margin-top","-7.7px"),t(y,"left","4.9821%"),t(y,"width","69px"),s(k,"id","g-ai0-4"),s(k,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(k,"top","16.4343%"),t(k,"margin-top","-7.7px"),t(k,"left","79.0675%"),t(k,"width","82px"),s(u,"id","g-ai0-5"),s(u,"class","g-legend g-aiAbs g-aiPointText svelte-v5mpys"),t(u,"top","21.7216%"),t(u,"margin-top","-7.7px"),t(u,"left","4.9821%"),t(u,"width","55px"),s(b,"id","g-ai0-6"),s(b,"class","g-legend g-aiAbs g-aiPointText svelte-v5mpys"),t(b,"top","28.0002%"),t(b,"margin-top","-7.7px"),t(b,"left","4.9821%"),t(b,"width","78px"),s(w,"id","g-ai0-7"),s(w,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(w,"top","28.9916%"),t(w,"margin-top","-7.7px"),t(w,"left","62.2348%"),t(w,"width","68px"),s(h,"id","g-ai0-8"),s(h,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(h,"top","39.9449%"),t(h,"margin-top","-14.9px"),t(h,"left","28.714%"),t(h,"margin-left","-36.5px"),t(h,"width","73px"),s(x,"id","g-ai0-9"),s(x,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(x,"top","42.6579%"),t(x,"margin-top","-10.1px"),t(x,"left","68.5061%"),t(x,"width","77px"),s(f,"id","g-ai0-10"),s(f,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(f,"top","59.0632%"),t(f,"margin-top","-7.7px"),t(f,"left","11.2526%"),t(f,"width","63px"),s(m,"id","g-ai0-11"),s(m,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(m,"top","61.1155%"),t(m,"margin-top","-8.9px"),t(m,"left","70.5455%"),t(m,"width","106px"),s($,"id","g-ai0-12"),s($,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t($,"top","62.1069%"),t($,"margin-top","-8.9px"),t($,"left","32.6015%"),t($,"width","77px"),s(T,"id","g-ai0-13"),s(T,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(T,"top","78.8906%"),t(T,"margin-top","-7.7px"),t(T,"left","63.9138%"),t(T,"width","58px"),s(C,"id","g-ai0-14"),s(C,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(C,"top","80.2124%"),t(C,"margin-top","-7.7px"),t(C,"left","22.5649%"),t(C,"width","71px"),s(G,"id","g-ai0-15"),s(G,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(G,"top","87.8129%"),t(G,"margin-top","-7.7px"),t(G,"left","0.6179%"),t(G,"width","49px"),s(_,"id","g-ai0-16"),s(_,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(_,"top","91.0202%"),t(_,"margin-top","-11.4px"),t(_,"right","10.4418%"),t(_,"width","70px"),s(B,"id","g-ai0-17"),s(B,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(B,"top","93.7611%"),t(B,"margin-top","-7.7px"),t(B,"left","0.6179%"),t(B,"width","52px"),s(e,"id","g-_ai-chart-xs"),s(e,"class","g-artboard svelte-v5mpys"),s(e,"style","")},m(z,le){q(z,e,le),a(e,l),a(e,i),a(e,p),a(e,o),a(e,c),a(e,A),a(e,d),a(e,I),a(e,y),a(e,M),a(e,k),a(e,P),a(e,u),a(e,E),a(e,b),a(e,S),a(e,w),a(e,K),a(e,h),a(e,N),a(e,x),a(e,O),a(e,f),a(e,n),a(e,m),a(e,j),a(e,$),a(e,R),a(e,T),a(e,U),a(e,C),a(e,X),a(e,G),a(e,J),a(e,_),a(e,W),a(e,B)},p:V,d(z){z&&Y(e)}}}function de(v){let e,l,i,p,o,c,A,d,I,y,M,k,P,u,E,b,S,w,K,h,N,x,O,f,n,m,j,$,R,T,U,C,X,G,J,_,W,B;return{c(){e=r("div"),l=r("div"),i=g(),p=r("div"),o=g(),c=r("div"),c.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Shake intensity</p>',A=g(),d=r("div"),d.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Light</p>',I=g(),y=r("div"),y.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Moderate</p>',M=g(),k=r("div"),k.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Cap-Haitien</p>',P=g(),u=r("div"),u.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Strong</p>',E=g(),b=r("div"),b.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Very strong</p>',S=g(),w=r("div"),w.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Gonaïves</p>',K=g(),h=r("div"),h.innerHTML=`<p class="g-pstyle1 svelte-v5mpys">Caribbean</p> 
        <p class="g-pstyle1 svelte-v5mpys">Sea</p>`,N=g(),x=r("div"),x.innerHTML='<p class="g-pstyle2 svelte-v5mpys">HAITI</p>',O=g(),f=r("div"),f.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Jeremie</p>',n=g(),m=r("div"),m.innerHTML='<p class="g-pstyle3 svelte-v5mpys">Port-au-Prince</p>',j=g(),$=r("div"),$.innerHTML='<p class="g-pstyle3 svelte-v5mpys">Epicenter</p>',R=g(),T=r("div"),T.innerHTML=`<p class="g-pstyle4 svelte-v5mpys">Dominican</p> 
        <p class="g-pstyle4 svelte-v5mpys">Republic</p>`,U=g(),C=r("div"),C.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Jacmel</p>',X=g(),G=r("div"),G.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Les Cayes</p>',J=g(),_=r("div"),_.innerHTML='<p class="g-pstyle5 svelte-v5mpys">50 mi</p>',W=g(),B=r("div"),B.innerHTML='<p class="g-pstyle5 svelte-v5mpys">50 km</p>',t(l,"padding","0 0 82.703% 0"),s(p,"id","g-_ai-chart-sm-img"),s(p,"class","g-aiImg svelte-v5mpys"),s(p,"alt",""),s(p,"style",`background-image: url(${Be});`),s(c,"id","g-ai1-1"),s(c,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(c,"top","3.8773%"),t(c,"margin-top","-9.4px"),t(c,"left","0.3278%"),t(c,"width","111px"),s(d,"id","g-ai1-2"),s(d,"class","g-legend g-aiAbs g-aiPointText svelte-v5mpys"),t(d,"top","9.0933%"),t(d,"margin-top","-9.4px"),t(d,"left","3.0258%"),t(d,"width","52px"),s(y,"id","g-ai1-3"),s(y,"class","g-legend g-aiAbs g-aiPointText svelte-v5mpys"),t(y,"top","13.5979%"),t(y,"margin-top","-9.4px"),t(y,"left","3.0259%"),t(y,"width","77px"),s(k,"id","g-ai1-4"),s(k,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(k,"top","16.6801%"),t(k,"margin-top","-9.4px"),t(k,"left","70.3255%"),t(k,"width","92px"),s(u,"id","g-ai1-5"),s(u,"class","g-legend g-aiAbs g-aiPointText svelte-v5mpys"),t(u,"top","18.3397%"),t(u,"margin-top","-9.4px"),t(u,"left","3.0258%"),t(u,"width","61px"),s(b,"id","g-ai1-6"),s(b,"class","g-legend g-aiAbs g-aiPointText svelte-v5mpys"),t(b,"top","22.6073%"),t(b,"margin-top","-9.4px"),t(b,"left","3.0258%"),t(b,"width","88px"),s(w,"id","g-ai1-7"),s(w,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(w,"top","28.5344%"),t(w,"margin-top","-9.4px"),t(w,"left","55.9181%"),t(w,"width","76px"),s(h,"id","g-ai1-8"),s(h,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(h,"top","38.8091%"),t(h,"margin-top","-17.7px"),t(h,"left","27.2818%"),t(h,"margin-left","-41px"),t(h,"width","82px"),s(x,"id","g-ai1-9"),s(x,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(x,"top","39.9724%"),t(x,"margin-top","-8.6px"),t(x,"left","61.2858%"),t(x,"width","67px"),s(f,"id","g-ai1-10"),s(f,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(f,"top","56.985%"),t(f,"margin-top","-9.4px"),t(f,"left","12.2815%"),t(f,"width","69px"),s(m,"id","g-ai1-11"),s(m,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(m,"top","59.1569%"),t(m,"margin-top","-9.5px"),t(m,"left","63.0314%"),t(m,"width","112px"),s($,"id","g-ai1-12"),s($,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t($,"top","60.1053%"),t($,"margin-top","-9.5px"),t($,"left","30.5543%"),t($,"width","81px"),s(T,"id","g-ai1-13"),s(T,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(T,"top","62.7194%"),t(T,"margin-top","-16.5px"),t(T,"left","91.2282%"),t(T,"margin-left","-57px"),t(T,"width","114px"),s(C,"id","g-ai1-14"),s(C,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(C,"top","75.4778%"),t(C,"margin-top","-9.4px"),t(C,"left","57.3552%"),t(C,"width","64px"),s(G,"id","g-ai1-15"),s(G,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(G,"top","76.6632%"),t(G,"margin-top","-9.4px"),t(G,"left","21.9639%"),t(G,"width","79px"),s(_,"id","g-ai1-16"),s(_,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(_,"top","85.5251%"),t(_,"margin-top","-7.7px"),t(_,"left","0.1344%"),t(_,"width","49px"),s(B,"id","g-ai1-17"),s(B,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(B,"top","90.0297%"),t(B,"margin-top","-7.7px"),t(B,"left","0.1344%"),t(B,"width","52px"),s(e,"id","g-_ai-chart-sm"),s(e,"class","g-artboard svelte-v5mpys"),s(e,"style","")},m(z,le){q(z,e,le),a(e,l),a(e,i),a(e,p),a(e,o),a(e,c),a(e,A),a(e,d),a(e,I),a(e,y),a(e,M),a(e,k),a(e,P),a(e,u),a(e,E),a(e,b),a(e,S),a(e,w),a(e,K),a(e,h),a(e,N),a(e,x),a(e,O),a(e,f),a(e,n),a(e,m),a(e,j),a(e,$),a(e,R),a(e,T),a(e,U),a(e,C),a(e,X),a(e,G),a(e,J),a(e,_),a(e,W),a(e,B)},p:V,d(z){z&&Y(e)}}}function ve(v){let e,l,i,p,o,c,A,d,I,y,M,k,P,u,E,b,S,w,K,h,N,x,O,f,n,m,j,$,R,T,U,C,X,G,J,_,W,B;return{c(){e=r("div"),l=r("div"),i=g(),p=r("div"),o=g(),c=r("div"),c.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Shake intensity</p>',A=g(),d=r("div"),d.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Light</p>',I=g(),y=r("div"),y.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Moderate</p>',M=g(),k=r("div"),k.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Cap-Haitien</p>',P=g(),u=r("div"),u.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Strong</p>',E=g(),b=r("div"),b.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Very strong</p>',S=g(),w=r("div"),w.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Gonaïves</p>',K=g(),h=r("div"),h.innerHTML=`<p class="g-pstyle1 svelte-v5mpys">Caribbean</p> 
        <p class="g-pstyle1 svelte-v5mpys">Sea</p>`,N=g(),x=r("div"),x.innerHTML='<p class="g-pstyle2 svelte-v5mpys">HAITI</p>',O=g(),f=r("div"),f.innerHTML=`<p class="g-pstyle3 svelte-v5mpys">Dominican</p> 
        <p class="g-pstyle3 svelte-v5mpys">Republic</p>`,n=g(),m=r("div"),m.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Jeremie</p>',j=g(),$=r("div"),$.innerHTML='<p class="g-pstyle4 svelte-v5mpys">Epicenter</p>',R=g(),T=r("div"),T.innerHTML='<p class="g-pstyle4 svelte-v5mpys">Port-au-Prince</p>',U=g(),C=r("div"),C.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Jacmel</p>',X=g(),G=r("div"),G.innerHTML='<p class="g-pstyle0 svelte-v5mpys">Les Cayes</p>',J=g(),_=r("div"),_.innerHTML='<p class="g-pstyle5 svelte-v5mpys">50 mi</p>',W=g(),B=r("div"),B.innerHTML='<p class="g-pstyle5 svelte-v5mpys">50 km</p>',t(l,"padding","0 0 79.6009% 0"),s(p,"id","g-_ai-chart-md-img"),s(p,"class","g-aiImg svelte-v5mpys"),s(p,"alt",""),s(p,"style",`background-image: url(${Ie});`),s(c,"id","g-ai2-1"),s(c,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(c,"top","2.3515%"),t(c,"margin-top","-9.4px"),t(c,"left","0.3608%"),t(c,"width","111px"),s(d,"id","g-ai2-2"),s(d,"class","g-legend g-aiAbs g-aiPointText svelte-v5mpys"),t(d,"top","7.6811%"),t(d,"margin-top","-9.4px"),t(d,"left","2.6603%"),t(d,"width","52px"),s(y,"id","g-ai2-3"),s(y,"class","g-legend g-aiAbs g-aiPointText svelte-v5mpys"),t(y,"top","12.2494%"),t(y,"margin-top","-9.4px"),t(y,"left","2.6604%"),t(y,"width","77px"),s(k,"id","g-ai2-4"),s(k,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(k,"top","15.4852%"),t(k,"margin-top","-9.4px"),t(k,"left","70.3606%"),t(k,"width","92px"),s(u,"id","g-ai2-5"),s(u,"class","g-legend g-aiAbs g-aiPointText svelte-v5mpys"),t(u,"top","17.1983%"),t(u,"margin-top","-9.4px"),t(u,"left","2.6603%"),t(u,"width","61px"),s(b,"id","g-ai2-6"),s(b,"class","g-legend g-aiAbs g-aiPointText svelte-v5mpys"),t(b,"top","21.7666%"),t(b,"margin-top","-9.4px"),t(b,"left","2.6603%"),t(b,"width","88px"),s(w,"id","g-ai2-7"),s(w,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(w,"top","27.6672%"),t(w,"margin-top","-9.4px"),t(w,"left","55.993%"),t(w,"width","76px"),s(h,"id","g-ai2-8"),s(h,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(h,"top","38.0099%"),t(h,"margin-top","-17.7px"),t(h,"left","27.2388%"),t(h,"margin-left","-41px"),t(h,"width","82px"),s(x,"id","g-ai2-9"),s(x,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(x,"top","42.7626%"),t(x,"margin-top","-10.7px"),t(x,"left","62.8914%"),t(x,"width","80px"),s(f,"id","g-ai2-10"),s(f,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(f,"top","50.0029%"),t(f,"margin-top","-17.7px"),t(f,"left","92.295%"),t(f,"margin-left","-60.5px"),t(f,"width","121px"),s(m,"id","g-ai2-11"),s(m,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(m,"top","57.3608%"),t(m,"margin-top","-9.4px"),t(m,"left","12.2815%"),t(m,"width","69px"),s($,"id","g-ai2-12"),s($,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t($,"top","60.2742%"),t($,"margin-top","-10.7px"),t($,"left","30.6995%"),t($,"width","89px"),s(T,"id","g-ai2-13"),s(T,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(T,"top","62.5583%"),t(T,"margin-top","-10.7px"),t(T,"left","66.3403%"),t(T,"width","125px"),s(C,"id","g-ai2-14"),s(C,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(C,"top","75.6338%"),t(C,"margin-top","-9.4px"),t(C,"left","57.8174%"),t(C,"width","64px"),s(G,"id","g-ai2-15"),s(G,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(G,"top","77.3469%"),t(G,"margin-top","-9.4px"),t(G,"left","22.5239%"),t(G,"width","79px"),s(_,"id","g-ai2-16"),s(_,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(_,"top","86.936%"),t(_,"margin-top","-7.7px"),t(_,"left","0.1678%"),t(_,"width","49px"),s(B,"id","g-ai2-17"),s(B,"class","g-map-labels g-aiAbs g-aiPointText svelte-v5mpys"),t(B,"top","91.5043%"),t(B,"margin-top","-7.7px"),t(B,"left","0.1678%"),t(B,"width","52px"),s(e,"id","g-_ai-chart-md"),s(e,"class","g-artboard svelte-v5mpys"),s(e,"style","")},m(z,le){q(z,e,le),a(e,l),a(e,i),a(e,p),a(e,o),a(e,c),a(e,A),a(e,d),a(e,I),a(e,y),a(e,M),a(e,k),a(e,P),a(e,u),a(e,E),a(e,b),a(e,S),a(e,w),a(e,K),a(e,h),a(e,N),a(e,x),a(e,O),a(e,f),a(e,n),a(e,m),a(e,j),a(e,$),a(e,R),a(e,T),a(e,U),a(e,C),a(e,X),a(e,G),a(e,J),a(e,_),a(e,W),a(e,B)},p:V,d(z){z&&Y(e)}}}function Me(v){let e,l,i,p,o=v[0]&&v[0]>=0&&v[0]<510&&ce(),c=v[0]&&v[0]>=510&&v[0]<660&&de(),A=v[0]&&v[0]>=660&&ve();return{c(){e=r("div"),o&&o.c(),l=g(),c&&c.c(),i=g(),A&&A.c(),s(e,"id","g-_ai-chart-box"),s(e,"class","svelte-v5mpys"),be(()=>v[2].call(e))},m(d,I){q(d,e,I),o&&o.m(e,null),a(e,l),c&&c.m(e,null),a(e,i),A&&A.m(e,null),p=we(e,v[2].bind(e))},p(d,[I]){d[0]&&d[0]>=0&&d[0]<510?o?o.p(d,I):(o=ce(),o.c(),o.m(e,l)):o&&(o.d(1),o=null),d[0]&&d[0]>=510&&d[0]<660?c?c.p(d,I):(c=de(),c.c(),c.m(e,i)):c&&(c.d(1),c=null),d[0]&&d[0]>=660?A?A.p(d,I):(A=ve(),A.c(),A.m(e,null)):A&&(A.d(1),A=null)},i:V,o:V,d(d){d&&Y(e),o&&o.d(),c&&c.d(),A&&A.d(),p()}}}function Pe(v,e,l){let{basePath:i="./"}=e,p=null;function o(){p=this.clientWidth,l(0,p)}return v.$$set=c=>{"basePath"in c&&l(1,i=c.basePath)},[p,i,o]}class pe extends he{constructor(e){super(),Ae(this,e,Pe,Me,ue,{basePath:1})}}pe.__docgen={version:3,name:"ai-chart.svelte",data:[{keywords:[],visibility:"public",description:"svelte-ignore unused-export-let",name:"basePath",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"./"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ye="data:image/png;base64,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";function Ze(v){let e,l,i;return{c(){e=r("div"),l=r("img"),fe(l.src,i=ye)||s(l,"src",i),s(l,"alt","placeholder"),s(l,"class","svelte-16z9wsi"),s(e,"class","demo-graphic svelte-16z9wsi")},m(p,o){q(p,e,o),a(e,l)},p:V,d(p){p&&Y(e)}}}function He(v){let e,l;const i=[v[1]];let p={$$slots:{default:[Ze]},$$scope:{ctx:v}};for(let o=0;o<i.length;o+=1)p=te(p,i[o]);return e=new ee({props:p}),{c(){Z(e.$$.fragment)},m(o,c){H(e,o,c),l=!0},p(o,c){const A=c&2?se(i,[ae(o[1])]):{};c&4&&(A.$$scope={dirty:c,ctx:o}),e.$set(A)},i(o){l||(Q(e.$$.fragment,o),l=!0)},o(o){L(e.$$.fragment,o),l=!1},d(o){D(e,o)}}}function Qe(v){let e,l;return e=new pe({}),{c(){Z(e.$$.fragment)},m(i,p){H(e,i,p),l=!0},i(i){l||(Q(e.$$.fragment,i),l=!0)},o(i){L(e.$$.fragment,i),l=!1},d(i){D(e,i)}}}function Le(v){let e,l;return e=new ee({props:{width:"normal",title:"Earthquake in Haiti",description:"The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021.",notes:"Note: A shakemap represents the ground shaking produced by an earthquake.",$$slots:{default:[Qe]},$$scope:{ctx:v}}}),{c(){Z(e.$$.fragment)},m(i,p){H(e,i,p),l=!0},p(i,p){const o={};p&4&&(o.$$scope={dirty:p,ctx:i}),e.$set(o)},i(i){l||(Q(e.$$.fragment,i),l=!0)},o(i){L(e.$$.fragment,i),l=!1},d(i){D(e,i)}}}function De(v){let e,l,i;return{c(){e=r("div"),l=r("img"),fe(l.src,i=ye)||s(l,"src",i),s(l,"alt","placeholder"),s(l,"class","svelte-16z9wsi"),s(e,"class","demo-graphic svelte-16z9wsi")},m(p,o){q(p,e,o),a(e,l)},p:V,d(p){p&&Y(e)}}}function qe(v){let e;return{c(){e=r("div"),e.innerHTML="<h5>My smaller title</h5>",s(e,"slot","title")},m(l,i){q(l,e,i)},p:V,d(l){l&&Y(e)}}}function Ye(v){let e;return{c(){e=r("aside"),e.innerHTML="<p><strong>Note:</strong> Data current as of Aug. 2, 2022.</p>",s(e,"slot","notes")},m(l,i){q(l,e,i)},p:V,d(l){l&&Y(e)}}}function Ee(v){let e,l;return e=new ee({props:{width:"normal",$$slots:{notes:[Ye],title:[qe],default:[De]},$$scope:{ctx:v}}}),{c(){Z(e.$$.fragment)},m(i,p){H(e,i,p),l=!0},p(i,p){const o={};p&4&&(o.$$scope={dirty:p,ctx:i}),e.$set(o)},i(i){l||(Q(e.$$.fragment,i),l=!0)},o(i){L(e.$$.fragment,i),l=!1},d(i){D(e,i)}}}function Se(v){let e,l;return e=new pe({}),{c(){Z(e.$$.fragment)},m(i,p){H(e,i,p),l=!0},i(i){l||(Q(e.$$.fragment,i),l=!0)},o(i){L(e.$$.fragment,i),l=!1},d(i){D(e,i)}}}function Ke(v){let e,l;return e=new ee({props:{width:"normal",title:"Earthquake in Haiti",description:"The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021.",notes:"Note: A shakemap represents the ground shaking produced by an earthquake.",$$slots:{default:[Se]},$$scope:{ctx:v}}}),{c(){Z(e.$$.fragment)},m(i,p){H(e,i,p),l=!0},p(i,p){const o={};p&4&&(o.$$scope={dirty:p,ctx:i}),e.$set(o)},i(i){l||(Q(e.$$.fragment,i),l=!0)},o(i){L(e.$$.fragment,i),l=!1},d(i){D(e,i)}}}function Ne(v){let e,l;return e=new pe({}),{c(){Z(e.$$.fragment)},m(i,p){H(e,i,p),l=!0},i(i){l||(Q(e.$$.fragment,i),l=!0)},o(i){L(e.$$.fragment,i),l=!1},d(i){D(e,i)}}}function Oe(v){let e,l;return e=new ee({props:{width:"normal",title:"Earthquake in Haiti",description:"The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021.",notes:"Note: A shakemap represents the ground shaking produced by an earthquake.",ariaDescription:"A map showing the shake intensity produced by the earthquake.",$$slots:{default:[Ne]},$$scope:{ctx:v}}}),{c(){Z(e.$$.fragment)},m(i,p){H(e,i,p),l=!0},p(i,p){const o={};p&4&&(o.$$scope={dirty:p,ctx:i}),e.$set(o)},i(i){l||(Q(e.$$.fragment,i),l=!0)},o(i){L(e.$$.fragment,i),l=!1},d(i){D(e,i)}}}function Re(v){let e,l,i,p,o,c,A,d,I,y,M,k,P,u;const E=[{title:"Components/GraphicBlock"},{component:ee},v[0]];let b={};for(let n=0;n<E.length;n+=1)b=te(b,E[n]);e=new Te({props:b}),i=new $e({props:{$$slots:{default:[He,({args:n})=>({1:n}),({args:n})=>n?2:0]},$$scope:{ctx:v}}}),o=new ne({props:{name:"Default",args:{width:"normal",title:"Bacon ipsum dolor amet t-bone",description:"Pork loin t-bone jowl prosciutto, short loin flank kevin tri-tip cupim pig pork. Meatloaf tri-tip frankfurter short ribs, cupim brisket bresaola chislic tail jerky burgdoggen pancetta.",notes:`Note: Data current as of Aug. 2, 2022.

Source: [Google research](https://google.com)`}}});const S=[{name:"🚀 QUICKIT"},F(re)];let w={$$slots:{default:[Le]},$$scope:{ctx:v}};for(let n=0;n<S.length;n+=1)w=te(w,S[n]);A=new ne({props:w});const K=[{name:"Custom text"},F(oe)];let h={$$slots:{default:[Ee]},$$scope:{ctx:v}};for(let n=0;n<K.length;n+=1)h=te(h,K[n]);I=new ne({props:h});const N=[{name:"Ai2svelte"},F(ge)];let x={$$slots:{default:[Ke]},$$scope:{ctx:v}};for(let n=0;n<N.length;n+=1)x=te(x,N[n]);M=new ne({props:x});const O=[{name:"ARIA"},F(me)];let f={$$slots:{default:[Oe]},$$scope:{ctx:v}};for(let n=0;n<O.length;n+=1)f=te(f,O[n]);return P=new ne({props:f}),{c(){Z(e.$$.fragment),l=g(),Z(i.$$.fragment),p=g(),Z(o.$$.fragment),c=g(),Z(A.$$.fragment),d=g(),Z(I.$$.fragment),y=g(),Z(M.$$.fragment),k=g(),Z(P.$$.fragment)},m(n,m){H(e,n,m),q(n,l,m),H(i,n,m),q(n,p,m),H(o,n,m),q(n,c,m),H(A,n,m),q(n,d,m),H(I,n,m),q(n,y,m),H(M,n,m),q(n,k,m),H(P,n,m),u=!0},p(n,[m]){const j=m&1?se(E,[E[0],m&0&&{component:ee},m&1&&ae(n[0])]):{};e.$set(j);const $={};m&6&&($.$$scope={dirty:m,ctx:n}),i.$set($);const R=m&0?se(S,[S[0],ae(F(re))]):{};m&4&&(R.$$scope={dirty:m,ctx:n}),A.$set(R);const T=m&0?se(K,[K[0],ae(F(oe))]):{};m&4&&(T.$$scope={dirty:m,ctx:n}),I.$set(T);const U=m&0?se(N,[N[0],ae(F(ge))]):{};m&4&&(U.$$scope={dirty:m,ctx:n}),M.$set(U);const C=m&0?se(O,[O[0],ae(F(me))]):{};m&4&&(C.$$scope={dirty:m,ctx:n}),P.$set(C)},i(n){u||(Q(e.$$.fragment,n),Q(i.$$.fragment,n),Q(o.$$.fragment,n),Q(A.$$.fragment,n),Q(I.$$.fragment,n),Q(M.$$.fragment,n),Q(P.$$.fragment,n),u=!0)},o(n){L(e.$$.fragment,n),L(i.$$.fragment,n),L(o.$$.fragment,n),L(A.$$.fragment,n),L(I.$$.fragment,n),L(M.$$.fragment,n),L(P.$$.fragment,n),u=!1},d(n){D(e,n),n&&Y(l),D(i,n),n&&Y(p),D(o,n),n&&Y(c),D(A,n),n&&Y(d),D(I,n),n&&Y(y),D(M,n),n&&Y(k),D(P,n)}}}function Ue(v){return[{...Ce(Ge),argTypes:{width:{control:"select",options:["normal","wide","wider","widest","fluid"]},textWidth:{control:"select",options:["normal","wide","wider","widest","fluid"]}}}]}class ke extends he{constructor(e){super(),Ae(this,e,Ue,Re,ue,{})}}ke.__docgen={version:3,name:"GraphicBlock.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ie=xe(ke,{meta:{title:"Components/GraphicBlock"},stories:{"tpl:default":{storyId:"components-graphicblock--default",name:"default",template:!0,source:`<GraphicBlock {...args}>
  <div class="demo-graphic">
    <img src="{PlaceholderImg}" alt="placeholder" />
  </div>
</GraphicBlock>`,hasArgs:!0},Default:{storyId:"components-graphicblock--default",name:"Default",template:!1,hasArgs:!1},QUICKIT:{storyId:"components-graphicblock--quickit",name:"🚀 QUICKIT",template:!1,source:`<GraphicBlock
  width="normal"
  title="Earthquake in Haiti"
  description="The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021."
  notes="Note: A shakemap represents the ground shaking produced by an earthquake."
>
  <AiMap />
</GraphicBlock>`,hasArgs:!1},CustomText:{storyId:"components-graphicblock--custom-text",name:"Custom text",template:!1,source:`<GraphicBlock width="normal">
  <div slot="title">
    <h5>My smaller title</h5>
  </div>
  <div class="demo-graphic">
    <img src="{PlaceholderImg}" alt="placeholder" />
  </div>
  <aside slot="notes">
    <p><strong>Note:</strong> Data current as of Aug. 2, 2022.</p>
  </aside>
</GraphicBlock>`,hasArgs:!1},Ai2svelte:{storyId:"components-graphicblock--ai-2-svelte",name:"Ai2svelte",template:!1,source:`<GraphicBlock
  width="normal"
  title="Earthquake in Haiti"
  description="The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021."
  notes="Note: A shakemap represents the ground shaking produced by an earthquake."
>
  <AiMap />
</GraphicBlock>`,hasArgs:!1},ARIA:{storyId:"components-graphicblock--aria",name:"ARIA",template:!1,source:`<GraphicBlock
  width="normal"
  title="Earthquake in Haiti"
  description="The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021."
  notes="Note: A shakemap represents the ground shaking produced by an earthquake."
  ariaDescription="A map showing the shake intensity produced by the earthquake."
>
  <AiMap />
</GraphicBlock>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","quickitDocs","customTextDocs","ai2svelteDocs","ariaDocs","GraphicBlock","AiMap","withComponentDocs","withStoryDocs","PlaceholderImg"]}),et=ie.meta,tt=["Default","QUICKIT","CustomText","Ai2svelte","ARIA"],st=ie.stories.Default,at=ie.stories.QUICKIT,it=ie.stories.CustomText,lt=ie.stories.Ai2svelte,nt=ie.stories.ARIA;export{nt as ARIA,lt as Ai2svelte,it as CustomText,st as Default,at as QUICKIT,tt as __namedExportsOrder,et as default};
//# sourceMappingURL=GraphicBlock.stories-ead27e7a.js.map
