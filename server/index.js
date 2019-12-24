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
  let username = req.body.username;
  return new Promise ((resolve,reject)=>{
  db.find(username).then((data)=>{
    if (data.length === 0){
      res.send(data)
    }else{
      resolve(data)
    }
  }).then((username)=>{
    return helper.getReposByUsername({username})
  }).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    console.log(err)
  })


  })

 
  }
  

  
  var data = github.getReposByUsername(req.body.username,(data)=>{
    console.log(JSON.parse(data))
  })
  

  
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos





});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

