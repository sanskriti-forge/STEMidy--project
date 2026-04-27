const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

app.post("/submit-score", (req, res) => {
    const { score } = req.body;
    console.log("Score:", score);
    res.send("Score received");
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});