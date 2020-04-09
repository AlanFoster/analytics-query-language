const neutrino = require('neutrino');

const config = neutrino().webpack();

module.exports = [
    // first build configuration
    config,

    // second build configuration
    { ...config },
];