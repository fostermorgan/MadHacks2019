const MongoClient = require('mongodb').MongoClient; //bring in MongoClient object
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, connection){
    if(err) throw err;
    let db = connection.db("testdb"); //Uses database 'mydb'

    //CREATE COLLECTION IN DATABASE
    db.createCollection("customers", function(err, res){
        if(err) throw err;
        console.log("Collection created!");
    })
    connection.close();
})