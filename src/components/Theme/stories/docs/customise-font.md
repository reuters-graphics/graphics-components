For some projects, you may need to use typefaces other than the defaults provided by the GraphicsKit.

You will need to:

- Import the fonts in your code.
- Declare the `font-family` in the corresponding CSS variables in the Theme.

There are many ways to load fonts, but care should be taken that the font files load first before page render, to avoid layout shifts during font swapping after the font is downloaded. For this reason, we will use `<link>` method in the page `head` instead of CSS imports.

> ##### Importing custom fonts

> In this sample from [Google Fonts](https://fonts.google.com/specimen/Bebas+Neue), once we have selected the font family, copy the `<link>` code.

> ```html
> <link rel="preconnect" href="https://fonts.googleapis.com" />
> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
> <link
>   href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
>   rel="stylesheet"
> />
> ```

> In your project, navigate to `src` > `template.html` and add the copied code in `head` section :

> ```svelte
> <head>
>   <!-- HTML meta -->
>   <link rel="preconnect" href="https://fonts.googleapis.com" />
>   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
>   <link
>     href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
>     rel="stylesheet"
>   />
>
>   %sveltekit.head%
> </head>
> ```

> Similarly, you can add fonts from [Adobe Typekit](https://fonts.adobe.com/) or custom local fonts with the correct paths to the URL.

You can customise one or more of the pre-defined font families in the Theme. Do not directly apply the font family in your CSS. Always use the CSS variables defined in the Theme so that it configures and reflects across the page design.

```svelte
<Theme
  base="light"
  theme="{{
    font: { family: { hed: 'Bebas Neue, sans-serif' } },
  }}"
>
  <!-- Page content -->
</Theme>
```
