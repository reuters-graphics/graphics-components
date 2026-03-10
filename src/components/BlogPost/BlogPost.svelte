<script lang="ts">
  interface Props {
    /** Title of the blog post */
    title: string;
    /**
     * A sluggable title of the blog post.
     *
     * **Important:** Do not change this title after publishing the post. Changes will break
     * published links to the post.
     */
    slugTitle: string;
    /**
     * Base path prepended to the copied URL, e.g. "/graphics", usually gotten from base store in SvelteKit.
     */
    base: string;
    /** Array of author names, which will be slugified to create links to Reuters author pages */
    authors: string[];
    /** Publish time as a datetime string. */
    publishTime: string;
    /** Update time as a datetime string. */
    updateTime?: string;
    /** Add an id to target post headline with custom CSS. */
    id?: string;
    /** Add extra classes to target post headline with custom CSS. */
    cls?: string;
    /**
     * If the post is the last on the page, remove the dividing rule used to separate posts.
     */
    isLastPost?: boolean;
    children?: import('svelte').Snippet;
  }

  let {
    title = 'Reuters Graphics blog post',
    slugTitle = 'Reuters Graphics blog post',
    base = '',
    authors = [],
    publishTime = '',
    updateTime = '',
    id = '',
    cls = '',
    isLastPost = false,
    children,
  }: Props = $props();

  import PostHeadline from './PostHeadline.svelte';
  import { slugify } from '../../utils';
  import { getShortDate } from './utils';

  let shortPubDate = $derived(getShortDate(publishTime));
</script>

<article id={slugify(slugTitle)} class="post-anchor">
  <PostHeadline
    hed={title}
    sluggableHed={slugTitle}
    {base}
    {authors}
    {publishTime}
    {updateTime}
    {id}
    {cls}
  />
  <a href="{base}/{shortPubDate}/{slugify(slugTitle)}/" hidden>
    {title}
  </a>
  {@render children?.()}
</article>

{#if !isLastPost}
  <div class="divider"></div>
{/if}

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .divider {
    height: 1px;
    max-width: calc(mixins.$column-width-normal * 0.9);
    width: calc(100% - 40px);
    margin: 4rem auto;
    border-top: solid 1px var(--tr-muted-grey);
  }
  .post-anchor {
    scroll-margin-top: 125px;
    @media (min-width: 768px) {
      scroll-margin-top: 150px;
    }
    @media (min-width: 1200px) {
      scroll-margin-top: 175px;
    }
  }
</style>
