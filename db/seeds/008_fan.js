exports.seed = function(knex, Promise) {
	return knex("Fan").del().then(function() {
		return knex("Fan").insert([
			{ user_id: 1, component_id: 1 },
			// { user_id: 1, component_id: 2 },
			// { user_id: 1, component_id: 3 },
			// { user_id: 2, component_id: 3 },
			// { user_id: 3, component_id: 1 }
		]);
	});
};
