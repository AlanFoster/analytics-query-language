// webpack-merge
const merge = require('webpack-merge');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const vscode = require.resolve('monaco-languageclient/lib/vscode-compatibility');

module.exports = function override(config, env) {
  return merge(config, {
    plugins: [
      new MonacoWebpackPlugin(),
    ],
    resolve: {
      alias: {
        vscode: vscode
      }
    }
  });
};
