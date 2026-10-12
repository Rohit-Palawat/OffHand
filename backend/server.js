const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const topicRoutes = require("./routes/topicRoutes");

const app = express();

app.use(express.json());

app.use("/api/topics", topicRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err));

app.get("/", (req, res) => {
    res.send("OffHand API is running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});