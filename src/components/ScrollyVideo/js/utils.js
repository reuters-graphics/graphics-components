export function debounce(func, delay = 0) {
  let timeoutId;

  return (...args) => {
    // Clear the previous timeout if it exists
    clearTimeout(timeoutId);

    // Set a new timeout to call the function later
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export const isScrollPositionAtTarget = (
  targetScrollPosition,
  threshold = 1
) => {
  const currentScrollPosition = window.pageYOffset;
  const difference = Math.abs(currentScrollPosition - targetScrollPosition);

  return difference < threshold;
};

function constrain(n, low, high) {
  return Math.max(Math.min(n, high), low);
}

export function map(n, start1, stop1, start2, stop2, withinBounds = true) {
  const newval = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newval;
  }
  if (start2 < stop2) {
    return constrain(newval, start2, stop2);
  } else {
    return constrain(newval, stop2, start2);
  }
}

export function flattenObject(obj) {
  const result = {};

  function flatten(current, property) {
    if (Object(current) !== current) {
      result[property] = current;
    } else if (Array.isArray(current)) {
      for (let i = 0, l = current.length; i < l; i++) {
        flatten(current[i], property + '[' + i + ']');
        if (l === 0) {
          result[property] = [];
        }
      }
    } else {
      let isEmpty = true;
      for (const p in current) {
        isEmpty = false;
        flatten(current[p], p);
      }
      if (isEmpty && property) {
        result[property] = {};
      }
    }
  }

  flatten(obj, '');
  return result;
}
