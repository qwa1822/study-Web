const btn=document.querySelector("#v2");

btn.onclick=function()
{
  console.log("You Click me!");
  console.log("I hope it worked");
}


function scream(){
console.log("AAAAAHHH");
console.log("stop Touching me!");
}
btn.onmouseenter=scream;



document.querySelector('h1').onclick=()=>{
  alert("you clicked me!")
}