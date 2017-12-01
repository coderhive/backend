const Resolver = require('../resolvers/EntityResolver');
const tagService = require('./tagService');

const tagResolver = new Resolver({
    entityName: 'Tag',
    entityService: tagService
});

module.exports = tagResolver;
