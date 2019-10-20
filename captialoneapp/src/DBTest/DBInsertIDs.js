const mongo = require('mongodb'); //require mongodb package
const MongoClient = require('mongodb').MongoClient; //bring in MongoClient object
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err,connection){
    if(err) throw err;
    let db = connection.db("mydb");
    let newProducts = [
        { _id: 1, name: "Chocolate"},
        { _id: 2, name: "Lemon"},
        { _id: 3, name: "Vanilla"}
    ];
    db.collection("products").insertMany(newProducts, function(err, res){
        if(err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        console.log(res);
    })
    
    connection.close();
})