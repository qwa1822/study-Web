const uservalue=document.querySelector("#greeing");
const form=document.querySelector("#login-form input");

const classListadd="hidden";
function change(event){
  event.preventDefualt();
  const usercc=form.value;
  form.classList.add(classListadd);

  localStorage.setItem("username",usercc);

  getgreeting(usercc);
  
}

function getgreeting(uservalue){
  uservalue.innerText=`Hello ${uservalue}`;
  uservalue.classList.remove(classListadd);
}

const check=localStorage.getItem("username");


if(check===null)
{
  form.classList.remove(classListadd);
  form.addEventListener("submit",change)
}
else{
  getgreeting();
}