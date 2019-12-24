const express = require('express');
let app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const getRepo = require('../helpers/github.js');

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var that = this;
  data.JSON.stringify({username: term})
  sucsses:function(result){
    that.setstate
    
  }
  $.ajax({
    url: "https://api.github.com/repos",
    jsonp: true,
    method: "POST",
    dataType: "json",
    success: function(res) {
      console.log(res)
    }
  });
  let username = req.body.username;
  
  var data = github.getReposByUsername(req.body.username,(data)=>{
    console.log(JSON.parse(data))
  })
  

  
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  $.ajax({
    url: "https://api.github.com/repos",
    jsonp: true,
    method: "GET",
    dataType: "json",
    success: function(res) {
      console.log(res)
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

