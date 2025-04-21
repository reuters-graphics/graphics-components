// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isBuffer(obj: any): boolean {
  return (
    obj &&
    obj.constructor &&
    typeof obj.constructor.isBuffer === 'function' &&
    obj.constructor.isBuffer(obj)
  );
}

const transformKey = (key: string): string => key.replace(/[^a-z0-9-]/gi, '');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function flatten<T extends Record<string, any>>(target: T) {
  const delimiter = '-';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const output: Record<string, any> = {};

  function step(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    object: Record<string, any>,
    prev?: string,
    currentDepth = 1
  ): void {
    Object.keys(object).forEach(function (key) {
      const value = object[key];
      const isArray = Array.isArray(value);
      const type = Object.prototype.toString.call(value);
      const isbuffer = isBuffer(value);
      const isObject = type === '[object Object]' || type === '[object Array]';

      const newKey =
        prev ? prev + delimiter + transformKey(key) : transformKey(key);

      if (!isArray && !isbuffer && isObject && Object.keys(value).length) {
        return step(value, newKey, currentDepth + 1);
      }

      output[newKey] = value;
    });
  }

  step(target);

  return output;
}
