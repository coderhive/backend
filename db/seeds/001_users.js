exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("User").del().then(function() {
		// Inserts seed entries
		return knex("User").insert([
			{
				email: "chuckhagy@gmail.com",
				display_name: "chuck",
				hashed_password: "$2a$10$HbWgc.KjkddVG0eAW0DRdubASzK7i9Y72R1WTuYjuiBFfpTPAoPb6",
				role: "admin"
			},
			{
				email: "melisaim@gmail.com",
				display_name: "melisa",
				hashed_password: "$2a$10$HbWgc.KjkddVG0eAW0DRdubASzK7i9Y72R1WTuYjuiBFfpTPAoPb6",
                role: "admin"

            },
			{
				email: "jasonhsu@gmail.com",
				display_name: "jason",
				hashed_password: "$2a$10$HbWgc.KjkddVG0eAW0DRdubASzK7i9Y72R1WTuYjuiBFfpTPAoPb6"
			}
		]);
	});
};
