import { a as patchEsm, b as bootstrapLazy } from './core-92768382.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["app-root_2", [[0, "app-root"], [0, "my-first-component", { "name": [1] }]]]], options);
    });
};
export { defineCustomElements };