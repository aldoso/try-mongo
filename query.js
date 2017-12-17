var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) 
    throw err;
  var query = {
    address: "Highway 37"
  };
  var dbase = db.db("mydb");
  dbase.collection("customers").find(query).toArray(function(err, result) {
    if (err) 
      throw err;
    console.log(result);
    db.close();
  });
});
