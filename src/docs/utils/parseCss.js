import { compileString } from 'sass';
import { convert } from './css-to-js/index.js';
import { kebabCase } from 'lodash-es';

export const cssStringToTableArray = (cssString, withInclude = false) => {
  const cssObj = convert(compileString(cssString).css);
  return Object.entries(cssObj).map(([key, value]) => {
    const className = key.replace(/_/g, '-');
    const properties = Object.entries(value)
      .map(([propName, propValue]) => {
        // Excludes any media query-ied stuff...
        if (typeof propValue !== 'string') return '';
        return `${kebabCase(propName)}: ${propValue.replace(
          /\s?!important/g,
          ''
        )};`;
      })
      .join('\n');
    return withInclude ?
        [className, className, properties]
      : [className, properties];
  });
};

export const scssVariablesToTableArray = (scssString) => {
  const regExp = /^(\$[a-zA-Z0-9-_]+):\s*(.+)$/gm;
  const matches = scssString.matchAll(regExp);
  return Array.from(matches).map((match) => {
    return [match[1], match[2]];
  });
};

export const extractCssColourVariables = (cssString) => {
  const variableRegexp = /(--[a-zA-Z][a-zA-Z0-9-]+):\s*(.+);/g;
  const cssVariables = [...cssString.matchAll(variableRegexp)].map(
    ([_, g1, g2]) => [g2, g1]
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
