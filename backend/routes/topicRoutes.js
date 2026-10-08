const express = require("express");
const Topic = require("../models/Topic");

const router = express.Router();

router.get("/random", async (req, res) => {
    try {
        const count = await Topic.countDocuments();

        if (count === 0) {
            return res.status(404).json({
                message: "No topics available"
            });
        }

        const random = Math.floor(Math.random() * count);
        const topic = await Topic.findOne().skip(random);

        res.json(topic);
    } catch (err) {
        res.status(500).json({
            message: "Failed to fetch topic"
        });
    }
});

module.exports = router;