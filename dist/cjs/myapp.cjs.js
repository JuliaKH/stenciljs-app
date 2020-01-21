'use strict';

const core = require('./core-04768615.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["app-root_2.cjs",[[0,"app-root"],[0,"my-first-component",{"name":[1]}]]]], options);
});
