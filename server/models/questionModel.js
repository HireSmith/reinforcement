const { Pool } = require('pg');
const path = require('path');

const PG_URI =
  'postgres://hgjokyvv:L-3l6fGPBbrGpqc0mMXAKayPv7CVy4A4@heffalump.db.elephantsql.com/hgjokyvv';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});
// console.log(pool.query());

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};