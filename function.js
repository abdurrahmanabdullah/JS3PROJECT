function say(){

    console.log("abdullah");
    console.log("i am learning js");
}
say();

//
function saysomething(fname,lname){
    console.log(`hello${fname}${lname}`);
}
let fastname="abdullah";
let lastname="sinthia";
saysomething(fastname,lastname);


var food=["cake","ice cream","chocolate"];
var numbers=[1,23,12,3];
//1st parameter ;item
//2nd parameter ;index
//3rd parameter ;while array

food.forEach(function(value){
    console.log(value)
})
    food.forEach(function(item,i,abc){
        console.log(`Index:${i}and item ${item}`)
console.log(abc);
    });


 //array  iteration using maping 
 var water =["juice","ice","fluid"];
 function  add(item){
    return `${item} is a water`;
 }
  let arr=water.map(add);
console.log(arr);

var number =[1,2,4,6];
let arrsqr=number.map(function(itemm){
    return itemm+itemm
})
console.log(arrsqr);

let today=new Date();
console.log(today);
today.getDay();
