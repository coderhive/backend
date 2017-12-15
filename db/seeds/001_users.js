exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("User").del().then(function() {
		// Inserts seed entries
		return knex("User").insert([
			{
				email: "chuck@gmail.com",
				display_name: "chuck hagy",
				hashed_password: "$2a$10$HbWgc.KjkddVG0eAW0DRdubASzK7i9Y72R1WTuYjuiBFfpTPAoPb6",
				role: "admin",
				experience: 4,
				summary: "First user... yipee!",
				profile_picture: "https://s3-us-west-1.amazonaws.com/coderhive/profile_1.jpeg"
			},
			{
				email: "melisa@gmail.com",
				display_name: "melisa im",
				hashed_password: "$2a$10$HbWgc.KjkddVG0eAW0DRdubASzK7i9Y72R1WTuYjuiBFfpTPAoPb6",
				role: "admin",
				experience: 3,
				summary: "My favorite website!",
				profile_picture: "https://s3-us-west-1.amazonaws.com/coderhive/profile_2.jpeg"
			},
			{
				email: "jason@gmail.com",
				display_name: "jason",
				hashed_password: "$2a$10$HbWgc.KjkddVG0eAW0DRdubASzK7i9Y72R1WTuYjuiBFfpTPAoPb6",
				experience: 2,
				summary: "Single-line solutions or BUST.",
				profile_picture: "https://s3-us-west-1.amazonaws.com/coderhive/profile_3.jpeg"
			},
			{
				email: "steven@gmail.com",
				display_name: "steven",
				hashed_password: "$2a$10$HbWgc.KjkddVG0eAW0DRdubASzK7i9Y72R1WTuYjuiBFfpTPAoPb6",
				experience: 1,
				summary: "Watch out for the eagle eyes!",
				profile_picture: "https://s3-us-west-1.amazonaws.com/coderhive/profile_4.jpeg"
			},
			{
				email: "tim@gmail.com",
				display_name: "tim",
				hashed_password: "$2a$10$HbWgc.KjkddVG0eAW0DRdubASzK7i9Y72R1WTuYjuiBFfpTPAoPb6",
				experience: 5,
				summary: "I hate Native!",
				profile_picture: "https://s3-us-west-1.amazonaws.com/coderhive/profile_5.jpeg"
			}
		]);
	});
};
