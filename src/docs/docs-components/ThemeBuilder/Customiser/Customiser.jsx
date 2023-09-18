import React, { useEffect, useState } from 'react';

import Key from './Key.jsx';
import { Unstyled } from '@storybook/blocks';
import Value from './Value.jsx';
import classes from './styles.module.scss';

const Customiser = ({ theme, themeName, setTheme }) => {
  return (
    <div className={classes.customiser}>
      <p>Pick parts of the theme to customise:</p>
      {Object.entries(theme).map(([key, value]) => {
        const props = {
          theme,
          setTheme,
          themeName: themeName,
          name: key,
          map: key,
          value,
          key: themeName + key,
        };
        return <Key {...props} />;
      })}
    </div>
  );
}

export default Customiser;
