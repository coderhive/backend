const userResolver = require('./lib/instances/userResolver');
const componentResolver = require('./lib/instances/componentResolver');
const voteResolver = require('./lib/instances/voteResolver');
const commentResolver = require('./lib/instances/commentResolver');
const fanResolver = require('./lib/instances/fanResolver');

export default {
    Query: {
        allUsers: userResolver.getAll,
        oneUser: userResolver.getByIdentifier,
    },
    Mutation: {
        createUser: userResolver.createNew,
        updateUser: userResolver.update,
        deleteUser: userResolver.delete,
    },
    User: {
        components: componentResolver.getByIdentifier,
        votes: voteResolver.getByUserIdSpecial,
        comments: commentResolver.getByUserId,
        fanOf: fanResolver.getByUserId,
    },
    Component: {
        votes: voteResolver.getByIdentifierSpecial,
        comments: commentResolver.getByIdentifier,
        fans: fanResolver.getByIdentifier,

    }
};

// Do joins to get Display_Name along with FAN, COMMENT, FOLLOW