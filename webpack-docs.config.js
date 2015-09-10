module.exports = require("./make-webpack-config")({
  entry: {
    app: "./src/js/index.js",
    docs: "./src/less/style.less"
  },
  separateStylesheet: true,
  path: "./docs/dist"
  //library: "app"
});
