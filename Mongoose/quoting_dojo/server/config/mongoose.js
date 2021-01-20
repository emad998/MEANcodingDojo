const mongoose = require('mongoose');

const mongoConnection =  mongoose.connect('mongodb://localhost/quoting_dojo', {useNewUrlParser: true});


module.exports = {
    mongoConnection: mongoConnection

}