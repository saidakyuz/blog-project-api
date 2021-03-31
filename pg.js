import pg from 'pg';
const { Pool } = pg;
const connectionString = process.env.PG_CONNECTION;

const pool = new Pool({
  connectionString
});

export default pool;