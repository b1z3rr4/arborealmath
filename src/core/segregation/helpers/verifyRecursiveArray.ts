/**
 * Função de validação de arrays recursivos do formato escolhido para separação.
 * @param {string | number | boolean | Array<string | number>} value - Valor retornado pelo seperador.
 * @returns {boolean} Um valor boleano que define se o valor enviado é válido ou não.
*/

const verifyRecursiveArray = (value: any[]): boolean => {
  if (Array.isArray(value)) {
    for (const item of value) {
      if (!Array.isArray(item)) {
        if (typeof item !== 'object') {
          return true
        }
        return false;
      }
      return verifyRecursiveArray(item);
    }
  }

  return true;
}

export default verifyRecursiveArray;
