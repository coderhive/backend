exports.seed = function(knex, Promise) {
	return knex("Follow").del().then(function() {
		return knex("Follow").insert([
			{ follower: 2, followee: 1 },
			{ follower: 3, followee: 1 },
			{ follower: 4, followee: 1 },
			{ follower: 5, followee: 1 },
			{ follower: 3, followee: 2 },
			{ follower: 4, followee: 2 },
			{ follower: 5, followee: 2 },
			{ follower: 2, followee: 3 },
			{ follower: 4, followee: 3 },
			{ follower: 5, followee: 3 },
			{ follower: 3, followee: 4 },
			{ follower: 5, followee: 4 },
			{ follower: 1, followee: 5 },
		]);
	});
};
