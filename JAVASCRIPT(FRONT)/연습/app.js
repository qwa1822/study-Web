function myFn(x){
  return x+100;
}

function sum(a,b,...args){
  let s=0;

  for(let i=0; i<arguments.length; i++){
    s+=arguments[i];
  }

  return s;
}

const sumV2=(a,b,...args)=>{
  let s=0;

  for(let i=0; i<arguments.length; i++){
    s+=arguments[i];
  }

  return s;
}


const ten=(x)=>100+x;

ten(10);




const result=myFn(10);
const abcSum=sum(10,20,30,40,50);

console.log(abcSum);


const myFunV2=function()
{
  return 100;
}



myFunV2();
myFunV2.call(null,10,20,30);
myFunV2.apply(null,[10,20,30]);


function* gen(){
  yield 10;
  yield 20;
  return 30;
}
const g=gen();


g.next();
g.next();
g.next();

async function myTask(){

}