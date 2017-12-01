const userResolver = require('./lib/instances/userResolver');
const componentResolver = require('./lib/instances/componentResolver');
const voteResolver = require('./lib/instances/voteResolver');
const commentResolver = require('./lib/instances/commentResolver');
const fanResolver = require('./lib/instances/fanResolver');
const tagResolver = require('./lib/instances/tagResolver');

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
        votes: voteResolver.getByUserId,
        comments: commentResolver.getByUserId,
        fanOf: fanResolver.getByUserId,
    },
    Component: {
        votes: voteResolver.getByIdentifier,
        comments: commentResolver.getByIdentifier,
        fans: fanResolver.getByIdentifier,
        tags: tagResolver.getTagsByComponent,

    }
};

// Do joins to get Display_Name along with FAN, COMMENT, FOLLOW