const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { getAllAuthors } = require("./controllers/authors");
const { getAllPosts, getSinglePost } = require("./controllers/blogposts");

app.get("/", (req, res) => {
  res.send(
    "<h1>This is the Sports Blog API</h1><br><h2>Those are the endpoints available:<h2/><p>To retrieve all authors: /authors</p><p>To retrieve all blogposts: /posts</p><p>To retrieve a single blogpost: /posts/:id</p>"
  );
});

app.get("/authors", getAllAuthors);

app.get("/posts", getAllPosts);
app.get("/posts/:id", getSinglePost);

// Start server
app.listen(port, () => console.log(`Server running in port: ${port}`));
