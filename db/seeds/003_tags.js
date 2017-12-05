exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("Tag").del().then(function() {
		// Inserts seed entries
		return knex("Tag").insert([
			{ name: "React" },
			{ name: "Angular" },
			{ name: "Form" },
			{ name: "Button" }
			]);
	});
};
