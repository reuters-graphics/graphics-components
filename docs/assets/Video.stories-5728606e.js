import{S as U,i as z,s as E,C as v,g as h,z as y,m as c,d as g,t as u,h as m,f as w,j as f}from"./index-85f88930.js";import{g as K,a as F}from"./spread-8a54911c.js";import{p as J,M as N,T as Q,S as b}from"./collect-stories-fa95313f.js";import{V as k}from"./Video-ccd4dd0f.js";import{w as X,b as P}from"./withParams-47e2ab71.js";import"./fa-95fa679c.js";import"./index.es-ff8a88a9.js";import"./GraphicBlock-44d96d12.js";import"./Block-d1b8152c.js";import"./PaddingReset-c34038dd.js";import"./Markdown-e31fd5d7.js";const Y=`General-purpose video component. Can play on load or when the video comes into view and has play/pause controls. Supports videos with or without audio.

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
`,j=`\`showControls\`

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
`,W=""+new URL("silent-video-5e925669.mp4",import.meta.url).href,oo=""+new URL("sound-video-50224f39.mp4",import.meta.url).href;function eo(V){let t,i;const s=[V[0]];let a={};for(let e=0;e<s.length;e+=1)a=v(a,s[e]);return t=new k({props:a}),{c(){h(t.$$.fragment)},m(e,l){c(t,e,l),i=!0},p(e,l){const r=l&1?K(s,[F(e[0])]):{};t.$set(r)},i(e){i||(u(t.$$.fragment,e),i=!0)},o(e){m(t.$$.fragment,e),i=!1},d(e){f(t,e)}}}function to(V){let t,i,s,a,e,l,r,C,p,D,d,_;const R=[{title:"Components/Video"},{component:k},X(Y)];let S={};for(let o=0;o<R.length;o+=1)S=v(S,R[o]);t=new N({props:S}),s=new Q({props:{$$slots:{default:[eo,({args:o})=>({0:o}),({args:o})=>o?1:0]},$$scope:{ctx:V}}}),e=new b({props:{name:"Default",args:{ariaDescription:"Compulsory description of your video for screen readers.",src:W,width:"wide",notes:"Optional caption for your video."}}});const L=[{name:"Playing and looping"},{args:{ariaDescription:"Compulsory description of your video for screen readers.",src:W,width:"normal",loopVideo:!0,notes:"World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",playVideoThreshold:.9}},P(Z)];let T={};for(let o=0;o<L.length;o+=1)T=v(T,L[o]);r=new b({props:T});const O=[{name:"Controls"},{args:{ariaDescription:"Compulsory description of your video for screen readers.",src:W,width:"normal",notes:"World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",playVideoThreshold:.9,controlsColour:"white",controlsOpacity:1,controlsPosition:"bottom right",separateReplayIcon:!0,loopVideo:!1,hoverToSeeControls:!0}},P(j)];let I={};for(let o=0;o<O.length;o+=1)I=v(I,O[o]);p=new b({props:I});const x=[{name:"Videos with sound"},{args:{ariaDescription:"Compulsory description of your video for screen readers.",src:oo,width:"normal",notes:"World's longest glass bridge opens to public in Vietnam. (c) 2022 Thomson Reuters",playVideoThreshold:.9,showControls:!0,loopVideo:!1,muteVideo:!1,playVideoWhenInView:!0,allowSoundToAutoplay:!0}},P(j)];let A={};for(let o=0;o<x.length;o+=1)A=v(A,x[o]);return d=new b({props:A}),{c(){h(t.$$.fragment),i=y(),h(s.$$.fragment),a=y(),h(e.$$.fragment),l=y(),h(r.$$.fragment),C=y(),h(p.$$.fragment),D=y(),h(d.$$.fragment)},m(o,n){c(t,o,n),g(o,i,n),c(s,o,n),g(o,a,n),c(e,o,n),g(o,l,n),c(r,o,n),g(o,C,n),c(p,o,n),g(o,D,n),c(d,o,n),_=!0},p(o,[n]){const B={};t.$set(B);const M={};n&3&&(M.$$scope={dirty:n,ctx:o}),s.$set(M);const q={};r.$set(q);const G={};p.$set(G);const H={};d.$set(H)},i(o){_||(u(t.$$.fragment,o),u(s.$$.fragment,o),u(e.$$.fragment,o),u(r.$$.fragment,o),u(p.$$.fragment,o),u(d.$$.fragment,o),_=!0)},o(o){m(t.$$.fragment,o),m(s.$$.fragment,o),m(e.$$.fragment,o),m(r.$$.fragment,o),m(p.$$.fragment,o),m(d.$$.fragment,o),_=!1},d(o){o&&(w(i),w(a),w(l),w(C),w(D)),f(t,o),f(s,o),f(e,o),f(r,o),f(p,o),f(d,o)}}}class no extends U{constructor(t){super(),z(this,t,null,to,E,{})}}const $=J(no,{meta:{title:"Components/Video"},stories:{"tpl:default":{name:"default",template:!0,source:"<Video {...args} />",hasArgs:!0},Default:{name:"Default",template:!1,source:"",hasArgs:!1},PlayingAndLooping:{name:"Playing and looping",template:!1,source:"",hasArgs:!1},Controls:{name:"Controls",template:!1,source:"",hasArgs:!1},VideosWithSound:{name:"Videos with sound",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","playAndLoopDocs","controlsDocs","SilentVideo","SoundVideo","Video","withComponentDocs","withStoryDocs"]}),yo=$.meta,go=["Default","PlayingAndLooping","Controls","VideosWithSound"],wo=$.stories.Default,vo=$.stories.PlayingAndLooping,$o=$.stories.Controls,Vo=$.stories.VideosWithSound;export{$o as Controls,wo as Default,vo as PlayingAndLooping,Vo as VideosWithSound,go as __namedExportsOrder,yo as default};
//# sourceMappingURL=Video.stories-5728606e.js.map
