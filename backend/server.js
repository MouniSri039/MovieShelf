
require("dotenv").config();

const authRoutes = require("./routes/auth");
const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();
const PORT = 5000;

// allow requests from the react frontend
app.use(cors());

// allow the server to receive json data
app.use(express.json());
app.use("/api/auth", authRoutes);

// basic test route
app.get("/", (req, res) => {
  res.json({
    message: "MovieShelf backend is running!",
  });
});

app.listen(PORT, () => {
  console.log(`MovieShelf server running on http://localhost:${PORT}`);
});
