import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-768b68b2.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["todo-list",[[0,"todo-list",{"todoItems":[16]}]]],["todo-list-form",[[0,"todo-list-form",{"todoItemsLength":[2,"todo-items-length"],"value":[32]}]]],["todo-app",[[0,"todo-app",{"items":[32],"text":[32]}]]],["my-app",[[0,"my-app"]]]], options);
});
