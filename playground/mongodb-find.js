const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
var db = client.db('TodoApp');
if(err){
  return console.log('unable to connect to the Mongo DB Server');
}
console.log('connected to the Mongo DB Server');

db.collection('Users').find({name:'dheeraj'}).toArray().then((docs)=>{
console.log(JSON.stringify(docs, undefined,2) );

},(err)=>{
  console.log('unable to fetch todos',err);
} )
client.close();
});
