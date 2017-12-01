const Resolver = require('../resolvers/EntityResolver');
const followService = require('./followService');

const followResolver = new Resolver({
    entityName: 'Follow',
    entityService: followService
});

module.exports = followResolver;
