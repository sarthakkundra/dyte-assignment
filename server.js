const express = require("express");
const connectDB = require('./config/db');
const shortURL = require("./models/shortURL");
const ShortUrl = require("./models/shortURL");
const UserModel = require('./models/userSchema')

const app = express();
connectDB();
app.listen(process.env.PORT || 3001);

app.use(require('body-parser').urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Homepage");
})

    app.post('/authenticate', async (req, res) => {
        console.log(`BE ${req.body}`);
        try {   
            const user = await UserModel.findOne({ id : req.body.id });
            if(!user){
                await UserModel.create({ id: req.body.id, name: req.body.name });
            }
            res.sendStatus(200);
        } catch (e) {
            console.error(e);
        }
    })

app.post('/shorten', async (req, res) => {
    console.log(req.body);
    try {
        const user = await UserModel.findOne({ id: req.body.id});
        if(!user){
            throw new Error("No user")
        }
        await ShortUrl.create({ fullURL: req.body.fullURL,  user: user})
    } catch (error) {
        console.error(error);
    }
})

app.get('/myUrls/:id', async (req, res) => {
console.log("Hi")
console.log(req.params.id)
    try {
        const user = await UserModel.findOne({ id: req.params.id })

        if(!user){
            throw new Error("No user");
        }
        const urls = await ShortUrl.find({ user })
        res.send(urls);
    } catch (e) {
        console.error(e);
    }
})

// app.get('/:shortUrl', async (req, res) => {
//     try {
//         const rv = await shortURL.findOne({ shortURL: req.params.ShortUrl });        
//     } catch (error) {
//         console.error(error)
//     }
      
//     if(rv === null) res.setStatus(404);
//     res.redirect(rv.fullURL);
// })