const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const shortURLSchema = new mongoose.Schema({
    fullURL: {
        type: String,
        required: true
    },
    shortURL: {
        type: String,
        required: true,
        default: nanoid
    }
})

module.exports = mongoose.model("ShortUrl", shortURLSchema)