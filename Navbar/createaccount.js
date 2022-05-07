
var email=JSON.parse(localStorage.getItem("emailid"));
console.log(email[0].email)
document.getElementById("your").innerText=email[email.length-1].email;


document.querySelector("form").addEventListener("submit",enteremailfunction);
var data=JSON.parse(localStorage.getItem("information"))||[];
function enteremailfunction(){
   event.preventDefault();
   var obj1={
       first:document.querySelector("#first").value,
       last:document.querySelector("#last").value,
       password:document.querySelector("#password").value
   }
   console.log(obj1)
   data.push(obj1);
   localStorage.setItem("information",JSON.stringify(data))
   window.location.href="welcome.html"
 
}