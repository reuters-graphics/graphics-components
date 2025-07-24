<script>
  // @ts-ignore img
  import chartXs from '../imgs/annotation4-xs.png';
  // @ts-ignore img
  import chartSm from '../imgs/annotation4-sm.png';
  // @ts-ignore img
  import chartMd from '../imgs/annotation4-md.png';
  // @ts{width}mg
  import chartLg from '../imgs/annotation4-md.png';
  // @ts-ignore img
  import chartXl from '../imgs/annotation4-xl.png';

  let width = null;
</script>

<div id="g-annotation4-box" bind:clientWidth={width}>
  <!-- Artboard: xs -->
  {#if width && width >= 0 && width < 510}
    <div id="g-annotation4-xs" class="g-artboard" style="">
      <div style="padding: 0 0 187.8788% 0;"></div>
      <div
        id="g-annotation4-xs-img"
        class="g-aiImg"
        style={`background-image: url(${chartXs});`}
      ></div>
      <div
        id="g-ai0-1"
        class="g-text g-aiAbs"
        style="top:9.5161%;left:16.1999%;width:61.5152%;"
      >
        <p>The wave path is a short one, only about 100 yards long</p>
      </div>
      <div
        id="g-ai0-2"
        class="g-text g-aiAbs"
        style="top:73.871%;left:16.1999%;width:61.5152%;"
      >
        <p>
          Fierro exits the barrel with a score of 9.33 out of 10, as she was
          deep in the tube, had good speed and went over the foam ball on her
          exit
        </p>
      </div>
    </div>
  {/if}
  <!-- Artboard: sm -->
  {#if width && width >= 510 && width < 660}
    <div id="g-annotation4-sm" class="g-artboard" style="">
      <div style="padding: 0 0 56.2745% 0;"></div>
      <div
        id="g-annotation4-sm-img"
        class="g-aiImg"
        style={`background-image: url(${chartSm});`}
      ></div>
      <div
        id="g-ai1-1"
        class="g-text g-aiAbs"
        style="top:8.3624%;left:8.9136%;width:39.8039%;"
      >
        <p>The wave path is a short one, only about 100 yards long</p>
      </div>
      <div
        id="g-ai1-2"
        class="g-text g-aiAbs"
        style="top:34.8432%;left:62.1168%;width:32.3529%;"
      >
        <p>
          Fierro exits the barrel with a score of 9.33 out of 10, as she was
          deep in the tube, had good speed and went over the foam ball on her
          exit
        </p>
      </div>
      <div
        id="g-ai1-3"
        class="g-text g-aiAbs"
        style="top:68.9895%;left:9.1341%;width:47.2549%;"
      >
        <p>
          The wave heaves so quickly that as it forms, it pulls water off the
          reef, creating a ride that is often below sea level - seen as the
          surfer exits up and over the wave to higher water
        </p>
      </div>
    </div>
  {/if}
  <!-- Artboard: md -->
  {#if width && width >= 660 && width < 930}
    <div id="g-annotation4-md" class="g-artboard" style="">
      <div style="padding: 0 0 56.3636% 0;"></div>
      <div
        id="g-annotation4-md-img"
        class="g-aiImg"
        style={`background-image: url(${chartMd});`}
      ></div>
      <div
        id="g-ai2-1"
        class="g-text g-aiAbs"
        style="top:9.6774%;left:17.6103%;width:30%;"
      >
        <p>The wave path is a short one, only about 100 yards long</p>
      </div>
      <div
        id="g-ai2-2"
        class="g-text g-aiAbs"
        style="top:37.3656%;left:62.5253%;width:30.303%;"
      >
        <p>
          Fierro exits the barrel with a score of 9.33 out of 10, as she was
          deep in the tube, had good speed and went over the foam ball on her
          exit
        </p>
      </div>
      <div
        id="g-ai2-3"
        class="g-text g-aiAbs"
        style="top:71.2366%;left:15.8065%;width:36.8182%;"
      >
        <p>
          The wave heaves so quickly that as it forms, it pulls water off the
          reef, creating a ride that is often below sea level - seen as the
          surfer exits up and over the wave to higher water
        </p>
      </div>
    </div>
  {/if}
  <!-- Artboard: lg -->
  {#if width && width >= 930 && width < 1200}
    <div id="g-annotation4-lg" class="g-artboard" style="">
      <div style="padding: 0 0 56.0215% 0;"></div>
      <div
        id="g-annotation4-lg-img"
        class="g-aiImg"
        style={`background-image: url(${chartLg});`}
      ></div>
      <div
        id="g-ai3-1"
        class="g-text g-aiAbs"
        style="top:15.3551%;left:24.4264%;width:23.2258%;"
      >
        <p>The wave path is a short one,</p>
        <p>only about 100 yards long</p>
      </div>
      <div
        id="g-ai3-2"
        class="g-text g-aiAbs"
        style="top:38.5797%;left:69.5876%;width:25.3763%;"
      >
        <p>
          Fierro exits the barrel with a score of 9.33 out of 10, as she was
          deep in the tube, had good speed and went over the foam ball on her
          exit
        </p>
      </div>
      <div
        id="g-ai3-3"
        class="g-text g-aiAbs"
        style="top:77.1593%;left:30.5554%;width:26.0215%;"
      >
        <p>
          The wave heaves so quickly that as it forms, it pulls water off the
          reef, creating a ride that is often below sea level - seen as the
          surfer exits up and over the wave to higher water
        </p>
      </div>
    </div>
  {/if}
  <!-- Artboard: xl -->
  {#if width && width >= 1200}
    <div id="g-annotation4-xl" class="g-artboard" style="">
      <div style="padding: 0 0 51.6667% 0;"></div>
      <div
        id="g-annotation4-xl-img"
        class="g-aiImg"
        style={`background-image: url(${chartXl});`}
      ></div>
      <div
        id="g-ai4-1"
        class="g-text g-aiAbs g-aiPointText"
        style="top:19.5123%;margin-top:-17px;left:27.8891%;width:218px;"
      >
        <p class="g-pstyle0">The wave path is a short one,</p>
        <p class="g-pstyle0">only about 100 yards long</p>
      </div>
      <div
        id="g-ai4-2"
        class="g-text g-aiAbs g-aiPointText"
        style="top:60.48%;margin-top:-33px;left:68.0232%;width:274px;"
      >
        <p class="g-pstyle0">Fierro exits the barrel with a score of</p>
        <p class="g-pstyle0">9.33 out of 10, as she was deep in the</p>
        <p class="g-pstyle0">tube, had good speed and went over</p>
        <p class="g-pstyle0">the foam ball on her exit</p>
      </div>
      <div
        id="g-ai4-3"
        class="g-text g-aiAbs g-aiPointText"
        style="top:82.5768%;margin-top:-33px;left:38.7732%;width:319px;"
      >
        <p class="g-pstyle0">The wave heaves so quickly that as it forms,</p>
        <p class="g-pstyle0">
          it pulls water off the reef, creating a rid e that
        </p>
        <p class="g-pstyle0">is often below sea level - seen as the surfer</p>
        <p class="g-pstyle0">exits up and over the wave to higher water</p>
      </div>
    </div>
  {/if}
</div>

<!-- End ai2html - 2024-07-19 13:16 -->

<!-- Generated by ai2html v0.100.0 - 2024-07-19 13:16 -->
<!-- ai file: annotation4.ai -->
<style lang="scss">
  #g-annotation4-box,
  #g-annotation4-box .g-artboard {
    margin: 0 auto;
  }
  #g-annotation4-box p {
    margin: 0;
  }
  #g-annotation4-box .g-aiAbs {
    position: absolute;
  }
  #g-annotation4-box .g-aiImg {
    position: absolute;
    top: 0;
    display: block;
    width: 100% !important;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
  }
  #g-annotation4-box .g-aiPointText p {
    white-space: nowrap;
  }
  #g-annotation4-xs {
    position: relative;
    overflow: hidden;
  }
  #g-annotation4-xs p {
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
  #g-annotation4-sm {
    position: relative;
    overflow: hidden;
  }
  #g-annotation4-sm p {
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
  #g-annotation4-md {
    position: relative;
    overflow: hidden;
  }
  #g-annotation4-md p {
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
  #g-annotation4-lg {
    position: relative;
    overflow: hidden;
  }
  #g-annotation4-lg p {
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
  #g-annotation4-xl {
    position: relative;
    overflow: hidden;
  }
  #g-annotation4-xl p {
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
  #g-annotation4-xl .g-pstyle0 {
    height: 16px;
  }

  /* Custom CSS */
</style>
