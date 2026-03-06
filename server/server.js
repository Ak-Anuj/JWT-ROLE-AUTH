const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/jwtroles");

app.listen(5000, () => {
  console.log("Server running on port 5000");
});