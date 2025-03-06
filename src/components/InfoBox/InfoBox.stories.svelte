<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import InfoBox from './InfoBox.svelte';
  import BodyText from '../BodyText/BodyText.svelte';

  const { Story } = defineMeta({
    title: 'Components/Text elements/InfoBox',
    component: InfoBox,
    tags: ['autodocs'],
    argTypes: {
      theme: {
        control: 'select',
        options: ['light', 'dark'],
      },
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  });
</script>

<Story name="Demo">
  <BodyText
    text="If you haven't seen Game of Thrones, go watch it right now. If you have then you'll totally get why this Hodor themed lorem ipsum generator is just brilliant."
  />
  <InfoBox
    title="About this data"
    text={'Reuters is collecting daily COVID-19 infections and deaths data for 240 countries and territories around the world, updated regularly throughout each day. \n\n Every country reports those figures a little differently and, inevitably, misses undiagnosed infections and deaths. With this project we are focusing on the trends within countries as they try to contain the virus’ spread, whether they are approaching or past peak infection rates, or if they are seeing a resurgence of infections or deaths.'}
    notes={'[Read more about our methodology](https://www.reuters.com/world-coronavirus-tracker-and-maps/en/methodology/)'}
  />
  <BodyText
    text="In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size."
  />
</Story>
<Story
  name="List"
  tags={['!autodocs']}
  args={{
    title: 'What you need to know about the war',
    text: "- **Food crisis**: [Russia's invasion of Ukraine](#) in late February dramatically worsened the outlook for already inflated global food prices. \n- **Under fire**: Civillian homes destroyed in the conflict and Russia accused of war crimes. \n- **Nordstream sabotage**: A series of clandestine bombings and subsequent underwater gas leaks occurred on the Nord Stream 1 and Nord Stream 2 natural gas pipelines. ",
  }}
></Story>
