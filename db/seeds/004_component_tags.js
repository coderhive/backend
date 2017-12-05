exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("Component_Tag").del().then(function() {
		// Inserts seed entries
		return knex("Component_Tag").insert([
			{ tag_id: 1, component_id: 1 },
			{ tag_id: 3, component_id: 1 },
			{ tag_id: 1, component_id: 2 },
			{ tag_id: 3, component_id: 2 },
			{ tag_id: 1, component_id: 3 },
			{ tag_id: 4, component_id: 3 },
			{ tag_id: 1, component_id: 4 },
			{ tag_id: 4, component_id: 4 },
			{ tag_id: 1, component_id: 5 },
			{ tag_id: 4, component_id: 5 },
			{ tag_id: 1, component_id: 6 },
			{ tag_id: 3, component_id: 6 },
			{ tag_id: 1, component_id: 7 },
			{ tag_id: 3, component_id: 7 },
			{ tag_id: 1, component_id: 8 },
			{ tag_id: 4, component_id: 8 },
			{ tag_id: 1, component_id: 9 },
			{ tag_id: 4, component_id: 9 },
			{ tag_id: 1, component_id: 10 },
			{ tag_id: 4, component_id: 10},
			{ tag_id: 1, component_id: 11 },
			{ tag_id: 3, component_id: 11 },
			{ tag_id: 1, component_id: 12 },
			{ tag_id: 3, component_id: 12 },
			{ tag_id: 1, component_id: 13 },
			{ tag_id: 4, component_id: 13 },
			{ tag_id: 1, component_id: 14 },
			{ tag_id: 4, component_id: 14 },
			{ tag_id: 1, component_id: 15 },
			{ tag_id: 4, component_id: 15 },
			{ tag_id: 1, component_id: 16 },
			{ tag_id: 3, component_id: 16 },
			{ tag_id: 1, component_id: 17 },
			{ tag_id: 3, component_id: 17 },
			{ tag_id: 1, component_id: 18 },
			{ tag_id: 4, component_id: 18 },
			{ tag_id: 1, component_id: 19 },
			{ tag_id: 4, component_id: 19 },
			{ tag_id: 1, component_id: 20 },
			{ tag_id: 4, component_id: 20},

		]);
	});
};
