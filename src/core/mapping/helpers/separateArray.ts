const generateCombinations = (arr: any[]) => {
  const result: any = [];

  function generate(index: number, currentCombination: any[]) {
    if (index === arr.length) {
      result.push(currentCombination);
      return;
    }

    const currentItem = arr[index];

    if (Array.isArray(currentItem)) {
      for (const subItem of currentItem) {
        generate(index + 1, [...currentCombination, subItem]);
      }
    } else {
      generate(index + 1, [...currentCombination, currentItem]);
    }
  }

  generate(0, []);
  return result;
}

export default generateCombinations;
