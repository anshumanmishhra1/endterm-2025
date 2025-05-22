// src/BlogForm.jsx
import React, { useState } from "react";
import axios from "axios";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    authorName: "",
    postDate: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/blogs", formData);
      alert("Blog post uploaded!");
      setFormData({
        title: "",
        content: "",
        authorName: "",
        postDate: new Date().toISOString().split("T")[0],
      });
    } catch (error) {
      console.error("Error submitting blog post:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-10">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          📝 Create a New Blog Post
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your content here..."
              required
              rows={6}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 resize-none"
            />
          </div>

          <div>
            <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">
              Author Name
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              value={formData.authorName}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="postDate" className="block text-sm font-medium text-gray-700">
              Post Date
            </label>
            <input
              type="date"
              id="postDate"
              name="postDate"
              value={formData.postDate}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              🚀 Submit Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
