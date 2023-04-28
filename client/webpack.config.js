const path = require('path');

module.exports = {
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, "src/assets/"),
      Images: path.resolve(__dirname, "src/assets/images"),
      Menus: path.resolve(__dirname, "src/assets/images/menus"),
    },
  },
};
