const express = require("express");
const Blog = require("../models/Blog");

const router = express.Router();

// POST: Create a new blog
router.post("/", async (req, res) => {
  try {
    const { title, content, authorName, postDate } = req.body;

    const newBlog = new Blog({ title, content, authorName, postDate });
    await newBlog.save();

    res.status(201).json({ message: "Blog created successfully", blog: newBlog });
  } catch (err) {
    console.error("Error creating blog:", err);
    res.status(500).json({ error: "Server error" });
  }
});

//📌this one is only for the postman request
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
