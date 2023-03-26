export function filterArray(data, searchText) {
  if (!searchText) {
    return data;
  }
  return data.filter((item) => {
    return item.searchStr.includes(searchText.toLowerCase());
  });
}

export function paginateArray(array, pageSize, pageNumber) {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

export function numberWithCommas(n) {
  const parts = n.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
