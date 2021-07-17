const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        reqruired: true
    }
})

module.exports = mongoose.model("UserModel", userSchema); 