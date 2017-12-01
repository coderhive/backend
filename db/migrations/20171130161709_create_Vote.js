exports.up = function(knex, Promise) {
	return knex.schema.createTable("Vote", table => {
		table.increments();
		table.integer("user_id").references("id").inTable("User").notNullable();
		table.integer("component_id").references("id").inTable("Component").notNullable();
		table.integer("vote").notNullable();
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable("Vote");
};
