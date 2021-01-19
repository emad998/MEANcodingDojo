const express = require("express");

const path = require("path");

const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');






const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quoting_dojo', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
    name:  { type: String, required: [true, 'name is required'], minlength: 3},
    phrase: { type: String, required: [true, 'phrase is required'], minlength: 7 }
}, {timestamps: true });

   // create an object that contains methods for mongoose to interface with MongoDB
const Quote = mongoose.model('Quote', UserSchema);
app.use(session({secret: 'codingdojorocks'})); 
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {  
        res.render('index')
    });

app.post('/quotes', (req, res) => {
        const quote = new Quote();
        quote.name = req.body.userName;
        quote.phrase = req.body.sentence;
        quote.save()
          .then(newQuoteData => {console.log('quote created: ', newQuoteData); res.redirect('/quotes')})
          .catch(err => {
        console.log("We have an error!", err);
        // adjust the code below as needed to create a flash message with the tag and content you would like
        for (var key in err.errors) {
            req.flash('registration', err.errors[key].message);
        }
        res.redirect('/');
          });
      })
      

app.get('/quotes', (req, res) => {  
            Quote.find().sort({createdAt: 'descending'})
                .then(data => res.render("allQuotes", {quotes: data}))
                
                .catch(err => res.json(err));
        });





app.listen(8000, function() {
    console.log("listening on port 8000");
  })
