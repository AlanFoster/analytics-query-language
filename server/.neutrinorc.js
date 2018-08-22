const typescriptLoader = require.resolve('awesome-typescript-loader');

module.exports = {
  use: [
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
   '@neutrinojs/jest',
  ]
};
