const { Pool } = require('pg');

const PG_URI = 'postgres://hgjokyvv:L-3l6fGPBbrGpqc0mMXAKayPv7CVy4A4@heffalump.db.elephantsql.com/hgjokyvv';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};