function fun(){
    console.log("hello wordld");
}
fun();
//use es6function
let func=(name,dob)=>{
    console.log(name,dob);
}
func("abdullah","2-32-1023");

//another function;perenthensis can be avoide if there is single parameter
 let funcc=name=>{console.log(name)};
 funcc("abdullah");

//another way
 
let fu=name=>console.log(name);
 fu("rahman");

//another way

 let getsqrr=num=>{return num*num;};
console.log(getsqrr(4));

//another way

 let getsqr=num=>num*num;
 console.log(getsqr(4));

 //callback
 number=[1,2,3,4,5];
 number.forEach(function(item) {
    console.log(item)
 });

 let printall=(items)=>{
    console.log(items);
 }
 number.forEach(printall);

//another way

 let sqrall=(item)=>item*item;
 let sqrnum=number.map(function(item){
    return item*item;
 });
  console.log(sqrnum);

//another way

  var numbers=[2,4,6,8];
  let div=numbers.map(item=>item*item);
  console.log(div);
 
    /*string literals */
    
    /*array destructing */

    /*array destructing */
    let a;
    a=2;
    let b;
    b=10;
    [a,b]=[b,a];
    console.log(`a=${a}${b}`);

     /*object destructing */
     let man={
        fname:"abdur",
        lname:"rahman",
        dob:"3-4-2023"
     }
     let mann={fname,lname,dob}=man;
     console.log(fname,lname,dob);

    /*spread operator */
    let str="abdurrahman";
    let nstr=[...str];
    console.log(nstr);

    let women={
        fname:"raina",
        lname:"akt"
    }
    let newwomen={...women,dob:"34-44-2022"}
    console.log(newwomen);

    //

    let oh=["ads","eg"]
    let test=(fname,lname)=>{
        console.log(`${fname}  ${lname}`);
    }
    test(...oh);


     

