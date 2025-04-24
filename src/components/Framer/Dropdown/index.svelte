<script lang="ts">
  interface Props {
    data: {
      index: number;
      embed: string;
      title: string;
    }[];
    selected: string;
  }

  let { data = [], selected = $bindable() }: Props = $props();
</script>

<form>
  <label for="embed-options">Select an embed</label>
  <select id="embed-options" bind:value={selected}>
    {#each data as d (d.index)}
      <option value={d.embed}>{d.title}</option>
    {/each}
  </select>
</form>

<style lang="scss">
  @use '../../../scss/mixins' as mixins;

  label {
    margin-bottom: 0.25rem;
    display: inline-flex;
    font-size: 0.75rem;
    color: #aaa;
    @include mixins.font-sans;
  }

  select {
    width: 100%;
    padding: 0.5rem 0.75rem;
    background: none;
    font-size: 1rem;
    border: 0;
    border-radius: 0 !important;
    background-color: #fff;
    border: 1px solid #ddd;
    @include mixins.font-sans;
  }

  select:focus {
    outline: none;
    border: 1px solid #ccc;
  }
</style>
