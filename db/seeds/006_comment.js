exports.seed = function(knex, Promise) {
	return knex("Comment").del().then(function() {
		return knex("Comment").insert([
			{ user_id: 1, component_id: 1, comment: "I love this component!" },
			// { user_id: 1, component_id: 2, comment: "Just okay in my opinion" },
			// { user_id: 1, component_id: 3, comment: "Why not? Let's do this!" },
			// { user_id: 2, component_id: 3, comment: "just so-so imho" },
			// {
			// 	user_id: 3,
			// 	component_id: 1,
			// 	comment: "FML! Why didn't I have CoderHive when I was younger!"
			// }
		]);
	});
};
