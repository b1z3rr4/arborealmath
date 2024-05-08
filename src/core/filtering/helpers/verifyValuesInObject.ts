import findValueByKey from "../../segregation/helpers/findValueByKey";

const verifyValuesInObject = ({ item, values }: { item: any, values: Array<{ key: string; values: string[] }>}) => {
  const verifies = values?.map(({ key, values: valueArray }) => {
    const valueToVerify = findValueByKey(item, key);
    if (Array.isArray(valueToVerify)) {
      return valueArray.every(value => valueToVerify.includes(value));
    }
    return valueArray.includes(valueToVerify);
  })
  return verifies.every(item => item === true);
}

export default verifyValuesInObject;
