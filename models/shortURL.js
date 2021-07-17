const mongoose = require("mongoose");
const { nanoid } = require("nanoid");
const UserModel = require("./userSchema");

const shortURLSchema = new mongoose.Schema({
    fullURL: {
        type: String,
        required: true
    },
    shortURL: {
        type: String,
        required: true,
        default: nanoid
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
})

module.exports = mongoose.model("ShortUrl", shortURLSchema)