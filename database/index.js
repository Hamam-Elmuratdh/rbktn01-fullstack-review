const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  owner : String,
  id : Number,
  ownerId : Number,
  login : String


});


let Repo = mongoose.model('Repo', repoSchema);

let save = (repo,callback) => {
  let data = new Repo(repo)
  return new Promise((resolve, rejection)=>{
    data.save((err,res) =>{
      if (err) {
          rejection(err);
      } else {
      resolve(res);
      }
    })
  })
  
  
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  
};



module.exports.save = save;