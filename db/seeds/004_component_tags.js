exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("Component_Tag").del().then(function() {
		// Inserts seed entries
		return knex("Component_Tag").insert([
			{ id: 1, tag_id: 1, component_id: 1 },
			{ id: 2, tag_id: 2, component_id: 1 },
			{ id: 3, tag_id: 3, component_id: 2 },
			{ id: 4, tag_id: 3, component_id: 1 },
			{ id: 5, tag_id: 3, component_id: 3 }
		]);
	});
};
