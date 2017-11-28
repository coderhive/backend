exports.up = function(knex, Promise) {
	return knex.schema.createTable("Component", table => {
		table.increments();
		table.integer("parent_component_id").references("id").inTable("Component").notNullable();
		table.text("code").notNullable();
		table.text("test").notNullable();
		table.varchar("framework").notNullable();
		table.varchar("title");
		table.varchar("privacy");
		table.varchar("status").notNullable().defaultTo("active");
		table.text("description");
		table.integer("clone_component_id").referenecs("id").inTable("Component").notNullable();
		table.varchar("language").notNullable();
		table.integer("user_id").references("id").inTable("User").notNullable();
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.raw("DROP TABLE \"Component\" CASCADE");
};
