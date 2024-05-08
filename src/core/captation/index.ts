import segregation from "../segregation";
import { Collection } from "../types";

type PropsCapitation = {
  data: any;
  collection: Collection;
}

/**
 * Função de capitação dos dados enviados e definição das informações
 * @param {any} param.data - Array de objetos onde contém as informações a serem base para montar a tabela.
 * @param {Collection} param.collection - Array de chaves do objeto raiz que permitirão a montagem da tabela.
 * @returns {Array<Array<string | number | boolean>>} Um array de arrays de elementos para montar a configuração da tabela com base na collection.
*/

const capitation = ({ data, collection }: PropsCapitation): Record<string, Array<string | number | boolean>> => {
  try {
    const collectionValues = collection.map((collect: string) => {
      return segregation({ data, collect });
    })
    return [collection, collectionValues].createObject();
  } catch (e) {
    throw e;
  }
};

export default capitation;
