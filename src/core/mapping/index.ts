import helpers from "./helpers";

type PropsMapping = {
  data: any;
  list: string[];
}

/**
 * Função de mapeamentos dos dados enviados e construção da árvore de elementos.
 * @param {any} param.data - Array de objetos onde contém as informações a serem base para montar a tabela.
 * @param {Array<string>} param.list - Array de strings que representa as chaves que devem ser listada a partir do objeto raiz.
 * @returns {Array<string[]>} Um array de elementos para montar a tabela.
*/

const mapping = ({ data, list }: PropsMapping): Array<string[]> => {
  const arrayValues = helpers.searchValuesInObject(data, list);
  return arrayValues;
};

export default mapping;
