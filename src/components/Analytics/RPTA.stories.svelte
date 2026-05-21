<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';

  const { Story } = defineMeta({
    title: 'Components/Ads & analytics/RPTA',
  });

  let logs = $state<string[]>([]);

  function enableDebug() {
    if (typeof window === 'undefined' || !window.rpta) return;
    window.rpta.debug = true;
  }

  function fireTrackEvent() {
    enableDebug();
    window.rpta.trackEvent('ui.interaction', {
      category: 'Test',
      label: 'Button clicked',
      ui_element: 'test-button',
      nonInteraction: 0,
      uiInteraction: 1,
    });
    logs = [
      ...logs,
      `trackEvent('ui.interaction', { category: 'Test', label: 'Button clicked' })`,
    ];
  }

  function fireTrackPageView() {
    enableDebug();
    window.rpta.trackPageView('Graphics', {
      content_type: 'Interactive',
    });
    logs = [
      ...logs,
      `trackPageView('Graphics', { content_type: 'Interactive' })`,
    ];
  }

  function fireTrackIdentity() {
    enableDebug();
    window.rpta.trackIdentity('test-user-123');
    logs = [...logs, `trackIdentity('test-user-123')`];
  }

  function clearLogs() {
    logs = [];
  }
</script>

<Story name="Demo" tags={['!autodocs']}>
  {#await import('./Analytics.svelte') then { default: Analytics }}
    <Analytics rpta />
  {/await}

  <div class="rpta-test">
    <div class="rpta-test-panel">
      <p class="rpta-test-kicker font-sans">RPTA test controls</p>
      <p class="rpta-test-text font-sans">
        These buttons call <code>window.rpta</code> methods directly, bypassing
        the production gate. Open the browser console to see debug logs.
      </p>
      <div class="rpta-test-buttons">
        <button class="rpta-test-btn" onclick={fireTrackEvent}>
          trackEvent
        </button>
        <button class="rpta-test-btn" onclick={fireTrackPageView}>
          trackPageView
        </button>
        <button class="rpta-test-btn" onclick={fireTrackIdentity}>
          trackIdentity
        </button>
      </div>
    </div>

    {#if logs.length > 0}
      <div class="rpta-test-log">
        <div class="rpta-test-log-header">
          <span class="rpta-test-log-title font-sans">Event log</span>
          <button class="rpta-test-clear" onclick={clearLogs}>Clear</button>
        </div>
        <ul class="rpta-test-log-list">
          {#each logs as log}
            <li class="rpta-test-log-entry font-mono">{log}</li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</Story>

<style>
  .rpta-test {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 36rem;
  }

  .rpta-test-panel {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem;
    border: 1px solid #d6dde8;
    border-radius: 14px;
    background: linear-gradient(180deg, #f8fbff 0%, #eef4ff 100%);
  }

  .rpta-test-kicker {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #315aa9;
  }

  .rpta-test-text {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.35;
    color: #425466;
  }

  .rpta-test-text code {
    background: #e2e8f0;
    padding: 0.1em 0.35em;
    border-radius: 4px;
    font-size: 0.85em;
  }

  .rpta-test-buttons {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .rpta-test-btn {
    padding: 0.5rem 1rem;
    border: 1px solid #315aa9;
    border-radius: 6px;
    background: white;
    color: #315aa9;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    transition:
      background-color 0.15s,
      color 0.15s;
  }

  .rpta-test-btn:hover {
    background: #315aa9;
    color: white;
  }

  .rpta-test-log {
    border: 1px solid #d6dde8;
    border-radius: 10px;
    overflow: hidden;
  }

  .rpta-test-log-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.75rem;
    background: #f1f5f9;
    border-bottom: 1px solid #d6dde8;
  }

  .rpta-test-log-title {
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #64748b;
  }

  .rpta-test-clear {
    font-size: 0.75rem;
    color: #94a3b8;
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: underline;
  }

  .rpta-test-log-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .rpta-test-log-entry {
    padding: 0.4rem 0.75rem;
    font-size: 0.8rem;
    color: #1e293b;
    border-bottom: 1px solid #f1f5f9;
  }

  .rpta-test-log-entry:last-child {
    border-bottom: none;
  }
</style>
