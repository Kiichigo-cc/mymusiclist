var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var fs = require('fs');

var Handlebars = require('handlebars');

Handlebars.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});

var port = process.env.PORT || 3000;

var albumData = require('./database.json');
var usersData = require('./userdata.json');
var currentUser = -1

app.engine('handlebars', exphbs.engine({
    defaultLayout: "main"
}))
app.set('view engine', 'handlebars')
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get(['/', '/index.html'], function (req, res, next) {
    res.status(200).render('index', {
        album: albumData
    })
});

app.get(['/add'], function (req, res, next) {
    res.status(200).render('add', {
        album: albumData
    })
});

app.get(['/list'], function (req, res, next) {
    var userData = [];

    var loadalbums = [];
    for (var i = 0; i < usersData.length; i++) {
        if (currentUser == usersData[i]["userId"]) {
            loadalbums = usersData[i]["albumList"]
        }
    }
    for (var i = 0; i < loadalbums.length; i++) {
        userData.push(albumData[loadalbums[i]])
    }
    res.status(200).render('listpage', {
        album: userData
    })
});

app.post(['/list/mypage'], function (req, res){
    console.log("list request made")
    console.log(req.body)
    var username = (req.body["username"])
    var password = (req.body["password"])
    console.log(username)
    console.log(password)
    for (var i = 0; i < usersData.length; i++) {
        if (usersData[i]["username"] == username && usersData[i]["password"] == password) {
            currentUser = i
        }
    }

    res.status(200).send("Done");
});

app.post(['/add/addalbum'], function (req, res){
    console.log("add request made")
    console.log(req.body)
    
    var addData = req.body[0]["index"]

    var json = usersData
    json[currentUser]["albumList"].push(addData)
    var stringifiedjson = JSON.stringify(json)
    
    fs.writeFile('userdata.json', stringifiedjson, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("success")
        }
    })

    res.status(200).send("Done");
});

app.post(['/list/logincheck'], function (req, res){
    console.log("checking login")
    if (currentUser < 0) {
        res.send("0");
    }
    else {
        res.send("1");
    }
});

app.get('*', function (req, res) {
    res.status(404).render('404');
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});