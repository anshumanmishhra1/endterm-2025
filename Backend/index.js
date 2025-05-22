const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const blogRoutes = require('./routes/blogRoutes');

dotenv.config();
const app = express();

app.use(cors()); 
app.use(express.json());

// Routes
app.use('/api/blogs', blogRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });
})
.catch((err) => console.error("MongoDB connection error:", err));
