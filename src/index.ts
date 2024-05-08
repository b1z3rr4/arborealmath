import core from "./core";
// import { Config as ConfigType } from "./core/types";
// import { base } from './data/base';
// import Config from './view/components/Config';
// import TableView from './view/index';

// const collection = ['numeroDaCena', 'nomeCenario', 'nomeAmbiente'];

// const config: ConfigType<typeof collection[number]> = {
//   calculation: ['conta', 'soma', 'percentual da conta', 'percentual da soma'],
//   parameter: ['atorPersonagem', 'tamanho', 'atorPersonagem', 'tamanho'],
// }

// const valuesColletion = core.capitation({ data: base, collection });

// const list = ['numeroDaCena', 'nomeCenario', 'nomeAmbiente'];

// const filter = [
//   { key: 'nomeCenario', values: ["SALA DE TALITA"] },
// ]

// const filtering = core.filtering({ data: base, filter: filter })

// const mapping = core.mapping({ data: base, list }); // todos os dados das combinacoes de keys solicitadas repetidos de acordo com os objetos

// const toTable = core.toTable({ dataMapping: mapping }); // todos as combinacoes alinhadas e unificadas para montar a tabela

// const calculation = core.calculation({ data: base, config: config, valuesCombination: toTable, list });

// const newKeys = core.toKeys({ list, calculation: config.calculation, parameter: config.parameter });

// console.log(filtering);
// console.log(calculation);

export { core as default };
