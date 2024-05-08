# Arboreal Math

A biblioteca **Arboreal Math** é uma ferramenta que simplifica a criação dinâmica de tabelas a partir de bases de dados. Ela permite que os desenvolvedores definam uma coleção e escolham propriedades específicas para criar tabelas personalizadas com recursos de filtragem, mapeamento, cálculos e visualização. Este documento fornece uma visão geral dos recursos e métodos disponíveis na biblioteca, bem como exemplos de uso.

## Instalação

Para começar a usar o  **Arboreal Math** , você pode instalá-lo usando o gerenciador de pacotes:

```js
  npm install arborealmath
```

## Uso Básico

Aqui estão os principais métodos oferecidos pela biblioteca:

### `core.capitation({ data, collection })`

O método `core.capitation` busca as chaves da coleção especificada e retorna os valores correspondentes à propriedade indicada em cada objeto. Ele é útil para criar um array de arrays contendo todos os valores de uma determinada propriedade, permitindo que os desenvolvedores construam facilmente opções de filtro para suas tabelas.

Exemplo de uso:

```js
import { core } from 'arboreal-math';

const data = [...]; // Sua base de dados
const collection = ['nome']; // As propriedades desejada

const capitationResult = core.capitation({ data, collection });
console.log(capitationResult);
```

### `core.mapping({ data, list })`

O método `core.mapping` extrai as chaves escolhidas pelo usuário, presentes na lista fornecida, e utiliza essas chaves para montar a tabela com os dados correspondentes da base de dados. Isso permite criar tabelas personalizadas com as informações relevantes.

Exemplo de uso:

```js
import { core } from 'arboreal-math';

const data = [...]; // Sua base de dados
const list = ['nome', 'idade', 'email']; // Chaves escolhidas

const mappingResult = core.mapping({ data, list });
console.log(mappingResult);
```

### `core.toTable({ dataMapping })`

O método `core.toTable` transforma o resultado do método `core.mapping` em um formato de dados adequado para a construção da tabela. Ele prepara os dados para a exibição visual da tabela.

Exemplo de uso:

```js
import { core } from 'arboreal-math';

const dataMapping = [...]; // Resultado do core.mapping

const tableData = core.toTable({ dataMapping });
console.log(tableData);
```

### `core.calculation({ data, config, valuesCombination, list })`

O método `core.calculation` recebe os dados da tabela e realiza cálculos personalizados, como contagem, soma e percentual, com base nas informações fornecidas pelo usuário. Isso permite a adição de totais e estatísticas à tabela.

Exemplo de uso:

```js
import { core } from 'arboreal-math';

const data = [...]; // Dados da tabela
const config = {
  calculation: ['conta', 'soma', 'percentual da conta'],
  parameter: ['nome', 'idade', 'email'],
};
const valuesCombination = [...]; // Resultado do core.toTable
const list = ['nome', 'idade', 'email']; // Chaves escolhidas

const calculatedTableData = core.calculation({ data, config, valuesCombination, list });
console.log(calculatedTableData);
```

### `core.toKeys({ list, calculation, parameter })`

O método `core.toKeys` gera o cabeçalho da tabela, incluindo as chaves escolhidas pelo usuário e os totais calculados. Ele fornece o formato apropriado para a exibição da tabela com as informações desejadas.

Exemplo de uso:

```js
import { core } from 'arboreal-math';

const list = ['nome', 'idade', 'email']; // Chaves escolhidas
const config = {
  calculation: ['conta', 'soma', 'percentual da conta'],
  parameter: ['nome', 'idade', 'email'],
};

const tableHeader = core.toKeys({ list, calculation: config.calculation, parameter: config.parameter });
console.log(tableHeader);
```

### `core.filtering({ data, filter })`

O método `core.filtering` gera um novo array de objetos filtrados de acordo com as escolhas do usuário final. Ele fornece o array de objetos a ser utilizado pelas outras funções do core.

Exemplo de uso:

```js
import { core } from 'arboreal-math';

const data = [...]; // Sua base de dados
const filter = [
  { key: 'nome', values: ["JOAO", "NATALIA", "AMELIA", "LUISA", "JONAS"] },
  { key: 'idade', values: [15, 16, 17, 18] },
]

const dataFilter = core.filtering({ data, filter });
console.log(dataFilter);
```

## Contribuição

Agradecemos por considerar contribuir para o  **Arboreal Math** ! Sinta-se à vontade para criar *pull requests* com melhorias, correções ou novos recursos. Certifique-se de seguir nossas diretrizes de contribuição.

## Licença

Este projeto está licenciado sob a Licença MIT.

---

Esperamos que o **Arboreal Math** seja uma ferramenta valiosa para o seu projeto! Se tiver alguma dúvida ou sugestão, não hesite em entrar em contato.
