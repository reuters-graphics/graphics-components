<script>
  import Article from '../../Article/Article.svelte';
  import Headline from '../../Headline/Headline.svelte';
  import BodyText from '../../BodyText/BodyText.svelte';
  import GraphicBlock from '../../GraphicBlock/GraphicBlock.svelte';
</script>

<Article>
  <Headline
    hed={'Reuters Graphics Interactive'}
    dek={'The beginning of a beautiful page'}
    section={'Global news'}
    authors={['Jon McClure', 'Prasanta Kumar Dutta']}
    publishTime={new Date('2021-09-12').toISOString()}
  />
  <BodyText
    text={`Bacon ipsum dolor amet cupim porchetta chuck buffalo sirloin beef. Biltong ham brisket tenderloin hamburger doner.`}
  />
  <GraphicBlock
    title="Steak tar-tar"
    description="Andouille pork loin cow buffalo pork chop shoulder."
    notes="Source: U.S. FDA"
  >
    <div class="fake-graphic"></div>
  </GraphicBlock>
  <BodyText
    text={'Bacon ipsum dolor amet cupim porchetta chuck buffalo sirloin beef. Biltong ham brisket tenderloin hamburger doner.'}
  />
</Article>

<style>
  div.fake-graphic {
    height: 200px;
    border: 1px solid var(--theme-colour-accent);
  }
</style>
