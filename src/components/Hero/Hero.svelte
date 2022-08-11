<script lang="ts">
  /**
    * Headline
    */
  export let hed: string = 'Reuters Graphics Interactive';
  /**
    * Hedline colour
    */
  export let hedColour = 'white';
  /**
    * Dek
    */
  export let dek: string | null = null;
  /**
    * Section title
    */
  export let section: string | null = null;
  /**
    * Section colour
    */
  export let sectionColour: string = 'red';

  export let imgSrc: string;
  export let imgAltText: string;

  

  export let overlay: boolean | string = true;

  export let top = false;
  export let bottom = false;
  export let left = false;
  export let right = false;
</script>


<section class="hero-title">
  <figure>
    {#if $$slots.image}
      <slot name='image'></slot>
    {:else}
      <img src="{imgSrc}" alt="{imgAltText}" />
    {/if}
    {#if overlay}
      <div
        class="overlay"
        class:lightest={overlay === 'lightest'}
        class:lighter={overlay === 'lighter'}
        class:light={overlay === 'light'}
        class:dark={overlay === 'dark'}
        class:darker={overlay === 'darker'}
        class:darkest={overlay === 'darkest'}
      ></div>
    {/if}
  </figure>
  <div
    class="title color-white"
    class:top={top}
    class:bottom={bottom}
    class:left={left}
    class:right={right}
  >
    {#if section}
      <p class={`section-title color-${sectionColour} text-shadow`}>{section}</p>
    {/if}
    
    {#if $$slots.hed}
       <slot name="hed"></slot>
    {:else}
      <h2
        class={`text-shadow-darker color-${hedColour} important`}
      >{hed}</h2>
    {/if}

    {#if $$slots.dek}
       <slot name="dek"></slot>
    {:else}
      {#if dek}
        <p class="text-shadow-darkest">{dek}</p>
      {/if}
    {/if}
  </div>
</section>

