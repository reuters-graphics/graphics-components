<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import LanguageToggle from './LanguageToggle.svelte';

  const { Story } = defineMeta({
    title: 'Components/Text elements/LanguageToggle',
    component: LanguageToggle,
    tags: ['autodocs'],
  });

  let locale = $state('en');
</script>

<Story name="Demo" tags={['!autodocs', '!dev']}>
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div class="toggle-container">
      <span class="label">EN</span>
      <button
        class="toggle-slider {locale === 'es' ? 'active' : ''}"
        onclick={() => {
          locale = locale === 'en' ? 'es' : 'en';
        }}
        aria-label="Toggle between English and Spanish"
      >
        <span class="slider-circle"></span>
      </button>
      <span class="label">ES</span>
    </div>
    <LanguageToggle {locale}></LanguageToggle>
  </div>

  <style>
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
</Story>

<Story name="CustomiseLanguage" tags={['!autodocs', '!dev']}>
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div class="toggle-container">
      <span class="label">EN</span>
      <button
        class="toggle-slider {locale === 'fr' ? 'active' : ''}"
        onclick={() => {
          locale = locale === 'en' ? 'fr' : 'en';
        }}
        aria-label="Toggle between English and French"
      >
        <span class="slider-circle"></span>
      </button>
      <span class="label">FR</span>
    </div>
    <LanguageToggle
      {locale}
      buttonOptions={{
        locale: 'fr',
        label: 'Lire en français',
      }}
    ></LanguageToggle>
  </div>

  <style>
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
</Story>
