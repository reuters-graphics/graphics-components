<script lang="ts">
  import { onMount } from 'svelte';

  let isLoggedIn = false;

  onMount(() => {
    // Check user login status
    isLoggedIn = localStorage.getItem('ArcId.USER_PROFILE') !== 'null';
  });
</script>

<svelte:head>
  {#if !isLoggedIn}
    <script data-cfasync="false" type="text/javascript">
      freestar.config.enabled_slots.push({
        placementName: 'reuters_1x1_bouncex',
        slotId: 'reuters_1x1_bouncex',
      });
    </script>
  {/if}
</svelte:head>

{#if !isLoggedIn}
  <div style="text-align: center;" id="reuters_1x1_bouncex">
    <!-- Ad will be inserted here by Freestar -->
  </div>
{/if}
