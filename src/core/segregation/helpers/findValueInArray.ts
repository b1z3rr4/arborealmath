/**
 * Função recursiva para achar o valor da chave escolhida dentro de um novo array.
 * @param {any} arr - Array de elementos subraiz.
 * @returns {any | undefined} Um novo objeto, o valor encontrado ou undefined caso não possua mais objetos filhos e a chave não foi econtrada.
*/

export const findValuesInArray = (arr: any[], targetKey: string, callback: (obj: any, targetKey: string, key?: string) => any | undefined): any[] => {
  const values = [];

  for (const obj of arr) {
    const value = callback(obj, targetKey);
    if (value !== undefined) {
      values.push(value);
    }
  }

  return values;
};
