import { Canvas, Unstyled } from '@storybook/blocks';

import React from 'react';
import flatten from '../../components/Theme/utils/flatten';
import lightTheme from '../../components/Theme/themes/light';

// This is a React equivalent for the Svelte Theme component
// which is useful for setting CSS variables in MDX docs around
// typography demos. It also wraps demos in an unstyled storybook 
// canvas.

const ThemeWrapper = (props) => {
  const theme = flatten(lightTheme);
  const styleObj = {};
  Object.keys(theme).map(key => {
    styleObj[`--theme-${key}`] = theme[key];
  });
  return (
    <Unstyled>
      <Canvas>
        <div className="my-theme-wrapper" style={styleObj}>
          {props.children}
        </div>
      </Canvas>
    </Unstyled>
  );
}

export default ThemeWrapper;