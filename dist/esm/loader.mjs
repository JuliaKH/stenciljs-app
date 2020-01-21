import { a as patchEsm, b as bootstrapLazy } from './core-8aca83a4.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["my-app_4",[[0,"my-app"],[0,"todo-app",{"items":[32],"text":[32]}],[0,"todo-list",{"todoItems":[16]}],[0,"todo-list-form",{"todoItemsLength":[2,"todo-items-length"],"value":[32]}]]]], options);
  });
};

export { defineCustomElements };
