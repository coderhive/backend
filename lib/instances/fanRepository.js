import EntityRepository from '../respositories/EntityRepository'
const db = require('../../knex');

let fanRepository = new EntityRepository ({
    entityName: 'Fan',
    db: db
});

module.exports = fanRepository;