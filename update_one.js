var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) 
    throw err;
  var myquery = {
    address: "Valley 345"
  };
  var newvalues = {
    name: "Mickey",
    address: "Canyon 123"
  };
  var dbase = db.db("mydb");
  dbase.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) 
      throw err;
    console.log("1 document updated");
    db.close();
  });
});
