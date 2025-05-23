const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  authorName: { type: String, required: true },
  postDate: { type: Date, required: true },
});

module.exports = mongoose.model("Blog", blogSchema);
