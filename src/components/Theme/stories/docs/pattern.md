To use a background pattern or image, set the background colour property in your custom theme to `transparent`...

```html
<Theme
  base="dark"
  theme="{{
    colour: { background: 'transparent' },
  }}"
>
  <!-- Page content -->
</Theme>
```

... then set your background image in global SCSS:

```css
/* global.scss */
body {
  background-color: darkblue;
  background-image: url('$assets/images/my-pattern.png');
}
```

You may also want to override the background on the header nav if it conflicts with your background, especially the dropdown menu:

```css
/* global.scss
Main nav container */
.nav-container .inner {
  background: darkblue !important;
  /* Dropdown menu */
  .dropdown {
    background: darkblue !important;
  }
}
/* Mobile nav overlay */
header + .overlay {
  background: darkblue !important;
}
```
