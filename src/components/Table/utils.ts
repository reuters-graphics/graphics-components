type FilterableDatum<T extends Record<string, unknown>> = T & {
  searchStr: string;
};

export function filterArray<T extends Record<string, unknown>>(
  data: FilterableDatum<T>[],
  searchText: string,
  filterField: keyof FilterableDatum<T>,
  filterValue: FilterableDatum<T>[keyof FilterableDatum<T>]
) {
  if (searchText) {
    data = data.filter((item) => {
      return item.searchStr.includes(searchText.toLowerCase());
    });
  }

  if (filterValue) {
    data = data.filter((item) => {
      if (!filterField) return true; // or handle the undefined case as appropriate

      return item[filterField] === filterValue;
    });
  }

  return data;
}
export function paginateArray<T>(
  array: T[],
  pageSize: number,
  pageNumber: number
) {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

/**
 *  We specify the output type here by adding `string` to the union because we want to explicitly define the output array as accepting strings.
 *
 * This is to get rid of the type error from `attrList.unshift('All')`
 */
function uniqueAttr<T>(array: T[], attr: keyof T): (T[keyof T] | string)[] {
  return array.map((e) => e[attr]).filter(unique);
}

function unique<T>(value: T, index: number, array: T[]) {
  return array.indexOf(value) === index;
}

export function getOptions<T>(data: T[], attr: keyof T) {
  // Get all the unique values in the provided field. Sort it.
  const attrList = uniqueAttr(data, attr).sort((a, b) => {
    // Throw errors if a and b are not strings.
    // a and b should be strings since they are keys of T.
    if (typeof a !== 'string' || typeof b !== 'string') {
      throw new Error(`Expected string, got ${typeof a} and ${typeof b}`);
    }

    return a.localeCompare(b);
  });

  // Tack 'All' at the start of `attrList`, making it the first option.
  attrList.unshift('All');

  // Convert the list into Option typed objects ready for our Select component
  return attrList.map((a) => ({ text: a, value: a }));
}
interface SortableItem {
  [key: string]: unknown; // Or more specific types if known
}

/**
 * Sorts an array of objects based on a specified column and direction.
 */
export function sortArray<T extends SortableItem>(
  /** The array to sort. */
  array: T[],
  /** The column to sort by. */
  column: keyof T,
  /** The sorting direction ('ascending' or 'descending'). */
  direction: 'ascending' | 'descending',
  /** Whether or not sorting is turned on */
  sortable: boolean
) {
  if (!sortable) return array;

  const sorted = [...array].sort((a, b) => {
    if (a[column] < b[column]) {
      return direction === 'ascending' ? -1 : 1;
    } else if (a[column] > b[column]) {
      return direction === 'ascending' ? 1 : -1;
    } else {
      return 0;
    }
  });

  return sorted;
}

export type Formatter<T> = (value: T) => string;

export type FieldFormatters<T> = {
  [K in keyof T]?: Formatter<T[K]>;
};
/**
 * Formats a value based on a field and a dictionary of formatters.
 */
export function formatValue<T extends Record<string, unknown>>(
  /** The object containing the field. */
  item: FilterableDatum<T>,
  /** The field to format. */
  field: keyof T,
  /** An optional dictionary of formatters. */
  fieldFormatters?: FieldFormatters<T>
) {
  const value = item[field];

  if (fieldFormatters && field in fieldFormatters && fieldFormatters[field]) {
    const formatter = fieldFormatters[field];
    return formatter(value);
  } else {
    return value;
  }
}
