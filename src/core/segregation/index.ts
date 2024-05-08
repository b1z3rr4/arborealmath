import helpers from "./helpers";

type PropsSegregation = {
  data: any;
  collect: string;
}

/**
 * Função de separação dos dados enviados com base na coleção esolhida do sistema.
 * @param {any} data - Array de objetos onde contém as informações a serem base para montar a tabela.
 * @param {string} collect - String que referencia uma chave dentro do objeto raiz.
 * @returns {Array<string | number | boolean>} Uma lista de valores únicos que a chave escolhida referencia para cada objeto raiz.
*/

const segregation = ({ data, collect }: PropsSegregation): Array<string | number | boolean> => {
  const value = data?.map((item: any) => {
    const value = helpers.findValueByKey(item, collect);
    const isValid = helpers.verifyTypeValue(value);
    if (!isValid) {
      const lastValidation = helpers.verifyRecursiveArray(value);
      if (!lastValidation) {
        throw new Error(`A chave ${collect} não é válida pois não abriga um valor primário.`);
      }
    }
    return value;
  });
  const flattenedValue = value.flattenArray();
  return flattenedValue;
};

export default segregation;
