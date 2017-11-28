
exports.seed = function(knex, Promise) {
    return knex('User').del()
        .then(function () {
            return knex('User').insert([
                {email: 'chuckhagy@gmail.com', hashedPassword: '$2a$10$sMcezAa4d2XsUD/uAS41te5tVH0qeE4z9VoR.bv5bP7T.EfFfUAdm'},
            ]);
        });
};
