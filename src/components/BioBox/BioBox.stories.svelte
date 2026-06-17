<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import BioBox from './BioBox.svelte';
  import type { Author } from './types';

  const authors: Author[] = [
    {
      name: 'Ben Welsh',
      title: 'News Applications Editor',
      bio: 'Ben Welsh leads the development of dashboards, databases and other automated systems.',
      imageUrl:
        'https://www.reuters.com/resizer/v2/https%3A%2F%2Fauthor-service-images-prod-us-east-1.publishing.aws.arc.pub%2Freuters%2F23a41163-d18c-4871-be7a-d6167693bd29.jpg?auth=b4deb5011d667930faf2b6a26a17a7397b5691c2178fc1083462d67dc8996475&height=120&width=120&quality=80&smart=true',
      links: [
        { platform: 'email', url: 'ben.welsh@thomsonreuters.com' },
        { platform: 'x', url: 'https://x.com/palewire' },
        { platform: 'linkedin', url: 'https://www.linkedin.com/in/palewire' },
        { platform: 'link', url: 'https://palewi.re/who-is-ben-welsh/' },
      ],
    },
    {
      name: 'Casey Miller',
      title: 'News Applications Developer',
      bio: 'Casey Miller develops maps, dashboards and other automated systems.',
      imageUrl:
        'https://www.reuters.com/resizer/v2/https%3A%2F%2Fauthor-service-images-prod-us-east-1.publishing.aws.arc.pub%2Freuters%2F1c168c03-8c8b-4e4a-9458-f65a2749b962.png?auth=3f19fad9ea147f79e280668358df9e9ab011a136cd4a8a013502d5d0a06cf42d&height=120&width=120&quality=80&smart=true',
      links: [{ platform: 'email', url: 'casey.miller@thomsonreuters.com' }],
    },
  ];

  const { Story } = defineMeta({
    title: 'Components/Page furniture/BioBox',
    component: BioBox,
  });
</script>

<Story name="Demo" args={{ authors }} />

<Story
  name="Single author"
  exportName="SingleAuthor"
  args={{ authors: [authors[1]] }}
/>

<Story
  name="Logo fallback"
  exportName="LogoFallback"
  args={{
    authors: [
      {
        name: 'Reuters Graphics',
        title: 'News Applications Team',
        bio: 'When no avatar is provided, the Reuters Kinesis logo is shown instead.',
        links: [{ platform: 'link', url: 'https://www.reuters.com/graphics/' }],
      },
    ],
  }}
/>
