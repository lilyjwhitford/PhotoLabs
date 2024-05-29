const pg = require("pg");
console.log(`Connecting to DB at ${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE} as ${process.env.PGUSER}`);

const client = new pg.Client({
  host: process.env.PGHOST,
  name: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
