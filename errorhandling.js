
 console.log("before  error")
 try{
 undefined.test();
 }catch(err){
 console.log(err)
 }
 finally{
     console.log("i am inside finally");
 }
 console.log("after error");
 
 // user define error handling
 
 var a=2;
 try{
     if(a>20)throw "too big";
     else if(a<12)throw "too small";
 }
 catch(er){
     console.log(er)
 }