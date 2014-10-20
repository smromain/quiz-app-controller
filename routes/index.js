var express = require('express');
var models = require('../models');
var Quiz = models.Quiz;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	Quiz.find(function(err, quizzes) {
		res.json(quizzes);
	});
});

router.post('/', function(req,res) {
	console.log(req.body);
	var question = req.body.question.q;
	var opts = [];
	var answer = req.body.question.answer;
	var difficulty = req.body.question.difficulty;
	for (var option in req.body.question.optionVal) {
	  		opts.push({'value': option});
	  };
	var quiz = new Quiz({'q': question, 'opts': opts, 'answer': answer, 'difficulty': difficulty});
	quiz.save(function(err, data){
		res.send();
	});
});

router.get('/delete/:QuizID', function(req, res){
    Quiz.findOneAndRemove({'_id': req.params.QuizID}, function () {
    	res.end();
    })
});

module.exports = router;
