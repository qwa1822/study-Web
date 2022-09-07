const clock=document.querySelector(".js-clock");


let now=new Date();
let chris=new Date('2022-12-25');

let result=now.getTime()-chris.getTime();

//1000*60*60*24 <<  하루
let day=Math.floor(result/(1000*60*60*24));   //날짜계산
let hour=Math.floor((result%(1000*60*60*24)/(1000*60*60)))      //시간계산 
let minute=Math.floor((result%(1000*60*60)/(1000*60)))      //분계산
let second=Math.floor((result%(1000*60)/(1000)))      //초계산

console.log(day);
console.log(hour);
console.log(minute);
console.log(second);