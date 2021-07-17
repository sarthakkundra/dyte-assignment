const express = require("express");
const cors = require('cors');
const connectDB = require('./config/db');
const ShortUrl = require("./models/shortURL");
const UserModel = require('./models/userSchema')
const AnalyticsModel = require('./models/analyticsSchema');

const app = express();
connectDB();
app.listen(process.env.PORT || 3001);

app.use(require('body-parser').urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Homepage");
})

    app.post('/authenticate', async (req, res) => {
        console.log(req.body);
        console.log("authenticate")
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
    console.log("shorten")
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

app.delete('/myUrls/:shortUrl', async (req, res) => {
    try {
        await ShortUrl.findOneAndDelete({ shortURL: req.params.shortUrl})
        res.status(200);
    } catch (e) {
        console.error(e)
    }
})

app.get('/myUrls/:id', async (req, res) => {

    try {
        console.log(req.params.id)
        const user = await UserModel.findOne({ id: req.params.id })

        if(!user){
            throw new Error("No user");
        }
        let urls = await ShortUrl.find({ user })

        let rv = []
        let unique, totalViews
        for(let url of urls){
            console.log(url)
            totalViews = await AnalyticsModel.countDocuments({ shortURL: url})
            unique = await AnalyticsModel.find({ shortURL : url }).select({ ipAddress: 1})
            console.log("unique", unique)
            console.log("Total views", totalViews)
            let mutableUrlRes = JSON.parse(JSON.stringify(url));
            mutableUrlRes.unique = unique
            rv.push(mutableUrlRes)
            console.log(url.analytics)
        }

        console.log("unique", unique)
        // urls.forEach(async (url, idx) => {
        //     url.analytics = await AnalyticsModel.countDocuments({ shortURL: url})
        // })
        res.send(rv);
    } catch (e) {
        console.error(e);
    }
})


app.get('/:shortUrl', async (req, res) => {
    
    let rv = null;
    try {
        console.log(req.params.shortUrl)
        rv = await ShortUrl.findOne({ shortURL: req.params.shortUrl }); 
        console.log(rv);
        await AnalyticsModel.create({ shortURL: rv._id, ipAddress: req.ip})       
    } catch (error) {
        console.error(error)
    }
      
    if(rv === null) res.sendStatus(404);
    res.send(rv.fullURL);

})