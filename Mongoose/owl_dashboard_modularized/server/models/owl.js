const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 3},
    speed: { type: Number, required: true, min: 1 }
}, {timestamps: true });

   // create an object that contains methods for mongoose to interface with MongoDB
const Owl = mongoose.model('Owl', UserSchema);

module.exports = {
    Owl: Owl,
    UserSchema: UserSchema


}