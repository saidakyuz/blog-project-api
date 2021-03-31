const { Pool } = require("pg");
const connectionString = process.env.PG_CONNECTION;

const pool = new Pool({
  connectionString
});

module.exports = pool;