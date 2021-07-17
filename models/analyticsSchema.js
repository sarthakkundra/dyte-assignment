const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
    shortURL:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ShortUrl'
    },
    ipAddress: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("AnalyticsModel", analyticsSchema);