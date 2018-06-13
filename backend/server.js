var express = require('express');
var bodyParser = require('body-parser');
var backendClasses = require('./backendClasses');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true);
  
      // Pass to next layer of middleware
      next();
});

app.get('/', function(req, res) {
  var jsonString = {"response": "Reddit is running!"};
  res.send(JSON.stringify(jsonString));
});

app.post('/login', function(req, res) {
  var userName = req.body.userName;
  var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA';
  var jsonToken = {"token": token};
  res.send(JSON.stringify(jsonToken));
})

app.get('/r/:subreddit', function(req, res){
  var subreddit = req.params.subreddit;
  var jsonString = {"response": 'You are currently in ' + subreddit};
  res.send(JSON.stringify(jsonString));
})

app.post('/update-score', function(req, res){
  // var actualScore = 100;
  // var upOrDown = req.body.upOrDownVote;
  // var newScore = upOrDown === "up" ? actualScore + 1 : actualScore - 1;
  // res.send('The new score is ' + newScore);

  res.send(JSON.stringify(req.body));
})

app.post('/new-article', function(req, res){
  res.send(JSON.stringify(req.body));
});

app.listen(3001);
console.log('Listening on port 3001...');