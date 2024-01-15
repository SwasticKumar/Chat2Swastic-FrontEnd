const path = require('path');

module.exports = {
  // ... other configurations

  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      // ... other rules
    ],
  },

  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'src/images'),
    },
  },
};
