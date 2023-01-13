document.getElementById('btn').addEventListener("click",SONG);
   


function SONG(){
document.getElementById("srcresult").innerHTML='';
let song=document.getElementById("input").value;
fetch(`https://api.lyrics.ovh/suggest/${song}`)
.then(Response=>Response.json())
.then(data=>{

    //local to global 
    fetchdata=data;
    for(i=0;i<data.data.length;i++){
   let title=data.data[i].title
    let artist=data.data[i].artist.name
document.getElementById("srcresult").innerHTML+=`
<div>
<h3>${title}</h3>
<h5>${artist}</h5>
<a href="#lyrics"><button onclick="getlyrics(${i})">search lyrics</button></a>
</div>`;
if(i==6){
    break;
}

}});}
function getlyrics(index){
    const title=fetchdata.data[index].title;
    const artist=fetchdata.data[index].artist.name;

fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
.then(Response=>Response.json())
.then(data=>{
let lyrics=data.lyrics;

document.getElementById("lyrics").innerHTML=`${lyrics}`

})}