const toKeys = ({ list, calculation, parameter }: { list: string[]; calculation: string[], parameter: string[]}) => {
  const totalsLabel = parameter.map((item, index) => {
    return `${calculation[index]} de ${item}`;
  })
  return [...list, ...totalsLabel];
}

export default toKeys;
