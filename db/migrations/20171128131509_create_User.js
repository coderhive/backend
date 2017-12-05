exports.up = function(knex, Promise) {
	return knex.schema.createTable("User", table => {
		table.increments();
		table.varchar("email").notNullable().unique();
		table.varchar("hashed_password").notNullable();
		table.varchar("display_name").notNullable();
		table.varchar("summary");
		table.varchar("status").notNullable().defaultTo("active");
		table.varchar("role").notNullable().defaultTo("user");
		table.varchar("experience").notNullable().defaultTo("0");
		table.varchar("profile_picture");
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.raw("DROP TABLE \"User\" CASCADE");
};

// votes (and join)
// components-comments (and join)

// users-follow (and join)
// components-follow (and join)
