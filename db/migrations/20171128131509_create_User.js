exports.up = function(knex, Promise) {
	return knex.schema.createTable("User", table => {
		table.increments();
		table.varchar("email").notNullable().unique();
		table.varchar("display_name").notNullable();
		table.varchar("status").notNullable().defaultTo("active");
		table.varchar("experience").notNullable().defaultTo("0");
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.raw("DROP TABLE \"User\" CASCADE");
};
