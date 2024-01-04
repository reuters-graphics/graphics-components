<script>
  // @ts-ignore
  import chartXs from './graphic-xs.png';
  // @ts-ignore
  import chartSm from './graphic-sm.png';
  // @ts-ignore
  import chartMd from './graphic-md.png';
  // @ts-ignore
  import chartLg from './graphic-lg.png';
  // @ts-ignore
  import chartXl from './graphic-xl.png';

  // export let assetsPath = './';
  let width = null;
</script>

<div id="g-graphic-box" bind:clientWidth="{width}">
  <!-- Artboard: xs -->
  {#if width && width >= 0 && width < 510}
    <div id="g-graphic-xs" class="g-artboard" style="">
      <div style="padding: 0 0 156.6667% 0;"></div>
      <div
        id="g-graphic-xs-img"
        class="g-aiImg"
        style="{`background-image: url(${chartXs});`}"
      ></div>
      <div
        id="g-ai0-3"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:55.3926%;margin-top:-9.4px;left:46.8034%;margin-left:-41px;width:82px;"
      >
        <p class="g-pstyle1">GREENLAND</p>
      </div>
      <div
        id="g-ai0-4"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:58.4874%;margin-top:-9.4px;right:1.3922%;width:65px;"
      >
        <p class="g-pstyle2">UKRAINE</p>
      </div>
      <div
        id="g-ai0-5"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:59.2611%;margin-top:-9.4px;left:74.2151%;margin-left:-28.5px;width:57px;"
      >
        <p class="g-pstyle1">RUSSIA</p>
      </div>
      <div
        id="g-ai0-6"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:64.2901%;margin-top:-9.4px;left:75.4898%;margin-left:-31.5px;width:63px;"
      >
        <p class="g-pstyle3">Moscow</p>
      </div>
      <div
        id="g-ai0-7"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:69.8994%;margin-top:-9.4px;left:24.0115%;margin-left:-31px;width:62px;"
      >
        <p class="g-pstyle1">CANADA</p>
      </div>
      <div
        id="g-ai0-8"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:70.1563%;margin-top:-8.7px;left:10.3976%;margin-left:-20.5px;width:41px;"
      >
        <p class="g-pstyle1">U.S.</p>
      </div>
      <div
        id="g-ai0-9"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:71.8336%;margin-top:-9.4px;left:46.9832%;margin-left:-33.5px;width:67px;"
      >
        <p class="g-pstyle1">BELARUS</p>
      </div>
      <div
        id="g-ai0-10"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:80.7311%;margin-top:-9.4px;left:54.3834%;margin-left:-25.5px;width:51px;"
      >
        <p class="g-pstyle1">SPAIN</p>
      </div>
    </div>
  {/if}
  <!-- Artboard: sm -->
  {#if width && width >= 510 && width < 660}
    <div id="g-graphic-sm" class="g-artboard" style="">
      <div style="padding: 0 0 54.1176% 0;"></div>
      <div
        id="g-graphic-sm-img"
        class="g-aiImg"
        style="{`background-image: url(${chartSm});`}"
      ></div>
      <div
        id="g-ai1-1"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:14.6304%;margin-top:-9.4px;left:41.7507%;width:82px;"
      >
        <p class="g-pstyle0">GREENLAND</p>
      </div>
      <div
        id="g-ai1-2"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:25.8623%;margin-top:-9.4px;left:62.7041%;margin-left:-32.5px;width:65px;"
      >
        <p class="g-pstyle1">FINLAND</p>
      </div>
      <div
        id="g-ai1-3"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:26.9492%;margin-top:-9.4px;left:72.6333%;margin-left:-28.5px;width:57px;"
      >
        <p class="g-pstyle1">RUSSIA</p>
      </div>
      <div
        id="g-ai1-4"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:37.4565%;margin-top:-9.4px;right:39.632%;width:64px;"
      >
        <p class="g-pstyle2">NORWAY</p>
      </div>
      <div
        id="g-ai1-5"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:38.5434%;margin-top:-9.4px;left:73.7517%;margin-left:-31.5px;width:63px;"
      >
        <p class="g-pstyle3">Moscow</p>
      </div>
      <div
        id="g-ai1-6"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:44.7029%;margin-top:-9.4px;left:73.385%;width:67px;"
      >
        <p class="g-pstyle0">BELARUS</p>
      </div>
      <div
        id="g-ai1-7"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:46.8768%;margin-top:-9.4px;left:51.9252%;margin-left:-32px;width:64px;"
      >
        <p class="g-pstyle1">ICELAND</p>
      </div>
      <div
        id="g-ai1-8"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:53.3985%;margin-top:-17.4px;left:14.7718%;margin-left:-29.5px;width:59px;"
      >
        <p class="g-pstyle1">UNITED</p>
        <p class="g-pstyle1">STATES</p>
      </div>
      <div
        id="g-ai1-9"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:50.8623%;margin-top:-9.4px;left:61.4922%;margin-left:-18px;width:36px;"
      >
        <p class="g-pstyle1">UK</p>
      </div>
      <div
        id="g-ai1-10"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:51.2246%;margin-top:-9.4px;left:75.5452%;margin-left:-32.5px;width:65px;"
      >
        <p class="g-pstyle1">UKRAINE</p>
      </div>
      <div
        id="g-ai1-11"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:51.5869%;margin-top:-9.4px;left:27.6044%;margin-left:-31px;width:62px;"
      >
        <p class="g-pstyle1">CANADA</p>
      </div>
      <div
        id="g-ai1-12"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:57.7463%;margin-top:-9.4px;right:43.8463%;width:64px;"
      >
        <p class="g-pstyle2">IRELAND</p>
      </div>
      <div
        id="g-ai1-13"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:59.5579%;margin-top:-9.4px;left:86.9951%;width:45px;"
      >
        <p class="g-pstyle0">IRAN</p>
      </div>
      <div
        id="g-ai1-14"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:67.5289%;margin-top:-9.4px;left:57.414%;margin-left:-30.5px;width:61px;"
      >
        <p class="g-pstyle1">FRANCE</p>
      </div>
      <div
        id="g-ai1-15"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:75.5%;margin-top:-9.4px;left:75.0057%;width:47px;"
      >
        <p class="g-pstyle0">ITALY</p>
      </div>
      <div
        id="g-ai1-16"
        class="g-sm g-aiAbs g-aiPointText"
        style="top:77.6739%;margin-top:-9.4px;left:56.0011%;margin-left:-25.5px;width:51px;"
      >
        <p class="g-pstyle1">SPAIN</p>
      </div>
    </div>
  {/if}
  <!-- Artboard: md -->
  {#if width && width >= 660 && width < 930}
    <div id="g-graphic-md" class="g-artboard" style="">
      <div style="padding: 0 0 53.0303% 0;"></div>
      <div
        id="g-graphic-md-img"
        class="g-aiImg"
        style="{`background-image: url(${chartMd});`}"
      ></div>

      <div
        id="g-ai2-2"
        class="g-md g-aiAbs g-aiPointText"
        style="top:13.2514%;margin-top:-9.4px;left:43.1404%;width:82px;"
      >
        <p class="g-pstyle0">GREENLAND</p>
      </div>
      <div
        id="g-ai2-3"
        class="g-md g-aiAbs g-aiPointText"
        style="top:23.5371%;margin-top:-9.4px;left:62.9528%;margin-left:-32.5px;width:65px;"
      >
        <p class="g-pstyle1">FINLAND</p>
      </div>
      <div
        id="g-ai2-4"
        class="g-md g-aiAbs g-aiPointText"
        style="top:25.5371%;margin-top:-9.4px;left:72.5549%;margin-left:-28.5px;width:57px;"
      >
        <p class="g-pstyle1">RUSSIA</p>
      </div>
      <div
        id="g-ai2-5"
        class="g-md g-aiAbs g-aiPointText"
        style="top:36.9657%;margin-top:-9.4px;right:39.2195%;width:64px;"
      >
        <p class="g-pstyle2">NORWAY</p>
      </div>
      <div
        id="g-ai2-6"
        class="g-md g-aiAbs g-aiPointText"
        style="top:37.2514%;margin-top:-9.4px;left:73.679%;margin-left:-31.5px;width:63px;"
      >
        <p class="g-pstyle3">Moscow</p>
      </div>
      <div
        id="g-ai2-7"
        class="g-md g-aiAbs g-aiPointText"
        style="top:42.68%;margin-top:-9.4px;left:73.3033%;width:67px;"
      >
        <p class="g-pstyle0">BELARUS</p>
      </div>
      <div
        id="g-ai2-8"
        class="g-md g-aiAbs g-aiPointText"
        style="top:44.9657%;margin-top:-9.4px;left:51.859%;margin-left:-32px;width:64px;"
      >
        <p class="g-pstyle1">ICELAND</p>
      </div>
      <div
        id="g-ai2-9"
        class="g-md g-aiAbs g-aiPointText"
        style="top:48.68%;margin-top:-9.4px;left:29.292%;margin-left:-31px;width:62px;"
      >
        <p class="g-pstyle1">CANADA</p>
      </div>
      <div
        id="g-ai2-10"
        class="g-md g-aiAbs g-aiPointText"
        style="top:51.8228%;margin-top:-17.4px;left:14.7246%;margin-left:-29.5px;width:59px;"
      >
        <p class="g-pstyle1">UNITED</p>
        <p class="g-pstyle1">STATES</p>
      </div>
      <div
        id="g-ai2-11"
        class="g-md g-aiAbs g-aiPointText"
        style="top:49.8228%;margin-top:-9.4px;left:61.2229%;margin-left:-18px;width:36px;"
      >
        <p class="g-pstyle1">UK</p>
      </div>
      <div
        id="g-ai2-12"
        class="g-md g-aiAbs g-aiPointText"
        style="top:50.1085%;margin-top:-9.4px;left:75.469%;margin-left:-32.5px;width:65px;"
      >
        <p class="g-pstyle1">UKRAINE</p>
      </div>
      <div
        id="g-ai2-13"
        class="g-md g-aiAbs g-aiPointText"
        style="top:56.3943%;margin-top:-9.4px;right:43.9222%;width:64px;"
      >
        <p class="g-pstyle2">IRELAND</p>
      </div>
      <div
        id="g-ai2-14"
        class="g-md g-aiAbs g-aiPointText"
        style="top:57.2514%;margin-top:-9.4px;left:87.1782%;width:45px;"
      >
        <p class="g-pstyle0">IRAN</p>
      </div>
      <div
        id="g-ai2-15"
        class="g-md g-aiAbs g-aiPointText"
        style="top:66.3943%;margin-top:-9.4px;left:59.2927%;margin-left:-30.5px;width:61px;"
      >
        <p class="g-pstyle1">FRANCE</p>
      </div>
      <div
        id="g-ai2-16"
        class="g-md g-aiAbs g-aiPointText"
        style="top:75.2514%;margin-top:-17.4px;left:90.7521%;margin-left:-28.5px;width:57px;"
      >
        <p class="g-pstyle1">SAUDI</p>
        <p class="g-pstyle1">ARABIA</p>
      </div>
      <div
        id="g-ai2-17"
        class="g-md g-aiAbs g-aiPointText"
        style="top:76.1085%;margin-top:-9.4px;left:76.2209%;margin-left:-23.5px;width:47px;"
      >
        <p class="g-pstyle1">ITALY</p>
      </div>
      <div
        id="g-ai2-18"
        class="g-md g-aiAbs g-aiPointText"
        style="top:78.3943%;margin-top:-9.4px;left:56.2528%;margin-left:-25.5px;width:51px;"
      >
        <p class="g-pstyle1">SPAIN</p>
      </div>
    </div>
  {/if}
  <!-- Artboard: lg -->
  {#if width && width >= 930 && width < 1200}
    <div id="g-graphic-lg" class="g-artboard" style="">
      <div style="padding: 0 0 51.0753% 0;"></div>
      <div
        id="g-graphic-lg-img"
        class="g-aiImg"
        style="{`background-image: url(${chartLg});`}"
      ></div>
      <div
        id="g-ai3-1"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:26.6548%;margin-top:-10.6px;left:62.9209%;margin-left:-36px;width:72px;"
      >
        <p class="g-pstyle0">FINLAND</p>
      </div>
      <div
        id="g-ai3-2"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:28.5495%;margin-top:-10.6px;left:72.3568%;margin-left:-31.5px;width:63px;"
      >
        <p class="g-pstyle0">RUSSIA</p>
      </div>
      <div
        id="g-ai3-3"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:31.9179%;margin-top:-10.6px;left:46.515%;margin-left:-46px;width:92px;"
      >
        <p class="g-pstyle0">GREENLAND</p>
      </div>
      <div
        id="g-ai3-4"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:31.9179%;margin-top:-10.6px;left:79.29%;width:98px;"
      >
        <p class="g-pstyle1">KAZAKHSTAN</p>
      </div>
      <div
        id="g-ai3-5"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:40.5495%;margin-top:-10.6px;right:39.4047%;width:71px;"
      >
        <p class="g-pstyle2">NORWAY</p>
      </div>
      <div
        id="g-ai3-6"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:40.76%;margin-top:-10.6px;left:74.0694%;margin-left:-35px;width:70px;"
      >
        <p class="g-pstyle3">Moscow</p>
      </div>
      <div
        id="g-ai3-7"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:46.2337%;margin-top:-10.6px;left:73.2012%;width:74px;"
      >
        <p class="g-pstyle1">BELARUS</p>
      </div>
      <div
        id="g-ai3-8"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:48.5495%;margin-top:-10.6px;left:51.6769%;margin-left:-35.5px;width:71px;"
      >
        <p class="g-pstyle0">ICELAND</p>
      </div>
      <div
        id="g-ai3-9"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:52.339%;margin-top:-10.6px;left:29.15%;margin-left:-34.5px;width:69px;"
      >
        <p class="g-pstyle0">CANADA</p>
      </div>
      <div
        id="g-ai3-10"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:55.2863%;margin-top:-19.6px;left:14.6303%;margin-left:-33px;width:66px;"
      >
        <p class="g-pstyle0">UNITED</p>
        <p class="g-pstyle0">STATES</p>
      </div>
      <div
        id="g-ai3-11"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:53.3916%;margin-top:-10.6px;left:61.0447%;margin-left:-19.5px;width:39px;"
      >
        <p class="g-pstyle0">UK</p>
      </div>
      <div
        id="g-ai3-12"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:53.6021%;margin-top:-10.6px;left:75.4186%;margin-left:-36.5px;width:73px;"
      >
        <p class="g-pstyle0">UKRAINE</p>
      </div>
      <div
        id="g-ai3-13"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:60.5495%;margin-top:-10.6px;right:44.1135%;width:71px;"
      >
        <p class="g-pstyle2">IRELAND</p>
      </div>
      <div
        id="g-ai3-14"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:61.3916%;margin-top:-10.6px;left:87.5589%;width:49px;"
      >
        <p class="g-pstyle1">IRAN</p>
      </div>
      <div
        id="g-ai3-15"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:70.6548%;margin-top:-10.6px;left:59.2197%;margin-left:-33.5px;width:67px;"
      >
        <p class="g-pstyle0">FRANCE</p>
      </div>
      <div
        id="g-ai3-16"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:76.5495%;margin-top:-10.6px;left:62.7536%;margin-left:-27.5px;width:55px;"
      >
        <p class="g-pstyle0">SPAIN</p>
      </div>
      <div
        id="g-ai3-17"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:78.8653%;margin-top:-19.6px;left:89.7929%;margin-left:-31.5px;width:63px;"
      >
        <p class="g-pstyle0">SAUDI</p>
        <p class="g-pstyle0">ARABIA</p>
      </div>
      <div
        id="g-ai3-18"
        class="g-lg g-aiAbs g-aiPointText"
        style="top:80.76%;margin-top:-10.6px;left:75.992%;margin-left:-25.5px;width:51px;"
      >
        <p class="g-pstyle0">ITALY</p>
      </div>
    </div>
  {/if}
  <!-- Artboard: xl -->
  {#if width && width >= 1200}
    <div id="g-graphic-xl" class="g-artboard" style="">
      <div style="padding: 0 0 50.75% 0;"></div>
      <div
        id="g-graphic-xl-img"
        class="g-aiImg"
        style="{`background-image: url(${chartXl});`}"
      ></div>
      <div
        id="g-ai4-1"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:27.1938%;margin-top:-10.6px;left:63.4365%;margin-left:-36px;width:72px;"
      >
        <p class="g-pstyle0">FINLAND</p>
      </div>
      <div
        id="g-ai4-2"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:28.5074%;margin-top:-10.6px;left:72.4779%;margin-left:-31.5px;width:63px;"
      >
        <p class="g-pstyle0">RUSSIA</p>
      </div>
      <div
        id="g-ai4-3"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:29.821%;margin-top:-10.6px;left:46.6513%;margin-left:-46px;width:92px;"
      >
        <p class="g-pstyle0">GREENLAND</p>
      </div>
      <div
        id="g-ai4-4"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:31.6273%;margin-top:-10.6px;left:79.93%;width:98px;"
      >
        <p class="g-pstyle1">KAZAKHSTAN</p>
      </div>
      <div
        id="g-ai4-5"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:40.6585%;margin-top:-10.6px;right:39.3056%;width:71px;"
      >
        <p class="g-pstyle2">NORWAY</p>
      </div>
      <div
        id="g-ai4-6"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:40.8227%;margin-top:-10.6px;left:73.6128%;margin-left:-35px;width:70px;"
      >
        <p class="g-pstyle3">Moscow</p>
      </div>
      <div
        id="g-ai4-7"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:47.8834%;margin-top:-10.6px;left:71.2465%;width:74px;"
      >
        <p class="g-pstyle1">BELARUS</p>
      </div>
      <div
        id="g-ai4-8"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:48.376%;margin-top:-10.6px;left:51.7432%;margin-left:-35.5px;width:71px;"
      >
        <p class="g-pstyle0">ICELAND</p>
      </div>
      <div
        id="g-ai4-9"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:52.6453%;margin-top:-10.6px;left:29.1449%;margin-left:-34.5px;width:69px;"
      >
        <p class="g-pstyle0">CANADA</p>
      </div>
      <div
        id="g-ai4-10"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:53.6306%;margin-top:-10.6px;left:75.5426%;margin-left:-36.5px;width:73px;"
      >
        <p class="g-pstyle0">UKRAINE</p>
      </div>
      <div
        id="g-ai4-11"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:53.7947%;margin-top:-10.6px;left:60.8327%;margin-left:-19.5px;width:39px;"
      >
        <p class="g-pstyle0">UK</p>
      </div>
      <div
        id="g-ai4-12"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:55.2726%;margin-top:-19.6px;left:14.5826%;margin-left:-33px;width:66px;"
      >
        <p class="g-pstyle0">UNITED</p>
        <p class="g-pstyle0">STATES</p>
      </div>
      <div
        id="g-ai4-13"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:54.1231%;margin-top:-10.6px;left:69.7159%;margin-left:-35px;width:70px;"
      >
        <p class="g-pstyle0">POLAND</p>
      </div>
      <div
        id="g-ai4-14"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:57.8998%;margin-top:-10.6px;left:67.4399%;margin-left:-38.5px;width:77px;"
      >
        <p class="g-pstyle0">GERMANY</p>
      </div>
      <div
        id="g-ai4-15"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:60.8556%;margin-top:-10.6px;right:44.0157%;width:71px;"
      >
        <p class="g-pstyle2">IRELAND</p>
      </div>
      <div
        id="g-ai4-16"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:61.6766%;margin-top:-10.6px;left:76.0595%;margin-left:-37.5px;width:75px;"
      >
        <p class="g-pstyle0">ROMANIA</p>
      </div>
      <div
        id="g-ai4-17"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:61.8407%;margin-top:-10.6px;left:87.7238%;width:49px;"
      >
        <p class="g-pstyle1">IRAN</p>
      </div>
      <div
        id="g-ai4-18"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:66.7668%;margin-top:-10.6px;left:64.1171%;margin-left:-33.5px;width:67px;"
      >
        <p class="g-pstyle0">FRANCE</p>
      </div>
      <div
        id="g-ai4-19"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:68.4089%;margin-top:-10.6px;left:68.6444%;margin-left:-25.5px;width:51px;"
      >
        <p class="g-pstyle0">ITALY</p>
      </div>
      <div
        id="g-ai4-20"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:78.0969%;margin-top:-19.6px;left:89.3184%;margin-left:-31.5px;width:63px;"
      >
        <p class="g-pstyle0">SAUDI</p>
        <p class="g-pstyle0">ARABIA</p>
      </div>
      <div
        id="g-ai4-21"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:78.7537%;margin-top:-10.6px;left:62.5553%;margin-left:-27.5px;width:55px;"
      >
        <p class="g-pstyle0">SPAIN</p>
      </div>
      <div
        id="g-ai4-22"
        class="g-xl g-aiAbs g-aiPointText"
        style="top:79.0822%;margin-top:-10.6px;left:79.6558%;margin-left:-33.5px;width:67px;"
      >
        <p class="g-pstyle0">GREECE</p>
      </div>
    </div>
  {/if}
</div>

<!-- End ai2html - 2023-08-23 14:09 -->

<!-- Generated by ai2html v0.100.0 - 2023-08-23 14:09 -->

<!-- ai file: graphic.ai -->
<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
  #g-graphic-box,
  #g-graphic-box .g-artboard {
    margin: 0 auto;
  }
  #g-graphic-box p {
    margin: 0;
  }
  #g-graphic-box .g-aiAbs {
    position: absolute;
  }
  #g-graphic-box .g-aiImg {
    position: absolute;
    top: 0;
    display: block;
    width: 100% !important;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
  }
  #g-graphic-box .g-aiPointText p {
    white-space: nowrap;
  }
  #g-graphic-xs {
    position: relative;
    overflow: hidden;
  }
  #g-graphic-xs p {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 300;
    line-height: 16px;
    opacity: 1;
    letter-spacing: 0em;
    font-size: 14px;
    text-align: left;
    color: rgb(0, 0, 0);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    height: auto;
    position: static;
  }
  #g-graphic-xs .g-pstyle0 {
    font-weight: 700;
    line-height: 24px;
    font-size: 22px;
  }
  #g-graphic-xs .g-pstyle1 {
    font-weight: 200;
    height: 16px;
    font-size: 12px;
    text-align: center;
  }
  #g-graphic-xs .g-pstyle2 {
    font-weight: 200;
    height: 16px;
    font-size: 12px;
    text-align: right;
  }
  #g-graphic-xs .g-pstyle3 {
    font-weight: 600;
    height: 16px;
    font-size: 12px;
    text-align: center;
  }
  #g-graphic-xs .g-pstyle4 {
    line-height: 13px;
    font-size: 12px;
  }
  #g-graphic-xs .g-pstyle5 {
    line-height: 14px;
    padding-bottom: 4px;
    font-size: 12px;
  }
  #g-graphic-sm {
    position: relative;
    overflow: hidden;
  }
  #g-graphic-sm p {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 200;
    line-height: 16px;
    height: auto;
    opacity: 1;
    letter-spacing: 0em;
    font-size: 12px;
    text-align: left;
    color: rgb(0, 0, 0);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    position: static;
  }
  #g-graphic-sm .g-pstyle0 {
    height: 16px;
  }
  #g-graphic-sm .g-pstyle1 {
    height: 16px;
    text-align: center;
  }
  #g-graphic-sm .g-pstyle2 {
    height: 16px;
    text-align: right;
  }
  #g-graphic-sm .g-pstyle3 {
    font-weight: 600;
    height: 16px;
    text-align: center;
  }
  #g-graphic-sm .g-pstyle4 {
    font-weight: 300;
    line-height: 13px;
  }
  #g-graphic-sm .g-pstyle5 {
    font-weight: 300;
    line-height: 14px;
    padding-bottom: 4px;
  }
  #g-graphic-md {
    position: relative;
    overflow: hidden;
  }
  #g-graphic-md p {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 300;
    line-height: 16px;
    opacity: 1;
    letter-spacing: 0em;
    font-size: 14px;
    text-align: left;
    color: rgb(0, 0, 0);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    height: auto;
    position: static;
  }
  #g-graphic-md .g-pstyle0 {
    font-weight: 200;
    height: 16px;
    font-size: 12px;
  }
  #g-graphic-md .g-pstyle1 {
    font-weight: 200;
    height: 16px;
    font-size: 12px;
    text-align: center;
  }
  #g-graphic-md .g-pstyle2 {
    font-weight: 200;
    height: 16px;
    font-size: 12px;
    text-align: right;
  }
  #g-graphic-md .g-pstyle3 {
    font-weight: 600;
    height: 16px;
    font-size: 12px;
    text-align: center;
  }
  #g-graphic-md .g-pstyle4 {
    line-height: 13px;
    font-size: 12px;
  }
  #g-graphic-md .g-pstyle5 {
    line-height: 14px;
    padding-bottom: 4px;
    font-size: 12px;
  }
  #g-graphic-lg {
    position: relative;
    overflow: hidden;
  }
  #g-graphic-lg p {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 200;
    line-height: 18px;
    height: auto;
    opacity: 1;
    letter-spacing: 0em;
    font-size: 14px;
    text-align: left;
    color: rgb(0, 0, 0);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    position: static;
  }
  #g-graphic-lg .g-pstyle0 {
    height: 18px;
    text-align: center;
  }
  #g-graphic-lg .g-pstyle1 {
    height: 18px;
  }
  #g-graphic-lg .g-pstyle2 {
    height: 18px;
    text-align: right;
  }
  #g-graphic-lg .g-pstyle3 {
    font-weight: 600;
    height: 18px;
    text-align: center;
  }
  #g-graphic-lg .g-pstyle4 {
    font-weight: 300;
    line-height: 13px;
    font-size: 12px;
  }
  #g-graphic-lg .g-pstyle5 {
    font-weight: 300;
    line-height: 14px;
    padding-bottom: 4px;
    font-size: 12px;
  }
  #g-graphic-xl {
    position: relative;
    overflow: hidden;
  }
  #g-graphic-xl p {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 200;
    line-height: 18px;
    height: auto;
    opacity: 1;
    letter-spacing: 0em;
    font-size: 14px;
    text-align: left;
    color: rgb(0, 0, 0);
    text-transform: none;
    padding-bottom: 0;
    padding-top: 0;
    mix-blend-mode: normal;
    font-style: normal;
    position: static;
  }
  #g-graphic-xl .g-pstyle0 {
    height: 18px;
    text-align: center;
  }
  #g-graphic-xl .g-pstyle1 {
    height: 18px;
  }
  #g-graphic-xl .g-pstyle2 {
    height: 18px;
    text-align: right;
  }
  #g-graphic-xl .g-pstyle3 {
    font-weight: 600;
    height: 18px;
    text-align: center;
  }

  /* Custom CSS */
</style>
