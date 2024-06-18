console.log('Hello World!');
function ou(){
 document.querySelector('nav').style.display = 'block'
}
function cou() {
 document.querySelector('nav').style.display = 'none'
}

let name = "Aman Murari Singh"
for(i=0; i<name.length;i++){
  document.querySelector(".left h1").innerHTML+=name[i]
  setTimeout(()=>{
    console.log("ffgg")
  },3000)
}
var language  = document.getElementById("language")
var databse  = document.getElementById("database")
var tool  = document.getElementById("tool")
var table= document.querySelectorAll("aside .content table")
language.addEventListener("click",()=>{
  table[2].style.display="none";
  table[1].style.display="none";
  table[0].style.display=null
  language.className="click"
  databse.className=null
  tool.className=null
})
databse.addEventListener("click",()=>{
  table[0].style.display="none";
  table[2].style.display="none";
  table[1].style.display=null
  databse.className="click"
  language.className=null
  tool.className=null
})
tool.addEventListener("click",()=>{
  table[0].style.display="none";
  table[1].style.display="none";
  table[2].style.display=null
  tool.className="click"
  databse.className=null
  language.className=null
})