import calculation from "./calculation";
import capitation from "./captation";
import filtering from "./filtering";
import mapping from "./mapping";
import toTable from "./table";
import toKeys from "./table/keys";

declare global {
  interface Array<T> {
    removeFalsy: () => any[];
    removeDuplicates: () => any[];
    createObject: () => Record<string, any>;
    flattenArray: () => any[];
    isArrayWithNestedArrays: () => boolean;
  }
}

Array.prototype.flattenArray = function () {
  const flattened = [];
  for (const item of this) {
    if (Array.isArray(item)) {
      flattened.push(...item.flattenArray());
    } else {
      flattened.push(item);
    }
  }
  return flattened;
}

Array.prototype.removeFalsy = function () {
  return this.filter(item => item !== undefined && item !== null);
}

Array.prototype.removeDuplicates = function () {
  return Array.from(new Set(this));
}

Array.prototype.createObject = function () {
  const result: Record<string, any> = {};
  for (let i = 0; i < this[0].length; i++) {
    result[this[0][i]] = this[1][i];
  }
  return result;
}

Array.prototype.isArrayWithNestedArrays = function () {
  if (!Array.isArray(this)) {
    return false;
  }
  for (const item of this) {
    if (!Array.isArray(item)) {
      return false;
    }
  }
  return true;
}

const core = {
  capitation,
  mapping,
  toTable,
  calculation,
  toKeys,
  filtering
}

export default core;
