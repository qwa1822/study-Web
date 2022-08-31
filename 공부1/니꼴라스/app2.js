const age=parseInt(prompt("How old are you?"))



if(isNaN(age) || age<0)
{
  console.log("Please Write a real position");
}
else if(age<18)
{
  console.log("You are too young");
}
else if(age>=18 && age<=25)
{
  console.log("~어른 말고 어린이~");
}
else if(age>=25 && age<=50)
{
  console.log("어른");
}
else if(age!==100){
  console.log("wow you are wise");
}


else{
  console.log("할배....");
} 


if((a&&b)|| (c&&d) || (x||w)){
  
}