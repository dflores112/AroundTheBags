const path = require('path');


module.exports = {
  entry: './public/src/App.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  output: { 
    filename: 'bundle.js',
    path: path.resolve(__dirname,'./public/dist/'),
  },
};
