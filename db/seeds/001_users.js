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
				summary: 'First user... yipee!',
				profile_picture: 'https://www.funnypica.com/wp-content/uploads/2015/05/TOP-30-Cute-Cats-Cute-Cat-30.jpg'
			},
			{
				email: "melisa@gmail.com",
				display_name: "melisa im",
				hashed_password: "$2a$10$HbWgc.KjkddVG0eAW0DRdubASzK7i9Y72R1WTuYjuiBFfpTPAoPb6",
				role: "admin",
                experience: 3,
                summary: 'My favorite website!',
                profile_picture: 'https://i.imgur.com/vMOJDOk.jpg?1'


            },
			{
				email: "jason@gmail.com",
				display_name: "jason",
				hashed_password: "$2a$10$HbWgc.KjkddVG0eAW0DRdubASzK7i9Y72R1WTuYjuiBFfpTPAoPb6",
                experience: 2,
                summary: 'Single-line solutions or BUST.',
                profile_picture: 'http://www.twitrcovers.com/wp-content/uploads/2012/09/Cute-Cat.jpg'

            },
            {
                email: "steven@gmail.com",
                display_name: "steven",
                hashed_password: "$2a$10$HbWgc.KjkddVG0eAW0DRdubASzK7i9Y72R1WTuYjuiBFfpTPAoPb6",
                experience: 1,
                summary: 'Watch out for the eagle eyes!',
                profile_picture: 'https://img00.deviantart.net/b0ad/i/2010/006/6/0/cute_cat_by_tigercat_hu.jpg'

            },
            {
                email: "tim@gmail.com",
                display_name: "tim",
                hashed_password: "$2a$10$HbWgc.KjkddVG0eAW0DRdubASzK7i9Y72R1WTuYjuiBFfpTPAoPb6",
                experience: 5,
                summary: 'I hate Native!',
                profile_picture: 'https://i.ytimg.com/vi/xUGePDg4B1A/maxresdefault.jpg'

            }
		]);
	});
};
