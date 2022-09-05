const form=document.querySelector("form");
const button=document.querySelector("button");


button.addEventListener("click",function(e){
  e.preventDefault();


  const input=document.querySelector("#product");
  const number=document.querySelector("#qty");

  const li=document.createElement('li');
  const list=document.querySelector("#list");
  const span=document.createElement('span');


  span.append(number.value);
  span.append(input.value);


  list.append(span);
  list.append(li);
  clear(input,number)
})

function clear(input,number){
    input.value="";
    number.value="";
}
