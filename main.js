const express = require('express');
const ejs = require('ejs');
const path = require("path")
const axios = require('axios');
const requestIp = require('request-ip');
const dotenv = require('dotenv')
dotenv.config()
const app = express()


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(requestIp.mw())

app.get("/", async(req, res) =>{
    res.render('main.ejs');
});
app.listen(3001);