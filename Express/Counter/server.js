// require express
const express = require("express");
// path module -- try to figure out where and why we use this
const path = require("path");
// create the express app
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const { request } = require("http");

app.use(session({secret: 'codingdojorocks'})); 
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view

app.get('/', function(req, res) {
    if (req.session.counter) {
        req.session.counter += 1;
        counter = req.session.counter
        
    } else {
        var counter = 1;
        req.session.counter = counter;
    }
    
 res.render("index", {counter: counter});
})
// post route for adding a user


app.post('/pluscounter', function (req, res){
     
    req.session.counter += 1;
    
   
    res.redirect('/');
});


app.post('/reset', function (req, res){
     
    req.session.destroy()
    
   
    res.redirect('/');
});

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
