const h2=document.querySelector("h2");




function resziedme()
{
  let c=window.innerWidth;
  if(c<=600)
  {
    document.body.style.background="red";
  }
  else if(c<=800)
  {
    document.body.style.background="blue";
  }
  else if(c<=1100)
  {
    document.body.style.background="pink";
  }
}


window.addEventListener('resize',resziedme);