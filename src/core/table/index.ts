const toTable = ({ dataMapping }: { dataMapping: Array<string[]> }) => {
  const uniqueArrays: Array<string[]> = [];

  for (const subArray of dataMapping) {
    const isDuplicate = uniqueArrays.some(existingArray =>
      existingArray.every((value, index) => value === subArray[index])
    );

    if (!isDuplicate) {
      uniqueArrays.push(subArray);
    }
  }

  return uniqueArrays.sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] < b[i]) return -1;
      if (a[i] > b[i]) return 1;
    }
    return a.length - b.length;
  });;
}

export default toTable;
