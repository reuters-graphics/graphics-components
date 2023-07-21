import { compileString } from 'sass';
import { convert } from '../../../bin/css-to-js/index.js';
import { kebabCase } from 'lodash-es';

export const cssStringToTableArray = (cssString) => {
  const cssObj = convert(compileString(cssString).css);
  return Object.entries(cssObj).map(([key, value]) => {
    const className = key.replace(/_/g, '-');
    const properties = Object.entries(value)
      .map(([propName, propValue]) => {
        return `${kebabCase(propName)}: ${propValue.replace(
          /\s?!important/g,
          ''
        )};`;
      })
      .join('\n');
    return [className, properties];
  });
};

export const extractCssColourVariables = (cssString) => {
  const variableRegexp = /(--[a-zA-Z][a-zA-Z0-9-]+):\s*(.+);/g;
  const cssVariables = [...cssString.matchAll(variableRegexp)].map(
    ([all, g1, g2]) => [g2, g1]
  );
  const colours = {};
  for (const variable of cssVariables) {
    const [colour, css] = variable;
    if (colours[colour]) {
      colours[colour].push(css);
    } else {
      colours[colour] = [css];
    }
  }
  return Object.keys(colours).map((key) => [key, colours[key]]);
};
