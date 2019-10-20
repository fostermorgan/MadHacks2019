const mongo = require('mongodb'); //require mongodb package
const MongoClient = require('mongodb').MongoClient; //bring in MongoClient object
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err,connection){
    if(err) throw err;
    let db = connection.db("mydb");
    db.collection("customers").find({}).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
    })
    connection.close();
})