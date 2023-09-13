import{S as F,i as ee,s as te,o as b,y as k,b as A,N as ne,d as u,e as V,O as oe,n as C,f as y,C as $,g as c,m,t as d,h as v,j as h}from"./index-df681c7c.js";import{g as se,a as ae}from"./spread-8a54911c.js";import{p as re,M as ge,T as ce,S as _}from"./collect-stories-a6a786e2.js";import{G}from"./GraphicBlock-6959cc3a.js";import{b as P,w as me}from"./withParams-47e2ab71.js";import"./Block-2886d499.js";import"./PaddingReset-6a0440e6.js";import"./marked.esm-76161808.js";const de=`The \`GraphicBlock\` component is a special derivative of the [\`Block\`](./?path=/docs/layout-block) component that also handles text elements around a graphic.

Many other components use this one to wrap graphics with styled text. When you use it, you'll also wrap your chart elements or component with it like this:

---

\`\`\`svelte
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
`,ve=`For Graphics Kit users, the \`GraphicBlock\` component is built-in to handle [ai2svelte](https://github.com/reuters-graphics/ai2svelte) graphics.

First, import your ai2svelte graphic in \`App.svelte\` and add it to the \`aiCharts\` object;

\`\`\`svelte
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
`,he=`You can override the markup used to generate the chart text elements by using the \`title\` and/or \`notes\` named slots like this:

\`\`\`svelte
<GraphicBlock
  width="normal"
  notes="{'Note: Data current as of Aug. 2, 2022.\\n\\nSource: [Google research](https://google.com)'}"
>
  <h5 slot="title">My smaller title</h5>
  <div id="my-chart"></div>
  <aside slot="notes">
    <p><strong>Note:</strong> Data current as of Aug. 2, 2022.</p>
  </aside>
</GraphicBlock>
\`\`\`
`,Ae=`A more detailed example of using \`GraphicBlock\` with components created by [ai2svelte](https://github.com/reuters-graphics/ai2svelte).

\`\`\`svelte
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
`,ue=`If your chart isn't easily read by screen readers — for example, it has annotations that when read without the visual won't make sense — you should add an \`ariaDescription\` that better describes the chart.

The \`ariaDescription\` string will be processed as markdown, so you can add multiple paragraphs, links, headers or whatever else you need in markdown.

> **Note:** When you set an \`ariaDescription\`, your graphic will be automatically wrapped in a div that tells screen readers not to read the text in the graphic, but instead read the hidden ARIA description.

\`\`\`svelte
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

\`\`\`svelte
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
`,ye=""+new URL("ai-chart-xs-654013d2.png",import.meta.url).href,fe=""+new URL("ai-chart-sm-6753fbf9.png",import.meta.url).href,ke=""+new URL("ai-chart-md-2f173a38.png",import.meta.url).href;function X(l){let e;return{c(){e=b("div"),e.innerHTML=`<div style="padding: 0 0 91.7004% 0;"></div> <div id="g-_ai-chart-xs-img" class="g-aiImg svelte-v5mpys" alt="" style="${`background-image: url(${ye});`}"></div> <div id="g-ai0-1" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:3.216%;margin-top:-7.7px;left:0.5952%;width:99px;"><p class="g-pstyle0 svelte-v5mpys">Shake intensity</p></div> <div id="g-ai0-2" class="g-legend g-aiAbs g-aiPointText svelte-v5mpys" style="top:9.8251%;margin-top:-7.7px;left:4.9821%;width:47px;"><p class="g-pstyle0 svelte-v5mpys">Light</p></div> <div id="g-ai0-3" class="g-legend g-aiAbs g-aiPointText svelte-v5mpys" style="top:15.7733%;margin-top:-7.7px;left:4.9821%;width:69px;"><p class="g-pstyle0 svelte-v5mpys">Moderate</p></div> <div id="g-ai0-4" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:16.4343%;margin-top:-7.7px;left:79.0675%;width:82px;"><p class="g-pstyle0 svelte-v5mpys">Cap-Haitien</p></div> <div id="g-ai0-5" class="g-legend g-aiAbs g-aiPointText svelte-v5mpys" style="top:21.7216%;margin-top:-7.7px;left:4.9821%;width:55px;"><p class="g-pstyle0 svelte-v5mpys">Strong</p></div> <div id="g-ai0-6" class="g-legend g-aiAbs g-aiPointText svelte-v5mpys" style="top:28.0002%;margin-top:-7.7px;left:4.9821%;width:78px;"><p class="g-pstyle0 svelte-v5mpys">Very strong</p></div> <div id="g-ai0-7" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:28.9916%;margin-top:-7.7px;left:62.2348%;width:68px;"><p class="g-pstyle0 svelte-v5mpys">Gonaïves</p></div> <div id="g-ai0-8" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:39.9449%;margin-top:-14.9px;left:28.714%;margin-left:-36.5px;width:73px;"><p class="g-pstyle1 svelte-v5mpys">Caribbean</p> <p class="g-pstyle1 svelte-v5mpys">Sea</p></div> <div id="g-ai0-9" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:42.6579%;margin-top:-10.1px;left:68.5061%;width:77px;"><p class="g-pstyle2 svelte-v5mpys">HAITI</p></div> <div id="g-ai0-10" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:59.0632%;margin-top:-7.7px;left:11.2526%;width:63px;"><p class="g-pstyle0 svelte-v5mpys">Jeremie</p></div> <div id="g-ai0-11" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:61.1155%;margin-top:-8.9px;left:70.5455%;width:106px;"><p class="g-pstyle3 svelte-v5mpys">Port-au-Prince</p></div> <div id="g-ai0-12" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:62.1069%;margin-top:-8.9px;left:32.6015%;width:77px;"><p class="g-pstyle3 svelte-v5mpys">Epicenter</p></div> <div id="g-ai0-13" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:78.8906%;margin-top:-7.7px;left:63.9138%;width:58px;"><p class="g-pstyle0 svelte-v5mpys">Jacmel</p></div> <div id="g-ai0-14" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:80.2124%;margin-top:-7.7px;left:22.5649%;width:71px;"><p class="g-pstyle0 svelte-v5mpys">Les Cayes</p></div> <div id="g-ai0-15" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:87.8129%;margin-top:-7.7px;left:0.6179%;width:49px;"><p class="g-pstyle0 svelte-v5mpys">50 mi</p></div> <div id="g-ai0-16" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:91.0202%;margin-top:-11.4px;right:10.4418%;width:70px;"><p class="g-pstyle4 svelte-v5mpys">Dominican</p> <p class="g-pstyle4 svelte-v5mpys">Republic</p></div> <div id="g-ai0-17" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:93.7611%;margin-top:-7.7px;left:0.6179%;width:52px;"><p class="g-pstyle0 svelte-v5mpys">50 km</p></div>`,A(e,"id","g-_ai-chart-xs"),A(e,"class","g-artboard svelte-v5mpys"),A(e,"style","")},m(s,t){u(s,e,t)},d(s){s&&y(e)}}}function J(l){let e;return{c(){e=b("div"),e.innerHTML=`<div style="padding: 0 0 82.703% 0;"></div> <div id="g-_ai-chart-sm-img" class="g-aiImg svelte-v5mpys" alt="" style="${`background-image: url(${fe});`}"></div> <div id="g-ai1-1" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:3.8773%;margin-top:-9.4px;left:0.3278%;width:111px;"><p class="g-pstyle0 svelte-v5mpys">Shake intensity</p></div> <div id="g-ai1-2" class="g-legend g-aiAbs g-aiPointText svelte-v5mpys" style="top:9.0933%;margin-top:-9.4px;left:3.0258%;width:52px;"><p class="g-pstyle0 svelte-v5mpys">Light</p></div> <div id="g-ai1-3" class="g-legend g-aiAbs g-aiPointText svelte-v5mpys" style="top:13.5979%;margin-top:-9.4px;left:3.0259%;width:77px;"><p class="g-pstyle0 svelte-v5mpys">Moderate</p></div> <div id="g-ai1-4" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:16.6801%;margin-top:-9.4px;left:70.3255%;width:92px;"><p class="g-pstyle0 svelte-v5mpys">Cap-Haitien</p></div> <div id="g-ai1-5" class="g-legend g-aiAbs g-aiPointText svelte-v5mpys" style="top:18.3397%;margin-top:-9.4px;left:3.0258%;width:61px;"><p class="g-pstyle0 svelte-v5mpys">Strong</p></div> <div id="g-ai1-6" class="g-legend g-aiAbs g-aiPointText svelte-v5mpys" style="top:22.6073%;margin-top:-9.4px;left:3.0258%;width:88px;"><p class="g-pstyle0 svelte-v5mpys">Very strong</p></div> <div id="g-ai1-7" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:28.5344%;margin-top:-9.4px;left:55.9181%;width:76px;"><p class="g-pstyle0 svelte-v5mpys">Gonaïves</p></div> <div id="g-ai1-8" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:38.8091%;margin-top:-17.7px;left:27.2818%;margin-left:-41px;width:82px;"><p class="g-pstyle1 svelte-v5mpys">Caribbean</p> <p class="g-pstyle1 svelte-v5mpys">Sea</p></div> <div id="g-ai1-9" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:39.9724%;margin-top:-8.6px;left:61.2858%;width:67px;"><p class="g-pstyle2 svelte-v5mpys">HAITI</p></div> <div id="g-ai1-10" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:56.985%;margin-top:-9.4px;left:12.2815%;width:69px;"><p class="g-pstyle0 svelte-v5mpys">Jeremie</p></div> <div id="g-ai1-11" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:59.1569%;margin-top:-9.5px;left:63.0314%;width:112px;"><p class="g-pstyle3 svelte-v5mpys">Port-au-Prince</p></div> <div id="g-ai1-12" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:60.1053%;margin-top:-9.5px;left:30.5543%;width:81px;"><p class="g-pstyle3 svelte-v5mpys">Epicenter</p></div> <div id="g-ai1-13" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:62.7194%;margin-top:-16.5px;left:91.2282%;margin-left:-57px;width:114px;"><p class="g-pstyle4 svelte-v5mpys">Dominican</p> <p class="g-pstyle4 svelte-v5mpys">Republic</p></div> <div id="g-ai1-14" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:75.4778%;margin-top:-9.4px;left:57.3552%;width:64px;"><p class="g-pstyle0 svelte-v5mpys">Jacmel</p></div> <div id="g-ai1-15" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:76.6632%;margin-top:-9.4px;left:21.9639%;width:79px;"><p class="g-pstyle0 svelte-v5mpys">Les Cayes</p></div> <div id="g-ai1-16" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:85.5251%;margin-top:-7.7px;left:0.1344%;width:49px;"><p class="g-pstyle5 svelte-v5mpys">50 mi</p></div> <div id="g-ai1-17" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:90.0297%;margin-top:-7.7px;left:0.1344%;width:52px;"><p class="g-pstyle5 svelte-v5mpys">50 km</p></div>`,A(e,"id","g-_ai-chart-sm"),A(e,"class","g-artboard svelte-v5mpys"),A(e,"style","")},m(s,t){u(s,e,t)},d(s){s&&y(e)}}}function W(l){let e;return{c(){e=b("div"),e.innerHTML=`<div style="padding: 0 0 79.6009% 0;"></div> <div id="g-_ai-chart-md-img" class="g-aiImg svelte-v5mpys" alt="" style="${`background-image: url(${ke});`}"></div> <div id="g-ai2-1" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:2.3515%;margin-top:-9.4px;left:0.3608%;width:111px;"><p class="g-pstyle0 svelte-v5mpys">Shake intensity</p></div> <div id="g-ai2-2" class="g-legend g-aiAbs g-aiPointText svelte-v5mpys" style="top:7.6811%;margin-top:-9.4px;left:2.6603%;width:52px;"><p class="g-pstyle0 svelte-v5mpys">Light</p></div> <div id="g-ai2-3" class="g-legend g-aiAbs g-aiPointText svelte-v5mpys" style="top:12.2494%;margin-top:-9.4px;left:2.6604%;width:77px;"><p class="g-pstyle0 svelte-v5mpys">Moderate</p></div> <div id="g-ai2-4" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:15.4852%;margin-top:-9.4px;left:70.3606%;width:92px;"><p class="g-pstyle0 svelte-v5mpys">Cap-Haitien</p></div> <div id="g-ai2-5" class="g-legend g-aiAbs g-aiPointText svelte-v5mpys" style="top:17.1983%;margin-top:-9.4px;left:2.6603%;width:61px;"><p class="g-pstyle0 svelte-v5mpys">Strong</p></div> <div id="g-ai2-6" class="g-legend g-aiAbs g-aiPointText svelte-v5mpys" style="top:21.7666%;margin-top:-9.4px;left:2.6603%;width:88px;"><p class="g-pstyle0 svelte-v5mpys">Very strong</p></div> <div id="g-ai2-7" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:27.6672%;margin-top:-9.4px;left:55.993%;width:76px;"><p class="g-pstyle0 svelte-v5mpys">Gonaïves</p></div> <div id="g-ai2-8" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:38.0099%;margin-top:-17.7px;left:27.2388%;margin-left:-41px;width:82px;"><p class="g-pstyle1 svelte-v5mpys">Caribbean</p> <p class="g-pstyle1 svelte-v5mpys">Sea</p></div> <div id="g-ai2-9" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:42.7626%;margin-top:-10.7px;left:62.8914%;width:80px;"><p class="g-pstyle2 svelte-v5mpys">HAITI</p></div> <div id="g-ai2-10" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:50.0029%;margin-top:-17.7px;left:92.295%;margin-left:-60.5px;width:121px;"><p class="g-pstyle3 svelte-v5mpys">Dominican</p> <p class="g-pstyle3 svelte-v5mpys">Republic</p></div> <div id="g-ai2-11" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:57.3608%;margin-top:-9.4px;left:12.2815%;width:69px;"><p class="g-pstyle0 svelte-v5mpys">Jeremie</p></div> <div id="g-ai2-12" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:60.2742%;margin-top:-10.7px;left:30.6995%;width:89px;"><p class="g-pstyle4 svelte-v5mpys">Epicenter</p></div> <div id="g-ai2-13" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:62.5583%;margin-top:-10.7px;left:66.3403%;width:125px;"><p class="g-pstyle4 svelte-v5mpys">Port-au-Prince</p></div> <div id="g-ai2-14" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:75.6338%;margin-top:-9.4px;left:57.8174%;width:64px;"><p class="g-pstyle0 svelte-v5mpys">Jacmel</p></div> <div id="g-ai2-15" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:77.3469%;margin-top:-9.4px;left:22.5239%;width:79px;"><p class="g-pstyle0 svelte-v5mpys">Les Cayes</p></div> <div id="g-ai2-16" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:86.936%;margin-top:-7.7px;left:0.1678%;width:49px;"><p class="g-pstyle5 svelte-v5mpys">50 mi</p></div> <div id="g-ai2-17" class="g-map-labels g-aiAbs g-aiPointText svelte-v5mpys" style="top:91.5043%;margin-top:-7.7px;left:0.1678%;width:52px;"><p class="g-pstyle5 svelte-v5mpys">50 km</p></div>`,A(e,"id","g-_ai-chart-md"),A(e,"class","g-artboard svelte-v5mpys"),A(e,"style","")},m(s,t){u(s,e,t)},d(s){s&&y(e)}}}function be(l){let e,s,t,p,i=l[0]&&l[0]>=0&&l[0]<510&&X(),n=l[0]&&l[0]>=510&&l[0]<660&&J(),r=l[0]&&l[0]>=660&&W();return{c(){e=b("div"),i&&i.c(),s=k(),n&&n.c(),t=k(),r&&r.c(),A(e,"id","g-_ai-chart-box"),A(e,"class","svelte-v5mpys"),ne(()=>l[2].call(e))},m(g,f){u(g,e,f),i&&i.m(e,null),V(e,s),n&&n.m(e,null),V(e,t),r&&r.m(e,null),p=oe(e,l[2].bind(e))},p(g,[f]){g[0]&&g[0]>=0&&g[0]<510?i||(i=X(),i.c(),i.m(e,s)):i&&(i.d(1),i=null),g[0]&&g[0]>=510&&g[0]<660?n||(n=J(),n.c(),n.m(e,t)):n&&(n.d(1),n=null),g[0]&&g[0]>=660?r||(r=W(),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i:C,o:C,d(g){g&&y(e),i&&i.d(),n&&n.d(),r&&r.d(),p()}}}function we(l,e,s){let{basePath:t="./"}=e,p=null;function i(){p=this.clientWidth,s(0,p)}return l.$$set=n=>{"basePath"in n&&s(1,t=n.basePath)},[p,t,i]}class Z extends F{constructor(e){super(),ee(this,e,we,be,te,{basePath:1})}}Z.__docgen={version:3,name:"ai-chart.svelte",data:[{keywords:[],visibility:"public",description:"svelte-ignore unused-export-let",name:"basePath",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"./"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ie="data:image/png;base64,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";function xe(l){let e;return{c(){e=b("div"),e.innerHTML=`<img src="${ie}" alt="placeholder" class="svelte-16z9wsi"/>`,A(e,"class","demo-graphic svelte-16z9wsi")},m(s,t){u(s,e,t)},p:C,d(s){s&&y(e)}}}function $e(l){let e,s;const t=[l[1]];let p={$$slots:{default:[xe]},$$scope:{ctx:l}};for(let i=0;i<t.length;i+=1)p=$(p,t[i]);return e=new G({props:p}),{c(){c(e.$$.fragment)},m(i,n){m(e,i,n),s=!0},p(i,n){const r=n&2?se(t,[ae(i[1])]):{};n&4&&(r.$$scope={dirty:n,ctx:i}),e.$set(r)},i(i){s||(d(e.$$.fragment,i),s=!0)},o(i){v(e.$$.fragment,i),s=!1},d(i){h(e,i)}}}function Ce(l){let e,s;return e=new Z({}),{c(){c(e.$$.fragment)},m(t,p){m(e,t,p),s=!0},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){h(e,t)}}}function Ge(l){let e,s;return e=new G({props:{width:"normal",title:"Earthquake in Haiti",description:"The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021.",notes:"Note: A shakemap represents the ground shaking produced by an earthquake.",$$slots:{default:[Ce]},$$scope:{ctx:l}}}),{c(){c(e.$$.fragment)},m(t,p){m(e,t,p),s=!0},p(t,p){const i={};p&4&&(i.$$scope={dirty:p,ctx:t}),e.$set(i)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){h(e,t)}}}function Te(l){let e;return{c(){e=b("div"),e.innerHTML=`<img src="${ie}" alt="placeholder" class="svelte-16z9wsi"/>`,A(e,"class","demo-graphic svelte-16z9wsi")},m(s,t){u(s,e,t)},p:C,d(s){s&&y(e)}}}function Be(l){let e;return{c(){e=b("div"),e.innerHTML="<h5>My smaller title</h5>",A(e,"slot","title")},m(s,t){u(s,e,t)},p:C,d(s){s&&y(e)}}}function _e(l){let e;return{c(){e=b("aside"),e.innerHTML="<p><strong>Note:</strong> Data current as of Aug. 2, 2022.</p>",A(e,"slot","notes")},m(s,t){u(s,e,t)},p:C,d(s){s&&y(e)}}}function Ie(l){let e,s;return e=new G({props:{width:"normal",$$slots:{notes:[_e],title:[Be],default:[Te]},$$scope:{ctx:l}}}),{c(){c(e.$$.fragment)},m(t,p){m(e,t,p),s=!0},p(t,p){const i={};p&4&&(i.$$scope={dirty:p,ctx:t}),e.$set(i)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){h(e,t)}}}function Pe(l){let e,s;return e=new Z({}),{c(){c(e.$$.fragment)},m(t,p){m(e,t,p),s=!0},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){h(e,t)}}}function Ze(l){let e,s;return e=new G({props:{width:"normal",title:"Earthquake in Haiti",description:"The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021.",notes:"Note: A shakemap represents the ground shaking produced by an earthquake.",$$slots:{default:[Pe]},$$scope:{ctx:l}}}),{c(){c(e.$$.fragment)},m(t,p){m(e,t,p),s=!0},p(t,p){const i={};p&4&&(i.$$scope={dirty:p,ctx:t}),e.$set(i)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){h(e,t)}}}function Qe(l){let e,s;return e=new Z({}),{c(){c(e.$$.fragment)},m(t,p){m(e,t,p),s=!0},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){h(e,t)}}}function De(l){let e,s;return e=new G({props:{width:"normal",title:"Earthquake in Haiti",description:"The 7.2-magnitude earthquake struck at 8:29 a.m. EST, Aug. 14, 2021.",notes:"Note: A shakemap represents the ground shaking produced by an earthquake.",ariaDescription:"A map showing the shake intensity produced by the earthquake.",$$slots:{default:[Qe]},$$scope:{ctx:l}}}),{c(){c(e.$$.fragment)},m(t,p){m(e,t,p),s=!0},p(t,p){const i={};p&4&&(i.$$scope={dirty:p,ctx:t}),e.$set(i)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){h(e,t)}}}function Ye(l){let e,s,t,p,i,n,r,g,f,Q,w,D,x,I;const B=[{title:"Components/GraphicBlock"},{component:G},l[0]];let Y={};for(let a=0;a<B.length;a+=1)Y=$(Y,B[a]);e=new ge({props:Y}),t=new ce({props:{$$slots:{default:[$e,({args:a})=>({1:a}),({args:a})=>a?2:0]},$$scope:{ctx:l}}}),i=new _({props:{name:"Default",args:{width:"normal",title:"Bacon ipsum dolor amet t-bone",description:"Pork loin t-bone jowl prosciutto, short loin flank kevin tri-tip cupim pig pork. Meatloaf tri-tip frankfurter short ribs, cupim brisket bresaola chislic tail jerky burgdoggen pancetta.",notes:`Note: Data current as of Aug. 2, 2022.

Source: [Google research](https://google.com)`}}});const K=[{name:"🚀 QUICKIT"},P(ve)];let q={$$slots:{default:[Ge]},$$scope:{ctx:l}};for(let a=0;a<K.length;a+=1)q=$(q,K[a]);r=new _({props:q});const H=[{name:"Custom text"},P(he)];let M={$$slots:{default:[Ie]},$$scope:{ctx:l}};for(let a=0;a<H.length;a+=1)M=$(M,H[a]);f=new _({props:M});const N=[{name:"Ai2svelte"},P(Ae)];let S={$$slots:{default:[Ze]},$$scope:{ctx:l}};for(let a=0;a<N.length;a+=1)S=$(S,N[a]);w=new _({props:S});const O=[{name:"ARIA"},P(ue)];let E={$$slots:{default:[De]},$$scope:{ctx:l}};for(let a=0;a<O.length;a+=1)E=$(E,O[a]);return x=new _({props:E}),{c(){c(e.$$.fragment),s=k(),c(t.$$.fragment),p=k(),c(i.$$.fragment),n=k(),c(r.$$.fragment),g=k(),c(f.$$.fragment),Q=k(),c(w.$$.fragment),D=k(),c(x.$$.fragment)},m(a,o){m(e,a,o),u(a,s,o),m(t,a,o),u(a,p,o),m(i,a,o),u(a,n,o),m(r,a,o),u(a,g,o),m(f,a,o),u(a,Q,o),m(w,a,o),u(a,D,o),m(x,a,o),I=!0},p(a,[o]){const pe=o&1?se(B,[B[0],B[1],ae(a[0])]):{};e.$set(pe);const R={};o&6&&(R.$$scope={dirty:o,ctx:a}),t.$set(R);const U={};o&4&&(U.$$scope={dirty:o,ctx:a}),r.$set(U);const L={};o&4&&(L.$$scope={dirty:o,ctx:a}),f.$set(L);const z={};o&4&&(z.$$scope={dirty:o,ctx:a}),w.$set(z);const j={};o&4&&(j.$$scope={dirty:o,ctx:a}),x.$set(j)},i(a){I||(d(e.$$.fragment,a),d(t.$$.fragment,a),d(i.$$.fragment,a),d(r.$$.fragment,a),d(f.$$.fragment,a),d(w.$$.fragment,a),d(x.$$.fragment,a),I=!0)},o(a){v(e.$$.fragment,a),v(t.$$.fragment,a),v(i.$$.fragment,a),v(r.$$.fragment,a),v(f.$$.fragment,a),v(w.$$.fragment,a),v(x.$$.fragment,a),I=!1},d(a){a&&(y(s),y(p),y(n),y(g),y(Q),y(D)),h(e,a),h(t,a),h(i,a),h(r,a),h(f,a),h(w,a),h(x,a)}}}function qe(l){return[{...me(de),argTypes:{width:{control:"select",options:["normal","wide","wider","widest","fluid"]},textWidth:{control:"select",options:["normal","wide","wider","widest","fluid"]}}}]}class le extends F{constructor(e){super(),ee(this,e,qe,Ye,te,{})}}le.__docgen={version:3,name:"GraphicBlock.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const T=re(le,{meta:{title:"Components/GraphicBlock"},stories:{"tpl:default":{storyId:"components-graphicblock--default",name:"default",template:!0,source:`<GraphicBlock {...args}>
  <div class="demo-graphic">
    <img src="{PlaceholderImg}" alt="placeholder" />
  </div>
</GraphicBlock>`,hasArgs:!0},Default:{storyId:"components-graphicblock--default",name:"Default",template:!1,source:"",hasArgs:!1},QUICKIT:{storyId:"components-graphicblock--quickit",name:"🚀 QUICKIT",template:!1,source:`<GraphicBlock
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
</GraphicBlock>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","quickitDocs","customTextDocs","ai2svelteDocs","ariaDocs","GraphicBlock","AiMap","withComponentDocs","withStoryDocs","PlaceholderImg"]}),Ue=T.meta,Le=["Default","QUICKIT","CustomText","Ai2svelte","ARIA"],ze=T.stories.Default,je=T.stories.QUICKIT,Ve=T.stories.CustomText,Xe=T.stories.Ai2svelte,Je=T.stories.ARIA;export{Je as ARIA,Xe as Ai2svelte,Ve as CustomText,ze as Default,je as QUICKIT,Le as __namedExportsOrder,Ue as default};
//# sourceMappingURL=GraphicBlock.stories-076f992d.js.map
