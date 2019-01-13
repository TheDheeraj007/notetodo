
function myFun() {
return function Person(name,age){
this.name=name;
this.age=age;
}
}


var Newperson = myFun();

var p1 = new Newperson('dheeraj','21');

console.log(p1);
