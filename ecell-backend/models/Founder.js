const mongoose = require("mongoose");

const FounderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Founder", FounderSchema);