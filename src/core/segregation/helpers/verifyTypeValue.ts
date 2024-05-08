/**
 * Função de validação do formato escolhido para separação.
 * @param {string | number | boolean | Array<string | number>} value - Valor retornado pelo seperador.
 * @returns {boolean} Um valor boleano que define se o valor enviado é válido ou não.
*/

const verifyTypeValue = (value: string | number | boolean | undefined | null | Array<string | number>): boolean => {
  if (Array.isArray(value)) {
    for (const item of value) {
      if (typeof item !== 'number' && typeof item !== 'string' && typeof item !== 'undefined' && item != null) {
        return false;
      }
    }
    return true;
  }
  const verifyType = typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'undefined' ||
    value === null;

  if (verifyType) {
    return true;
  }
  return false;
}

export default verifyTypeValue;
