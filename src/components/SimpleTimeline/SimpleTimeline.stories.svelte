<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SimpleTimeline from './SimpleTimeline.svelte';

  const { Story } = defineMeta({
    title: 'Components/Text elements/SimpleTimeline',
    component: SimpleTimeline,
    argTypes: {
      symbolColour: { control: 'color' },
      dateColour: { control: 'color' },
    },
  });
</script>

<script lang="ts">
  const dates = [
    {
      date: 'May 18',
      events: [
        {
          title:
            'Mariupol defenders surrender to Russia but their fate is uncertain',
          titleLink:
            'https://www.reuters.com/world/europe/ukrainian-troops-evacuate-mariupol-ceding-control-russia-2022-05-17/',
          context:
            "More than 250 Ukrainian fighters surrendered to Russian forces at the Azovstal steelworks in Mariupol after weeks of desperate resistance, bringing an end to the most devastating siege of Russia's war in Ukraine and allowing President Vladimir Putin to claim a rare victory in his faltering campaign.",
        },
      ],
    },
    {
      date: 'May 10',
      events: [
        {
          title:
            'U.S. House passes $40 bln bill to bolster Ukraine against Russian invasion',
          context:
            'The U.S. House of Representatives approved more than $40 billion more aid for Ukraine on Tuesday, as Congress races to keep military aid flowing and boost the government in Kyiv as it grapples with the Russian invasion.',
        },
      ],
    },
    {
      date: 'Mar. 3',
      events: [
        {
          title:
            '"We are being destroyed," city council of Ukraine\'s Mariupol says',
          context:
            'Mariupol city council said Russian forces were constantly and deliberately shelling [vital civilian infrastructure](https://google.com) in the southeastern Ukrainian port, leaving it without water, heating or power and preventing bringing supplies or evacuating people.',
        },
      ],
    },
    {
      date: 'Feb. 27',
      events: [
        {
          title: 'Russians push into Kharkiv',
          titleLink:
            'https://www.reuters.com/world/europe/western-allies-expel-key-russian-banks-global-system-ukraine-fights-2022-02-27/',
        },
        {
          title:
            'Human rights groups and Ukrainian ambassador accuse Russia of using cluster and vacuum bombs',
        },
      ],
    },
    {
      date: 'Feb. 25',
      events: [
        {
          title: 'NATO deploys more troops',
          context:
            'NATO leaders said on Friday they were deploying more troops to eastern Europe after Russia invaded Ukraine, saying that Moscow had lied about its intentions.',
        },
        {
          title: 'Invasion continues',
          context:
            'Missiles pounded the Ukrainian capital as Russian forces pressed their advance and Ukrainian President Volodymyr Zelenskiy pleaded with the international community to do more, saying sanctions announced so far were not enough.\n\nRussian forces battered Ukrainian cities with artillery and cruise missiles but a defiant Zelenskiy said the capital Kyiv remained in Ukrainian hands.',
        },
      ],
    },
    {
      date: 'Feb. 24',
      events: [
        {
          title: 'Russia invades Ukraine',
        },
      ],
    },
  ];
</script>

<Story
  name="Demo"
  args={{
    dates,
  }}
/>
