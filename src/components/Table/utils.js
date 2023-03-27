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

export function numberWithCommas(n) {
  const parts = n.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

export function uniqueAttr(array, attr) {
  return array.map((e) => e[attr]).filter(unique);
}

export function unique(value, index, array) {
  return array.indexOf(value) === index;
}

export function isNumeric(value) {
  return (
    typeof value === 'number' ||
    value instanceof Number ||
    typeof value === 'bigint' ||
    value instanceof BigInt ||
    (typeof value === 'string' && !isNaN(value))
  );
}
