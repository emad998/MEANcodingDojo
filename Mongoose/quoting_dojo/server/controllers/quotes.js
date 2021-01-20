const mongoose = require('mongoose'),
toModels = require('../models/quote')


let   Quote = toModels.Quote


module.exports = {
    index: function(req, res) {
    	res.render('index')
    },
    create: function(req, res) {
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
    },
    allQuotes: function(req, res) {
    	 Quote.find().sort({createdAt: 'descending'})
                .then(data => res.render("allQuotes", {quotes: data}))
                
                .catch(err => res.json(err))
    }
};
