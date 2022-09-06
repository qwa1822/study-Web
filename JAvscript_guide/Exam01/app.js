let currentResult=0
let result=3;

const btn=document.querySelector(".plus");
const userInput=document.querySelector(".user_input");

let logEntries=[];



function calculateResult(calculationType)
{
  const enteredNumber=getUserNumberInput();
  const initalResult=currentResult;

  if(calculateResult==='add'){
    currentResult+=enteredNumber;
  }
}


// This is a comment!
//  Another Line
// This is a function that extracts the user input from the input field

function getUserNumberInput()
{
  return parseInt(userInput.value);
}


//Generates and writes calculation log
function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
  const calcDescription=`${resultBeforeCalc} ${operator} ${calcNumber}`
  outputResult(currentResult,calcDescription);  //from vender file
}




function add(){
  const enteredNumber=getUserNumberInput();
  const calcDescription=`${currentResult} + ${parseInt(userInput.value)}`;
   result=currentResult+parseInt(userInput.value);
   const logEnry={
    operation:'ADD',
   };
   outPutResult(currentResult,calcDescription);
  logEntries.push(enteredNumber);
  console.log();
}


function subtract(){
  const enteredNumber=getUserNumberInput();
  const calcDescription=`${currentResult} - ${parseInt(userInput.value)}`;
   result=currentResult+parseInt(userInput.value);
   outPutResult(currentResult,calcDescription);
}


function multiply(){
  const enteredNumber=getUserNumberInput();
  const calcDescription=`${currentResult} * ${parseInt(userInput.value)}`;
   result=currentResult+parseInt(userInput.value);
   outPutResult(currentResult,calcDescription);
}

function divide(){
  const enteredNumber=getUserNumberInput();
  const calcDescription=`${currentResult} / ${parseInt(userInput.value)}`;
   result=currentResult+parseInt(userInput.value);
   outPutResult(currentResult,calcDescription);
}


btn.addEventListener('click',add)