exports.up = function(knex, Promise) {
	return knex.schema.createTable("Component_Tag", table => {
		table.increments();
		table.integer("tag_id").references("id").inTable("Tag").notNullable().onDelete("cascade");
		table
			.integer("component_id")
			.references("id")
			.inTable("Component")
			.notNullable()
			.onDelete("cascade");
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable("Component_Tag");
};
