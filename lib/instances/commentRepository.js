const EntityRepository = require("../respositories/EntityRepository");
const db = require("../../knex");

let commentRepository = new EntityRepository({
	entityName: "Comment",
	db: db
});

module.exports = commentRepository;
