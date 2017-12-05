exports.up = function(knex, Promise) {
	return knex.schema.createTable("Component", table => {
		table.increments();
		table.varchar("status").notNullable().defaultTo("active");
		table.text("code");
		table.text("css");
		table.text("test");
		table.integer("parent_component_id").references("id").inTable("Component");
		table.integer("clone_component_id").references("id").inTable("Component");
		table.varchar("language").notNullable();
		table.varchar("framework").notNullable();
		table.varchar("privacy");
		table.varchar("title");
		table.text("description");
		table.integer("owner_user_id").references("id").inTable("User").notNullable();
		table.text("component_picture");
		table.integer("score").notNullable().defaultTo(0);
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.raw("DROP TABLE \"Component\" CASCADE");
};
