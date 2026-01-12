<script lang="ts">
  import BodyText from '../../BodyText/BodyText.svelte';
  import ScrollerBase from '../../ScrollerBase/ScrollerBase.svelte';
  import Lottie from '../Lottie.svelte';
  import LottieSample from '../lottie/themesLottie.zip?url';

  // Optional: Bind your own variables to use them in your code.
  let count = $state(1);
  let index = $state(0);
  let offset = $state(0);
  let progress = $state(0);
  let top = $state(0);
  let threshold = $state(0.5);
  let bottom = $state(1);

  const dummyText = `Greetings, earthling. This placeholder text is running in debug mode. All bugs have been upgraded to features, and all features downgraded to TODOs. If you find yourself reading this, you are now the sysadmin of your own destiny. 
  
  Remember the network is down because someone tripped over the Ethernet cable.  Keep calm and RTFM before summoning the wizard. In case of panic, type 'kill -9' and hope for the best. End of line. Insert witty comment here.`;
</script>

<BodyText text={dummyText} />

<ScrollerBase
  {top}
  {threshold}
  {bottom}
  bind:count
  bind:index
  bind:offset
  bind:progress
  query="div.step-foreground-container"
>
  {#snippet backgroundSnippet()}
    <Lottie src={LottieSample} {progress} height="100lvh" showDebugInfo />
  {/snippet}
  {#snippet foregroundSnippet()}
    <div class="step-foreground-container"><h3>Step 1</h3></div>
    <div class="step-foreground-container"><h3>Step 2</h3></div>
    <div class="step-foreground-container"><h3>Step 3</h3></div>
    <div class="step-foreground-container"><h3>Step 4</h3></div>
    <div class="step-foreground-container"><h3>Step 5</h3></div>
  {/snippet}
</ScrollerBase>

<BodyText text={dummyText} />

<style lang="scss">
  @use '../../../scss/mixins' as mixins;

  .step-foreground-container {
    height: 100lvh;
    width: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      width: 100%;
      background-color: antiquewhite;
      text-align: center;
    }
  }
</style>
