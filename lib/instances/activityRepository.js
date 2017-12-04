import EntityRepository from '../respositories/EntityRepository'
const db = require('../../knex');

let activityRepository = new EntityRepository ({
    entityName: 'Activity',
    db: db
});

module.exports = activityRepository;