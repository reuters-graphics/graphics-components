<script>
  import Article from '../../Article/Article.svelte';
  import Headline from '../../Headline/Headline.svelte';
  import BodyText from '../../BodyText/BodyText.svelte';
  import GraphicBlock from '../../GraphicBlock/GraphicBlock.svelte';
</script>
<Article>
  <Headline
    hed="{'Reuters Graphics Interactive'}"
    dek="{'The beginning of a beautiful page'}"
    section="{'Global news'}"
  >
    <!-- Use named slots to add a byline... -->
    <span slot="byline">By <strong>Peppa Pig</strong></span>
    <!-- ...and a dateline. -->
    <span slot="dateline">Published <time datetime="{new Date('2020-01-01').toISOString()}">Jan. 1, 2020</time></span>
  </Headline>
  <BodyText text={`Bacon ipsum dolor amet cupim porchetta chuck buffalo sirloin beef. Biltong ham brisket tenderloin hamburger doner.

Prosciutto kevin brisket sirloin pork loin shoulder cupim sausage chicken jowl strip steak rump pork ball tip ham hock. Swine pork belly fatback alcatra jowl.

## Brisket sirloin

Shank strip steak turkey shoulder shankle leberkas pork chop, t-bone picanha buffalo ground round burgdoggen ribeye.   
  `} />
  <GraphicBlock
    title="Steak tar-tar"
    description="Andouille pork loin cow buffalo pork chop shoulder."
    notes="Source: U.S. FDA"
  >
    <div class="fake-graphic"></div>
  </GraphicBlock>
  <BodyText text={'Bacon ipsum dolor amet cupim porchetta chuck buffalo sirloin beef. Biltong ham brisket tenderloin hamburger doner.'} />
</Article>

<style>
  div.fake-graphic {
    height: 200px;
    border: 1px solid var(--theme-colour-text-primary);
  }
</style>