exports.up = function(knex, Promise) {
	return knex.schema.createTable("Activity", table => {
		table.increments();
		table.varchar("type").notNullable();
		table.integer("user_id").references("id").inTable("User");
		table.integer("component_id").references("id").inTable("Component");
		table.integer("comment_id").references("id").inTable("Comment");
		table.integer("owner_id").references("id").inTable("User").notNullable();
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable("Activity");
};
