const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function override(config, env) {
  return {
    ...config,
    plugins: [
      new MonacoWebpackPlugin(),
      ...config.plugins
    ]
  };
};
