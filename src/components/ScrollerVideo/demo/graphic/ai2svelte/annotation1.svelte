<script>
  // @ts-ignore img
  import chartXs from '../imgs/annotation1-xs.png';
  // @ts-ignore img
  import chartSm from '../imgs/annotation1-sm.png';
  // @ts-ignore img
  import chartMd from '../imgs/annotation1-md.png';
  // @ts-ignore img
  import chartLg from '../imgs/annotation1-md.png';
  // @ts-ignore img
  import chartXl from '../imgs/annotation1-xl.png';

  let width = null;
</script>

<div id="g-annotation1-box" bind:clientWidth={width}>
  <!-- Artboard: xs -->
  {#if width && width >= 0 && width < 510}
    <div id="g-annotation1-xs" class="g-artboard" style="">
      <div style="padding: 0 0 187.8788% 0;"></div>
      <div
        id="g-annotation1-xs-img"
        class="g-aiImg"
        style={`background-image: url(${chartXs});`}
      ></div>
      <div
        id="g-ai0-1"
        class="g-text g-aiAbs g-aiPointText"
        style="top:16.5284%;margin-top:-8.5px;left:31.2%;width:166px;"
      >
        <p class="g-pstyle0">Solid southwest swell</p>
      </div>
      <div
        id="g-ai0-2"
        class="g-text g-aiAbs"
        style="top:56.9355%;left:20.6061%;width:60.303%;"
      >
        <p>
          Tahitian local Vahine Fierro drops into a double overhead wave during
          a recentcompetition. Timing and position are critical to make the
          take-off and maximize scoring
        </p>
        <p></p>
        <p>&nbsp;</p>
      </div>
      <div
        id="g-ai0-3"
        class="g-text g-aiAbs g-aiPointText"
        style="top:85.9639%;margin-top:-17px;left:12.7641%;width:156px;"
      >
        <p class="g-pstyle1">Shallow water hides</p>
        <p class="g-pstyle1">a sharp reef</p>
      </div>
    </div>
  {/if}
  <!-- Artboard: sm -->
  {#if width && width >= 510 && width < 660}
    <div id="g-annotation1-sm" class="g-artboard" style="">
      <div style="padding: 0 0 56.2745% 0;"></div>
      <div
        id="g-annotation1-sm-img"
        class="g-aiImg"
        style={`background-image: url(${chartSm});`}
      ></div>
      <div
        id="g-ai1-1"
        class="g-text g-aiAbs g-aiPointText"
        style="top:18.807%;margin-top:-17px;left:20.9079%;width:247px;"
      >
        <p class="g-pstyle0">Wave forms from hitting reef, and</p>
        <p class="g-pstyle0">tube will track the line of the shelf</p>
      </div>
      <div
        id="g-ai1-2"
        class="g-text g-aiAbs g-aiPointText"
        style="top:24.9046%;margin-top:-8.5px;left:69.9921%;width:166px;"
      >
        <p class="g-pstyle1">Solid southwest swell</p>
      </div>
      <div
        id="g-ai1-3"
        class="g-text g-aiAbs g-aiPointText"
        style="top:81.8732%;margin-top:-57px;left:39.9944%;width:321px;"
      >
        <p class="g-pstyle0">Tahitian local Vahine Fierro drops into</p>
        <p class="g-pstyle0">a double overhead wave during a recent</p>
        <p class="g-pstyle0">competition. Timing and position are critical</p>
        <p class="g-pstyle0">to make the take-off and maximize scoring</p>
        <p class="g-pstyle0"></p>
        <p>&nbsp;</p>
      </div>
      <div
        id="g-ai1-4"
        class="g-text g-aiAbs g-aiPointText"
        style="top:81.5248%;margin-top:-17px;left:6.6905%;width:156px;"
      >
        <p class="g-pstyle0">Shallow water hides</p>
        <p class="g-pstyle0">a sharp reef</p>
      </div>
    </div>
  {/if}
  <!-- Artboard: md -->
  {#if width && width >= 660 && width < 930}
    <div id="g-annotation1-md" class="g-artboard" style="">
      <div style="padding: 0 0 56.3636% 0;"></div>
      <div
        id="g-annotation1-md-img"
        class="g-aiImg"
        style={`background-image: url(${chartMd});`}
      ></div>
      <div
        id="g-ai2-1"
        class="g-text g-aiAbs g-aiPointText"
        style="top:19.0796%;margin-top:-17px;left:20.696%;width:247px;"
      >
        <p class="g-pstyle0">Wave forms from hitting reef, and</p>
        <p class="g-pstyle0">tube will track the line of the shelf</p>
      </div>
      <div
        id="g-ai2-2"
        class="g-text g-aiAbs g-aiPointText"
        style="top:21.6334%;margin-top:-7.5px;left:70.3415%;width:166px;"
      >
        <p class="g-pstyle1">Solid southwest swell</p>
      </div>
      <div
        id="g-ai2-3"
        class="g-text g-aiAbs g-aiPointText"
        style="top:66.6602%;margin-top:-57px;left:48.1533%;width:321px;"
      >
        <p class="g-pstyle0">Tahitian local Vahine Fierro drops into</p>
        <p class="g-pstyle0">a double overhead wave during a recent</p>
        <p class="g-pstyle0">competition. Timing and position are critical</p>
        <p class="g-pstyle0">to make the take-off and maximize scoring</p>
        <p class="g-pstyle0"></p>
        <p>&nbsp;</p>
      </div>
      <div
        id="g-ai2-4"
        class="g-text g-aiAbs g-aiPointText"
        style="top:81.714%;margin-top:-17px;left:17.2641%;width:156px;"
      >
        <p class="g-pstyle0">Shallow water hides</p>
        <p class="g-pstyle0">a sharp reef</p>
      </div>
    </div>
  {/if}
  <!-- Artboard: lg -->
  {#if width && width >= 930 && width < 1200}
    <div id="g-annotation1-lg" class="g-artboard" style="">
      <div style="padding: 0 0 56.0215% 0;"></div>
      <div
        id="g-annotation1-lg-img"
        class="g-aiImg"
        style={`background-image: url(${chartLg});`}
      ></div>
      <div
        id="g-ai3-1"
        class="g-text g-aiAbs g-aiPointText"
        style="top:18.3754%;margin-top:-19.7px;left:20.5759%;width:247px;"
      >
        <p class="g-pstyle0">Wave forms from hitting reef, and</p>
        <p class="g-pstyle0">tube will track the line of the shelf</p>
      </div>
      <div
        id="g-ai3-2"
        class="g-text g-aiAbs g-aiPointText"
        style="top:25.2353%;margin-top:-10.5px;left:73.3785%;width:166px;"
      >
        <p class="g-pstyle0">Solid southwest swell</p>
      </div>
      <div
        id="g-ai3-3"
        class="g-text g-aiAbs g-aiPointText"
        style="top:65.458%;margin-top:-66px;left:46.9484%;width:321px;"
      >
        <p class="g-pstyle0">Tahitian local Vahine Fierro drops into</p>
        <p class="g-pstyle0">a double overhead wave during a recent</p>
        <p class="g-pstyle0">competition. Timing and position are critical</p>
        <p class="g-pstyle0">to make the take-off and maximize scoring</p>
        <p class="g-pstyle0"></p>
        <p>&nbsp;</p>
      </div>
      <div
        id="g-ai3-4"
        class="g-text g-aiAbs g-aiPointText"
        style="top:80.1797%;margin-top:-19.7px;left:17.5746%;width:156px;"
      >
        <p class="g-pstyle0">Shallow water hides</p>
        <p class="g-pstyle0">a sharp reef</p>
      </div>
    </div>
  {/if}
  <!-- Artboard: xl -->
  {#if width && width >= 1200}
    <div id="g-annotation1-xl" class="g-artboard" style="">
      <div style="padding: 0 0 51.6667% 0;"></div>
      <div
        id="g-annotation1-xl-img"
        class="g-aiImg"
        style={`background-image: url(${chartXl});`}
      ></div>
      <div
        id="g-ai4-1"
        class="g-text g-aiAbs g-aiPointText"
        style="top:20.0355%;margin-top:-25.2px;left:20.6647%;width:304px;"
      >
        <p class="g-pstyle0">Wave forms from hitting reef, and</p>
        <p class="g-pstyle0">tube will track the line of the shelf</p>
      </div>
      <div
        id="g-ai4-2"
        class="g-text g-aiAbs g-aiPointText"
        style="top:27.6162%;margin-top:-13.2px;left:81.5814%;width:202px;"
      >
        <p class="g-pstyle0">Solid southwest swell</p>
      </div>
      <div
        id="g-ai4-3"
        class="g-text g-aiAbs g-aiPointText"
        style="top:63.1%;margin-top:-85.2px;left:47.4753%;width:396px;"
      >
        <p class="g-pstyle0">Tahitian local Vahine Fierro drops into</p>
        <p class="g-pstyle0">a double overhead wave during a recent</p>
        <p class="g-pstyle0">competition. Timing and position are critical</p>
        <p class="g-pstyle0">to make the take-off and maximize scoring</p>
        <p class="g-pstyle0"></p>
        <p>&nbsp;</p>
      </div>
      <div
        id="g-ai4-4"
        class="g-text g-aiAbs g-aiPointText"
        style="top:94.0678%;margin-top:-25.2px;left:20.5662%;width:189px;"
      >
        <p class="g-pstyle0">Shallow water hides</p>
        <p
          class="g-
pstyle0"
        >
          a sharp reef
        </p>
      </div>
    </div>
  {/if}
</div>

<!-- End ai2html - 2024-07-19 13:12 -->

<!-- Generated by ai2html v0.100.0 - 2024-07-19 13:12 -->
<!-- ai file: annotation1.ai -->
<style lang="scss">
  #g-annotation1-box,
  #g-annotation1-box .g-artboard {
    margin: 0 auto;
  }
  #g-annotation1-box p {
    margin: 0;
  }
  #g-annotation1-box .g-aiAbs {
    position: absolute;
  }
  #g-annotation1-box .g-aiImg {
    position: absolute;
    top: 0;
    display: block;
    width: 100% !important;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
  }
  #g-annotation1-box .g-aiPointText p {
    white-space: nowrap;
  }
  #g-annotation1-xs {
    position: relative;
    overflow: hidden;
  }
  #g-annotation1-xs p {
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
    font-weight: 400;
    line-height: 16px;
    opacity: 1;
    letter-spacing: 0em;
    font-size: 16px;
    text-align: left;
    color: rgb(255, 255, 255);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    height: auto;
    position: static;
  }
  #g-annotation1-xs .g-pstyle0 {
    line-height: 15px;
    height: 15px;
  }
  #g-annotation1-xs .g-pstyle1 {
    height: 16px;
  }
  #g-annotation1-sm {
    position: relative;
    overflow: hidden;
  }
  #g-annotation1-sm p {
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
    font-weight: 400;
    line-height: 16px;
    height: auto;
    opacity: 1;
    letter-spacing: 0em;
    font-size: 16px;
    text-align: left;
    color: rgb(255, 255, 255);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    position: static;
  }
  #g-annotation1-sm .g-pstyle0 {
    height: 16px;
  }
  #g-annotation1-sm .g-pstyle1 {
    line-height: 15px;
    height: 15px;
  }
  #g-annotation1-md {
    position: relative;
    overflow: hidden;
  }
  #g-annotation1-md p {
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
    font-weight: 400;
    line-height: 16px;
    height: auto;
    opacity: 1;
    letter-spacing: 0em;
    font-size: 16px;
    text-align: left;
    color: rgb(255, 255, 255);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    position: static;
  }
  #g-annotation1-md .g-pstyle0 {
    height: 16px;
  }
  #g-annotation1-md .g-pstyle1 {
    line-height: 13px;
    height: 13px;
  }
  #g-annotation1-lg {
    position: relative;
    overflow: hidden;
  }
  #g-annotation1-lg p {
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
    font-weight: 400;
    line-height: 19px;
    height: auto;
    opacity: 1;
    letter-spacing: 0em;
    font-size: 16px;
    text-align: left;
    color: rgb(255, 255, 255);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    position: static;
  }
  #g-annotation1-lg .g-pstyle0 {
    height: 19px;
  }
  #g-annotation1-xl {
    position: relative;
    overflow: hidden;
  }
  #g-annotation1-xl p {
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
    font-weight: 400;
    line-height: 24px;
    height: auto;
    opacity: 1;
    letter-spacing: 0em;
    font-size: 20px;
    text-align: left;
    color: rgb(255, 255, 255);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    position: static;
  }
  #g-annotation1-xl .g-pstyle0 {
    height: 24px;
  }

  /* Custom CSS */
</style>
