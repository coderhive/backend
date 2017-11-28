exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("User").del().then(function() {
		// Inserts seed entries
		return knex("User").insert([
			{
				id: 1,
				email: "chuckhagy@gmail.com",
				display_name: "chuck",
				hashed_password: "$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS"
			},
			{
				id: 2,
				email: "melisaim@gmail.com",
				display_name: "melisa",
				hashed_password: "$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS"
			},
			{
				id: 3,
				email: "jasonhsu@gmail.com",
				display_name: "jason",
				hashed_password: "$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS"
			}
		]);
	});
};
