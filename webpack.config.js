const path = require('path');

module.exports = {
  entry: './src/data.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
};
