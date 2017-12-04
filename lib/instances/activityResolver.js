const Resolver = require('../resolvers/EntityResolver');
const activityService = require('./activityService');

const voteResolver = new Resolver({
    entityName: 'Activity',
    entityService: activityService
});

module.exports = voteResolver;
