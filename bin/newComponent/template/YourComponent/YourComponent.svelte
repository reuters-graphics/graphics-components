<script lang="ts">
  /** ✏️ DOCUMENT your chart's props using TypeScript and JSDoc comments like below! */

  /**
   * A source for the image.
   * @required
   */
  export let src: string;

  /**
   * AltText for the image.
   * @required
   */
  export let altText: string;

  /** Height of the image. */
  export let height: number = 500;

  // You can declare custom types to help users implement your component.
  type ContainerWidth = 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';
  
  /** Width of the component within the text well. */
  export let width: ContainerWidth = 'normal';
</script>

<section class="photo {width}">
  <div
    style:background-image={`url(${src})`}
    style:height={`${height}px`}
  />
  <p class="visually-hidden">{altText}</p>
</section>

<style lang="scss">
  section.photo {
    div {
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>
