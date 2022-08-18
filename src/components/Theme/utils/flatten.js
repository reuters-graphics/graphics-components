function isBuffer(obj) {
  return (
    obj &&
    obj.constructor &&
    typeof obj.constructor.isBuffer === 'function' &&
    obj.constructor.isBuffer(obj)
  );
}

const transformKey = (key) => key.replace(/[^a-z0-9-]/gi, '');

export default function flatten(target) {
  const delimiter = '-';
  const output = {};

  function step(object, prev, currentDepth = 1) {
    Object.keys(object).forEach(function (key) {
      const value = object[key];
      const isArray = Array.isArray(value);
      const type = Object.prototype.toString.call(value);
      const isbuffer = isBuffer(value);
      const isObject = type === '[object Object]' || type === '[object Array]';

      const newKey = prev
        ? prev + delimiter + transformKey(key)
        : transformKey(key);

      if (!isArray && !isbuffer && isObject && Object.keys(value).length) {
        return step(value, newKey, currentDepth + 1);
      }

      output[newKey] = value;
    });
  }

  step(target);

  return output;
}
