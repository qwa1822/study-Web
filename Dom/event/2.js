


const btn3=document.querySelector('#v3');
btn3.addEventListener('click',function()
{
  alert("Hello");
})


function twist(){
  console.log("TWIST");
}

function shout()
{
  console.log("SHOUT");
}

const tas=document.querySelector('#tas');
tas.onclick=twist;

tas.addEventListener('click',twist,{once:true})
tas.addEventListener('click',shout,{once:true})



const button=document.querySelector("#hello");
const button2=document.querySelector("#goodbye");
button.addEventListener("click",function()
{
  console.log("hello");
})


button2.addEventListener("click",function(){
  
})

