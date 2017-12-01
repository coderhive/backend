
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Follow', table => {
      table.increments();
      table.integer("follower").references("id").inTable("User").notNullable();
      table.integer("followee").references("id").inTable("User").notNullable();
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Follow');
};
