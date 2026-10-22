<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { expect, userEvent, within, waitFor } from 'storybook/test';
  import InfoBox from './InfoBox.svelte';
  import BodyText from '../BodyText/BodyText.svelte';

  const fullText = [
    'The first paragraph introduces the data and the period it covers.',
    'The second paragraph explains how the source is collected and checked.',
    'The third paragraph describes the main calculation used in this example.',
    '### How we calculate the estimates\n\nThe final paragraph gives additional detail that readers can reveal when they want it.',
  ].join('\n\n');
  const collapsedText = fullText.split('\n\n').slice(0, 3).join('\n\n');

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

<Story asChild name="Demo">
  <BodyText
    text="Bacon ipsum dolor amet turducken buffalo beef ribs bresaola pancetta ribeye pork belly doner hamburger biltong cupim porchetta chuck ham tenderloin. Turducken bresaola jerky chicken."
  />
  <InfoBox
    title="About this data"
    text={'Reuters is collecting daily COVID-19 infections and deaths data for 240 countries and territories around the world, updated regularly throughout each day. \n\n Every country reports those figures a little differently and, inevitably, misses undiagnosed infections and deaths. With this project we are focusing on the trends within countries as they try to contain the virus’ spread, whether they are approaching or past peak infection rates, or if they are seeing a resurgence of infections or deaths.'}
    notes={'[Read more about our methodology](https://www.reuters.com/world-coronavirus-tracker-and-maps/en/methodology/)'}
  />
  <BodyText
    text="Ham drumstick tail ribeye pancetta, leberkas hamburger chicken spare ribs buffalo jerky sausage ground round meatball. Leberkas kevin short loin, tri-tip shank spare ribs buffalo beef pork belly corned beef chislic tongue."
  />
</Story>

<Story
  name="Expandable"
  asChild
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const readMore = canvas.getByRole('button', { name: 'Read more' });

    await expect(readMore).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(readMore);

    let showLess = canvas.getByRole('button', { name: 'Show less' });
    await expect(showLess).toHaveAttribute('aria-expanded', 'true');
    await waitFor(() =>
      expect(
        canvas.getByText(
          'The final paragraph gives additional detail that readers can reveal when they want it.'
        )
      ).toBeVisible()
    );
    await expect(
      canvas.getByRole('heading', { name: 'How we calculate the estimates' })
    ).toBeVisible();

    await userEvent.click(showLess);
    await expect(
      canvas.getByRole('button', { name: 'Read more' })
    ).toHaveAttribute('aria-expanded', 'false');
    expect(
      canvas.queryByText(
        'The final paragraph gives additional detail that readers can reveal when they want it.'
      )
    ).not.toBeInTheDocument();

    await userEvent.click(canvas.getByRole('button', { name: 'Read more' }));
    showLess = canvas.getByRole('button', { name: 'Show less' });
    await waitFor(() =>
      expect(showLess).toHaveAttribute('aria-expanded', 'true')
    );
  }}
>
  <InfoBox title="About this data" text={fullText} {collapsedText} />
</Story>

<Story
  name="Lists"
  tags={['!autodocs', '!dev']}
  args={{
    title: 'What you need to know about the war',
    text: "- **Food crisis**: [Russia's invasion of Ukraine](#) in late February dramatically worsened the outlook for already inflated global food prices. \n- **Under fire**: Civillian homes destroyed in the conflict and Russia accused of war crimes. \n- **Nordstream sabotage**: A series of clandestine bombings and subsequent underwater gas leaks occurred on the Nord Stream 1 and Nord Stream 2 natural gas pipelines. ",
  }}
/>
<Story asChild name="Customised" tags={['!autodocs', '!dev']}>
  <InfoBox>
    {#snippet header()}
      <h3>Global video game market</h3>
    {/snippet}
    {#snippet body()}
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Market size ($bln)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024</td>
            <td>274.63</td>
          </tr>
          <tr>
            <td>2023</td>
            <td>281.77</td>
          </tr>
          <tr>
            <td>2022</td>
            <td>249.55</td>
          </tr>
        </tbody>
      </table>
    {/snippet}
    {#snippet footer()}
      <div class="text-xs font-note">Source: Precedence Research</div>
    {/snippet}
  </InfoBox>
</Story>

<style lang="scss">
  h3 {
    margin: 0;
  }
  // Style the table nicely
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  th {
    background-color: #f2f2f2;
  }
</style>
