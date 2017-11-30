const Resolver = require('../resolvers/EntityResolver');
const componentService = require('./componentService');

const componentResolver = new Resolver({
    entityName: 'Component',
    entityService: componentService
});

module.exports = componentResolver;
