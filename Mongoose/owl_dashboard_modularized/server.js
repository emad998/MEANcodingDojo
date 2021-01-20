const express = require("express");

const path = require("path");

const app = express();
const bodyParser = require('body-parser');


const databaseConnection = require('./server/config/mongoose')
databaseConnection.mongoConnection;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 

require('./server/config/routes.js')(app)


app.listen(8000, function() {
    console.log("listening on port 8000");
  })
