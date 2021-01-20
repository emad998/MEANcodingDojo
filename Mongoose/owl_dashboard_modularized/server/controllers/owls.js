const mongoose = require('mongoose'),
toModels = require('../models/owl')

let Owl = toModels.Owl

module.exports = {
    index: function(req, res) {
        Owl.find()
            .then(data => res.render("index", {owls: data}))
            
            .catch(err => res.json(err))
    },
    owlNewPage: function (req, res) {
        res.render('newOwl')

    },
    owlInfoPage: function (req, res) {
        Owl.findOne({_id: req.params.id})
    .then(owl => {
        res.render('owlInfo', {owl : owl})
    })
    .catch(err => res.json(err))
    },
    
    owlEditPage: function (req, res) {
        Owl.find()
            .then(data => res.render("edit", {owls: data}))
            
            .catch(err => res.json(err));
    },

    owlEditing: function (req, res) {
        Owl.findOne({name: req.params.name})
        .then(owl => {
            res.render('owlEditing', {owl : owl})
        })
        .catch(err => res.json(err))
    },

    owlCreate: function (req, res) {
        const owl = new Owl();
        owl.name = req.body.userName;
        owl.speed = req.body.fast;
        owl.save()
          .then(newOwlData => console.log('owl created: ', newOwlData))
          .catch(err => console.log(err));
         
        res.redirect('/');
    },
    

    owlEditing2: function (req, res) {
        Owl.updateOne({name: req.params.owlName}, {
            name: req.body.userName,
            speed: req.body.fast
        })
        .then(res.redirect('/'))
        .catch(err => res.json(err));

    },

    owlDestroyPage: function (req, res) {
        Owl.find()
                .then(data => res.render("deleteOwl", {owls: data}))
                
                .catch(err => res.json(err));


    },

    owlDestroy: function (req, res) {
        Owl.remove({_id: req.params.id})
           .then(res.redirect('/'))
           .catch(err => res.json(err))


    }
}