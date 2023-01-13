let form=document.querySelector("#taskform");
let taskinput=document.querySelector("#task");
let tasklist=document.querySelector('ul');
let clr=document.querySelector("#clrbtn");
let filter=document.querySelector("#taskfilter");

//define event listener
 form.addEventListener('submit',addtask);
 tasklist.addEventListener('click',remove);
 clr.addEventListener('click',cleartask);
 filter.addEventListener('keyup',filtertask);
 document.addEventListener('DOMContentLoaded',gettask);


//define function
function addtask(e){
    if(taskinput.value===''){
        alert('add a task');
    }
    else{
        let li=document.createElement('li');
        li.appendChild(document.createTextNode(taskinput.value+''));
        tasklist.appendChild(li);

// store  in local storage

storeTaskInLocalStorage(taskinput.value);

        taskinput.value='';
        let link=document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML="x";
        li.appendChild(link);
    }
    e.preventDefault();
}


//define  remove function
function remove(e){
    if(e.target.hasAttribute("href")){
        if(confirm("are u sure")){
            le=e.target.parentElement;
            le.remove();

}}}

//define clear function 
 function cleartask(e){
    tasklist.innerHTML='';
localStorage.clear();
 }
 //define filter task
 function  filtertask(e){
    let text=e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task=>{
        let item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!=-1){
      task.style.display='block';
        }
        else{
            task.style.display='none';

        }
    });

 }

 //define store in local storage function 
 function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
 }




 //define dom  function
 function gettask(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task=>{ let li=document.createElement('li');
    li.appendChild(document.createTextNode(task+''));
    tasklist.appendChild(li);


    taskinput.value='';
    let link=document.createElement('a');
    link.setAttribute('href','#');
    link.innerHTML="x";
    li.appendChild(link);});
}