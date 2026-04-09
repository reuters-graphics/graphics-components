<script module lang="ts">
  import slug from 'slugify';

  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Byline from './Byline.svelte';

  const { Story } = defineMeta({
    title: 'Components/Text elements/Byline',
    component: Byline,
    tags: ['autodocs'],
    argTypes: {
      align: {
        control: 'select',
        options: ['auto', 'center'],
      },
    },
  });

  let authors = [
    'Dea Bankova',
    'Prasanta Kumar Dutta',
    'Anurag Rao',
    'Mariano Zafra',
  ];
  const formatTime = (datetime: string) =>
    new Date(datetime).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    });

  let publishTime = '2021-09-12T00:00:00Z';

  const getAuthorPageUrl = (author: string): string => {
    const authorSlug = slug(author.trim(), { lower: true });
    return `https://www.reuters.com/authors/${authorSlug}/`;
  };

  let locale = 'es';
</script>

<Story
  name="Demo"
  args={{
    authors,
    publishTime: new Date('2021-09-12').toISOString(),
    updateTime: new Date('2021-09-12T13:57:00').toISOString(),
  }}
/>

<Story name="Customised" tags={['!autodocs', '!dev']}>
  <Byline publishTime="2021-09-12T00:00:00Z" updateTime="2021-09-12T13:57:00Z">
    {#snippet byline()}
      <strong>BY REUTERS GRAPHICS</strong>
    {/snippet}
    {#snippet published()}
      PUBLISHED on some custom date and time
    {/snippet}
    {#snippet updated()}
      <em>Updated every 5 minutes</em>
    {/snippet}
  </Byline>
</Story>

<!-- Translation snippets -->
{#snippet esByline()}
  Por
  {#each authors as author, i}
    <a
      class="no-underline whitespace-nowrap text-primary font-bold"
      href={getAuthorPageUrl(author)}
      rel="author"
    >
      {author.trim()}</a
    >{#if authors.length > 1 && i < authors.length - 2},{/if}
    {#if authors.length > 1 && i === authors.length - 2}y&nbsp;{/if}
  {/each}
{/snippet}

{#snippet esPublished()}
  Publicado <time datetime="2026-04-08T10:00:00.000Z">
    {new Date(publishTime).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}&nbsp;&nbsp;{formatTime(publishTime)}</time
  >
{/snippet}

<Story name="Translation">
  In locale = `es`:
  <Byline
    publishTime="2021-09-12T00:00:00Z"
    {authors}
    byline={locale === 'es' ? esByline : undefined}
    published={locale === 'es' ? esPublished : undefined}
  ></Byline>

  In locale = `en`:
  <Byline
    publishTime="2021-09-12T00:00:00Z"
    {authors}
    byline={undefined}
    published={undefined}
  />
</Story>

<Story
  name="Custom author page"
  exportName="CustomAuthorPage"
  tags={['!autodocs', '!dev']}
  args={{
    authors,
    publishTime: '2021-09-12T00:00:00Z',
    updateTime: '2021-09-12T13:57:00Z',
    getAuthorPage: (author: string) => {
      return `mailto:${author.replace(' ', '')}@example.com`;
    },
  }}
/>
