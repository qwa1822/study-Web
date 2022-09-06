let currentResult=0
let result=3;

const btn=document.querySelector(".plus");
const userInput=document.querySelector(".user_input");

// This is a comment!
//  Another Line
// This is a function that extracts the user input from the input field

function getUserNumberInput()
{
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
  const calcDescription=`${resultBeforeCalc} ${operator} ${calcNumber}`
  outputResult(currentResult,calcDescription);
}



function add(){
  const enteredNumber=getUserNumberInput();
  const calcDescription=`${currentResult} + ${parseInt(userInput.value)}`;
   result=currentResult+parseInt(userInput.value);
   outPutResult(currentResult,calcDescription);

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