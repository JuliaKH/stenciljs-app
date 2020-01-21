import { Config } from '@stencil/core';
import analyze from 'rollup-plugin-analyzer'
// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'myApp',
  outputTargets: [{
    type: 'dist'
  }],
  plugins: [analyze({summaryOnly:true})]
};
