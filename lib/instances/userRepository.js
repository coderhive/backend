const EntityRepository = require("../respositories/EntityRepository");
const db = require("../../knex");

let userRepository = new EntityRepository({
	entityName: "User",
	db: db
});

module.exports = userRepository;
