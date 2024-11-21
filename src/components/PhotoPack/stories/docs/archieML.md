```yaml
[blocks]
# ...

type: photo-pack
id: my-photo-pack
class: mb-2
width: wide
textWidth: normal
gap: 10
[.images]
  src: images/my-img-1.jpg
  altText: Alt text
  caption: Lorem ipsum. REUTERS/Photog

  src: images/my-img-2.jpg
  altText: Alt text
  caption: Lorem ipsum. REUTERS/Photog

  src: images/my-img-3.jpg
  altText: Alt text
  caption: Lorem ipsum. REUTERS/Photog

  src: images/my-img-4.jpg
  altText: Alt text
  caption: Lorem ipsum. REUTERS/Photog

  src: images/my-img-5.jpg
  altText: Alt text
  caption: Lorem ipsum. REUTERS/Photog
[]

# ...
[]
```

```svelte
<!-- App.svelte -->
{#each content.blocks as block}
  {#if block.type === 'text'}
  <!-- ... -->

  {:else if block.type === 'photo-pack'}
    <PhotoPack
      id={block.id}
      class={block.class}
      width={block.width}
      textWidth={block.textWidth}
      images={block.images.map((img) => ({
        src: `${assets}/${img.src}`,
        altText: img.altText,
        caption: img.caption,
      }))}
      layouts={[
        { breakpoint: 750, rows: [2, 3] },
        { breakpoint: 450, rows: [1, 2, 2] },
      ]}
    />
    
  <!-- ... -->
  {/if}
{/each}
```
