import pool from "../pg.js";

export const getAllPosts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM blogPost");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "SELECT * FROM blogPost WHERE post_id=$1;",
      [id]
    );
    if (!result.rowCount)
      res.status(404).json({ message: "No BlogPost found" });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};