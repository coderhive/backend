const Resolver = require('../resolvers/EntityResolver');
const componentTagService = require('./componentTagService');

const componentTagResolver = new Resolver({
    entityName: 'Tag',
    entityService: componentTagService
});

module.exports = componentTagResolver;
