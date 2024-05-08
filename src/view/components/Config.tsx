import React, { useState } from "react";

const Config = ({ optionsList, subtmitConfig }: { optionsList: string[]; subtmitConfig: (param1: string[],param2: string[],param3: string[],) => void}) => {
  const [qtdCalculos, setQtdCalculos] = useState(0);

  const [opcoesSelecionadas, setOpcoesSelecionadas] = useState<Array<string>>([]);
  const [calculosSelecionado, setCalculosSelecionado] = useState<Array<string>>([]);
  const [parametrosSelecionado, setParametrosSelecionado] = useState<Array<string>>([]);

  const handleListagemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map(option => option.value);
    setOpcoesSelecionadas(selectedOptions);
  };

  const handleCalculoSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCalculos = Array.from(event.target.selectedOptions).map(option => option.value);
    setCalculosSelecionado(selectedCalculos);
  };

  const handleParametroSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedParametros = Array.from(event.target.selectedOptions).map(option => option.value);
    setParametrosSelecionado(selectedParametros);
  };

  const handleSubmit = () => {
    subtmitConfig(opcoesSelecionadas, calculosSelecionado, parametrosSelecionado);
  }

  return (
    <>
      <div className="config-div">
        <h2>Configuração</h2>
        <h3>Listagem</h3>
        <select multiple onChange={handleListagemChange}>
          {optionsList?.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <h3>Totais</h3>
        {Array(qtdCalculos).fill(0)?.map(() => (
          <>
            <div className="total-group">
              <select onChange={handleCalculoSelectChange}>
                <option value={'conta'}>contar</option>
                <option value={'soma'}>somar</option>
                <option value={'percentual da conta'}>percentual da contagem</option>
                <option value={'percentual da soma'}>percentual da soma</option>
              </select>
              <select onChange={handleParametroSelectChange}>
                {optionsList?.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
          </>
        ))}
        <button className="add-button" onClick={() => setQtdCalculos(qtdCalculos + 1)}>Adicionar totais</button>
        <button className="remove-button" onClick={() => setQtdCalculos(qtdCalculos - 1)}>Remover totais</button>
        <button className="generate-table" onClick={handleSubmit}>Gerar tabela</button>
      </div>
    </>
  )
}

export default Config;
