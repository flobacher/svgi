const pkg = require('./package.json');

export default {
  input: '.tmp/umd/index.js',
  output: {
    file: 'dist/umd/svginjector.js',
    format: 'umd',
    name: 'svgi'
  }
};
