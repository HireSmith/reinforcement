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

// CREATE TABLE "public.cards" (
// 	"_id" serial NOT NULL,
// 	"user_id" int NOT NULL,
//     "type" VARCHAR NOT NULL,
// 	"company" VARCHAR NOT NULL,
// 	"question" VARCHAR NOT NULL,
// 	"answer" VARCHAR NOT NULL,
// 	CONSTRAINT "cards_pk" PRIMARY KEY ("_id")
// ) WITH (
//   OIDS=FALSE
// );


