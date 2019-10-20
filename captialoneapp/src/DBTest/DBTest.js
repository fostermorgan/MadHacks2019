const MongoClient = require('mongodb').MongoClient; //bring in MongoClient object
let url = "mongodb://localhost:27017/testdb";

MongoClient.connect(url, function(err, connection){
    if(err) throw err;
    console.log("Database created!");
    connection.close();
})

