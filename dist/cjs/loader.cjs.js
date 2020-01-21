'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-f2d0d164.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["my-app_4.cjs",[[0,"my-app"],[0,"todo-app",{"items":[32],"text":[32]}],[0,"todo-list",{"todoItems":[16]}],[0,"todo-list-form",{"todoItemsLength":[2,"todo-items-length"],"value":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
