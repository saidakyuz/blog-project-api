const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { getAllAuthors } = require("./controllers/authors");
const { getAllPosts, getSinglePost } = require("./controllers/blogposts");
const { getCommentsOfPost, createPost } = require("./controllers/comments.js");

// Add Access Control Allow Origin headers
// Is currently open to all domains (hence the "*"), could be changed to our netlify-domain
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Enable body parsing for JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "<h1>This is the Sports Blog API</h1><br><h2>Those are the endpoints available:<h2/><p>To retrieve all authors: /authors</p><p>To retrieve all blogposts: /posts</p><p>To retrieve a single blogpost: /posts/:id</p><p>To retrieve a all comments of single blogpost: /posts/:id/comments</p>"
  );
});

app.get("/authors", getAllAuthors);

app.get("/posts", getAllPosts);
app.get("/posts/:id", getSinglePost);
app.post("/posts/:id/comments", createPost);
app.get("/posts/:id/comments", getCommentsOfPost);

// Start server
app.listen(port, () => console.log(`Server running in port: ${port}`));
