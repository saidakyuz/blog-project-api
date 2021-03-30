const pool = require("../pg");


const getCommentsOfPost = async (req, res) => {
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
    res.status(500).json({error: error.message});
  }
};


module.exports = { getCommentsOfPost };
