exports.seed = function(knex, Promise) {
	return knex("Follow").del().then(function() {
		return knex("Follow").insert([
			{ follower: 1, followee: 2 },
			{ follower: 2, followee: 3 },
			{ follower: 3, followee: 1 }
		]);
	});
};
