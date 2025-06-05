<script lang="ts">
  import ScrollyVideo from '../ScrollyVideo.svelte';
  import Foreground from '../Foreground.svelte';
  import Drone from '../videos/drone.mp4';
  import Headline from '../../Headline/Headline.svelte';
</script>

<ScrollyVideo
  id="alps-scrolly"
  height="800svh"
  src={Drone}
  useWebCodecs={true}
  showDebugInfo
>
  <Foreground startTime={0} endTime={2}>
    <Headline
      class="custom-headline"
      hed="The Alps"
      dek="Where better to start than with the Matterhorn?"
      section={'Reuters Graphics'}
      authors={['Jane Doe']}
      publishTime={new Date('2020-01-01').toISOString()}
      hedSize="bigger"
    />
  </Foreground>
  <Foreground
    startTime={3}
    endTime={7}
    backgroundColor="rgba(0, 0, 0, 0.8)"
    text={'#### The Alps\n\nThe Alps stretch across eight countries: France, Switzerland, Italy, Monaco, Liechtenstein, Austria, Germany, and Slovenia, covering about 1,200 kilometers (750 miles).'}
    position="bottom center"
  ></Foreground>
  <Foreground
    startTime={9}
    endTime={12}
    backgroundColor="rgba(0, 0, 0, 0.8)"
    text={"Mont Blanc, standing at 4,809 meters (15,777 feet), is the highest peak in the Alps and Western Europe, though there's ongoing debate between France and Italy about exactly where the summit lies."}
    position="bottom center"
  ></Foreground>
  <Foreground
    startTime={16}
    endTime={20}
    backgroundColor="rgba(0, 0, 0, 0.8)"
    text={'#### History\n\nThe Alps were formed around **65 million years** ago when the African and Eurasian tectonic plates collided, pushing the land upward.Over 14 million people live in the Alpine region, with tourism supporting approximately 120 million visitors annually.'}
    position="bottom center"
  ></Foreground>
</ScrollyVideo>

<style lang="scss">
  :global(.custom-headline *) {
    color: white;
    text-shadow: 0 0 10px black;
  }

  :global {
    #alps-scrolly .foreground-text {
      * {
        color: white;
      }
    }
  }
</style>
