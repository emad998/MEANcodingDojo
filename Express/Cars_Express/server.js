// Load the express module (Where do you think this comes from?)
const express = require("express");

const app = express();

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    });

app.get('/cats.html', function(req, res){
    res.sendFile(__dirname + '/cats.html');
    });


app.get('/cars.html', function(req, res){
    res.sendFile(__dirname + '/cars.html');
    });   

app.get('/form.html', function(req, res){
    res.sendFile(__dirname + '/form.html');
    });  

app.listen(8000, function() {
    console.log("listening on port 8000");
  })