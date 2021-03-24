const { Pool } = require("pg");

// import { Pool } from "pg";

const pool = new Pool({
  user: "uloaenmp",
  host: "tai.db.elephantsql.com",
  database: "uloaenmp",
  password: "0fzsGpMVmWvxWc-Uv4HUAHwMQ7OHfJ6b",
  port: 5432,
});

module.exports = pool;
