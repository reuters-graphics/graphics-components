export function filterArray(data, searchText, filterField, filterValue) {
  if (searchText) {
    data = data.filter((item) => {
      return item.searchStr.includes(searchText.toLowerCase());
    });
  }
  if (filterValue && filterValue) {
    data = data.filter((item) => {
      return item[filterField] === filterValue;
    });
  }
  return data;
}

export function paginateArray(array, pageSize, pageNumber) {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

function uniqueAttr(array, attr) {
  return array.map((e) => e[attr]).filter(unique);
}

function unique(value, index, array) {
  return array.indexOf(value) === index;
}

export function getOptions(data, attr) {
  // Get all the unique values in the provided field. Sort it.
  const attrList = uniqueAttr(data, attr).sort((a, b) => a.localeCompare(b));

  // Tack 'All' as the front as the first option.
  attrList.unshift('All');

  // Convert the list into Option typed objects ready for our Select component
  return attrList.map((a) => ({ text: a, value: a }));
}
