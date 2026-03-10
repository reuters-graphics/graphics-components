<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import BlogTOC from './BlogTOC.svelte';

  const { Story } = defineMeta({
    title: 'Components/Blog/BlogTOC',
    component: BlogTOC,
  });

  const posts = [
    {
      title: 'Iran fires ballistic missiles at Israel in major escalation',
      slugTitle: 'Iran fires ballistic missiles at Israel in major escalation',
      publishTime: '2024-10-01T18:30:00Z',
    },
    {
      title: 'Israel vows response as world leaders call for restraint',
      slugTitle: 'Israel vows response as world leaders call for restraint',
      publishTime: '2024-10-02T09:15:00Z',
    },
    {
      title: 'Oil prices surge amid fears of wider Middle East conflict',
      slugTitle: 'Oil prices surge amid fears of wider Middle East conflict',
      publishTime: '2024-10-02T14:00:00Z',
    },
    {
      title:
        'UN Security Council holds emergency session on Iran-Israel crisis',
      slugTitle:
        'UN Security Council holds emergency session on Iran-Israel crisis',
      publishTime: '2024-10-03T11:00:00Z',
    },
  ];
</script>

<Story name="Demo" args={{ posts, base: '' }} />
