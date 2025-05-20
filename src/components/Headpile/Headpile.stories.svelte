<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Headpile from './Headpile.svelte';

  import hed1 from './images/abdel.png';
  import hed2 from './images/hemedti.png';

  const { Story } = defineMeta({
    title: 'Components/Text elements/Headpile',
    component: Headpile,
    argTypes: {},
  });

  const defaultArgs = [
    {
      name: 'General Abdel Fattah al-Burhan',
      role: "Sudan's Sovereign Council Chief and military commander",
      img: hed1,
      text: 'Burhan was little known in public life until taking part in the coup against Bashir in 2019 after a popular uprising against his rule. In August 2019, his role as de facto head of state was affirmed when he became head of the Sovereign Council, a body comprising civilian and military leaders formed to oversee the transition towards elections.',
      // colour: '#957caa',
    },
    {
      name: 'General Mohamed Hamdan Dagalo',
      role: 'Leader of the Sudanese paramilitary Rapid Support Forces (RSF)',
      img: hed2,
      text: "Popularly known as Hemedti, Dagalo rose from lowly beginnings as a camel trader to head a widely feared Arab militia that crushed a revolt in Darfur, winning him influence and eventually a role as Sudan's former deputy head of state.\r\n\r\nOver the past decade, he has been a key figure in Sudanese politics, aiding in the ousting of Bashir in 2019 and suppressing pro-democracy protests. As the country limped from one economic crisis to another, Hemedti became one of Sudan’s richest men, exporting gold from mines in Darfur seized by his fighters.",
      colour: '#afb776',
    },
  ];
</script>

<Story
  name="Demo"
  args={{
    figures: defaultArgs,
  }}
/>
