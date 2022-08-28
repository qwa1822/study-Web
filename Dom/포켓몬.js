// "https://raw.githubusercontent.com/POkeAPI/sprites/master/sprites/pokemon/"



const all=document.querySelector("#container")
const baseURL="https://raw.githubusercontent.com/POkeAPI/sprites/master/sprites/pokemon/";

for(let i=0; i<=151; i++)
{

  const newImg=document.createElement("img");
  newImg.src=`${baseURL}${i}.png`;

  
  const container=document.createElement("div");
  const label=document.createElement("span");
 
  label.innerText=`#${i}`;
  container.classList.add("pokemon")

 
  container.appendChild(newImg);
  container.appendChild(label);
  all.appendChild(container);





}