/**
 * Função recursiva para achar o valor da chave escolhida.
 * @param {any} obj - Objeto do elemento raiz.
 * @returns {any | undefined} Um novo objeto, o valor encontrado ou undefined caso não possua mais objetos filhos e a chave não foi econtrada.
*/

import { findValuesInArray } from "./findValueInArray";

const findValueByKey = (obj: any, targetKey: string, key?: string): any | undefined => {
  if (Array.isArray(obj)) {
    const values = findValuesInArray(obj, targetKey, findValueByKey)
    if (values.length > 0) {
      return values;
    }
  }

  for (const key in obj) {
    if (key === targetKey) {
      return obj[key];
    }

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      const result = findValueByKey(obj[key], targetKey);
      if (result !== undefined) {
        return result;
      }
    }
  }

  return undefined;
}

export default findValueByKey;
