require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// API Endpoint
app.get("/", (req, res) => {
  res.json({
    email: "emmanueloguneko@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/darionnuel/basic_api",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
