const EntityRepository = require("../respositories/EntityRepository");
const db = require("../../knex");

let followRepository = new EntityRepository({
	entityName: "Follow",
	db: db
});

module.exports = followRepository;
