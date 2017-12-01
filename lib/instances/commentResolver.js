const Resolver = require('../resolvers/EntityResolver');
const commentService = require('./commentService');

const commentResolver = new Resolver({
    entityName: 'Comment',
    entityService: commentService
});

module.exports = commentResolver;
