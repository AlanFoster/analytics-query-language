const jest = require('@neutrinojs/jest');
const node = require('@neutrinojs/node');

// Extracted from git+https://github.com/davidje13/neutrino-typescript#semver:^1.0.10, with the addition of @babel/plugin-proposal-decorators

const applyNeutrinoPatches = require('neutrino-patch');
const generateDeclaration = require('neutrino-typescript/generateDeclaration');

function hasEntry(list, resolvedPath) {
  return list
      .map((v) => Array.isArray(v) ? v[0] : v)
      .includes(resolvedPath);
}

function addIfAbsent(list, entry) {
  entry[0] = require.resolve(entry[0]);

  if (!hasEntry(list, entry[0])) {
    list.push(entry);
  }
}

const typescript = ({
                    declaration = false,
                    declarationMap = true,
                    looseProperties = false,
                    looseNullCheck = false,
                  }) => (neutrino) => {
  applyNeutrinoPatches(neutrino);

  neutrino.addSupportedExtensions('ts', 'tsx');
  neutrino.tapAtEnd('compile', 'babel', (options) => {
    addIfAbsent(options.presets, ['@babel/preset-typescript', {}]);
    addIfAbsent(options.plugins, ['@babel/plugin-proposal-decorators', { legacy: true }]);
    addIfAbsent(options.plugins, ['@babel/plugin-proposal-class-properties', { loose: looseProperties }]);
    addIfAbsent(options.plugins, ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: looseNullCheck }]);
    addIfAbsent(options.plugins, ['@babel/plugin-proposal-object-rest-spread', {
      loose: looseProperties,
      useBuiltIns: looseProperties,
    }]);
    addIfAbsent(options.plugins, ['@babel/plugin-proposal-optional-chaining', { loose: looseNullCheck }]);
    return options;
  });

  if (declaration) {
    neutrino.config.plugin('emitTypescriptDeclaration').use({
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('GenerateTypescriptDeclatation', () => {
          generateDeclaration(neutrino, declarationMap);
        });
      },
    });
  }
};

module.exports = {
  options: {
    root: __dirname,
  },
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

    jest({
      "transform": {
        "^.+\\.tsx?$": "ts-jest"
      },
      "testPathIgnorePatterns": [
        "node_modules",
        "out",
        "build"
      ],
      "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
      "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
      ]
    }),

    typescript({
      looseProperties: true
    }),

    node()
  ]
};
