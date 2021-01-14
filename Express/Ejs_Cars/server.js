const express = require("express");

const app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 

app.get('/', function(req, res){
    
    });

app.get('/cars', function(req, res){
    res.render('cars')
    });

app.get('/cats', function(req, res){
    res.render('cats')
    });

app.get('/form', function(req, res){
    res.render('form')
    });

app.listen(8000, function() {
    console.log("listening on port 8000");
  })