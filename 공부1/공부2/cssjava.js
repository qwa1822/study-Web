const h1=document.querySelector("div.hello:first-child h1");



function handleMouseEnter(){
  const currentcolor=h1.style.color;
  let newColor;
    if(currentcolor==="blue")
    {
      newColor="red";
    }
    else{
      newColor="blue";
    }
    
    h1.style.color=newColor;
}


h1.addEventListener("click",handleMouseEnter)