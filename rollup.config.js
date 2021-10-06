
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'src/functions.js',
    output: {
      dir: 'output',
      format: 'umd'
    },
    plugins: [nodeResolve({
        mainFields: ['module', 'main', 'browser']
    })]
  };