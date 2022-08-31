

const title=document.querySelector(".hello h1")


function changeColor()
{
  title.style.backgroundColor="red";
}

function windowResize()
{
  document.body.style.backgroundColor="tomato";
}


function handleWindowCopy()
{
  alert("Copierr");
}



title.addEventListener("click",changeColor)

window.addEventListener("resize",windowResize);
window.addEventListener("copy",handleWindowCopy)