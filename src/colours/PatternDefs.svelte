<!--
  @component Puts the Reuters Graphics pattern definitions on the page, once, so SVG shapes can use them as `fill="url(#gfx-hatch-pattern)"`. HTML elements don't need this: the CSS variables in `scss/colours/patterns` work on their own.

  [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/styles-colours-patterns--docs)
-->
<script lang="ts">
  import { patternDefs } from './index';
</script>

{@html patternDefs}
