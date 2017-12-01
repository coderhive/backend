exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("Component").del().then(function() {
		// Inserts seed entries
		return knex("Component").insert([
			{
				code: "<MyFirstComponent/>",
				test: null,
				language: "JavaScript",
				owner_user_id: 1,
				framework: "React",
				title: "First!",
				description: "idk"
			},
			{
				code: "<MyFirstComponentChild/>",
				test: null,
				language: "JavaScript",
				owner_user_id: 2,
				framework: "React",
				title: "Second!",
				description: "idk?",
				parent_component_id: 1
			},
			{
				code: "<MyFirstComponentAngular/>",
				test: null,
				language: "JavaScript",
				owner_user_id: 3,
				framework: "Angular",
				title: "First!",
				description: "idk",
				clone_component_id: 1
			}
		]);
	});
};
