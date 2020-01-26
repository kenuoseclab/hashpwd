var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'hashpwd.js'
      },
      //mode: 'development',
      mode: 'production',
  };