import { Config } from '@stencil/core';
import analyze from 'rollup-plugin-analyzer'
import { less } from '@stencil/less';

export const config: Config = {
  // namespace: 'myApp',
  outputTargets: [{
    type: 'www',
    baseUrl:'https://stenciljs.com/'
  }],
  globalStyle: 'src/global/variables.css',
  plugins: [
      analyze({summaryOnly:true}),
    less()
  ]
};
