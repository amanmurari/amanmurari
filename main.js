window.location.href = "https://amanmurari.github.io/ams/";
console.log('Hello World!');
function ou(){
 document.querySelector('nav').style.display = 'block'
}
function cou() {
 document.querySelector('nav').style.display = 'none'
}

let name = "Aman Murari Singh"
var n=0

var interval = window.setInterval(()=>{
  document.querySelector(".left h1").innerHTML+=name[n]
  document.querySelector("#about .right h3").innerHTML+=name[n]
  n+=1
},500);
window.setTimeout(function(){
 clearInterval(interval);
},8500);
var an=0
var aboutus="I'm Aman Murari Singh, a passionate data scientist and web developer with a strong foundation in programming languages such as HTML, CSS, and JavaScript. With a strong aptitude for learning, I've completed various courses in web designing, marketing, and data science to stay ahead of the curve. My expertise lies in crafting user-centric experiences through intuitive web design, leveraging tools like HTML5, CSS3, and JavaScript. I'm also fascinated by the world of data science, where I've explored libraries like NumPy, pandas, and scikit-learn to extract insights from complex data sets. When I'm not coding or analyzing data, you can find me teaching,   fighting, or learning new skills. I believe that staying curious and adapting to new technologies is key to success in today's fast-paced tech landscape. **About My Journey** Throughout my academic journey, I've consistently achieved high academic grades, with a 81% in 10th standard and 87% in 12th standard. I've also completed various certification courses in web design, marketing, and data science to stay updated with the latest industry trends. **What Drives Me** As a data scientist and web developer, I'm driven by the pursuit of innovation, creativity, and collaboration. I'm committed to leveraging my skills to create impactful solutions that make a difference in people's lives."
var ainterval = window.setInterval(()=>{
  
  document.querySelector("#about .right h6").innerHTML+=aboutus[an]
  an+=1
},50);
window.setTimeout(function(){
 clearInterval(ainterval);
},(aboutus.length*50));


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

var uname  = document.getElementById("name")
var email  = document.getElementById("email")
var message  = document.getElementById("message")
var submit  = document.getElementById("submit")
submit.addEventListener("click",collect)
function collect(){
  if (uname.value==null || Number(uname.value)){
    window.alert("plese Enter Your correct name")
  }else if (email.value==null || Number(email.value)){
    window.alert("plese Enter Your correct email")
  }else if (message.value==null){
    window.alert("plese Enter Your message")
  }else{
    fetch('/path/to/resource.json', {
 method: 'POST',
 body: JSON.stringify({
 name: uname.value,
 email: email.value,
 message: message.value
 })})
.then((response) => {

 if (!response.status!=200) {
 alert("Request failed!");
 }
 
 return response.json();
 }).then((json) => {
   uname.value==null
   email.value==null
   message.value==null
 console.log(json);
 })
  
  console.log(uname.value,email.value,message.value)
}}
