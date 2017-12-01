const Resolver = require('../resolvers/EntityResolver');
const fanService = require('./fanService');

const fanResolver = new Resolver({
    entityName: 'Fan',
    entityService: fanService
});

module.exports = fanResolver;
