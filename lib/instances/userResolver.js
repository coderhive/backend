const Resolver = require('../resolvers/EntityResolver');
const userService = require('./userService');

const userResolver = new Resolver({
    entityName: 'User',
    entityService: userService
});

module.exports = userResolver;
