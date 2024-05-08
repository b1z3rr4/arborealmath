const spreadCombinations = (arr: any[]) => {
  const result: any[] = [];

  function flatten(array: any[]) {
    for (const item of array) {
      if (Array.isArray(item)) {
        if (item.some(subItem => Array.isArray(subItem))) {
          flatten(item);
        } else {
          result.push(item);
        }
      } else {
        result.push(item);
      }
    }
  }

  flatten(arr);
  return result;
};

export default spreadCombinations;
