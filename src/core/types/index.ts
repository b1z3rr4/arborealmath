export type Collection = Array<string>;

export type CalculationOptions = 'soma' | 'conta' | 'percentual da conta' | 'percentual da soma';

export type Config<T extends string | number | symbol> = {
  calculation: Array<CalculationOptions>;
  parameter: Array<string>;
}

export type Tree = {
  [key: string]: any;
  children?: Tree[];
}

export type CollectionCapitation = Record<string, Array<string | number | boolean>>;
