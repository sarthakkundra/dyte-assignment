const express = require("express");
const connectDB = require('./config/db');
const shortURL = require("./models/shortURL");
const ShortUrl = require("./models/shortURL");

const app = express();
connectDB();
app.listen(process.env.PORT || 3001);

app.use(require('body-parser').urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Homepage");
})

app.post('/shorten', async (req, res) => {
    console.log(req.body);
    try {
        await shortURL.create({ fullURL: req.body.fullURL })
    } catch (error) {
        console.error(error);
    }

})

app.get('/:shortUrl', async (req, res) => {
    try {
        const rv = await shortURL.findOne({ shortURL: req.params.ShortUrl });        
    } catch (error) {
        console.error(error)
    }
      
    if(rv === null) res.setStatus(404);
    res.redirect(rv.fullURL);
})