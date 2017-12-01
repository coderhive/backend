import EntityRepository from '../respositories/EntityRepository'
const db = require('../../knex');

let tagRepository = new EntityRepository ({
    entityName: 'Component_Tag',
    db: db
});

module.exports = tagRepository;