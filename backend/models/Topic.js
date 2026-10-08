const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        requierd: true
    }
});

module.exports = mongoose.model("Topic", topicSchema);