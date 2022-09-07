const clockTitle = document.querySelector(".js-clock");

const getDDay=()=>{
const setDate=new Date("2022-12-25");
const setDay=setDate.getDate();



const now=new Date();


const distance=setDate.getTime()-now.getTime();

const day=Math.floor(distance/(1000*60*60*24));
const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes=Math.floor((distance%(1000*60*60)/(1000*60)));
const seconds=Math.floor((distance%(1000*60)/1000));






clockTitle.innerText=`
${day}: ${hours}: ${minutes}: ${seconds}`;
}
const init=()=>{
  getDDay();
  setInterval(getDDay,1000);
}
init();