
exports.up = function(knex, Promise) {
    return knex.schema.createTable('User', table => {
        table.increments();
        table.specificType('email', 'char(100)').unique().notNullable();
        table.specificType('hashedPassword', 'char(100)').notNullable();
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('User')
};
