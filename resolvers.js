const userResolver = require('./lib/instances/userResolver');

export default {
    Query: {
        allUsers: userResolver.getAll,
        oneUser: userResolver.getByEmail

    },
    // User: {
    //     components: componentResolver.getComponentForUser
    // }
};
















/*
    data: {
        allUsers: [
            {
                id
                name
                components: [
                 {
                 }
                ]
            }
        ]
    }
 */
