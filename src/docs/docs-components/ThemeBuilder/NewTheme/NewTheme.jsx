import React, { useEffect, useState } from 'react';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Unstyled } from '@storybook/blocks';
import classes from './styles.module.scss';
import darkTheme from '../../../../components/Theme/themes/dark';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import lightTheme from '../../../../components/Theme/themes/light';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import svelteSyntax from '../../../../../.storybook/svelte-highlighting';
import { updatedDiff } from 'deep-object-diff';

SyntaxHighlighter.registerLanguage('svelte', svelteSyntax);

const NewTheme = ({ theme, themeName }) => {
  console.log('rerenders NewTheme');
  const originalTheme = themeName === 'light' ? lightTheme : darkTheme;
  const updates = updatedDiff(originalTheme, theme);
  return (
    <div className={classes.newtheme}>
      <p>Use the code below to adapt the <code>Theme</code> component for your new design:</p>
    <SyntaxHighlighter language="svelte" style={prism}>
      {`<Theme
  base="${themeName}"
  theme={${JSON.stringify(updates, null, 2).replaceAll('"', '\'')}}
>
  {/*...*/}
</Theme>
      `}
    </SyntaxHighlighter>
    </div>
  );
}

export default NewTheme;
