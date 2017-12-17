var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) 
    throw err;
  var dbase = db.db("mydb");
  dbase.collection("customers").find().limit(5).toArray(function(err, result) {
    if (err) 
      throw err;
    console.log(result);
    db.close();
  });
});
