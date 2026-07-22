<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import FaqBox from './FaqBox.svelte';
  import BodyText from '../BodyText/BodyText.svelte';

  const { Story } = defineMeta({
    title: 'Components/Text elements/FaqBox',
    component: FaqBox,
    tags: ['autodocs'],
    argTypes: {
      width: {
        control: 'select',
        options: ['narrower', 'narrow', 'normal', 'wide', 'wider', 'widest'],
      },
    },
  });

  const faq = [
    {
      q: "Why doesn't your data always match other sources?",
      a: 'Different organisations use different methods, models and reporting windows, so small differences between good-faith estimates are expected. We document our own choices in the methodology.',
    },
    {
      q: 'How often is this updated?',
      a: 'The figures refresh automatically throughout the day as new data is published. The timestamp at the top of the page shows the most recent update.',
    },
    {
      q: 'Where can I read more about the methodology?',
      a: 'Our full methodology — including sources and known limitations — is documented [here](https://www.reuters.com/). It explains how each number is calculated.',
    },
  ];
</script>

<Story asChild name="Demo">
  <BodyText
    text="Bacon ipsum dolor amet turducken buffalo beef ribs bresaola pancetta ribeye pork belly doner hamburger biltong cupim porchetta chuck ham tenderloin."
  />
  <FaqBox {faq} />
</Story>

<!-- A custom heading and a narrower column. -->
<Story
  name="Custom title"
  tags={['!autodocs', '!dev']}
  args={{ title: 'Questions readers ask', width: 'narrow', faq }}
/>

<!-- Empty (or all-malformed) input renders nothing — the section is omitted. -->
<Story name="Empty" tags={['!autodocs', '!dev']} args={{ faq: [] }} />
