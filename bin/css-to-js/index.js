/*
 * Reuters Graphics browser port of:
 * Copyright 2020 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

import css from 'css';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  const keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    let symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (let i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === '[object Arguments]')) {
    return;
  }

  const _arr = [];
  let _n = true;
  let _d = false;
  let _e;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i.return != null) _i.return();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

const addProperty = function addProperty(obj, key, value) {
  const retObj = obj;

  if (retObj[key]) {
    retObj[key] = _objectSpread2({}, retObj[key], {}, value);
  } else {
    retObj[key] = value;
  }

  return retObj;
};

const camelize = function camelize(str) {
  return str.replace(/-([a-z])/g, function(g) {
    return g[1].toUpperCase();
  });
};

const capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const sanitize = function sanitize(name) {
  return name
    .replace(/\*/g, 'all-children')
    .replace(/#/g, '$')
    .replace(/\s\s+/g, ' ')
    .replace(/(\d)\\\/(\d)/g, '$1~$2') // Added for escaped slashes like ".w-1/2"
    .replace(/(\d)\\\.(\d)/g, '$1|$2') // Added for escaped dots like ".mb-0\.5"
    .replace(/[^a-zA-Z0-9$|~]/g, '_')
    .replace(/^_+/g, '')
    .replace(/_+$/g, '')
    .replace('|', '.') // Replace placeholder
    .replace('~', '/'); // Replace placeholder
};

const fontface = function fontface(rule, result) {
  let name = '';
  let obj = {};
  const fontObj = {};
  rule.declarations.forEach(function(declaration) {
    const cssProperty = camelize(declaration.property);
    fontObj[cssProperty] = declaration.value;
    name = capitalize(camelize(fontObj.fontFamily).replace(/"/g, ''));
    obj = {
      '@font-face': fontObj,
    };
  });
  let dupeFlag = false;
  Object.keys(result).forEach(function(key) {
    if (key.split('_')[0] === name) {
      if (JSON.stringify(result[key]) === JSON.stringify(obj)) {
        dupeFlag = true;
      }
    }
  });

  if (!dupeFlag) {
    const numVar = Object.entries(result).filter(function(resObj) {
      return resObj[0].split('_')[0] === name;
    }).length;

    if (numVar > 0) {
      name = ''.concat(name, '_').concat(numVar + 1);
    }

    name = sanitize(name);
    return [name, obj];
  }

  return false;
};

const keyframes = function keyframes(rule) {
  const keyFrameObj = {};
  rule.keyframes.forEach(function(keyframe) {
    keyframe.declarations.forEach(function(decl) {
      keyFrameObj[keyframe.values[0]] = _objectSpread2({}, keyFrameObj[keyframe.values[0]], _defineProperty({}, decl.property, decl.value));
    });
  });
  let name = camelize('keyframes-'.concat(rule.name));
  const obj = {};
  obj['@keyframes '.concat(rule.name)] = keyFrameObj;
  name = sanitize(name);
  return [name, obj];
};

const standard = function standard(rule, result) {
  const obj = {};
  let retObj = {};
  rule.declarations.forEach(function(declaration) {
    const cssProperty = camelize(declaration.property);
    obj[cssProperty] = declaration.value;
  });
  rule.selectors.forEach(function(selector) {
    let name; // Check if selector contains a pseudo selector

    const pseudoSelectorIndex = selector.indexOf(':');

    if (pseudoSelectorIndex !== -1) {
      // Find end of pseudo selector
      let endPseudoSelectorIndex = selector.indexOf(' ', pseudoSelectorIndex);
      if (endPseudoSelectorIndex === -1) endPseudoSelectorIndex = selector.length; // Split selector

      const primarySelector = selector.slice(0, pseudoSelectorIndex);
      const pseudoSelector = selector.slice(pseudoSelectorIndex, endPseudoSelectorIndex);
      const secondarySelector = selector.slice(endPseudoSelectorIndex, selector.length);
      const pseudoObj = {};
      pseudoObj['&'.concat(pseudoSelector).concat(secondarySelector)] = obj;
      name = sanitize(primarySelector.trim());
      retObj = addProperty(result, name, pseudoObj);
    } else {
      name = sanitize(selector.trim());
      retObj = addProperty(result, name, obj);
    }
  });
  return retObj;
};

const convertRules = function convertRules(rules) {
  const res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let result = res;
  rules.forEach(function(rule) {
    if (rule.type === 'media') {
      // Convert @media rules
      const name = '@media '.concat(rule.media);
      result[name] = result[name] || {};
      const media = result[name];
      convertRules(rule.rules, media);
    } else if (rule.type === 'font-face') {
      // Convert @font-face rules
      const fontProp = fontface(rule, result);
      if (fontProp) result = addProperty(result, fontProp[0], fontProp[1]);
    } else if (rule.type === 'keyframes') {
      // Convert @keyframes rules
      const keyProp = keyframes(rule);
      result = addProperty(result, keyProp[0], keyProp[1]);
    } else if (rule.type === 'rule') {
      // Convert standard CSS rules
      const standardProp = standard(rule, result);
      Object.entries(standardProp).forEach(function(_ref) {
        const _ref2 = _slicedToArray(_ref, 2);
        const key = _ref2[0];
        const value = _ref2[1];

        result = addProperty(result, key, value);
      });
    }
  });
  return result;
};

const convertToJS = function convertToJS(input) {
  // Parse CSS string into rules array
  try {
    const parsedCss = css.parse(input);
    const rules = parsedCss.stylesheet.rules;
    return convertRules(rules);
  } catch (err) {
    throw new Error('Invalid CSS input: '.concat(err));
  }
};

const reverseMediaQueries = function reverseMediaQueries(inputData) {
  const exportObject = {};

  const moveMediaInsideClass = function moveMediaInsideClass(object) {
    const media = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    Object.entries(object).forEach(function(_ref) {
      const _ref2 = _slicedToArray(_ref, 2);
      const key = _ref2[0];
      const value = _ref2[1];

      if (key.includes('@media')) {
        moveMediaInsideClass(object[key], key);
      } else if (media) {
        const tempObj = {};
        tempObj[media] = value;

        if (exportObject[key]) {
          exportObject[key] = _objectSpread2({}, exportObject[key], {}, tempObj);
        } else {
          exportObject[key] = tempObj;
        }
      } else if (exportObject[key]) {
        exportObject[key] = _objectSpread2({}, exportObject[key], {}, value);
      } else {
        exportObject[key] = value;
      }
    });
  };

  moveMediaInsideClass(inputData);
  return exportObject;
};

const convertStringToJson = function convertStringToJson(input, mediaReverse) {
  let contents = convertToJS(input);

  if (mediaReverse) {
    contents = reverseMediaQueries(contents);
  }

  return {
    contents,
  };
};

const convert = function convert(input) {
  const config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const outputType = config.outputType;
  const outputPath = config.outputPath;
  let mediaReverse = config.mediaReverse;
  let convertedCss;

  if (outputType === 'splitFile' || outputType === 'shakeFile') {
    mediaReverse = true;
  } // If input is a String of CSS

  convertedCss = convertStringToJson(input, mediaReverse);

  if (!outputType) {
    if (Array.isArray(convertedCss)) {
      return convertedCss.map(function(obj) {
        return obj.contents;
      });
    } else {
      return convertedCss.contents;
    }
  } else {
    const writeRecur = function writeRecur(input) {
      if (Array.isArray(input)) {
        input.forEach(function(obj) {
          writeRecur(obj);
        });
      }
    };

    writeRecur(convertedCss);
  }
};

export { convert };
