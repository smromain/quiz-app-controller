var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quiz');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var Quiz; 
var Schema = mongoose.Schema;

var quizSchema = new Schema({
 q: String,
 opts: Array,
 answer: String,
 difficulty: Number
});

Quiz = mongoose.model('Quiz', quizSchema),


module.exports = {
    Quiz: Quiz
};