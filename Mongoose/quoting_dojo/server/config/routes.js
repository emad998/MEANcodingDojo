const Quotes = require('../controllers/quotes')


module.exports = function(app){
app.get('/', (req, res) => {  
        Quotes.index(req, res)
    });

app.post('/quotes', (req, res) => {
        Quotes.create(req, res)
      })
      

app.get('/quotes', (req, res) => {  
           Quotes.allQuotes(req, res)
        });

}