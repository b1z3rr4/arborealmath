const sumArrays = (values: string[][]) => {
  const resultado: any = [];

  if (values.length === 0) {
      return resultado;
  }

  const tamanhoSubarray = values[0].length;

  for (let i = 0; i < tamanhoSubarray; i++) {
      let soma = 0;

      for (let j = 0; j < values.length; j++) {
          soma += parseFloat(values[j][i]);
      }

      resultado.push(soma.toFixed(0));
  }

  return resultado;
}

export default sumArrays;
