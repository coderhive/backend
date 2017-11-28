const userResolver = require('./lib/instances/userResolver');

export default {
    Query: {
        allUsers: userResolver.getAll
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
