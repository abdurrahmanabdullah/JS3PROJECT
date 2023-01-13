let Form=document.querySelector("#form");
let Booklistt=document.querySelector("#booklist");

//Book class
class Book{
constructor(title,author,isbn){
     this.title=title;
     this.author=author;
     this.isbn=isbn;
}
}


//Table class
class Table{ 
    addbooklist(book){
       //console.log(book); 
    let list=document.querySelector('#booklist');
    let row=document.createElement('tr');
    row.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#'class="delete">x</a></td>`
    list.appendChild(row);
  
    }
    //declear clear field function
    clearfield(){
        document.querySelector("#title").value=" ";
        document.querySelector("#author").value=" ";
        document.querySelector("#isbn").value=" ";
    }
    showAlert(message,className){
        let div=document.createElement('div');
        div.className=`alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container=document.querySelector('.container');
        let form=document.querySelector('#form');
        container.insertBefore(div,form);


        // DECLEAR SetTimeout function
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },2000);
    
    }
    deletebook(target){
    if(target.hasAttribute('href')){
        target.parentElement.parentElement.remove();
        let  table=new Table();
        table.showAlert('Book Remove!','success');
    }
    }
}

//local storage class



//form event listener
Form.addEventListener('submit',newbook);

//booklist add event listener
Booklistt.addEventListener('click',RemoveBook);

//define book class
function newbook(e){
let title=document.querySelector("#title").value,
author=document.querySelector("#author").value,
isbn=document.querySelector("#isbn").value;

// declear table object

let  table=new Table();
if(title===''|| author===''||isbn===''){

    //alert("all field");
table.showAlert("please fill all the field!","error");
}
else{

let book =new Book(title,author,isbn);

//call table function

table.addbooklist(book);

//function of clear field
table.clearfield();



//alert success
table.showAlert("Book added!","success");

}

e.preventDefault();
}


//function of remove book
function RemoveBook(e){
    let  table=new Table();
    table.deletebook(e.target);
    e.preventDefault();
 }