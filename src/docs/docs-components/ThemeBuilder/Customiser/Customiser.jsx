import React from 'react';

import Key from './Key.jsx';
// @ts-ignore scss
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
        return <Key {...props} key={props.key} />;
      })}
    </div>
  );
};

export default Customiser;
