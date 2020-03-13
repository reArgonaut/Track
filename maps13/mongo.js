var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Adrian:adrian120@cluster0-lmrae.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, {
  useNewUrlParser: true,
        useUnifiedTopology: true 
  }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  query = {_id: '1'}
   dbo.collection("coordenadas").find(query).toArray(function(err, result) {
    if (err) throw err;
      console.log(result)
      var lati= result.latitud
    db.close();
  })
})