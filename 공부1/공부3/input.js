const logininput=document.querySelector("#login-form input");
const loginform=document.querySelector("#login-form");


const greeting=document.querySelector("#greeing");
const USER_KEY="username";
const classKey="hidden";
function show(event)
{
  event.preventDefault();
  const username=logininput.value;
  loginform.classList.add(classKey);
  

  localStorage.setItem(USER_KEY,username);
  


  greetingTest(username);


}


function greetingTest(username){
  greeting.innerText=`Hello ${username}`;
  greeting.classList.remove(classKey);
}



const change2=localStorage.getItem(USER_KEY);


if(change2===null){
  loginform.classList.remove(classKey);
  loginform.addEventListener("submit",show);
}else{
  greetingTest();
}