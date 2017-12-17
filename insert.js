var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) 
    throw err;
  var myobj = {
    name: "Company Inc",
    address: "Highway 37"
  };
  var dbase = db.db("mydb");
  var col = dbase.collection("customers");
  col.insertOne(myobj, function(err, res) {
    if (err) 
      throw err;
    console.log("1 document inserted");
    db.close();
  });
});
