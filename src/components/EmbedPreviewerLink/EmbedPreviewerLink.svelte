<script lang="ts">
  import Fa from 'svelte-fa';
  import { faWindowRestore } from '@fortawesome/free-regular-svg-icons';
  interface Props {
    dev?: boolean;
  }

  let { dev = false }: Props = $props();
</script>

{#if dev}
  <div>
    <a rel="external" href="/embed-previewer">
      <Fa icon={faWindowRestore} />
    </a>
  </div>
{/if}

<style lang="scss">
  div {
    position: fixed;
    bottom: 5px;
    left: 10px;
    font-size: 18px;
    a {
      color: #ccc;
      &:hover {
        color: #666;
      }
    }
  }
</style>
