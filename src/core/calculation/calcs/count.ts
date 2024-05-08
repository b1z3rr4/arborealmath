import findValueByKey from "../../segregation/helpers/findValueByKey";

const count = ({ objectFilter, parameter, list }: { objectFilter: any[]; parameter: string; list: string[] }) => {
  if (list.includes(parameter)) {
    return objectFilter.length > 0 ? 1 : 0;
  }
  const values = objectFilter.map((item) => {
    return findValueByKey(item, parameter);
  })
  .filter(item => item !== null && item !== undefined);

  if (values.isArrayWithNestedArrays()) {
    return values.flattenArray().length;
  }
  return values.length;
}

export default count;
