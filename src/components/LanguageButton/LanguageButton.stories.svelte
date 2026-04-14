<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import LanguageButton from './LanguageButton.svelte';

  const { Story } = defineMeta({
    title: 'Components/Text elements/LanguageButton',
    component: LanguageButton,
    tags: ['autodocs'],
  });

  let spanishLocale = $state('en');
  let frenchLocale = $state('en');
</script>

{#snippet demoToggle(
  locale: string,
  translatedLocale: string,
  translatedLabel: string,
  ariaLabel: string,
  onToggle: () => void
)}
  <div class="demo-toggle-panel">
    <div class="demo-toggle-copy">
      <p class="demo-toggle-kicker font-sans">Demo control</p>
      <p class="demo-toggle-text font-sans">
        Use this toggle to simulate a locale switch in the demo
      </p>
    </div>
    <div class="toggle-container">
      <span class="label">EN</span>
      <button
        class="toggle-slider {locale === translatedLocale ? 'active' : ''}"
        onclick={onToggle}
        aria-label={ariaLabel}
      >
        <span class="slider-circle"></span>
      </button>
      <span class="label">{translatedLabel}</span>
    </div>
  </div>
{/snippet}

<Story name="Demo" tags={['!autodocs', '!dev']}>
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    {@render demoToggle(
      spanishLocale,
      'es',
      'ES',
      'Toggle between English and Spanish',
      () => {
        spanishLocale = spanishLocale === 'en' ? 'es' : 'en';
      }
    )}
    <LanguageButton locale={spanishLocale}></LanguageButton>
  </div>
</Story>

<Story name="CustomiseLanguage" tags={['!autodocs', '!dev']}>
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    {@render demoToggle(
      frenchLocale,
      'fr',
      'FR',
      'Toggle between English and French',
      () => {
        frenchLocale = frenchLocale === 'en' ? 'fr' : 'en';
      }
    )}
    <LanguageButton
      locale={frenchLocale}
      buttonOptions={{
        locale: 'fr',
        label: 'Lire en français',
      }}
    ></LanguageButton>
  </div>
</Story>

<style lang="scss">
  .demo-toggle-panel {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    width: fit-content;
    padding: 0.9rem 1rem;
    border: 1px solid #d6dde8;
    border-radius: 14px;
    background: linear-gradient(180deg, #f8fbff 0%, #eef4ff 100%);
  }

  .demo-toggle-copy {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .demo-toggle-kicker {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #315aa9;
  }

  .demo-toggle-text {
    margin: 0;
    max-width: 24rem;
    font-size: 0.9rem;
    line-height: 1.35;
    color: #425466;
  }

  .toggle-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .label {
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
    color: #666;
  }

  .toggle-slider {
    position: relative;
    width: 50px;
    height: 20px;
    background-color: #ccc;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    padding: 0;
    margin: 0;
    transition: background-color 0.3s ease;
  }

  .toggle-slider:hover {
    background-color: #bbb;
  }

  .toggle-slider.active {
    background-color: #6384cc;
  }

  .toggle-slider.active:hover {
    background-color: #1d4ed8;
  }

  .slider-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    background-color: white;
    border-radius: 50%;
    transition: left 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .toggle-slider.active .slider-circle {
    left: 31px;
  }
</style>
