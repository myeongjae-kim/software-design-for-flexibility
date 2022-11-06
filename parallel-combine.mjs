import {apply} from "./apply.mjs"

export const parallelCombine = (h, f, g) => {
  const theCombination = (...args) => {
    return h(apply(f, ...args), apply(g, ...args));
    // return h(f(...args), g(...args));
  }

  return theCombination;
}
