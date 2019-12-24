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

let save = (user,callback) => {
  
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Success');
  }
};



module.exports.save = save;