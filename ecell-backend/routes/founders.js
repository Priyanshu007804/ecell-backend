const express = require("express");
const router = express.Router();
const Founder = require("../models/Founder");

router.get("/", async (req, res) => {
    try {
        const founders = await Founder.find();
        res.json(founders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;