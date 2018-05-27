import path from 'path';

export default {
  input: 'index.js',
  moduleName: 'proxied-fetch',
  output: [
    {
        file: `${path.resolve(__dirname)}/dist/bundle.umd.js`,
        format: 'umd',
        name: 'proxiedFetch'
    },
    {
        file: `${path.resolve(__dirname)}/dist/bundle.es.js`,
        format: 'es',
    }
  ]
}