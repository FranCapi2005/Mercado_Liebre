const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + "/public"));

app.listen(3030, () => {
    console.log(`Server is running on port ${3030}`);
});

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/register", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

app.get("/buys", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/buys.html"))
});

app.get("/sell", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/sell.html"))
});

app.get("/help", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/help.html"))
});

app.get("/offerts", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/offerts.html"))
});

app.get("/official-shops", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/official-shops.html"))
});

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/index.html"))
});

app.get("/search", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/search.html"))
});