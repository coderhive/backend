const knexConfig = require('./knexfile')[process.env.NODE_ENV];
const knex = require('knex');
module.exports = knex(knexConfig);



