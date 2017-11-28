exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("Tag").del().then(function() {
		// Inserts seed entries
		return knex("Tag").insert([
			{ id: 1, name: "React" },
			{ id: 2, name: "Angular" },
			{ id: 3, name: "Form" }
		]);
	});
};
