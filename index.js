const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { getAllAuthors } = require("./controllers/authors");
const { getAllPosts, getSinglePost } = require("./controllers/blogposts");

app.get("/", (req, res) => {
  res.send("Documentation text needed");
});

app.get("/authors", getAllAuthors);

app.get("/posts", getAllPosts);
app.get("/posts/:id", getSinglePost);

// Start server
app.listen(port, () => console.log(`Server running in port: ${port}`));
