exports.seed = function(knex, Promise) {
	return knex("Vote").del().then(function() {
		return knex("Vote").insert([
			{ user_id: 1, component_id: 1, vote: -1 },
			// { user_id: 1, component_id: 2, vote: 0 },
			// { user_id: 1, component_id: 3, vote: 1 },
			// { user_id: 2, component_id: 3, vote: -1 },
			// { user_id: 3, component_id: 1, vote: 1 }
		]);
	});
};
