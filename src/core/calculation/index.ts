import { Config } from "../types";
import count from "./calcs/count";
import sum from "./calcs/sum";
import helpers from "./helpers";

type PropsCalculation<T extends string | number | symbol> ={
  data: any[];
  config: Config<T>;
  valuesCombination: Array<string[]>;
  list: string[]
}

const calculation = <T extends string | number | symbol>({ data, config, valuesCombination, list }: PropsCalculation<T>): Array<any[]> => {
  const valuesCombinationMap: Array<{ key: string, value: string }>[] = valuesCombination.map((item) => {
    return item.map((value, index) => {
      return {
        key: list[index],
        value,
      }
    })
  })
  const tableWithTotals = valuesCombinationMap.map((combination, indexCombination) => {
    const objects = data?.filter((item) => {
      return helpers.verifyValuesInObject({item, values: combination });
    })
    const values = config?.calculation?.map((option, index) => {
      if (option === 'conta') {
        return count({ objectFilter: objects, parameter: config.parameter[index], list: list })
      }
      if (option === 'soma') {
        return sum({ objectFilter: objects, parameter: config.parameter[index], list: list })
      }
      if (option === 'percentual da conta') {
        const countValues = count({ objectFilter: objects, parameter: config.parameter[index], list: list });
        const countTotals = count({ objectFilter: data, parameter: config.parameter[index], list: list });
        const percentOfCount = ((countValues / countTotals) * 100).toFixed(2);
        return percentOfCount;
      }
      if (option === 'percentual da soma') {
        const countValues = sum({ objectFilter: objects, parameter: config.parameter[index], list: list });
        const countTotals = sum({ objectFilter: data, parameter: config.parameter[index], list: list });
        const percentOfSum = ((countValues / countTotals) * 100).toFixed(2);
        return percentOfSum;
      }
    })
    return [...valuesCombination[indexCombination], ...values]
  })
  const sumValues = config?.calculation?.map((option, index) => {
    if (option === 'conta') {
      return count({ objectFilter: data, parameter: config.parameter[index], list: list })
    }
    if (option === 'soma') {
      return sum({ objectFilter: data, parameter: config.parameter[index], list: list })
    }
    if (option === 'percentual da conta') {
      const countTotals = count({ objectFilter: data, parameter: config.parameter[index], list: list });
      const percentOfCount = ((countTotals / countTotals) * 100).toFixed(2);
      return percentOfCount;
    }
    if (option === 'percentual da soma') {
      const countTotals = sum({ objectFilter: data, parameter: config.parameter[index], list: list });
      const percentOfSum = ((countTotals / countTotals) * 100).toFixed(2);
      return percentOfSum;
    }
  });
  tableWithTotals.push(['Totais', ...sumValues]);
  return tableWithTotals;
}

export default calculation;
