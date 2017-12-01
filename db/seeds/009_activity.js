exports.seed = function(knex, Promise) {
	return knex("Activity").del().then(function() {
		return knex("Activity").insert([
			{ type: "created", user_id: 3 },
			{ type: "modified", component_id: 1 },
			{ type: "created", fan_id: 2 },
			{ type: "created", vote_id: 3 },
			{ type: "created", comment_id: 1 },
			{ type: "created", follow_id: 2 }
		]);
	});
};
