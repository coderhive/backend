const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = require('./env');

module.exports = {
  [process.env.NODE_ENV]: {
    client: 'pg',
    connection: {
      host: PGHOST,
      database: PGDATABASE,
      user: PGUSER,
      password: PGPASSWORD
    }
  }
};
