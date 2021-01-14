const express = require("express");

const app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 

app.get('/', function(req, res){
    
    });

app.get("/cats", function (request, response){
        
    response.render('cats');
    })

    app.get("/cat1", function (request, response){

        let food = 'Spaghetti';
        let age = 3;
        let sleeping_spots = ['under the bed', 'in a sunbeam'];
        
        response.render('cat1', {food: food, age: age, sleeping_spots: sleeping_spots});
        })

    app.get("/cat2", function (request, response){

            let food = 'Shawerma';
            let age = 5;
            let sleeping_spots = ['under the attic', 'under the sun'];
            
            response.render('cat2', {food: food, age: age, sleeping_spots: sleeping_spots});
        })

        
    app.get("/cat3", function (request, response){

                let food = 'meat';
                let age = 1;
                let sleeping_spots = ['under the bed', 'in a moon'];
                
                response.render('cat3', {food: food, age: age, sleeping_spots: sleeping_spots});
        })
    

app.listen(8000, function() {
    console.log("listening on port 8000");
  })