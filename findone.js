var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) 
    throw err;
  var dbase = db.db("mydb");
  dbase.collection("customers").findOne({}, function(err, result) {
    if (err) 
      throw err;
    console.log(result.name);
    db.close();
  });
});
