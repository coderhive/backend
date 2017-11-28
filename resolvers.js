export default {
    Query: {
        allUsers: (parent, args, context) => {
            return context.db('User')
                .then(result => {
                    let outArr = result.map(userItem => {
                        let cleanedUser = Object.assign({}, userItem);
                        cleanedUser.email = cleanedUser.email.trim();
                        delete cleanedUser.hashedPassword;
                        return cleanedUser
                    });
                    return outArr
                })
        },
    }
};