import { a as patchEsm, b as bootstrapLazy } from './core-92768382.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["app-root_2",[[0,"app-root"],[0,"my-first-component",{"name":[1]}]]]], options);
  });
};

export { defineCustomElements };
