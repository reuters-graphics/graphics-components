<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { expect, within } from '@storybook/test';
  import Headline from '../components/Headline/Headline.svelte';
  import BodyText from '../components/BodyText/BodyText.svelte';
  import FeaturePhoto from '../components/FeaturePhoto/FeaturePhoto.svelte';
  import GraphicBlock from '../components/GraphicBlock/GraphicBlock.svelte';
  import Video from '../components/Video/Video.svelte';
  import InfoBox from '../components/InfoBox/InfoBox.svelte';
  import EndNotes from '../components/EndNotes/EndNotes.svelte';
  import ShareBar from '../components/ShareBar/ShareBar.svelte';
  import BioBox from '../components/BioBox/BioBox.svelte';
  import ReferralBlock from '../components/ReferralBlock/ReferralBlock.svelte';
  import type { Author } from '../components/BioBox/types';
  import type { ReferralItem } from '../components/ReferralBlock/types';
  import sharkPhoto from '../components/FeaturePhoto/images/shark.jpg';
  import demoVideo from '../components/Video/demo/silent-video.mp4';

  // A "default page" is assembled from a standard set of components inside the
  // `Article` text well. Storybook's global decorator already wraps every story
  // in `Theme` + `Article` (the same furniture the graphics-kit page template
  // provides), so the stories below render just the page *contents* a graphics
  // journalist laces together: a headline, body text, a photo, a graphic, a
  // video, an info box, end notes, a share bar, an author box and a referral
  // block.

  const { Story } = defineMeta({
    title: 'Compositions/Default page',
    parameters: {
      // This is a documentation-only composition, so hide the controls table.
      controls: { disable: true },
      // The page composes a lazy-loaded photo and an autoplaying video. Give
      // Chromatic a beat to settle and freeze animations so visual snapshots
      // are deterministic.
      chromatic: { delay: 300, pauseAnimationAtEnd: true },
    },
  });

  // Smoke-test the composed page: a `play` function turns this story into an
  // interaction test (Interactions panel + test-runner + CI) that fails if any
  // composed component stops rendering its key furniture.
  async function smokeTest({ canvasElement }: { canvasElement: HTMLElement }) {
    const canvas = within(canvasElement);
    // The headline opens the story.
    await expect(
      canvas.getByText('A default graphics page')
    ).toBeInTheDocument();
    // The share toolbar renders its buttons.
    await expect(canvas.getByTestId('ShareBar')).toBeInTheDocument();
    // The author bio box renders below the share bar.
    await expect(
      canvas.getByText(
        'Dea Bankova builds charts, maps and dashboards for Reuters stories.'
      )
    ).toBeInTheDocument();
    // The referral block closes the page.
    await expect(canvas.getByText('Read next')).toBeInTheDocument();
  }

  // Everything the page renders is consolidated into a single `content` object,
  // mirroring how a real graphics-kit project drives its article body from one
  // piece of structured content (e.g. an ArchieML doc or `content.json`). The
  // ordered `blocks` array is the body; the template below just maps over it.
  type ContentBlock =
    | { type: 'text'; text: string }
    | { type: 'photo'; src: string; altText: string; caption: string }
    | { type: 'graphic'; title: string; description: string; notes: string }
    | { type: 'video'; src: string; ariaDescription: string; notes: string };

  interface PageContent {
    hed: string;
    dek: string;
    section: string;
    authors: string[];
    publishTime: string;
    blocks: ContentBlock[];
    infoBox: { title: string; text: string };
    endNotes: { title: string; text: string }[];
    shareUrl: string;
    bioAuthors: Author[];
    referrals: ReferralItem[];
  }

  const content: PageContent = {
    hed: 'A default graphics page',
    dek: 'A standalone headline, dek and byline open the story.',
    section: 'Graphics',
    authors: ['Dea Bankova', 'Mariano Zafra'],
    publishTime: '2026-06-26T00:00:00.000Z',
    blocks: [
      {
        type: 'text',
        text: 'Every Reuters graphic starts the same way: a sharp headline, a clear line of reporting and the right visual in the right place. This page laces the standard kit together so you can feel the rhythm before you build your own.',
      },
      {
        type: 'text',
        text: 'Think of it as a dress rehearsal. The copy is filler and the chart is a placeholder, but the bones are real — the same components, in the same order, you reach for on deadline.',
      },
      {
        type: 'photo',
        src: sharkPhoto,
        altText: 'A great white shark breaks the surface of the water.',
        caption:
          '`FeaturePhoto` places a captioned image in the text well. (c) 2022 Thomson Reuters',
      },
      {
        type: 'text',
        text: 'A strong photo earns its place near the top, setting the scene before the analysis begins. Drop it in at full width or keep it tucked inside the measure — either way the caption and credit ride along underneath.',
      },
      {
        type: 'text',
        text: 'From here the story settles into a steady cadence of reporting. Short paragraphs keep the reader moving; longer ones let an idea breathe. The text well holds the line length at a comfortable measure no matter how wide the screen.',
      },
      {
        type: 'graphic',
        title: 'A graphic goes here',
        description:
          '`GraphicBlock` wraps a chart or map with a title, description and notes, all aligned to the text well.',
        notes:
          'Note: replace this placeholder with an ai2svelte chart or your own visual.',
      },
      {
        type: 'text',
        text: 'The graphic is usually the centre of gravity — the moment the reporting becomes something you can see. The paragraphs around it do the work of setup and payoff, telling the reader what to look for and what it means.',
      },
      {
        type: 'video',
        src: demoVideo,
        ariaDescription: 'A short looping demonstration video.',
        notes: '`Video` embeds a captioned, autoplaying clip in the text well.',
      },
      {
        type: 'text',
        text: 'Motion adds a register that a still frame cannot. A short, silent loop can show a process, a place or a change over time without ever pulling the reader out of the flow of the story.',
      },
      {
        type: 'text',
        text: 'As the piece winds down, the writing zooms back out: what did we learn, why does it matter and where should the reader go next? Then the closing furniture takes over.',
      },
    ],
    infoBox: {
      title: 'About this story',
      text: 'An `InfoBox` sets off supporting context — methodology, a glossary or background — from the main narrative.',
    },
    endNotes: [
      {
        title: 'Sources',
        text: 'Reuters reporting; example reference dataset.',
      },
      { title: 'Edited by', text: 'The Reuters Graphics team' },
    ],
    shareUrl: 'https://www.reuters.com/graphics/example-story/',
    bioAuthors: [
      {
        name: 'Dea Bankova',
        title: 'News Applications Developer',
        bio: 'Dea Bankova builds charts, maps and dashboards for Reuters stories.',
        links: [
          { platform: 'email', url: 'dea.bankova@thomsonreuters.com' },
          { platform: 'x', url: 'https://x.com/reutersgraphics' },
        ],
      },
      {
        name: 'Mariano Zafra',
        title: 'Graphics Editor',
        bio: 'Mariano Zafra leads visual explainers across science and technology.',
        links: [{ platform: 'link', url: 'https://www.reuters.com/graphics/' }],
      },
    ],
    // Manual referrals so the block renders without hitting the Reuters.com API.
    referrals: [
      {
        url: 'https://www.reuters.com/graphics/',
        kicker: 'World',
        title: 'Leaders gather for a summit on shared climate goals',
        imageUrl: 'https://placehold.co/240x240',
        imageAlt: 'Placeholder image',
      },
      {
        url: 'https://www.reuters.com/graphics/',
        kicker: 'Business',
        title: 'Markets edge higher as earnings season gets underway',
        imageUrl: 'https://placehold.co/240x240',
        imageAlt: 'Placeholder image',
      },
      {
        url: 'https://www.reuters.com/graphics/',
        kicker: 'Science',
        title: 'Astronomers spot a surprisingly bright passing comet',
        imageUrl: 'https://placehold.co/240x240',
        imageAlt: 'Placeholder image',
      },
      {
        url: 'https://www.reuters.com/graphics/',
        kicker: 'Technology',
        title: 'Chipmakers race to keep pace with surging AI demand',
        imageUrl: 'https://placehold.co/240x240',
        imageAlt: 'Placeholder image',
      },
    ],
  };
