import findValueByKey from "../../segregation/helpers/findValueByKey";
import verifyRecursiveArray from "../../segregation/helpers/verifyRecursiveArray";
import verifyTypeValue from "../../segregation/helpers/verifyTypeValue";
import generateCombinations from "./separateArray";
import spreadCombinations from "./spreadCombinations";

const searchValuesInObject = (data: any, list: string[]) => {
  const values = data?.map((item: any) => {
    const valuesItem = list?.map((key: string) => {
      const value = findValueByKey(item, key);
      const isValid = verifyTypeValue(value);
      if (!isValid) {
        const lastValidation = verifyRecursiveArray(value);
        return lastValidation
      }
      return value;
    })
    const valuesSpread: any[] = generateCombinations(valuesItem);
    return valuesSpread;
  })
  const spreadValues = spreadCombinations(values);
  return spreadValues;
}

export default searchValuesInObject;

