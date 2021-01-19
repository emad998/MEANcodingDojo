const express = require("express");

const path = require("path");

const app = express();
const bodyParser = require('body-parser');






const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/new_users', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
   })
   // create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {  
        User.find()
            .then(data => res.render("index", {users: data}))
            
            .catch(err => res.json(err));
    });

app.post('/users', (req, res) => {
        const user = new User();
        user.name = req.body.userName;
        user.age = req.body.age;
        user.save()
          .then(newUserData => console.log('user created: ', newUserData))
          .catch(err => console.log(err));
         
        res.redirect('/');
      })
      






app.listen(8000, function() {
    console.log("listening on port 8000");
  })
