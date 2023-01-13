//inheritence 

class Human{
    constructor(fname,lname){
        this.firstname=fname;
        this.lastname=lname;

    }
    greeting(){
        return `hello${this.firstname}${this.lastname}!`;
    }
}
class customer extends Human{
    constructor(fname,lname,phone,membership){
        super(fname,lname);
    this.phone=phone;
    this.membership=membership;
}
}
var person=new Human("abdullah","rahman");
console.log(person);
console.log(person.greeting());

let customer1=new customer("sanra","rahman","039844","23");
console.log(customer1);

//static function

class  man{
    constructor(fname,lname){
        this.firstname=fname;
        this.lastname=lname;

    }
    greeting(){
        console.log(`hello${this.firstname}${this.lastname}!`);
    }
    static test(){
        console.log("i am static");
    }
}
var man1=new man("tasnim","rahman");

console.log(man1.greeting());
//static method k class theke call korte hoi
console.log(man.test())