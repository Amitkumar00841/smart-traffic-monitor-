const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/start", (req, res) => {
    const sampleData = {
        plate: "MP09AB1234",
        violation: "Red Light Jump"
    };

    res.json(sampleData);
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});