const express = require("express");

const path = require("path");

const app = express();
const bodyParser = require('body-parser');






const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/owl_dashboard', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 3},
    speed: { type: Number, required: true, min: 1 }
}, {timestamps: true });

   // create an object that contains methods for mongoose to interface with MongoDB
const Owl = mongoose.model('Owl', UserSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {  
        Owl.find()
            .then(data => res.render("index", {owls: data}))
            
            .catch(err => res.json(err));
    });

app.get('/owl/new', (req, res) => {  
            res.render('newOwl')
        });

app.get('/owl/:id', (req, res) => {
    Owl.findOne({_id: req.params.id})
    .then(owl => {
        res.render('owlInfo', {owl : owl})
    })
    .catch(err => res.json(err))
})

app.get('/edit', (req, res) => {  
        Owl.find()
            .then(data => res.render("edit", {owls: data}))
            
            .catch(err => res.json(err));
    });

app.get('/owl/edit/:name', (req, res) => {
        Owl.findOne({name: req.params.name})
        .then(owl => {
            res.render('owlEditing', {owl : owl})
        })
        .catch(err => res.json(err))
    })



app.post('/owls', (req, res) => {
        const owl = new Owl();
        owl.name = req.body.userName;
        owl.speed = req.body.fast;
        owl.save()
          .then(newOwlData => console.log('owl created: ', newOwlData))
          .catch(err => console.log(err));
         
        res.redirect('/');
      })
      

app.post('/owl/edit/:owlName', (req, res) => {
        Owl.updateOne({name: req.params.owlName}, {
            name: req.body.userName,
            speed: req.body.fast
        })
        .then(res.redirect('/'))
        .catch(err => res.json(err));
      })

app.get('/delete', (req, res) => {  
            Owl.find()
                .then(data => res.render("deleteOwl", {owls: data}))
                
                .catch(err => res.json(err));
        });

app.get('/owl/destroy/:id', (req, res) => {
           Owl.remove({_id: req.params.id})
           .then(res.redirect('/'))
           .catch(err => res.json(err))
          })


app.listen(8000, function() {
    console.log("listening on port 8000");
  })
