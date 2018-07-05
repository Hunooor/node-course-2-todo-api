//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mondoDB server');
    } else {
        console.log('Connected to the mongo server');
    }
    const db = client.db('TodoApp');
    /*
    db.collection('Todos').find({
        _id: new ObjectID('5b3e07c3a8374120acb1e9b7')
    }).toArray().then((docs)=>{
        console.log('todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to fetch todos');
    });*/
    db.collection('Users').find({ name: 'Huni' }).toArray().then((docs) => {
        console.log(JSON.stringify(docs,undefined,2));
    })
    client.close();
});