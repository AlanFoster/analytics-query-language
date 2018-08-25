const typescriptLoader = require.resolve('awesome-typescript-loader');

module.exports = {
  use: [
    // Let's skip over linting for now as this is only a spike project
    // [
    //   '@neutrinojs/airbnb-base',
    //   {
    //     eslint: {
    //       rules: {
    //         'import/extensions': 'off',
    //         'no-unused-vars': ["error", { "argsIgnorePattern": "^_" }],
    //         'import/prefer-default-export': 'off',
    //         // Prettier would solve this issue
    //         'max-len': 'off',
    //         // Note: eslint doesn't seem to be honoring the webpack resolver setting
    //         'import/no-unresolved': 'off',
    //         'no-console': 'off',
    //         'func-names': 'off',
    //         'no-plusplus': ['error', {
    //           "allowForLoopAfterthoughts": true
    //         }],
    //         'no-template-curly-in-string': 'off'
    //       },
    //       "settings": {
    //         "import/resolver": "webpack"
    //       }
    //     }
    //   }
    // ],

    // Remove typescript from the default extension list before Jest runs,
    // as it generates invalid configuration otherwise
    (neutrino) => {
      neutrino.options.extensions = [ 'js', 'jsx', 'vue', 'mjs' ];
    },

    [
      '@neutrinojs/jest',
      {
        "transform": {
          "^.+\\.tsx?$": "ts-jest"
        },
        "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
        "moduleFileExtensions": [
          "ts",
          "tsx",
          "js",
          "jsx",
          "json",
          "node"
        ]
      }
    ],

    '@neutrinojs/node',
    (neutrino) => {
      const { config } = neutrino;

      config.resolve.extensions.prepend('.ts');

      config.module
        .rule('compile')
          .test(/\.tsx?$/)
          .use('ts')
            .loader(typescriptLoader);
    },
  ]
};
