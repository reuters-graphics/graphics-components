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
