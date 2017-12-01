const userResolver = require('./lib/instances/userResolver');
const componentResolver = require('./lib/instances/componentResolver');
const voteResolver = require('./lib/instances/voteResolver');

export default {
    Query: {
        allUsers: userResolver.getAll,
        oneUser: userResolver.getByIdentifier
    },
    Mutation: {
        createUser: userResolver.createNew,
        updateUser: userResolver.update,
        deleteUser: userResolver.delete
    },
    User: {
        components: componentResolver.getByIdentifier,
        votes: voteResolver.getByUserId
    },
    Component: {
        votes: voteResolver.getByIdentifier
    }
};