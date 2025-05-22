const express = require("express");
const Blog = require("../models/Blog");

const router = express.Router();

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

module.exports = router;
