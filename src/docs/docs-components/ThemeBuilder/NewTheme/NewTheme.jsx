import React, { useEffect, useState } from 'react';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Unstyled } from '@storybook/blocks';
import classes from './styles.module.scss';
import darkTheme from '../../../../components/Theme/themes/dark';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import lightTheme from '../../../../components/Theme/themes/light';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import svelteSyntax from '../../../../../.storybook/svelte-highlighting';
import { updatedDiff } from 'deep-object-diff';

SyntaxHighlighter.registerLanguage('svelte', svelteSyntax);
SyntaxHighlighter.registerLanguage('scss', scss);

const NewTheme = ({ theme, themeName }) => {
  console.log('rerenders NewTheme');
  const originalTheme = themeName === 'light' ? lightTheme : darkTheme;
  const updates = updatedDiff(originalTheme, theme);

  const bgChanged = theme.colour.background !== lightTheme.colour.background;

  return (
    <div className={classes.newtheme}>
      <p>Use the code below to adapt the <code>Theme</code> component for your new design:</p>
    <SyntaxHighlighter language="svelte" style={prism}>
      {`<Theme
  base="${themeName}"
  theme={${JSON.stringify(updates, null, 2).replaceAll('"', '\'')}}
>
  <!-- ... -->
</Theme>
      `}
    </SyntaxHighlighter>
    {bgChanged && (
      <SyntaxHighlighter language="scss" style={prism} customStyle={{ maxHeight: '140px' }}>
        {`// global.scss
body {
  background-color: ${theme.colour.background};
}`}
      </SyntaxHighlighter>
    )}
    </div>
  );
}

export default NewTheme;
