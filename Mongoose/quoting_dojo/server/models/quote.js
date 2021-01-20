const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:  { type: String, required: [true, 'name is required'], minlength: 3},
    phrase: { type: String, required: [true, 'phrase is required'], minlength: 7 }
}, {timestamps: true });

   // create an object that contains methods for mongoose to interface with MongoDB
const Quote = mongoose.model('Quote', UserSchema);


module.exports = {
    Quote: Quote,
    UserSchema: UserSchema


}