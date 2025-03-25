import type { TableData } from '../@types/global';

export function filterArray(
  data: TableData,
  searchText: string,
  filterField: string | undefined,
  filterValue: string
) {
  if (searchText) {
    data = data.filter((item) => {
      return item.searchStr?.includes(searchText.toLowerCase());
    });
  }
  if (filterField && filterValue) {
    data = data.filter((item) => {
      return item[filterField] === filterValue;
    });
  }
  return data;
}

export function paginateArray(
  array: TableData,
  pageSize: number,
  pageNumber: number
) {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

function uniqueAttr(array: TableData, attr: string) {
  return array.map((e) => e[attr]).filter(unique);
}

// rewrite this with types
function unique(value: any, index: number, array: TableData) {
  return array.indexOf(value) === index;
}

export function getOptions(data: TableData, attr: string) {
  // Get all the unique values in the provided field. Sort it.

  // @TODO - check if a and b need to be typed and sorted for non-strings
  const attrList = uniqueAttr(data, attr).sort((a: any, b: any) =>
    a.localeCompare(b)
  );

  // Tack 'All' as the front as the first option.
  attrList.unshift('All');

  // Convert the list into Option typed objects ready for our Select component
  return attrList.map((a: string) => ({ text: a, value: a }));
}
