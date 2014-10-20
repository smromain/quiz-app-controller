models = require('./models'); 
var Quiz = models.Quiz;

var mongoose = require('mongoose');
console.log("Inserting data");

var quiz = Quiz.create({q: "Who is the best ping pong player at FSA?", opts: [{ 'value': "Mike"} , { 'value': "Eddie"} , {'value' : "Nimit"} , { 'value': "Patrick"}], 
                   answer: "Nimit", difficulty: 10});

var quiz = Quiz.create({q: "Which robot name was chanted during Lego Mindstorms?", opts: [{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}], 
                   answer: 'noHope.js', difficulty: 7});

var quiz = Quiz.create({q: "Out of the following frontend frameworks, which framework is most rails-like", opts: [{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value' : 'Backbone.js'} , { 'value': 'Meteor.js'}], 
                   answer: 'Ember.js', difficulty: 2});

var quiz = Quiz.create({q: "Which project used a local data store?", opts: [{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value' : 'WikiWalker'} , { 'value': 'WikiStack'}], 
                   answer: 'Twitter.js', difficulty: 1});


console.log("Finished inserting data");
console.log("Control-C to quit");