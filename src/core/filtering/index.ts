import helpers from "./helpers";

type PropsMapping = {
  data: any;
  filter: { key: string, values: any[] }[];
}

/**
 * Função de filtragem de dados.
 * @param {any} param.data - Array de objetos onde contém as informações a serem base para a filtragem.
 * @param {Record<string, string[]>} param.filter - Objeto que representa os valores a serem filtrados na pesquisa.
 * @returns {Array<any>} Um array de dados filtrados.
*/

const filtering = ({ data, filter }: PropsMapping): Array<any> => {
  const objects: any[] = data?.filter((item: any) => {
    return helpers.verifyValuesInObject({item, values: filter });
  })
  console.log(objects.length)
  return [];
};

export default filtering;
