import pool from "../pg";

export const getAllAuthors = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM authors");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};