require("dotenv").config();
const mongoose = require("mongoose");
const Topic = require("./models/Topic");

const topics = [
    {
        title: "Is social media making us less social?",
        category: "Technology"
    },
    {
        title: "Should college attendance be mandatory?",
        category: "Education"
    },
    {
        title: "Is artificial intelligence a threat to jobs?",
        category: "Technology"
    },
    {
        title: "Does money buy happiness?",
        category: "Life"
    },
    {
        title: "Should everyone learn how to code?",
        category: "Education"
    },
    {
        title: "Is failure necessary for success?",
        category: "Life"
    },
    {
        title: "Should students be allowed to use phones in class?",
        category: "Education"
    },
    {
        title: "Is remote work better than working from an office?",
        category: "Work"
    }
];

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("MongoDB connected");

        await Topic.deleteMany();
        await Topic.insertMany(topics);

        console.log("Topics added successfully");

        mongoose.connection.close();
    })
    .catch(err => {
        console.log("Error:", err);
    });