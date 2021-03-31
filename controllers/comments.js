import pool from "../pg";

export const getCommentsOfPost = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await pool.query(
      "SELECT * FROM comments WHERE post_id=$1;",
      [id]
    );
    if (!results.rowCount)
      res.status(404).json({ message: "This article has no comments yet" });
    res.json(results.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, title, comment } = req.body;
    const result = await pool.query(
      "INSERT INTO comments(name, title, comment, post_id) VALUES($1, $2, $3, $4) RETURNING *;",
      [name, title, comment, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};