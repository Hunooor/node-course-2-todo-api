//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mondoDB server');
    } else {
        console.log('Connected to the mongo server');
    }
    const db = client.db('TodoApp');
/*
    db.collection('Todos').insertOne({
        text:'something to do',
        completed: false
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert todo',err);
        }

        console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.collection('Users').insertOne({
        name: 'Huni',
        age: 23,
        location: 'Romania'
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert user',err);
        }
        console.log(result.ops);
    });*/

    client.close();
});