import React, { useEffect, useState } from 'react';

import Customiser from './Customiser/Customiser';
import NewTheme from './NewTheme/NewTheme.jsx';
import ThemeSwitch from './ThemeSwitch/Switch';
import { Unstyled } from '@storybook/blocks';
// @ts-ignore scss
import classes from './styles.module.scss';
import { cloneDeep } from 'es-toolkit';
import darkTheme from '../../../components/Theme/themes/dark';
import lightTheme from '../../../components/Theme/themes/light';

const ThemeBuilder = (_props) => {
  const [themeName, setThemeName] = useState('light');
  const [theme, setTheme] = useState(cloneDeep(lightTheme));

  useEffect(() => {
    const newTheme = themeName === 'light' ? lightTheme : darkTheme;
    setTheme(cloneDeep(newTheme));
  }, [themeName]);

  return (
    <Unstyled>
      <div className={classes.themebuilder}>
        <div className="column">
          <ThemeSwitch setThemeName={setThemeName} themeName={themeName} />
          <Customiser
            theme={theme}
            setTheme={setTheme}
            themeName={themeName}
            key={themeName}
          />
        </div>
        <div className="column">
          <NewTheme theme={theme} themeName={themeName} />
        </div>
      </div>
    </Unstyled>
  );
};

export default ThemeBuilder;
