const mongoose = require('mongoose');

const mongoConnection =  mongoose.connect('mongodb://localhost/owl_dashboard', {useNewUrlParser: true});


module.exports = {
    mongoConnection: mongoConnection

}