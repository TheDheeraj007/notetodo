const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
var db = client.db('TodoApp');
if(err){
  return console.log('unable to connect to the Mongo DB Server');
}
console.log('connected to the Mongo DB Server');

// db.collection('Users').deleteMany({name:'dheeraj'}).then((result)=>{
//
// console.log(result);
//
// } );
// db.collection('Users').deleteOne({name:'dheeraj'}).then((result)=>{
//
// console.log(result);
//
// } )
db.collection('Users').findOneAndDelete(new ObjectID('5c19cf0098f316b4f06e8de9')).then((result)=>{
  console.log(result)
})


client.close();
});
