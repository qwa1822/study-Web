
function yell(msg){

  try{
  console.log(msg.toUpperCase().repeat(3));
  }
  catch(e)
  {
    console.log("please pass a string next time!");
  }
}