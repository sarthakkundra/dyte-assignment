const express = require("express");
const connectDB = require('./config/db');
const ShortUrl = require("./models/shortURL");

const app = express();
connectDB();
app.listen(process.env.PORT || 3001);

app.get('/', (req, res) => {
    res.send("Homepage");
})