<script>
  let width = $state(null);

  // @ts-ignore raw
  import chartXs from './quake-map-top-xs.jpeg';
  // @ts-ignore raw
  import chartSm from './quake-map-top-sm.jpeg';
  // @ts-ignore raw
  import chartMd from '././quake-map-top-md.jpeg';
  // @ts-ignore raw
  import chartLg from '././quake-map-top-lg.jpeg';
  // @ts-ignore raw
  import chartXl from '././quake-map-top-xl.jpeg';
</script>

<div id="g-quake-map-top-box" bind:clientWidth="{width}">
  <!-- Artboard: xs -->
  {#if width && width >= 0 && width < 510}
    <div id="g-quake-map-top-xs" class="g-artboard" style="">
      <div style="padding: 0 0 117.5758% 0;"></div>
      <div
        id="g-quake-map-top-xs-img"
        class="g-aiImg"
        style="{`background-image: url(${chartXs});`}"
      ></div>
      <div
        id="g-ai0-1"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:-1.3529%;margin-top:-6.8px;left:33.0848%;width:46px;"
      >
        <p class="g-pstyle0">Kabul</p>
      </div>
      <div
        id="g-ai0-2"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:4.3062%;margin-top:-7.7px;left:4.0902%;width:65px;"
      >
        <p class="g-pstyle1">Shaking</p>
      </div>
      <div
        id="g-ai0-3"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:8.1722%;margin-top:-7.7px;left:4.0902%;width:78px;"
      >
        <p class="g-pstyle2">Very strong</p>
      </div>
      <div
        id="g-ai0-4"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:19.5124%;margin-top:-7.7px;left:4.0902%;width:49px;"
      >
        <p class="g-pstyle2">Weak</p>
      </div>
      <div
        id="g-ai0-5"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:22.4511%;margin-top:-5.1px;left:45.2353%;margin-left:-74px;width:148px;"
      >
        <p class="g-pstyle3">AFGHANISTAN</p>
      </div>
      <div
        id="g-ai0-6"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:29.7371%;margin-top:-8.4px;left:34.8676%;width:56px;"
      >
        <p class="g-pstyle4">Gardez</p>
      </div>
      <div
        id="g-ai0-7"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:39.2732%;margin-top:-8.4px;left:65.8508%;width:50px;"
      >
        <p class="g-pstyle4">Khost</p>
      </div>
      <div
        id="g-ai0-8"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:45.9742%;margin-top:-8.4px;left:46.1799%;width:73px;"
      >
        <p class="g-pstyle5">Epicentre</p>
      </div>
      <div
        id="g-ai0-9"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:49.8402%;margin-top:-8.4px;left:93.2747%;margin-left:-27px;width:54px;"
      >
        <p class="g-pstyle6">Bannu</p>
      </div>
      <div
        id="g-ai0-10"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:63.4369%;margin-top:-5.1px;left:65.9996%;margin-left:-50px;width:100px;"
      >
        <p class="g-pstyle7">PAKISTAN</p>
      </div>
    </div>
  {/if}
  <!-- Artboard: sm -->
  {#if width && width >= 510 && width < 660}
    <div id="g-quake-map-top-sm" class="g-artboard" style="">
      <div style="padding: 0 0 83.5294% 0;"></div>
      <div
        id="g-quake-map-top-sm-img"
        class="g-aiImg"
        style="{`background-image: url(${chartSm});`}"
      ></div>
      <div
        id="g-ai1-1"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:5.3132%;margin-top:-8.6px;left:3.5997%;width:71px;"
      >
        <p class="g-pstyle0">Shaking</p>
      </div>
      <div
        id="g-ai1-2"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:9.3038%;margin-top:-8.6px;left:3.5997%;width:86px;"
      >
        <p class="g-pstyle1">Very strong</p>
      </div>
      <div
        id="g-ai1-3"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:18.8592%;margin-top:-5.3px;left:41.2699%;margin-left:-91.5px;width:183px;"
      >
        <p class="g-pstyle2">AFGHANISTAN</p>
      </div>
      <div
        id="g-ai1-4"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:21.2757%;margin-top:-8.6px;left:3.5997%;width:53px;"
      >
        <p class="g-pstyle1">Weak</p>
      </div>
      <div
        id="g-ai1-5"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:30.6101%;margin-top:-9.4px;left:40.186%;width:61px;"
      >
        <p class="g-pstyle3">Gardez</p>
      </div>
      <div
        id="g-ai1-6"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:34.8355%;margin-top:-9.4px;left:9.9042%;width:60px;"
      >
        <p class="g-pstyle3">Ghazni</p>
      </div>
      <div
        id="g-ai1-7"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:40.4693%;margin-top:-9.4px;left:63.0024%;width:54px;"
      >
        <p class="g-pstyle3">Khost</p>
      </div>
      <div
        id="g-ai1-8"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:47.2768%;margin-top:-9.4px;left:48.5165%;width:80px;"
      >
        <p class="g-pstyle4">Epicentre</p>
      </div>
      <div
        id="g-ai1-9"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:50.7979%;margin-top:-9.4px;left:82.1761%;margin-left:-29px;width:58px;"
      >
        <p class="g-pstyle5">Bannu</p>
      </div>
      <div
        id="g-ai1-10"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:68.3897%;margin-top:-5.3px;left:73.6919%;margin-left:-67.5px;width:135px;"
      >
        <p class="g-pstyle2">PAKISTAN</p>
      </div>
    </div>
  {/if}
  <!-- Artboard: md -->
  {#if width && width >= 660 && width < 1200}
    <div id="g-quake-map-top-md" class="g-artboard" style="">
      <div style="padding: 0 0 91.8182% 0;"></div>
      <div
        id="g-quake-map-top-md-img"
        class="g-aiImg"
        style="{`background-image: url(${chartMd});`}"
      ></div>
      <div
        id="g-ai2-1"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:3.5477%;margin-top:-7.5px;left:2.6635%;width:62px;"
      >
        <p class="g-pstyle0">Shaking</p>
      </div>
      <div
        id="g-ai2-2"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:6.188%;margin-top:-7.5px;left:2.6635%;width:74px;"
      >
        <p class="g-pstyle1">Very strong</p>
      </div>
      <div
        id="g-ai2-3"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:7.0759%;margin-top:-6.9px;right:6.4574%;width:100px;"
      >
        <p class="g-pstyle2">Afghanistan</p>
      </div>
      <div
        id="g-ai2-4"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:15.2639%;margin-top:-7.5px;left:2.6635%;width:47px;"
      >
        <p class="g-pstyle1">Weak</p>
      </div>
      <div
        id="g-ai2-5"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:18.7377%;margin-top:-7.6px;left:38.071%;margin-left:-136.5px;width:273px;"
      >
        <p class="g-pstyle3">AFGHANISTAN</p>
      </div>
      <div
        id="g-ai2-6"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:30.2476%;margin-top:-10.3px;left:38.0816%;width:63px;"
      >
        <p class="g-pstyle4">Gardez</p>
      </div>
      <div
        id="g-ai2-7"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:33.8779%;margin-top:-10.3px;left:9.3056%;margin-left:-31px;width:62px;"
      >
        <p class="g-pstyle5">Ghazni</p>
      </div>
      <div
        id="g-ai2-8"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:40.1486%;margin-top:-10.3px;left:63.0563%;width:55px;"
      >
        <p class="g-pstyle4">Khost</p>
      </div>
      <div
        id="g-ai2-9"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:47.1569%;margin-top:-10.8px;left:47.4444%;width:86px;"
      >
        <p class="g-pstyle6">Epicentre</p>
      </div>
      <div
        id="g-ai2-10"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:50.8746%;margin-top:-10.3px;left:84.5785%;margin-left:-30px;width:60px;"
      >
        <p class="g-pstyle5">Bannu</p>
      </div>
      <div
        id="g-ai2-11"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:62.467%;margin-top:-7.6px;left:80.6735%;margin-left:-100px;width:200px;"
      >
        <p class="g-pstyle3">PAKISTAN</p>
      </div>
    </div>
  {/if}
  <!-- Artboard: lg -->
  {#if width && width >= 1200 && width < 1300}
    <div id="g-quake-map-top-lg" class="g-artboard" style="">
      <div style="padding: 0 0 55.1667% 0;"></div>
      <div
        id="g-quake-map-top-lg-img"
        class="g-aiImg"
        style="{`background-image: url(${chartLg});`}"
      ></div>
      <div
        id="g-ai3-1"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:4.1944%;margin-top:-8.8px;left:1.7817%;width:67px;"
      >
        <p class="g-pstyle0">Shaking</p>
      </div>
      <div
        id="g-ai3-2"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:6.9135%;margin-top:-8.8px;left:1.7817%;width:81px;"
      >
        <p class="g-pstyle1">Very strong</p>
      </div>
      <div
        id="g-ai3-3"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:7.006%;margin-top:-7.4px;right:4.4122%;width:100px;"
      >
        <p class="g-pstyle2">Afghanistan</p>
      </div>
      <div
        id="g-ai3-4"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:14.111%;margin-top:-8.4px;left:29.9587%;margin-left:-151px;width:302px;"
      >
        <p class="g-pstyle3">AFGHANISTAN</p>
      </div>
      <div
        id="g-ai3-5"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:16.128%;margin-top:-8.8px;left:1.7818%;width:51px;"
      >
        <p class="g-pstyle1">Weak</p>
      </div>
      <div
        id="g-ai3-6"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:28.2991%;margin-top:-11.3px;left:44.1554%;width:67px;"
      >
        <p class="g-pstyle4">Gardez</p>
      </div>
      <div
        id="g-ai3-7"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:31.9244%;margin-top:-11.3px;left:26.4286%;margin-left:-33px;width:66px;"
      >
        <p class="g-pstyle5">Ghazni</p>
      </div>
      <div
        id="g-ai3-8"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:37.676%;margin-top:-8.4px;left:85.4421%;margin-left:-110.5px;width:221px;"
      >
        <p class="g-pstyle3">PAKISTAN</p>
      </div>
      <div
        id="g-ai3-9"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:38.42%;margin-top:-11.3px;left:59.5142%;width:59px;"
      >
        <p class="g-pstyle4">Khost</p>
      </div>
      <div
        id="g-ai3-10"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:45.5991%;margin-top:-11.9px;left:49.9132%;width:94px;"
      >
        <p class="g-pstyle6">Epicentre</p>
      </div>
      <div
        id="g-ai3-11"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:53.9788%;margin-top:-11.3px;left:72.7294%;margin-left:-32px;width:64px;"
      >
        <p class="g-pstyle5">Bannu</p>
      </div>
    </div>
  {/if}
  <!-- Artboard: xl -->
  {#if width && width >= 1300}
    <div id="g-quake-map-top-xl" class="g-artboard" style="">
      <div style="padding: 0 0 51.2308% 0;"></div>
      <div
        id="g-quake-map-top-xl-img"
        class="g-aiImg"
        style="{`background-image: url(${chartXl});`}"
      ></div>
      <div
        id="g-ai4-1"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:3.8689%;margin-top:-8.8px;left:1.5293%;width:67px;"
      >
        <p class="g-pstyle0">Shaking</p>
      </div>
      <div
        id="g-ai4-2"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:6.063%;margin-top:-7.4px;right:4.342%;width:100px;"
      >
        <p class="g-pstyle1">Afghanistan</p>
      </div>
      <div
        id="g-ai4-3"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:6.5716%;margin-top:-8.8px;left:1.5293%;width:81px;"
      >
        <p class="g-pstyle2">Very strong</p>
      </div>
      <div
        id="g-ai4-4"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:13.726%;margin-top:-8.4px;left:30.8465%;margin-left:-151px;width:302px;"
      >
        <p class="g-pstyle3">AFGHANISTAN</p>
      </div>
      <div
        id="g-ai4-5"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:15.7308%;margin-top:-8.8px;left:1.5294%;width:51px;"
      >
        <p class="g-pstyle2">Weak</p>
      </div>
      <div
        id="g-ai4-6"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:27.8288%;margin-top:-11.3px;left:43.9511%;width:67px;"
      >
        <p class="g-pstyle4">Gardez</p>
      </div>
      <div
        id="g-ai4-7"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:31.4324%;margin-top:-11.3px;left:27.588%;margin-left:-33px;width:66px;"
      >
        <p class="g-pstyle5">Ghazni</p>
      </div>
      <div
        id="g-ai4-8"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:37.1494%;margin-top:-8.4px;left:82.0619%;margin-left:-110.5px;width:221px;"
      >
        <p class="g-pstyle3">PAKISTAN</p>
      </div>
      <div
        id="g-ai4-9"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:37.8889%;margin-top:-11.3px;left:58.1285%;width:59px;"
      >
        <p class="g-pstyle4">Khost</p>
      </div>
      <div
        id="g-ai4-10"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:45.025%;margin-top:-11.9px;left:49.2661%;width:94px;"
      >
        <p class="g-pstyle6">Epicentre</p>
      </div>
      <div
        id="g-ai4-11"
        class="g-tt g-aiAbs g-aiPointText"
        style="top:53.3543%;margin-top:-11.3px;left:70.3271%;margin-left:-32px;width:64px;"
      >
        <p class="g-pstyle5">Bannu</p>
      </div>
    </div>
  {/if}
</div>

<!-- End ai2html - 2022-06-24 21:49 -->

<!-- Generated by ai2html v0.100.0 - 2022-06-24 21:49 -->

<!-- ai file: quake-map-top.ai -->
<style lang="scss">
  #g-quake-map-top-box,
  #g-quake-map-top-box .g-artboard {
    margin: 0 auto;
  }
  #g-quake-map-top-box p {
    margin: 0;
  }
  #g-quake-map-top-box .g-aiAbs {
    position: absolute;
  }
  #g-quake-map-top-box .g-aiImg {
    position: absolute;
    top: 0;
    display: block;
    width: 100% !important;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
  }
  #g-quake-map-top-box .g-aiPointText p {
    white-space: nowrap;
  }
  #g-quake-map-top-xs {
    position: relative;
    overflow: hidden;
  }
  #g-quake-map-top-xs p {
    font-family:
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Helvetica,
      Arial,
      sans-serif;
    font-weight: 300;
    line-height: 14px;
    height: auto;
    opacity: 1;
    letter-spacing: 0em;
    font-size: 12px;
    text-align: left;
    color: rgb(120, 119, 120);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    position: static;
  }
  #g-quake-map-top-xs .g-pstyle0 {
    font-weight: 700;
    line-height: 11px;
    height: 11px;
    font-size: 9px;
    color: rgb(0, 0, 0);
  }
  #g-quake-map-top-xs .g-pstyle1 {
    font-weight: 600;
    height: 14px;
  }
  #g-quake-map-top-xs .g-pstyle2 {
    height: 14px;
  }
  #g-quake-map-top-xs .g-pstyle3 {
    line-height: 7px;
    height: 7px;
    letter-spacing: 0.3em;
    font-size: 14px;
    text-align: center;
    color: rgb(94, 94, 94);
  }
  #g-quake-map-top-xs .g-pstyle4 {
    height: 14px;
    color: rgb(64, 62, 61);
  }
  #g-quake-map-top-xs .g-pstyle5 {
    font-weight: 700;
    height: 14px;
    color: rgb(255, 255, 255);
  }
  #g-quake-map-top-xs .g-pstyle6 {
    height: 14px;
    text-align: center;
    color: rgb(64, 62, 61);
  }
  #g-quake-map-top-xs .g-pstyle7 {
    line-height: 7px;
    height: 7px;
    letter-spacing: 0.3em;
    text-align: center;
    color: rgb(94, 94, 94);
  }
  #g-quake-map-top-sm {
    position: relative;
    overflow: hidden;
  }
  #g-quake-map-top-sm p {
    font-family:
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Helvetica,
      Arial,
      sans-serif;
    font-weight: 300;
    line-height: 7px;
    height: auto;
    opacity: 1;
    letter-spacing: 0.4em;
    font-size: 16px;
    text-align: left;
    color: rgb(94, 94, 94);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    position: static;
  }
  #g-quake-map-top-sm .g-pstyle0 {
    font-weight: 600;
    line-height: 16px;
    height: 16px;
    letter-spacing: 0em;
    font-size: 14px;
    color: rgb(94, 93, 92);
  }
  #g-quake-map-top-sm .g-pstyle1 {
    line-height: 16px;
    height: 16px;
    letter-spacing: 0em;
    font-size: 14px;
    color: rgb(94, 93, 92);
  }
  #g-quake-map-top-sm .g-pstyle2 {
    height: 7px;
    text-align: center;
  }
  #g-quake-map-top-sm .g-pstyle3 {
    line-height: 16px;
    height: 16px;
    letter-spacing: 0em;
    font-size: 14px;
    color: rgb(64, 62, 61);
  }
  #g-quake-map-top-sm .g-pstyle4 {
    font-weight: 700;
    line-height: 16px;
    height: 16px;
    letter-spacing: 0em;
    font-size: 14px;
    color: rgb(255, 255, 255);
  }
  #g-quake-map-top-sm .g-pstyle5 {
    line-height: 16px;
    height: 16px;
    letter-spacing: 0em;
    font-size: 14px;
    text-align: center;
    color: rgb(64, 62, 61);
  }
  #g-quake-map-top-md {
    position: relative;
    overflow: hidden;
  }
  #g-quake-map-top-md p {
    font-family:
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Helvetica,
      Arial,
      sans-serif;
    font-weight: 300;
    line-height: 11px;
    height: auto;
    opacity: 1;
    letter-spacing: 0.7em;
    font-size: 19px;
    text-align: left;
    color: rgb(94, 94, 94);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    position: static;
  }
  #g-quake-map-top-md .g-pstyle0 {
    font-weight: 600;
    line-height: 14px;
    height: 14px;
    letter-spacing: 0em;
    font-size: 12px;
    color: rgb(94, 93, 92);
  }
  #g-quake-map-top-md .g-pstyle1 {
    line-height: 14px;
    height: 14px;
    letter-spacing: 0em;
    font-size: 12px;
    color: rgb(94, 93, 92);
  }
  #g-quake-map-top-md .g-pstyle2 {
    font-weight: 400;
    height: 11px;
    letter-spacing: 0.05em;
    font-size: 12px;
    text-align: right;
    text-transform: uppercase;
    color: rgb(98, 100, 100);
  }
  #g-quake-map-top-md .g-pstyle3 {
    height: 11px;
    text-align: center;
  }
  #g-quake-map-top-md .g-pstyle4 {
    line-height: 17px;
    height: 17px;
    letter-spacing: 0em;
    font-size: 14px;
    color: rgb(64, 62, 61);
  }
  #g-quake-map-top-md .g-pstyle5 {
    line-height: 17px;
    height: 17px;
    letter-spacing: 0em;
    font-size: 14px;
    text-align: center;
    color: rgb(64, 62, 61);
  }
  #g-quake-map-top-md .g-pstyle6 {
    font-weight: 700;
    line-height: 18px;
    height: 18px;
    letter-spacing: 0em;
    font-size: 15px;
    color: rgb(255, 255, 255);
  }
  #g-quake-map-top-lg {
    position: relative;
    overflow: hidden;
  }
  #g-quake-map-top-lg p {
    font-family:
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Helvetica,
      Arial,
      sans-serif;
    font-weight: 300;
    line-height: 12px;
    height: auto;
    opacity: 1;
    letter-spacing: 0.7em;
    font-size: 21px;
    text-align: left;
    color: rgb(94, 94, 94);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    position: static;
  }
  #g-quake-map-top-lg .g-pstyle0 {
    font-weight: 600;
    line-height: 16px;
    height: 16px;
    letter-spacing: 0em;
    font-size: 13px;
    color: rgb(94, 93, 92);
  }
  #g-quake-map-top-lg .g-pstyle1 {
    line-height: 16px;
    height: 16px;
    letter-spacing: 0em;
    font-size: 13px;
    color: rgb(94, 93, 92);
  }
  #g-quake-map-top-lg .g-pstyle2 {
    font-weight: 400;
    height: 12px;
    letter-spacing: 0.05em;
    font-size: 12px;
    text-align: right;
    text-transform: uppercase;
    color: rgb(98, 100, 100);
  }
  #g-quake-map-top-lg .g-pstyle3 {
    height: 12px;
    text-align: center;
  }
  #g-quake-map-top-lg .g-pstyle4 {
    line-height: 19px;
    height: 19px;
    letter-spacing: 0em;
    font-size: 16px;
    color: rgb(64, 62, 61);
  }
  #g-quake-map-top-lg .g-pstyle5 {
    line-height: 19px;
    height: 19px;
    letter-spacing: 0em;
    font-size: 16px;
    text-align: center;
    color: rgb(64, 62, 61);
  }
  #g-quake-map-top-lg .g-pstyle6 {
    font-weight: 700;
    line-height: 20px;
    height: 20px;
    letter-spacing: 0em;
    font-size: 17px;
    color: rgb(255, 255, 255);
  }
  #g-quake-map-top-xl {
    position: relative;
    overflow: hidden;
  }
  #g-quake-map-top-xl p {
    font-family:
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Helvetica,
      Arial,
      sans-serif;
    font-weight: 300;
    line-height: 12px;
    height: auto;
    opacity: 1;
    letter-spacing: 0.7em;
    font-size: 21px;
    text-align: left;
    color: rgb(94, 94, 94);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    position: static;
  }
  #g-quake-map-top-xl .g-pstyle0 {
    font-weight: 600;
    line-height: 16px;
    height: 16px;
    letter-spacing: 0em;
    font-size: 13px;
    color: rgb(94, 93, 92);
  }
  #g-quake-map-top-xl .g-pstyle1 {
    font-weight: 400;
    height: 12px;
    letter-spacing: 0.05em;
    font-size: 12px;
    text-align: right;
    text-transform: uppercase;
    color: rgb(98, 100, 100);
  }
  #g-quake-map-top-xl .g-pstyle2 {
    line-height: 16px;
    height: 16px;
    letter-spacing: 0em;
    font-size: 13px;
    color: rgb(94, 93, 92);
  }
  #g-quake-map-top-xl .g-pstyle3 {
    height: 12px;
    text-align: center;
  }
  #g-quake-map-top-xl .g-pstyle4 {
    line-height: 19px;
    height: 19px;
    letter-spacing: 0em;
    font-size: 16px;
    color: rgb(64, 62, 61);
  }
  #g-quake-map-top-xl .g-pstyle5 {
    line-height: 19px;
    height: 19px;
    letter-spacing: 0em;
    font-size: 16px;
    text-align: center;
    color: rgb(64, 62, 61);
  }
  #g-quake-map-top-xl .g-pstyle6 {
    font-weight: 700;
    line-height: 20px;
    height: 20px;
    letter-spacing: 0em;
    font-size: 17px;
    color: rgb(255, 255, 255);
  }

  /* Custom CSS */
</style>
