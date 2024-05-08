import findValueByKey from "../../segregation/helpers/findValueByKey";

const verifyValuesInObject = ({ item, values }: { item: any, values: Array<{ key: string; value: string }>}) => {
  const verifies = values?.map(({ key, value }) => {
    const valueToVerify = findValueByKey(item, key);
    if (Array.isArray(valueToVerify)) {
      return valueToVerify.includes(value)
    }
    return valueToVerify === value;
  })
  return verifies.every(item => item === true);
}

export default verifyValuesInObject;
