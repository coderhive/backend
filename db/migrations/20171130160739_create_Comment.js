
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Comment', table => {
        table.increments();
        table.integer("user_id").references("id").inTable("User").notNullable();
        table.integer("component_id").references("id").inTable("Component").notNullable();
        table.text("comment").notNullable();
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Comment');
};
