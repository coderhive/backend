exports.seed = function(knex, Promise) {
	return knex("Activity").del().then(function() {
		return knex("Activity").insert([
			{ type: "newComponent", component_id: 1, user_id: 1, owner_id: 1},
			// { type: "newComponent", component_id: 1, user_id: 1, owner_id: 1 },
			// { type: "newVote", component_id: 2, user_id: 1, owner_id: 1 },
			// { type: "newComment", component_id: 1, user_id: 2, comment_id: 1, owner_id: 1 },
		]);
	});
};
