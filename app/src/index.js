require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    environment: process.env.NODE_ENV,
    logLevel: process.env.LOG_LEVEL,
    database: process.env.DB_URL,
    message: "Hello from DevOps Multi-Environment App 🚀"
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
