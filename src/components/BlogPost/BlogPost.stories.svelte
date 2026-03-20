<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import BlogPost from './BlogPost.svelte';
  import BodyText from '../BodyText/BodyText.svelte';

  const { Story } = defineMeta({
    title: 'Components/Blog/BlogPost',
    component: BlogPost,
  });
</script>

<Story name="Demo">
  <BlogPost
    title="Iran fires ballistic missiles at Israel in major escalation"
    slugTitle="Iran fires ballistic missiles at Israel in major escalation"
    authors={['John Smith', 'Jane Doe']}
    publishTime="2024-10-01T18:30:00Z"
    updateTime="2024-10-01T21:45:00Z"
    base=""
  >
    <BodyText
      text="Iran launched a barrage of ballistic missiles at Israel on Tuesday in its first direct attack on Israeli territory, marking a significant escalation in the conflict gripping the Middle East."
    />
    <BodyText
      text="The attack, which Iran said was in retaliation for Israeli strikes that killed senior Hezbollah and Hamas leaders, prompted Israel and the United States to vow a response."
    />
  </BlogPost>
</Story>
