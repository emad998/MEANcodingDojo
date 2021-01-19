const express = require("express");

const path = require("path");

const app = express();
const bodyParser = require('body-parser');






const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/message_board', {useNewUrlParser: true});

const CommentSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 3},
    ctext: { type: String, required: true, minlength: 5 }
}, {timestamps: true });


const MessageSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 3},
    text: { type: String, required: true, minlength: 5 },
    comments: [CommentSchema]
}, {timestamps: true });

   // create an object that contains methods for mongoose to interface with MongoDB
const Comment = mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message', MessageSchema);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {  
        Message.find()
            .then(data => {console.log(data); res.render("index", {messages: data})})
            
            .catch(err => res.json(err));
    });


app.post('/message', (req, res) => {
        const message = new Message();
        message.name = req.body.userName;
        message.text = req.body.mtext;
        message.save()
          .then(newMessageData => {console.log('owl created: ', newMessageData); res.redirect('/');})
          .catch(err => console.log(err));
         
        
      })

app.post('/comment/:messageId', (req, res) => {
        const comment = new Comment();
        comment.name = req.body.userName;
        comment.ctext = req.body.commentText;
        comment.save()
          .then(newComment => {
        // Message.updateOne({_id: req.params.messageId}, {
            // updateone don't run validators
        //     $push: {comments: newComment}
            Message.findById(req.params.messageId)
            .then(message => {
                message.comments.push(newComment);
                message.save();
                res.redirect('/')
            })
            .catch(err => res.json(err));
        })
        .catch(err => console.log(err));
            
      })
          
         
      


app.listen(8000, function() {
    console.log("listening on port 8000");
  })
