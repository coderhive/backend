const userResolver = require('./lib/instances/userResolver');
const componentResolver = require('./lib/instances/componentResolver');

export default {
    Query: {
        allUsers: userResolver.getAll,
        oneUser: userResolver.getByIdentifier
    },
    Mutation: {
        createUser: userResolver.createNew
    },
    User: {
        components: componentResolver.getByIdentifier
    }
};