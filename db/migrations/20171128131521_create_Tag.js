exports.up = function(knex, Promise) {
	return knex.schema.createTable("Tag", table => {
		table.increments();
		table.varchar("name");
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.raw("DROP TABLE \"Tag\" CASCADE");
};
