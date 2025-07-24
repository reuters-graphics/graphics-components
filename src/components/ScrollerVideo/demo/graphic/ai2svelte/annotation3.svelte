<script>
  // @ts-ignore img
  import chartXs from '../imgs/annotation3-xs.png';
  // @ts-ignore img
  import chartSm from '../imgs/annotation3-sm.png';
  // @ts-ignore img
  import chartMd from '../imgs/annotation3-md.png';
  // @ts{width}mg
  import chartLg from '../imgs/annotation3-md.png';
  // @ts-ignore img
  import chartXl from '../imgs/annotation3-xl.png';

  let width = null;
</script>

<div id="g-annotation3-box" bind:clientWidth={width}>
  <!-- Artboard: xs -->
  {#if width && width >= 0 && width < 510}
    <div id="g-annotation3-xs" class="g-artboard" style="">
      <div style="padding: 0 0 187.8788% 0;"></div>
      <div
        id="g-annotation3-xs-img"
        class="g-aiImg"
        style={`background-image: url(${chartXs});`}
      ></div>
      <div
        id="g-ai0-1"
        class="g-text g-aiAbs"
        style="top:9.8387%;left:19.697%;width:65.4545%;"
      >
        <p>
          Fierro is envelopedin the barrel for over two seconds, which is a long
          time in such an unstable environment
        </p>
      </div>
      <div
        id="g-ai0-2"
        class="g-text g-aiAbs"
        style="top:72.2581%;left:20.303%;width:61.2121%;"
      >
        <p>
          In comptitions, more points are scored for being deep inside a barrel
          which raises the chance the wave will close out on top of them.
        </p>
      </div>
    </div>
  {/if}
  <!-- Artboard: sm -->
  {#if width && width >= 510 && width < 660}
    <div id="g-annotation3-sm" class="g-artboard" style="">
      <div style="padding: 0 0 56.2745% 0;"></div>
      <div
        id="g-annotation3-sm-img"
        class="g-aiImg"
        style={`background-image: url(${chartSm});`}
      ></div>
      <div
        id="g-ai1-1"
        class="g-text g-aiAbs"
        style="top:1.7422%;left:46.7588%;width:51.1765%;"
      >
        <p>
          Fierro is envelopedin the barrel for over two seconds, which is a long
          time in such an unstable environment
        </p>
      </div>
      <div
        id="g-ai1-2"
        class="g-text g-aiAbs"
        style="top:33.4495%;left:66.1788%;width:29.8039%;"
      >
        <p>
          Surfers often say time distorts inside the barrel, slowing down and
          that the crashing wave noise falls silent, asthey expereince a sense
          of awe
        </p>
      </div>
      <div
        id="g-ai1-3"
        class="g-text g-aiAbs"
        style="top:72.8223%;left:13.3333%;width:48.2353%;"
      >
        <p>
          In comptitions, more points are scored for being deep inside a barrel
          which raises the chance the wave will close out on top of them.
        </p>
      </div>
    </div>
  {/if}
  <!-- Artboard: md -->
  {#if width && width >= 660 && width < 930}
    <div id="g-annotation3-md" class="g-artboard" style="">
      <div style="padding: 0 0 56.3636% 0;"></div>
      <div
        id="g-annotation3-md-img"
        class="g-aiImg"
        style={`background-image: url(${chartMd});`}
      ></div>
      <div
        id="g-ai2-1"
        class="g-text g-aiAbs"
        style="top:7.7957%;left:58.355%;width:28.0303%;"
      >
        <p>
          Fierro is envelopedin the barrel for over two seconds, which is a long
          time in such an unstable environment
        </p>
      </div>
      <div
        id="g-ai2-2"
        class="g-text g-aiAbs"
        style="top:45.9677%;left:69.837%;width:26.5152%;"
      >
        <p>
          Surfers often say time distorts inside the barrel, slowing down and
          that the crashing wave noise falls silent, as they expereince a sense
          of awe
        </p>
      </div>
      <div
        id="g-ai2-3"
        class="g-text g-aiAbs"
        style="top:72.3118%;left:31.3158%;width:28.6364%;"
      >
        <p>
          In comptitions, more points are scored for being deep inside a barrel
          which raises the chance the wave will close out on top of them.
        </p>
      </div>
    </div>
  {/if}
  <!-- Artboard: lg -->
  {#if width && width >= 930 && width < 1200}
    <div id="g-annotation3-lg" class="g-artboard" style="">
      <div style="padding: 0 0 56.0215% 0;"></div>
      <div
        id="g-annotation3-lg-img"
        class="g-aiImg"
        style={`background-image: url(${chartLg});`}
      ></div>
      <div
        id="g-ai3-1"
        class="g-text g-aiAbs"
        style="top:16.8906%;left:70.7526%;width:20.7527%;"
      >
        <p>
          Fierro is envelopedin the barrel for over two seconds, which is a long
          time in such an unstable environment
        </p>
      </div>
      <div
        id="g-ai3-2"
        class="g-text g-aiAbs"
        style="top:51.4395%;left:68.4341%;width:26.9892%;"
      >
        <p>
          Surfers often say time distorts inside the barrel, slowing down and
          that the crashing wave noise falls silent, as they expereince a sense
          of awe
        </p>
      </div>
      <div
        id="g-ai3-3"
        class="g-text g-aiAbs"
        style="top:68.5221%;left:38.9959%;width:25.2688%;"
      >
        <p>
          In comptitions, more points are scored for being deep inside a barrel
          which raises the chance the wave will close out on top of them.
        </p>
      </div>
    </div>
  {/if}
  <!-- Artboard: xl -->
  {#if width && width >= 1200}
    <div id="g-annotation3-xl" class="g-artboard" style="">
      <div style="padding: 0 0 51.6667% 0;"></div>
      <div
        id="g-annotation3-xl-img"
        class="g-aiImg"
        style={`background-image: url(${chartXl});`}
      ></div>
      <div
        id="g-ai4-1"
        class="g-text g-aiAbs"
        style="top:18.0645%;left:70.725%;width:20.6667%;"
      >
        <p>
          Fierro is envelopedin the barrel for over two seconds, which is a long
          time in such an unstable environment
        </p>
      </div>
      <div
        id="g-ai4-2"
        class="g-text g-aiAbs"
        style="top:NaN%;left:5.7255%;width:0.1667%;"
      >
        <p>&nbsp;</p>
        <p class="g-pstyle0">Fierro is enveloped</p>
        <p>&nbsp;</p>
        <p class="g-pstyle0">in the barrel for over</p>
        <p>&nbsp;</p>
        <p class="g-pstyle0">2 seconds, which is a</p>
        <p>&nbsp;</p>
        <p class="g-pstyle0">long time in such an</p>
        <p>&nbsp;</p>
        <p class="g-pstyle0">unstable environment</p>
        <p>&nbsp;</p>
        <p class="g-pstyle0">Surfers often say time distorts inside</p>
        <p>&nbsp;</p>
        <p class="g-pstyle0">the barrel, slowing down and that the</p>
        <p>&nbsp;</p>
        <p class="g-pstyle0">crashing wave noise falls silent, as</p>
        <p>&nbsp;</p>
        <p class="g-pstyle0">they expereince a sense of awe</p>
        <p>&nbsp;</p>
        <p class="g-pstyle0">In comptitions, more points are</p>
        <p>&nbsp;</p>
        <p class="g-pstyle0">scored for being deep inside a</p>
        <p>&nbsp;</p>
        <p class="g-pstyle0">barrel which raises the chance</p>
        <p>&nbsp;</p>
        <p class="g-pstyle0">the wave will close out on top of them.</p>
      </div>
      <div
        id="g-ai4-3"
        class="g-text g-aiAbs"
        style="top:55.4839%;left:68.4081%;width:26.0833%;"
      >
        <p>
          Surfers often say time distorts inside the barrel, slowing down and
          that the crashing wave noise falls silent, as they expereince a sense
          of awe
        </p>
      </div>
      <div
        id="g-ai4-4"
        class="g-text g-aiAbs"
        style="top:73.871%;left:38.9915%;width:24.6667%;"
      >
        <p>
          In comptitions, more points are scored for being deep inside a barrel
          which raises the chance the wave will close out on top of them.
        </p>
      </div>
    </div>
  {/if}
</div>

<!-- End ai2html - 2024-07-19 13:15 -->

<!-- Generated by ai2html v0.100.0 - 2024-07-19 13:15 -->
<!-- ai file: annotation3.ai -->
<style lang="scss">
  #g-annotation3-box,
  #g-annotation3-box .g-artboard {
    margin: 0 auto;
  }
  #g-annotation3-box p {
    margin: 0;
  }
  #g-annotation3-box .g-aiAbs {
    position: absolute;
  }
  #g-annotation3-box .g-aiImg {
    position: absolute;
    top: 0;
    display: block;
    width: 100% !important;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
  }
  #g-annotation3-xs {
    position: relative;
    overflow: hidden;
  }
  #g-annotation3-xs p {
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
    color: rgb(252, 252, 252);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    height: auto;
    position: static;
  }
  #g-annotation3-sm {
    position: relative;
    overflow: hidden;
  }
  #g-annotation3-sm p {
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
    color: rgb(252, 252, 252);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    height: auto;
    position: static;
  }
  #g-annotation3-md {
    position: relative;
    overflow: hidden;
  }
  #g-annotation3-md p {
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
    color: rgb(252, 252, 252);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    height: auto;
    position: static;
  }
  #g-annotation3-lg {
    position: relative;
    overflow: hidden;
  }
  #g-annotation3-lg p {
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
    color: rgb(252, 252, 252);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    height: auto;
    position: static;
  }
  #g-annotation3-xl {
    position: relative;
    overflow: hidden;
  }
  #g-annotation3-xl p {
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
    opacity: 1;
    letter-spacing: 0em;
    font-size: 20px;
    text-align: left;
    color: rgb(252, 252, 252);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    height: auto;
    position: static;
  }
  #g-annotation3-xl .g-pstyle0 {
    line-height: 11px;
    font-size: 9px;
    color: rgb(0, 0, 0);
  }

  /* Custom CSS */
</style>