</script>

<script lang="ts">
  import { setTemplate } from '@storybook/addon-svelte-csf';

  // Share one template across every story so the variants below differ only by
  // their parameters (theme, viewport), not by duplicated markup.
  setTemplate(page);
</script>

{#snippet page(
  _args: Record<string, unknown>,
  context: { parameters?: { theme?: string } }
)}
  {@const isDark = context?.parameters?.theme === 'dark'}
  <Headline
    hed={content.hed}
    dek={content.dek}
    section={content.section}
    authors={content.authors}
    publishTime={content.publishTime}
  />

  {#each content.blocks as block}
    {#if block.type === 'text'}
      <BodyText text={block.text} />
    {:else if block.type === 'photo'}
      <FeaturePhoto
        src={block.src}
        altText={block.altText}
        caption={block.caption}
        lazy={false}
      />
    {:else if block.type === 'graphic'}
      <GraphicBlock
        title={block.title}
        description={block.description}
        notes={block.notes}
      >
        <div class="placeholder-graphic" aria-hidden="true">
          Your chart or map
        </div>
      </GraphicBlock>
    {:else if block.type === 'video'}
      <Video
        src={block.src}
        ariaDescription={block.ariaDescription}
        notes={block.notes}
        playVideoWhenInView={false}
      />
    {/if}
  {/each}

  <InfoBox
    title={content.infoBox.title}
    text={content.infoBox.text}
    theme={isDark ? 'dark' : 'light'}
  />

  <EndNotes notes={content.endNotes} />

  <ShareBar url={content.shareUrl} headline={content.hed} />

  <BioBox authors={content.bioAuthors} />

  <ReferralBlock heading="Read next" stories={content.referrals} />
{/snippet}

<!-- The standard light-theme page, with a smoke-test play function. -->
<Story name="Demo" exportName="Demo" play={smokeTest} />

<!-- The same composition rendered on the dark theme. -->
<Story
  name="Dark theme"
  exportName="DarkTheme"
  parameters={{ theme: 'dark' }}
/>

<style lang="scss">
  .placeholder-graphic {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 240px;
    border: 1px dashed var(--theme-colour-brand-rules, #d3d3d3);
    border-radius: 4px;
    background: rgb(0 0 0 / 2%);
    color: var(--theme-colour-text-secondary, #666);
    font-size: 0.875rem;
  }
</style>
