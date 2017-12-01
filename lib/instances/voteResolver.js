const Resolver = require('../resolvers/EntityResolver');
const voteService = require('./voteService');

const voteResolver = new Resolver({
    entityName: 'Vote',
    entityService: voteService
});

module.exports = voteResolver;
