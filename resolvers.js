const userResolver = require('./lib/instances/userResolver');
const componentResolver = require('./lib/instances/componentResolver');
const voteResolver = require('./lib/instances/voteResolver');
const commentResolver = require('./lib/instances/commentResolver');
const fanResolver = require('./lib/instances/fanResolver');
const tagResolver = require('./lib/instances/tagResolver');
const followResolver = require('./lib/instances/followResolver');
const activityResolver = require('./lib/instances/activityResolver');

export default {
    Query: {
        loggedUser: userResolver.getById,
        allUsers: userResolver.getAll,
        oneUser: userResolver.getByIdentifier,
        oneComponent: componentResolver.getById,
        allComponents: componentResolver.getAll,
        activities: activityResolver.getActivity,
    },
    Mutation: {
        createUser: userResolver.createNew,
        updateUser: userResolver.update,
        deleteUser: userResolver.delete,

        createFan: fanResolver.createNew,
        deleteFan: fanResolver.delete,

        createVote: voteResolver.createNew,
        deleteVote: voteResolver.delete,
    },
    User: {
        components: componentResolver.getByIdentifier,
        votes: voteResolver.getByUserId,
        comments: commentResolver.getByUserId,
        fanOf: fanResolver.getByUserId,
        followers: followResolver.getFollowers,
        whoIFollow: followResolver.getFollowees,
    },
    Component: {
        votes: voteResolver.getByIdentifier,
        comments: commentResolver.getByIdentifier,
        fans: fanResolver.getByIdentifier,
        tags: tagResolver.getTagsByComponent,
        owner: userResolver.getOwnerByParentComponentId,
        myParent: componentResolver.getParent,
        myChildren: componentResolver.getChildren,
        myCloneSource: componentResolver.getCloneSource,
        myClones: componentResolver.getClones,
    },
    Activity: {
        component: activityResolver.getByIdentifier,
        user: activityResolver.getByUserId,
        comment: activityResolver.getComment
    }
};

// Do joins to get Display_Name along with FAN, COMMENT, FOLLOW