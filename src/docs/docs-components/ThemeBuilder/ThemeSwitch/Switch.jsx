import React, { useEffect, useState } from 'react';

import { Unstyled } from '@storybook/blocks';
import classes from './styles.module.scss';

const ThemeSwitch = ({ themeName, setThemeName }) => {
  return (
    <div className={classes.switch}>
      <p>Choose a base theme:</p>
      <div className="container">
        <button
          className={themeName === 'light' ? 'active' : ''}
          onClick={() => setThemeName('light')}
        ><span className="material-symbols-outlined">light_mode</span></button>
        <button
          className={themeName === 'dark' ? 'active' : ''}
          onClick={() => setThemeName('dark')}
        ><span className="material-symbols-outlined">dark_mode</span></button>
      </div>
    </div>
  );
}

export default ThemeSwitch;
