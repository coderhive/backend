exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("User").del().then(function() {
		// Inserts seed entries
		return knex("User").insert([
			{
				email: "chuck@gmail.com",
				display_name: "chuck",
				hashed_password: "$2a$10$HbWgc.KjkddVG0eAW0DRdubASzK7i9Y72R1WTuYjuiBFfpTPAoPb6",
				role: "admin",
				experience: 4,
				summary: 'First user... yipee!'
			},
			{
				email: "melisa@gmail.com",
				display_name: "melisa",
				hashed_password: "$2a$10$HbWgc.KjkddVG0eAW0DRdubASzK7i9Y72R1WTuYjuiBFfpTPAoPb6",
				role: "admin",
                experience: 3,
                summary: 'My favorite website!'

            },
			{
				email: "jason@gmail.com",
				display_name: "jason",
				hashed_password: "$2a$10$HbWgc.KjkddVG0eAW0DRdubASzK7i9Y72R1WTuYjuiBFfpTPAoPb6",
                experience: 2,
                summary: 'Available to help ALL of you.'
            },
            {
                email: "steven@gmail.com",
                display_name: "steven",
                hashed_password: "$2a$10$HbWgc.KjkddVG0eAW0DRdubASzK7i9Y72R1WTuYjuiBFfpTPAoPb6",
                experience: 1,
                summary: 'Watch out for the eagle eyes!'
            },
            {
                email: "tim@gmail.com",
                display_name: "tim",
                hashed_password: "$2a$10$HbWgc.KjkddVG0eAW0DRdubASzK7i9Y72R1WTuYjuiBFfpTPAoPb6",
                experience: 5,
                summary: 'Single-line solutions or BUST!'
            }
		]);
	});
};
