const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
const db = client.db('TodoApp');

if(err){
  return console.log('Unable to connect to MongoDB server');
}
console.log('Connect to MongoDB server')

db.collection('Users').insertOne({
  name:"raj",
age:25,
location:"india"
},(err, result)=>{
if(err){
  return console.log('unable to insert todo', err);
}

console.log(JSON.stringify(result.ops,undefined,2));
});


client.close();
})
