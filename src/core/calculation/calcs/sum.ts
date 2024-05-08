import findValueByKey from "../../segregation/helpers/findValueByKey";

const sum = ({ objectFilter, parameter, list }: { objectFilter: any[]; parameter: string; list: string[] }) => {
  const values = objectFilter.map((item) => {
    return findValueByKey(item, parameter);
  })
  .filter(item => item !== null && item !== undefined);

  if (values.isArrayWithNestedArrays()) {
    return values.flattenArray().reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  }
  return values.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}

export default sum;
