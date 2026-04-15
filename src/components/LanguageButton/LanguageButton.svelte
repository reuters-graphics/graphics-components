<!-- @component `LanguageButton` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-languagebutton--docs) -->
<script lang="ts">
  interface Props {
    /** The current locale of the article */
    locale: string | undefined;
    /** Whether the article is embedded */
    embedded?: boolean;
    /** The base URL for the article */
    base?: string;
    /** Options for the language toggle button */
    buttonOptions?: {
      locale: string;
      label: string;
    };
    /** Custom function for handling URL changes for locales and embed versions. */
    setUrl?: () => string;
  }

  let {
    locale = 'en',
    embedded = false,
    base,
    buttonOptions = {
      locale: 'es',
      label: 'Leer en español',
    },
    setUrl,
  }: Props = $props();

  let translationLocale = buttonOptions.locale;

  const handleLocale = () => {
    if (setUrl) {
      return setUrl();
    }

    if (embedded) {
      if (locale === translationLocale) {
        // If we're in the non-English article, link to the English article
        return `${base}/embeds/en/page/`;
      } else {
        return `${base}/embeds/${translationLocale}/page`;
      }
    } else {
      if (locale === translationLocale) {
        // If we're in the non-English article, link to the English article
        return `${base}/`;
      } else {
        return `${base}/${translationLocale}`;
      }
    }
  };
</script>

<div class="language-button">
  <a data-sveltekit-reload href={handleLocale()}
    ><button
      id="translate-button"
      class="text-sm"
      aria-label="Toggle article language"
      >{locale === translationLocale ? 'Read in English' : (
        buttonOptions.label
      )}</button
    ></a
  >
</div>

<style lang="scss">
  div {
    display: flex;
    justify-content: center;

    #translate-button {
      position: absolute;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.06rem;
      font-size: var(--theme-font-size-xs);
      color: rgb(91 101 101);
      z-index: 10;
      cursor: pointer;
      position: relative;
      background: none;
      border: none;
      transition: color 0.25s ease;
      text-decoration: underline;
      text-decoration-color: #d5d5d5;
    }

    #translate-button:hover {
      color: #333333;
      text-decoration: underline;
    }
  }
</style>
