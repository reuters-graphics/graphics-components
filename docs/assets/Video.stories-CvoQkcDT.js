import{S as U,i as E,s as K,l as v,c as h,o as y,m as c,h as g,t as u,a as m,k as w,d as f}from"./index-C9aKRT5A.js";import{g as N,a as X}from"./spread-CgU5AtxT.js";import{p as Y,w as z,M as F,T as J,S as b,a as P}from"./collect-stories-ceFdpR5E.js";import{V as M}from"./Video-BRhjhhdy.js";import"./fa-DMEUqF6U.js";import"./index.es-C7Z4ZQcn.js";import"./GraphicBlock-Dy6mUqc4.js";import"./Block-C7biTRWl.js";import"./PaddingReset-CiOBBFtT.js";import"./Markdown-BNYiGaXJ.js";const Q=`General-purpose video component. Can play on load or when the video comes into view and has play/pause controls. Supports videos with or without audio.

\`\`\`svelte
<script>
  import { Video } from '@reuters-graphics/graphics-components';
  import { assets } from '$app/paths'; // If using local video in the Graphics Kit
<\/script>

<Video
  ariaDescription="{'Compulsory description of your video for screen readers.'}"
  src="{\`\${assets}/videos/myVideo.mp4\`}"
  width="{'wide'}"
  caption="{'Optional caption for your video.'}"
/>
\`\`\`
`,Z=`\`playVideoWhenInView\`, \`playVideoThreshold\`

- By default, the video will **start playing when 50% of the video element's height is visible on the page**.
  To control the threshold of visibility at which the video starts playing, add the prop \`playVideoThreshold\` and set it to a value between 0 and 1,
  where 0 means that the video will start playing as soon as its top enters the viewport, while 1 means it will start when the whole video is in the viewport.

- If you don't want the video to play when you scroll to it, but **on page load**, add the prop \`playVideoWhenInView={false}\`. The default of the prop is \`true\`,
  which corresponds to the behaviour described above.

\`loopVideo\`

- By default, the video will **loop**. If you don't want that, add the prop \`loopVideo={false}\`.

Here is an example of what the same video would look like with a visibility threshold of 0.9 and not looping. Scroll down slowly to observe the behaviour.

\`\`\`svelte
<script>
  import { Video } from '@reuters-graphics/graphics-components';
<\/script>

<Video
  ariaDescription="{'Compulsory description of your video for screen readers.'}"
  src="{'path-to-video-or-external-url'}"
  width="{'normal'}"
  loopVideo="{false}"
  playVideoThreshold="{0.9}"
/>
\`\`\`
`,B=`\`showControls\`

- By default, the video has a play/pause button, which corresponds to
  \`showControls={true}\`. If you don't want these, just set \`showControls={false}\`.
  When you do that, the icons themselves will disappear but the functionality of playing and pausing remains and can be done by clicking on the video itself.
  If you don't want to enable any play/pause functionality, add \`possibleToPlayPause={false}\`.
- If you want to show the controls only when the video is hovered, set \`hoverToSeeControls={true}\`.

\`controlsColour\`, \`controlsOpacity\`, \`controlsPosition\`, \`separateReplayIcon\`

If you do want to leave the controls, you have a couple of options to style them:

- Set \`controlsColour\` to a colour of your choosing.
- Set \`controlsOpacity\` to a value between \`0\` and \`1\` to control the opacity. The default is \`0.5\`.
- Change the placement of the controls to one of: \`top right\`, \`top left\`, \`bottom right\`, \`bottom left\`, \`center\` by setting \`controlsPosition\`.
- Change the play button to a replay button at the end of the video with the option \`separateReplayIcon={true}\`.

Here is an example with bottom right corner white opaque controls, with a replay button, where you have to hover on the video to see the controls.

\`\`\`svelte
<script>
  import { Video } from '@reuters-graphics/graphics-components';
<\/script>

<Video
  ariaDescription="{'Compulsory description of your video for screen readers.'}"
  src="{'path-to-video-or-external-url'}"
  width="{'normal'}"
  caption="{'Optional caption for your video.'}"
  playVideoThreshold="{0.1}"
  controlsColour="{'white'}"
  controlsOpacity="{1}"
  controlsPosition="{'bottom right'}"
  separateReplayIcon="{true}"
  loopVideo="{false}"
  hoverToSeeControls="{true}"
/>
\`\`\`
`,W=""+new URL("silent-video-BNhXlshx.mp4",import.meta.url).href,oo=""+new URL("sound-video-CuYbTc3V.mp4",import.meta.url).href;function eo(V){let t,i;const s=[V[0]];let a={};for(let e=0;e<s.length;e+=1)a=v(a,s[e]);return t=new M({props:a}),{c(){h(t.$$.fragment)},m(e,l){c(t,e,l),i=!0},p(e,l){const r=l&1?N(s,[X(e[0])]):{};t.$set(r)},i(e){i||(u(t.$$.fragment,e),i=!0)},o(e){m(t.$$.fragment,e),i=!1},d(e){f(t,e)}}}function to(V){let t,i,s,a,e,l,r,C,p,D,d,_;const R=[{title:"Components/Video"},{component:M},z(Q)];let S={};for(let o=0;o<R.length;o+=1)S=v(S,R[o]);t=new F({props:S}),s=new J({props:{$$slots:{default:[eo,({args:o})=>({0:o}),({args:o})=>o?1:0]},$$scope:{ctx:V}}}),e=new b({props:{name:"Default",args:{ariaDescription:"Compulsory description of your video for screen readers.",src:W,width:"wide",notes:"Optional caption for your video."}}});const x=[{name:"Playing and looping"},{args:{ariaDescription:"Compulsory description of your video for screen readers.",src:W,width:"normal",loopVideo:!0,notes:"World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",playVideoThreshold:.9}},P(Z)];let T={};for(let o=0;o<x.length;o+=1)T=v(T,x[o]);r=new b({props:T});const L=[{name:"Controls"},{args:{ariaDescription:"Compulsory description of your video for screen readers.",src:W,width:"normal",notes:"World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",playVideoThreshold:.9,controlsColour:"white",controlsOpacity:1,controlsPosition:"bottom right",separateReplayIcon:!0,loopVideo:!1,hoverToSeeControls:!0}},P(B)];let I={};for(let o=0;o<L.length;o+=1)I=v(I,L[o]);p=new b({props:I});const O=[{name:"Videos with sound"},{args:{ariaDescription:"Compulsory description of your video for screen readers.",src:oo,width:"normal",notes:"World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",playVideoThreshold:.9,showControls:!0,loopVideo:!1,muteVideo:!1,playVideoWhenInView:!0,allowSoundToAutoplay:!0}},P(B)];let A={};for(let o=0;o<O.length;o+=1)A=v(A,O[o]);return d=new b({props:A}),{c(){h(t.$$.fragment),i=y(),h(s.$$.fragment),a=y(),h(e.$$.fragment),l=y(),h(r.$$.fragment),C=y(),h(p.$$.fragment),D=y(),h(d.$$.fragment)},m(o,n){c(t,o,n),g(o,i,n),c(s,o,n),g(o,a,n),c(e,o,n),g(o,l,n),c(r,o,n),g(o,C,n),c(p,o,n),g(o,D,n),c(d,o,n),_=!0},p(o,[n]){const j={};t.$set(j);const k={};n&3&&(k.$$scope={dirty:n,ctx:o}),s.$set(k);const q={};r.$set(q);const G={};p.$set(G);const H={};d.$set(H)},i(o){_||(u(t.$$.fragment,o),u(s.$$.fragment,o),u(e.$$.fragment,o),u(r.$$.fragment,o),u(p.$$.fragment,o),u(d.$$.fragment,o),_=!0)},o(o){m(t.$$.fragment,o),m(s.$$.fragment,o),m(e.$$.fragment,o),m(r.$$.fragment,o),m(p.$$.fragment,o),m(d.$$.fragment,o),_=!1},d(o){o&&(w(i),w(a),w(l),w(C),w(D)),f(t,o),f(s,o),f(e,o),f(r,o),f(p,o),f(d,o)}}}class no extends U{constructor(t){super(),E(this,t,null,to,K,{})}}const $=Y(no,{meta:{title:"Components/Video"},stories:{"tpl:default":{name:"default",template:!0,source:"<Video {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},PlayingAndLooping:{name:"Playing and looping",template:!1,source:"",hasArgs:!1},Controls:{name:"Controls",template:!1,source:"",hasArgs:!1},VideosWithSound:{name:"Videos with sound",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","playAndLoopDocs","controlsDocs","SilentVideo","SoundVideo","Video","withComponentDocs","withStoryDocs"]}),fo=$.meta,yo=["Default","PlayingAndLooping","Controls","VideosWithSound"],go=$.stories.Default,wo=$.stories.PlayingAndLooping,vo=$.stories.Controls,$o=$.stories.VideosWithSound;export{vo as Controls,go as Default,wo as PlayingAndLooping,$o as VideosWithSound,yo as __namedExportsOrder,fo as default};
