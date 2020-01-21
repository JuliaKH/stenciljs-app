'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-04768615.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["app-root_2.cjs",[[0,"app-root"],[0,"my-first-component",{"name":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
