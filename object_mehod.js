var person={
    fname:"abdulah",
    lname:"rahman",
    dob:"2,46,4",
    fullname:function(){
        return `${this.fname}${this.lname}`
    }
}
console.log(person.fullname());
console.log(person.fname);

//create class

class Person1{
   constructor(fname,lname,birth){
        this.firstname=fname;
        this.lastname=lname;
        this.dob=birth;
    }
   fullname(){console.log(this.firstname,this.lastname);}

}
var person2=new Person1("as","ronu","23-3-3333");
var person3=new Person1("abdullah","rahman","23-2-2022");

console.log(person2);
console.log(person3.fullname());
