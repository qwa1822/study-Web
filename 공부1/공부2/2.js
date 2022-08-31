const title=document.querySelector("div.hello:first-child h1")

function heeloTItleClick(){
  title.style.color="blue";
}

function handleMouseE()
{
  title.innerText="Mouse is here!"
}

function handleMouseLeave()
{
  title.innerText="Mouse is gone!";
}

title.addEventListener("click",heeloTItleClick)
title.addEventListener("mouseenter",handleMouseE)
title.addEventListener("mouseleave",handleMouseLeave)